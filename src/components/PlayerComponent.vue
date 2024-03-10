<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';

const props = defineProps({
  player_id: String,
  nickname: String,
  avatar: String,
});

// const loadingPlayer = ref(false);
const countGames = ref(0);

onMounted(async () => {
  const url = import.meta.env.VITE_URL_PLAYER_HISTORY.replace('<player_id>', props.player_id);
  const apiKey = import.meta.env.VITE_API_KEY;

  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  const twoWeeksAgoTimestamp = Math.floor(twoWeeksAgo.getTime() / 1000);

  // получил игры игрока
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: {
      limit: 100,
      from: twoWeeksAgoTimestamp,
    },
  })
    .then((response) => {
      console.log(response.data.items);
      // считаю игры игрока
      response.data.items.forEach((item) => {
        console.log('qq');

        if (item.game_id === 'cs2' && item.competition_name === 'COMPETITIVE 5v5') {
          countGames.value += 1;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      // loadingPlayer.value = false;
    });
});

</script>

<template>
  <q-card class="my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="avatar">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ nickname }}</q-item-label>
        <q-item-label caption>{{ countGames }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<style scoped>

</style>
