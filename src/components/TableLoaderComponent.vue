<script setup>

import LoaderComponent from 'components/LoaderComponent.vue';
</script>

<template>
  <div class="rosters">
  <div class="roster">
    <br/>
    <div v-for="i in 5" :key="i">
      <LoaderComponent width="170"/>
    </div>
  </div>
    <div class="roster">
      <br/>
      <div v-for="i in 5" :key="i">
        <LoaderComponent width="170" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
