import characterApi from '@/api/characterPage';

export const mutationTypes = {
  getCardStart: '[card] Get card start',
  getCardSuccess: '[card] Get card success',
  getCardFailure: '[card] Get card failure',

  getPaginationStart: '[pagination] Get pagination start',
  getPaginationSuccess: '[pagination] Get pagination success',
  getPaginationFailure: '[pagination] Get pagination failure',
};

export const actionTypes = {
  getCard: '[card] Get card',
  getPagination: '[pagination] Get pagination',
};

export const characterPage = {
  state: () => ({
    cardData: null,
    isLoading: false,
    error: null,
    url: 'character',

    totalPages: null,
  }),
  getters: {},
  mutations: {
    [mutationTypes.getCardStart](state) {
      state.isLoading = true;
      state.cardData = null;
    },
    [mutationTypes.getCardSuccess](state, payload) {
      state.isLoading = false;
      state.cardData = payload;
    },
    [mutationTypes.getCardFailure](state) {
      state.isLoading = false;
    },
    [mutationTypes.getPaginationStart](state) {
      state.isLoading = true;
      state.totalPages = null;
    },
    [mutationTypes.getPaginationSuccess](state, payload) {
      state.isLoading = false;
      state.totalPages = payload;
    },
    [mutationTypes.getPaginationFailure]() {},
  },
  actions: {
    [actionTypes.getCard](context, apiUrl) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getCardStart, apiUrl);
        characterApi
          .getCard(apiUrl)
          .then((response) => {
            context.commit(mutationTypes.getCardSuccess, response.data.results);
            resolve(response.data.results);
          })
          .catch(() => {
            context.commit(mutationTypes.getCardFailure);
          });
      });
    },
    [actionTypes.getPagination](context, apiUrl) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getPaginationStart, apiUrl);
        characterApi
          .getPagination(apiUrl)
          .then((response) => {
            context.commit(
              mutationTypes.getPaginationSuccess,
              response.data.info.pages
            );
            context.commit(mutationTypes.getCardSuccess, response.data.results);

            resolve(response.data.info.pages);
          })
          .catch(() => {
            context.commit(mutationTypes.getPaginationFailure);
          });
      });
    },
  },
};
