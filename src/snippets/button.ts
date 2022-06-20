export default {
    default: `
    <Button
        on:click={(e) => onClick(e)}
    >Button</Button>
    <Button
        on:click={onClick}
        type="primary"
    >Button</Button>
    <Button 
        on:click={onClick} 
        type="black"
    >Button</Button>
    `,
    outline: `
    <Button 
        on:click={onClick} 
        type="primary" 
        outline
    >Button</Button>
    <Button 
        on:click={onClick} 
        outline
    >Button</Button>
    <Button 
        on:click={onClick} 
        type="primary" 
        outline
    >Button</Button>
    `,
    circle: `
    <Button 
        circle 
    >Click</Button>
    <Button 
        circle 
        type="primary" 
        outline
    >Click</Button>
    <Button 
        circle 
        type="black" 
    >Click</Button>
    `
}