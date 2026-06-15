import VideoGallery from "@/components/Videos/VideoGallery";
import Banner from "../../components/Banner/Banner";
import BusinessSkills from "../../components/BusinessSkills/BusinessSkills";
import ClassDescription from "../../components/ClassDescription/ClassDescription";
import CourseFeatures from "../../components/OurCurriculum/OurCurriculum";
import DepartmentSection from "../../components/DepartmentSection/DepartmentSection";
import ITSkills from "../../components/ITSkills/ITSkills";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import SoftHardSkill from "../../components/SoftHardSkill/SoftHardSkill";

export default function Home() {
  return (
    <div>
      <Banner />
      <DepartmentSection />
      <CourseFeatures />
      {/* <OurSpecialty /> */}
      <ClassDescription />
      <ITSkills />
      <SoftHardSkill />
      <BusinessSkills />
      <PhotoGallery />
      <VideoGallery />
    </div>
  );
}
