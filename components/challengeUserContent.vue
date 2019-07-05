<template>
  <v-layout column>
    <div class="succeed">Bravo, Tu as réussi ce défi</div>

    <label class="button-primary">
      Importe ta photo
      <input
        type="file"
        id="inputForUpload"
        name="image"
        @change="onUpload"
        accept="image/x-png, image/jpeg, image/jpg"
      >
    </label>

    <div class="content">45 autres personnes ont réussi ce défi</div>

    <div class="hashtag">#DEFIGRANDEPLAGE</div>

    <imageGridChallenge></imageGridChallenge>
  </v-layout>
</template>

<script>
import imageGridChallenge from "./imageGridChallenge";
export default {
  components: {
    imageGridChallenge
  },
  methods: {
    onUpload: () => {
      console.log("hey");
    }
  }
};
</script>

<style>
.succeed {
  margin: 2em 2em 0em 2em;
  text-align: center;
}
.content {
  text-align: center;
  margin: 2em 2em 0em 2em;
}

.hashtag {
  text-align: center;
  margin: 2em;
}
.button-primary {
  margin: 2em;
  padding: 0.8em 1em;
  text-align: center;
  color: #fff;
  background: #ff3838;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.button-primary {
  justify-content: center;
}
input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 0;
}
</style>
