<template>
  <div class="filter-wrapper">
    <div class="layout-filters">
      <div class="layout-column-left">
        <div class="logo">
          <img :src="logo" width="100px">
        </div>
        <div class="layout-column-left buttons">
          <span>
            <i
              class="fas fa-dollar-sign"
              :style="[selectedComponent == 'CurrencyTab' ? {'color':'#02b5c4'} : {'color':'#bdbdbd'}]"
            ></i>
            <p
              @click="selectedFilter('CurrencyTab')"
              class="dynamic-component-button"
              :style="[selectedComponent == 'CurrencyTab' ? {'color':'#828282'} : {'color':'#bdbdbd'}]"
            >Currency</p>
          </span>
          <p
            id="currentItem"
            :style="[selectedComponent == 'CurrencyTab' ? {'color':'#02b5c4'} : {'color':'#bdbdbd'}]"
          >{{selectedCurrency}}</p>
          <span>
            <i
              class="fas fa-hard-hat"
              :style="[selectedComponent == 'FamilyRiskTab' ? {'color':'#02b5c4'} : {'color':'#bdbdbd'}]"
            ></i>
            <p
              @click="selectedFilter('FamilyRiskTab')"
              class="dynamic-component-button"
              :style="[selectedComponent == 'FamilyRiskTab' ? {'color':'#828282'} : {'color':'#bdbdbd'}]"
            >Family Risk</p>
          </span>
          <p
            id="currentItem"
            :style="[selectedComponent == 'FamilyRiskTab' ? {'color':'#02b5c4'} : {'color':'#bdbdbd'}]"
          >{{selectedFamily}}</p>
        </div>
      </div>
      <div class="layout-column-middle">
        <div class="layout-column-middle buttons">
          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="layout-column-right">
      <Funds/>
    </div>
  </div>
</template>

<script>
import CurrencyTab from "./../components/CurrencyTab";
import FamilyRiskTab from "./../components/FamilyRiskTab";
import Funds from "./../components/Funds";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedComponent: "CurrencyTab",
      logo: require("./../assets/logo.png")
    };
  },
  computed: {
    ...mapGetters(["selectedCurrency", "selectedFamily"])
  },
  methods: {
    selectedFilter(filter) {
      this.selectedComponent = filter;
      this.$store.commit("saveSelectedFilter", filter);
    }
  },
  components: {
    CurrencyTab,
    FamilyRiskTab,
    Funds
  }
};
</script>

<style scoped>
.filter-wrapper {
  height: 100vh;
  display: flex;
}

.layout-filters {
  display: flex;
}

.layout-column-middle,
.layout-column-left {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  width: 230px;
}

.layout-column-left {
  display: flex;
  flex-direction: column;
}

.layout-column-middle {
  background-color: #f2f2f2;
}

.layout-column-right {
  width: 100%;
}

.layout-column-left.buttons {
  height: 30%;
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 20px;
}

span {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
  cursor: pointer;
  height: 60px;
}

.dynamic-component-button {
  display: flex;
  align-items: center;
}

p {
  width: 90px;
  color: #bdbdbd;
  font-weight: bold;
}

span:hover p {
  color: #828282;
}

span:hover i.fas {
  color: #02b5c4;
}

.logo {
  position: relative;
  bottom: 27%;
  right: 20px;
}

i.fas.fa-hard-hat {
  display: flex;
  align-items: center;
  color: #bdbdbd;
}

i.fas.fa-dollar-sign {
  display: flex;
  align-items: center;
  color: #bdbdbd;
}

p#currentItem {
  font-size: small;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 20px;
}

@media (max-width: 768px) {
  .filter-wrapper {
    display: flex;
    flex-direction: column;
  }

  .layout-filters {
    display: flex;
    flex-direction: column;
  }

  .layout-column-middle {
    background-color: #ffffff;
  }

  .layout-column-left.buttons {
    display: flex;
    flex-direction: row;
  }
}
</style>


