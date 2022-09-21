<script setup>

import { ref, reactive, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'
import { http } from '../../hooks/useApi';
import { useAuth } from '../../stores/auth';
import Input from '../forms/Input.vue';
import { useRegister } from '../../stores/register';
import vSelect from "vue-select";
import { useRouter } from 'vue-router'

    const register = useRegister();

    const busy = ref(false);

    const state = reactive({ 
        first_name: '',
        last_name: '',
        day: '',
        month: '',
        year: '',
        city_id: '',
    })
    
    const year = new Date().getFullYear();


    const months = [
        {id: 1, label:'Январь'},
        {id: 2, label:'Февраль'},
        {id: 3, label:'Март'},
        {id: 4, label:'Апрель'},
        {id: 5, label:'Май'},
        {id: 6, label:'Июнь'},
        {id: 7, label:'Июль'},
        {id: 8, label:'Август'},
        {id: 9, label:'Сентябрь'},
        {id: 10, label:'Октябрь'},
        {id: 11, label:'Ноябрь'},
        {id: 12, label:'Декабрь'},
    ]

    onMounted( async() => {
        await register.getCities()
    })

    const rules = { 
        first_name: { required },
        last_name: { required },
        day: { required },
        year: { required },
        month: { required },
        city_id: { required },
    }

    const v$ = useVuelidate(rules,state);

    const auth = useAuth();

    const router = useRouter()

    const submit = async () => {
        if(await v$.value.$validate()){

            busy.value = true;

            await http.post(
                'auth/store_profile',
                {
                    first_name: state.first_name,
                    last_name: state.last_name,
                    city_id: state.city_id,
                    birth_date: `${state.year}-${state.month}-${state.day}`,
                }
                ).then((res) => {
                    auth.setUser(res.data.user)
                    router.replace({path: '/'})
                }).catch((err) =>{
                    console.log(err)
                })

                busy.value = false;
        }
    }
</script>
<template>
    <div>
       <Input label="Имя" v-model="state.first_name" placeholder="Абуамриддин" :error="v$.first_name.$errors" />

       <Input label="Фамилия" v-model="state.last_name" placeholder="Гафуров"  :error="v$.last_name.$errors"/>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Возраст</label>
            <div class="grid grid-cols-1 xs:grid-cols-9 gap-0">
                <v-select :options="Array.from({length: 31}, (_, index) => index + 1)" 
                    v-model="state.day" class="v__custom col-span-2" placeholder="День" />
               
                <v-select :options="months" :reduce="obj => obj.id" v-model="state.month" class="v__custom col-span-4" placeholder="Месяц" />

                <v-select :options="Array.from({length: 100}, (_, index) => year - index)" 
                    v-model="state.year" class="v__custom col-span-3" placeholder="Год" />
            </div>
            <p class="text-xs text-red-500 pl-2 pt-2" v-if="v$.day.$error || v$.month.$error || v$.year.$error">Value is required</p>
        </div>
        <div class="mb-2">

            <label class="block text-sm font-medium text-gray-700 mb-1">Место жительства</label>
            <v-select :options="register.cities" 
                label="name"
                :reduce="city => city.id"
                v-model="state.city_id" class="v__custom" placeholder="Душанбе, Таджикистан">
                    <template v-slot:option="option">
                        {{ option.name+', '+option.country }}
                    </template>
            </v-select>
            <p class="text-xs text-red-500 pl-2 pt-2" v-if="v$.city_id.$error">{{v$.city_id.$errors[0]}}</p>
        </div>

       <button :disabled="busy" class="w-full mt-4 bg-cgreen rounded py-2 text-center text-white" @click.prevent="submit">Продолжить</button>
    </div>
</template>
