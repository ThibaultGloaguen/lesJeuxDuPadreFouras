<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <router-link to="/profil">
        <v-avatar v-ripple color="grey lighten-4">
          <img style="object-fit: cover" src="/thibault.jpg" alt="avatar" ref="profilImage">
        </v-avatar>
      </router-link>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer padless>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Carte",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Règles du jeu",
          to: "/rules"
        },
        {
          icon: "bubble_chart",
          title: "Classement génèral",
          to: "/score"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Les jeux du Père Fouras"
    };
  }
};
</script>
