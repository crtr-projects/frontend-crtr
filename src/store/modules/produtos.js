// store/modules/produtos.js

const state = {
    produtos: [],
  };
  
  const getters = {
    getProdutos: (state) => state.produtos,
  };
  
  const mutations = {
    SET_PRODUTOS(state, produtos) {
      state.produtos = produtos;
    },
  };
  
  const actions = {
    atualizarProdutos({ commit }, produtos) {
      commit('SET_PRODUTOS', produtos);
    },
  };
  
  export default {
    namespaced: true, // Adicione isso se você quiser usar o namespace para evitar conflitos de nomes
    state,
    getters,
    mutations,
    actions,
  };
  