<template>
  <div class="information-wrapper">
    <div class="information-header">
      <img :src="logo" width="100px">
    </div>
    <div class="information-pack">
      <div class="information-graph">
        <Graph/>
      </div>
      <div class="information-card">
        <Card/>
      </div>
    </div>
  </div>
</template>


<script>
import Card from "./../components/Card";
import Graph from "./../components/Graph";

export default {
  data() {
    return {
      logo: require("./../assets/logo.png")
    };
  },
  components: {
    Graph,
    Card
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
}

.information-card {
  height: 100%;
  background-color: #f2f2f2;
  width: 55%;
}

@media (max-width: 768px) {
  .information-pack {
    display: flex;
    flex-direction: column;
  }
  .information-graph {
    height: 45%;
    width: 100%;
  }

  .information-card {
    height: 55%;
    width: 100%;
  }

  .information-header {
    width: 40%;
    padding-top: 10px;
  }
}
</style>
