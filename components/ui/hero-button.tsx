export function HeroButton() {
  return (
    <button className="cursor-pointer group relative inline-flex h-12 items-center justify-center rounded-full px-6 font-medium text-white transition-colors">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"></span>
      <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer"></span>
      <span className="relative flex items-center">
        Get in Touch with Me
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
