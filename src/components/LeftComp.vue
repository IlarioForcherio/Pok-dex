<template>
    <div class="text-danger">
        <section>
            <div class="box-left">
                left
                <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp  )">
            </div>
    
        </section>
    </div>
</template>

<script>
export default {
    name: 'LeftComp',
    components: {

    },
    props: {

    },
    data() {
        return {
            inputTextLeftComp: '',
        }
    },
    mounted() {

    },
    methods() {

    },

}
</script>

<style lang="scss" scoped>
.box-left {
    height: 500px;
    width: 300px;
    border: 1px solid black;
}
</style>