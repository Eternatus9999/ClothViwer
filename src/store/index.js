import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#eb2f06',
    isLogoTexture: false,
    isFullTexture: false,
    item: './shirt_baked.glb',
    logoDecal: './file.png',
    fulDecal: './file.png'
});

export default state;