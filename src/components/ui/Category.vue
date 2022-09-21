<script setup>
    defineProps({
        item: {
            type: Object,
        },
    })
</script>
    
<template>
    <div class="w-100 border-b px-4 py-3 flex hover:bg-gray-50 focus:bg-gray-50">
        <img :src="item.icon" width="44" height="44" />
        <div class="pl-5">
            <h5 class="font-medium">{{item.name}}</h5>
            <p class="text-xs text-gray-500">{{item.ads_count}} объявлений</p>
        </div>
    </div>
</template>
