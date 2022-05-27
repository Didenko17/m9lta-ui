<script lang="ts">
import { createEventDispatcher } from "svelte";


    export let label = '';
    export let checked: boolean = false;
    export let group: string[] = null;
    export let value: string = '';
    export let name: string = null;
    export let id: string = null;
    export let block: boolean = false;

    const dispatch = createEventDispatcher();

    const onChange = (e) => {
        if (group) {
            if (e.target.checked) {
                group = [...group, e.target.value]
            } else {
                group = group.filter((item) => item !== e.target.value)
            }
        }
        dispatch('change', e);
    }

</script>

<label class="label" class:block>
    <input type="checkbox" {id} {name} on:change={onChange} on:input {checked} {value} />
    { label ? label : '' }
</label>

<style>
    label{
        margin-top: 20px;
        font-size: 14px;
        color: #353535;
        font-weight: 5  00;
        display: inline-flex;
        margin-right: 10px;
        align-items: center;
    }
    .block {
        display: flex;
    }
    label:last-child {
        margin-right: 0;
    }
    input{
        margin-right: 5px;
    }
</style>
