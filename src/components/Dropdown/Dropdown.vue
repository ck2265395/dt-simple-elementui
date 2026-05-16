<template>
    <div class="dt-dropdown">
        <DT-Tooltip
            ref="toolTipRef"
            :trigger="props.trigger"
            :placement="props.placement"
            :open-delay="props.openDelay"
            :close-delay="props.closeDelay"
            :manual="props.manual"
            @visible-change="visibleChangeHandler"
        >
            <slot></slot>
            <!-- 生成具体提示内容插入content具名插槽 -->
             <template #content>
                <ul class="dt-dropdown__menu">
                    <template 
                        v-for="item in props.menuOptions" 
                        :key="item.key"
                    >
                        <li v-if="item.divided" 
                        class="divided-placeholder"></li>
                        <li 
                            class="dt-dropdown__item" 
                            @click="selectHandler(item)"
                            :class="{
                                'is-disabled': item.disabled,
                            }"
                            :id = "`dt-dropdown-item-${item.key}`"

                        >
                            <RenderVNode :vnode="item.label" />
                        </li>
                    </template>
                </ul>
             </template>
        </DT-Tooltip>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import propsObj from './props';
import RenderVNode from '../Common/RenderVnode';
const props = defineProps(propsObj);
const toolTipRef = ref(null);
defineOptions({
    name: 'DtDropdown',
})
const emit = defineEmits(['select', 'visible-change'])
const selectHandler = (item) => {
    if (item.disabled) return;
    emit('select', item);
    //如果有hideAfterClick，点击后关闭下拉菜单
    if (props.hideAfterClick) {
        toolTipRef.value.close()
    }
}
const visibleChangeHandler = (visible) => {
    emit('visible-change', visible);
}
defineExpose({
    show: () => {
        toolTipRef.value.open()
    },
    hide: () => {
        toolTipRef.value.close()
    },
})

</script>

<style lang="scss" scoped>

</style>