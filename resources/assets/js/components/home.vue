<script>
    export default {
        name: "home",
        data: function () {
            return {
                showName: ''
            }
        },
        methods: {
            findShow: function () {
                console.log(this.showName)
                this.$route.router.go({
                    name: 'show',
                    params: {
                        showName: this.showName
                    }
                })
            }
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-xs-12 text-xs-center">
            <input type="text"
                   name="showName"
                   class="form-control text-xs-center"
                   placeholder="Search for a show"
                   v-model="showName"
                   @keyup.enter="findShow"
            >
        </div>

        <div class="text-xs-center">
            <p v-if="showName" class="lead">Press enter to search for {{ showName }}</p>
        </div>
    </div>
</template>