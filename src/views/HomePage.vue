<template>
  <div class="home">
    <div class="bg">
      <img
        class="bg-img"
        src="https://upload.wikimedia.org/wikipedia/ru/c/c8/Rick_and_Morty_logo.png"
        alt="logo"
      />
      <div class="btn-link">
        <ram-button @click="$router.push('/characters')">
          Characters
        </ram-button>
        <ram-button @click="$router.push('/locations')"
          >Location (soon)
        </ram-button>
        <ram-button>
          <a href="https://rickandmortyapi.com/">About API</a>
        </ram-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      response: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
.home {
  background-color: black;
  width: auto;
  height: 100vh;
}

a {
  color: #7dc21e;
}

a:hover {
  color: white;
}
.bg {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.bg-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 220px;
  width: 350px;
}
.btn-link {
  display: flex;
  margin-top: 30px;
  gap: 10px;
  justify-content: center;
}
</style>
