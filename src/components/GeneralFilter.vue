<template>
  <div class="filter wrapper">
    <button @click="selectedComponent = 'CurrencyTab'">CurrencyTab</button>
    <button @click="selectedComponent = 'FamilyRiskTab'">FamilyRiskTab</button>

    <hr>
    <component :is="selectedComponent"></component>
    <hr>
    <Funds/>
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
</style>


