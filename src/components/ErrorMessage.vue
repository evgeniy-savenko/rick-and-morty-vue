<template>
  <div class="error">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RamErrorMessage',
  props: {
    message: {
      type: String,
      required: true,
      default: 'Something went wrong',
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
