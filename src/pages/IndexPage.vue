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

    <TableLoaderComponent v-if="loading"/>
    <EmptyTeamsComponent v-else-if="teams.length === 0" />
    <TeamListComponent v-else :teams="teams" :loading="loading" />

    <div class="match-input">
      <span>Введи че-нить, например: 1-2464a08c-f58d-4c71-a0ab-bc70c3aed038</span>
      <textarea v-model="matchId"
                @keyup.ctrl.enter="()=>foo(matchId)"
                @keyup.shift="clearTeams"
                placeholder="type your match id or url link">
      </textarea>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import TableLoaderComponent from 'components/TableLoaderComponent.vue';
import EmptyTeamsComponent from 'components/EmptyTeamsComponent.vue';
import TeamListComponent from 'components/TeamListComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { TeamListComponent, EmptyTeamsComponent, TableLoaderComponent },
  setup() {
    const loading = ref(false);
    const teams = ref([]);

    const foo = async (matchId) => {
      loading.value = true;
      const root = import.meta.env.VITE_URL_MATCH;
      console.log(import.meta.env.VITE_URL_MATCH);
      // const matchId = '1-2464a08c-f58d-4c71-a0ab-bc70c3aed038';
      const url = root + matchId;
      console.log(url);

      const apiKey = import.meta.env.VITE_API_KEY;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        console.log(response);
        teams.value = response.data.teams;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const clearTeams = () => {
      console.log('clearTeams');
      teams.value = [];
    };

    return {
      loading,
      teams,
      foo,
      clearTeams,
    };
  },
});
</script>
