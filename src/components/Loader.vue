<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'RamLoader',
};
</script>

<style>
.loader {
  margin: auto;
  width: 75px;
  height: 75px;
  border: 10px solid rgba(0, 214, 18, 0.6);
  border-radius: 50%;
  border-left-color: #08f81c;
  animation: loader 1.3s linear infinite;
}
@keyframes loader {
  100% {
    transform: rotate(360deg);
  }
}
</style>
