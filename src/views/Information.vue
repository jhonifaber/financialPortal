<template>
  <div class="information-wrapper">
    <div class="information-header">
      <router-link to="/">
        <img :src="logo" width="100px">
      </router-link>
      <h5 v-if="showLoadingMessage">
        <img src="./../assets/spinner.gif" width="50px">
      </h5>
      <router-link to="/" class="router-link-back" v-if="!showLoadingMessage">
        <p id="returnButton">
          <i class="fas fa-chevron-left"></i>Volver
        </p>
      </router-link>
    </div>
    <div class="information-pack" v-if="!showLoadingMessage">
      <div class="information-graph">
        <Graph/>
      </div>
      <div class="information-card">
        <Card :funds="funds"/>
      </div>
    </div>
  </div>
</template>


<script>
import Card from "./../components/Card";
import Graph from "./../components/Graph";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      logo: require("./../assets/logo.png"),
      showLoadingMessage: false
    };
  },
  computed: {
    ...mapGetters(["funds"])
  },
  components: {
    Graph,
    Card
  },
  async created() {
    this.showLoadingMessage = true;
    await this.$store.dispatch(
      "fetchSpecificFundInformation",
      this.$route.params.id
    );
    await this.$store.dispatch("fetchFunds");

    this.showLoadingMessage = false;
  }
};
</script>

<style scoped>
.information-wrapper {
  height: 100vh;
  width: 100vw;
}

.information-header {
  height: 13%;
  width: 15%;
  padding-top: 40px;
}

.information-pack {
  display: flex;
  flex-direction: row;
  height: 87%;
}

.information-graph {
  height: 100%;
  background-color: #02b4c4; /* For browsers that do not support gradients */
  background-image: linear-gradient(to left, #02b4c4, #330166);
  width: 45%;
  display: flex;
  align-items: center;
}

.information-card {
  height: 100%;
  background-color: #f2f2f2;
  width: 55%;
}

.router-link-back {
  display: none;
}

@media (max-width: 768px) {
  .information-pack {
    display: flex;
    flex-direction: column;
  }
  .information-graph {
    height: 45%;
    width: 100%;
    display: flex;
    align-content: unset;
  }

  .information-card {
    height: 55%;
    width: 100%;
  }

  .information-header {
    width: 40%;
    padding-top: 10px;
  }

  #returnButton {
    margin-top: 15px;
    color: gray;
    font-size: 15px;
  }

  .router-link-back {
    display: initial;
    position: relative;
    bottom: 12px;
    text-decoration: none;
  }

  .fa-chevron-left {
    color: #02b4c4;
    margin-right: 5px;
    font-size: 12px;
  }
}
</style>
