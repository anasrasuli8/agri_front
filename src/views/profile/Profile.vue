<script setup>
    import TopBar from '../../components/TopBar.vue';
    import { useAuth } from '../../stores/auth';
    import { useCookies } from '@vueuse/integrations/useCookies'
    import { useRouter } from 'vue-router';
    import { http } from '../../hooks/useApi';

    const router = useRouter();
    const cookies = useCookies(['token'])
    const auth = useAuth();

    const logout = async () => {
        await http.post('auth/logout');
        cookies.remove('token')
        auth.setUser({});
        router.replace('/')
    }
</script>

<template>
    <div>
        <TopBar />
        
        <div class="min-h-[80rem] bg-white sm:shadow">
            <button class="w-full flex p-4 border-b border-gray-100" @click="logout">
                <div class="">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="4" fill="#EB5757"/>
                        <g clip-path="url(#clip0_54_624)">
                        <path d="M6.68421 19.4H8.47368V21.2H19.2105V6.8H8.47368V8.6H6.68421V5.9C6.68421 5.66131 6.77848 5.43239 6.94627 5.2636C7.11407 5.09482 7.34165 5 7.57895 5H20.1053C20.3426 5 20.5701 5.09482 20.7379 5.2636C20.9057 5.43239 21 5.66131 21 5.9V22.1C21 22.3387 20.9057 22.5676 20.7379 22.7364C20.5701 22.9052 20.3426 23 20.1053 23H7.57895C7.34165 23 7.11407 22.9052 6.94627 22.7364C6.77848 22.5676 6.68421 22.3387 6.68421 22.1V19.4ZM8.47368 13.1H14.7368V14.9H8.47368V17.6L4 14L8.47368 10.4V13.1Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_54_624">
                        <rect width="24" height="24" fill="white" transform="translate(2 2)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
               
                <div class="pl-4">Выход</div>
            </button>
        </div>

    </div>
    
</template>
