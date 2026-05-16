<template>
    <h1 class="row-title">基础分页</h1>
    <div>
       <DT-Pager 
        @current-change="(val) => {currentPage1 = val}"
        :total="20" 
        :currentPage="currentPage1">
        </DT-Pager>
    </div>
    <h1 class="row-title">total小于pageCount，全部渲染</h1>
    <div>
       <DT-Pager 
        @current-change="(val) => {currentPage2 = val}"
        :total="10" 
        :currentPage="currentPage2">
        </DT-Pager>
    </div>
    <h1 class="row-title">主题颜色</h1>
    <div>
       <DT-Pager 
        @current-change="(val) => {currentPage3 = val}"
        :total="10" 
        type="success"
        :currentPage="currentPage3">
        </DT-Pager>
        <DT-Pager 
        @current-change="(val) => {currentPage3 = val}"
        :total="10" 
        type="danger"
        :currentPage="currentPage3">
        </DT-Pager>
    </div>
    <h1 class="row-title">调整大小</h1>
    <div>
       <DT-Pager 
        @current-change="(val) => {currentPage4 = val}"
        :total="10" 
        size="small"
        :currentPage="currentPage4">
        </DT-Pager>
         <DT-Pager 
        @current-change="(val) => {currentPage4 = val}"
        :total="10" 
        size="large"
        :currentPage="currentPage4">
        </DT-Pager>
    </div>
</template>

<script setup>
   import { ref } from 'vue'
   const currentPage1 = ref(1);
   const currentPage2 = ref(1);
   const currentPage3 = ref(1);
   const currentPage4 = ref(1);
   const changePage = (val) => {
      console.log(val);
      currentPage1.value = val;
   }
</script>

<style lang="scss" scoped>

</style>