
import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#eb2f06',
    isLogoTexture: false,
    isFullTexture: false,
    item: './shirt_baked.glb',
    logoDecal: './Republic.png',
    fulDecal: './Republic.png',
    positionX: 0, 
    positionY:0.04, 
    positionZ:0.15,
    scale:0.15,
    rotation:0
});

export default state;