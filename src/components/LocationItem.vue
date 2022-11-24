<template>
  <ram-loader v-if="isLoading" />
  <ram-error-message v-if="error" />

  <div class="location-wrapper">
    <transition-group name="location-list">
      <div
        v-for="(location, index) in locationInfo"
        :key="index"
        class="location-item"
      >
        <div class="location-description">
          Name: <br />
          <b> {{ location.name }} </b>
        </div>

        <div
          class="location-description"
          :class="{
            'no-type': location.dimension === '',
          }"
        >
          Dimension: <br /><b>{{ location.dimension }}</b>
        </div>
        <div
          class="location-description"
          :class="{
            'no-type': location.type === '',
          }"
        >
          Type: <br /><b>{{ location.type }}</b>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'RamLocationItem',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    locationInfo: {
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
.location-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 15px 20px 15px 20px;
  margin-top: 35px;
}
.location-item {
  position: relative;
  height: 250px;
  width: 250px;
  border-radius: 12px;
  border: 1px solid rgb(132, 133, 132);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #446911;
}

.location-item:hover {
  box-shadow: 0px 0px 15px 5px #7dc21e;
  transition: 0.5s all;
}

.location-description {
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
  font-size: 15px;
  color: black;
  background-color: white;
}

.no-type {
  background-color: red;
  display: none;
}

.location-list-item {
  display: inline-block;
  margin-right: 10px;
}
.location-list-enter-active,
.location-list-leave-active {
  transition: all 1s ease;
}
.location-list-enter-from,
.location-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.location-list-move {
  transition: transform 0.8s ease;
}
</style>
