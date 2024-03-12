<script setup>
import { onMounted, ref } from 'vue';
import { fetchPlayer } from '../utils/api';

const props = defineProps({
  player_id: String,
  nickname: String,
  gamePlayerName: String,
  avatar: String,
  level: Number,
});

// const loadingPlayer = ref(false);
// const countGames = ref(0);
const stats = ref({});

onMounted(async () => {
  // todo вынести
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  const twoWeeksAgoTimestamp = Math.floor(twoWeeksAgo.getTime() / 1000);

  try {
    stats.value = await fetchPlayer(props.player_id, twoWeeksAgoTimestamp);
  } catch (error) {
    console.log(error);
  } finally {
    // loadingPlayer.value = false;
  }
});
</script>

<template>
  <q-card class="my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img v-if="avatar" :src="avatar" alt="">
          <q-avatar v-else color="primary" text-color="white">
            {{ nickname[0].toUpperCase() }}</q-avatar>

        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
<!--           todo определить макс и мин размер для компонента-->
          {{ nickname }}
<!--          WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW-->
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
      <q-card-section class="count-games">
        {{ stats.allGames }}
        <q-tooltip anchor="center right" self="center start">
          игр за две недели
        </q-tooltip>
      </q-card-section>

      <q-separator vertical inset/>

      <q-card-section class="count-games" >
        {{ stats.winnerGames }} / {{stats.loserGames}}
        <q-tooltip anchor="center right" self="center start">
          win / lose
        </q-tooltip>
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
