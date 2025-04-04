import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
	},
	paths: {
		base: process.argv.includes('dev') ? '' : '/Scratch-Guide'
	}
};

export default config;