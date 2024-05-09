<script setup>
import ProductCard from './ProductCard.vue';
const array = [
    {
        label: 'Autumn Flowers',
        description: 'Autumn flowers, with their warm hues, offer nature\'s final embrace before winter\'s arrival, painting landscapes with fleeting yet vivid bursts of color.',
        image: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 10000,
    }, {
        label: 'Jasmine Flowers',
        description: 'Jasmine is a fragrant flower commonly used in perfumes and teas, known for its delicate white petals and sweet, intoxicating scent.',
        image: 'https://images.unsplash.com/photo-1555485898-0f23a85a607f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 80000,
    }, {
        label: 'Flower Bouquet',
        description: 'A flower bouquet is a thoughtful arrangement of vibrant blooms, elegantly curated to convey heartfelt sentiments.',
        image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 35000,
    }
    , {
        label: 'Floral Flower',
        description: 'Floral flowers, meticulously arranged, bring vibrant bursts of color and evoke emotions, making every occasion unforgettable.',
        image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 40000,
    }
]

import { useCounterStore } from '../../stores/counter'
import { ref } from 'vue';
const counter = useCounterStore();
function addToCart(item) {

    if (JSON.parse(localStorage.getItem('data'))) {
        let data = JSON.parse(localStorage.getItem('data'));
        data.push(item)
        localStorage.setItem('data', JSON.stringify(data));
        counter.setProducts(JSON.parse(localStorage.getItem('data')))
    }
    else {
        let data = [];
        data.push(item)
        localStorage.setItem('data', JSON.stringify(data));
        counter.setProducts(JSON.parse(localStorage.getItem('data')))
    }


}
const toggleNotify = ref(false);
function toggleNotifyHandler() {
    toggleNotify.value = true;
    setTimeout(() => {
        toggleNotify.value = false;
    }, 2000)
}
</script>
<template>
    <div
        :class="toggleNotify ? ' text-[20px] font-semibold flex justify-center items-center z-30 max-w-[300px] w-[100%] h-20 rounded-md bg-black text-white fixed top-3 left-0 transition-all ' : ' max-w-[300px] w-[100%]  text-[20px] font-semibold flex justify-center items-center z-30 rounded-md w-full h-20 bg-black text-white fixed top-3  transition-all left-[-100%] '">
        Added Item successfully to cart </div>
    <div class=" min-h-[600px] pb-20 w-full pt-9 px-2  flex gap-8 flex-col justify-center items-center" id="products">
        <h1 class="text-[28px] font-extrabold bg-['../../assets/images/leaves.jpg']"> Our Products </h1>
        <div
            class="w-full  p-5 grid gap-4 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center place-items-center">
            <ProductCard v-for="item in array" :key="item.label" :image="item.image" :label="item.label"
                :description="item.description" :price="item.price" :addToCart="addToCart"
                :toggleNotifyHandler="toggleNotifyHandler" />
        </div>
    </div>
</template>
