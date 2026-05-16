<template>
    <div 
        class="dt-pager" 
        :class="{
            [`dt-pager--${size}`]:size,
            [`dt-pager--${type}`]:type,
        }"
    >
        <!-- 首页 -->
        <a :class="currentPage ===1 ? 'disabled': ''" @click="goto(1)">首页</a>
        <!-- 上一页 -->
        <a :class="currentPage ===1 ? 'disabled': ''" @click="goto(currentPage - 1)">
            <DT-Icon icon="angles-left" />
        </a>

        <!-- 分页 -->
        <a v-if="total > pageCount && currentPage > 5" @click="goto(1)">1</a>
        <a v-if="total > pageCount && currentPage > 5" >
            <DT-Icon icon="ellipsis" size="sm" />
        </a>

        <a 
            v-for="item in pager" 
            :key="item" 
            :class="item === currentPage ? 'active': ''" 
            @click="goto(item)"
        >
            {{ item }}
        </a>

        <a v-if="total > pageCount && currentPage < total - 4" @click="goto(total-1)">
            <DT-Icon icon="ellipsis" size="sm" />
        </a>
        <a v-if="total > pageCount && currentPage < total - 4" @click="goto(total)">{{ total }}</a>


        <!-- 下一页 -->
        <a :class="currentPage === total ? 'disabled': ''" @click="goto(currentPage+1)">
            <DT-Icon icon="angles-right" />
        </a>
        <!-- 尾页 -->
        <a :class="currentPage === total ? 'disabled': ''" @click="goto(total)">尾页</a>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import propsObj from './props.js';
const props = defineProps(propsObj);
    defineOptions({
        name: 'DtPager'
    })
const emit = defineEmits(['current-change']);
const pager = computed(()=>{
    const renderPage = [];
    //总数小于pageCount，全部渲染
    if(props.total <= props.pageCount){
        for(let i = 1; i <= props.total; i++){
            renderPage.push(i);
        }
    }else{
        //总数大于pageCount，分页渲染
        // 分三种情况
        //当前页靠前
        if(props.currentPage <= 5){
            for(let i = 1; i <= 5; i++){
                renderPage.push(i);
            }
        }else if(props.currentPage > props.total - 4){ 
            //当前页靠后
            for(let i = props.total - 4; i <= props.total; i++){
                renderPage.push(i);
            }
        }else{ 
            //靠中间
            for(let i = props.currentPage - 2; i <= props.currentPage + 2; i++){
                renderPage.push(i);
            }
        }
    }
    return renderPage;
})

const goto = (page) => {
    if(page < 1 || page > props.total){
        return;
    }
    emit('current-change', page);
}

</script>

<style lang="scss" scoped>

</style>