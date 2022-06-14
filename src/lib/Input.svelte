<script lang="ts">
    import passwordShowIcon from "./icons/password-show.svg";
    import activePasswordShowIcon from "./icons/password-show-active.svg";
    import activePasswordHideIcon from "./icons/password-hide-active.svg";
    import passwordHideIcon from "./icons/password-hide.svg";
    import { createEventDispatcher } from "svelte";
    

    export let type: 'text' | 'number' | 'email' | 'password'  = 'text'
    export let label = ''
    export let labelType: 'top' | 'left' = 'top'
    export let placeholder = ''
    export let value: string | number = ''
    export let name: string = null;
    export let id: string = null;

    let passwordInput;
    let icon = passwordShowIcon;
    const dispatch = createEventDispatcher()

    const onPasswordChangeShow = () => {
        passwordInput.type = passwordInput.type === 'password'? 'text' : 'password' 
        icon = icon === activePasswordShowIcon? activePasswordHideIcon : activePasswordShowIcon
    }

    const onPasswordBlur = (e) => {
        icon = icon === activePasswordShowIcon? passwordShowIcon : passwordHideIcon
        dispatch('blur', {value, e})
    }

    const onPasswordFocus = () => {
        icon = icon === passwordShowIcon? activePasswordShowIcon : activePasswordHideIcon
    }

</script>

{#if type === 'number'}
    <label class={"label-" + labelType}> { label ? label + ':' : '' }
        <input
            type="number"
            {id}
            {name}
            {placeholder}
            on:input
            bind:value={ value }
            on:blur
        />
    </label>
{:else if type === 'email'}
    <label class={"label-" + labelType}> { label ? label + ':' : '' }
        <input
            type="email"
            {id}
            {name}
            {placeholder}
            on:input
            bind:value={ value }
            on:blur
        />
    </label>
{:else if type === 'password'} 
    <label 
        class={"password label-" + labelType}
    > { label ? label + ':' : '' }
        <input
            type="password"
            {id}
            bind:this={passwordInput}
            {name}
            {placeholder}
            on:input
            bind:value={ value }
            on:blur={onPasswordBlur}
            on:focus={onPasswordFocus}
        />
        <div class="show-password" on:click={onPasswordChangeShow}>
            <img src={icon} alt="show password">
        </div>
    </label>
{:else}
    <label class={"label-" + labelType}> { label ? label + ':' : '' }
        <input
            {id}
            {name}
            {placeholder}
            on:input
            bind:value={ value }
            on:blur
        />
    </label>
{/if}


<style>
    label{
        margin-top: 20px;
        font-size: 14px;
        color: #353535;
        font-weight: 5  00;
        display: block;
    }
    .label-top input{
        display: block;
        margin-top: 10px;
    }
    input{
        padding: 6px;
        border: 1px solid #cacaca;
        border-radius: 3px;
    }
    input:focus{
        outline: none;
        border-color: #1674E0;
    }
    .password {
        position: relative;
        width: max-content;
    }
    .show-password {
        position: absolute;
        top: 30px;
        left: 85%;
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>