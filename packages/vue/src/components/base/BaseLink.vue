<template>
  <a v-if="href" draggable="false" :href="href" class="baselink" target="_blank">
    <slot />
  </a>
  <router-link v-else draggable="false" class="baselink">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
	href?: string
}>();

</script>

<style scoped lang="postcss">
.baselink {
  @apply hover:underline focus:underline   text-primary-300;
}
</style>
