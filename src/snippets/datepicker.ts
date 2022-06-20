export default {
    default: `
    <DatePicker label="Default usage" bind:value={date} />
    `,
    date: `
    <DatePicker 
        label="DD.MM.YYYY" 
        bind:value={date}
    />
    <DatePicker 
        label="MM.DD.YYYY" 
        bind:value={date} 
        format='MM.DD.YYYY' 
    />
    <DatePicker 
        label="MM-DD-YYYY" 
        bind:value={date} 
        format='MM-DD-YYYY' 
    />
    `,
}