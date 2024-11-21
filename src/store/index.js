import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#be2edd',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './file.png',
    fulDecal: './file.png'
});

export default state;