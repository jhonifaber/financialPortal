<template>
  <div class="card-wrapper">
    <div class="data">
      <label>NAME</label>
      <h3>Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc</h3>
      <label>CURRENCY</label>
      <p>EUR</p>
      <label>ISSUER</label>
      <p>JP Morgan Am</p>
      <label>ISIN</label>
      <p>LI009645789</p>
      <label>REGION</label>
      <p>Global/Global/Global</p>
      <label>RISK FAMILY</label>
      <p>Balanced / Absolute Return</p>
      <label>SECTOR</label>
      <p>No sector</p>
    </div>
    <div class="pagination">
      <div class="pagination-prev">
        <!-- <p id="pagination-label-left">Caminac Camigroy Acc A</p> -->
        <i class="fas fa-chevron-circle-left fa-2x"></i>
      </div>
      <div class="pagination-next">
        <i class="fas fa-chevron-circle-right fa-2x"></i>
        <!-- <p id="pagination-label-right">Globsl stable quiality Found Bii Acc</p> -->
      </div>
    </div>
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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

p#pagination-label-right,
p#pagination-label-left {
  font-size: small;
  display: flex;
  align-items: center;
}

.fa-chevron-circle-left {
  margin-right: 15px;
}

p#pagination-label-left {
  padding-left: 160px;
  /* TODO */
  /* display: flex;
  flex-wrap: wrap; */
}

p#pagination-label-right {
  padding-right: 130px;
  /* TODO */
  /* display: flex;
  flex-wrap: wrap; */
}

.pagination-prev,
.pagination-next {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .pagination {
    margin-right: 20px;
    margin-top: 0;
  }

  .pagination-prev {
    width: 85%;
    display: flex;
    justify-content: flex-end;
  }

  .pagination-next {
    width: 15%;
  }

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
    font-size: xx-small;
  }

  .data {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>

