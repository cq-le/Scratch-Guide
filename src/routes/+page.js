function getAssetPaths() {
    let assetPathsArray = [
        "/assets/backdrop-number.png",
        "/assets/change-effect.png",
        "/assets/change-layer.png",
        "/assets/change-size.png",
        "/assets/change-x.png",
        "/assets/change-y.png",
        "/assets/clear-looks-effects.png",
        "/assets/costume-number.png",
        "/assets/direction.png",
        "/assets/edge-bounce.png",
        "/assets/glide-to-position.png",
        "/assets/glide-to-sprite.png",
        "/assets/go-to-position.png",
        "/assets/go-to-sprite.png",
        "/assets/hide.png",
        "/assets/move-steps.png",
        "/assets/next-backdrop.png",
        "/assets/next-costume.png",
        "/assets/point-in-direction.png",
        "/assets/point-towards-sprite.png",
        "/assets/say-for-duration.png",
        "/assets/say.png",
        "/assets/set-backdrop.png",
        "/assets/set-costume.png",
        "/assets/set-effect.png",
        "/assets/set-layer.png",
        "/assets/set-rotation-style.png",
        "/assets/set-size.png",
        "/assets/set-x.png",
        "/assets/set-y.png",
        "/assets/show.png",
        "/assets/size.png",
        "/assets/think-for-duration.png",
        "/assets/think.png",
        "/assets/turn-left.png",
        "/assets/turn-right.png",
        "/assets/x-position.png",
        "/assets/y-position.png"
    ];
    let assetPaths = {};
    for (const assetPath of Object.values(assetPathsArray)) {
        assetPaths[assetPath.match(/([^/.]+)(?:\.?[^/.])*$/)[1]] = assetPath.replaceAll("\\\\", "/");
    }
    return assetPaths;
}


export function load({ params }) {
	return {
		assetPaths: getAssetPaths(),
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
            'Sound': {
                'State Blocks': [],
                'Play Blocks': [],
                'Effect Blocks': [],
                'Volume Blocks': []
            },
            'Events': {
                'Input Blocks': [],
                'State Blocks': [],
                'Broadcast Blocks': []
            },
            'Control': {
                'Timing Blocks': [],
                'Conditional Blocks': [],
                'Loop Blocks': [],
                'Clone Blocks': []
            },
            'Sensing': {
                'State Blocks': [],
                'Touching Blocks': [],
                'Input Blocks': [],
                'Special Blocks': []
            },
            'Operators': {
                'Math Blocks': [],
                'Boolean Blocks': [],
                'String Blocks': [],
                'Special Blocks': []
            },
            'Variables': {
                'Variable Options': [],
                'Variable Blocks': [],
                'List State': [],
                'List Changing': []
            },
            'My Blocks': {
                'Block Options': []
            },
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