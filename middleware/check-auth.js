export default function({ store, redirect, route }) {
    console.log(route)
    !store.getters['user/isAuthenticated'] && route.name == 'challenge' ? redirect('/account/signup') : ''
  }
