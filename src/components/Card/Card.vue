<template>
    <!-- 最外层容器默认270，如果用户传了宽度，继承 -->
    <div 
        class="dt-card" 
        :style="width ? { width: width + 'px' } : {}"
    >
        <!-- 1.卡片图片 -->
         <div class="dt-card-img">
            <img 
            :src="imgSrc" 
            :style="imgHeight ? { height: imgHeight + 'px' } : {}"
            >
        </div>
        <!-- 2.卡片描述 描述或者插槽-->
        <div class="dt-card-summary" v-if="summary">
            {{ summary }}
        </div>
        <div v-else>
            <slot/>
        </div>
        
        <!-- 3.卡片footer 由用户传入 具名插槽-->
         <div class="dt-card-footer" v-if="$slots.footer">
            <slot name="footer"/>
         </div>
    </div>
</template>

<script setup>
    import propObj from './props.js'

    defineOptions({
        name: 'DtCard'
    })
    const props = defineProps(propObj)
</script>

<style lang="scss" scoped>

</style>