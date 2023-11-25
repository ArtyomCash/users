import routing from './constants/route.const';
import Main from './components/main';
import UserPosts from "./containers/UserPosts";

export const publicRouteConfig = [
  {
    id: '1',
    path: routing.root,
    component: Main,
    exact: true,
  },
  {
    id: '2',
    path: routing.userId,
    component: UserPosts,
    exact: true,
  },
];
export const privateRouteConfig = [
  {
    id: '3',
    path: routing.root,
    component: Main,
    exact: true,
  },
];
