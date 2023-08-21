<template>
  <div class="container">
    <div class="grid">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>