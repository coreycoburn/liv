export default [
  {
    path: "/maps",
    name: "maps",
    component: () => import("@/pages/maps/Index"),
    children: [
      {
        path: "vector",
        name: "vectorMap",
        component: () => import("@/pages/maps/Vector")
      },
      {
        path: "google",
        name: "googleMap",
        component: () => import("@/pages/maps/Google")
      }
    ]
  }
];
