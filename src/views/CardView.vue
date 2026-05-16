<template>
    <h1 class="row-title">第一组</h1>
    <div class="row">
        <DT-Card 
            imgSrc="/red.png"
            summary="这是一个卡片"
        />

        <DT-Card img-src="go.png" summary="Go语言是世界上最好的语言">
            <!-- 插槽内部的内容样式由用户自己决定 -->
            <template #footer>
                <div class="footer">
                <div class="level">使用人数 · xxx人</div>
                <div class="price">Hot</div>
                </div>
            </template>
        </DT-Card>
    </div>
    <h1 class="row-title">第二组</h1>
    <div class="row">
        <DT-Card img-src="java.png" :width="368" :imgHeight="90">
            <div class="desc">JAVA是世界上最好的语言，也是最热门的语言。</div>
            <!-- 插槽内部的内容样式由用户自己决定 -->
            <template #footer>
                <div class="footer-java">
                <div class="level">热度 ·</div>
                <div class="level">10982收藏</div>
                </div>
            </template>
        </DT-Card>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
    .footer {
        padding: 0 8px;
        font-size: 12px;
        text-align: left;
    }
    .desc{
        padding-left: 10px;
    }
    .level {
        color: #9199a1;
        margin-bottom: 8px;
    }

    .price {
        color: #f01414;
    }

    .footer-java {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding: 0 8px;
    }
</style>