<template>
  <div class="currency-tab-wrapper">
    <ul>
      <li> All </li> 
      <li> EUR </li> 
      <li> JPY </li> 
      <li> USD </li> 
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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
