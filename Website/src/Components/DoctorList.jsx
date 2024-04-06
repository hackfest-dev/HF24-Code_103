import DoctorCard from "./DoctorCard";

const DoctorList = ({docs}) => {
  return (
    <div className="flex flex-wrap sm:flex-row p-8 gap-8 overflow-scroll">
      {docs?.map((doc)=><DoctorCard doc={doc}/>)}
    </div>
  );
};

export default DoctorList;
