export default {
    default: `
    <script>
        let group = [ ];
    </script>
    <Checkbox 
        bind:group={group} 
        value="milk" 
        label="milk"
    />
    <Checkbox
        bind:group={group} 
        value="water" 
        label="water"
    />
    <Checkbox
        bind:group={group} 
        value="banana" 
        label="banana"
    />
    `,
    block:`
    <script>
        let group = [ ];
    </script>
    <Checkbox 
        block 
        bind:group={group}
        value="dog" 
        label="dog" 
    />
    <Checkbox 
        block 
        bind:group={group} 
        value="cat" 
        label="cat" 
    />
    <Checkbox 
        block 
        bind:group={group} 
        value="hamster" 
        label="hamster" 
    />
    `
}