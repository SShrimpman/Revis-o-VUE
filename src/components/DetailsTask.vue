<template>
    <div class="flex justify-center">
        <div class="border p-5 w-3/6">
            <div class="flex justify-end mt-4 gap-2">
                <button class="bg-blue-500 hover:bg-blue-700 w-20 h-8 rounded" @click="editTask">Edit</button>
                <button class="bg-red-500 hover:bg-red-700 w-20 h-8 rounded" @click="deleteTask">Delete</button>
            </div>
            <form >
                <div class="border my-3 p-4">
                    <input class="flex justify-start p-1 mb-3" type="text" v-model="$route.params.description">
                    <div class="flex">
                        <input class="flex justify-start accent-red-500 mx-1 mb-2" type="radio" value="To Conclude" v-model="$route.params.status">
                        <input class="flex justify-start accent-blue-500 mb-2" type="radio" value="Completed" v-model="$route.params.status">
                    </div>
                    <h1 class="flex justify-start">{{$route.params.data}}</h1>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { taskStore } from '../store/taskStore';
export default {
    setup(){
        const taskStoreT = taskStore()
        return { taskStoreT }
    },
    data(){
        updateTask : {}
    },
    methods: {
        editTask(){
            this.updateTask = {
                id : this.$route.params.id,
                description : this.$route.params.description,
                status : this.$route.params.status,
                data : this.$route.params.data
            }
            this.taskStoreT.update(this.updateTask)
            this.$router.push({ name: "List" });
        },
        deleteTask() {
            this.taskStoreT.delete(this.$route.params.id)
            this.$router.push({ name: "List" });
        }
    },
}
</script>