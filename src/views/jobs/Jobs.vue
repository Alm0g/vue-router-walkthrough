<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="options">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
      <router-link :to="{ name: 'JobEdit', params: { id: job.id } }">
        Edit {{ job.id }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    const jobs = [
        { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
        { title: 'Ninja Web  Developer', id: 2, details: 'lorem' },
        { title: 'Ninja Vue Designer', id: 3, details: 'lorem' },
    ]
    return { jobs };
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;
  }
</style>