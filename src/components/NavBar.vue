<template>
  <nav>
    <ram-button @click="$router.push('/')">Home</ram-button>
    <img
      class="bg-img"
      src="https://upload.wikimedia.org/wikipedia/ru/c/c8/Rick_and_Morty_logo.png"
      alt=""
    />
    <ram-button @click="$router.push('/characters')">Episodes</ram-button>
  </nav>
</template>

<script>
export default {
  name: 'RamNavbar',
};
</script>

<style scoped>
.bg-img {
  width: 10%;
  height: 10%;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: black;
  border-radius: 0px 0px 10px 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
