<template>
  <h1>Job Details Page</h1>
  <p>The route: {{ id }}</p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeRouteUpdate } from 'vue-router'

export default {
    props: {
        id: String
    },
    setup(props) {

        const id = ref(props.id)

        onBeforeRouteUpdate((to, from) => {
            if (to.params.id !== from.params.id) {
                id.value = to.params.id;
            }
        })

        return { id };
    }
}
</script>

<style>

</style>