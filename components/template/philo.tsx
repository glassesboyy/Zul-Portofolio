import { TextScrub } from "../ui/text-scrub";

export const Philo = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4">
        <div className="relative w-full text-center">
          <TextScrub className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-normal font-bold md:font-bold text-shadow-gradient-bright">
            CRAFTING INNOVATION,
          </TextScrub>
          <TextScrub className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-normal font-bold md:font-bold text-shadow-gradient-bright">
            ACHIEVING PERFECTION.
          </TextScrub>
        </div>
      </div>
    </div>
  );
};
