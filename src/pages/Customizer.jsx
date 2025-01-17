import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { snapshot, useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { logoShirt, stylishShirt } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes, MoveTab } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion'
import { ClothPicker, ColorPicker, CustomButton, FilePicker, Tab, Editor } from '../components';
const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: false,
    stylishShirt: false,
  });

  const generatetabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />
      case 'filepicker':
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case 'clothpicker':
        return <ClothPicker />
      default:
        return null;
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.FilterTab]) {
      handleActiveFilterTab(decalType.FilterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
    setActiveFilterTab((preveSate) => {
      return {
        ...preveSate,
        [tabName]: !preveSate[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}>
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map(tab => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generatetabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            key="edite"
            className='absolute top-0 right-0 z-10'
            {...slideAnimation('right')}>
              {/* <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                <Tab
                  tab={MoveTab}
                  key={MoveTab.name}
                  handleClick={() => { return (<Editor />) }} />
              </div>
            </div> */}<Editor />
          </motion.div>

          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 front-bold text-sm"></CustomButton>
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}>
            {FilterTabs.map(tab => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeEditorTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )

      }
    </AnimatePresence>
  )
}

export default Customizer