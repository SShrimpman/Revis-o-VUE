import  {createRouter , createWebHistory } from 'vue-router'
import CreateTask from '../components/CreateTask.vue'
import DetailsTask from '../components/DetailsTask.vue'
import taskIncomplete from '../components/TaskIncomplete.vue'
import taskComplete from '../components/TaskComplete.vue'
import List from '../components/List.vue'


const routes = [
    { path: '/', name: 'List', component: List },
    { path: '/create', name: 'Create', component: CreateTask },
    { path: '/incomplete', name: 'Incomplete', component: taskIncomplete },
    { path: '/completed', name: 'Completed', component: taskComplete },
    { path:'/details/:id/:description/:status/:data', name: 'Details', component: DetailsTask },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router