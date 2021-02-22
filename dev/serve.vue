<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from '@/my-button.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    MyButton
  }
});
</script>

<template>
  <div id="app">
    <my-button />
  </div>
</template>
