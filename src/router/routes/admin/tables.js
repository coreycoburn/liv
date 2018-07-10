export default [
  {
    path: "/tables",
    name: "tables",
    component: () => import("@/pages/tables/Index"),
    meta: {
      title: "Tables",
      icon: "table"
    },
    children: [
      {
        path: "basic",
        name: "basicTable",
        component: () => import("@/pages/tables/Basic"),
        meta: {
          title: "Basic Table"
        }
      },
      {
        path: "data",
        name: "dataTable",
        component: () => import("@/pages/tables/Data"),
        meta: {
          title: "Data Table"
        }
      }
    ]
  }
];
