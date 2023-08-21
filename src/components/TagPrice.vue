<template>
  <div>
    <div v-if="discountPercentage" class="finalPrice">
      <div>
        <span class="discount">{{ discountPercentage }}% OFF</span>
      </div>
      <div>
        <span class="previous-price">{{ formattedPreviousPrice }}</span>
      </div>
    </div>
    <div v-if="originalPrice != currentPrice">
      <div class="current-price">{{ formattedCurrentPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
      validator: (value) =>
        Number.isInteger(value) && value >= 0 && value <= 100,
    },
  },
  computed: {
    formattedCurrentPrice() {
      return `R$${this.price.toFixed(2)}`;
    },
    formattedPreviousPrice() {
      const previousPrice = this.price / (1 - this.discount / 100);
      return `R$${previousPrice.toFixed(2)}`;
    },
    discountPercentage() {
      return this.discount > 0 ? this.discount : null;
    },
  },
};
</script>

<style>
.discount {
  color: var(--color-white);
  background-color: var(--color-pink);
  margin-right: 8px;
  border-radius: 2px;
  padding: 6px;
}

.previous-price {
  text-decoration: line-through;
  color: var(--color-gray-4);
}

.current-price {
  font-weight: bold;
  color: var(--color-pink);
}

.discountPercentage {
  background-color: var(--color-white);
}

.finalPrice {
  border: 1px solid black;
}
</style>
