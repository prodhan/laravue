<template>
    <div>
    <v-container>
            <v-alert v-model="alert"
                     border="left"
                     close-text="Close Alert"
                     color="deep-purple accent-4"
                     dark
                     dismissible>
                I'm a success alert.
            </v-alert>
            <v-btn link to="/foo">Foo</v-btn>
            <v-btn link to="/bar">Bar</v-btn>
            <router-view></router-view>

    </v-container>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
