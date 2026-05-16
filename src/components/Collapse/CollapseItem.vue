<template>
    <div class="dt-collapse-item"
    :class = "{
        'is-disabled':disabled,
    }"
    >
       <!-- 标题 -->
       <div 
        class="dt-collapse-item__header"
        :class = "{
            'is-active': isActive,
            'is-disabled':disabled,
        }"
        :id = "`item-header-${name}`"
        @click = "handleClickItemClick"
       >
          <slot name="title">{{ title }}</slot>
          <!-- 右侧图标 -->
           <DtIcon icon="angle-right" class="header-angle" />
       </div>
       <!-- 过渡 -->
       <Transition name="slide" v-on="transitionEvents">
        <!-- 内容 -->
        <div class="dt-collapse-item__wrapper" v-show="isActive">
                <div class="dt-collapse-item__content">
                    <slot/>
                </div>
        </div>
       </Transition>
    </div>
</template>

<script setup>
import { before } from 'lodash-es'
import { collapseItemProps, collapseContextKey } from './props.js'
import { ref, computed, inject } from 'vue'
const props = defineProps(collapseItemProps)
defineOptions({
    name: 'DtCollapseItem'
})
//通过inject可以拿到Collapse组件提供的属性
const collapseContext = inject(collapseContextKey)
//通过computed可以拿到Collapse组件提供的属性
const isActive = computed(() => collapseContext.activeNames.value.includes(props.name))

const handleClickItemClick = () => {
    if (props.disabled) {
        return
    }
    collapseContext.handleItemClick(props.name)
}

// 过渡事件
// 进渡事件的参数是el, done
// el是过渡元素
// done是过渡完成后的回调函数
const transitionEvents = {
   beforeEnter: (el, done) => {
        el.style.height = '0'
        el.style.overflow = 'hidden'
    },
    enter: (el, done) => {
       el.style.height = el.scrollHeight + 'px'
    },
    afterEnter: (el, done) => {
       el.style.height = ''
       el.style.overflow = ''
    },
    beforeLeave: (el, done) => {
        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
    },
    leave: (el, done) => {
        el.style.height = '0px'
    },
    afterLeave: (el, done) => {
        done.style.height = ''
        done.style.overflow = ''
    }
}
</script>

<style lang="scss" scoped>

</style>