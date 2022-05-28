<script lang="ts">
    import Checkbox from "$lib/Checkbox.svelte";
    import DatePicker from "$lib/DatePicker.svelte";
    import Input from "$lib/Input.svelte"
    import RadioInput from "$lib/RadioInput.svelte";
    import Select from "$lib/Select.svelte";
    import Toggle from "$lib/Toggle.svelte";
    import Upload from "$lib/Upload.svelte";

    let textInputValue = "";
    let numberInputValue = 17;
    let passwordInputValue = "";
    let confirmPasswordInputValue = "";
    let radioGroup = "2";
    let checkboxGroup = [];
    let toggle = true;
    let date;

    const onChange = (e) => {
        console.log(e.detail.target)
    }

    const onInput = (e) => {
        console.log(e.target.value)
    }

    const onBlur = (e) => {
        console.log(e.detail, " blured");
    }

    $: {
        console.log(radioGroup)
    }
    $: {
        console.log(checkboxGroup)
    }
</script>
<div class="input-page">
    <h2>Select</h2>
    <Select
        on:change={onChange}
        id="first-select"
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3'}]} 
    />
    <Select
        defaultValue={["3"]}
        id="second-select"
        multiple
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3'}]}
    />
    <Select
        defaultValue={["2"]}
        id="third-select"
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3', disabled: true}]}
    />
    <h2>Input</h2>
    <h3>Input [type="text"]</h3>
    <Input placeholder="Input value" bind:value={textInputValue} on:input={onInput} on:blur={onBlur} />
    <h3>Input [type="number"]</h3>
    <Input type="number" placeholder="Input number" label="Age" bind:value={numberInputValue} on:input={onInput} on:blur={onBlur} />
    <h3>Input [type="password"]</h3>
    <Input type="password" placeholder="Input password" on:blur={onBlur} label="Password" bind:value={passwordInputValue} />
    <Input type="password" placeholder="Confirm password" label="Confirm password" bind:value={confirmPasswordInputValue} />
    <h3>Input [type="email"]</h3>
    <Input id="email" name="email" type="email" placeholder="Input email" label="Email" />
    <h3>RadioInput</h3>
    <h4>Radio basic usage</h4>
    <RadioInput value="1" label="one" />
    <RadioInput value="2" label="two" />
    <h4>Radio group</h4>
    <RadioInput bind:group={radioGroup} name="number" value="1" label="one" />
    <RadioInput bind:group={radioGroup} name="number" value="2" label="two" />
    <RadioInput bind:group={radioGroup} name="number" value="3" label="three" />
    <RadioInput block bind:group={radioGroup} name="number" value="4" label="four" />
    <h3>Checkbox</h3>
    <Checkbox on:change={onChange} bind:group={checkboxGroup} name="cart" value="milk" label="milk" />
    <Checkbox on:change={onChange} bind:group={checkboxGroup} name="cart" value="water" label="water" />
    <Checkbox on:change={onChange} name="cart" value="banana" label="banana" />
    <h2>Toggle</h2>
    <Toggle bind:value={toggle} />
    <h2>Date picker</h2>
    <DatePicker label="Date EU" bind:value={date} />
    <DatePicker label="Date US" bind:value={date} format='MM-DD-YYYY' />
    <h2>Upload</h2>
    <h3>Upload default usage</h3>
    <Upload type='drag-and-drop' on:change={(e) => console.log('file change', e.detail)}/>
    <h3>Upload accept</h3>
    <Upload type='both' multiple  accept='.docx, .png' on:change={(e) => console.log('file change', e.detail)} />
    <h3>Upload multiple</h3>
    <Upload type='button' multiple on:change={(e) => console.log('file change', e.detail)} />
</div>