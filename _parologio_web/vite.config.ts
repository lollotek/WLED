import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	server:{
		proxy: {
			// string shorthand
			'/json': 'http://192.168.1.5/',
			// WS is into socketUrl declaration
		}
	},
  	plugins: [preact(), viteSingleFile(),viteCompression()],
	build: {
		target: "esnext",
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		cssCodeSplit: false,
		brotliSize: false,
		rollupOptions: {
			inlineDynamicImports: true,
			output: {
				manualChunks: () => "everything.js",
			},
		},
	},
})
