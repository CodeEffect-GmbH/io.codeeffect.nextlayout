import { SourceProps } from './components.model';

export interface HeroVideo extends SourceProps {
  loop?: boolean;
}

const HeroVideo = ({ src, loop = true }: HeroVideo) => {
  return (
    <div className="z-0">
      <video
        className="absolute h-full w-full left-0 top-0 object-cover"
        autoPlay
        playsInline
        muted
        loop={loop}
        controls={false}>
        <source
          src={src}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeroVideo;
