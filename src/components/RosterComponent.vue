<script setup>
import PlayerComponent from 'components/PlayerComponent.vue';

defineProps({
  roster: Array,
  name: String,
  loading: Boolean,
});

</script>

<template>
  <div class="roster">
    <p class="roster__name">{{name}}</p>
    <div class="q-pa-md items-start q-gutter-md">
      <PlayerComponent
        v-for="player in roster"
        :key="player.player_id"
        :player_id="player.player_id"
        :avatar="player.avatar"
        :level="player.game_skill_level"
        :nickname="player.nickname"
        :game-player-name="player.game_player_name"
      />
      </div>
  </div>

</template>

<style scoped>

</style>
