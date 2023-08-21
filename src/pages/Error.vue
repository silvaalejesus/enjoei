<template>
  <div class="container">
    <div class="c-description">
      <h1>ué, não encontramos nadinha</h1>
      <span>que tal recomeçar do começo?</span>
    </div>
    <button>limpar busca</button>
    <img src="../assets/blank-slate.png" alt="error" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.c-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 16px 24px;
  background-color: var(--color-pink);
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: var(--font-weight-semi-bold);
}

img {
  width: 420px;
  height: auto;
}
</style>