import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CircleView from '@components/CircleView';
import {MAINTAB_OPTIONS_LEVEL1, MAINTAB_OPTIONS_LEVEL4} from '@configs';

function MyTabBar(props) {
  const {state, descriptors, navigation, items} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#DBDBDB'
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center', paddingVertical: 3, elevation: 4}}>
            <CircleView
              size={35}
              disabled={true}
              background="#B22222"
              source={items[index].icon}
              tintColor="white"
              diff={12}
            />
            <Text
              style={{
                color: isFocused ? '#B22222' : 'rgba(0,0,0,0.4)',
                marginTop: 5,
                fontSize: 13,
                fontWeight: '500'
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigationStack = createBottomTabNavigator();

const BottomTab = ({route}) => {
  const userCategoryId = route.params?.userCategoryId ?? 1;
  let tabbarConfig = MAINTAB_OPTIONS_LEVEL1;
  switch (userCategoryId) {
    case 1:
      tabbarConfig = MAINTAB_OPTIONS_LEVEL4;
      break;
    case 4:
      tabbarConfig = MAINTAB_OPTIONS_LEVEL1;
      break;
    default:
      break;
  }
  return (
    <TabNavigationStack.Navigator
      tabBar={props => <MyTabBar {...props} items={tabbarConfig} />}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {tabbarConfig.map(option => (
        <TabNavigationStack.Screen
          key={option.id}
          name={option.title}
          component={option.screen}
        />
      ))}
    </TabNavigationStack.Navigator>
  );
};

export default BottomTab;
