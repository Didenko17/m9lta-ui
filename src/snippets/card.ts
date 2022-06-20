export default {
    default: `
    <Card>
        Some text
    </Card>
    `,
    responsive: `
    <Card size='responsive'>
        Some text
    </Card>
    `,
    backgroundImage: `
    <script>
    import img from "img src";
    </script>
    <Card size='small' backgroundImage={img}>
        Photo by kira schwarz
    </Card>
    <Card backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Card size='large' backgroundImage={img}>
        Photo by kira schwarz
    </Card>
    `
}