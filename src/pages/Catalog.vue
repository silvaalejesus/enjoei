<template>
  <div>
    <Header />
    <div class="content">
      <div class="busca">
        <span v-if="quantityProducts != ''" class="quantityProduct"
          >{{ quantityProducts }} produtos encontrados</span
        >
        <Busca v-model="itemProduct" @click="fetchProduct" />
      </div>
      <ContainerProduct v-if="products">
        <ProductCard
          class="teste"
          v-for="(product, index) in products"
          :key="index"
          :imageId="product.image_public_id"
          :title="product.title"
          :path="product.context"
          :price="product.price.listed"
        />
      </ContainerProduct>
      <div v-else>
        <Error />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import vContainer from "@/components/container.vue";
import Busca from "@/components/Busca.vue";
import ProductCard from "@/components/product-card.vue";
import TagPrice from "@/components/TagPrice.vue";
import Error from "@/pages/Error.vue";
import axios from "axios";
import ContainerProduct from "@/components/ContainerProduct.vue";

export default {
  name: "Catalog",
  components: {
    Header,
    vContainer,
    Busca,
    ProductCard,
    Error,
    TagPrice,
    ContainerProduct,
  },
  data() {
    return {
      products: [],
      paginations: [],
      quantityProducts: "",
      itemProduct: ""
    };
  },
  watch: {
    page(value) {
      console.log("ovalue", value);
      this.getData(value);
    },
  },
  methods: {
    next(e) {
      this.page = this.pagination.next_page;
    },
    previous(e) {
      this.page = this.pagination.prev_page;
    },
    async fetchProduct(e) {
      await this.getData(this.page, this.itemProduct);
      this.quantityProducts = this.pagination.total_entries;
    },
    async requestData(page, itemProduct) {
      try {
        const response = await axios.get(
          `/api/v5/users/enjoei-pro/products/liked?page=${page}&query=${itemProduct}`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getData(page, itemProduct) {
      const response = await this.requestData(page, itemProduct);
      this.products = response.products;
      this.pagination = response.pagination;
      console.log(this.pagination.total_entries);
    },
  },
  mounted() {
    this.getData(this.page, this.itemProduct);
  },
};
</script>

<style scoped lang="scss">
.content {
  padding: 24px 52px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 600px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
  }
}

.busca {
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  span {
    font-weight: var(--font-weight-bold);
    @media (max-width: 600px) {
      display: none;
    }
  }
}
.quantityProduct {
  width: 100%;
}
.column {
  margin-top: 0;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
}

.grid {
  margin: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 24px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(
      2,
      1fr
    );
  }
}

.main-grid div {
  width: 216px;
  height: 216px;
  background-color: var(--color-gray-1);
}
</style>