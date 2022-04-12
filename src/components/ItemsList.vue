<template>
  <main class="products-list">
    <vue-topprogress ref="topProgress" color="#7bae73"></vue-topprogress>
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
import { vueTopprogress } from "vue-top-progress";
import { eventHub } from "@/plugins/EventHub";
import ProductItem from "@/components/ProductItem.vue";
import { SORTER } from "@/utils/sortHelper.js";
export default {
  name: "ItemsList",
  components: { ProductItem, vueTopprogress },
  data() {
    return {};
  },
  mounted() {
    eventHub.$on("beforeRequest", this.topProgressStart);
    eventHub.$on("requestError", this.topProgressFail);
    eventHub.$on("afterResponse", this.topProgressDone);
    eventHub.$on("responseError", this.topProgressFail);
  },
  beforeDestroy() {
    eventHub.$off("beforeRequest", this.topProgressStart);
    eventHub.$off("requestError", this.topProgressFail);
    eventHub.$off("afterResponse", this.topProgressDone);
    eventHub.$off("responseError", this.topProgressFail);
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
      sorting: (state) => state.sorting,
    }),
    productsList: function () {
      return this.sorting
        ? [...this.products].sort(SORTER[this.sorting])
        : this.products;
    },
  },
  methods: {
    deleteItem(id) {
      const idx = this.products.findIndex((el) => el.id === id);
      if (idx !== -1) {
        this.$store.dispatch("delItem", { id });
      }
    },
    topProgressStart() {
      this.$refs.topProgress.start();
    },
    topProgressDone() {
      this.$refs.topProgress.done();
    },
    topProgressFail() {
      this.$refs.topProgress.fail();
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
