<script setup>
import { ref } from 'vue'
const brand = ref("Ashley's UX Portfolio 💻")
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title"> {{ brand }}</span>
      </div>
      <div class="menu">
        <RouterLink to="/">     Home     </RouterLink>
        <RouterLink to="/project1">     Project 1     </RouterLink>
        <RouterLink to="/project2">     Project 2     </RouterLink>
        <RouterLink to="/project3">     Project 3     </RouterLink>
      </div>
    </div>    
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex h-20 items-center justify-between bg-blue-900 text-gray-200;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-2xl font-bold text-slate-200;
        }
      }
      .menu {
        @apply font-bold;
      }
      }
    

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
