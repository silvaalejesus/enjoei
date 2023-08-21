<template>
  <div class="container">
    <span :if="showClearText" class="clear-text" @click="clearSearch"
      >Limpar busca</span
    >
    <div class="c-input">
      <input
        type="text"
        class="input"
        :placeholder="placeholderText"
        v-model="item"
        @input="updateClearText"
        name="search"
      />
      <button type="submit" class="search-input" @click="() => $emit('click')">
        <img src="@/assets/search-icon.svg" alt="Logo" class="logo" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buscar",
  props: {
    placeholderText: {
      type: String,
      default: "buscar",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      searchText: "",
      showClearText: false,
    };
  },
  methods: {
    updateClearText() {
      this.showClearText = this.searchText !== "";
    },
    clearSearch() {
      this.searchText = "";
      this.showClearText = false;
    },
  },
  computed: {
    item: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        console.log("value: ", this.value);

        return this.value;
      },
    },
  },
};
</script>

<style scoped>
.logo {
  width: 25px;
  height: 25px;
  margin-left: 5px;
}

.input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-weight: var(--font-weight-semi-bold);
}
.c-input {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.container {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: flex-end;
}

.clear-text {
  color: var(--color-pink);
  cursor: pointer;
}

button {
  background-color: var(--color-white);
  cursor: pointer;
  border: none;
}
</style>
