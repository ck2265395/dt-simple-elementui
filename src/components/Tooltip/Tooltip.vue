<template>
    <div class="dt-tooltip" v-on="outerEvents">
        <!-- 触发元素 插槽-->
        <div 
            class="dt-tooltip__trigger" 
            ref="triggerRef" 
            v-on="events"
            
        >
            <slot></slot>
        </div>
        <!-- 提示内容 -->
        <div 
            class="dt-tooltip__popper" 
            ref="popperRef" v-if="isOpen"
            :style="floatingStyles"
            :data-popper-placement="placement"
        >
            <slot name="content">
                {{ content }}
            </slot>
            <!-- 箭头 -->
            <div 
                id="arrow" 
                ref="arrowRef"
                :style="{
                    position: 'absolute',
                    left:
                    middlewareData.arrow?.x != null
                        ? `${middlewareData.arrow.x}px`
                        : '',
                    top:
                    middlewareData.arrow?.y != null
                        ? `${middlewareData.arrow.y}px`
                        : '',
                }"
             data-popper-arrow></div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import propObj from './props';
import {useFloating, offset, arrow } from '@floating-ui/vue';
import { debounce } from 'lodash-es';

const props = defineProps(propObj);
defineOptions({
    name: 'DtTooltip',
})

const emit = defineEmits(['visible-change']);

const isOpen = ref(false);
// 触发元素引用
const triggerRef = ref(null);
// 提示内容引用
const popperRef = ref(null);
let popperInstance = null;
const arrowRef = ref(null) // 
const { floatingStyles, middlewareData } = useFloating(triggerRef, popperRef, {
    placement: props.placement,
    middleware: [
        offset(8),
        arrow({element: arrowRef}),
    ],
});
       
let events = reactive({})
let outerEvents = reactive({})

// f防抖
const openDebounce = debounce(()=>{
    console.log('open')
    isOpen.value = true;
    emit('visible-change', true);
}, props.openDelay);
const closeDebounce = debounce(()=>{
    console.log('close')
    isOpen.value = false;   
    emit('visible-change', false);
}, props.closeDelay);
// 创建popper实例,在isOpen发生变化时创建
const open = () => {
    closeDebounce.cancel();
    openDebounce();
}
const close = () => {
    openDebounce.cancel();
    closeDebounce();
}

// watch(isOpen, (newVal) => {
//     if (newVal) {
//         if (triggerRef.value && popperRef.value) {
//             console.log('props.placement', props.placement);
//             popperInstance = useFloating(triggerRef.value, popperRef.value, {
//                 placement: props.placement,
//                 middleware: [],
//             });
            
//         }else{
//             popperInstance.destroy();
//         }
//     }
// },{flush:'post'})

//post dom更新后 pre dom更新前 执行

const attachEvents = () => {
    //
    if(props.trigger === 'hover'){
        events['mouseenter'] = open;
        outerEvents['mouseleave'] = close;
    }else if (props.trigger === 'click'){
        //根据isOpen判断是打开还是影藏
        events['click'] = ()=>isOpen.value?close():open();
    }
}
if(!props.manual){ 
    attachEvents();
}

defineExpose({
    open,
    close,
});


</script>

<style lang="scss" scoped>

</style>