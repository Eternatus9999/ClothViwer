import React from 'react';
import { useSnapshot } from 'valtio';

import CustomButton from './CustomButton';
import state from '../store';

const ClothPicker = () => {
  const snap = useSnapshot(state);
  const changeCloth = (cloth) => {
    state.positionX = 0;
    state.positionY = 0.04;
    state.positionZ = 0.15;
    state.scale = 0.15;
    state.rotation = 0;
    switch (cloth) {
      case 'polo':
        state.item = './polo.glb';
        break;
      case 'TshirtS':
        state.item = './shirt_baked.glb';
        break;
      case 'TshirtL':
        state.item = './shirt.glb';
        break;
      case 'Hoodie':
        state.item = './hoodie.glb';
        break;
      case 'Jacket':
        state.item = './jacket.glb';
        break;
      case 'Cap':
        state.positionX = 0;
        state.positionY = 0.06;
        state.positionZ = 0.15;
        state.item = './cap.glb';
        break;
      default:
        state.item = 'polo';
        break;
    }
  }
  return (
    <div className='filepicker-container overflow-auto'>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="Polo"
            handleClick={() => changeCloth('polo')}
            customStyles='txt-xs'
          />

        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="T-Shirt"
            handleClick={() => changeCloth('TshirtS')}
            customStyles='txt-xs'
          />

        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="Long sleeve"
            handleClick={() => changeCloth('TshirtL')}
            customStyles='txt-xs'
          />

        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="Hoodie"
            handleClick={() => changeCloth('Hoodie')}
            customStyles='txt-xs'
          />


        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="Jacket"
            handleClick={() => changeCloth("Jacket")}
            customStyles='txt-xs'
          />
        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4 flex flex-wrap gap-10'>
          <CustomButton
            type="filled"
            title="Cap"
            handleClick={() => changeCloth('Cap')}
            customStyles='txt-xs'
          />
        </div>
      </div>
    </div>
  )
}

export default ClothPicker