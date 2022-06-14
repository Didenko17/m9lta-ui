<script lang="ts">
    export let size: 'small' | 'medium' | 'large' = 'medium' ;
    export let circle = false;
    export let src = ''
    export let alt = 'Avatar'
</script>

<div class={"avatar " + size } class:circle >
    <img src={src} {alt} />
</div>

<style>
.avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.circle {
    border-radius: 50%;
}

.avatar.small {
    height: 32px;
    width: 32px;
}

.avatar.medium {
    height: 64px;
    width: 64px;
}

.avatar.large {
    height: 128px;
    width: 128px;
}

.avatar img {
    display: block;
    max-height: 100%;
}
</style>