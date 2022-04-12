import Vue from "vue";
import Vuex from "vuex";
import { instance as api } from "@/request";

Vue.use(Vuex);

const URL_PRODUCTS =
  "https://raw.githubusercontent.com/gitEllE-if/frontTest2/main/products.json";

export default new Vuex.Store({
  state: {
    products: [],
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
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        let res = await api.get(URL_PRODUCTS);
        if (res?.status == 200 && res.data) {
          commit("setProducts", res.data);
        }
      } catch (err) {
        console.warn("FAIL - load products: " + err);
      }
    },
    delItem({ commit }, payload) {
      commit("delProductsItem", payload.id);
    },
    addItem({ commit }, payload) {
      const newItem = {
        ...payload.newItem,
        id: this.state.products.length
          ? this.state.products[this.state.products.length - 1].id + 1
          : 1,
      };
      commit("addProductsItem", newItem);
    },
  },
  modules: {},
});
