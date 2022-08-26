<template>
    <div>
        <div class="bg-white box-content border-slate-50 h-8 max-w-lg p-4 border-2 flex justify-between mx-auto shadow-xl rounded-lg">

            <div class="flex items-center">
                <ClipboardListIcon class="h-6 w-6" aria-hidden="true" />
                <span class="px-2 text-stone-900 text-xl font-sans font-bold tracking-wide">To Do List</span>
            </div>

            <div class="flex justify-end items-center">
                <a class="p-2" href="">All</a>
                <a class="p-2" href="">Done</a>
                <a class="p-2" href="">Undone</a>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ClipboardListIcon } from '@heroicons/vue/outline'
</script>
