<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <div class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <v-btn color="grey" round class="font-weight-light">Editer</v-btn>
          </v-card-text>
        </div>
        <div class="score">Vous avez actuellement 49 points.</div>
        <div class="score">Vous etes classé(e) 34 sur 500</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
};
</script>

<style>
    .score {
        text-align: center;
    }
</style>
