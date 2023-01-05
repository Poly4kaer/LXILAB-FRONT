<template>
  <div class="modal">
    <BaseCheckbox
      v-for="channel in numberChannel"
      :key="channel"
      :label="channel"
      v-model="value"
      @input="choiceChannel"
      :name="channel"
      :value="channel"
    />
    {{ value }}
  </div>
  <!-- знак : перед словом это директива v-bind -->
</template>

<script>
// import BaseButton from "./components/ui/BaseButton.vue";
import BaseCheckbox from "@/components/ui/BaseInput.vue";

// import axios from "axios";
//компонент Vue, он является объектом со свойствами, чтобы обратиться к его свойствам через this
export default {
  name: "ModalWindow",
  components: {
    // BaseButton,
    BaseCheckbox,
  },
  data() {
    return {
      value: [],
      numberChannel: [1, 2, 3, 4],
    };
  },
  mounted() {},
  methods: {
    choiceChannel(value) {
      console.log(value);
    },
  },
};
</script>
