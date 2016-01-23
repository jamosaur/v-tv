<script>
    export default{
        name: "navbar"
    }
</script>

<template>
    <nav class="navbar navbar-dark bg-inverse">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
            ☰
        </button>
        <div class="collapse navbar-toggleable-xs" id="navbar-header">
            <!--<ul class="nav navbar-nav pull-xs-left">-->
                <!--<input type="text"-->
                       <!--name="showName"-->
                       <!--class="form-control text-xs-center"-->
                       <!--placeholder="Search for a show"-->
                       <!--v-model="showName"-->
                       <!--@keyup.enter="home.findShow"-->
                <!--&gt;-->
            <!--</ul>-->
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item" v-link-active>
                    <a class="nav-link" v-link="{ name: 'home'}">Home</a>
                </li>
            </ul>
        </div>
    </nav>
</template>