import {createStore} from 'vuex';
import {characterPage} from '@/store/modules/characterPage';
import {locationPage} from '@/store/modules/locationPage';

export default createStore({
  modules: {
    characterPage: characterPage,
    locationPage: locationPage,
  },
});
