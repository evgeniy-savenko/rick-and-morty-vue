<template>
  <input
    :value="value"
    placeholder="Введите ключевое слово в названии поста..."
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: 'RamSearchCard',
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:value', e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 50%;
  border: 1px solid black(1, 155, 194);
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
