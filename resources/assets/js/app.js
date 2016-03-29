import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $
require('../my-ui-kit/js/npm.js')

import app from './components/app.vue'
import { configRouter } from './routes'

Vue.use(Router)
Vue.use(Resource)
Vue.config.debug = true;

var router = new Router()
configRouter(router)

router.beforeEach(function () {
    window.scrollTo(0, 0)
})

//router.redirect({
//    '*': '/home'
//})

router.start(app, '#app')