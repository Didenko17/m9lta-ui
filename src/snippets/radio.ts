export default {
    default: `
    <RadioInput value="1" label="one" />
    <RadioInput value="2" label="two" />
    `,
    group: `
    <script>
        let group = "2";
    </script>
    <RadioInput 
        bind:group={group} 
        value="1" 
        label="one" 
    />
    <RadioInput
        bind:group={group} 
        value="2" 
        label="two" 
    />
    <RadioInput
        bind:group={group} 
        value="3" 
        label="three" 
    />
    `,
    block:`
    <RadioInput block value="1" label="one" />
    <RadioInput block value="2" label="two" />
    `,
}