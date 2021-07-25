//引入组件
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import MessageDetail from "../pages/MessageDetail.vue";
import { identifier } from "babel-types";
export default [
  //地址和组件的关系的建立
  {
    path: "/about",
    component: About
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home/news",
        component: News
      },
      {
        path: "/home/message",
        component: Message,
        children: [
          {
            path: "/home/message/detail/:id", //路由如何传参
            component: MessageDetail,
            //函数模式
            props: route => {
              id: route.params.id;
            }
          }
        ]
      },
      {
        path: "/home",
        redirect: "/home/news"
      }
    ]
  },
  {
    path: "/",
    redirect: "/about"
  }
];
