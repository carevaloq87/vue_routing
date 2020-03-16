<template>
    <div>
        <h3>This is the awesomest dog page!</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit vitae neque pariatur ducimus tenetur eius non excepturi, numquam aliquam quo distinctio impedit, nostrum, natus cumque laborum ipsam? Corrupti, labore!</p>
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="spinner-border text-warning " role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
}
</script>
<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-content {
        border: none;
        background-color: transparent;
        left: 50%;
        right: 50%;
    }
</style>