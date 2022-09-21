import {defineStore} from 'pinia'
import { http } from '../hooks/useApi';

export const useRegister = defineStore({
    id: 'register',
    state: () => ({
        activeStep: 1,
        phone: null,
        cities: [],
    }),
    getters: {
    },
    actions: {
        setStep(st){
            this.activeStep = st;
        },
        setPhone(p){
            this.phone = p;
        },
        reset(){
            this.activeStep = 1;
            this.phone = null;
        },
        async getCities(){
            await http.get('cities').then((res) => {
                this.cities = res.data;
            });
        }
    },
})