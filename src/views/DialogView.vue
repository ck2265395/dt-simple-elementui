<template>
    <h1 class="row-title">DT对话框</h1>
    <div class="row">
        <DT-Button type="primary" @click="()=>{visible = true}">对话框一</DT-Button>
        <DT-Button type="success" @click="()=>{visible2 = true}">对话框二</DT-Button>
        <DT-Button type="danger" @click="()=>{visible3 = true}">对话框三</DT-Button>
    </div>
    <DT-Dialog  
        v-model:visible="visible"
        @close="visible = false"
    >基本对话框
    </DT-Dialog>

    <DT-Dialog  
        v-model:visible="visible2"
        @close="visible2 = false"
        title="自定义标题"
        width="30vh"
        top="40vh"
    >带标题的对话框
    </DT-Dialog>
    
    <DT-Dialog 
        v-model:visible="visible3" 
        @close="closeDialog3" 
        top="30vh"
    >
        这是一个基本的对话框
        <template #footer>
            <DT-Button type="warning" @click="closeDialog3">取消</DT-Button>
            <DT-Button type="primary" @click="closeDialog3">确定</DT-Button>
        </template>
    </DT-Dialog>

</template>

<script setup>
    import { ref } from 'vue';
    const visible = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const closeDialog3 = () => {
        visible3.value = false;
    }
</script>

<style lang="scss" scoped>

</style>