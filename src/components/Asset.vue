<template>
  <div class="asset-wrapper">
    <a href="#" class="asset-name">{{assetValue.name}}</a>
    <a href="#" class="asset-data">
      <div class="asset-data-currency">
        <span class="type">
          <i class="fas fa-dollar-sign"></i>
          {{currency_text}}
        </span>&nbsp;
        <span>{{assetValue.currency}}</span>
      </div>
      <div class="asset-data-family">
        &nbsp;
        <span class="type">
          <i class="fas fa-hard-hat"></i>
          {{family_text}}
        </span>&nbsp;
        <span class="family-risk-value">{{assetValue.risk_family}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["assetValue"],
  data() {
    return {
      currency_text: "CURRENCY",
      family_text: "FAMILY RISK"
    };
  }
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
  display: inline-flex;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  padding: 15px;
  width: 50%;
  text-align: left;
  font-weight: bold;
}

.asset-data {
  text-decoration: none;
  border-left: 0px;
  display: inline-flex;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  padding: 15px;
  width: 50%;
  justify-content: space-between;
}

.asset-data:hover {
  background-color: #02b5c4;
}

span.type {
  color: #909090;
  font-weight: bold;
}

.asset-data-currency,
.asset-data-family {
  display: inline;
}

.asset-data-family {
  width: 160px;
  display: flex;
}

.fas {
  color: #02b5c4;
  margin-right: 6px;
}

.family-risk-value{
  margin-left: 10px;
}
</style>

