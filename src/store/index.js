import {createStore} from 'vuex'
import axios from 'axios'
import router from '../router'




export default createStore({
    state() {
        return {
            authenticated: false,
            user: null
        }
    },
    getters: {
        authenticated (state) {
            return localStorage.getItem("user") !== null
        },
        user (state) {
            return JSON.parse(localStorage.getItem("user"))
        },
        name (state) {
            const user = JSON.parse(localStorage.getItem("user"));
            return user.data.first_name + ' ' + user.data.last_name
        }
    },
    mutations: {
      SET_AUTHENTICATED (state, authenticated) {
          state.authenticated = authenticated
      },
      SET_USER (state, user) {
          state.user = user
          localStorage.setItem('user', JSON.stringify(user))
      }
    },
    actions: {
        async authenticate ({commit}) {
            await axios.get('/api/auth/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
                router.push({path: '/dashboard'})
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        },
        async login ({dispatch}, credentials) {
            return axios.post('/api/login', credentials).then((response) => {
                localStorage.setItem('jwtToken', response.data.access_token)
                axios.defaults.headers = {
                    Authorization: 'Bearer ' + response.data.access_token
                }
                dispatch('authenticate')
            })
        },
        logout ({dispatch}, credentials) {
            localStorage.removeItem('user')
            localStorage.removeItem('jwtToken')
            router.push({path: '/login'})
        }
    }
})
