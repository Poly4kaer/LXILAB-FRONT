<template>
  <div class="contentForTest">
    <h3 class="header">For tests</h3>
    <BaseInput v-model="dataId" />
    {{ dataId }}
    <div>
      <BaseButton
        text="Отправить"
        @toclick="submitForm"
        class="buttonForTest"
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
  color: rgb(3, 77, 9);
  text-align: center;
}
.contentForTest {
  border: solid rgb(1, 41, 7);
  margin: 20px;
  padding: 20px;
  padding-top: 10px;
  display: inline-block;
}
.buttonForTest {
  display: flex;
  justify-content: center;
}
.inputInFormForTest {
}
</style>
