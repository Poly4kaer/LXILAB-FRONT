<template>
  <div class="">
    <input
      @input="input"
      type="text"
      :id="name"
      :value="value"
    />
    <label :for="name"> {{ label }} {{ value }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ' '
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    input($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.inputArea {
  margin-bottom: 10px;
}
</style>
