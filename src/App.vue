<template>
  <div class="wrapper">
    <div
      v-if="isLoading"
      class="loader"
    >
      <div class="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    {{ currentPoints }}
    <div class="forms">
      <div class="forms__buttons">
        <BaseButton
          v-for="ip in dataIP"
          :key="ip"
          :text="ip"
          :is-active="ip === activeIP"
          @toclick="openModal(ip)"
        />
      </div>

      <div
        v-if="isModalOpen"
        class="forms__modal"
      >
        <ModalWindow
          @onclick="getID"
          @close="closeModal"
        />
      </div>
      <FormForTest />
    </div>

    <div
      v-if="points.length"
      class="graph"
    >
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
      <TabsGraph
        v-for="(point, index) in currentPoints"
        :key="index"
        :ip="activeTab"
        :points="point"
      />
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
      dataIP: [],
      isModalOpen: false,
      activeTab: null,
      activeIP: null,
      points: [],
      isLoading: false,
      isActiveButton: false
    }
  },
  computed: {
    currentPoints() {
      return this.points.filter(point => {
        return point.id === this.activeTab
      })
    }
  },
  mounted() {
    this.getAddresses()
  },
  methods: {
    async getAddresses() {
      try {
        this.isLoading = true

        const { data } = await axios.get(`${URL}/api/ChartData/adresses/getall`) //синтаксис деструктуризации

        this.dataIP = data
        this.activeTab = data[0]
      } catch (error) {
        throw new Error(error)
      } finally {
        this.isLoading = false
      }
    },
    openModal(ip) {
      if (ip !== this.activeIP && this.isModalOpen) {
        this.isModalOpen = true
      } else {
        this.isModalOpen = !this.isModalOpen //toggle
      }

      this.activeIP = ip
    },
    closeModal() {
      this.isModalOpen = false
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },
    // channels - это данные, которые приходят вместе с emit из modal window
    async getID(channels) {
      try {
        this.isLoading = true

        const { data } = await axios.post(
          `${URL}/api/ChartData/test/getpoints/series/${this.activeIP}`,
          channels
        )

        for (const id of data) {
          const points = await this.getPoints(id)
          this.points.push(points)
        }
      } catch (error) {
        throw new Error(error)
      } finally {
        this.isLoading = false
      }
    },
    async getPoints(id) {
      try {
        this.isLoading = true

        const { data } = await axios.get(
          `${URL}/api/ChartData/test/getpoints/${id}`
        )
        return data
      } catch (error) {
        throw new Error(error)
      } finally {
        this.isModalOpen = false
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss">
body {
  position: relative;
}

.loader {
  height: 100vh;
  width: 100vw;
  background: #000;
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
    justify-content: center;
    gap: 10px;
  }

  &__item {
    list-style: none;
    width: 150px;
    text-align: center;
    padding: 2px;
    cursor: pointer;

    &_active {
      border-radius: 15px;
      background: rgba(127, 175, 104, 0.2);
    }
  }
}

.attention {
  text-align: center;
  color: black;
  font-size: 25px;
}

// loader styles

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
