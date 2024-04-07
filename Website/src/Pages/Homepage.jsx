import DoctorCard from "../Components/DoctorCard";
import Select from "react-dropdown-select";
import ChatBot from "../Components/ChatBot";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import DoctorList from "../Components/DoctorList";
import DocLlm from "../Components/DocLlm";
const options = [
  {
    id: 1,
    name: "Filter 1",
  },
  {
    id: 2,
    name: "Filter 2",
  },
  {
    id: 3,
    name: "Filter 3",
  },
  {
    id: 4,
    name: "Filter 4",
  },
  {
    id: 5,
    name: "Filter 5",
  },
];

function SearchBar() {
  return (
    <div className="flex flex-col items-center">
      <input
        aria-label="Search"
        placeholder="Search..."
        className="p-4 mx-auto shadow-lg rounded-full w-[100%]"
      ></input>
    </div>
  );
}

function Filters({ speciality, setSpeciality, place, setPlace }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSpeciality("");
    setPlace("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2 w-full justify-evenly">
        <select
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          className="p-2 rounded-full bg-white shadow-lg outline-none"
          name="treatment"
          id="treatments"
        >
          <option value="">Treatments</option>
          <option data-department_id="2" value="cancer">
            Cancer
          </option>
          <option data-department_id="3" value="Cardiologist">
            Cardiology Treatment
          </option>
          <option data-department_id="29" value="Plastic Surgeon">
            Cosmetic Surgery
          </option>
          <option data-department_id="21" value="Cosmetologist">
            Cosmetology
          </option>
          <option data-department_id="23" value="dental-care">
            Dental Care
          </option>
          <option data-department_id="24" value="Dermatologist">
            Dermatology
          </option>
          <option data-department_id="32" value="Endocrinologist">
            Endocrinology
          </option>
          <option data-department_id="8" value="ENT Surgeon">
            ENT
          </option>
          <option data-department_id="18" value="Medical Gastroenterologist">
            Gastroenterology
          </option>
          <option data-department_id="26" value="GENDER REASSIGNMENT">
            Gender Reassignment Surgery
          </option>
          <option data-department_id="31" value="GENERAL MEDICINE">
            General Medicine
          </option>
          <option data-department_id="19" value="General Surgeon">
            General Surgery
          </option>
          <option data-department_id="16" value="Gynecologist">
            Gynecology
          </option>
          <option data-department_id="30" value="Hematologist">
            Hematology
          </option>
          <option data-department_id="22" value="IVF">
            IVF
          </option>
          <option data-department_id="20" value="Nephrologist">
            Nephrology
          </option>
          <option data-department_id="4" value="Neurologist">
            Neurology
          </option>
          <option data-department_id="11" value="Obesity and Bariatric Surgeon">
            Obesity
          </option>
          <option data-department_id="10" value="Ophthalmologist">
            Ophthalmology
          </option>
          <option data-department_id="1" value="Organ Transplant">
            Organ Transplant
          </option>
          <option data-department_id="6" value="Orthopedist">
            Orthopedic
          </option>
          <option data-department_id="28" value="Pediatric Cardiologist">
            Pediatric Cardiology
          </option>
          <option data-department_id="12" value="Pediatric Surgeon">
            Pediatrics
          </option>
          <option data-department_id="17" value="Rheumatologist">
            Rheumatology
          </option>
          <option data-department_id="5" value="Spine Surgeon">
            Spine Surgery
          </option>
          <option data-department_id="14" value="Oncologist">
            Surgical Oncology
          </option>
          <option data-department_id="7" value="Urologist">
            Urology
          </option>
        </select>
        <select
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="p-4 rounded-full bg-white shadow-lg outline-none"
          name="city"
          id="cities"
        >
          <option value="">Choose a City</option>
          <option data-country="india" data-city_id="135" value="Ahmedabad">
            Ahmedabad
          </option>
          <option data-country="india" data-city_id="433" value="amritsar">
            Amritsar
          </option>
          <option data-country="india" data-city_id="239" value="bengaluru">
            Bengaluru
          </option>
          <option data-country="india" data-city_id="642" value="bhubaneswar">
            Bhubaneswar
          </option>
          <option data-country="india" data-city_id="638" value="calicut">
            Calicut
          </option>
          <option data-country="india" data-city_id="124" value="centraldelhi">
            Central Delhi
          </option>
          <option data-country="india" data-city_id="493" value="chennai">
            Chennai
          </option>
          <option data-country="india" data-city_id="126" value="delhi">
            Delhi
          </option>
          <option data-country="india" data-city_id="163" value="faridabad">
            Faridabad
          </option>
          <option data-country="india" data-city_id="143" value="gandhinagar">
            Gandhinagar
          </option>
          <option data-country="india" data-city_id="560" value="ghaziabad">
            Ghaziabad
          </option>
          <option data-country="india" data-city_id="165" value="gurugram">
            Gurugram
          </option>
          <option data-country="india" data-city_id="619" value="howrah">
            Howrah
          </option>
          <option data-country="india" data-city_id="6" value="hyderabad">
            Hyderabad
          </option>
          <option data-country="india" data-city_id="474" value="jaipur">
            Jaipur
          </option>
          <option data-country="india" data-city_id="637" value="kochi">
            Kochi
          </option>
          <option data-country="india" data-city_id="622" value="kolkata">
            Kolkata
          </option>
          <option data-country="india" data-city_id="574" value="lucknow">
            Lucknow
          </option>
          <option data-country="india" data-city_id="582" value="mathura">
            Mathura
          </option>
          <option data-country="india" data-city_id="451" value="mohali">
            Mohali
          </option>
          <option data-country="india" data-city_id="348" value="mumbai">
            Mumbai
          </option>
          <option data-country="india" data-city_id="634" value="noida">
            Noida
          </option>
          <option data-country="india" data-city_id="356" value="pune">
            Pune
          </option>
          <option data-country="india" data-city_id="640" value="siliguri">
            Siliguri
          </option>
          <option data-country="india" data-city_id="16" value="srikakulam">
            Srikakulam
          </option>
          <option
            data-country="india"
            data-city_id="280"
            value="thiruvananthapuram"
          >
            Thiruvananthapuram
          </option>
          <option data-country="india" data-city_id="639" value="trivandrum">
            Trivandrum
          </option>
          <option data-country="india" data-city_id="159" value="vadodara">
            Vadodara
          </option>
          <option data-country="india" data-city_id="643" value="vijayawada">
            Vijayawada
          </option>
        </select>
        <button
          type="submit"
          className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

const Homepage = () => {
  const [docs, setDocs] = useState([]);
  const [speciality, setSpeciality] = useState("Cardiology");
  const [place, setPlace] = useState("Choose a City");
  const [doctorIDs, setDoctorIds] = useState([]);
  const [query, setQuery] = useState("");
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  useEffect(
    function () {
      async function getDoctors() {
        const res = await fetch(
          `http://localhost:8000/doctors?speciality=${speciality}`
        );
        const data = await res.json();
        
        const ids = data.map(doctor => doctor._id);
        
        console.log(ids);
        
        setDoctorIds(ids);
        
        setDocs(data);
      }
      getDoctors();
    },
    [speciality]
  );
  
  const handleSubmitQuery = () => {
    if (query.trim() !== "") {
      const updatedDoctorIds = {'_ids':doctorIDs,'query':query}
      setDoctorIds(updatedDoctorIds);
      setQuery("");
    }
      // const jsonContent = JSON.stringify({ ids: updatedDoctorIds });
      // console.log("Updated Doctor IDs:", updatedDoctorIds);
      // console.log("Doctor IDs JSON:", jsonContent);
    }
  

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  
  
  
  return (
    <>
      <Navbar />
      <div className="h-[80vh] items-center">
        <div className="flex flex-col md:flex-col lg:flex-row h-full gap-4">
          <div className="basis-[60%] relative flex flex-col items-center">
            <div className="flex flex-col gap-8 mb-5">
              <SearchBar />
              <Filters
                speciality={speciality}
                setSpeciality={setSpeciality}
                place={place}
                setPlace={setPlace}
              />
            </div>
            <DoctorList docs={docs} />
          </div>
          <div className="basis-[35%] bg-[#253239] rounded-xl p-5">
            <div className=" m-4">
              <div className="font-dosis text-white text-xl text-center m-1">
                Filters
              </div>
              <Select
                options={options}
                labelField="name"
                valueField="id"
                onChange={() => {}}
                placeholder="Select a Filter"
                className="bg-[#E1DFEA] outline-none focus:outline-none w-full"
              />
            </div>
            <div className="m-4">
              <input
              type="text"
                className="p-5 h-[14rem] w-full mx-auto text-center flex flex-col "
                placeholder="Is there a specific type of doctor you'd prefer not to see, based on your past experiences or personal preferences?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></input>
              <div className="h-[14rem] bg-slate-800 overflow-scroll">
                <DocLlm prompt={prompt} setPrompt={setPrompt} isLoading={isLoading} setIsLoading={setIsLoading} messages={messages} setMessages={setMessages} handleInputChange={handleInputChange} doctorJSON={doctorIDs}/>
              </div>
            </div>
            <div className="m-4">
              <button
                className="w-full text-center p-5 bg-[#6495ED]"
                onClick={handleSubmitQuery}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
    </>
  );
};

export default Homepage;
