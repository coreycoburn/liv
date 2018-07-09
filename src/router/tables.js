export default [
  {
    path: "/tables",
    name: "tables",
    component: () => import("@/pages/tables/Index"),
    children: [
      {
        path: "basic",
        name: "basicTable",
        component: () => import("@/pages/tables/Basic")
      },
      {
        path: "data",
        name: "dataTable",
        component: () => import("@/pages/tables/Data")
      }
    ]
  }
];
