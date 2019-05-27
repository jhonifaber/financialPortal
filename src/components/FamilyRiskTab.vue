<template>
  <div class="family-tab-wrapper">
    <ul>
      <li @click="filterFunds('All')">
        <img src="./../assets/world.svg" width="20px">
        <span :style='[selectedFilter == "FamilyRiskTab" && "All" == selectedFamily? {"color":"#02b5c4"} : {"color":"#828282"}]'>All</span>
      </li>
      <li @click="filterFunds('Equity')">
        <i class="fas fa-hard-hat equity"></i>
        <span :style='[selectedFilter == "FamilyRiskTab" && "Equity" == selectedFamily? {"color":"#02b5c4"} : {"color":"#828282"}]'>Equity</span>
      </li>
      <li @click="filterFunds('Balanced')">
        <i class="fas fa-hard-hat balanced"></i>
        <span :style='[selectedFilter == "FamilyRiskTab" && "Balanced" == selectedFamily? {"color":"#02b5c4"} : {"color":"#828282"}]'>Balanced</span>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["funds", "selectedCurrency",'selectedFamily','selectedFilter'])
  },
  methods: {
    filterFunds(currentFamily) {
      this.updateCurrentFamily(currentFamily);

      if (this.checkIfbothAreFilteredByAll(currentFamily)) return;

      if (this.checkIfCurrentCurrencyIsAll(currentFamily)) return;

      if (this.checkIFCurrentCurrencyIsNotAllAndFamilyIsAll(currentFamily))
        return;

      this.filterWhenBothAreNotAll(currentFamily);
    },
    updateCurrentFamily(family) {
      this.$store.commit("updateSelectedFamily", family);
    },
    checkIfbothAreFilteredByAll(currentFamily) {
      if (currentFamily == "All" && this.selectedCurrency == "All") {
        this.commitMutation(this.funds);
        return true;
      }
      return false;
    },
    checkIfCurrentCurrencyIsAll(family) {
      if (this.selectedCurrency == "All") {
        let filteredAssets = this.funds.filter(fund => {
          return fund.risk_family == family;
        });
        this.commitMutation(filteredAssets);
        return true;
      }
      return false;
    },
    checkIFCurrentCurrencyIsNotAllAndFamilyIsAll(currentFamily) {
      if (currentFamily == "All" && this.selectedCurrency != "All") {
        let filteredAssets = this.funds.filter(fund => {
          return fund.currency == this.selectedCurrency;
        });
        this.commitMutation(filteredAssets);
        return true;
      }
      return false;
    },
    filterWhenBothAreNotAll(currentFamily) {
      let filteredAssets = this.funds.filter(fund => {
        return (
          fund.risk_family == currentFamily &&
          fund.currency == this.selectedCurrency
        );
      });
      this.commitMutation(filteredAssets);
    },
    commitMutation(list) {
      this.$store.commit("saveFiltered", list);
    }
  }
};
</script>


<style scoped>
.family-tab-wrapper {
  width: 100%;
  height: 30%;
}

ul {
  height: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  position: relative;
  right: 40px;
}

li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 25%;
  cursor: pointer;
}

span {
  width: 20px;
  font-weight: bold;
  color: #828282;
}

.fa-hard-hat.equity {
  color: #eb5757;
}

.fa-hard-hat.balanced {
  color: #27ae60;
}
</style>

