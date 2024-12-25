import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-[1] ">
          <div className="container py-10 lg:py-16">
            <div className="max-w-6xl text-center mx-auto">
              <div className="flex justify-center">
                <Avatar>
                  <AvatarImage src="/assets/avatar.jpg" alt="Zul" />
                  <AvatarFallback>ZP</AvatarFallback>
                </Avatar>
              </div>
              <div className="mt-1 max-w-6xl">
                <h1 className="scroll-m-20 text-5xl font-extrabold lg:text-8xl">
                  Zul Personal Website
                </h1>
              </div>
              <div className="mt-5 max-w-6xl">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  similique doloribus numquam cum id perspiciatis explicabo
                  voluptas tenetur. Ducimus illo blanditiis tenetur? Quasi iste
                  ex sint dolorem non inventore minima.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  className="mt-5 group overflow-hidden w-[40px] hover:w-[200px] inline-flex items-center gap-x-2 border border-violet-700 hover:border-cyan-500 text-sm p-1 rounded-full transition-all duration-500 hover:bg-cyan-900/30 shadow-sm shadow-white hover:shadow-lg hover:shadow-white"
                  href="#"
                >
                  <span className="absolute scale-0 transition-transform [transition-duration:100ms] group-hover:scale-100 group-hover:[transition-duration:1000ms] ms-3">
                    Get in Touch With Zul
                  </span>
                  <span className="ms-auto py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                    <svg
                      className="flex-shrink-0 w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
