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
  }

}