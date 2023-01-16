<template>
  <div class="test">
    <h3 class="test__header">For tests</h3>
    <BaseInput v-model="dataId" />
    <BaseButton
      text="Отправить"
      class="test__button"
      @toclick="submitForm"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

export default {
  name: 'FormForTest',
  components: {
    BaseButton,
    BaseInput
  },
  props: {},
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

<style lang="scss">
.test {
  border: solid rgb(1, 41, 7);
  padding: 20px;
  display: grid;
  gap: 15px;

  &__header {
    font-weight: bold;
    color: rgb(3, 77, 9);
    text-align: center;
    margin: 0;
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>
