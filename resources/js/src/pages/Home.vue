<template>
    <main-layout>
        <item-filter />

        <div class="mt-6">
            <div class="bg-white box-content border-slate-50 max-w-lg p-4 border-2 mx-auto shadow-xl rounded-lg">
                <div class="flex justify-between mb-5">
                    <input type="text" placeholder="New Task" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 border-b-1 shadow outline-none focus:outline-none focus:ring w-full hover:ring"/>
                    <button class="hover:bg-blue-400 mx-3 px-10 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm">Add</button>
                </div>

                <item-list />
            </div>
        </div>

    </main-layout>
</template>

<script setup>

import MainLayout from '../layouts/MainLayout.vue'
import ItemFilter from '../components/ItemFilter.vue'
import ItemList from '../components/ItemList.vue'

</script>

