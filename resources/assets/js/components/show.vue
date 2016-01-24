<script>
    export default {
        name: "show",
        data: function () {
            return {
                show: [],
                showName: '',
                network: [],
                image: []
            }
        },
        methods: {
            getShow: function () {
                this.$http.get(
                        'http://api.tvmaze.com/singlesearch/shows?q='+ this.showName +'&embed=episodes',
                        function (data) {
                            this.show = data
                            this.network = data.network
                            this.image = data.image
                        })
            }
        },
        created: function () {
            this.showName = this.$route.params.showName
            this.getShow()
        }
    }
</script>

<template>
    <h1>{{ show.name | capitalize }}</h1>
    <div class="genres">
        <span class="label label-pill label-default" :class="{
            'label-danger': show.status == 'Ended',
            'label-success': show.status == 'Running'

        }">{{ show.status }}</span>
        <span class="label label-default label-pill" v-for="genre in show.genres">{{ genre }}</span>
        <span class="label label-pill label-primary">{{ show.runtime }} mins</span>
        <!--<span class="label label-pill label-primary">{{ show.network.name }}</span>-->
        <span class="label label-pill label-primary">{{ network.name }}</span>
    </div>

    <div class="row">
        <div class="col-sm-9">
            {{{ show.summary }}}
        </div>
        <div class="col-sm-3">
            <img src="{{ image.original }}" alt="{{ show.name }}" class="img-fluid">
        </div>
    </div>
    <pre>{{ show | json }}</pre>
</template>

<style>
    .label {
        margin-right:0.5rem;
    }
    .genres {
        margin-bottom:1rem;
    }
</style>