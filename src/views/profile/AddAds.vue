<script setup>
import TopBar from '../../components/TopBar.vue';
import { ref, reactive, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import {required, email, numeric, helpers} from '@vuelidate/validators'

import { adsStore } from '../../stores/ads';

import Input from '../../components/forms/Input.vue';
import Phone from '../../components/forms/Phone.vue';
import { useHelper } from '../../hooks/useHelper';
import Textarea from '../../components/forms/Textarea.vue';
import vSelect from "vue-select";
import { useRouter } from 'vue-router';
import ImageInput from '../../components/forms/ImageInput.vue';
import { http } from '../../hooks/useApi';


    const ads = adsStore();
    const {phoneRule} = useHelper(); 

    onMounted( async() => {
        if(ads.categories.length == 0){
            await ads.getCategories()
        }
    })
    const step = ref(1)
    const busy = ref(false)

    const state = reactive({ 
        name: '',
        price: '',
        phone: '',
        address: '',
        email: '',
        category_id: '',
        description: '',
        photo: '',
    })

    const rules = { 
        name: { required },
        price: { required, numeric },
        address: { required },
        email: { required, email },
        phone: { required, phoneRule: helpers.withMessage('Must be valid phone number',phoneRule) },
        category_id: { required },
    }

    const second = {
        description: {required},
        photo: {required},
    }

    const v$ = useVuelidate(rules,state);

    const s$ = useVuelidate(second,state);

    const router = useRouter()

    const back = () => {
        if(step.value == 2){
            step.value  = 1;
            return;
        }
        router.push('/')
    }
    const next = async () => {  

        if(step.value == 1 && await v$.value.$validate()){

            step.value = 2;
            return ;
        }
        if(step.value == 2 && await s$.value.$validate()){
            busy.value = true;
            console.log(state)

            let temp = new FormData();
            
            for(const key in state){
                temp.append(key,state[key])
            }
            
            await http.post(
                'store/ads',
                 temp,
                 {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => {
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
        <top-bar :go-back="back" />
        <div class="h-[80rem]">
            <div class="pt-5 px-3 bg-white sm:shadow">
                <div v-if="step ==1 ">
                    <h3 class="text-xl mb-5 text-gray-700">???????????????? ????????????????????</h3>
                    <Textarea label="????????????????" v-model="state.name" placeholder="????????????????" :error="v$.name.$errors" />
                    
                    <Input label="??????????????????" v-model="state.price" placeholder="??????????????????" suffix="?????? / ??????????" :error="v$.price.$errors" />

                    <Phone v-model="state.phone" :error="v$.phone.$errors" />
                    
                    <Input label="??????????" v-model="state.address" placeholder="??????????" :error="v$.address.$errors" />

                    <Input label="?????????? ?????????????????????? ??????????" v-model="state.email" placeholder="info@domain.com" :error="v$.email.$errors" />
                    
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700 mb-1">??????????????????</label>
                        <v-select label="name" :options="ads.categories" :reduce="obj => obj.id" v-model="state.category_id" class="v__custom" placeholder="??????????????????" />
                        <p class="text-xs text-red-500 pl-2 pt-2" v-if="v$.category_id.$error">{{v$.category_id.$errors[0].$message}}</p>
                    </div>
                </div>
                <div v-if="step ==2 ">
                    <h3 class="text-xl mb-5 text-gray-700">???????????????????????????? ????????????????????</h3>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">?????????????? ????????</label>
                        <ImageInput v-model="state.photo" />
                        <p class="text-xs text-red-500 pl-2 pt-2" v-if="s$.photo.$error">{{s$.photo.$errors[0].$message}}</p>
                    </div>

                    <Textarea label="????????????????" v-model="state.description" placeholder="????????????????" :error="s$.description.$errors" />
                </div>
            </div>
            
            <div class="w-full sm:w-[40rem] fixed bottom-0 z-10 bg-white px-4 py-3 border-t border-gray-100">
                <button :disabled="busy" class="w-full bg-cgreen rounded py-2 text-center text-white" @click="next">{{(step == 1) ? '????????????????????' : '??????????????????'}}</button>
            </div>
        </div>
    </div>
</template>
