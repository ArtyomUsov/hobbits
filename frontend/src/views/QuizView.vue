<script setup>
import PicturePicker from "@/components/PicturePicker.vue";
import QuizForm from "@/components/QuizForm.vue";

import {onMounted, ref} from "vue";

const dwarfId = ref(null);
async function fetchRandomDwarfId() {
  try {
    const response = await fetch('/api/quiz')
    const data = await response.json();
    dwarfId.value = data.id;
  }
  catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchRandomDwarfId();
})
</script>

<template>
  <main>
    <div class="wrapper">
      <PicturePicker :dwarfId="dwarfId"/>
      <QuizForm :dwarfId="dwarfId" />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
