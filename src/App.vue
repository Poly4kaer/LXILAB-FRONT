<template>
  <div>
<BaseButton v-for="ip in dataIP" :key="ip" :text="ip" @toclick="openModal"/>
<!-- :text это props (v-bind)-->
    <!-- <modal v-show="isModalVisible" @close="closeModal" /> -->
    <div v-if="isModalOpen">
      <ModalWindow/>
      {{ channel }}
        <!-- это интерполяция  -->
      </div>
      <br>
<FormForTest/>
      <!-- @ v-on, input здесь это событие -->
  </div>
</template>

<script>
import BaseButton from './components/ui/BaseButton.vue'
import ModalWindow from './components/ModalWindow.vue'
import FormForTest from './components/FormForTest.vue';
// оно не обязательно назывется как имя в экспорте!!

  import axios from 'axios'
//компонент Vue, он является объектом со свойствами, чтобы обратиться к его свойствам через this 
export default {
  name: 'App',
  components: {
    // not use HelloWorld
    BaseButton,
    ModalWindow,
    FormForTest
  },
  data () {
    return {
      question: [], 
      dataIP: [
        '192.168.88.50',
        '192.168.88.51',
        '192.168.88.52'
      ],
      isModalOpen: false,
      // numberChannel: [
      //   1,
      //   2,
      //   3,
      //   4
      // ] 
    }
  },
mounted() {
  this.getQuestion()
},
methods: {
  async getQuestion () {
    try {
      const { data } = await axios.get('https://jservice.io/api/random'); //синтаксис деструктуризации
      console.log(this.question);
      this.question = data;
    } catch (error) {
      console.error(error);
    }
  },
  openModal () {
    this.isModalOpen = !this.isModalOpen //toggle
  }
}
}

</script>

<style lang="scss">
#list_ip {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {

}
.attention {
  text-align: center;
  color: black;
  font-size: 25px;
}
.list {
  background-color: #82ce9f;
  border: 1px solid red;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 25px;
  text-align: center;
}
.list {
  list-style-type: none;

}
</style>
