<template>
  <div class="App">
  {{msg}}
  </div>
</template>

<script>
import Chart from './chart';
Chart.age = '20';
export default {
  name: 'foo',
  data() {
    return {
        msg: "this is foo page",
    };
  }
};
</script>