interface HeroButtonProps {
  text?: string;
  fromColor?: string;
  toColor?: string;
  radius?: string;
}

export function PrimaryButton({
  text = "Get in Touch with Me",
  fromColor = "from-violet-500",
  toColor = "to-cyan-500",
  radius = "rounded-full",
}: HeroButtonProps) {
  return (
    <button
      className={`cursor-pointer group relative inline-flex h-12 items-center justify-center ${radius} px-6 font-medium text-white transition-colors`}
    >
      <span
        className={`absolute inset-0 ${radius} bg-gradient-to-r ${fromColor} ${toColor}`}
      ></span>
      <span
        className={`absolute inset-[1px] ${radius} bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer`}
      ></span>
      <span className="relative flex items-center">
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-2 w-4 h-4 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </button>
  );
}
