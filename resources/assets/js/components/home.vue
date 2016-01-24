<script>
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
                    this.suggestions = data
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
                   @keyup="getSuggestions"
            >
        </div>

        <div class="text-xs-center">
            <p v-if="showName" class="lead">Press enter to search for {{ showName }}</p>
        </div>

        <ul v-if="suggestions !== null">
            <li v-for="suggestion in suggestions">
                <a v-link="{ name: 'show', params:{ showName: suggestion.show.name }}">{{ suggestion.show.name }}</a>
            </li>
        </ul>
    </div>
</template>