export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home"),
    meta: {
      layout: "marketing"
    }
  }
];
