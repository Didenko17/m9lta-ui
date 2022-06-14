<script lang="ts" context="module">
    export interface OptionType {
        name:string, 
        value:string, 
        disabled?: boolean,
    }
</script>

<script lang="ts">

    import arrowDown from "./icons/select-arrow-down.svg";
    import activeArrowDown from "./icons/select-arrow-down-active.svg";
    import arrowTop from "./icons/select-arrow-top.svg";
    import Option from "./Option.svelte";
    import { createEventDispatcher, onMount } from "svelte";

    

    export let id = "";
    export let multiple: boolean = false;
    export let placeholder = "Select value";
    export let defaultValue: string[] = [];
    export let options: OptionType[] = [];

    let isOpen = false;
    let arrow = arrowDown;

    let selectedOptions: string[] = [];
    let selectedNames = [];

    onMount(() => {
        selectedOptions = defaultValue 
        selectedNames = [...options.filter((option) => selectedOptions.includes(option.value)).map((option)=>option.name)] 
    })

    const dispatch = createEventDispatcher()

    const onClick = () => {
        isOpen = !isOpen;
        if ( isOpen ) {
            arrow = arrowTop;
        } else {
            arrow = activeArrowDown;
        }
    }
    const onSelect = (option: OptionType) => {
        if (multiple) {
            if (selectedOptions.includes(option.value)) {
                selectedOptions = selectedOptions.filter((val) => val !== option.value)
                selectedNames = selectedNames.filter((val) => val !== option.name)
            } else {
                selectedOptions = [...selectedOptions, option.value]
                selectedNames = [...selectedNames, option.name]
            }
        } else {
            if (selectedOptions[0] === option.value) {
                selectedOptions = []
                selectedNames = []
            } else {
                selectedOptions = [option.value]
                selectedNames = [option.name]
            }
        }
        dispatch("change", {selectedOptions})
    }
</script>

<div class="select" {id}
    on:mouseleave={() => arrow = arrowDown}
    on:mouseenter={() => arrow = activeArrowDown}
    on:click={onClick}
>
    {#if selectedOptions.length}
        <div class="select-value">
            { selectedNames.join(", ") }
        </div>
    {:else}
        <div class="placeholder">
            { placeholder }
        </div>
    {/if}
    <div class="arrow">
        <img src={arrow} alt="arrow-down">
    </div>
    {#if isOpen}
        <div class="select-list">
            {#each options as option}
                <Option
                    selected={selectedOptions.includes(option.value)}
                    disabled={option.disabled}
                    on:click={() => !option.disabled && onSelect(option)}
                >
                    {option.name}
                </Option>
            {/each}
        </div>
    {/if}
</div>

<style>
.select {
    position: relative;
    min-width: 50px;
    width: max-content;
    max-width: 300px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 10px;
    padding: 6px;
    border: 1px solid #cacaca;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    color: #454545;
}
.placeholder {
    color: #aaa;
}

.select .arrow {
    margin-left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select:hover{
    border-color: #1674E0;
}
.select-list {
    position: absolute;
    padding: 6px;
    width: 100%;
    top: 100%;
    left: 0;
    background-color: #fafafa;
    border: 1px solid #cacaca;
    z-index: 1;
}
</style>