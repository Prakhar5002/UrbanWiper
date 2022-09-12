import {CommonActions} from '@react-navigation/native';
import CONFIGS from '@configs';

let navigator;
let onLogout;
let cachedNavigationRoutes = [];
let cachedNavigationParams = [];

function navigate(routeName, params) {
  if (!navigator) {
    // if _navigator is unavailble, cache the calls for now
    // they will be fired when setTopLevelNavigator is set
    cachedNavigationRoutes.push(routeName);
    cachedNavigationParams.push(params);
    return;
  }
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
  // once _navigator exists, dispatch navigate actions (in order) for
  // for anything that tried to navigate before _navigator was set
  if (cachedNavigationRoutes.length > 0) {
    for (let i = 0; i < cachedNavigationRoutes.length; i += 1) {
      const route = cachedNavigationRoutes[i];
      const params = cachedNavigationParams[i];
      navigate(route, params);
    }

    // clear the caches
    cachedNavigationRoutes = [];
    cachedNavigationParams = [];
  }
}

function goBack() {
  navigator.dispatch(CommonActions.goBack());
}

function resetTo(routeName, params, index = 0) {
  navigator.dispatch(
    CommonActions.reset({
      index,
      routes: [{name: routeName, params}],
    }),
  );
}

const IntroductionNextRoute = fromRoute => {
  // switch (fromRoute) {
  //   case SIGNUP_PROFILE:
  //     if (CONFIGS.ENABLE_CAREINSTITUTION) {
  //       return CAREINSTITUTION_SETUP_START_SCREEN;
  //     }
  //     if (CONFIGS.ENABLE_COMMUNITY) {
  //       return COMMUNITY_SCREEN;
  //     }
  //     if (CONFIGS.ENV === 'adhday') {
  //       return MY_MEDICATION_INTRO;
  //     }
  //     return GDPR_SCREEN;
  //   case CREATE_PROFILE:
  //     return GDPR_SCREEN;
  //   case CAREINSTITUTION_SETUP_START_SCREEN:
  //     return GDPR_SCREEN;
  //   case GDPR_SCREEN:
  //     return SAFETY;
  //   case SAFETY_SCREEN: {
  //     if (CONFIGS.ONESIGNAL_APP_ID) {
  //       return PUSH_NOTIFICATION;
  //     }
  //     return MAIN_APPNAV;
  //   }
  //   default:
  //     break;
  // }
  // return MAIN_APPNAV;
};

export default {
  navigate,
  resetTo,
  setTopLevelNavigator,
  goBack,
  IntroductionNextRoute,
};
