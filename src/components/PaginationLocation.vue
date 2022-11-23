<template>
  <div class="pagination">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{
        'current-page': currentPage === pageNumber,
      }"
      class="btn-pagination"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/locationPage';

export default {
  name: 'RamPaginationLocation',
  data() {
    return {
      apiUrl: 'location?page=',
      currentPage: 1,
    };
  },
  computed: {
    ...mapState({
      totalPages: (state) => state.locationPage.totalPages,
    }),
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.apiUrl = `location?page=${pageNumber}`;
      this.fetchData();
    },
    fetchData() {
      this.$store.dispatch(actionTypes.getPagination, this.apiUrl);
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {},
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  margin-top: 55px;
}

.btn-pagination {
  border: 1px solid green;
  padding: 5px;
  border-radius: 5px;
}

.current-page {
  border: 1px solid green;
  background-color: green;
  padding: 5px;
  border-radius: 5px;
  color: white;
}
</style>
