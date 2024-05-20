<script setup lang="ts">
const userProfile = ref(null)
const router = useRouter()

async function fetchUserProfile() {
  const response = await fetch('/api/user/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

fetchUserProfile().then((res) => {
  userProfile.value = res.data
})

function goHome() {
  router.push('/')
}
</script>

<template>
  <div>
    <MemberCard :user-profile />
  </div>
  <div class="mt-8">
    <button
      type="button"
      class="px-2 py-1 text-zinc-100"
      @click="goHome"
    >
      Back to Home
    </button>
  </div>
</template>

<style scope></style>
