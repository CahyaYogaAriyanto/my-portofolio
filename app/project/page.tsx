"use client";
import { motion } from 'framer-motion';
import Caption from '../components/caption/Caption';
import ExampleProject from '../components/exampleProject/ExampleProject';

export default function Project() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className=''>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-7'>
        <Caption
        icon='done'
        color='green'
        text='Project Completed'
        values='total_project'
        style='text-3xl'
        />
        <Caption 
        icon='progres'
        color='blue'
        text='Project On Going'
        values='on_progres'
        style='text-3xl'
        />
      </div>
      {/* <p className='flex text-white text-3xl mt-12 m-3 justify-center md:justify-start items-center'>Example Preview Project</p> */}
      <div className='flex justify-center items-center'>
        <ExampleProject/>
        
      </div>
    </motion.div>
    </>
  );
}
