import images from '@assets/images';
import Profile from '@features/profile';

export const MAINTAB_OPTIONS_LEVEL1 = [
  {id: 1, title: 'Home', screen: Profile, icon: images.home_icon},
  {id: 2, title: 'Services', screen: Profile, icon: images.headphones_icon},
  {id: 3, title: 'Search', screen: Profile, icon: images.search_icon},
  {id: 4, title: 'Profile', screen: Profile, icon: images.profile_male_icon},
];

//Bottom tab options for Level 1 user
export const MAINTAB_OPTIONS_LEVEL2 = [
  {id: 1, title: 'Home', screen: Profile, icon: images.home_icon},
  {id: 3, title: 'Search', screen: Profile, icon: images.search_icon},
  {id: 4, title: 'Profile', screen: Profile, icon: images.profile_male_icon},
];
