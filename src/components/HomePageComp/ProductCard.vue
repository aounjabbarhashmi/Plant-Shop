<template>
    <div
        class="max-w-[300px] w-full min-h-[500px] rounded-md shadow-md cursor-pointer hover:scale-[1.05] duration-150  ">
        <img :src="image" alt="">
        <div class=" flex flex-col justify-center items-start gap-3 p-4">
            <h1 class="  text-[24px] font-[500]">{{ label }}</h1>
            <p class="">{{ description }}</p>
            <Span>Rs. {{ price }}/- pkr</Span>
            <a href="#_" @click="() => {
                addToCart({
                    label: label,
                    image: image,
                    price: price,
                    id: id
                })
            }" class="inline-flex overflow-hidden text-white bg-[#1C1E22] rounded group">
                <span
                    class="px-3.5 py-2 text-white bg-[#CAD4AF] group-hover:bg-[#bbcb8e] flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                </span>
                <span class="pl-4 pr-5 py-2.5">Add to Cart</span>
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    addToCart: {
        type: Function,
        required: true
    }
})


</script>