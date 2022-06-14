<script lang="ts">
import Tag from "$lib/Tag.svelte";


</script>

<div class="tag-page">
    <h2>Tag</h2>
    <h3>Tag basic usage</h3>
    <Tag>Basic</Tag>
    <Tag color="#08A045">Green tag</Tag>
    <Tag color="#B3001B">Red tag</Tag>
    <Tag color="#1674E0">Primaty tag</Tag>
    <h3>Tag rounded</h3>
    <Tag rounded>Basic</Tag>
    <Tag rounded color="#08A045">Green tag</Tag>
    <Tag rounded color="#B3001B">Red tag</Tag>
    <Tag rounded color="#1674E0">Primaty tag</Tag>
    <h3>Tag rounded</h3>
    <Tag canDelete on:delete={(e)=>{console.log(e.detail)}}>Basic</Tag>
    <Tag canDelete on:delete={(e)=>{console.log(e.detail)}} color="#08A045">Green tag</Tag>
    <Tag canDelete rounded on:delete={(e)=>{console.log(e.detail)}} color="#B3001B">Red tag</Tag>
    <Tag canDelete rounded on:delete={(e)=>{console.log(e.detail)}} color="#1674E0">Primaty tag</Tag>
</div>