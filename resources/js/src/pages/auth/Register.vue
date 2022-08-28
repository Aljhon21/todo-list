<template>
    <div class="max-w-screen-md mx-auto my-10">
        <div class="flex justify-center">
            <div class="flex-1">
                <div class="border w-auto">
                    <div class="border p-4 font-bold bg-gray-800 text-white rounded-t-lg">Register</div>

                    <div class="p-4 bg-white rounded-b-lg">
                        <form class="w-10/12 p-4 w-full mx-auto" @submit.prevent="register" @keydown="form.onKeydown($event)">
                            <div class="w-full my-1 py-2 grid grid-cols-8">
                                <label for="Name" class="text-md font-bold col-start-1 col-span-2 flex items-center justify-start"> Name </label>
                                <input type="text" name="name" v-model="form.name" class="border-2 bg-white p-2 rounded-sm col-start-3 col-span-7" :class="form.errors.has('name') ? 'border-red-500' : 'border-gray-300'">
                                <has-error :form="form" field="name" class="px-2 col-start-3 col-span-7 text-red-500"/>
                            </div>
                            <div class="w-full my-1 py-2 grid grid-cols-8">
                                <label for="Email" class="text-md font-bold col-start-1 col-span-2 flex items-center justify-start"> Email </label>
                                <input type="email" name="email" v-model="form.email" class="border-2 bg-white p-2 rounded-sm col-start-3 col-span-7" :class="form.errors.has('email') ? 'border-red-500' : 'border-gray-300'">
                                <has-error :form="form" field="email" class="px-2 col-start-3 col-span-7 text-red-500"/>
                            </div>
                            <div class="w-full my-1 py-2 grid grid-cols-8">
                                <label for="Password" class="text-md font-bold col-start-1 col-span-2 flex items-center justify-start"> Password </label>
                                <input type="password" name="password" v-model="form.password" class="border-2 bg-white p-2 rounded-sm col-start-3 col-span-7" :class="form.errors.has('password') ? 'border-red-500' : 'border-gray-300'">
                                <has-error :form="form" field="password" class="px-2 col-start-3 col-span-7 text-red-500"/>
                            </div>
                            <div class="w-full my-1 py-2 grid grid-cols-8">
                                <label for="Password confirm" class="text-md font-bold col-start-1 col-span-2 flex items-center justify-start"> Confirm Password </label>
                                <input type="password" name="password_confirmation" v-model="form.password_confirmation" class="border-2 bg-white p-2 rounded-sm col-start-3 col-span-7" :class="form.errors.has('password_confirmation') ? 'border-red-500' : 'border-gray-300'">
                                <has-error :form="form" field="password_confirmation" class="px-2 col-start-3 col-span-7 text-red-500"/>
                            </div>

                            <div class="w-full my-1 py-2 grid grid-cols-8">
                                <div v-if="loading"  class="border-2 p-2 px-6 rounded-md text-white bg-blue-800 hover:bg-blue-600 md:col-start-4 md:col-span-2 col-span-2 col-start-3 pl-[40%]">
                                    <circle-svg class="w-6 h-6" />
                                </div>
                                <button v-else type="submit" class="border-2 p-2 rounded-md text-white text-md font-bold bg-blue-800 hover:bg-blue-600 md:col-start-4 md:col-span-2 col-span-3 col-start-3">Register</button>
                                <router-link :to="{name : 'login'}" class="border-2 p-2 rounded-md text-white text-md font-bold bg-green-800 hover:bg-green-600 col-start-6 col-span-2 w-fit"> Back </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'
import Form from 'vform'
import { HasError } from 'vform/src/components/tailwind'
import CircleSvg from '../../components/loading/CircleSvg.vue';

export default {
    components :{
        HasError,
        CircleSvg
    },
    data: () => ({
        form: new Form({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }),
        loading: false,
    }),
    methods : {
        async register() {
            this.loading = true;
            try {
                await this.form.post('/api/register')
                this.$router.push({name: 'login'})
            } catch (err) {
                console.log(err)
            }
            this.loading = false;
        }
    }
}
</script>
