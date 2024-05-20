<script setup lang="ts">
defineProps<{
  userProfile?: {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    locale: string
    name: string
    picture: string
    sub: string
  } | null
}>()
</script>

<template>
  <div class="flex min-w-48 flex-col items-center justify-center gap-y-4 rounded-xl bg-zinc-100 px-4 py-8 shadow-md">
    <div class="overflow-hidden rounded-full">
      <img
        v-if="userProfile?.picture"
        class="object-cover"
        :src="userProfile.picture"
        alt="user avatar"
        referrerpolicy="no-referrer"
      >
      <img
        v-else
        class="object-cover"
        src="https://ui-avatars.com/api/?name=Tim+Lin"
        alt="avatar"
      >
    </div>

    <div class="text-zinc-900">
      {{ userProfile?.name }}
    </div>

    <div class="text-zinc-900">
      {{ userProfile?.email }}
    </div>
  </div>
</template>

<style scope></style>
