<template>
  <div class="funds-wrapper">
    <h1>ETS FUNDS</h1>
    <hr>
    <h5 v-if="showLoadingMessage">
      <img src="./../assets/spinner.gif" width="50px">
    </h5>
    <div id="nofunds" v-if="!filteredFunds.length && !showLoadingMessage">
      <h3>No funds data</h3>
    </div>
    <Asset v-for="asset in filtered" :key="asset.id" :assetValue="asset"/>
  </div>
</template>

<script>
import Asset from "./Asset";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showLoadingMessage: false,
      filtered : []
    };
  },
  computed: {
    ...mapGetters(["filteredFunds"])
  },
  components: {
    Asset
  },
  async created() {
    this.showLoadingMessage = true;
    await this.$store.dispatch("fetchFunds");
    this.showLoadingMessage = false;
    this.filtered = this.filteredFunds
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

div#nofunds {
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
}

h5 {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .funds-wrapper {
    margin: 0;
  }
  h1 {
    font-size: larger;
    text-align: left;
    /* margin-left: 20px; */
    color: #02b5c4;
    margin-top: 20px;
  }

  hr {
    width: 88%;
  }
}
</style>


