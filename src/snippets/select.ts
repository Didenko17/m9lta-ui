export default {
    default: `
        <script>
            let options = [
                {name: '1', value: '1'}, 
                {name: 'two', value: '2'},
                {name: 'third', value: '3'}
            ]
        </script>
        <Select
            on:change={(e) => onChange(e)}
            {options} 
        />
    `,
    multiple: `
    <script>
        let options = [
            {name: '1', value: '1'}, 
            {name: 'two', value: '2'},
            {name: 'third', value: '3'}
        ]
    </script>
    <Select
        defaultValue={["3"]}
        multiple
        {options}
    />
    `,
    disabled: `
    <script>
        let options = [
            {name: '1', value: '1'}, 
            {name: 'two', value: '2'},
            {name: 'third', value: '3', disabled: true}
        ]
    </script>
    <Select
        defaultValue={["2"]}
        {options}
    />
    `
}