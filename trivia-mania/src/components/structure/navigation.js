import { About } from '../../pages/About';
import { Account } from '../../pages/Account';
import Homepage from '../../pages/Homepage';
import Settings from '../../pages/Settings';
import Questions from '../../pages/Questions';
import FinalScreen from '../../pages/FinalScreen';
import Leaderboard from '../../pages/Leaderboard';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
// import { Private } from "../../pages/Private";

import { QuizStart } from "../../pages/QuizStart";

export const nav = [
  {
    path: '/',
    name: 'Home',
    element: <Homepage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: '/register',
    name: 'Register',
    element: <Register />,
    isMenu: false,
    isPrivate: false,
  },
  // {
  //   path: "/private",
  //   name: "Private",
  //   element: <Private />,
  //   isMenu: false,
  //   isPrivate: true,
  // },
  {
    path: '/account',
    name: 'Account',
    element: <Account />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    element: <Settings />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/quizstart",
    name: "QuizStart",
    element: <QuizStart />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: '/questions',
    name: 'Questions',
    element: <Questions />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: '/score',
    name: 'FinalScreen',
    element: <FinalScreen />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    element: <Leaderboard />,
    isMenu: true,
    isPrivate: true,
  },
];
