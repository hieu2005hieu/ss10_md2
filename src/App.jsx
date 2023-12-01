import { AiOutlineCompass } from "react-icons/ai"; 
import { AiOutlineCodepen } from "react-icons/ai"; 

import React from 'react'
import VdTaillwind from './pages/vidutaillwind/VdTaillwind'


export default function App() {
  return (
    <>
      <VdTaillwind />
      <AiOutlineCodepen className="text-9xl" /><AiOutlineCompass />
    </>
  );
}
