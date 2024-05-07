<script setup>
defineProps({
  dwarfId: Number
})
</script>

<template>
    <div style="width: 30%" v-if="dwarfId !== null">
      <img :src="`http://localhost:8000/${dwarfId}.svg?id=${dwarfId}`" alt="" style="width: 100%; max-height: 400px">
    </div>
</template>
