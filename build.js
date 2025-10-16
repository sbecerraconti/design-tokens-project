import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from 'sd-themes-loader';

register(StyleDictionary, {
  withSDBuiltins: false,
});

const loader = ThemesLoader(StyleDictionary);

async function run() {
  console.log('hello world');
}

run();
