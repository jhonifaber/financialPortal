<template>
  <div class="funds-wrapper">
    <Asset v-for="asset in funds" :key="asset.id" :assetValue="asset"/>
  </div>
</template>

<script>
import Asset from "./Asset";

export default {
  data() {
    return {
      funds: [
        {
          id: 9756,
          name:
            "Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc",
          currency: "EUR",
          risk_family: "Balanced"
        },
        {
          id: 42736,
          name: "Allianz Fondsvorsorge 1977-1996 A Acc",
          currency: "EUR",
          risk_family: "Balanced"
        }
      ]
    };
  },
  components: {
    Asset
  }
};
</script>

