<script>

    import { userState } from './states.svelte.js';
    import { base } from '$app/paths';
	import { onMount } from 'svelte';
    let { data } = $props();

    const setCurrentGroup = (groupType) => {
        let root = document.documentElement;
        userState.currentGroup = groupType;
        userState.currentGroupLength = data.groups[userState.currentTab][userState.currentGroup].length;
        userState.currentGroupLength > 4 
        ? root.style.setProperty('--button-max-width', "12.5svw") 
        : root.style.setProperty('--button-max-width', "25svw");
        userState.currentBlock = '';
    };
    const setCurrentBlock = (blockItem) => { 
        userState.currentBlock = blockItem;
    };
    onMount(() => {
        let groupButtons = document.querySelectorAll("#block-groups > button");
        groupButtons.forEach(button => {
            button.addEventListener('click', () => {
                setCurrentGroup(button.dataset.name);
                groupButtons.forEach(button2 => {
                    button2.dataset.name === userState.currentGroup 
                    ? button2.dataset.toggle = 'true' 
                    : button2.dataset.toggle = 'false';

                    button2.dataset.toggle === 'true'
                    ? button2.classList.add('active')
                    : button2.classList.remove('active')
                    console.log(button2.className);
                })
            })
        })
    })
</script>

{#snippet block(currentTab)}
    <div id="block-container">
        <div id="block-groups">
            {#each Object.keys(data.groups[currentTab]) as groupType}
                <button data-toggle='false' data-name={groupType} onclick={() => setCurrentGroup(groupType)}>{groupType}</button>
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
    :global(:root) {
        --button-max-width: 25svw;
    }
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
        border-left: 2px solid var(--nav-bar-hover-background);
        border-right: 2px solid var(--nav-bar-hover-background);
        filter: drop-shadow(0mm 6mm 0mm var(--nav-bar-hover-background));
        border-bottom-left-radius: 2svh;
        border-bottom-right-radius: 2svh;
        font-size: 2rem;
        transition-property: background;
        transition-duration: 0.2s;
    }
    :global(#block-groups > button[data-toggle="true"]) {
        background: var(--nav-bar-hover-background);
    }
    #block-groups > button:hover {
        background: var(--nav-bar-hover-background);
    }
    #block-items {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        box-sizing: border-box;
        max-height: calc(100svh - 20svh - 53px);
        width: 25svw;
        margin: 0;
    }
    #block-items > button {
        flex: auto;
        flex-grow: 1;
        height: 25%;
        width: 100%;
        max-width: var(--button-max-width);
        background: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
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