<template>
  <input
    ref="imageInput"
    type="file"
    class="hidden"
    multiple
    accept="image/*"
    @change="onChange"
  >
  <img
    class="w-32 h-32 object-cover bg-surface-500 text-5xl rounded-full cursor-pointer"
    :src="imageURL"
    @click="imageInput.click()"
  >
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { computed, onUnmounted, ref } from "vue";
const props = defineProps<{
	modelValue?: File
	previewSrc?: string
}>();
const emit = defineEmits(["changed", "update:modelValue"]);
const imageInput = ref() as Ref<HTMLInputElement>;
const tmpImageURL = ref("");
const imageURL = computed(() => props.modelValue ? tmpImageURL.value : props.previewSrc);
onUnmounted(() => URL.revokeObjectURL(tmpImageURL.value!));
const onChange = (event: Event) => {
	const file = (event.target as HTMLInputElement).files![0];
	if (!file) return;
	tmpImageURL.value = URL.createObjectURL(file);
	emit("update:modelValue", file);
	emit("changed", file);
};
</script>
