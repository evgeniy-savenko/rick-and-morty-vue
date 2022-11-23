import locationsApi from '@/api/locationsPage';

export const mutationTypes = {
  getLocationStart: '[location] Get location start',
  getLocationSuccess: '[location] Get location success',
  getLocationFailure: '[location] Get location failure',

  getPaginationStart: '[pagination] Get pagination start',
  getPaginationSuccess: '[pagination] Get pagination success',
  getPaginationFailure: '[pagination] Get pagination failure',
};

export const actionTypes = {
  getLocation: '[location] Get location',
  getPagination: '[pagination] Get pagination',
};

export const locationPage = {
  state: () => ({
    locationData: null,
    isLoading: false,
    error: null,
    url: 'location',

    totalPages: null,
  }),
  getters: {},
  mutations: {
    [mutationTypes.getLocationStart](state) {
      state.isLoading = true;
      state.locationData = null;
    },
    [mutationTypes.getLocationSuccess](state, payload) {
      state.isLoading = false;
      state.locationData = payload;
    },
    [mutationTypes.getLocationFailure](state) {
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
    [actionTypes.getLocation](context, apiUrl) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getLocationStart, apiUrl);
        locationsApi
          .getLocation(apiUrl)
          .then((response) => {
            context.commit(
              mutationTypes.getLocationSuccess,
              response.data.results
            );
            resolve(response.data.results);
          })
          .catch(() => {
            context.commit(mutationTypes.getLocationFailure);
          });
      });
    },
    [actionTypes.getPagination](context, apiUrl) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getPaginationStart, apiUrl);
        locationsApi
          .getPagination(apiUrl)
          .then((response) => {
            context.commit(
              mutationTypes.getPaginationSuccess,
              response.data.info.pages
            );
            context.commit(
              mutationTypes.getLocationSuccess,
              response.data.results
            );

            resolve(response.data.info.pages);
          })
          .catch(() => {
            context.commit(mutationTypes.getPaginationFailure);
          });
      });
    },
  },
};
