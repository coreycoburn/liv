export default [
  {
    path: "/maps",
    name: "maps",
    component: () => import("@/pages/maps/Index"),
    meta: {
      title: "Maps",
      icon: "map"
    }
    // children: [
    //   {
    //     path: "vector",
    //     name: "vectorMap",
    //     component: () => import("@/pages/maps/Vector"),
    //     meta: {
    //       title: "Vector Map"
    //     }
    //   },
    //   {
    //     path: "google",
    //     name: "googleMap",
    //     component: () => import("@/pages/maps/Google"),
    //     meta: {
    //       title: "Google Map"
    //     }
    //   }
    // ]
  }
];
