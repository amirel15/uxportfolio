<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<template>
    <div class="welcome"><b>Welcome to my Portfolio! 💻</b></div>
    <div class="body"><br/><br/>
    I'm still very new to this, so my project still have kinks that need to be worked out. But if you have the time,
      please feel free to look around and see what you think. Thanks! </div>   
</template>

<style scoped lang="postcss">
.welcome{
  @apply text-6xl font-thin text-slate-100 text-center;
}
.body{
  @apply text-4xl font-thin text-slate-100 text-center;
}
</style>