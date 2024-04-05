import React from 'react'
import DoctorCard from '../Components/DoctorCard'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];

const Homepage = () => {
  return (
    <div className='h-[80vh]'>
      <div className='flex flex-col md:flex-col lg:flex-row h-full gap-4'>
        <div className='basis-[60%] relative flex flex-col items-center'>
            <input aria-label='Search' placeholder='Search...' className='p-4 mx-auto shadow-lg rounded-full w-[36rem]'></input>
            <div className='flex flex-row p-8 gap-8'>
                <DoctorCard/>
                <DoctorCard/>
            </div>
        </div>
        <div className='basis-[35%] bg-[#253239] rounded-xl px-5 py-2 mx-auto'>
            <div>
                const defaultOption = options[0];
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
