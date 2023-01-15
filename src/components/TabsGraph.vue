<template>
  <button>
    <div>192.168.88.50</div>
    <div>192.168.88.51</div>
    <div>192.168.88.52</div>
  </button>
</template>

<script>
export default {
  name: 'TabsGraph',
  data () {
    // isActive: true
    },
  props: {
    text: {
      type: String,
      default: ''
    } 
  }

}

</script>

<style>

</style>