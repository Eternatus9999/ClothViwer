import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#eb2f06',
    isLogoTexture: false,
    isFullTexture: false,
    item: './shirt_baked.glb',
    logoDecal: './Republic.png',
    fulDecal: './Republic.png'
});

export default state;