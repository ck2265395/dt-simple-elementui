<template>
    <h1 class="row-title">基础用法</h1>
    <div class="row">
        <DT-Dropdown
            placement="left"
            trigger="click"
            :menu-options="options"
            @visible-change="visibleChangeHandler"
            @select="selectHandler"
            hideAfterClick
        >
        <DT-Button type="primary">点击打开下拉菜单</DT-Button>
        </DT-Dropdown>
    </div>
    <h1 class="row-title">手动打开和关闭</h1>
    <div class="row">
        <DT-Dropdown
        placement="bottom"
        trigger="click"
        manual
        :menu-options="options"
        @visible-change="visibleChangeHandler"
        @select="selectHandler"
        ref="dropdownRef"
        >
        <DT-Button type="primary">手动打开下拉菜单</DT-Button>
        </DT-Dropdown>
    </div>
    <div class="row">
        <DT-Button @click="openClick">打开</DT-Button>
        <DT-Button @click="closeClick">关闭</DT-Button>
    </div>
    <h1 class="row-title">支持VNode节点</h1>
    <div class="row">
        <DT-Dropdown
        placement="bottom"
        trigger="click"
        :menu-options="options2"
        @visible-change="visibleChangeHandler"
        @select="selectHandler"
        >
        <DT-Button type="primary">点击打开下拉菜单</DT-Button>
        </DT-Dropdown>
    </div>
</template>

<script setup>
    import { ref, h } from 'vue'
    const dropdownRef = ref(null);
    const options = [
        { key: '1', label: '选项一', value: '1' },
        { key: '2', label: '选项二', value: '2', divided: true },
        { key: '3', label: '选项三', value: '3', divided: true },
        { key: '4', label: '选项四', value: '4', disabled: true },
        { key: '5', label: '选项五', value: '5' },
        { key: '6', label: '选项六', value: '6' },
        { key: '7', label: '选项七', value: '7' },
    ]
    const visibleChangeHandler = (visible) => {
        console.log('visibleChangeHandler', visible)
    }
    const selectHandler = (item) => {
        console.log('selectHandler', item)
    }
    const options2 = [
        { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
        { key: 2, label: 'item2', divided: true },
        { key: 3, label: 'item3', disabled: true },
        { key: 4, label: 'item4' }
    ]
    const openClick = () => {
        dropdownRef.value.show()
    }
    const closeClick = () => {
        dropdownRef.value.hide()
    }

</script>

<style lang="scss" scoped>

</style>