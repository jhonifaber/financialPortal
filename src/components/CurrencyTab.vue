<template>
  <div class="currency-tab-wrapper">
    <ul>
      <li v-for="currency in listOfCurrencies" :key="currency.id">{{currency.id}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listOfCurrencies: [
        { name: "All", id: "All" },
        { name: "Euro", id: "EUR" },
        { name: "Japanese yen", id: "JPY" },
        { name: "Dollar", id: "USD" }
      ]
    };
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
}
</style>
