<template>
  <div class="card-wrapper">
    <h5 v-if="showLoadingMessage">
      <img src="./../assets/spinner.gif" width="50px">
    </h5>
    <div class="data" v-for="item in cardsData" :key="item.id">
      <label>NAME</label>
      <h3>{{item.name}}</h3>
      <label>CURRENCY</label>
      <p>{{item.currency.name}}</p>
      <label>ISSUER</label>
      <p>{{item.issuer.name}}</p>
      <label>ISIN</label>
      <p>{{item.isin}}</p>
      <label>REGION</label>
      <p>{{item.region.name}}</p>
      <label>RISK FAMILY</label>
      <p>{{item.risk_family.name}}</p>
      <label>SECTOR</label>
      <p>{{item.sector.name}}</p>
    </div>
    <div class="pagination">
      <a :href="'/information/' + prev_page.id" @click="updateCurrentPage(prev_page.id)">
        <div class="pagination-prev">
          <p id="pagination-label-left">{{prev_page.name}}</p>
          <i class="fas fa-chevron-circle-left fa-2x"></i>
        </div>
      </a>
      <a :href="'/information/' + next_page.id" @click="updateCurrentPage(next_page.id)">
        <div class="pagination-next">
          <i class="fas fa-chevron-circle-right fa-2x"></i>
          <p id="pagination-label-right">{{next_page.name}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["funds"],
  data() {
    return {
      showLoadingMessage: false
    };
  },
  computed: {
    ...mapGetters(["cardsData", "currentPage"]),
    next_page() {
      if (this.currentPage.index + 1 == this.funds.length) {
        return this.funds[0].name;
      }
      return this.funds[this.currentPage.index + 1];
    },
    prev_page() {
      if (this.currentPage.index == 0) {
        return this.funds[this.funds.length - 1].name;
      }
      return this.funds[this.currentPage.index - 1];
    }
  },
  methods: {
    updateCurrentPage(id) {
      console.log("LLEGa");
      console.log(id);

      this.$store.commit("updateCurrentPage", id);
    }
  }
};
</script>


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
  margin-bottom: 25px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

p#pagination-label-right,
p#pagination-label-left {
  font-size: x-small;
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
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 768px) {
  .pagination {
    margin-right: 20px;
    margin-top: 0;
    display: flex;
    justify-content: flex-end;
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

  p#pagination-label-right,
  p#pagination-label-left {
    display: none;
  }
}
</style>

