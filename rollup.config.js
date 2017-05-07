import ts from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/index.tsx',
    format: 'iife',
    plugins: [
        ts(),
        nodeResolve({
            browser: true,
            extensions: [".js", ".json"],
            jsnext: true,
            main: true,
            module: true
        }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            namedExports: {
                './node_modules/react/react.js': ['createElement', 'Component'],
                './node_modules/react-dom/index.js': ['render']
            }
        })
    ],
    dest: 'dist/bundle.js'
};
