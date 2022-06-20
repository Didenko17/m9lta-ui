export default {
    text: `
    <Input
        placeholder="Input value"
        bind:value={textInputValue}
    /> 
    `,
    number: `
    <Input 
        type="number" 
        placeholder="Input number" 
        label="Age" 
        bind:value={numberInputValue} 
    />
    `,
    password: `
    <Input 
        type="password" 
        placeholder="Input password" 
        label="Password"
        bind:value={passwordInputValue}
    />
    `,
    email: `
    <Input
        id="email"
        name="email"
        type="email"
        placeholder="Input email"
        label="Email"
    />
    `
}  