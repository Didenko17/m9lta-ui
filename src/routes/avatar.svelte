<script lang="ts">
import Avatar from "$lib/Avatar.svelte";
import PropsTable from "../components/propsTable.svelte";
import type { PropsTableRow } from "src/types/PropsTableRow";
import avatar from '../img/avatar.jpg'
import snippet from '../snippets/avatar';
import Code from "$lib/Code.svelte";

const props: PropsTableRow[] = [
    {
        props: "size",
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
    },
    {
        props: "circle",
        type: "boolean",
        default: "false",
    },
    {
        props: "src",
        type: "string",
        default: "''",
    },
    {
        props: "alt",
        type: "string",
        default: "'Avatar'",
    },
]

</script>

<div class="avatar-page">
    <h1>Avatar</h1>
    <h2>Avatar default usage</h2>
    <p>Use the Avatar to display the image in one of the following resolutions: 32x32, 64x64, 128x128.</p>
    <div class="example">
        <Avatar src={avatar} size='small' />
        <Avatar src={avatar} />
        <Avatar src={avatar} size='large' />
    </div>
    <Code>{snippet.default}</Code>
    <h2>Avatar circle</h2>
    <p>You can also use props circle to make it rounded.</p>
    <div class="example">
        <Avatar circle src={avatar} size='small' />
        <Avatar circle src={avatar} />
        <Avatar circle src={avatar} size='large' />
    </div>
    <Code>{snippet.circle}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />

</div>

<style>
.example {
    margin-top: 10px;
}
</style>