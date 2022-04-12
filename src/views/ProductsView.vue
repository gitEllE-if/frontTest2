<template>
  <div class="container">
    <div class="page-top">
      <h1 class="g-title__h1 page-top__h1">Добавление товара</h1>
      <select class="page-top__select" v-model="sorter">
        <option value="null">По умолчанию</option>
        <option value="ascendingPrice">По возрастанию цены</option>
        <option value="descendingPrice">По убыванию цены</option>
        <option value="ascendingName">По наименованию</option>
      </select>
    </div>
    <div class="page-content">
      <ItemAdd />
      <ItemsList />
    </div>
  </div>
</template>

<script>
import ItemsList from "@/components/ItemsList.vue";
import ItemAdd from "@/components/ItemAdd.vue";

export default {
  name: "ProductsView",
  components: {
    ItemsList,
    ItemAdd,
  },
  data: () => {
    return {
      sorter: null,
    };
  },
  created() {
    this.$store.dispatch("loadProducts");
  },
  watch: {
    sorter: function () {
      this.$store.dispatch("setSorting", { sorting: this.sorter });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-top {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  &__select {
    border: none;
    outline: none;
    appearance: none;
    padding: 10px 32px 10px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    background-image: url("data:image/svg+xml;utf8,<svg fill='lightgray' height='8' viewBox='0 0 285 285' width='8' xmlns='http://www.w3.org/2000/svg'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 16px top 50%;
  }
}
.page-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 760px) {
  .page-top {
    &__h1 {
      margin-bottom: 24px;
    }
    flex-direction: column;
    align-items: center;
  }
  .page-content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
