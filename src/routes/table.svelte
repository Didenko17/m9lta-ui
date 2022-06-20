<script lang="ts">

    import Table from "$lib/Table.svelte";
    import editIcon from "../img/edit.svg";
    import avatar from '../img/avatar.jpg';
    import Avatar from "$lib/Avatar.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import PropsTable from "$lib/docs/propsTable.svelte";
    import snippet from "../snippets/table"
import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "columns",
            type: "Column[ ]",
            default: "[ ]",
        },
        {
            props: "data",
            type: "any[ ]",
            default: "[ ]",
        },
    ]

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

<div class="table-page">
    <h1>Table</h1>
    <h2>Table default usage</h2>
    <Table {columns} {data} />
    <Code>{snippet.default}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <h2>Column type</h2>
    <Code nocopy>{snippet.columnType}</Code>
</div>