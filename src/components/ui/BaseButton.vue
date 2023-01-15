<template>
  <div class="button">
    <button
      class="button__button"
      @click="$emit('toclick')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button__button {
  padding: 5px 25px;
  margin: 0 15px 15px 0;
  background-color: rgb(189, 213, 184);
  border-radius: 7px;
  cursor: pointer;
  border: 0px;
  box-shadow: 0 4px 6px rgb(81, 86, 78);
  font-weight: bold;
}
.button__button:hover {
  background-color: rgb(127, 175, 104);
  border-radius: 7px;
  box-shadow: none;
}
</style>
