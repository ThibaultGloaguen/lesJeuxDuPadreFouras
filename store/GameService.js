import {
  db,
} from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'

export const state = () => ({
  gameList: [],
  game: {}
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  gameList: (state) => state.gameList,
  game: (state) => state.game
}

export const actions = {
  bindGames: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('gameList', db.ref('games'))
  }),
  getGameById: firebaseAction(({ bindFirebaseRef }, id) => {
    bindFirebaseRef('game', db.ref(`games/${id}`))
  }),
}