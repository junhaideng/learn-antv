import VueRouter from 'vue-router';

export default new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/chart"
        },
        {
            path: "/chart",
            name: "chart",
            component: () => import("../components/common/Base"),
            children: [
                {path: "/chart",
                    name: "home",
            component: () => import("../components/home/index")
                },{
                    path: "interval",
                    name: "interval",
                    component: () => import("../components/charts/Interval")
                },
                {
                    path: "point",
                    name: "point",
                    component: () => import("../components/charts/Point")
                },
                {
                    path: "line",
                    name: "line",
                    component: () => import("../components/charts/Line")
                }
            ]
        },

    ]

})