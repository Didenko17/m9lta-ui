<script lang="ts">
    import dragAndDropIcon from './icons/drag-and-drop.svg'
    import activeDragAndDropIcon from './icons/drag-and-drop-active.svg'
    import Button from './Button.svelte'
    import { createEventDispatcher } from 'svelte';
    
    export let type: 'drag-and-drop' | 'button' | 'both' = 'drag-and-drop'
    export let accept = ''
    export let multiple = false
    
    let over = false;
    let uploadedFiles: File[] = []
    let icon = dragAndDropIcon
    let fileInput;


    const dispatch = createEventDispatcher()

    $: {
        icon = over ? activeDragAndDropIcon : dragAndDropIcon 
    }

    $: {
        if (uploadedFiles) {
            dispatch('change', { files : uploadedFiles })
        }
    }

    const onDragOver = (e) => {
        over = true
    }

    const onDrop = (e) => {
        over = false;
        const types = accept.replace(',', '').split(' ')
        if (multiple) {
            if (e.dataTransfer) {
                [...e.dataTransfer.files].forEach( file => {
                    if ( types.includes(file.type) || types.includes(file.name.slice(file.name.indexOf('.'))) ) {
                        uploadedFiles = [ ...uploadedFiles, file ]
                    }
                });
            }
            
        } else {
            if (e.dataTransfer) {
                const file = e.dataTransfer.files[0]
                if ( types.includes(file.type) || types.includes(file.name.slice(file.name.indexOf('.')))) {
                    uploadedFiles = [ file ]
                } else {
                    dispatch('error', {
                        text: 'Type validation failed.'
                    })
                }
            }
        }
    }

    const onChange = (e) => {
        if (multiple) {
            uploadedFiles = [ ...uploadedFiles, ...e.target.files]
        } else {
            uploadedFiles = [...e.target.files]
        }
    }

    const deleteFile = (name: string) => {
        uploadedFiles = uploadedFiles.filter((item) => item.name !== name)
    }

    const onClick = () => {
        fileInput.click();
    }

</script>

<div class="upload">
    {#if type !== 'button'}
        <div
            class="drag-and-drop"
            class:over
            on:dragover|preventDefault={onDragOver}
            on:drop|preventDefault={onDrop}
            on:dragleave|preventDefault={() => over = false }
            on:click={onClick}
        >
            <img src={icon} alt="Upload">
            <div class="drag-and-drop-text">
                Click or drag file to this zone to upload
            </div>
        </div>
    {/if} 
    {#if type !== 'drag-and-drop'}
        <div class="upload-button">
            <Button
                type='default'
                on:click={onClick}
            >Upload</Button>
        </div>
    {/if}
    <input bind:this={fileInput} on:change={onChange} {accept} {multiple} class="upload-input" type="file">
    {#if uploadedFiles.length}
        <div class="uploaded-files">
            {#each uploadedFiles as file }
                <div class="uploaded-file">
                    <div class="uploaded-file-name">{file.name}</div>
                    <div class="uploaded-file-delete" on:click={() => deleteFile(file.name)}></div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
.upload {
    margin-top: 10px;
    width: 300px;
}
.drag-and-drop {
    height: 200px;
    width: 100%;
    border: 1px dashed #cacaca;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #aaa;
    border-radius: 3px;
}
.drag-and-drop.over {
    border-color: #1674E0;
    color: #1674E0;
}

.drag-and-drop-text {
    margin-top: 15px;
    font-size: 14px;  
}

.uploaded-files {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

.uploaded-file {
    width: max-content;
    display: inline-flex;
    align-items: center;
    margin: 5px 5px 0 5px;
}

.uploaded-file-name {
    color: #aaa;
    font-size: 12px;
}

.uploaded-file-delete {
    height: 16px;
    width: 16px;
    background: center / contain no-repeat url('./icons/delete.svg');
    cursor: pointer;
}

.upload-input {
    display: none;
}

</style>