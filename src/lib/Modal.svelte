<script lang="ts">
    import { createEventDispatcher } from "svelte";


    export let name = ''

    const dispatch = createEventDispatcher()

    const close = () => {
        dispatch('close')
    }
</script>

<div class="modal-wrapper">
    <div class="modal">
        <div class="modal-header">
            <div class="modal-name">
                {name}
            </div>
            <div class="modal-close" on:click={close} ></div>
        </div>
        <div class="modal-body">
            <slot name='body' />
        </div>
        {#if $$slots.footer}
            <div class="modal-footer">
                <slot name='footer' />
            </div>
        {/if}
    </div>
</div>

<style>
.modal-wrapper {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    min-width: 10vw;
    min-height: 10vh;
    max-width: 90vw;
    max-height: 90vh;
    border: 1px solid #cacaca;
    border-radius: 3px;
    background-color: #fff;
    width: max-content;
    font-size: 14px;
}

.modal-header {
    width: 100%;
    height: 32px;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #dadada;
}

.modal-name {
    margin-right: 30px;
}

.modal-close {
    height: 18px;
    width: 18px;
    cursor: pointer;
    background: center / contain no-repeat url('./icons/delete.svg');
}

.modal-body {
    padding: 10px;
}

.modal-footer {
    width: 100%;
    height: 40px;
    padding: 5px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #dadada;
}

</style>