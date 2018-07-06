export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard/Index"),
    children: [
      {
        path: "ver1",
        name: "dashboard1",
        component: () => import("@/pages/dashboard/ver1")
      }
    ]
  }
];
