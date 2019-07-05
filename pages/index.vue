<template>
  <div>
    <no-ssr>
      <div class="location" v-if="!isLocationActivated">
        <v-btn color="primary" @click="getLocation" fab small dark>
          <v-icon>location_on</v-icon>
        </v-btn>
        <p>Active ta localisation pour apparaitre sur la map</p>
      </div>
      <GmapMap v-bind:center="center" v-bind:map-type-id="mapTypeId" v-bind:zoom="14">
        <GmapMarker v-bind:position="position"></GmapMarker>
        <GmapCircle
          v-for="(item, index) in games"
          v-bind:key="index"
          :center="item.center"
          :radius="40"
          :visible="true"
          :options="circleOption"
          @click="goToGame(item['.key'])"
        />
      </GmapMap>
    </no-ssr>
    <div class="ongoing-actions">
      <playerAction></playerAction>
    </div>
  </div>
</template>
<script>
import playerAction from "../components/playerAction.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    playerAction
  },
  mounted: function() {
    this.getLocation();
    this.bindGames();
  },
  computed: {
    ...mapGetters({
      position: "user/position",
      isLocationActivated: "user/isLocationActivated",
      games: "GameService/gameList"
    })
  },
  methods: {
    ...mapActions({
      getLocation: "user/getLocation",
      bindGames: "GameService/bindGames"
    }),
    goToGame: function(id) {
      console.log("id", id);
      this.$router.push({ name: "challenge", query: { id: id } });
    }
  },
  data() {
    return {
      circleOption: {
        strokeColor: "#4ca238",
        strokeOpacity: "0.8",
        strokeWeight: "2",
        fillColor: "#4ca238",
        fillOpacity: "0.35"
      },
      zones: [
        {
          center: { lat: 45.983872, lng: -1.095531 },
          id: "monId"
        },
        {
          center: { lat: 45.995775, lng: -1.077389 },
          id: "monId"
        },
        {
          center: { lat: 45.9959, lng: -1.099321 },
          id: "monId"
        }
      ],
      center: { lat: 45.9833, lng: -1.1 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: 45.9833, lng: -1.038378 } },
        { position: { lat: 45.9833, lng: -1.118 } }
      ]
    };
  }
};
</script>

<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
.location {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>