export default {
    default: `
    <script>
        import avatar from '../img/avatar.jpg'
    </script>
    <Avatar src={avatar} size='small' />
    <Avatar src={avatar} />
    <Avatar src={avatar} size='large' />
    `,
    circle: `
    <script>
        import avatar from '../img/avatar.jpg'
    </script>
    <Avatar circle src={avatar} size='small' />
    <Avatar circle src={avatar} />
    <Avatar circle src={avatar} size='large' />
    `,
}