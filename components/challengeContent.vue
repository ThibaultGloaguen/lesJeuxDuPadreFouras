<template>
  <div>
    <div class="enigme">
      <h3>L'énigme</h3>
      <blockquote
        class="blockquote"
      >&#8220;La petite maison renferme bien des secret bla bla .....&#8221;</blockquote>
    </div>
    <v-layout row class="response">
      <v-flex grow pa-1>
        <v-text-field label="Entre ta réponse" outline v-model="answer"></v-text-field>
      </v-flex>
      <v-flex shrink pa-1>
        <v-btn color="success" @click="validateAnswer">OK</v-btn>
      </v-flex>
    </v-layout>

    <v-expansion-panel>
      <v-expansion-panel-content v-for="(indice,i) in game.indices" :key="i">
        <template v-slot:header>
          <div>Indice n°{{i}}</div>
        </template>
        <v-card>
          <v-card-text>{{indice}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <modal status :isVisible="isModalVisible" @click="hide"></modal>
  </div>
</template>

<script>
import modal from "./modalContent";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => {
    return {
      answer: "",
      isModalVisible: false
    };
  },
  components: {
    modal
  },
  computed: {
    ...mapGetters({
      game: "GameService/game"
    })
  },
  mounted: function() {
    this.getGameById(this.$route.query.id);
  },
  methods: {
    ...mapActions({
      getGameById: "GameService/getGameById",
      setGoodAnswer: "user/setGoodAnswer"
    }),
    validateAnswer() {
      if (this.answer !== this.game.password) {
        // show wrong modal
      } else {
        this.isModalVisible = true;
        this.setGoodAnswer(this.game['.key'])
        setTimeout(() => {
          this.hide();
        }, 3000);
      }
    },
    hide() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style>
.response {
  margin-top: 2em;
}
h3 {
  text-align: center;
}
.enigme {
  margin: 2em;
}
</style>
