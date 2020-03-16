import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RegisterCont from "../views/RegisterCont.vue";
import MyProfile from "../views/MyProfile.vue";
import EditProfile from "../views/EditProfile.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function() {
      return import("../views/Home.vue");
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/my-profile",
    name: "MyProfile",
    component: MyProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/edit-profile/:property",
    name: "EditProfile",
    component: EditProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/register-cont",
    name: "RegisterCont",
    component: RegisterCont,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
