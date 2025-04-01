export function load({ params }) {
	return {
		assetPaths: getAssetPaths(),
        groups: {
            'Motion': {
                'State Blocks'  : ['x-position', 'y-position', 'direction'],
                'Set Blocks'    : ['go-to-sprite', 'go-to-position', 'glide-to-sprite', 'glide-to-position',
                                   'point-in-direction', 'point-towards-sprite', 'set-x', 'set-y'],
                'Change Blocks' : ['move-steps', 'turn-right', 'turn-left'],
                'Special Blocks': ['edge-bounce', 'set-rotation-style']
            },
            'Look': {
                'State Blocks'   : ['show', 'hide', 'clear-looks-effects', 'costume-number', 'backdrop-number', 'size'],
                'Speech Blocks'  : ['say-for-duration', 'say', 'think-for-duration', 'think'],
                'Switch Blocks'  : ['set-costume', 'next-costume', 'set-backdrop', 'next-backdrop', 'set-layer', 'change-layer'],
                'Graphics Blocks': ['change-size', 'set-size', 'change-effect', 'set-effect']
            },
            'Sound': {
                'State Blocks': ['volume', 'stop-sounds', 'clear-sound-effects'],
                'Play Blocks': ['play-sound', 'start-sound'],
                'Effect Blocks': ['change-pitch-effect', 'set-pitch-effect'],
                'Volume Blocks': ['change-volume', 'set-volume']
            },
            'Event': {
                'Input Blocks': ['on-click-flag', 'on-key-press', 'on-click-sprite'],
                'State Blocks': ['on-backdrop-switch', 'on-state-change'],
                'Broadcast Blocks': ['receive-broadcast', 'broadcast-message', 'broadcast-message-and-wait']
            },
            'Control': {
                'Timing Blocks': ['wait', 'wait-until', 'stop'],
                'Conditional Blocks': ['if-then', 'if-then-else'],
                'Loop Blocks': ['repeat', 'forever', 'repeat-until'],
                'Clone Blocks': ['start-as-clone', 'create-clone', 'delete-clone']
            },
            'Sensing': {
                'State Blocks': ['distance-to-sprite', 'set-drag-mode', 'loudness', 'timer', 'reset-timer', 'backdrop-number-of-stage'],
                'Touching Blocks': ['touching-sprite', 'touching-color', 'touching-colors'],
                'Input Blocks': ['ask', 'answer', 'key-pressed', 'mouse-down', 'mouse-x', 'mouse-y'],
                'Special Blocks': ['current-date', 'date-since-2000', 'username']
            },
            'Operator': {
                'Math Blocks': ['add', 'subtract', 'multiply', 'divide', 'modulo'],
                'Boolean Blocks': ['greater-than', 'less-than', 'equal-to', 'and', 'or', 'not'],
                'String Blocks': ['join', 'letter-number', 'string-length', 'contains'],
                'Special Blocks': ['round', 'math-function', 'pick-random']
            },
            'Variable': {
                'Variable Options': ['all-sprites', 'this-sprite', 'show-variable', 'hide-variable', 'show-list', 'hide-list'],
                'Variable Blocks': ['set-variable', 'change-variable', 'variable'],
                'List State': ['list', 'delete-all', 'index', 'index-of-item', 'length', 'list-contains-item'],
                'List Changing': ['add-to-list', 'delete-from-list', 'add-at-index', 'replace-item']
            },
            'Function': {
                'Block Options': ['add-input-text', 'add-input-boolean', 'block-label', 'screen-refresh']
            },
        },
        programs: {
            'Motion': "https://scratch.mit.edu/projects/1153447292/embed",
            'Look': "https://scratch.mit.edu/projects/1154266906/embed",
            'Sound': "https://scratch.mit.edu/projects/1154735337/embed",
            'Event': "",
            'Control': "",
            'Sensing': "",
            'Operator': "",
            'Variable': "",
            'Function': "",
        },
        blockText: {
            'x-position': 'A number representing the horizontal position of the sprite. Changing this number will move the sprite left or right.\
            <br><br>Positive numbers mean the sprite is towards the right.\
            <br>Negative numbers mean the sprite is towards the left.',
            'x-position-easy': '⟷ position<br>＋ moves ⟶<br>— moves ⟵',
            
            'y-position': 'A number representing the vertical position of the sprite. Changing this number will move the sprite up or down.\
            <br><br>Positive numbers mean the sprite is towards the top.\
            <br>Negative numbers mean the sprite is towards the bottom.',
            'y-position-easy': '↕ position<br>＋ moves ↑<br>— moves ↓',

            'direction': 'A number representing the direction that a sprite is pointing in.\
            <br><br>[0 or 360] indicates pointing to the top.\
            <br>[90 or -270] indicates pointing to the right.\
            <br>[180 or -180] indicates pointing to the bottom.\
            <br>[270 or -90]  indicates pointing to the left.',
            'direction-easy': '0 or 360 : ↑<br>90 or -270 : ⟶<br>180 or -180 : ↓<br>-90 or 270 : ⟵',

            'go-to-sprite': 'Sets the position of the sprite to another sprite instantly.',
            'go-to-sprite-easy': 'Move to sprite instantly.',

            'go-to-position': 'Sets the position of the sprite to a specific position instantly.',
            'go-to-position-easy': 'Move to position instantly.',

            'glide-to-sprite': 'Smoothly moves the sprite to another sprite over a given duration.',
            'glide-to-sprite-easy': 'Move to sprite smoothly.',

            'glide-to-position': 'Smoothly moves the sprite to a specific position over a given duration.',
            'glide-to-position-easy': 'Move to position smoothly.',

            'point-in-direction': 'Sets where the sprite is pointed towards.',
            'point-in-direction-easy': 'Points sprite in a direction.',

            'point-towards-sprite': 'Sets the sprite\'s direction to point towards another sprite.',
            'point-towards-sprite-easy': 'Points sprite at another sprite.',

            'set-x': 'Sets the sprite\'s x position to a specific value',
            'set-x-easy': 'Move ⟷ to a specific value.',

            'set-y': 'Sets the sprite\'s y position to a specific value',
            'set-y-easy': 'Move ↕ to a specific value.',

            'move-steps': 'Moves the sprite forward by a specific value based on its direction.',
            'move-steps-easy': 'Move forward in direction.',

            'turn-right': 'Changes the sprite\'s direction by adding a specific value to it.',
            'turn-right-easy': 'Turns sprite ↻',

            'turn-left': 'Changes the sprite\'s direction by subtracting a specific value from it.',
            'turn-left-easy': 'TUrns sprite ↺',

            'edge-bounce': 'Keeps the sprite within the bounds of the screen. Touching the screen will cause the sprite to change its direction depending on how it is moving.',
            'edge-bounce-easy': 'Keeps sprite on screen. Sprite will bounce off edges.',
            
            'set-rotation-style': 'Changes how the sprite looks when it faces in different directions.\
            <br><br>all around: Changes the sprite to match the direction.\
            <br>left-right: Only allows the sprite to point left and right.\
            <br>don\'t rotate: Only allows the sprite to point toward the right.',
            'set-rotation-style-easy': 'Changes how the sprite looks when it faces in different directions.',
            
            'show': 'Sets the sprite to be visible.',
            'show-easy': 'Sets the sprite to be visible.',
            
            'hide': 'Sets the sprite to be hidden',
            'hide-easy': 'Sets the sprite to be hidden',
            
            'clear-looks-effects': 'Sets the sprite back to its original costume. This does not affect its size.',
            'clear-looks-effects-easy': 'Sets the sprite back to its original costume. This does not affect its size.',
            
            'costume-number': 'A number representing which costume the sprite is currently wearing.',
            'costume-number-easy': 'A number representing which costume the sprite is currently wearing.',
            
            'backdrop-number': 'A number representing which backdrop the sprite is currently on.',
            'backdrop-number-easy': 'A number representing which backdrop the sprite is currently on.',
            
            'size': 'A number representing the width and height of a sprite.',
            'size-easy': 'A number representing the width and height of a sprite.',
            
            'say-for-duration': 'Makes the sprite show a speech bubble with the given text for a specific duration.',
            'say-for-duration-easy': 'Makes the sprite show a speech bubble with the given text for a specific duration.',
            
            'say': 'Makes the sprite show a speech bubble with the given text forever.',
            'say-easy': 'Makes the sprite show a speech bubble with the given text forever.',
            
            'think-for-duration': 'Makes the sprite show a thought bubble with the given text for a specific duration.',
            'think-for-duration-easy': 'Makes the sprite show a thought bubble with the given text for a specific duration.',
            
            'think': 'Makes the sprite show a thought bubble with the given text forever.',
            'think-easy': 'Makes the sprite show a thought bubble with the given text forever.',
            
            'set-costume': 'Sets the costume number of the sprite to a specific value.',
            'set-costume-easy': 'Sets the costume number of the sprite to a specific value.',
            
            'next-costume': 'Sets the costume number of the sprite to the next costume it owns. If it is on the last costume, it will loop back to the first costume.',
            'next-costume-easy': 'Sets the costume number of the sprite to the next costume it owns. If it is on the last costume, it will loop back to the first costume.',
            
            'set-backdrop': 'Sets the backdrop number of the stage to a specific value.',
            'set-backdrop-easy': 'Sets the backdrop number of the stage to a specific value.',
            
            'next-backdrop': 'Sets the backdrop number of the stage to the next backdrop available. If it is on the last backdrop, it will loop back to the first backdrop.',
            'next-backdrop-easy': 'Sets the backdrop number of the stage to the next backdrop available. If it is on the last backdrop, it will loop back to the first backdrop.',
            
            'set-layer': 'Sets the layer number of the sprite to a specific value.',
            'set-layer-easy': 'Sets the layer number of the sprite to a specific value.',
            
            'change-layer': 'Changes the layer number of the sprite by a specific value.',
            'change-layer-easy': 'Changes the layer number of the sprite by a specific value.',
            
            'change-size': 'Changes the size of the sprite by a specific value.',
            'change-size-easy': 'Changes the size of the sprite by a specific value.',
            
            'set-size': 'Sets the size of the sprite to a specific value.',
            'set-size-easy': 'Sets the size of the sprite to a specific value.',
            
            'change-effect': 'Changes the amount of a graphical effect to be applied to a sprite.',
            'change-effect-easy': 'Changes the amount of a graphical effect to be applied to a sprite.',
            
            'set-effect': 'Sets the amount of a graphical effect to be applied to a sprite.',
            'set-effect-easy': 'Sets the amount of a graphical effect to be applied to a sprite.',
            
            'volume': 'A number representing how loudly the sprite should play sounds.',
            'volume-easy': 'A number representing how loudly the sprite should play sounds.',
            
            'stop-sounds': 'Stops all sounds from playing from this sprite.',
            'stop-sounds-easy': 'Stops all sounds from playing from this sprite.',
            
            'clear-sound-effects': 'Sets the sprite back to its original sound font.',
            'clear-sound-effects-easy': 'Sets the sprite back to its original sound font.',
            
            'play-sound': 'Plays a sound for the entirety of its duration. This behavior is blocking.',
            'play-sound-easy': 'Plays a sound for the entirety of its duration. This behavior is blocking.',
            
            'start-sound': 'Plays a sound for the entirety of its duration. This behavior is non-blocking.',
            'start-sound-easy': 'Plays a sound for the entirety of its duration. This behavior is non-blocking.',
            
            'change-pitch-effect': 'Changes the amount of a sound effect to be applied to a sprite.',
            'change-pitch-effect-easy': 'Changes the amount of a sound effect to be applied to a sprite.',
            
            'set-pitch-effect': 'Sets the amount of a sound effect to be applied to a sprite.',
            'set-pitch-effect-easy': 'Sets the amount of a sound effect to be applied to a sprite.',
            
            'change-volume': 'Changes the volume of the sprite by a given amount.',
            'change-volume-easy': 'Changes the volume of the sprite by a given amount.',
            
            'set-volume': 'Sets the volume of a sprite to a given amount.',
            'set-volume-easy': 'Sets the volume of a sprite to a given amount.',
            
            'on-click-flag': 'Runs any code attached to this block when the green flag is clicked. This is generally the first event of any Scratch Program.',
            'on-click-flag-easy': 'Runs any code attached to this block when the green flag is clicked. This is generally the first event of any Scratch Program.',
            
            'on-key-press': 'Runs any code attached to this block when a given key is pressed. Keys cannot be pressed simultaneously with this block.',
            'on-click-flag-easy': 'Runs any code attached to this block when the green flag is clicked. This is generally the first event of any Scratch Program.',
            
            'on-click-sprite': 'Runs any code attached to this block when this sprite is clicked.',
            'on-click-sprite-easy': 'Runs any code attached to this block when this sprite is clicked.',
            
            'on-backdrop-switch': 'Runs any code attached to this block when the backdrop switches.',
            'on-backdrop-switch-easy': 'Runs any code attached to this block when the backdrop switches.',
            
            'on-state-change': 'Runs any code attached to this block when the state of a specified variable is greater than a specified value. Only loudness and timer are available.',
            'on-state-change-easy': 'Runs any code attached to this block when the state of a specified variable is greater than a specified value. Only loudness and timer are available.',
            
            'receive-broadcast': 'Runs any code attached to this block when it receives a broadcast from another sprite.',
            'receive-broadcast-easy': 'Runs any code attached to this block when it receives a broadcast from another sprite.',
            
            'broadcast-message': 'Broadcasts the following message to all other sprites in the program. This behavior is non-blocking.',
            'broadcast-message-easy': 'Broadcasts the following message to all other sprites in the program. This behavior is non-blocking.',
            
            'broadcast-message-and-wait': 'Broadcasts the following message to all other sprites in the program. The sprite will wait until all sprites are finished processing their broadcast.',
            'broadcast-message-and-wait-easy': 'Broadcasts the following message to all other sprites in the program. The sprite will wait until all sprites are finished processing their broadcast.',
            
            'wait': 'Stops execution of this sprite\'s code until the specified time passes.',
            'wait-easy': 'Stops execution of this sprite\'s code until the specified time passes.',
            
            'wait-until': 'Stops execution of this sprite\'s code until the specified condition passes.',
            'wait-until-easy': 'Stops execution of this sprite\'s code until the specified condition passes.',
            
            'stop': 'Stops execution of code.',
            'stop-easy': 'Stops execution of code.',
            
            'if-then': 'Executes code in this block given that a condition passes. If the condition does not pass, it moves on to the next block.',
            'if-then-easy': 'Executes code in this block given that a condition passes. If the condition does not pass, it moves on to the next block.',
            
            'if-then-else': 'Executes code in this block given that a condition passes. If the condition does not pass, it execudes code in the other part of this block.',
            'if-then-else-easy': 'Executes code in this block given that a condition passes. If the condition does not pass, it execudes code in the other part of this block.',
            
            'repeat': 'Executes the code in this block a given number of times.',
            'repeat-easy': 'Executes the code in this block a given number of times.',
            
            'forever': 'Executes the code in this block until the program ends.',
            'forever-easy': 'Executes the code in this block until the program ends.',
            
            'repeat-until': 'Executes the code in this block until the specified condition passes.',
            'repeat-until-easy': 'Executes the code in this block until the specified condition passes.',
            
            'start-as-clone': 'Executes the code in this block when a clone of this sprite is created.',
            'start-as-clone-easy': 'Executes the code in this block when a clone of this sprite is created.',
            
            'create-clone': 'Creates a clone of the specified sprite.',
            'create-clone-easy': 'Creates a clone of the specified sprite.',
            
            'delete-clone': 'Deletes the current clone.',
            'delete-clone-easy': 'Deletes the current clone.',
            
            'distance-to-sprite': 'A number representing how far the sprite is from the specified sprite.',
            'distance-to-sprite-easy': 'A number representing how far the sprite is from the specified sprite.',
            
            'set-drag-mode': 'Sets whether the sprite can be dragged or not.',
            'set-drag-mode-easy': 'Sets whether the sprite can be dragged or not.',
            
            'loudness': '???',
            'loudness-easy': '???',
            
            'timer': 'A number representing the amount of time that has passed since the program started. This number updates constantly as the program runs.',
            'timer-easy': 'A number representing the amount of time that has passed since the program started. This number updates constantly as the program runs.',
            
            'reset-timer': 'Sets the timer variable back to zero.',
            'reset-timer-easy': 'Sets the timer variable back to zero.',
            
            'backdrop-number-of-stage': 'A number representing the current backdrop number of a stage.',
            'backdrop-number-of-stage-easy': 'A number representing the current backdrop number of a stage.',
            
            'touching-sprite': 'A boolean representing whether a sprite is in contact with the specified sprite.',
            'touching-sprite-easy': 'A boolean representing whether a sprite is in contact with the specified sprite.',
            
            'touching-color': 'A boolean representing whether a sprite is in contact with the specified color.',
            'touching-color-easy': 'A boolean representing whether a sprite is in contact with the specified color.',
            
            'touching-colors': 'A boolean representing whether two colors are in contact with each other.',
            'touching-colors-easy': 'A boolean representing whether two colors are in contact with each other.',
            
            'ask': 'Asks the specified question and waits for the user to input an answer into the program.',
            'ask-easy': 'Asks the specified question and waits for the user to input an answer into the program.',
            
            'answer': 'A value representing the input of the user.',
            'answer-easy': 'A value representing the input of the user.',
            
            'key-pressed': 'A boolean representing whether a given key is pressed. Keys can be pressed simultaneously with this block.',
            'key-pressed-easy': 'A boolean representing whether a given key is pressed. Keys can be pressed simultaneously with this block.',
            
            'mouse-down': 'A boolean representing whether the mouse button is currently pressed down.',
            'mouse-down-easy': 'A boolean representing whether the mouse button is currently pressed down.',
            
            'mouse-x': 'A number representing the x position of where the mouse pointer is on the screen.',
            'mouse-x-easy': 'A number representing the x position of where the mouse pointer is on the screen.',
            
            'mouse-y': 'A number representing the y position of where the mouse pointer is on the screen.',
            'mouse-y-easy': 'A number representing the y position of where the mouse pointer is on the screen.',
            
            'current-date': 'A number representing the current specified date property.',
            'current-date-easy': 'A number representing the current specified date property.',
            
            'days-since-2000': 'A number representing how many days have elapsed since January 1st, 2000.',
            'days-since-2000-easy': 'A number representing how many days have elapsed since January 1st, 2000.',
            
            'username': 'A string representing the username of the program creator(?)',
            'username-easy': 'A string representing the username of the program creator(?)',
            
            'add': 'An operator which adds two numbers together and returns its result.',
            'add-easy': 'An operator which adds two numbers together and returns its result.',
            
            'subtract': 'An operator which subtracts two numbers from each other and returns its result.',
            'subtract-easy': 'An operator which subtracts two numbers from each other and returns its result.',
            
            'multiply': 'An operator which multiplies two numbers together and returns its result.',
            'multiply-easy': 'An operator which multiplies two numbers together and returns its result.',
            
            'divide': 'An operator which divides two numbers with each other and returns its quotient.',
            'divide-easy': 'An operator which divides two numbers with each other and returns its quotient.',
            
            'modulo': 'An operator which divides two numbers together and returns its remainder.',
            'modulo-easy': 'An operator which divides two numbers together and returns its remainder.',
            
            'greater-than': 'An operator which returns whether a given number is greater than the other.',
            'greater-than-easy': 'An operator which returns whether a given number is greater than the other.',
            
            'less-than': 'An operator which returns whether a given number is less than the other.',
            'less-than-easy': 'An operator which returns whether a given number is less than the other.',
            
            'equal-to': 'An operator which returns whether a given number is equal to the other.',
            'equal-to-easy': 'An operator which returns whether a given number is equal to the other.',
            
            'and': 'An operator which returns True if and only if all conditions in this block are met.',
            'and-easy': 'An operator which returns True if and only if all conditions in this block are met.',
            
            'or': 'An operator which returns True if and only if any condition in this block is met.',
            'or-easy': 'An operator which returns True if and only if any condition in this block is met.',
            
            'not': 'An operator which returns True if and only if the condition in this block is False.',
            'not-easy': 'An operator which returns True if and only if the condition in this block is False.',
            
            'join': 'An operator which merges two strings into one string.',
            'join-easy': 'An operator which merges two strings into one string.',
            
            'letter-number': 'A value representing the letter at a given index position of a string.',
            'letter-number-easy': 'A value representing the letter at a given index position of a string.',
            
            'string-length': 'A value representing how many letters are in a given string.',
            'string-length-easy': 'A value representing how many letters are in a given string.',
            
            'contains': 'A boolean which returns True if and only if a given substring is within a string.',
            'contains-easy': 'A boolean which returns True if and only if a given substring is within a string.',
            
            'round': 'A number which is returned from rounding a specified input.',
            'round-easy': 'A number which is returned from rounding a specified input.',
            
            'math-function': 'An operator which applies the specified math function to the input.',
            'math-function-easy': 'An operator which applies the specified math function to the input.',
            
            'pick-random': 'A number which returns a random number between the specified values. Returned values are at least one unit apart from each other.',
            'pick-random-easy': 'A number which returns a random number between the specified values. Returned values are at least one unit apart from each other.',
            
            'all-sprites': 'An option which allows all sprites to read and write from this variable.',
            'all-sprites-easy': 'An option which allows all sprites to read and write from this variable.',
            
            'this-sprite': 'An option which allows only the current sprite to read and write from this variable. This is useful for clones.',
            'this-sprite-easy': 'An option which allows only the current sprite to read and write from this variable. This is useful for clones.',
            
            'show-variable': 'Shows the value of a given variable on the program screen.',
            'show-variable-easy': 'Shows the value of a given variable on the program screen.',
            
            'hide-variable': 'Hides the value of a given variable on the program screen.',
            'hide-variable-easy': 'Hides the value of a given variable on the program screen.',
            
            'show-list': 'Shows the items inside of a given list on the program screen.',
            'show-list-easy': 'Shows the items inside of a given list on the program screen.',
            
            'hide-list': 'Hides the items inside of a given list on the program screen.',
            'hide-list-easy': 'Hides the items inside of a given list on the program screen.',
            
            'set-variable': 'Overwrites the stored value of a variable to a given value.',
            'set-variable-easy': 'Overwrites the stored value of a variable to a given value.',
            
            'change-variable': 'Changes the stored value of a variable by a given value.',
            'change-variable-easy': 'Changes the stored value of a variable by a given value.',
            
            'variable': 'A value that is stored by the program.',
            'variable-easy': 'A value that is stored by the program.',
            
            'list': 'A collection of values that are stored by the program.',
            'list-easy': 'A collection of values that are stored by the program.',
            
            'delete-all': 'Deletes all items within a list. This is useful for initializing a list.',
            'delete-all-easy': 'Deletes all items within a list. This is useful for initializing a list.',
            
            'index': 'A value representing the item that is at the given position of a list.',
            'index-easy': 'A value representing the item that is at the given position of a list.',
            
            'index-of-item': 'A value representing the index of the specified item in a list.',
            'index-of-item-easy': 'A value representing the index of the specified item in a list.',
            
            'length': 'A value representing the number of items in a list.',
            'length-easy': 'A value representing the number of items in a list.',
            
            'list-contains-item': 'A boolean representing whether a given item is in the list.',
            'list-contains-item-easy': 'A boolean representing whether a given item is in the list.',
            
            'add-to-list': 'Adds the specified item to the end of the list.',
            'add-to-list-easy': 'Adds the specified item to the end of the list.',
            
            'delete-from-list': 'Removes the specified item at the specified index position of the list.',
            'delete-from-list-easy': 'Removes the specified item at the specified index position of the list.',
            
            'add-at-index': 'Adds the specified item at the specified index postiion of the list.',
            'add-at-index-easy': 'Adds the specified item at the specified index postiion of the list.',
            
            'replace-item': 'Replaces the item at the specified index position of the list with the given value.',
            'replace-item-easy': 'Replaces the item at the specified index position of the list with the given value.',
            
            'add-input-text': 'Allows a block to accept text or a number as input.',
            'add-input-text-easy': 'Allows a block to accept text or a number as input.',
            
            'add-input-boolean': 'Allows a block to accept a boolean as input.',
            'add-input-boolean-easy': 'Allows a block to accept a boolean as input.',
            
            'add-input-label': 'Description of what the block does.',
            'add-input-label-easy': 'Description of what the block does.',
            
            'screen-refresh': 'Allows the block to run as fast as the computer can process it.',
            'screen-refresh-easy': 'Allows the block to run as fast as the computer can process it.',
        },
	};
};

function getAssetPaths() {
    let assetPathsArray = [
        "/assets/add-at-index.png",
        "/assets/add-to-list.png",
        "/assets/add.png",
        "/assets/and.png",
        "/assets/answer.png",
        "/assets/ask.png",
        "/assets/backdrop-number-of-stage.png",
        "/assets/backdrop-number.png",
        "/assets/broadcast-message-and-wait.png",
        "/assets/broadcast-message.png",
        "/assets/change-effect.png",
        "/assets/change-layer.png",
        "/assets/change-pitch-effect.png",
        "/assets/change-size.png",
        "/assets/change-sound-effect.png",
        "/assets/change-variable.png",
        "/assets/change-volume.png",
        "/assets/change-x.png",
        "/assets/change-y.png",
        "/assets/clear-looks-effects.png",
        "/assets/clear-sound-effects.png",
        "/assets/contains.png",
        "/assets/costume-number.png",
        "/assets/create-clone.png",
        "/assets/current-date.png",
        "/assets/date-since-2000.png",
        "/assets/delete-all.png",
        "/assets/delete-clone.png",
        "/assets/delete-from-list.png",
        "/assets/direction.png",
        "/assets/distance-to-sprite.png",
        "/assets/divide.png",
        "/assets/edge-bounce.png",
        "/assets/equal-to.png",
        "/assets/forever.png",
        "/assets/glide-to-position.png",
        "/assets/glide-to-sprite.png",
        "/assets/go-to-position.png",
        "/assets/go-to-sprite.png",
        "/assets/greater-than.png",
        "/assets/hide-list.png",
        "/assets/hide-variable.png",
        "/assets/hide.png",
        "/assets/if-then-else.png",
        "/assets/if-then.png",
        "/assets/index-of-item.png",
        "/assets/index.png",
        "/assets/join.png",
        "/assets/key-pressed.png",
        "/assets/length.png",
        "/assets/less-than.png",
        "/assets/letter-number.png",
        "/assets/list-contains-item.png",
        "/assets/loudness.png",
        "/assets/make-variable.png",
        "/assets/math-function.png",
        "/assets/modulo.png",
        "/assets/mouse-down.png",
        "/assets/mouse-x.png",
        "/assets/mouse-y.png",
        "/assets/move-steps.png",
        "/assets/multiply.png",
        "/assets/next-backdrop.png",
        "/assets/next-costume.png",
        "/assets/not.png",
        "/assets/on-backdrop-switch.png",
        "/assets/on-click-flag.png",
        "/assets/on-click-sprite.png",
        "/assets/on-key-press.png",
        "/assets/on-state-change.png",
        "/assets/or.png",
        "/assets/pick-random.png",
        "/assets/play-sound.png",
        "/assets/point-in-direction.png",
        "/assets/point-towards-sprite.png",
        "/assets/receive-broadcast.png",
        "/assets/repeat-until.png",
        "/assets/repeat.png",
        "/assets/replace-item.png",
        "/assets/reset-timer.png",
        "/assets/round.png",
        "/assets/say-for-duration.png",
        "/assets/say.png",
        "/assets/set-backdrop.png",
        "/assets/set-costume.png",
        "/assets/set-drag-mode.png",
        "/assets/set-effect.png",
        "/assets/set-layer.png",
        "/assets/set-pitch-effect.png",
        "/assets/set-rotation-style.png",
        "/assets/set-size.png",
        "/assets/set-sound-effect.png",
        "/assets/set-variable.png",
        "/assets/set-volume.png",
        "/assets/set-x.png",
        "/assets/set-y.png",
        "/assets/show-list.png",
        "/assets/show-variable.png",
        "/assets/show.png",
        "/assets/size.png",
        "/assets/start-as-clone.png",
        "/assets/start-sound.png",
        "/assets/stop-sounds.png",
        "/assets/stop.png",
        "/assets/string-length.png",
        "/assets/subtract.png",
        "/assets/think-for-duration.png",
        "/assets/think.png",
        "/assets/timer.png",
        "/assets/touching-color.png",
        "/assets/touching-colors.png",
        "/assets/touching-sprite.png",
        "/assets/turn-left.png",
        "/assets/turn-right.png",
        "/assets/username.png",
        "/assets/volume.png",
        "/assets/wait-until.png",
        "/assets/wait.png",
        "/assets/x-position.png",
        "/assets/y-position.png"
    ];
    let assetPaths = {};
    for (const assetPath of Object.values(assetPathsArray)) {
        assetPaths[assetPath.match(/([^/.]+)(?:\.?[^/.])*$/)[1]] = assetPath.replaceAll("\\\\", "/");
    }
    return assetPaths;
}