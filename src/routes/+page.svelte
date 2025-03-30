<script>

    import { userState } from './states.svelte.js';
    let { data } = $props();

    const setCurrentGroup = (groupType) => { userState.currentGroup = groupType; };
    const setCurrentBlock = (blockItem) => { userState.currentBlock = blockItem; };

</script>

{#snippet block(currentTab)}
    <div id="block-container">
        <div id="block-groups">
            {#each Object.keys(data.groups[currentTab]) as groupType}
                <button onclick={() => setCurrentGroup(groupType)}>{groupType}</button>
            {/each}
        </div>
        <div id="block-info">
            <div id="block-items">
                {#each data.groups[currentTab][userState.currentGroup] as blockItem}
                    <button onclick={() => setCurrentBlock(blockItem)}>
                        <img src={data.assetPaths[blockItem]} alt={blockItem}>
                    </button>
                {/each}
            </div>
            <div id="block-text">
                {#if userState.easyTextMode}
                    <p>{data.blockText[`${userState.currentBlock}-easy`] || data.blockText[userState.currentBlock] || ''}</p>
                {:else}
                    <p>{data.blockText[userState.currentBlock] || ''}</p>
                {/if}
            </div>
        </div>
    </div>
{/snippet}
{#snippet scratchProgram(currentTab)}
    <iframe title='' src={data.programs[currentTab]} allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
{/snippet}

<main>
    {@render block(userState.currentTab)}
    {@render scratchProgram(userState.currentTab)}
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2rem;
    }
    main {
        display: flex;
        justify-content: space-between;
        height: calc(100svh - 50px);
        max-width: 100svw;
    }
    iframe {
        width: 100%;
        height: 100%;
    }
    #block-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        box-sizing: border-box;
    }
    #block-groups {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20svh;
    }
    #block-groups > button {
        background: var(--nav-bar-background);
        flex-basis: 0;
        flex-grow: 1;
        height: 20svh;
        border: none;
        border-bottom-left-radius: 2svh;
        border-bottom-right-radius: 2svh;
        font-size: 1.4rem;
        transition-property: background;
        transition-duration: 0.2s;
    }
</style>