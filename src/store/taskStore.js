import { v4 as uuidv4 } from 'uuid'
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const taskStore = defineStore('taskStore', {
    state: () => {
        return {
            tasks: useStorage('tasks',[]),
            taskEdit: useStorage('taskEdit',[]),
            count: useStorage('count',0)
        }
    },
    getters: {
        getTasks: (state) => state.tasks,
        getTasksIncomplete: (state) => state.tasks.filter(task => task.status == "To Conclude"),
        getTasksComplete: (state) => state.tasks.filter(task => task.status == "Completed"),
        getCount: (state) => state.count
    },
    actions: {
        add(task) {
            try {
                task.id = uuidv4();
                this.tasks.push(task);
                this.count++
                
            } catch (error) {
                throw error
            }
        },
        update(task) {
            try {
                this.tasks[this.tasks.findIndex(taskFind => taskFind.id == task.id)] = task
                this.taskEdit = task;
            } catch (error) {
                throw error
            }
        },
        delete(id){
            try {
                id = uuidv4();
                this.tasks.splice(id,1);
                if(this.count>0){
                    this.count--
                }
            } catch (error) {
                throw error
            }
        },
        cleanEdit(){
            this.taskEdit=[]
        }
    },
})