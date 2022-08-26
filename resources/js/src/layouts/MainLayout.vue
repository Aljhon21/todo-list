<template>
    <div class="min-h-full">
        <nav-bar />
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
