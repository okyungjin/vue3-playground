import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [{
        productId: 1,
        productName: 'iPhone 12',
        category: 'Apple',
      }],
    };
  },
  getters: {
    cartCount: (state) => state.cart.length,
  },
  mutations: {
    incremenet(state) {
      state.count += 1;
    },
  },
  actions: {
    asyncIncrement(context) {
      context.commit('increment');
    },
  },
});

export default store;
