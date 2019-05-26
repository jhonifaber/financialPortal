<template>
  <div class="currency-tab-wrapper">
    <ul>
      <li v-for="currency in currencies" :key="currency.id" @click="filterFunds(currency.id)">
        <img :src="currency.icon" :alt="currency.name" width="20px">
        <span>{{currency.id}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currencies: [
        {
          name: "All Currencies",
          id: "All",
          icon: require("./../assets/world.svg")
        },
        {
          name: "European flag",
          id: "EUR",
          icon: require("./../assets/european-flag.svg")
        },
        {
          name: "Japanese flag",
          id: "JPY",
          icon: require("./../assets/japan-flag.png")
        },
        {
          name: "American flag",
          id: "USD",
          icon: require("./../assets/united-states-flag.svg")
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["funds", "selectedFamily"])
  },
  methods: {
    filterFunds(currentCurrency) {
      this.updateCurrentCurrency(currentCurrency);

      if (this.checkIfBothAreFilteredByAll(currentCurrency)) return;

      if (this.checkIfCurrentFamilyIsAll(currentCurrency)) return;

      if (currentCurrency == "All") {
        this.$store.commit("saveFiltered", this.funds);
      } else {
        let filteredAssets = this.funds.filter(fund => {
          return (
            fund.currency == currentCurrency &&
            fund.risk_family == this.selectedFamily
          );
        });
        this.$store.commit("saveFiltered", filteredAssets);
      }
    },
    updateCurrentCurrency(currency) {
      this.$store.commit("updateSelectedCurrency", currency);
    },
    checkIfCurrentFamilyIsAll(currentCurrency) {
      if (this.selectedFamily == "All") {
        let filteredAssets = this.funds.filter(fund => {
          return fund.currency == currentCurrency;
        });
        this.$store.commit("saveFiltered", filteredAssets);
        return true;
      }
      return false;
    },
    checkIfBothAreFilteredByAll(currentCurrency) {
      if (currentCurrency == "All" && this.selectedFamily == "All") {
        this.$store.commit("saveFiltered", this.funds);
        return true;
      }
      return false;
    }
  }
};
</script>


<style scoped>
.currency-tab-wrapper {
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
}

span {
  width: 20px;
  font-weight: bold;
  color: #828282;
}
</style>
