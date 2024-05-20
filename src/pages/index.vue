<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="flex items-center justify-center">
    <GoogleLoginButton
      as="a"
      href="http://localhost:3000/api/auth/google/login"
    />
  </div>
</template>

<style scope></style>
