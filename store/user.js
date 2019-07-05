import store from 'vuex'
import { firebaseAction } from 'vuexfire'
import firebase from 'firebase/app'

function createNewAccount(user) {
    return firebase.database().ref(`accounts/${user.uid}`).set({
        displayName: user.displayName || user.email.split('@')[0], // use part of the email as a username
        email: user.email,
        challengesDone: [],
        image: user.newImage || '/images/default-profile.png' // supply a default profile image for all users
    })
}


export const state = {
    user: null,
    account: null,
    position: {
        coords: {
            latitude: 0,
            longitude: 0,
        }
    },
    isCurrentChallengeSucceed: false,
    isLocationActivated: false 
}

export const mutations = {
    setUserMut(state, user) {
        state.user = user
    },
    setLocationOption(state, isEnabled) {

    },
    setGoodAnswerMutation(state, challenge) {
        state.isCurrentChallengeSucceed = true
        if ('challengesDone' in state.account) {
            state.account.challengesDone.push(challenge)
        } else {
            state.account['challengesDone'] = [challenge]
        }
    },
    setPosition(state, position) {
        state.position = position
        //position.coords.latitude , longitude
        localStorage.setItem("position", JSON.stringify(position));
        state.isLocationActivated = true

    }
}

export const actions = {
    setUser(store, user) {
        state.user = user
        console.log('setUser',state.user)
        return this.dispatch('user/setAccountRef', `accounts/${state.user.uid}`)
    },
    resetUser({
        state
    }) {
        state.user = null
    },
    userCreate({ state }, account) {
        return firebase.auth()
            .createUserWithEmailAndPassword(account.email, account.password)
            .then(({ user }) => {
                return createNewAccount(user)
            })
    },
    userLogin({ state }, account) {
        return firebase.auth()
            .signInWithEmailAndPassword(account.email, account.password)
            .then((user) => {
                return store.dispatch('setUser', user)
            })
    },
    userLogout({ state }) {
        return firebase.auth()
            .signOut()
            .then(() => {
                store.dispatch('resetUser')
            })
    },
    userUpdate({ state }, newData) {
        return firebase.database().ref(`accounts/${state.user.uid}`).update({
            displayName: newData.displayName
        })
    },
    userUpdateImage({ state }, image) {
        return firebase.database().ref(`accounts/${state.user.uid}`).update({
            image
        })
    },
    initUserInfo(store) {
        let position = JSON.parse(localStorage.getItem('position'))
        if (position) {
            store.commit('setPosition', position)
        }
    },
    setGoodAnswer({ state }, challenge) {

        this.commit('user/setGoodAnswerMutation', challenge)

        console.log('STATE', state)
        console.log(state.account)

        return firebase.database().ref(`accounts/${state.account['.key']}/challengesDone`).set(state.account.challengesDone)
       
  
    },
    getLocation(store) {
        if (navigator.geolocation) {
            setInterval(() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position.coords.latitude + position.coords.longitude);
                    store.commit('setPosition', position)
                });
            }, 3000);
        }
    },
    setAccountRef: firebaseAction(({ bindFirebaseRef }, path) => {
        return bindFirebaseRef('account', firebase.database().ref(path))
    }),
}

export const getters = {
    isAuthenticated(state) {
        return !!state.account
    },
    challengesDone: (state) => state.account.challengesDone,
    isLocationActivated: (state) => state.isLocationActivated,
    isCurrentChallengeSucceed: (state) => state.isCurrentChallengeSucceed,
    position: (state) => {
        return {
            lat: state.position.coords.latitude,
            lng: state.position.coords.longitude
        }
    },
}