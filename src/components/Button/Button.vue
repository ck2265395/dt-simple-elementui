<template>
    <button 
        ref="btnRef"
        class="dt-button" 
        :class="{
            ['dt-button--' + type]:type,
            ['dt-button--' + size]:size,
            'is-plain':props.plain,
            'is-round':props.round,
            'is-circle':props.circle,
            'is-disabled':props.disabled || loading,
        }"
        :disabled="props.disabled || loading"
        >
        <DT-Icon icon="spinner" spin v-if="loading"></DT-Icon>
        <DT-Icon :icon="props.icon" v-if="icon" ></DT-Icon>
        <span v-if="$slots.default">
            <slot />
        </span>
        
    </button>
</template>

<script setup>
    import propObj from './props.js'
    import { ref } from 'vue';
    const btnRef = ref(null);
    defineOptions({
        name: 'DtButton'
    })
    const props = defineProps(propObj)
    //向外部暴露 编译宏
    defineExpose({
        ref:btnRef
    })
</script>

<style lang="scss" scoped>

</style>