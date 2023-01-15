<template>
  <div class="graph">
    <img
      src="http://pikstok.ru/images/images/1528372927887.jpg"
      alt=""
      v-if="ip === '192.168.88.50'"
    />
    <img
      src="https://klike.net/uploads/posts/2018-10/1539499416_1.jpg"
      alt=""
      v-if="ip === '192.168.88.51'"
    />
    <img
      src="http://www.psy.msu.ru/illusion/upside_down/m_w.gif"
      alt=""
      v-if="ip === '192.168.88.52'"
    />
  </div>
</template>

<script>
export default {
  name: 'TabsGraph',
  data() {
    return {}
  },
  props: {
    ip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
