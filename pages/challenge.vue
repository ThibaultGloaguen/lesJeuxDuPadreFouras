<template>
  <div class="challenge">
    <h3>Le défi de la grande plage</h3>
    <v-img
      max-height="300px"
      src="https://www.location-mobilhome-fouras.com/fouras_mobilhome/1-location_mobilhome_fouras4b.jpg"
      alt
    ></v-img>
    <challengeContent v-if="!isCurrentChallengeSucceed"></challengeContent>
    <challengeUserContent v-else></challengeUserContent>
  </div>
</template>

<script>
import challengeContent from "../components/challengeContent";
import challengeUserContent from "../components/challengeUserContent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    challengeContent,
    challengeUserContent
  },
  computed: {
    ...mapGetters({
      challengesDone: 'user/challengesDone',
      isCurrentChallengeSucceed: "user/isCurrentChallengeSucceed"
    }),
    isCurrentChallengeSucceed: function() {
      return this.challengesDone.includes(this.$route.query.id)
    }
  },
  data: () => {
    return {};
  }
};
</script>
