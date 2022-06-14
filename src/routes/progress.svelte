<script lang="ts">
import Progress from "$lib/Progress.svelte";


</script>

<div class="progress-page">
    <h2>Progress</h2>
    <Progress value={0} />
    <Progress value={25} />
    <Progress value={50} />
    <Progress value={75} />
    <Progress value={100} />
</div>