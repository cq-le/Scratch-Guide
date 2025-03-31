<script>

    import { userState } from './states.svelte.js';
    import { base } from '$app/paths';
    let { data } = $props();

    const setCurrentGroup = (groupType) => {
        userState.currentGroup = groupType;
        userState.currentGroupLength = data.groups[userState.currentTab][userState.currentGroup].length;
        userState.currentBlock = '';
    };
    const setCurrentBlock = (blockItem) => { 
        userState.currentBlock = blockItem;
    };

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
                        <img src={`${base}${data.assetPaths[blockItem]}`} alt={blockItem}>
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
    @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Handlee&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    :global(body) {
        margin: 0;
        font-family: "Noto Sans", sans-serif;
        font-size: 2rem;
    }
    main {
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        justify-content: center;
        height: calc(100svh - 50px);
        max-width: 100svw;
    }
    iframe {
        width: 100%;
        height: 100%;
    }
    #block-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
    }
    #block-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
    }
    #block-groups {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20svh;
        margin: 0;
        box-sizing: border-box;
    }
    #block-groups > button {
        background: var(--nav-bar-background);
        font-family: "Handlee", cursive;
        font-weight: bold;
        flex-basis: 0;
        flex-grow: 1;
        height: 20svh;
        box-sizing: border-box;
        border: none;
        border-bottom-left-radius: 2svh;
        border-bottom-right-radius: 2svh;
        font-size: 2rem;
        transition-property: background;
        transition-duration: 0.2s;
    }
    #block-items {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        box-sizing: border-box;
        width: 25svw;
        margin: 0;
    }
    #block-items > button {
        flex: auto;
        flex-grow: 1;
        height: 25%;
        width: 100%;
        max-width: 25svw;
        background: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 2px solid black;
    }
    #block-items > button > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #block-text {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 25svw;
    }
    #block-text > p {
        margin: 0;
        max-height: calc(100svh - 20svh - 50px);
        width: 25svw;
        white-space: pre-line;
        text-align: center;
    }
</style>