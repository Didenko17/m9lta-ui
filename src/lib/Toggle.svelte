<script lang="ts">

    export let offText: string = 'off';
    export let onText: string = 'on';
    export let value = false;

    const toggle = () => {
        value = !value;
    }

</script>
<div class="toggle-wrapper">
    <div class="off-text" class:active={!value}>
        {offText}
    </div>
    <div class="toggle" class:active={value} on:click={toggle}>
        <div class="toggler" class:active={value}></div>
    </div>
    <div class="on-text" class:active={value}>
        {onText}
    </div>
</div>


<style>

.toggle-wrapper {
    display: flex;
    align-items: center;
}
.off-text, .on-text {
    color: #cacaca;
}
.off-text.active, .on-text.active {
    color: #1674E0;
}
.toggle {
    width: 38px;
    height: 20px;
    margin: 10px 5px;
    border-radius: 12px;
    position: relative;
    background-color: #cacaca;
    border: 1px solid #aaa;
    cursor: pointer;
}
.toggle.active {
    background-color: #1674E0;
}
.toggler {
    width: 17px;    
    height: 17px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s;
    position: absolute;
    left: 1px;
    top: 50%;
    transform: translateY(-50%);
}
.toggler.active {
    left: 18px;
}
</style>