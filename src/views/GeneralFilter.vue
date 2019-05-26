<template>
  <div class="filter-wrapper">
    <div class="layout-column-left">
      <div class="logo">
        <img :src="logo" width="100px">
      </div>
      <div class="layout-column-left buttons">
        <span>
          <i class="fas fa-dollar-sign"></i>
          <p @click="selectedComponent = 'CurrencyTab'" class="dynamic-component-button">Currency</p>
        </span>
        <p id="currentItem"> {{selectedCurrency}}</p>
        <span>
          <i class="fas fa-hard-hat"></i>
          <p
            @click="selectedComponent = 'FamilyRiskTab'"
            class="dynamic-component-button"
          >Family Risk</p>
        </span>
        <p id="currentItem">Equity</p>
      </div>
    </div>
    <div class="layout-column-middle">
      <div class="layout-column-middle buttons">
        <component :is="selectedComponent"></component>
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
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      selectedComponent: "CurrencyTab",
      logo: require("./../assets/logo.png")
    };
  },
  computed: {
    ...mapGetters(['selectedCurrency']),
    filteredAssets() {}
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

p#currentItem{
  font-size: x-small;
}
</style>


