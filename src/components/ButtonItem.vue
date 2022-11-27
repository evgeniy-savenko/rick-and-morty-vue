<template>
  <button type="submit" class="outline green-white">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RamButton',
};
</script>

<style>
button {
  cursor: pointer;
  outline: none;
  position: relative;
}
button.outline {
  position: relative;
  z-index: 3;
  background: transparent;
  color: #1172c4;
  font-size: 14px;
  border-color: #1172c4;
  border-style: solid;
  border-width: 2px;
  border-radius: 22px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}
button.outline a {
  text-decoration: none;
}
button.outline:hover {
  color: white;
  background: #1172c4;
  border-color: white;
  transition: all 0.2s linear;
}
button.outline:active {
  border-radius: 22px;
}
button.green-white {
  font-weight: 700;
  color: #7dc21e;
  border-color: #7dc21e;
  background: transparent;
}
button.green-white:hover {
  color: white;
  background: #7dc21e;
  border-color: #7dc21e;
}
</style>
