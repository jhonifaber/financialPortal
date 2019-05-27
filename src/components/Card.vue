<template>
  <div class="card-wrapper">
    <div class="data">
      <label>NAME</label>
      <h3>Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc</h3>
      <label>CURRENCY</label>
      <p>EUR</p>
      <label>ISSUER</label>
      <p>JP MORGAN AM</p>
      <label>ISIN</label>
      <p>LI009645789</p>
      <label>REGION</label>
      <p>Global/Global/Global</p>
      <label>RISK FAMILY</label>
      <p>Balanced / Absolute Return</p>
      <label>SECTOR</label>
      <p>No sector</p>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<style scoped>
.card-wrapper {
  background-color: #f2f2f2;
}

.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
}
label {
  font-size: x-small;
  color: #c5c5c5;
  font-weight: bold;
  margin-top: 25px;
}

h3 {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  h3 {
    font-size: small;
    margin-bottom: 0;
    text-align: left;
  }

  p {
    font-size: small;
    color: #0f0f0f;
  }

  label {
    margin-top: 15px;
  }

  .data {
    padding-top: 0;
  }
}
</style>

