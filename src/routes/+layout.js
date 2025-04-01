export function load({ params }) {
	return {
        blockTypes: ['Motion', 'Look', 'Sound', 'Event', 'Control', 'Sensing', 'Operator', 'Variable', 'Function'],
		blockColors: {
            'Motion':       ['rgba(76,151,255,0.95)' , 'rgba(153,195,255,1.0)'],
			'Look':        ['rgba(153,102,255,0.95)', 'rgba(204,178,255,1.0)'],
			'Sound':        ['rgba(207,99,207,0.95)' , 'rgba(207,161,207,1.0)'],
			'Event':       ['rgba(255,191,0,0.95)'  , 'rgba(255,210,76,1.0)' ],
			'Control':      ['rgba(255,171,25,0.95)' , 'rgba(255,199,102,1.0)'],
			'Sensing':      ['rgba(92,177,214,0.95)' , 'rgba(156,197,214,1.0)'],
			'Operator':    ['rgba(89,192,89,0.95)'  , 'rgba(145,191,145,1.0)'],
			'Variable':    ['rgba(255,140,26,0.95)' , 'rgba(255,178,102,1.0)'],
			'Function':    ['rgba(255,102,128,0.95)', 'rgba(255,178,191,1.0)']
        },
	};
};
export const prerender = true;