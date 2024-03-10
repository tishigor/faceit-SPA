<script setup>
import RosterComponent from 'components/RosterComponent.vue';

defineProps({
  teams: Object,
  loading: Boolean,
});
</script>

<template>

  <div class="rosters">
    <RosterComponent
        v-for="(team, key) in teams"
        :id="key"
        :key="key"
        :name="team.name"
        :roster="team.roster"
        :loading="loading"
  />
  </div>

</template>

<style scoped>

</style>
