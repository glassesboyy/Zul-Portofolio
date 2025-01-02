import { TextScrub } from "../ui/text-scrub";

export const Philo = () => {
  return (
    <div className="container  w-full px-10 py-4 flex items-center justify-center text-center">
      <div className="relative flex flex-col items-center justify-center w-full">
        <TextScrub className="text-8xl tracking-wide md:font-bold text-shadow-gradient-bright inset-0  z-0 text-center">
          CRAFTING INNOVATION,
        </TextScrub>
        <TextScrub className="text-8xl tracking-wide md:font-bold text-shadow-gradient-bright inset-0  z-30 text-center">
          ACHIEVING PERFECTION.
        </TextScrub>
      </div>
    </div>
  );
};
