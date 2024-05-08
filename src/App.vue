<script setup>
import { RouterView } from 'vue-router'
import FooterComp from './components/LayoutComp/FooterComp.vue';
import HeaderComp from './components/LayoutComp/HeaderComp.vue';
</script>

<template>

  <HeaderComp />
  <RouterView />
  <FooterComp />

</template>
