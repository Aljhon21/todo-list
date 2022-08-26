<template>
    <div class="todo-list mb-2 px-3 py-4 w-full bg-white border border-black-200 shadow-md border-l-8 border-b-3 bg-slate-50">
        <div class="flex justify-between">
            <h1>hi</h1>

            <div>
                <button class="mx-1">
                    <ClipboardCheckIcon class="hover:scale-125 ease-in-out duration-300 delay-75 text-green-800 h-6 w-6" aria-hidden="true" />
                </button>
                <button class="mx-1">
                    <PencilIcon class="hover:scale-125 ease-in-out duration-300 delay-75 text-blue-800 h-6 w-6" aria-hidden="true" />
                </button>
                <button class="mx-1">
                    <TrashIcon class="hover:scale-125 ease-in-out duration-300 delay-75 text-red-800 h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ClipboardCheckIcon, PencilIcon, TrashIcon } from '@heroicons/vue/outline'
</script>


<style lang="css" scoped>
    .todo-list{
        border-left-color: darkred;
    }
</style>
