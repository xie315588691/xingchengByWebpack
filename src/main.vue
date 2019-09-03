<template>
  <div>
    <router-view></router-view>
    <xcFooter></xcFooter>
  </div>

</template>

<script>
    import xchead from "./common/xchead";
    import xcFooter from "./common/xcFooter";

    export default {
        name: "main",
        components: {
            xchead,
            xcFooter
        }
    }
</script>

<style scoped>

</style>
