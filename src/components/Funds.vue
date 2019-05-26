<template>
  <div class="funds-wrapper">
    <h1>ETS FUNDS</h1>
    <hr>
    <Asset v-for="asset in filteredFunds" :key="asset.id" :assetValue="asset"/>
  </div>
</template>

<script>
import Asset from "./Asset";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["filteredFunds"])
  },
  components: {
    Asset
  }
};
</script>

<style scoped>
.funds-wrapper {
  margin: 30px;
}

h1 {
  font-size: larger;
  text-align: left;
  margin-left: 20px;
  color: #02b5c4;
  margin-top: 80px;
}

hr {
  border: 0;
  border-top: 1px solid #e0e0e0;
  width: 95%;
  margin-left: 20px;
}
</style>


