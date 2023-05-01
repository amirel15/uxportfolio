<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <h1 class="text-6xl font-thin text-slate-100">Home</h1>
    <a href="https://www.figma.com/proto/l8V6cRlk60L8a3G67cxilV/Hospital-App-New?type=design&node-id=1-5&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A5">Project1</a>
    <a href="https://xd.adobe.com/view/7fc72af6-924a-4514-8821-eda9b6afda2a-2a94/screen/62ab517b-027f-4130-99eb-40ade417f71b?fullscreen">Project2</a>
    <a href="https://www.figma.com/proto/TWJBHuGDXQogNmww96Pmol/Lets-Make-Kids-Meals-HiFi?type=design&node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2">Project3</a>
  </main>
</template>