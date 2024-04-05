import React from 'react'
import DoctorCard from '../Components/DoctorCard'
import Select from "react-dropdown-select";
import ChatBot from '../Components/ChatBot';

const options = [
    {
      id: 1,
      name: 'Filter 1'
    },
    {
      id: 2,
      name: 'Filter 2'
    },
    {
        id: 3,
        name: 'Filter 3'
    },
    {
        id: 4,
        name: 'Filter 4'
    },
    {
        id: 5,
        name: 'Filter 5'
    }
  ];
  

const Homepage = () => {
  return (
    <div className='h-[80vh] items-center'>
      <div className='flex flex-col md:flex-col lg:flex-row h-full gap-4'>
        <div className='basis-[60%] relative flex flex-col items-center'>
            <input aria-label='Search' placeholder='Search...' className='p-4 mx-auto shadow-lg rounded-full w-[36rem]'></input>
            <div className='flex flex-row p-8 gap-8'>
                <DoctorCard/>
                <DoctorCard/>
            </div>
        </div>
        <div className='basis-[35%] bg-[#253239] rounded-xl p-5'>
            <div className=' m-4'>
                <div className='font-dosis text-white text-xl text-center m-1'>Filters</div>
                <Select
                options={options}
                labelField="name"
                valueField="id"
                onChange={() => {}}
                placeholder="Select a Filter"
                className='bg-[#E1DFEA] outline-none focus:outline-none w-full'
                />
            </div>
            <div className='m-4'>
                <input className='p-5 h-[32rem] w-full mx-auto text-center' placeholder='Enter your own query here...'>
                </input>
            </div>
            <div className='m-4'>
                <button className='w-full text-center p-5 bg-[#6495ED]'>
                    Submit
                </button>
            </div>
        </div>
      </div>
      <ChatBot/>
    </div>
  )
}

export default Homepage
