<script setup>import AnimatedButton from '../CommonComp/AnimatedButton.vue';</script>
<template>
    <div
 to="#products"
        class="min-h-[600px] flex justify-center gap-2 p-2 bg-fixed items-center flex-col bg-no-repeat bg-contain bg-right-bottom bg-white  w-full image">
        <h1
            class="text-transparent   text-[70px] font-[900] text-image  bg-contain inline-block bg-clip-text">
            In the
            Garden
            of Growth
        </h1>
        <p class="text-[#095B0D] font-[400] max-w-[600px] text-center w-full">Plants are the poets of the earth,
            silently
            composing verses of life through their graceful dance with the
            sun and soil.</p>
        <AnimatedButton label="Buy Now!"  to="#products"></AnimatedButton>

    </div>

</template>

<style scoped>


.text-image {
    background-image: url("https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

}

.image {
    background-image: url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

}
</style>