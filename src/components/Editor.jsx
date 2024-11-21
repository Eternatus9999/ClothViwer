import React from 'react';
import { Tab } from '../components';
import { DecalEditetabs } from '../config/constants';

import state from '../store';

const Editor = () => {


    const Edit = (direction) => {
        switch (direction) {
            case 'left':
                state.positionX -= 0.01;
                break;
            case 'right':
                state.positionX += 0.01;
                break;
            case 'up':
                state.positionY += 0.01;
                break;
            case 'down':
                state.positionY -= 0.01;
                break;
            case 'add':
                state.positionZ = 0.1;
                state.scale += 0.03;
                break;
            case 'minus':
                state.positionZ = 0.08;
                state.scale -= 0.03;
                break;
            case 'RotateRight':
                state.rotation -= 0.1;
                break;
            case 'RotateLeft':
                state.rotation += 0.1;
                break;
            default:
                state.positionX = 0;
                state.positionY = 0.04;
                state.positionZ = 0.15;
                state.scale = 0.15;
                state.rotation = 0;
                break;
        }
    }
    return (
        <div className='flex items-center min-h-screen'>
            <div className='editor-container grid grid-cols-3 gap-4 w-40 mr-10 p-2'>
                {
                    DecalEditetabs.map((tab) => (
                        <div>
                            <Tab
                                key={tab.name}
                                tab={tab}
                                handleClick={() => Edit(tab.name)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Editor