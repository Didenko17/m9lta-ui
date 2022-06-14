<script lang="ts">
    export let to = ""
</script>

<a href={to} class="link">
    <slot />
</a>

<style>
.link {
    text-decoration: none;
    color: #1674E0;
    font-size: 14px;
}
</style>
