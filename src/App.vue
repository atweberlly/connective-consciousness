<template>
  <div class="min-h-screen bg-light text-gray-900 antialiased">
    <GlobalHeader />
    <router-view></router-view>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>
