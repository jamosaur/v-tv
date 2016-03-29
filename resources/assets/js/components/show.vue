<script>
    import _ from 'underscore';
    export default {
        name: "show",
        data: function () {
            return {
                show: [],
                showName: '',
                network: [],
                image: [],
                episodes: []
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
                            var embedded = data._embedded
                            this.episodes = _.groupBy(embedded.episodes, 'season')
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

    <template v-for="season in episodes">
        <h2 class="display-4">Season {{ $index + 1 }} </h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th width="10%"></th>
                <th>Name</th>
                <th></th>
                <th width="10%">Air Date</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="episode in season">
                <tr>
                    <td>S{{ ("00" + episode.season).slice(-2) }}E{{ ("00" + episode.number).slice(-2) }}</td>
                    <td><strong>{{ episode.name }}</strong></td>
                    <td></td>
                    <td>{{ episode.airdate }}</td>
                </tr>
                <tr>
                    <td>
                        <img v-if="episode.image" v-bind:src="episode.image.medium" alt="" class="img-fluid">
                    </td>
                    <td colspan="3">
                        {{{ episode.summary }}}
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </template>
</template>

<style>
    .label {
        margin-right:0.5rem;
    }
    .genres {
        margin-bottom:1rem;
    }
</style>