<template>
  <div class="filter-wrapper">
    <div class="layout-column-left">
      <div class="layout-column-left buttons">
        <button @click="selectedComponent = 'CurrencyTab'">CurrencyTab</button>
        <button @click="selectedComponent = 'FamilyRiskTab'">FamilyRiskTab</button>
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
import CurrencyTab from "./CurrencyTab";
import FamilyRiskTab from "./FamilyRiskTab";
import Funds from "./Funds";

export default {
  data() {
    return {
      selectedComponent: "CurrencyTab"
    };
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

.buttons{
  width: 230px;
}

.layout-column-middle{
  background-color: #F2F2F2;
}

.layout-column-right{
  width: 100%;
}
</style>


