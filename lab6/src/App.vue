<template>
  <LoginPanel></LoginPanel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './components/LoginPanel.vue';

export default defineComponent({
  name: 'App',
  components: {
    LoginPanel
  }
});
</script>

