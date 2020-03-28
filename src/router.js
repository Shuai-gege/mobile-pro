import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./views/Home/Home.vue'),
            meta: {
                ifShow_FootBar: true,
                title: "首页"
            }
        }, {
            path: '/hot/:id',
            name: 'hot',
            component: () =>
                import ('./views/hot/hot.vue'),
            meta: {
                ifShow_FootBar: true,
                title: "热卖"
            }
        }

    ]
});