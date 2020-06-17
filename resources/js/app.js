require('./bootstrap');

window.Vue = require('vue');
import vuetify from "./vuetify";
import router from "./router";
import Example from "./components/ExampleComponent";


const app = new Vue({
    el: '#app',
    vuetify,
    router,
    components:{
        'example-component': Example
    }

});
