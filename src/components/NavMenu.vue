<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/project1">Project 1</RouterLink>
    <RouterLink to="/project2">Project 2</RouterLink>
    <RouterLink to="/project3">Project 3</RouterLink>

  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
