<script setup>
    import { useRouter, RouterLink } from 'vue-router'
</script>

<template>
    <section class="w-full sm:w-[40rem] fixed bottom-0 z-10 bg-white">
        <div id="tabs" class="flex justify-between pb-2">
            <RouterLink to="/"
             class="w-full focus:text-cgreen hover:text-cgreen justify-center inline-block text-center pt-2 pb-1"
             v-slot="{ isActive }"
             >
                <svg v-if="isActive" width="23" height="25" class="inline-block mb-2" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14H11V16H4V14ZM4 10H14V12H4V10ZM4 6H14V8H4V6ZM16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C1.86 2 1.73 2.01 1.6 2.04C1.21 2.12 0.86 2.32 0.59 2.59C0.41 2.77 0.26 2.99 0.16 3.23C0.0600001 3.46 0 3.72 0 4V18C0 18.27 0.0600001 18.54 0.16 18.78C0.26 19.02 0.41 19.23 0.59 19.42C0.86 19.69 1.21 19.89 1.6 19.97C1.73 19.99 1.86 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 1.75C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25C8.59 3.25 8.25 2.91 8.25 2.5C8.25 2.09 8.59 1.75 9 1.75ZM16 18H2V4H16V18Z" fill="#27AE60"/>
                </svg>

                <svg v-else width="23" height="25" class="inline-block mb-2" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14H11V16H4V14ZM4 10H14V12H4V10ZM4 6H14V8H4V6ZM16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C1.86 2 1.73 2.01 1.6 2.04C1.21 2.12 0.86 2.32 0.59 2.59C0.41 2.77 0.26 2.99 0.16 3.23C0.0600001 3.46 0 3.72 0 4V18C0 18.27 0.0600001 18.54 0.16 18.78C0.26 19.02 0.41 19.23 0.59 19.42C0.86 19.69 1.21 19.89 1.6 19.97C1.73 19.99 1.86 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 1.75C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25C8.59 3.25 8.25 2.91 8.25 2.5C8.25 2.09 8.59 1.75 9 1.75ZM16 18H2V4H16V18Z" fill="#999999"/>
                </svg>
                <span class="tab tab-home block text-xs">Объявления</span>
            </RouterLink>

            <RouterLink to="/add-ads" 
                class="w-full focus:text-cgreen hover:text-cgreen justify-center inline-block text-center pt-2 pb-1"
                v-slot="{ isActive }"
             >

                <svg v-if="isActive" width="25" height="25" class="inline-block mb-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#27AE60"/>
                </svg>


                <svg v-else width="25" height="25" class="inline-block mb-2"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#999999"/>
                </svg>

                <span class="tab tab-home block text-xs">Добавить</span>
            </RouterLink>

            <RouterLink to="/favourite"
                class="w-full focus:text-cgreen hover:text-cgreen justify-center inline-block text-center pt-2 pb-1"
                v-slot="{ isActive }"
             >
                <svg v-if="isActive" width="25" height="25" class="inline-block mb-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.34255 3.77795C1.5687 3.23198 1.90017 2.7359 2.31804 2.31804C2.7359 1.90017 3.23198 1.5687 3.77795 1.34255C4.32392 1.1164 4.90909 1 5.50004 1C6.09099 1 6.67616 1.1164 7.22213 1.34255C7.7681 1.5687 8.26417 1.90017 8.68204 2.31804L10 3.63604L11.318 2.31804C12.162 1.47412 13.3066 1.00001 14.5 1.00001C15.6935 1.00001 16.8381 1.47412 17.682 2.31804C18.526 3.16196 19.0001 4.30656 19.0001 5.50004C19.0001 6.69352 18.526 7.83812 17.682 8.68204L10 16.364L2.31804 8.68204C1.90017 8.26417 1.5687 7.7681 1.34255 7.22213C1.1164 6.67616 1 6.09099 1 5.50004C1 4.90909 1.1164 4.32392 1.34255 3.77795Z" stroke="#27AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                

                <svg v-else width="25" height="25" class="inline-block mb-2" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.34255 3.77795C1.5687 3.23198 1.90017 2.7359 2.31804 2.31804C2.7359 1.90017 3.23198 1.5687 3.77795 1.34255C4.32392 1.1164 4.90909 1 5.50004 1C6.09099 1 6.67616 1.1164 7.22213 1.34255C7.7681 1.5687 8.26417 1.90017 8.68204 2.31804L10 3.63604L11.318 2.31804C12.162 1.47412 13.3066 1.00001 14.5 1.00001C15.6935 1.00001 16.8381 1.47412 17.682 2.31804C18.526 3.16196 19.0001 4.30656 19.0001 5.50004C19.0001 6.69352 18.526 7.83812 17.682 8.68204L10 16.364L2.31804 8.68204C1.90017 8.26417 1.5687 7.7681 1.34255 7.22213C1.1164 6.67616 1 6.09099 1 5.50004C1 4.90909 1.1164 4.32392 1.34255 3.77795Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="tab tab-home block text-xs">Избранное</span>
            </RouterLink>

            <RouterLink to="/profile"
                class="w-full focus:text-cgreen hover:text-cgreen justify-center inline-block text-center pt-2 pb-1"
                v-slot="{ isActive }"
             >

                <svg v-if="isActive" width="25" height="25" class="inline-block mb-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z" fill="#27AE60"/>
                </svg>

                <svg v-else width="25" height="25" class="inline-block mb-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z" fill="#999999"/>
                </svg>
                <span class="tab tab-home block text-xs">Профиль</span>
            </RouterLink>
            
        </div>
    </section>
  </template>