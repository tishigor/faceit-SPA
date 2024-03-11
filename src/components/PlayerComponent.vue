<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';

const props = defineProps({
  player_id: String,
  nickname: String,
  gamePlayerName: String,
  avatar: String,
  level: Number,
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
      // console.log(response.data.items.length);
      // console.log(response);
      // считаю игры игрока
      response.data.items.forEach((item) => {
        if (item.game_id === 'cs2' && item.competition_name === 'COMPETITIVE 5v5') {
          countGames.value += 1;
          // console.log(Object.values(item.teams.faction1.players));
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
          <img v-if="avatar" :src="avatar" alt="avatar">
          <q-avatar v-else color="primary" text-color="white">
            {{ nickname[0].toUpperCase() }}</q-avatar>

        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          {{ nickname }}
          <q-tooltip anchor="center right" self="center start">
            {{ gamePlayerName }}
          </q-tooltip>
        </q-item-label>
        <q-separator horyzontal/>
        <q-item-label caption>
          lvl {{ level }}
        </q-item-label>
      </q-item-section>

    </q-item>
    <q-card-section horizontal>
      <q-card-section>
        {{ countGames }}
        <q-tooltip anchor="center right" self="center start">
          игр за две недели
        </q-tooltip>
      </q-card-section>

      <q-separator vertical inset/>

      <q-card-section>

        <q-tooltip anchor="center right" self="center start">
          Всем ку
        </q-tooltip>
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
