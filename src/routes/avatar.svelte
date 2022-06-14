<script lang="ts">
import Avatar from "$lib/Avatar.svelte";

import avatar from '../img/avatar.png'

</script>

<div class="avatar-page">
    <h2>Avatar</h2>
    <h3>Avatar default usage</h3>
    <Avatar src={avatar} />
    <h3>Avatar Size</h3>
    <Avatar src={avatar} size='small' />
    <Avatar src={avatar} />
    <Avatar src={avatar} size='large' />
    <h3>Avatar circle</h3>
    <Avatar src={avatar} circle />
</div>