import Vue from "vue";
import Vuex from "vuex";
import { instance as api } from "@/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    sorting: null,
  },
  getters: {
    getProductsAmount: (state) => state.products.length,
  },
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts;
    },
    addProductsItem(state, newItem) {
      state.products.push(newItem);
    },
    delProductsItem(state, itemId) {
      const idx = state.products.findIndex((el) => el.id === itemId);
      if (idx !== -1) {
        state.products.splice(idx, 1);
      }
    },
    setProductsSorting(state, newSorting) {
      state.sorting = newSorting;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        let res = await api.get("/api/catalog/");
        if (res.data) {
          commit("setProducts", res.data);
        }
      } catch (err) {
        console.error("FAIL: get products list => " + err);
      }
    },
    async delItem({ commit }, payload) {
      try {
        let res = await api.delete("/api/catalog/" + payload.id);
        const { success } = res.data;
        if (success) {
          commit("delProductsItem", payload.id);
        }
      } catch (err) {
        console.error("FAIL: del from catalog => " + err);
      }
    },
    async addItem({ commit }, payload) {
      const newItem = {
        ...payload.newItem,
        id: this.state.products.length
          ? this.state.products[this.state.products.length - 1].id + 1
          : 1,
      };
      try {
        let res = await api.post("/api/catalog/", newItem);
        const { success } = res.data;
        if (success) {
          commit("addProductsItem", newItem);
        }
      } catch (err) {
        console.error("FAIL: add to catalog => " + err);
      }
    },
    setSorting({ commit }, payload) {
      commit("setProductsSorting", payload.sorting);
    },
  },
  modules: {},
});
