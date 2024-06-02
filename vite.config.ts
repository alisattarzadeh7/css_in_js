import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import wyw from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxImportSource: "@emotion/react",
        babel: {
            plugins: ["@emotion/babel-plugin"],
        },
    }), eslint(),
        wyw({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),],
})
