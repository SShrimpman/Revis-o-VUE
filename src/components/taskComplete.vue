<template>
    <div class="flex justify-center">
        <div class="border p-5 w-3/6">
            <div class="grid grid-cols-2">
                <div class="p-4">
                    Tasks ({{this.count}} / {{getCount}})
                </div>
                <div class="flex justify-center gap-2">
                    <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="home">Home</button>
                    <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="incomplete">Incomplete</button>
                    <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="completed">Completed</button>
                    <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="create">Create</button>
                </div>
            </div>
            <div class="border my-3 p-4">
                    <div v-for="(item, idx) in getTasksComplete" class="grid grid-cols-2 m-2">
                        <div class="flex flex-start m-2">
                            <input class="accent-blue-500 m-2" name="option" type="radio" @click="selected(idx)">
                            <label>{{item.description}}</label>
                        </div>
                        <div class="flex justify-end">
                            <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="details(item)">Details</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { taskStore } from '../store/taskStore'
export default {
    setup(){
        const taskStoreT = taskStore()
        return {taskStoreT}
    },
    data() {
        return {
            count : 0,
            option : null,
        };
    },
    computed:{
        ...mapState(taskStore,['getTasksComplete','getCount']),
    },
    methods: {
        home() {
            this.$router.push({ name: "List" });
        },
        create() {
            this.$router.push({ name: "Create" });
        },
        completed() {
            this.$router.push({ name: 'Completed' });
        },
        incomplete() {
            this.$router.push({ name: 'Incomplete' });
        },
        selected(idx){
            this.count = idx = 1
        },
        details(item) {
            this.$router.push({ name: "Details", params:{ id: item.id, description:item.description, status:item.status, data:item.data }});
        },
    },
}
</script>