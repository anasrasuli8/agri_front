<template>
    <div class="w-full sticky top-0 z-10 bg-cgreen py-5 px-10 flex justify-between">
        <a @click="pushBack">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.828 7L9.192 1.636L7.778 0.222L0 8L7.778 15.778L9.192 14.364L3.828 9H16V7H3.828Z" fill="white"/>
            </svg>
        </a>
        <h4 class="text-white font-bold">{{$route.name}}</h4>
        <div class="flex">
            <slot />
            <a href="#">
                <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0C1.175 0 0.5 0.675 0.5 1.5C0.5 2.325 1.175 3 2 3C2.825 3 3.5 2.325 3.5 1.5C3.5 0.675 2.825 0 2 0ZM2 15C1.175 15 0.5 15.675 0.5 16.5C0.5 17.325 1.175 18 2 18C2.825 18 3.5 17.325 3.5 16.5C3.5 15.675 2.825 15 2 15ZM2 7.5C1.175 7.5 0.5 8.175 0.5 9C0.5 9.825 1.175 10.5 2 10.5C2.825 10.5 3.5 9.825 3.5 9C3.5 8.175 2.825 7.5 2 7.5Z" fill="white"/>
                </svg>
            </a>
        </div>
    </div>
</template>
<script setup>
    import { RouterLink, useRouter } from 'vue-router'

    const props = defineProps({
        goBack: {
            type: Function,
            default: null,
        },
    })
    const router = useRouter()
    const pushBack = () => {
        if(props.goBack != null){
            props.goBack();
            return;
        }
        router.push('/')
    }
</script>