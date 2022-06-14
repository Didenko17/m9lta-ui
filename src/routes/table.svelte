<script lang="ts">

    import Table from "$lib/Table.svelte";

    import editIcon from "../img/edit.svg";
    import avatar from '../img/avatar.png';
    import Avatar from "$lib/Avatar.svelte";

    const columns = [
        {
            name: 'Number',
            key: 'number',
            dataKey: 'number',
            isSort: true,
            isFilter: true,
        },
        {
            name: 'Last name',
            key: 'lastName',
            dataKey: 'lastName',
            isSort: true,
            isFilter: true,
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
            componentSlots: 'Click'
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

<div class="table-page">
    <h2>Table</h2>
    <h3>Table default usage</h3>
    <Table {data} {columns} />
</div>