<template>
  <div class="App">
  {{msg}}
   <iframe :src="'/foo'"></iframe>
  <goo/>
  </div>
</template>

<script>
import Chart from './chart';
import goo from './goo.vue';
console.log(Chart.age);
export default {
  name: 'foo',
  data() {
    return {
        msg: "this is bar page",
    };
  },
  components: {
    goo: goo
  },
  created() {
    debugger
  }
};
</script>