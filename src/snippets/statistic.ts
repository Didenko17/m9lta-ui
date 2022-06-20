export default {
    default:`
    <Statistic
        name='percentage'
        value="42"
    />
    `,
    units: `
    <Statistic
        name='speed'
        units='km / h'
        value="42"
    />
    `,
    icons: `
    <script>
        import icon from 'icon src'
    </script>
    <Statistic
        name='stars with units'
        icon={icon}
        value="42"
        units='stars'
    />
    <Statistic
        name='stars'
        icon={icon}
        value="42"
        units=''
    />
    `
}