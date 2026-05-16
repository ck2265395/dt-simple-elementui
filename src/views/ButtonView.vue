<template>
    <h1 class="row-title">普通引入</h1>
    <div class="row">
        <DT-Button>默认按钮</DT-Button>
        <DT-Button type="primary">Primary</DT-Button>
        <DT-Button type="success">Success</DT-Button>
        <DT-Button type="warning">Warning</DT-Button>
        <DT-Button type="info">Info</DT-Button>
        <DT-Button type="danger">Danger</DT-Button>
        <DT-Button type="link">Link</DT-Button>
    </div>
    <h1 class="row-title">朴素按钮</h1>
    <div class="row">
        <DT-Button>默认按钮</DT-Button>
        <DT-Button type="primary" plain>Primary</DT-Button>
        <DT-Button type="success" plain>Success</DT-Button>
        <DT-Button type="warning" plain>Warning</DT-Button>
        <DT-Button type="info" plain>Info</DT-Button>
        <DT-Button type="danger" plain>Danger</DT-Button>
        <DT-Button type="link" plain>Link</DT-Button>
    </div>
    <h1 class="row-title">圆角按钮</h1>
    <div class="row">
        <DT-Button round>默认按钮</DT-Button>
        <DT-Button type="primary" round>Primary</DT-Button>
        <DT-Button type="success" round>Success</DT-Button>
        <DT-Button type="warning" round>Warning</DT-Button>
        <DT-Button type="info" round>Info</DT-Button>
        <DT-Button type="danger" round>Danger</DT-Button>
        <DT-Button type="link" round>Link</DT-Button>
    </div>
    <h1 class="row-title">禁用按钮</h1>
    <div class="row">
        <DT-Button round disabled>默认按钮</DT-Button>
        <DT-Button type="primary"  disabled>Primary</DT-Button>
        <DT-Button type="success"  disabled>Success</DT-Button>
        <DT-Button type="warning"  disabled>Warning</DT-Button>
        <DT-Button type="info"  disabled>Info</DT-Button>
        <DT-Button type="danger"  disabled>Danger</DT-Button>
        <DT-Button type="link"  disabled>Link</DT-Button>
    </div>
    <h1 class="row-title">loading按钮</h1>
    <div class="row">
        <DT-Button round loading>默认按钮</DT-Button>
        <DT-Button type="primary"  loading>Primary</DT-Button>
        <DT-Button type="success"  loading>Success</DT-Button>
        <DT-Button type="warning"  loading>Warning</DT-Button>
        <DT-Button type="info"  loading>Info</DT-Button>
        <DT-Button type="danger"  loading>Danger</DT-Button>
        <DT-Button type="link"  disabled>Link</DT-Button>
    </div>
    <h1 class="row-title">图标按钮</h1>
    <div class="row">
        <DT-Button icon="file">默认按钮</DT-Button>
        <DT-Button type="primary" icon="gear" >Primary</DT-Button>
        <DT-Button type="success" icon="folder" >Success</DT-Button>
        <DT-Button type="warning" icon="bug" >Warning</DT-Button>
        <DT-Button type="info" icon="code" >Info</DT-Button>
        <DT-Button type="danger" icon="cube" >Danger</DT-Button>
    </div> 
    <h1 class="row-title">不同尺寸按钮</h1>
    <div class="row">
        <DT-Button icon="file" size="small">默认按钮</DT-Button>
        <DT-Button type="primary" icon="gear" size="small">Primary</DT-Button>
        <DT-Button type="success" icon="folder" size="medium">Success</DT-Button>
        <DT-Button type="warning" icon="bug" size="medium">Warning</DT-Button>
        <DT-Button type="info" icon="code" size="large">Info</DT-Button>
        <DT-Button type="danger" icon="cube" size="large">Danger</DT-Button>
    </div> 
     <h1 class="row-title">圆形按钮</h1>
    <div class="row">
        <DT-Button circle icon="file"></DT-Button>
        <DT-Button type="primary" icon="gear" circle></DT-Button>
        <DT-Button type="success" icon="folder" circle></DT-Button>
        <DT-Button type="warning" icon="bug" circle></DT-Button>
        <DT-Button type="info" icon="code" circle></DT-Button>
        <DT-Button type="danger" icon="cube" circle></DT-Button>
    </div>
    <h1 class="row-title">按钮事件</h1>
    <div class="row">
        <DT-Button type="primary" @click="handleClick" ref="btnRef">点击我</DT-Button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const btnRef = ref(null);
    const handleClick = () => {
        window.alert('点击了按钮');
        console.log(btnRef.value.ref,'根dom');
    }
</script>

<style lang="scss" scoped>

</style>