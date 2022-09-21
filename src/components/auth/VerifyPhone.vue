<script setup>
    import { maska as vMask} from 'maska';
    import { ref, reactive, watch } from 'vue';
    import useVuelidate from '@vuelidate/core'
    import {required, numeric, minLength} from '@vuelidate/validators'
    import { useRegister } from '../../stores/register';
    import { http } from '../../hooks/useApi';
    import { useCookies } from '@vueuse/integrations/useCookies'
    import { useAuth } from '../../stores/auth';


    const register = useRegister();
    const busy = ref(false);
    const invalidCode = ref(false);

    const cookies = useCookies(['token'])
    const auth = useAuth();

    const state = reactive({ code: '' })
    
    watch(
        () => state.code,
        (code) => {
            if(invalidCode.value) invalidCode.value = false
        }
    );
    
    const rules = { 
            code: { required, numeric, minLength: minLength(4) }
        };

    const v$ = useVuelidate(rules,state);

    const submit = async () => {
        
        if(await v$.value.$validate()){

            busy.value = true;

            await http.post(
                'auth/verify_phone',
                {
                    code: state.code,
                    phone: register.phone
                }).then((res) => {
                    cookies.set('token',res.data.token)
                    auth.setUser(res.data.user);
                    if(!auth.user.profile_completed_at){
                        register.setStep(3)
                    }
                }).catch((err) =>{
                    if(err.response.status == 422){
                        invalidCode.value = true
                    }
                    console.log(err)
                })

            busy.value = false;
        }
    }
</script>
<template>
    <div>
        <div>
            <label for="code" class="block text-sm font-medium text-gray-700">Код подтверждения</label>
            <div class="mt-1 flex">
                <input type="text" name="code" v-model="state.code" placeholder="Введите 4-значный код" v-mask="'####'"
                    class="block w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-r border border-gray-200"
                >
            </div>
            <span v-if="v$.code.$error" class="text-xs text-red-500">{{v$.code.$errors[0].$message}}</span>
            <span v-if="invalidCode" class="text-xs text-red-500">Invalid code entered. please try again!</span>

        </div>
        <button :disabled="busy" class="w-full mt-4 bg-cgreen rounded py-2 text-center text-white" @click.prevent="submit">Продолжить</button>
    </div>
</template>
