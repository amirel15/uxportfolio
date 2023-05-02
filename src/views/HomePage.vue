<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <h1 class="text-6xl font-thin text-slate-100">Home</h1>
  </main>
</template>