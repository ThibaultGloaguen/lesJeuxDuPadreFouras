<template>
  <v-data-table :headers="headers" :items="people">
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.points }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Joueurs",
          sortable: false,
          value: "points"
        },
        { text: "Points", value: "points" }
      ],
      people: [
        {
          name: "Jean pierre",
          points: 159
        },
        {
          name: "Patrick",
          points: 98
        },
        {
          name: "Michel",
          points: 40
        },
        {
          name: "Sylvie",
          points: 34
        },
        {
          name: "Mickey",
          points: 33
        },
        {
          name: "Thibault",
          points: 300
        },
      ]
    };
  }
};
</script>