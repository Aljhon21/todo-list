<template>
    <div class="mb-2 px-3 py-4 w-full bg-white border border-black-200 shadow-md border-l-8 border-b-3 bg-slate-50" :class="props.isComplete ? 'todo-list-done' : 'todo-list'">
        <div class="flex justify-between">

            <h1 v-if="!isEdit" :class="props.isComplete ? 'text-gray-500 line-through' : 'text-black'">{{ props.item }}</h1>
            <input v-else type="text" class="bg-blue-50 border-2 border-blue-200 ring" v-model="item">
            <div>
                <button v-if="!isEdit" class="mx-1" @click="toogleStatus">
                    <XCircleIcon v-if="props.isComplete" class="hover:scale-125 ease-in-out duration-300 delay-75 text-red-800 h-6 w-6" aria-hidden="true" />
                    <ClipboardCheckIcon v-else class="hover:scale-125 ease-in-out duration-300 delay-75 text-green-800 h-6 w-6" aria-hidden="true" />
                </button>
                <button v-if="!props.isComplete" class="mx-1" @click="editItem">
                    <XCircleIcon v-if="isEdit" class="hover:scale-125 ease-in-out duration-300 delay-75 text-red-800 h-6 w-6" aria-hidden="true" />
                    <PencilIcon v-else-if="!props.isComplete || isEdit" class="hover:scale-125 ease-in-out duration-300 delay-75 text-blue-800 h-6 w-6" aria-hidden="true" />
                </button>

                <button v-if="!isEdit" class="mx-1" @click="deleteItem">
                    <TrashIcon class="hover:scale-125 ease-in-out duration-300 delay-75 text-red-800 h-6 w-6" aria-hidden="true" />
                </button>
                <!--edit button -->
                <button v-else class="mx-1" @click="saveEditItem">
                    <CheckCircleIcon class="hover:scale-125 ease-in-out duration-300 delay-75 text-green-800 h-6 w-6" aria-hidden="true" />
                </button>

            </div>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios'
import { ref, defineProps, defineEmits } from 'vue'
import { ClipboardCheckIcon, PencilIcon, TrashIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/vue/outline'

const isEdit = ref(false)
const item = ref('')
const inputItem = ref('')

const props = defineProps({
    id:{
        type: Number,
    },
    item: {
        type: String,
    },
    isComplete: {
        type: Boolean,
        default: false,
    }

})

const emit = defineEmits(['toogle-status', 'delete-item', 'save-edit-item'])

function toogleStatus(){
    emit('toogle-status', props.id, props.isComplete)
}

function deleteItem(){
    emit('delete-item', props.id)
}

function editItem(){
    isEdit.value = !isEdit.value

    if (isEdit.value) {
        item.value = props.item
    } else {
        item.value = ''
    }
}

function saveEditItem(){
    emit('save-edit-item', props.id, item.value)
    isEdit.value = !isEdit.value
}

</script>


<style lang="css" scoped>
    .todo-list{
        border-left-color: darkred;
    }

    .todo-list-done{
        border-left-color: darkgreen;
    }
</style>
