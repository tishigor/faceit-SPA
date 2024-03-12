<script setup>

const props = defineProps({
  textToCopy: String,
});

const copy = () => {
  const inputElement = document.createElement('input');
  inputElement.value = props.textToCopy;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);
};
</script>

<template>
  <h1 class="gradient-text">Обновленная версия<br/>нашумевшей проги</h1>
  <h2 class="under-text">Введи match ID, например: </h2>
  <div class="copy-block">
    <text>{{ textToCopy }}</text>
    <q-btn
      @click="copy"
      icon="content_copy"
      rou
      dense
      class="q-ml-sm"
    />
  </div>

</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Rubik+One&subset=latin,cyrillic);

.gradient-text {
  //font-family: 'Rubik One', sans-serif;
  font-size: 48px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(30deg, #133c7e 0%, #0D61BC 50%, #8AA9D6);
  //border: #1D1D1D solid;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 40px;
}
.under-text {
  //font-family: 'Rubik One', sans-serif;
  font-size: 17px;
  line-height: 1;
  letter-spacing: -1.5px;
  max-width: 960px;
  font-weight: 100;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(30deg, #133c7e -100%, #0D61BC 50%, #8AA9D6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //padding-bottom: 10px;
}
</style>
