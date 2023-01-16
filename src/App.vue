<template>
  <div class="wrapper">
    <div class="forms">
      <div class="forms__buttons">
        <BaseButton
          v-for="ip in dataIP"
          :key="ip"
          :text="ip"
          @toclick="openModal(ip)"
        />
      </div>

      <div
        v-if="isModalOpen"
        class="forms__modal"
      >
        <ModalWindow @onclick="getPoints" />
      </div>
      <FormForTest />
    </div>

    <div class="graph">
      <ul class="graph__list">
        <li
          v-for="tab in dataIP"
          :key="tab"
          class="graph__item"
          :class="{ graph__item_active: tab === activeTab }"
          @click="setActiveTab(tab)"
        >
          <span> {{ tab }} </span>
        </li>
      </ul>
      <TabsGraph :ip="activeTab" />
    </div>

    <!-- @ v-on, input здесь это событие -->
  </div>
</template>

<script>
import BaseButton from './components/ui/BaseButton.vue'
import ModalWindow from './components/ModalWindow.vue'
import FormForTest from './components/FormForTest.vue'
import TabsGraph from './components/TabsGraph.vue'
// оно не обязательно назывется как имя в экспорте!!

import axios from 'axios'
const URL = 'http://protolab.somee.com'
//компонент Vue, он является объектом со свойствами, чтобы обратиться к его свойствам через this
export default {
  name: 'App',
  components: {
    BaseButton,
    ModalWindow,
    FormForTest,
    TabsGraph
  },
  data() {
    return {
      question: [],
      dataIP: ['192.168.88.50', '192.168.88.51', '192.168.88.52'],
      isModalOpen: false,
      activeTab: null,
      activeIP: null
      // numberChannel: [
      //   1,
      //   2,
      //   3,
      //   4
      // ]
    }
  },
  mounted() {
    this.getAddresses()
  },
  methods: {
    async getAddresses() {
      try {
        const { data } = await axios.get(`${URL}/api/ChartData/adresses/getall`) //синтаксис деструктуризации
        this.dataIP = data
      } catch (error) {
        throw new Error(error)
      }
    },
    openModal(ip) {
      this.isModalOpen = !this.isModalOpen //toggle
      this.activeIP = ip
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },
    // channels - это данные, которые приходят вместе с emit из modal window
    async getPoints(channels) {
      try {
        //TODO: change endpoint to http://protolab.somee.com/api/ChartData/test/getpoints/series/192.168.88.50
        const { data } = await axios.post(
          `${URL}/api/ChartData/test/getpoints/series-${this.activeIP}`,
          channels
        )
        console.log(data)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  display: grid;
  gap: 30px;
}

.forms {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  position: relative;

  // то же самое, что и .forms__modal
  &__modal {
    position: absolute;
    left: 310px;
  }

  &__buttons {
    display: grid;
    gap: 10px;
  }
}

.graph {
  &__list {
    display: flex;
  }

  &__item {
    list-style: none;
    border: 1px black solid;
    flex-basis: 33%;
    text-align: center;
    padding: 2px;

    &_active {
      border-bottom: none;
      background: rgba(127, 175, 104, 0.2);
    }
  }
}

.attention {
  text-align: center;
  color: black;
  font-size: 25px;
}
</style>
