import shop from '@/api/shop'

const state = {
  all: [],
  count: 0
}

const actions = {
  addToCart ({commit}, product) {
    commit('add_to_cart', product.id)
  },
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit('recieve_products', products)
    })
  }
}

const mutations = {
  recieve_products (state, products) {
    console.log('Vuex state iterator: ' + state.count++)
    state.all = products
  },
  add_to_cart (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

const getters = {
  allProducts (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
