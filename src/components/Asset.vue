<template>
  <div class="asset-wrapper">
    <a href="#" class="asset-name">{{assetValue.name}}</a>
    <a href="#" class="asset-data"> currency : {{assetValue.currency}} Family Risk : {{assetValue.risk_family}}</a>
  </div>
</template>

<script>
export default {
  props: ["assetValue"]
};
</script>

<style scoped>
.asset-wrapper {
  margin: 20px;
  font-size: 12px;
}

.asset-name {
  text-decoration: none;
  border-right: 0px;
  display: inline-block;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  padding: 15px;
  width: 50%;
  text-align: left;
}

.asset-data {
  text-decoration: none;
  border-left: 0px;
  display: inline-block;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  padding: 15px;
  width: 50%;
}

.asset-data:hover {
  background-color: #02b5c4;
}
</style>

