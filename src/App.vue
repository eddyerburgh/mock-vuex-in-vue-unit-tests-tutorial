<template>
  <div id="app">
    <Actions />
    <Getters />
  </div>
</template>

<script>
import Actions from './components/Actions';
import Getters from './components/Getters';

export default {
  name: 'app',
  components: {
    Actions,
    Getters,
  },
};
</script>
