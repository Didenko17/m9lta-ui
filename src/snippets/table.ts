export default {
    default: `
    <script>
        const columns = [
            {
                name: 'Number',
                key: 'number',
                dataKey: 'number',
            },
            {
                name: 'Last name',
                key: 'lastName',
                dataKey: 'lastName',
            },
            {
                name: 'Avatar',
                key: 'button',
                type: 'component',
                component: Avatar,
                componentProps: {
                    size: 'small',
                    src: avatar,
                },
            },
            {
                name: 'Edit',
                key: 'edit',
                type: 'icon',
                iconSrc: editIcon,
            },
            {
                name: 'Link',
                key: 'link',
                type: 'link',
                linkHref: '/readyLayout',
                linkText: 'show component',
            },
            {
                name: 'Delete',
                key: 'delete',
                type: 'button',
                buttonText: 'delete',
            }
        ]

        const data = [
            {
                number: 6,
                lastName: 14,
            },
            {
                number: 11,
                lastName: 3,
            },
            {
                number: 1,
                lastName: 33,
            }
        ]
    </script>
    <Table {columns} {data} />
    `,
    columnType: `
    {
        name: string,
        key: string,
        onSort?: (a, b) => number,
        onFilter?: (a, b) => boolean,
        isSort?: boolean,
        isFilter?: boolean,
        type?: 'text' | 'button' | 'icon' | 'link' | 'component'
        dataKey?: string,
        component?: any,
        componentProps?: {
            [key: string]: string
        },
        componentSlots?: string,
        iconSrc?: string,
        linkHref?: string,
        linkText?: string,
        buttonText?: string,
    }
    `
}