import {defineStore} from 'pinia'

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({
        user: {}
    }),
    getters: {
        check: state => Object.keys(state.user).length > 0,
        notCompleted: state => Object.keys(state.user).length > 0 && state.user.profile_completed_at == null
    },
    actions: {
        setUser(newValue) {
            this.user = newValue.data || newValue
        },
    },
})