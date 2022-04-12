<template>
  <main class="products-list">
    <ProductItem
      v-for="product in productsList"
      :key="product.id"
      :item="product"
      @delete="deleteItem"
    />
  </main>
</template>

<script>
import { mapState } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import { SORTER } from "@/utils/sortHelper.js";
export default {
  name: "ItemsList",
  components: { ProductItem },
  data() {
    return {
      sortedProducts: null,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    productsList: function () {
      return this.sortedProducts ? this.sortedProducts : this.products;
    },
  },
  mounted() {
    this.$eventHub.$on("sort", this.sortItems);
  },
  beforeDestroy() {
    this.$eventHub.$off("sort", this.sortItems);
  },
  methods: {
    deleteItem(id) {
      const idx = this.products.findIndex((el) => el.id === id);
      if (idx !== -1) {
        this.$store.dispatch("delItem", { id });
      }
    },
    sortItems(comparator) {
      if (comparator === "default") {
        this.sortedProducts = this.products;
      }
      this.sortedProducts = [...this.products].sort(SORTER[comparator]);
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
