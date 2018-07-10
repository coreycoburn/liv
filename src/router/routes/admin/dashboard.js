export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard/Index"),
    meta: {
      title: "Dashboard",
      icon: "home",
      crumbs: "/My Foo/My Bar"
    },
    children: [
      {
        path: "dashboard1",
        name: "dashboard1",
        component: () => import("@/pages/dashboard/Dashboard1"),
        meta: {
          title: "Dashboard 1"
        }
      },
      {
        path: "dashboard2",
        name: "dashboard2",
        component: () => import("@/pages/dashboard/Dashboard2"),
        meta: {
          title: "Dashboard 2"
        }
      }
    ]
  }
];
