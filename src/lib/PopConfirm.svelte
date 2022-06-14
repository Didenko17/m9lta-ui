<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    
    export let text = ''
    const onOk = () => {
        isVisible = false;
        dispatch('ok')
    }
    const onCancel = () => {
        isVisible = false;
        dispatch('cancel')
    }

    let isVisible = false;

</script>

<span 
    class="popup-wrapper"
    on:click={ () => isVisible = true }
    >
    {#if isVisible}
        <div class="popup">
            <div class="popup-text">
                { text }
            </div>
            <div class="popup-buttons">
                <button class="button-primary" on:click|stopPropagation={onOk}>Ok</button>
                <button on:click|stopPropagation={onCancel}>Cancel</button>
            </div>
        </div>
    {/if}
    <slot/>
</span>

<style>
    .popup-wrapper {
        position: relative;
        width: max-content;
        font-size: 14px;
    }
    .popup {
        position: absolute;
        width: max-content;
        padding: 6px;
        top: 0;
        transform: translateY(calc(-100% - 10px));
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        background-color: #fafafa;
        border: 1px solid #cacaca;
        border-radius: 3px;
    }

    .popup::after {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        width: 10px;
        background-color: #fafafa;
        bottom: -5px;
        box-sizing: border-box;
        border: 1px solid #cacaca;
        clip-path: polygon( 0 100%, 100% 0, 100% 100%);
        transform: rotate(45deg);
    }

    .popup-buttons {
        margin-top: 10px;
        border-top: 1px solid #dadada;
        padding: 3px 5px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .popup-text {
        max-width: 150px;
        color: #454545;
    }

    button {
        margin: 0 2px;
        padding: 3px 5px;
        border-radius: 3px;
        border: 1px solid #cacaca;
        background-color: #fff;
        color: #454545;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .button-primary {
        background-color: #1674E0;
        border: 1px solid #1674E0;
		color: #fff;
    }
</style>