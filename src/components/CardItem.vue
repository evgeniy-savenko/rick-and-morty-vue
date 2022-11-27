<template>
  <ram-loader v-if="isLoading" />
  <ram-error-message v-if="error" />

  <div class="card-wrapper">
    <transition-group name="card-list">
      <div v-for="(card, index) in cardInfo" :key="index" class="card-item">
        <div class="card-description__name">
          <b> {{ card.species }} </b>
        </div>
        <img :src="card.image" class="card-image" />
        <div class="card-description">
          <div
            class="card-description__status"
            :class="{
              'status-alive': card.status === 'Alive',
              'status-unknown': card.status === 'unknown',
              'status-dead': card.status === 'Dead',
            }"
          >
            {{ card.status }}
          </div>
          <div class="card-description__name">
            <b>{{ card.name }}</b>
          </div>
          <div class="card-description__gender">
            <b>{{ card.gender }}</b>
          </div>
          <div class="card-description__btn">
            <button @click="$emit('click', card)">Favorite</button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'RamCardItem',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    cardInfo: {
      type: Object,
      required: true,
    },
    error: {
      type: null,
    },
  },
};
</script>

<style scoped>
button {
  background-color: #446911;
  border: 1px solid rgb(50, 173, 26);
  color: white;
  padding: 3px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin-bottom: 5px;
}
.card-list-item {
  display: inline-block;
  margin-right: 10px;
}
.card-list-enter-active,
.card-list-leave-active {
  transition: all 1s ease;
}
.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.card-list-move {
  transition: transform 0.8s ease;
}
.status-alive {
  background-color: #fff;
}

.status-unknown {
  background-color: grey;
}

.status-dead {
  background-color: red;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 15px 20px 15px 20px;
  margin-top: 35px;
}
.card-item {
  position: relative;
  height: 300px;
  width: 180px;
  border-radius: 12px;
  /* border: 3px solid rgba(31, 223, 31); */
  display: flex;
  flex-direction: column;
  background-color: #446911;
}

.card-item:hover {
  box-shadow: 0px 0px 15px 5px #7dc21e;
  transition: 0.5s all;
  position: relative;
  height: 450px;
  width: 280px;
  border-radius: 12px;
  border: 3px solid rgba(31, 223, 31);
  display: flex;
  flex-direction: column;
  background-color: #446911;
}

.card-description__btn {
  display: none;
  color: yellow;
}
.card-item:hover .card-description__btn {
  display: block;
  transition: 0.5s all;
}
.card-description__status {
  border-radius: 0 0 5px 5px;
}
.card-image {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.card-description__name {
  margin-top: 5px;
  font-size: 15px;
  color: white;
}
.card-description__gender {
  padding: 5px 0 0 5px;
  color: white;
}
.clear-fav {
  font-size: 30px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: transparent;
  color: red;
  border: none;
}
</style>
