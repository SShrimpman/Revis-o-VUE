<template>
    <form @submit.prevent="onSubmitHandler($event)">
        <div class="flex justify-center h-48">
            <div class="grid grid-cols-2 border p-4 w-3/6">
                <div class="grid content-start">
                    <input class="h-7 p-1 m-2" type="text" placeholder="Description of Task" v-model="addTask.description">
                    <div class="flex flex-start m-2">
                        <label class="m-1" for="completed">Completed?</label>
                        <input class="accent-red-500 m-1" type="radio" value="To Conclude" v-model="addTask.status">
                        <input class="accent-blue-500" type="radio" value="Completed" v-model="addTask.status">
                    </div>
                </div>
                <div class="flex justify-end items-end gap-2">
                    <button type="reset" class="bg-red-500 hover:bg-red-700 text-white w-20 h-8 rounded" @click="cancel">Cancel</button>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white w-20 h-8 rounded">Save</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import addTask  from '../models/addTask'
import {taskStore} from '../store/taskStore';

export default {
    setup(){
        const taskStoreT = taskStore()
        return {taskStoreT}
    },
    data() {
        return {
            addTask: new addTask(),
        };
    },
    computed:{
        getTasks(){
            return this.taskStoreT.getTasks;
        }
    },
    methods: {
        onSubmitHandler(e){
                if(this.addTask.id){
                    this.taskStoreT.update(this.addTask)
                    this.$router.push({ name: "List" });
                }
                else{
                    this.taskStoreT.add(this.addTask)
                    this.$router.push({ name: "List" });
                }
        },
        cancel() {
            this.$router.push({ name: "List" });
        }
    },
}
</script>