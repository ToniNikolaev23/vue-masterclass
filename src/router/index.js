import Vue from "vue";
import Router from "vue-router";
import PageHome from "../pages/PageHome";
import PageThreadShow from "../pages/PageThreadShow";
import PageThreadCreate from '../pages/PageThreadCreate';
import ThreadEdit from '../pages/PageThreadEdit';
import Category from "../pages/PageCategory";
import Forum from "../pages/PageForum";
import Profile from '../pages/PageProfile';
import PageNotFound from "../pages/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome
    },
    {
      path: "/category/:id",
      name: "Category",
      component: Category,
      props: true
    },
    {
      path: "/forum/:id",
      name: "Forum",
      component: Forum,
      props: true
    },
    {
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: PageThreadCreate,
      props: true
    },
    {
      path: "/thread/:id",
      name: "PageThreadShow",
      component: PageThreadShow,
      props: true
    },
    {
      path: "/thread/:id/edit",
      name: "ThreadEdit",
      component: ThreadEdit,
      props: true
    },
    {
      path: "/me",
      name: "Profile",
      component: Profile,
      props: true
    },
    {
      path: "/me/edit",
      name: "ProfileEdit",
      component: Profile,
      props: {edit: true}
    },
    {
      path: "*",
      name: "NotFound",
      component: PageNotFound
    }
  ],
  mode: "history"
});
