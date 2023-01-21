<template>
  <div class="modal">
    <span
      class="modal__close"
      @click="$emit('close')"
      >✖</span
    >
    <h5 class="modal__header">Choose channels</h5>
    <label
      v-for="channel in numberChannel"
      :key="channel"
    >
      <input
        :id="channel"
        v-model="value"
        type="checkbox"
        :name="channel"
        :value="channel"
      />
      channel {{ channel }}
    </label>
    <BaseButton
      text="Submit"
      @toclick="onClickHandler"
    />
  </div>
  <!-- знак : перед словом это директива v-bind -->
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

//компонент Vue, он является объектом со свойствами, чтобы обратиться к его свойствам через this
export default {
  name: 'ModalWindow',
  components: {
    BaseButton
  },
  data() {
    return {
      value: [],
      numberChannel: [1, 2, 3, 4]
    }
  },
  mounted() {},
  methods: {
    onClickHandler() {
      // value - это данные, которые отправляются родителю вместе с emit
      this.$emit('onclick', this.value)
    }
  }
}
</script>

<style lang="scss">
.modal {
  background: #dcdcdc;
  padding: 5px 15px 15px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(81, 86, 78);
  display: grid;
  gap: 5px;

  &__header {
    margin: 0;
  }

  &__close {
    justify-self: end;
    cursor: pointer;
  }
}
</style>
