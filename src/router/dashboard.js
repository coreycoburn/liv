export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard/Index"),
    children: [
      {
        path: "dashboard1",
        name: "dashboard1",
        component: () => import("@/pages/dashboard/Dashboard1")
      },
      {
        path: "dashboard2",
        name: "dashboard2",
        component: () => import("@/pages/dashboard/Dashboard2")
      }
    ]
  }
];
