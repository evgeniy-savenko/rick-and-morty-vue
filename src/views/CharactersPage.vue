<template>
  <ram-navbar />

  <div class="sort">
    <ram-sort-select v-model="selectedSort" :options="sortOptions" />
    <input
      class="input"
      placeholder="Search By Character Name"
      type="text"
      v-model="searchQuery"
    />
  </div>

  <ram-card-item
    :api-url="apiUrl"
    :is-loading="isLoading"
    :card-info="filterSearch"
    :error="error"
  />

  <ram-pagination />
  <ram-footer />
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/characterPage';

export default {
  name: 'CharactersPage',
  data() {
    return {
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'species', name: 'By species'},
        {value: 'status', name: 'By status'},
        {value: 'name', name: 'By name'},
        {value: 'gender', name: 'By gender'},
      ],
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.characterPage.isLoading,
      cardInfo: (state) => state.characterPage.cardData,
      error: (state) => state.characterPage.error,
      apiUrl: (state) => state.characterPage.url,
    }),
    filterSearch() {
      if (this.searchQuery) {
        return this.cardInfo.filter((card) => {
          return card.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      } else {
        return this.cardInfo;
      }
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch(actionTypes.getCard, this.apiUrl);
    },
  },
  watch: {
    selectedSort(newValue) {
      this.cardInfo.sort((array1, array2) => {
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
