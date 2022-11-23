<template>
  <footer>
    <div class="text-color-danger">
      Created with ♥
      <a
        class="footer_link"
        href="https://github.com/evgeniy-savenko/rick-and-morty-vue"
        >Link on GitHub</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: 'RamFooter',
};
</script>

<style scoped>
footer {
  margin-top: 73px;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  padding: 30px;
}
.text-color-danger {
  color: red;
}
a {
  text-decoration: none;
  color: wheat;
}
</style>
