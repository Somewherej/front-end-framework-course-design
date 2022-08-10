import { createWebHistory, createRouter } from "vue-router";
import summarize from "@/views/summarizeVue.vue";
import about from "@/views/aboutVue.vue";
import admin from "@/views/adminVue.vue";
import graph from "@/views/graphVue.vue";
import table from "@/views/tableVue.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: summarize,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
    {
        path: "/admin",
        name: "admin",
        component: admin,
    },

    {
        path: "/graph",
        name: "graph",
        component: graph,
    },

    {
        path: "/table",
        name: "table",
        component: table,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
