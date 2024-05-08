<script setup>
import { ref } from 'vue';
import AnimatedButton from '../CommonComp/AnimatedButton.vue';
import { useCounterStore } from '../../stores/counter'
const counter = useCounterStore();
const toggleMenu = ref(false);
const cartMenu = ref(false);

function checkOut() {
    cartMenu.value = true;
    counter.setProducts(JSON.parse(localStorage.getItem('data')))
}
function minusItem(param) {
    const filteredData = counter.Products.filter((item) => item.label != param)
    localStorage.setItem('data', JSON.stringify(filteredData));
    counter.setProducts(JSON.parse(localStorage.getItem('data')))
}
</script>

<template>
    <header class=" shadow-md flex justify-between items-center p-2 sticky top-0  bg-[#FCFBF4]   w-full  ">
        <img alt="app logo" class="p-2 ml-4" src="../../assets/images/logo.png" width="60" height="60" />
        <nav :class="!toggleMenu ? ' slideout' : 'menu shadow-lg'">
            <svg xmlns="http://www.w3.org/2000/svg" class="x-mark w-[30px] cursor-pointer" viewBox="0 0 384 512" @click="() => {
                toggleMenu = false;

            }">
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
        <nav :class="!cartMenu ? ' cartOut' : 'cart shadow-lg '">
            <svg xmlns="http://www.w3.org/2000/svg" v-if="cartMenu"
                class=" w-[30px] absolute top-2 left-2 cursor-pointer" viewBox="0 0 384 512" @click="() => {
                    cartMenu = false;

                }">
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="flex flex-col w-full gap-4 items-center  px-8 p-2">
                <h1 class=" font-[600] text-[28px] ">Your Cart</h1>
                <div class="h-[70vh] flex flex-col w-full gap-4 items-center justify-center  overflow-y-auto">

                    <h1 class="" v-if="counter.Products.length == 0">No Item</h1>
                    <div class="flex w-full min-h-[150px]" v-for="item in counter.Products" :key="item">
                        <img class="w-[150px]" :src="item.image" alt="">
                        <div class="bg-white pl-6 w-full p-2">
                            <h1>{{ item.label }}</h1>
                            <span>Quantity : 1</span> <br>
                            <span>{{ item.price }}</span> <br>

                            <button class="bg-red-500 text-white px-5 py-2 rounded-md "
                                @click="minusItem(item.label)">Discard</button>
                        </div>
                    </div>
                </div>
                <AnimatedButton label="Check out!" />
            </div>
        </nav>
        <div class="flex ">
            <div>
                <div
                    class="w-[20px] text-center aspect-square flex justify-center items-center text-[12px] bg-red-500 rounded-[100%] text-white ">
                    {{ counter.Products?.length }}</div> <svg class="w-[30px] mr-7 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" @click="() => {
                        checkOut()


                    }" viewBox="0 0 576 512">

                    <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />

                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[30px] mr-6 bars cursor-pointer" @click="() => {
                toggleMenu = !toggleMenu;

            }" viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </div>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700');

.cartOut {
    box-shadow: inset 1 1 2000px rgba(255, 255, 255, .5);
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    height: 100vh;
    position: fixed;
    top: 0%;
    width: 300px;
    right: -100%;
    z-index: 200;
    padding-top: 50px;
    transition: all ease-in;
    animation: slideout 0.9s 1;
}

.cart {
    box-shadow: inset 1 1 2000px rgba(255, 255, 255, .5);
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    height: 100vh;
    position: fixed;
    top: 0%;
    width: 300px;
    right: 0%;
    z-index: 200;
    padding-top: 50px;
    transition: all ease-in;
    animation: slide 0.9s 1;
}

@keyframes slide {
    0% {
        right: -100%;
    }

    100% {
        right: 0%
    }

}

@keyframes slideout {
    0% {
        right: 0%;
    }

    100% {
        right: -100%
    }

}

@media (max-width: 630px) {
    .menu {
        box-shadow: inset 1 1 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        height: 100vh;
        position: fixed;
        top: 0%;
        width: 300px;
        right: 0%;
        z-index: 200;
        padding-top: 80px;
        transition: all 0.2 ease-in;
        animation: slide 0.9s 1;
    }



    .slideout {
        box-shadow: inset 1 1 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        height: 100vh;
        position: fixed;
        top: 0%;
        width: 300px;
        right: -100%;
        z-index: 200;
        padding-top: 80px;
        transition: all 0.2 ease-in;
        animation: slideout 0.9s 1;
    }



    .x-mark {
        position: absolute;
        top: 2%;
        left: 5%;
        color: #0A6E0E;
    }

    .menu ul,
    .slideout ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

    }

    .menu li:hover,
    .slideout li:hover {
        border-bottom: 1px solid #0A6E0E;
    }

    .menu li,
    .slideout li {
        display: block;
        transition: all 0.2 ease-in;
        width: 100%;
    }

    .menu li a,
    .slideout li a {
        text-align: left;
        padding: 20px;
    }

}

@media (min-width: 631px) {

    .x-mark,
    .bars {
        display: none;
    }
}

.menu ul,
.slideout ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

.menu li,
.slideout li {
    display: inline-block;
    color: #0A6E0E;
    margin: 0 15px;
}

.menu a,
.slideout a {
    font-size: 22px;
    text-transform: uppercase;
    text-decoration: none;

    display: block;
    position: relative;
    padding: 4px 0;
}

.menu a::before,
.slideout a::before {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    transition: 0.5s transform ease;
    transform: scale3d(0, 1, 1);
    transform-origin: 0 50%;
}

.menu a:hover::before,
.slideout a:hover::before {
    transform: scale3d(1, 1, 1);
}

.menu a::before,
.slideout a::before {
    background: #0A6E0E;
    transform-origin: 100% 50%;
}

.menu a:hover::before,
.slideout a:hover::before {
    transform-origin: 0 50%;
}
</style>