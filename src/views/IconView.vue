<template>
    <div>
       <h1 class="row-title">普通引入</h1>
        <div class="row">
           <DT-Icon icon="user-secret" />
           <DT-Icon icon="bars" />
           <DT-Icon icon="shield-halved" />
           <DT-Icon icon="file" />
           <DT-Icon icon="folder" />
           <DT-Icon icon="user" />
        </div>
        <h1 class="row-title">设置不同大小</h1>
        <div class="row">
            <DT-Icon icon="user-secret" size="2x" />
            <DT-Icon icon="bars" size="lg" />
            <DT-Icon icon="shield-halved" size="3x" />
            <DT-Icon icon="file" size="4x" />
            <DT-Icon icon="folder" size="2x" />
            <DT-Icon icon="shield-halved" size="2x" />
        </div>
        <h1 class="row-title">旋转与翻转图标</h1>
        <div class="row">
            <DT-Icon icon="user-secret" rotation="90"  />
            <DT-Icon icon="bars" rotation="270"  />
            <DT-Icon icon="shield-halved" rotation="180"/>
            <DT-Icon icon="file"  flip="horizontal" />
            <DT-Icon icon="folder" flip="vertical" />
            <DT-Icon icon="shield-halved"  flip="both" />
        </div>
        <h1 class="row-title">动画效果</h1>
        <div class="row">
            <DT-Icon icon="user-secret" size="2x" beat />
            <DT-Icon icon="bars"  size="2x" beat-fade />
            <DT-Icon icon="shield-halved"  size="2x" bounce/>
            <DT-Icon icon="file" size="2x" fade />
            <DT-Icon icon="folder" size="2x" shake/>
            <DT-Icon icon="shield-halved" size="2x"  spin/>
        </div>
        <h1 class="row-title">添加自定义属性</h1>
        <div class="row">
            <DT-Icon icon="user-secret" size="xl" type="primary" />
            <DT-Icon icon="bars"  size="xl" type="success" />
            <DT-Icon icon="shield-halved"  size="xl" type="warning" />
            <DT-Icon icon="file" size="xl" type="info" />
            <DT-Icon icon="folder" size="xl" type="danger" />    
            <DT-Icon icon="folder" size="xl" color="red" />    
            <DT-Icon icon="folder" size="xl" color="#e47412" /> 
            <DT-Icon icon="folder" size="xl" color="rgba(122, 122, 122, 0.5)" />    
        </div>
         <h5 class="desc-title"><a href="https://fontawesome.com/search?ic=free-collection" target="_blank">FontAwesome图标库</a></h5>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    
</style>