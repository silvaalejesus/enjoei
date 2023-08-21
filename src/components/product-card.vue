<template>
  <a class="container" :href="href">
    <img :src="imageUrl" />
  </a>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

export default {
  props: {
    imageId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card),
    };
  },
  computed: {
    href() {
      return `https://www.enjoei.com.br/p/${this.path}`;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: block;
  min-width: calc(20% - 24px);
  margin-bottom: 24px;
}
</style>
