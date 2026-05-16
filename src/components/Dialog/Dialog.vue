<template>
    <!-- 动画 -->
    <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-show="visible" class="dt-dialog_wrapper">
        <!-- 内层容器控制对话框高度宽度 -->
        <div 
            class="dt-dialog" 
            :style="{width, marginTop: top}"
        >
            <!-- 头部 -->
           <div class="dt-dialog_header">
            <slot name="title">
                <span class="dt-dialog_title">{{ title }}</span>
            </slot>
            <!-- 关闭按钮 -->
             <button class="dt-dialog_headerbtn" @click="clickHandle">
                <DT-Icon icon="xmark" />
             </button>
           </div>
           <!-- 内容区域，默认插槽 -->
           <div class="dt-dialog_body">
                <slot/>
           </div>
           <!-- 底部 -->
           <div class="dt-dialog_footer" v-if="$slots.footer">
            <slot name="footer" />
           </div> 
        </div>
    </div>
    </transition>
</template>

<script setup>
import propsObj from './props.js';
defineOptions({
    name: 'DtDialog'
});
const props = defineProps(propsObj);

const emit = defineEmits(['close']);
const clickHandle = () => {
    // 发出父组件关闭事件
    emit('close');
}

</script>

<style lang="scss" scoped>

</style>