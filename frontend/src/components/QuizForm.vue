<script setup>
import {ref} from "vue";
import router from "@/router";

const name = ref('');
const age = ref('')

const props = defineProps({
  dwarfId: Number
})

async function checkResult() {
  try {
    const response = await fetch('/api/check_answer', {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        id: props.dwarfId
      }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await response.json();
    if(data.success) {
      router.push('/result/success');
    } else {
      router.push('/result/error')
    }
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <form class="quiz-form">
    <label class="quiz-form__input">
      <input class="quiz-form__field" type="text" name="name" placeholder="" id="name" v-model="name">
      <span class="quiz-form__label">Name</span>
    </label>

    <label class="quiz-form__input">
      <input class="quiz-form__field" type="text" name="age" placeholder="" id="age" v-model="age">
      <span class="quiz-form__label">Age</span>
    </label>

    <button class="quiz-form__button" @click.prevent="checkResult"> Send answer </button>
  </form>
</template>

<style scoped>
  .quiz-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
  }
  .quiz-form__input {
    position: relative;
    margin-bottom: 2rem;
  }
  .quiz-form__label {
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * .5);
    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
    background: pink;
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    background: var(--color-background);
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
  }
  .quiz-form__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    background: transparent;
  }
  .quiz-form__field:focus + .quiz-form__label,
  .quiz-form__field:not(:placeholder-shown) + .quiz-form__label {
    transform: translate(.25rem, -65%) scale(.8);
    color: var(--color-accent);
  }

  .quiz-form__button {
    width: 100%;
    color: #ffffff;
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-accent);
    border: none;
    font-weight: 900;
  }
</style>
