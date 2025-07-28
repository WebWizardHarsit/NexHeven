import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  src: string; // local or hosted video file (e.g. /videos/demo.mp4)
};

export default function VideoModal({ isOpen, onClose, src }: PropsType) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-4xl rounded bg-gray-900 p-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 text-3xl leading-none text-white sm:top-4 sm:right-4 sm:text-5xl"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>

        <video
          width="100%"
          height="500"
          controls
          autoPlay
          muted
          loop
          className="rounded"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>,
    document.body,
  );
}
