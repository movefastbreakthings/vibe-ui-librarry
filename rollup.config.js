import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    // Main ESM build
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: false,
            },
        ],
        plugins: [
            resolve(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                declarationDir: undefined,
            }),
        ],
        external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@material-tailwind/react',
            /^react\//,
            /^@material-tailwind\//,
        ],
    },
    // TypeScript declarations
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [
            'react',
            'react-dom',
            '@material-tailwind/react',
            /^@material-tailwind\//,
        ],
    },
];
