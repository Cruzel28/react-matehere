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
  }

}