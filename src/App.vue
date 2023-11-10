<template>
  <!-- <div class="App"> -->
    <!-- this is first page, {{msg}}
		<router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
		  <router-view />
  <!-- </div> -->
</template>

<script>
export default {
  name: 'App',
  created() {
    debugger;
    // this.$router.push('/bar');
  },
  data() {
    return {
        msg: "hello",
    };
  }
};
</script>