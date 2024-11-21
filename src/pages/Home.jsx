import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation, 
  headContentAnimation,
  headTextAnimation,
  slideAnimation

} from '../config/motion'
const Home = () => {

  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {
        snap.intro && (
          <motion.section className='home'{...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
              <img
               src='./Republic.png' 
               alt='Logo' 
               className='w-25 h-25 object-contain'></img>
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                    Republic<br className='xl:bloc hidden'/> Clothing Shop.
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation} className='flex flex-col gap-5'> 
                <p className='max-w-md fon-normal text-gray-600 text-base'>
                  A unique and exclusive cloths with 3D customization tool. <strong>Make the imagination</strong>{" "}come true
                </p>
                <CustomButton
                    type="filled"
                    title="Customize It"
                    handleClick={()=> state.intro = false}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )
      }
    </AnimatePresence>
  )
}

export default Home