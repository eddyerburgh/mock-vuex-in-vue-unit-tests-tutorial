<template>
  <div class="text-align-center">
    <input
      id="action-input"
      type="text"
      @input="actionInputIfTrue"
    />
    <button
      id="action-click"
      @click="actionClick()"
    >
      Click
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default{
    methods: {
      ...mapActions([
        'actionClick',
      ]),
      actionInputIfTrue: function actionInputIfTrue(event) {
        const inputValue = event.target.value;
        if (inputValue === 'input') {
          this.$store.dispatch('actionInput', { inputValue });
        }
      },
    },
  };
</script>
