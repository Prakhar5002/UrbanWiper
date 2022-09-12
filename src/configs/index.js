import images from '@assets/images';
import Profile from '@features/profile';
import Home from '@features/home';

//To set the administration level for user
export const ADMINISTRATION_LEVEL = {
  LEVEL_1: 1,
  LEVEL_2: 2,
  LEVEL_3: 3,
  LEVEL_4: 4,
};

export const MAINTAB_OPTIONS_LEVEL1 = [
  {id: 1, title: 'Home', screen: Home, icon: images.home_icon},
  {id: 2, title: 'Services', screen: Home, icon: images.headphones_icon},
  {id: 3, title: 'Search', screen: Home, icon: images.search_icon},
  {id: 4, title: 'Profile', screen: Profile, icon: images.profile_male_icon},
];

export const MAINTAB_OPTIONS_LEVEL4 = [
  {id: 1, title: 'Home', screen: Home, icon: images.home_icon},
  {id: 3, title: 'Search', screen: Home, icon: images.search_icon},
  {id: 4, title: 'Profile', screen: Profile, icon: images.profile_male_icon},
];

export const HOME_HEADER_OPTIONS = [
  {id: 1, title: 'Notifications', icon: images.notification_icon},
];

export const PROFILE_HEADER_OPTIONS = [
  {id: 1, title: 'Notifications', icon: images.settings_filled_icon},
];

export const PROFILE_OPTIONS = [
  {id: 1, title: 'My Bookings', icon: images.facebook},
  {id: 2, title: 'Option', icon: images.me},
  {id: 3, title: 'Option', icon: images.facebook},
  {id: 4, title: 'Option', icon: images.google},
  {id: 5, title: 'Option', icon: images.facebook},
  {id: 6, title: 'Log out', icon: images.logout},
];
