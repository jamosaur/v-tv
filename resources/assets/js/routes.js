export function configRouter (router) {
    router.map({
        ':showName': {
            name: 'show',
            component: require('./components/show.vue')
        },
        '/': {
            name: 'home',
            component: require('./components/home.vue')
        }
    })
}