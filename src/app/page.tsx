import Banner from "./components/Banner/Banner";
import ClassDescription from "./components/ClassDescription/ClassDescription";
// import ComparisonTable from "./components/ComparisonTable/ComparisonTable";
import CourseFeatures from "./components/CourseFeatures/CourseFeatures";
// import CourseOutline from "./components/CourseOutline/CourseOutline";
// import CourseReviews from "./components/CourseReviews/CourseReviews";
import OurSpecialty from "./components/OurSpecialty/OurSpecialty";
import BusinessSkills from "./components/BusinessSkills/BusinessSkills";
import Instructors from "./components/ITSkills/ITSkills";
import OurActivities from "./components/OurActivities/OurActivities";
// import Contact from "./components/Contact/Contact";
// import Testimonials from "./components/Testimonials/Testimonials";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
// import TrainerSection from "./components/TrainerSection/TrainerSection";
// import WhyCourse from "./components/WhyCourse/WhyCourse";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import SubHeader from "./shared/SubHeader/SubHeader";
import Map from "./components/Map/Map";
import Consultancy from "./components/Consultancy/Consultancy";
import SoftHardSkill from "./components/SoftHardSkill/SoftHardSkill";
import DepartmentSection from "./components/DepartmentSection/DepartmentSection";


export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Banner />
      <DepartmentSection/>
      <CourseFeatures />
      {/* <WhyCourse /> */}
      {/* <CourseOutline /> */}
      <OurSpecialty />
      <ClassDescription />
      <SoftHardSkill />
      <Instructors />
      <BusinessSkills />
      <Consultancy/>
      <PhotoGallery />
      <OurActivities />
      <Map />
      {/* <ComparisonTable />
      <TrainerSection />
      <CourseReviews />
      <Testimonials />
      <Contact />    */}
      <Footer />
    </div>
  );
}
