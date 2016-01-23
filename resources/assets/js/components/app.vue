<script>
    import navbar from './navbar.vue'

    export default {
        name: "app",
        components: {
            navbar
        }
    }
</script>

<template>
    <navbar></navbar>
    <div class="container">
        <router-view></router-view>
    </div>
</template>