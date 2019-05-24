<template>
  <div class="funds-wrapper">
    <h1>ETS FUNDS</h1>
    <hr>
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
        },
        {
          id: 43722,
          name: "JB MP Konwave Gold Equity Fund B Acc",
          currency: "USD",
          risk_family: "Equity"
        },
        {
          id: 47868,
          name: "Invesco Pan European Structured Equity Fund A Acc",
          currency: "EUR",
          risk_family: "Equity"
        },
        {
          id: 57400,
          name: "Invesco Pan European High Income Fund E Acc",
          currency: "EUR",
          risk_family: "Balanced"
        },
        {
          id: 62509,
          name: "Henderson Horizon Pan European Property Equities Fund A2 Acc",
          currency: "JPY",
          risk_family: "Equity"
        },
        {
          id: 65388,
          name: "Carmignac Patrimoine A Acc",
          currency: "EUR",
          risk_family: "Balanced"
        },
        {
          id: 78072,
          name: "Global Stable Equity Fund BI Acc",
          currency: "EUR",
          risk_family: "Equity"
        },
        {
          id: 78178,
          name: "Stable Return Fund BP Acc",
          currency: "JPY",
          risk_family: "Balanced"
        },
        {
          id: 90690,
          name: "Janus Global Life Sciences Fund I (acc.) Acc",
          currency: "USD",
          risk_family: "Equity"
        }
      ]
    };
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


