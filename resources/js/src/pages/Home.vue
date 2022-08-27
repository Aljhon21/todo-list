<template>
    <main-layout>
        <item-filter :items="items"
            @filter-item="filterItems"
         />

        <div class="mt-6">
            <div class="bg-white box-content border-slate-50 max-w-lg p-4 border-2 mx-auto shadow-xl rounded-lg">
                <div class="flex justify-between mb-5">
                    <input v-model="item" type="text" placeholder="New Task" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 border-b-1 shadow outline-none focus:outline-none focus:ring w-full hover:ring"/>
                    <button class="mx-3 px-10 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm" @click="addNew" :disabled="loading" :class="!loading ? 'hover:bg-blue-400' : 'bg-gray-200'">
                        <svg v-if="loading" role="status" class="inline mr-3 w-4 h-4 text-blue-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        <div v-else>
                            Add
                        </div>
                    </button>
                </div>
                <transition-group tag="div" name="todo-list">
                    <item-list v-for="item in displayedItems" :key="item.id" :id="item.id" :item="item.item" :isComplete="!!item.isComplete"
                        @toogle-status="toogleStatus"
                        @delete-item="deleteItem"
                        @save-edit-item="saveEditItem"
                    />
                </transition-group>

            </div>
        </div>

    </main-layout>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import ItemFilter from '../components/ItemFilter.vue'
import ItemList from '../components/ItemList.vue'

const items = ref(null);
const item = ref('');
const filter = ref(null);
const loading = ref(false);


async function fetchData(){
    try {
        items.value = (await axios.get('api/list')).data
    } catch (err) {

    }
}

onMounted(() => {
    fetchData()
})

async function toogleStatus(id, isComplete){
    try {
        await axios.patch(`api/list/${id}`, {"isComplete": !isComplete, 'mode': 'status'})
        items.value.map(function(item){
            if (item.id == id) {
                item.isComplete = !item.isComplete
            }
            return item
        })
    } catch (err) {

    }
}

async function deleteItem(id){
    try {
        await axios.delete(`api/list/${id}`)
        items.value = items.value.filter(item => item.id !== id);
    } catch (err) {

    }
}

async function saveEditItem(id, newVale){
    try {
        await axios.patch(`api/list/${id}`, {"item": newVale, 'mode': 'item'})
        items.value.map(function(item){
            if (item.id == id) {
                item.item = newVale
            }
            return item
        })
    } catch (err) {

    }
}

async function addNew(){
    loading.value = true;
    try {
        if (item.value) {
            const result = (await axios.post('api/list', {'item': item.value})).data
            items.value = [...items.value, result]
            item.value = '';
        }
    } catch (err) {

    }
    loading.value = false;
}

const displayedItems = computed(() => {
    if (filter.value == "All") {
        return items.value
    } else if (filter.value == "Done"){
        return items.value.filter(item => item.isComplete == true)
    } else if (filter.value == "Undone"){
        return items.value.filter(item => item.isComplete == false)
    }
    return items.value
})

function filterItems(name){
    filter.value = name
}

</script>



<style lang="css">
    .todo-list-enter-from{
    opacity: 0;
    transform: translateX(-30px);
    }

    .todo-list-enter-active{
        transition: all 250ms ease-out;
    }

    .todo-list-enter-to{
        opacity: 1;
        transform: translateX(0);
    }

    .todo-list-leave-to{
    opacity: 0;
    transform: translateX(30px);
    }

    .todo-list-leave-active{
        transition: all 250ms ease-out;
    }

    .todo-list-leave-from{
        opacity: 1;
        transform: translateX(0);
    }
</style>
