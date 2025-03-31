<script>
    import { fade, fly } from 'svelte/transition'
    import { userState } from './states.svelte.js';
    let { data, children } = $props();

    const toggleDropdown = () => { userState.dropdownState = !userState.dropdownState };
    const setEasyText = () => {userState.easyTextMode = !userState.easyTextMode};
    const setCurrentTab = (tab) => {
        userState.currentTab = tab;
        userState.currentGroup = '';
        document.documentElement.style.setProperty('--nav-bar-background',        data.blockColors[tab][0]);
        document.documentElement.style.setProperty('--nav-bar-button-background', data.blockColors[tab][0]);
        document.documentElement.style.setProperty('--nav-bar-hover-background',  data.blockColors[tab][1]);
        toggleDropdown();
    };
</script>

<nav>
    <button onclick={toggleDropdown}>
        <div class="transition-container">
            {#if userState.dropdownState === false}
                <svg id="menu-button" transition:fade={{duration: 200}} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="24px" fill="fillColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            {:else}
                <svg id="menu-open-button" transition:fade={{duration: 200}} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="24px" fill="fillColor"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
            {/if}
        </div>
        <p>Block Types</p>
    </button>
    <div id="options">
        {#if userState.easyTextMode}
            <button onclick={() => setEasyText()}>Switch to<br>Detailed Explanation</button>
        {:else}
            <button onclick={() => setEasyText()}>Switch to<br>Easy Explanation</button>
        {/if}
    </div>
</nav>

{#if userState.dropdownState}
    <div transition:fly={{ x: -200, duration: 200 }} id="dropdown-container">
        {#each data.blockTypes as blockType}
            <button onclick={() => setCurrentTab(blockType)}>{blockType}</button>
        {/each}
    </div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Handlee&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    :global(:root) {
        --nav-bar-background: rgba(76,151,255,0.95);
        --nav-bar-button-background: rgba(76,151,255,0.95);
        --nav-bar-hover-background: rgba(153,195,255,1.0);
    }
    * {
        font-family: "Noto Sans", sans-serif;
        font-weight: 600;
    }
    nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: var(--nav-bar-background);
        font-size: 1.2rem;
        height: 50px;
        transition-property: background;
        transition-duration: 0.2s;
    }
    nav > button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        width: 12rem;
        height: 50px;
        gap: 10px;
    }
    nav > button > div {
        height: 50px;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav > button > div > svg {
        position: absolute;
        color: black;
    }
    button {
        background: none;
        border: none;
        width: 6rem;
        height: 50px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    button:hover {
        background: var(--nav-bar-hover-background);
    }
    #dropdown-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        background: var(--nav-bar-button-background);
        width: calc(12rem);
        height: calc(100svh - 50px);
        z-index: 10;
        transition-property: background;
        transition-duration: 0.2s;
    }
    #dropdown-container > button {
        font-size: 1.3rem;
        width: 100%;
    }
    #options > button {
        width: 12rem;
    }
</style>

{@render children()}