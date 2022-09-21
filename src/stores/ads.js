import {defineStore} from 'pinia'
import { http } from '../hooks/useApi';

export const adsStore = defineStore({
    id: 'ads',
    state: () => ({
        ads: [],
        categories: [],
    }),
    getters: {
    },
    actions: {
        async getCategories(){
            await http.get('categories').then((res) => {
                this.categories = res.data.data;
            });
        }
    },
})