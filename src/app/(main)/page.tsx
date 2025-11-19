import Banner from "../components/Banner/Banner";
import BusinessSkills from "../components/BusinessSkills/BusinessSkills";
import ClassDescription from "../components/ClassDescription/ClassDescription";
// import Consultancy from "../components/Consultancy/Consultancy";
import CourseFeatures from "../components/CourseFeatures/CourseFeatures";
import DepartmentSection from "../components/DepartmentSection/DepartmentSection";
import ITSkills from "../components/ITSkills/ITSkills";
// import OurActivities from "../components/OurActivities/OurActivities";
import OurSpecialty from "../components/OurSpecialty/OurSpecialty";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import SoftHardSkill from "../components/SoftHardSkill/SoftHardSkill";

export default function Home() {
  return (
    <div>      
      <Banner />
      <DepartmentSection/>
      <CourseFeatures />
      <OurSpecialty />
      <ClassDescription />
      <ITSkills/>
      <SoftHardSkill />
      <BusinessSkills />
      <PhotoGallery />
    </div>
  );
}
