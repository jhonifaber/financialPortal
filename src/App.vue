<template>
  <div id="app">
    <GeneralFilter></GeneralFilter>
    <router-view/>
  </div>
</template>

<script>
import GeneralFilter from "./components/GeneralFilter";
import CurrencyTab from "./components/CurrencyTab";

export default {
  components: {
    GeneralFilter,
    CurrencyTab
  },
  created() {
    this.$store.dispatch('fetchFunds')
  },
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
