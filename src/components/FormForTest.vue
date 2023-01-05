<template>
  <div class="">
    <h3 class="header">For tests</h3>
    <BaseInput v-model="dataId" />
    {{ dataId }}
    <div>
      <BaseButton
        text="Отправить"
        @toclick="submitForm"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

export default {
  name: 'FormForTest',
  props: {},
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      dataId: ''
    }
  },
  methods: {
    submitForm() {
      console.log(this.dataId)
    }
  }
}
</script>

<style>
.header {
  font-weight: bold;
  color: red;
}
</style>
