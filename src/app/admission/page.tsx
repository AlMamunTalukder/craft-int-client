import React from "react";
import AdmissionSubHeader from "../components/AdmissionSubHeader/AdmissionSubHeader";
import AdmissionHeader from "../components/AdmissionHeader/AdmissionHeader";
import AdmissionBanner from "../components/AdmissionBanner/AdmissionBanner";
import WhyCourse from "../components/WhyCourse/WhyCourse";
import CourseOutline from "../components/CourseOutline/CourseOutline";
import CourseStory from "../components/CourseStory/CourseStory";
import ClassDescription from "../components/ClassDescription/ClassDescription";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import ClassRoutine from "../components/Consultancy/Consultancy";
import CourseFeatures from "../components/CourseFeatures/CourseFeatures";
import ComparisonTable from "../components/ComparisonTable/ComparisonTable";
import Instructors from "../components/ITSkills/ITSkills";
import TrainerSection from "../components/TrainerSection/TrainerSection";
import CourseReviews from "../components/CourseReviews/CourseReviews";
import Testimonials from "../components/Testimonials/Testimonials";
import OurActivities from "../components/OurActivities/OurActivities";
import Admission from "../components/Admission/Admission";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../shared/Footer/Footer";

const page = () => {
  return (
    <div>
      <AdmissionSubHeader />
      <AdmissionHeader />
      <AdmissionBanner />
      <WhyCourse />
      <CourseOutline />
      <CourseStory />
      <ClassDescription />
      <PhotoGallery />
      <ClassRoutine />
      <CourseFeatures />
      <ComparisonTable />
      <Instructors />
      <TrainerSection />
      <CourseReviews />
      <Testimonials />
      <OurActivities />
      <Admission />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
