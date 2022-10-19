import { v4 as uuidv4 } from 'uuid'
import { defineStore } from 'pinia';

export const taskStore = defineStore('taskStore', {
    state: () => {
        return {
            tasks: [],
            taskEdit:[],
            count:0
        }
    },
    getters: {
        getTasks: (state) => state.tasks,
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