<template>
    <div>
        <h3>This is the awesomest dog page!</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit vitae neque pariatur ducimus tenetur eius non excepturi, numquam aliquam quo distinctio impedit, nostrum, natus cumque laborum ipsam? Corrupti, labore!</p>
        <div v-if="showModal">
            <transition name="modal">
            <!-- <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="showModal=false">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        modal body
                    </div>
                    </div>
                </div>
                </div>
            </div> -->
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="close" data-dismiss="modal" @click="showModal=false">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            Modal body..
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="showModal=false">Close</button>
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
</style>