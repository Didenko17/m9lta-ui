export default {
    default: `
    <Upload type='drag-and-drop'/>
    `,
    accept: `
    <Upload 
        type='both' 
        multiple  
        accept='.docx, .png'
    />
    `,
    multiple: `
    <Upload type='button' multiple/>
    `,
}