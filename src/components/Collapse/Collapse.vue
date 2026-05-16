<template>
    <div class="dt-collapse">
        <slot/>
    </div>
</template>

<script setup>
import { collapseProps, collapseContextKey } from './props.js'
import { ref, provide } from 'vue'
const props = defineProps(collapseProps)
const emit = defineEmits(['change','update:modelValue'])
defineOptions({
    name: 'DtCollapse'
})
const activeNames = ref(props.modelValue)
//点击Item触发事件
//Item是通过插槽的方式插入的，不是子组件方式，不能通过props传递事件，所以采用依赖注入
const handleItemClick = (itemName) => {
    let _activeNamesArr = [...activeNames.value]
    if (props.accordion) {
        //当前是手风琴模式 
        _activeNamesArr = [activeNames.value[0] === itemName ? '' : itemName]
    }else{
        //普通模式,可以打开多个
        const index = _activeNamesArr.indexOf(itemName)
        if (index > -1) {
            _activeNamesArr.splice(index, 1)
        }else{
            _activeNamesArr.push(itemName)
        }
    }
    activeNames.value = _activeNamesArr

    //需要触发2个事件
    emit('change',_activeNamesArr)
    emit('update:modelValue',_activeNamesArr)
}

//提供依赖注入的key和value
provide(collapseContextKey, {
    activeNames,
    handleItemClick
})
</script>

<style lang="scss" scoped>

</style>