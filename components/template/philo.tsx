import { TextScrub } from "../ui/text-scrub";

export const Philo = () => {
  return (
    <div className="container px-10 py-4 flex items-center justify-center text-center">
      <div className="relative flex flex-col items-center justify-center w-full">
        <TextScrub className="text-8xl tracking-widest md:font-bold inset-0 text-stroke z-0 text-center">
          CRAFTING INNOVATION,
        </TextScrub>
        <TextScrub className="text-8xl tracking-widest md:font-bold inset-0 text-stroke z-30 text-center">
          ACHIEVING PERFECTION.
        </TextScrub>
      </div>
    </div>
  );
};
