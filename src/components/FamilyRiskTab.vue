<template>
  <div class="family-tab-wrapper">
    <ul>
      <!-- <li v-for="family in families" :key="family.id">
        <img :src="family.icon" :alt="family.name" width="20px">
        <span>{{family.id}}</span>
      </li>-->
      <li>
        <img src="./../assets/world.svg" width="20px">
        <span>All</span>
      </li>
      <li>
        <i class="fas fa-hard-hat equity"></i>
        <span>Equity</span>
      </li>
      <li>
        <i class="fas fa-hard-hat balanced"></i>
        <span>Balanced</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      families: [
        {
          name: "All Currencies",
          id: "All",
          icon: require("./../assets/world.svg")
        },
        {
          name: "Equity",
          id: "Equity",
          icon: require("./../assets/european-flag.svg")
        },
        {
          name: "Balanced",
          id: "Balanced",
          icon: require("./../assets/japan-flag.png")
        }
      ]
    };
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
}

span {
  width: 20px;
  font-weight: bold;
  color: #828282;
}

.fa-hard-hat.equity{
  color:#eb5757;
}

.fa-hard-hat.balanced{
  color:#27ae60;
}
</style>

