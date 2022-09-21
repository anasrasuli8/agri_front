<script setup>
    import { ref, reactive } from 'vue';
    import useVuelidate from '@vuelidate/core'
    import {required, helpers} from '@vuelidate/validators'
    import { useRegister } from '../../stores/register';
    import { http } from '../../hooks/useApi';
    import Phone from '../forms/Phone.vue';
    import { useHelper } from '../../hooks/useHelper';


    const register = useRegister();
    const busy = ref(false);

    const state = reactive({ phone: '', country_code: '+992' })
    
    const {phoneRule} = useHelper();
    const rules = { 
            phone: { required, phoneRule: helpers.withMessage('Must be valid phone number',phoneRule) },
        };

    const v$ = useVuelidate(rules,state);

    const submit = async () => {  

        if(await v$.value.$validate()){

            busy.value = true;

            await http.post(
                'auth/send_code',
                state).then((res) => {
                   register.setStep(2);
                   register.setPhone(res.data.phone);

                }).catch((err) =>{
                    console.log(err)
                })
            busy.value = false;
        }
    }
</script>
<template>
    <div>
        <Phone v-model="state.phone" :error="v$.phone.$errors" />
        <button :disabled="busy" class="w-full mt-4 bg-cgreen rounded py-2 text-center text-white" @click="submit">Продолжить</button>
    </div>
</template>
