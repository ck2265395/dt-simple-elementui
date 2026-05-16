<template>
   
        <!-- <h1>Icon</h1> -->
        <!-- fontawesome提供  -->
        <!-- <font-awesome-icon icon="fa-solid fa-user" />
        <font-awesome-icon icon="fa-solid fa-chevron-left" /> -->
     
        <!-- 二次封装 -->
         <i class="dt-icon" :class="{ [`dt-icon--${type}`]: type }">
            <font-awesome-icon v-bind="filterProps" />
         </i>
   
</template>

<script setup>
import { computed } from 'vue';
import propObj from './props';
import { omit } from 'lodash-es';

defineOptions({
  name: 'DtIcon'
});
const props = defineProps(propObj);
//console.log(props,'props');
const filterProps = computed(() => omit(props, ['type']));
</script>

<style lang="scss" scoped>

</style>