
import DoctorCard from '../Components/DoctorCard'
import Select from "react-dropdown-select";
import ChatBot from '../Components/ChatBot';
import Navbar from '../Components/Navbar';

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

function handleSubmit(e) {
  e.prevent.default()
}

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='h-[80vh] items-center'>
      <div className='flex flex-col md:flex-col lg:flex-row h-full gap-4'>
        <div className='basis-[60%] relative flex flex-col items-center'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col items-center'>
                <input aria-label='Search' placeholder='Search...' className='p-4 mx-auto shadow-lg rounded-full w-[100%]'></input>
              </div>
              <div className='flex flex-row gap-2 w-full justify-evenly'>
              <select className="p-2 rounded-full bg-white shadow-lg outline-none" name="treatment" id="treatments">
                <option value="">Treatments</option>
                <option data-department_id="2" value="cancer">Cancer</option>
                <option data-department_id="3" value="cardiology">Cardiology Treatment</option>
                <option data-department_id="29" value="cosmetic-surgery">Cosmetic Surgery</option>
                <option data-department_id="21" value="cosmetology">Cosmetology</option>
                <option data-department_id="23" value="dental-care">Dental Care</option>
                <option data-department_id="24" value="dermatology">Dermatology</option>
                <option data-department_id="32" value="endocrinology">Endocrinology</option>
                <option data-department_id="8" value="e-n-t-surgery">ENT</option>
                <option data-department_id="18" value="gastroenterology">Gastroenterology</option>
                <option data-department_id="26" value="gender-reassignment-surgery">Gender Reassignment Surgery</option>
                <option data-department_id="31" value="general-medicine">General Medicine</option>
                <option data-department_id="19" value="general-surgery">General Surgery</option>
                <option data-department_id="16" value="gynecology">Gynecology</option>
                <option data-department_id="30" value="hematology">Hematology</option>
                <option data-department_id="22" value="ivf">IVF</option>
                <option data-department_id="20" value="nephrology">Nephrology</option>
                <option data-department_id="4" value="neurology">Neurology</option>
                <option data-department_id="11" value="obesity-surgery">Obesity</option>
                <option data-department_id="10" value="ophthalmology">Ophthalmology</option>
                <option data-department_id="1" value="organ-transplant">Organ Transplant</option>
                <option data-department_id="6" value="orthopedic">Orthopedic</option>
                <option data-department_id="28" value="pediatric-cardiologist">Pediatric Cardiology</option>
                <option data-department_id="12" value="pediatric-surgery">Pediatrics</option>
                <option data-department_id="17" value="rheumatology">Rheumatology</option>
                <option data-department_id="5" value="spine">Spine Surgery</option>
                <option data-department_id="14" value="surgical-oncology">Surgical Oncology</option>
                <option data-department_id="7" value="urology">Urology</option>
              </select>
              <select className="p-4 rounded-full bg-white shadow-lg outline-none" name="city" id="cities">
                <option value="">Choose a City</option>
                <option data-country="india" data-city_id="135" value="ahmedabad">Ahmedabad</option>
                <option data-country="india" data-city_id="433" value="amritsar">Amritsar</option>
                <option data-country="india" data-city_id="239" value="bengaluru">Bengaluru</option>
                <option data-country="india" data-city_id="642" value="bhubaneswar">Bhubaneswar</option>
                <option data-country="india" data-city_id="638" value="calicut">Calicut</option>
                <option data-country="india" data-city_id="124" value="centraldelhi">Central Delhi</option>
                <option data-country="india" data-city_id="493" value="chennai">Chennai</option>
                <option data-country="india" data-city_id="126" value="delhi">Delhi</option>
                <option data-country="india" data-city_id="163" value="faridabad">Faridabad</option>
                <option data-country="india" data-city_id="143" value="gandhinagar">Gandhinagar</option>
                <option data-country="india" data-city_id="560" value="ghaziabad">Ghaziabad</option>
                <option data-country="india" data-city_id="165" value="gurugram">Gurugram</option>
                <option data-country="india" data-city_id="619" value="howrah">Howrah</option>
                <option data-country="india" data-city_id="6" value="hyderabad">Hyderabad</option>
                <option data-country="india" data-city_id="474" value="jaipur">Jaipur</option>
                <option data-country="india" data-city_id="637" value="kochi">Kochi</option>
                <option data-country="india" data-city_id="622" value="kolkata">Kolkata</option>
                <option data-country="india" data-city_id="574" value="lucknow">Lucknow</option>
                <option data-country="india" data-city_id="582" value="mathura">Mathura</option>
                <option data-country="india" data-city_id="451" value="mohali">Mohali</option>
                <option data-country="india" data-city_id="348" value="mumbai">Mumbai</option>
                <option data-country="india" data-city_id="634" value="noida">Noida</option>
                <option data-country="india" data-city_id="356" value="pune">Pune</option>
                <option data-country="india" data-city_id="640" value="siliguri">Siliguri</option>
                <option data-country="india" data-city_id="16" value="srikakulam">Srikakulam</option>
                <option data-country="india" data-city_id="280" value="thiruvananthapuram">Thiruvananthapuram</option>
                <option data-country="india" data-city_id="639" value="trivandrum">Trivandrum</option>
                <option data-country="india" data-city_id="159" value="vadodara">Vadodara</option>
                <option data-country="india" data-city_id="643" value="vijayawada">Vijayawada</option>
              </select>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row p-8 gap-8'>
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
                <input className='p-5 h-[28rem] w-full mx-auto text-center' placeholder='Enter your own query here...'>
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
    </>
  )
}

export default Homepage
