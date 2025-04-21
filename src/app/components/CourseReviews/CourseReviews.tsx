import Container from "@/app/shared/Container/Container";
import CourseStats from "../CourseStats/CourseStats";

const CourseReviews = () => {
  return (
    <div className="bg-[#6B21A8] py-16 text-white mt-20 relative">
      <Container>
        <div id="reviews" className="max-w-3xl mx-auto md:pt-48 pt-96">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center mb-10">
            কোর্স নিয়ে শিক্ষার্থীদের মতামত
          </h2>

          {/* Main review video */}
          <div className="w-full h-full mb-5">
            <iframe
              className="w-full h-60 md:h-[400px] rounded-md"
              src="https://www.youtube.com/embed/Hhi_W4NbjDY"
              title="Student Review"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Additional review videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            <div className="w-full h-full">
              <iframe
                className="w-full h-60 rounded-md"
                src="https://www.youtube.com/embed/YJCLej4So28?si=pwDvFDQLW5d6ZkAf"
                title="Student Review 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full h-full">
              <iframe
                className="w-full h-60 rounded-md"
                src="https://www.youtube.com/embed/iWgUXArA9F8?si=MdpC_QdBlFbF5aDJ"
                title="Student Review 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 w-full">
        <CourseStats />
      </div>
    </div>
  );
};

export default CourseReviews;
