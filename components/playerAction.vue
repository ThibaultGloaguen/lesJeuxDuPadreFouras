<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

      <v-list-tile v-else :key="item.title" avatar>
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'L\'actu des joueurs' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Patrick',
            subtitle: "Vient de réussir le défi de la grande plage"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Jean pierre',
            subtitle: "a decouvert l'énigme de la plage sud"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Rita',
            subtitle: "a découvert l'enigme du fort vauban"
          }
        ]
      }
    }
  }
</script>


