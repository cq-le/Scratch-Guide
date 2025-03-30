async function getAssetPaths() {
    let assetPathsArray = null;
    let assetPaths = {};
    let loading = true;
    let error = null;
    try {
        const response = await fetch('./src/routes/data/asset-paths.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        assetPathsArray = await response.json();
        for (const assetPath of Object.values(assetPathsArray)) {
            assetPaths[assetPath.match(/([^/.]+)(?:\.?[^/.])*$/)[1]] = assetPath.replaceAll("\\\\", "/");
        }
        return assetPaths;
    } catch (e) {
        error = e;
    } finally {
        loading = false;
    }
}



export async function load({ params }) {
    console.log(await getAssetPaths());
	return {
		assetPaths: await getAssetPaths(),
        groups: {
            'Motion': {
                'State Blocks'  : ['x-position', 'y-position', 'direction'],
                'Set Blocks'    : ['go-to-sprite', 'go-to-position', 'glide-to-sprite', 'glide-to-position', 'point-in-direction', 'point-towards-sprite', 'set-x', 'set-y'],
                'Change Blocks' : ['move-steps', 'turn-right', 'turn-left'],
                'Special Blocks': ['edge-bounce', 'set-rotation-style']
            },
            'Looks': {
                'State Blocks'   : ['show', 'hide', 'clear-looks-effects', 'costume-number', 'backdrop-number', 'size'],
                'Speech Blocks'  : ['say-for-duration', 'say', 'think-for-duration', 'think'],
                'Switch Blocks'  : ['set-costume', 'next-costume', 'set-backdrop', 'next-backdrop', 'set-layer', 'change-layer'],
                'Graphics Blocks': ['change-size', 'set-size', 'change-effect', 'set-effect']
            },
            'Sound': {},
            'Events': {},
            'Control': {},
            'Sensing': {},
            'Operators': {},
            'Variables': {},
            'My Blocks': {},
        },
        programs: {
            'Motion': "https://scratch.mit.edu/projects/1153447292/embed",
            'Looks': "https://scratch.mit.edu/projects/1154266906/embed",
            'Sound': "https://scratch.mit.edu/projects/1154735337/embed",
            'Events': "",
            'Control': "",
            'Sensing': "",
            'Operators': "",
            'Variables': "",
            'My Blocks': "",
        },
        blockText: {
            'x-position': 'A number representing the horizontal position of the sprite. Changing this number will move the sprite left or right.\
            \n\nPositive numbers mean the sprite is towards the right.\
            \nNegtaive numbers mean the sprite is towards the left.',
            'x-position-easy': '⟷ position\n+ moves ⟶\n- moves ⟵',
            
            'y-position': 'A number representing the vertical position of the sprite. Changing this number will move the sprite up or down.\
            \n\nPositive numbers mean the sprite is towards the top.\
            \nNegative numbers mean the sprite is towards the bottom.',

            'direction': 'A number representing the direction that a sprite is pointing in.\
            \n\n[0 or 360] indicates pointing to the top.\
            \n[90 or -270] indicates pointing to the right.\
            \n[180 or -180] indicates pointing to the bottom.\
            \n[270 or -90]  indicates pointing to the left.',
        },
	};
};