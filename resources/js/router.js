import Vue from 'vue';
import VueRouter from 'vue-router';
import {modes} from "vuetify/lib/components/VColorPicker/VColorPickerEdit";
const Foo = { template: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, cum.</div>' }
const Bar = { template: '<div>Lorem ipsum dolor sit amet.</div>' }

Vue.use(VueRouter);

const routes = [
    {
        path:'/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar

    },


];

export default new VueRouter({routes});
