export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard/Index"),
    meta: {
      layout: "admin"
    },
    children: [
      {
        path: "ver1",
        name: "dashboard1",
        component: () => import("@/pages/dashboard/ver1"),
        meta: {
          layout: "admin"
        }
      }
    ]
  }
];
