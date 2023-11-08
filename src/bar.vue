<template>
  <div class="App">
  {{msg}}
  </div>
</template>

<script>
import Chart from './chart';
console.log(Chart.age);
export default {
  name: 'foo',
  data() {
    return {
        msg: "this is bar page",
    };
  }
};
</script>