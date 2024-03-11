<template>
  <q-page class="flex flex-center">
<!--    <img-->
<!--      alt="Quasar logo"-->
<!--      src="~assets/quasar-logo-vertical.svg"-->
<!--      style="width: 200px; height: 200px"-->
<!--    >-->

<!--    <div class="q-pa-md row items-start q-gutter-md">-->
<!---->
<!--    </div>-->
<div class="content">
  <ErrorTeamsComponent v-if="requestError" :textToCopy/>
  <TableLoaderComponent v-else-if="loading"/>
  <EmptyTeamsComponent v-else-if="teams.length === 0" :textToCopy/>

  <TeamListComponent v-else :teams="teams" :loading="loading" />

  <div class="match-input">
    <q-input filled
             bottom-slots
             v-model="matchId"
             label="match ID или URL"
             counter
             maxlength="38"
             @keyup.ctrl.enter="()=>foo(matchId)"
             @keyup.shift="clearTeams"
             hint="Ссылка на матч тоже подойдет(пока что нет)"
             :dense="dense">
      <template v-slot:append>
        <q-icon v-if="matchId !== ''" name="close" @click="matchId = ''" class="cursor-pointer" />
      </template>
      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="foo()"/>
      </template>
    </q-input>
  </div>
</div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import TableLoaderComponent from 'components/TableLoaderComponent.vue';
import EmptyTeamsComponent from 'components/EmptyTeamsComponent.vue';
import TeamListComponent from 'components/TeamListComponent.vue';
import ErrorTeamsComponent from 'components/ErrorTeamsComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ErrorTeamsComponent,
    TeamListComponent,
    EmptyTeamsComponent,
    TableLoaderComponent,
  },
  setup() {
    const loading = ref(false);
    const requestError = ref(false);
    const teams = ref([]);
    const matchId = ref('');
    const textToCopy = ref('1-db5d0683-b5fc-4889-8511-33e45451ace3');

    const foo = async () => {
      requestError.value = false;
      loading.value = true;
      const root = import.meta.env.VITE_URL_MATCH;
      const url = root + matchId.value;
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        teams.value = response.data.teams;
      } catch (error) {
        teams.value = [];
        requestError.value = true;
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const clearTeams = () => {
      teams.value = [];
    };

    return {
      loading,
      teams,
      matchId,
      requestError,
      textToCopy,
      text: ref(''),
      dense: ref(false),
      foo,
      clearTeams,
    };
  },
});
</script>
