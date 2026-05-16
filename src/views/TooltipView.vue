<template>
    <h1 class="row-title">不同方向</h1>
    <div class="row">
        <DT-Tooltip content="this is Top" placement="top" @visible-change="handle">
            <DT-Button type="primary">top</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is Bottom" placement="bottom">
            <DT-Button type="warning">bottom</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is Left" placement="left">
            <DT-Button type="danger">left</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is Right" placement="right">
            <DT-Button type="success">right</DT-Button>
        </DT-Tooltip>
    </div>
    <h1 class="row-title">切换触发模式</h1>
    <div class="row">
        <DT-Tooltip content="this is a test" placement="top" trigger="click">
        <DT-Button type="primary">top</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is a test" placement="bottom" trigger="click">
        <DT-Button type="warning">bottom</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is a test" placement="left" trigger="click">
        <DT-Button type="danger">left</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is a test" placement="right" trigger="click">
        <DT-Button type="success">right</DT-Button>
        </DT-Tooltip>
    </div>
    <h1 class="row-title">手动触发模式</h1>
    <div class="row">
        <DT-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
        <DT-Button type="primary">right</DT-Button>
        </DT-Tooltip>
    </div>
    <div class="row">
        <DT-Button @click="openHandler">打开提示框</DT-Button>
        <DT-Button @click="closeHandler">关闭提示框</DT-Button>
    </div>
    <h1 class="row-title">延时触发</h1>
    <div class="row">
        <DT-Tooltip
        content="this is a test"
        placement="top"
        :open-delay="2000"
        :close-delay="2000"
        @visible-change="handle"
        >
        <DT-Button type="primary">top</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip
        content="this is a test"
        placement="bottom"
        :open-delay="2000"
        :close-delay="2000"
        >
        <DT-Button type="warning">bottom</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
        <DT-Button type="danger">left</DT-Button>
        </DT-Tooltip>
        <DT-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
        <DT-Button type="success">right</DT-Button>
        </DT-Tooltip>
    </div>
    
    <h5 class="desc-title"><a href="https://floating-ui.com/docs/vue" target="_blank">Popper</a></h5>
        
</template>

<script setup>
    import { ref } from 'vue'
    const tooltipRef = ref(null);
    const handle = (visible) => {
        console.log(visible)
    }
    const openHandler = () => {
        tooltipRef.value.open()
    }
    const closeHandler = () => {
        tooltipRef.value.close()
    }
</script>

<style lang="scss" scoped>

</style>