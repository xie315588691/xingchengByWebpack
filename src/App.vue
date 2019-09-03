<template>
  <div id="app">
    <xchead></xchead>
    <router-view></router-view>
  </div>
</template>

<script>
    import xchead from "./common/xchead";

    export default {

        name: 'app',
        components: {
            xchead
        }
    }
</script>

<style>

</style>
