<template>
  <main class="products-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :item="product"
      @delete="deleteItem"
    />
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapState } from "vuex";
export default {
  name: "ItemsList",
  components: { ProductItem },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
  methods: {
    deleteItem(id) {
      const idx = this.products.findIndex((el) => el.id === id);
      if (idx !== -1) {
        this.$store.dispatch("delItem", { id });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 1439px) {
  .products-list {
    justify-content: space-evenly;
  }
}
</style>
