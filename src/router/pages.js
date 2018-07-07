export default [
  {
    path: "/",
    name: "home",
    component: require("@/pages/Home").default, // load sync home
    meta: {
      layout: "marketing"
    }
  }
];
