<script setup></script>

<template>
  <main>
    <div class="wrapper">
      <div class="success" v-if="$route.params.status === 'success'">
        <h2 style="text-align: center">
          You are amazing, <span class="accent">Mellon</span>!
        </h2>
        <img src="../../public/ring2.gif" alt="">
      </div>
      <div class="fail" v-else>
        <h2>
          You are not prepared!
        </h2>
      </div>
    </div>
  </main>

</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .accent {
    color: var(--color-accent);
  }
</style>
