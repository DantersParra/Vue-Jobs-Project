import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/components/views/HomeView.vue'
import JobsView from "@/components/views/JobsView.vue";
import AddJobView from "@/components/views/AddJobView.vue";
import JobView from "@/components/views/JobView.vue";
import JobEdit from "@/components/views/JobEdit.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/addjob',
            name: 'addjob',
            component: AddJobView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'editjob',
            component: JobEdit
        },
        {
            path: '/:catchAll(.*)',
            name: 'notfound',
            component: NotFound
        }
    ]
})

export default router