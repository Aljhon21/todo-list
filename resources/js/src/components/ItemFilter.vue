<template>
    <div>
        <div class="bg-white box-content border-slate-50 h-8 max-w-lg p-4 border-2 flex justify-between mx-auto shadow-xl rounded-lg">

            <div class="flex items-center">
                <ClipboardListIcon class="h-6 w-6" aria-hidden="true" />
                <span class="px-2 text-stone-900 text-xl font-sans font-bold tracking-wide">To Do List</span>
            </div>

            <div class="flex justify-end items-center">
                <button v-for="(btn, index) in filterButtons" :key="btn.name"
                    @click="filter(index, btn.name)"
                    :class="{'bg-slate-700 text-white rounded-lg' : btn.current}"
                    class="p-2 text-md font-serif font-bold items-center flex">{{ btn.name }}
                    <span class="ml-1 px-1 text-xs bg-blue-500 text-white" :class="btn.class">{{ btn.count }}</span>
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref, defineProps, computed, defineEmits } from 'vue'
import { ClipboardListIcon } from '@heroicons/vue/outline'

const props = defineProps({
    items : Array
})

const emits = defineEmits(['filter-item'])

const itemAll = computed(() => {
    const result = props.items ? props.items.length : 0
    return result
})

const itemDone = computed(() => {
    const result = props.items ? props.items.filter(item => item.isComplete == true).length : 0
    return result
})

const itemUndone = computed(() => {
    const result = props.items ? props.items.filter(item => item.isComplete == false).length : 0
    return result
})

const filterButtons = ref(
    [
        {name: 'All', class: 'bg-blue-500', count: itemAll, current: true},
        {name: 'Done', class: 'bg-green-500', count: itemDone, current: false},
        {name: 'Undone', class: 'bg-red-500', count: itemUndone, current: false}
    ])

function filter(index, name){
   filterButtons.value.map(function(button){
    button.current = false
    return button
   })

   filterButtons.value[index].current = true
   emits('filter-item', name)
}

</script>
