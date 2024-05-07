<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
 <h1> Rules </h1>
  <ol>
    <li>Try  to recognize character from a children's fantasy novel -  The Hobbit, or There and Back Again </li>
    <li>Fill a form on  <RouterLink to="/">Quiz</RouterLink> page</li>
    <li>A Name value must begin with capital letters </li>
    <li>You must replace characters <span class="accent">í</span> and <span class="accent">ó</span> with regular <span class="accent">i</span> and <span class="accent">o</span> respectively</li>
    <li>A Age of character must be calculated at the moment of Battle of Five Armies</li>
  </ol>
</template>

<style scoped>
  .accent {
    color: var(--color-accent);
  }
</style>
