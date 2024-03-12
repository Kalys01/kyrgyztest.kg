<template>
<div class="relative group">
   <input
    id="labelname" required 
    class="outline-none peer px-2 h-full text-gray-900 dark:text-gray-300 dark:bg-gray-900 block min-w-[260px] py-1.5 placeholder:text-gray-300 hover:shadow-sm border-[1px] hover:border-mainColor focus:shadow-sm focus:border-mainColor text-sm sm:text-md sm:leading-6 transition-all duration-200"
    :class="[rounded, border, focus]"
    :type="type"
    :placeholder="pleaceholder"
    :autocomplete="autocomplete"
    :value="modelValue"
    @input="updateValue"
    v-bind="$attrs"
  />
  <label v-if="labelName" for="labelname" class="transform transition-all duration-300 cursor-text absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-7 peer-valid:h-7 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">{{ labelName }}</label>
</div> 
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    required: true,
    default: 'text'
  },
  autocomplete: {
    type: String,
    required: true,
    default: ''
  },
  pleaceholder: {
    type: String,
    default: ''
  },
  rounded: {
    type: String,
    required: false,
    default: 'rounded-md'
  },
  border: {
    type: String,
    required: false,
    default: 'border-gray-300'
  },
  focus: {
    type: String,
    default: ''
  },
  labelName: {
    type: String,
    required: true,
    default: false
  }
});
const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
  console.log('>>>>>', event.target.value)
  emit('update:modelValue', event.target.value)
}
</script>
