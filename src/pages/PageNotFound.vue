<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not found!</h1>
    <p class="text-large">
      Ooops, we couldn't find what are you looking for. What you
      <router-link :to="{ name: 'Home' }">don't go home?</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.headingLarge {
  font-size: 100px;
}
.text-large {
  font-size: 50px;
}
.centered {
  text-align: center;
}
</style>
