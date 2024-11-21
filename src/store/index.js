
import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#eb2f06',
    isLogoTexture: false,
    isFullTexture: false,
    item: './shirt_baked.glb',
    logoDecal: './Republic.png',
    fulDecal: './Republic.png',
    position: [0, 0, 0],
    scale:1
});

export default state;