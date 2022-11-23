<template>
  <ram-navbar />

  <div class="sort">
    <ram-sort-select v-model="selectedSort" :options="sortOptions" />
    <input
      class="input"
      placeholder="Search By Location Name"
      type="text"
      v-model="searchQuery"
    />
  </div>

  <ram-location-item
    :api-url="apiUrl"
    :is-loading="isLoading"
    :location-info="filterSearch"
    :error="error"
  />

  <ram-pagination-location />
  <ram-footer />
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/locationPage';

export default {
  name: 'LocationsPage',
  data() {
    return {
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'name', name: 'By name'},
        {value: 'type', name: 'By type'},
      ],
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.locationPage.isLoading,
      locationInfo: (state) => state.locationPage.locationData,
      error: (state) => state.locationPage.error,
      apiUrl: (state) => state.locationPage.url,
    }),
    filterSearch() {
      if (this.searchQuery) {
        return this.locationInfo.filter((location) => {
          return location.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      } else {
        return this.locationInfo;
      }
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch(actionTypes.getLocation, this.apiUrl);
    },
  },
  watch: {
    selectedSort(newValue) {
      this.locationInfo.sort((array1, array2) => {
        return array1[newValue]?.localeCompare(array2[newValue]);
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.sort {
  margin-top: 15px;
}
.input {
  width: 50%;
  border: 1px solid black(1, 155, 194);
  padding: 10px 15px;
  margin-top: 15px;
  margin-left: 15px;
}
</style>
