import { Calendar, Clock, X } from 'lucide-react';
import { NewsItem } from './IVideo';

interface VideoModalProps {
  newsData: NewsItem[];
  setIsVideoModalOpen: (isOpen: boolean) => void;
  currentCarouselIndex: number;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  newsData,
  setIsVideoModalOpen,
  currentCarouselIndex,
}) => {
  const currentVideo = newsData[currentCarouselIndex];

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={() => setIsVideoModalOpen(false)}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-4xl pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="absolute -top-14 right-0 flex items-center gap-3">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 shadow-lg"
            >
              <X size={20} />
              <span className="font-medium">Close</span>
            </button>
          </div>

          {/* Video Container with Glass Effect */}
          <div className="relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={currentVideo?.videoUrl}
                title={currentVideo?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Video Info Footer */}
            <div className="bg-[#70B2B2] backdrop-blur-md p-4 sm:p-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1 text-white/90 text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {currentVideo?.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                    {currentVideo?.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">{currentVideo?.description}</p>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>{currentVideo?.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-xs text-center">
            Video {currentCarouselIndex + 1} of {newsData.length}
          </div>
        </div>
      </div>
    </>
  );
};
