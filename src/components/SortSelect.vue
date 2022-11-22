<template>
  <select v-on="modelValue" @change="changeOptions">
    <option value="">Sort by ...</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RamSortSelect',
  props: {
    modelValue: {
      type: Object,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
select option {
  color: rgb(58, 58, 58);
}
select {
  padding: 10px;
  text-align: center;
}
option:checked {
  color: red;
  display: none;
}
</style>
