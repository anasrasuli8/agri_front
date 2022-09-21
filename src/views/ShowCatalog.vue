<script setup>
    import { onMounted,ref } from 'vue'
    import { http } from '../hooks/useApi';
    import { useRoute } from 'vue-router';
    import TopBar from '../components/TopBar.vue';
    
    const ad = ref({});
    const route = useRoute();

    onMounted( async() => {
        await http.get(`ads/${route.params.id}`).then((res) => {
                ad.value = res.data.data;
            });
    })
    </script>
    
    <template>
      <div>
        <TopBar />
        
        <div class="min-h-[80rem] bg-white sm:shadow">
            <img
                :src="ad.image"
                class="bg-white rounded object-cover w-full max-h-[300px] p-4"
                :alt="ad.name"
            />
            <div class="w-full text-sm text-gray-500 px-4 pb-3 pt-0">
                <span class="pr-4">{{ad.date}}</span>
                <span class="pr-4">{{ad.time}}</span>
                <span class="pr-4">{{ad.address}}</span>
            </div>
            <h3 class="text-xl px-4 pb-6 font-medium text-gray-700 border-b border-gray-100">{{ad.name}}</h3>
            <div class="px-4 pt-6 border-b border-gray-100">
                <p class="text-sm text-gray-500 pb-2">Стоимость:</p>
                <p class="text-2xl font-medium text-cgreen pb-5">{{ad.price}} смн / сутки</p>
            </div>
            <div class="px-4 py-6 border-b border-gray-100">
                <h3 class="text-xl pb-6 font-medium text-gray-700">Описание</h3>
                <p class="text-lg">{{ad.description}}</p>
            </div>
        </div>
        <div class="w-full sm:w-[40rem] fixed bottom-5 z-10 bg-white px-4 py-3 shadow">
            <a class="w-full block bg-cgreen rounded py-2 text-center text-white" :href="'tel:'+ad.phone">Позвонить</a>
        </div>
      </div>
     
    </template>
    