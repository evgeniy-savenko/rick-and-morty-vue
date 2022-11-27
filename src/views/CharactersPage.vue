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
  <div v-if="favoriteCollection" class="favorite-zone">
    <h1 class="empty" v-if="favoriteCollection.length === 0">
      Favorite list is empty
    </h1>
    <div
      class="favorite-item"
      :class="{
        'favorite-item-active': this.isHide === true,
      }"
      v-for="(favorite, index) in favoriteCollection"
      :key="index"
    >
      <img :src="favorite.image" class="favorite-item-img" />
      <div class="favorite-item-descr">
        {{ favorite.name }}
      </div>
    </div>
  </div>
  <button
    v-if="favoriteCollection.length > 0"
    class="favorite-item-btn"
    @click="clearLocaleStorage"
  >
    Clear favorite list
  </button>
  <button
    v-if="favoriteCollection.length > 0"
    class="favorite-item-btn"
    @click="shorOrHideFavCard"
  >
    <p v-if="this.isHide === true">Show favorite list</p>
    <p v-else>Hide favorite list</p>
  </button>

  <ram-card-item
    :api-url="apiUrl"
    :is-loading="isLoading"
    :card-info="filterSearch"
    :error="error"
    @click="localS"
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
      favoriteData: [],
      favoriteCollection: [],
      isHide: false,
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
    localS(card) {
      if (localStorage.favorites) {
        this.favoriteData.push(card);
        let unique = Array.from(
          new Set(this.favoriteData.map((item) => JSON.stringify(item)))
        ).map((item) => JSON.parse(item));
        localStorage.setItem('favorites', JSON.stringify(unique));
        this.favoriteCollection = unique;
      } else {
        this.favoriteData.push(card);
        this.favoriteCollection.push(card);
        localStorage.setItem(
          'favorites',
          JSON.stringify(this.favoriteCollection)
        );
      }
    },
    clearLocaleStorage() {
      localStorage.clear();
      this.favoriteCollection = [];
      this.favoriteData = [];
    },
    shorOrHideFavCard() {
      if (this.isHide === false) {
        this.isHide = true;
      } else {
        this.isHide = false;
      }
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
    if (localStorage.favorites) {
      this.favoriteData = JSON.parse(localStorage.favorites);
      this.favoriteCollection = JSON.parse(localStorage.favorites);
    }
  },
};
</script>

<style scoped>
@media (min-width: 320px) and (max-width: 1199.98px) {
  .favorite-zone {
    margin: 0 10px 0 10px;
  }
  .empty {
    font-size: 20px;
  }
}
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

.favorite-item-active {
  display: none;
  transition: all 5s ease 5s;
}
.favorite-zone {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  margin: 0 30px 0 30px;
  border-bottom: 2px solid green;
}
.favorite-item {
  width: 90px;
  height: 150px;
  border-bottom: 30px solid green;
  border-radius: 10px;
  transition: all 5s ease 5s;
}
.favorite-item-img {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.favorite-item-btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0 0 10px 10px;
  margin-right: 5px;
}
.favorite-item-descr {
  font-size: 10px;
  color: white;
}

.status-alive {
  background-color: #fff;
}
</style>
