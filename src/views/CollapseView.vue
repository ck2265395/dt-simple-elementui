<template>
    <h1 class="row-title">折叠面板</h1>
    <div class="row">
        <DT-Collapse v-model="openedValue" @change="handleChange">
            <DT-CollapseItem name="a" title="home">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, libero!
            </DT-CollapseItem>
            <DT-CollapseItem name="b" title="about">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem amet sint officia.
            </DT-CollapseItem>
            <DT-CollapseItem name="c" title="contact">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt animi, numquam blanditiis quae ipsum saepe.
            </DT-CollapseItem>
            <DT-CollapseItem name="d" title="services">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repellat tenetur maxime?
            </DT-CollapseItem>
        </DT-Collapse>
    </div>
    <h1 class="row-title">手风琴模式</h1>
    <div class="row">
        <DT-Collapse v-model="openedValue2" accordion @change="handleChange">
            <DT-CollapseItem name="a" title="home">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, libero!
            </DT-CollapseItem>
            <DT-CollapseItem name="b" title="about">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem amet sint officia.
            </DT-CollapseItem>
            <DT-CollapseItem name="c" title="contact">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt animi, numquam blanditiis quae ipsum saepe.
            </DT-CollapseItem>
            <DT-CollapseItem name="d" title="services">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repellat tenetur maxime?
            </DT-CollapseItem>
        </DT-Collapse>
    </div>
    <h1 class="row-title">自定义标题</h1>
    <div class="row">
        <DT-Collapse v-model="openedValue3" accordion @change="handleChange">
            <DT-CollapseItem name="Consistency">
                <template #title>
                <div class="titleContainer">
                    <span class="title">Consistency</span>
                    <DT-Icon icon="house" />
                </div>
                </template>
                <div>
                Consistent with real life: in line with the process and logic of real life, and comply
                with languages and habits that the users are used to;
                </div>
                <div>
                Consistent within interface: all elements should be consistent, such as: design style,
                icons and texts, position of elements, etc.
                </div>
            </DT-CollapseItem>
            <DT-CollapseItem name="Feedback">
                <template #title>
                <div class="titleContainer">
                    <span class="title">Feedback</span>
                    <DT-Icon icon="image" />
                </div>
                </template>
                <div>
                Operation feedback: enable the users to clearly perceive their operations by style updates
                and interactive effects;
                </div>
                <div>
                Visual feedback: reflect current state by updating or rearranging elements of the page.
                </div>
            </DT-CollapseItem>
            <DT-CollapseItem name="Efficiency">
                <template #title>
                <div class="titleContainer">
                    <DT-Icon icon="phone" />
                    <span class="title">Efficiency</span>
                </div>
                </template>
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>
                Definite and clear: enunciate your intentions clearly so that the users can quickly
                understand and make decisions;
                </div>
                <div>
                Easy to identify: the interface should be straightforward, which helps the users to
                identify and frees them from memorizing and recalling.
                </div>
            </DT-CollapseItem>
            <DT-CollapseItem name="Controllability" title="Controllability">
                <template #title>
                <div class="titleContainer">
                    <DT-Icon icon="star" />
                    <span class="title">Controllability</span>
                </div>
                </template>
                <div>
                Decision making: giving advices about operations is acceptable, but do not make decisions
                for the users;
                </div>
                <div>
                Controlled consequences: users should be granted the freedom to operate, including
                canceling, aborting or terminating current operation.
                </div>
            </DT-CollapseItem>
        </DT-Collapse>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const openedValue = ref(['a', 'b']);
    const openedValue2 = ref(['a'])
    const openedValue3 = ref(['Consistency'])
    const handleChange = (val) => {
        console.log(val);
    }
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>