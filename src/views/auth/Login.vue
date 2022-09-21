<script setup>
    import TopBar from '../../components/TopBar.vue';
    import { onMounted, computed } from 'vue'

    import StorePhone from '../../components/auth/StorePhone.vue';
    import { useRegister } from '../../stores/register';
    import VerifyPhone from '../../components/auth/VerifyPhone.vue';
    import Register from '../../components/auth/Register.vue';
    import { useAuth } from '../../stores/auth';

    const register = useRegister();
    const auth = useAuth();

    onMounted(() => {
        if(auth.notCompleted){
            register.setStep(3)
        }else{
            register.reset()
        }
    })

</script>
<template>
    <div class="">
        <top-bar />
        <div class="h-[80rem] pt-10 px-3 bg-white sm:shadow">
            <store-phone v-if="register.activeStep == 1" />
            <verify-phone v-if="register.activeStep == 2"  />
            <register v-if="register.activeStep == 3"  /> 
        </div>
    </div>
</template>
