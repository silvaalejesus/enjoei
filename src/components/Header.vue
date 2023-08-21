<template>
  <header class="header">
    <img src="../assets/enjoei-logo.svg" alt="Logo" class="logo" />
  </header>
</template>

<script>
export default {
  props: {
    logoSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
  padding: 10px 0;
  height: 70px;
  width: 100%;
}

.logo {
  width: 30px;
  height: 30px;
}
</style>
