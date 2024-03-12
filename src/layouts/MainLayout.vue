<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title>
          Player Pinger
        </q-toolbar-title>
        <div class="q-pa-md row q-gutter-sm items-center">
          <q-btn color="white" text-color="primary" label="Feedback" href="https://docs.google.com/forms/d/e/1FAIpQLSdZfz2YP1a2Mglj36wuzh8lNUTZBC2hwWYiyuaGrnZYIj-rlQ/viewform?usp=sf_link" target="_blank"/>
          <div>v0.0.2</div>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
    };
  },
});
</script>
