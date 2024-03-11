<script setup>

</script>

<template>
  <div class="rosters">
  <div class="roster">
    <br/>
    <div v-for="i in 5" :key="i">
<!--      <LoaderComponent width="170"/>-->
      <q-item style="width: 250px">
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" width="65%" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
    <div class="roster">
      <br/>
      <div v-for="i in 5" :key="i">
<!--        <LoaderComponent width="170" />-->
        <q-item style="width: 250px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="65%" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
