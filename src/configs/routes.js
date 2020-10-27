import { lazy } from "react";

export default {

  Home : {
    path: '/',
    exact : true,
    component : lazy( () => import('../pages/Home'))
  },
  AddPost : {
    path: '/addpost',
    exact : true,
    component : lazy( () => import('../pages/Post'))
  },

  Needroom : {
    path: '/needroom',
    exact : true,
    component : lazy( () => import('../pages/Needroom'))
  },

  Haveroom : {
    path: '/haveroom',
    exact : true,
    component : lazy( () => import('../pages/Haveroom'))
  },
  
  Login : {
    path: '/login',
    exact : true,
    component : lazy( () => import('../pages/Login'))
  },
  Register : {
    path: '/register',
    exact : true,
    component : lazy( () => import('../pages/Register'))
  },
  
  // Register2 : {
  //   path: '/register2',
  //   exact : true,
  //   component : lazy( () => import('../pages/Register2'))
  // },
  // Register3 : {
  //   path: '/register3',
  //   exact : true,
  //   component : lazy( () => import('../pages/Register3'))
  // },
  // Register4 : {
  //   path: '/register4',
  //   exact : true,
  //   component : lazy( () => import('../pages/Register4'))
  // },

  Account : {
    path: '/account',
    exact : true,
    component : lazy( () => import('../pages/Account'))
  },

  Seepost : {
    path: '/seepost/:id',
    exact : true,
    component : lazy( () => import('../pages/Seepost'))
  },
  SeeNeedpost : {
    path: '/seeneedpost:id',
    exact : true,
    component : lazy( () => import('../pages/SeeNeedpost'))
  }

}