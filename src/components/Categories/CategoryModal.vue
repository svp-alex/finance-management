<template>
  <div class="text-center">
    <VDialog
      v-model="isDialogVisible"
      width="800"
    >
      <VCard class="pa-6">
        <CategoryForm/>
      </VCard>
    </VDialog>
  </div>
</template>

<script lang="ts" setup>
import CategoryForm from '@/components/Categories/CategoryForm.vue'
import { computed, defineProps, defineEmits } from 'vue'
import type { WritableComputedRef } from 'vue'

interface Props  {
  modelValue: Boolean,
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const isDialogVisible: WritableComputedRef<Boolean> = computed({
  get(): Boolean {
    return props.modelValue
  },
  set(val: Boolean): void {
    emits('update:modelValue', val)
  }
})

</script>