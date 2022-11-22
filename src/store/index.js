import {createStore} from 'vuex';
import {characterPage} from '@/store/modules/characterPage';

export default createStore({
  modules: {
    characterPage: characterPage,
  },
});
