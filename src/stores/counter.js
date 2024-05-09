import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const email = ref('')
  const Products = ref([])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setEmail(param) {
    email.value = param
  }
  function setProducts(param) {

    Products.value = param
  }
  return { count, setEmail, email, doubleCount, increment, Products, setProducts }
})
