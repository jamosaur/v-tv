<script>
    import _ from 'underscore';
    export default {
        name: "home",
        data: function () {
            return {
                showName: '',
                suggestions: []
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
            },
            getSuggestions: function() {
                this.$http.get('http://api.tvmaze.com/search/shows?q=' + this.showName, function (data) {
                    this.suggestions = _.groupBy(data, function(element, index){
                        return Math.floor(index/3);
                    });
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
                   class="form-control text-xs-center search"
                   placeholder="Search for a show"
                   v-model="showName"
                   @keyup.enter="findShow"
                   @keyup="getSuggestions"
            >
        </div>

        <div class="text-xs-center" v-if="showName == 'larachat'">
            <iframe src="//giphy.com/embed/nH5WUTluAYBFu" width="480" height="480" frameborder="0"
                    class="giphy-embed"></iframe>
        </div>

        <template v-for="suggestions in suggestions">
            <div class="row" style="margin:1rem;">
                <template v-for="suggestion in suggestions">
                    <div class="col-sm-4 text-xs-center">
                        <a v-link="{ name: 'show', params:{ showName: suggestion.show.name }}">
                            <img v-if="suggestion.show.image" v-bind:src="suggestion.show.image.medium"
                                 class="img-fluid center-xs-block center-block" alt="">
                            {{ suggestion.show.name }}
                        </a>
                    </div>
                </template>
            </div>
        </template>

    </div>
</template>

<style lang="sass">
    .search {
        margin-bottom:5rem;
    }
</style>