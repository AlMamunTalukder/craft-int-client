import Container from "@/app/shared/Container/Container";

const TrainerSection = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto mt-20 mb-60">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6B21A8] mb-10">
          প্রশিক্ষকদের কাজ
        </h2>

        {/* Main review video */}
        <div className="w-full h-full mb-5">
          <iframe
            className="w-full h-60 md:h-[400px] rounded-md"
            src="https://www.youtube.com/embed/Xqclr2dhrSE?si=Mcp-QuWtT3Tlu2gZ"
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
              src="https://www.youtube.com/embed/qLNxu8IFsiQ?si=i5YBVQtbCgKYNOTt"
              title="Student Review 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full h-full">
            <iframe
              className="w-full h-60 rounded-md"
              src="https://www.youtube.com/embed/1RxdQgm7-R4?si=ph1pbz4BPLtcgbzb"
              title="Student Review 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainerSection;
