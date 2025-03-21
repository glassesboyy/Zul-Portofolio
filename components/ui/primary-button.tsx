interface HeroButtonProps {
  text?: string;
  fromColor?: string;
  toColor?: string;
  radius?: string;
  height?: string;
  padding?: string;
  font?: string;
  onClick?: () => void;
  link?: string;
}

export function PrimaryButton({
  text = "Get in Touch with Me",
  fromColor = "from-violet-500",
  toColor = "to-cyan-500",
  radius = "rounded-full",
  height = "h-12",
  padding = "px-6",
  font = "font-medium",
  onClick,
  link,
}: HeroButtonProps) {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (link) {
      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ButtonContent = () => (
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
  );

  const buttonClasses = `cursor-pointer group relative inline-flex ${height} items-center justify-center ${radius} ${padding} ${font} text-white transition-colors`;

  if (link) {
    return (
      <a href={link} onClick={handleLinkClick} className={buttonClasses}>
        <span
          className={`absolute inset-0 ${radius} bg-gradient-to-r ${fromColor} ${toColor}`}
        ></span>
        <span
          className={`absolute inset-[1px] ${radius} bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer`}
        ></span>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span
        className={`absolute inset-0 ${radius} bg-gradient-to-r ${fromColor} ${toColor}`}
      ></span>
      <span
        className={`absolute inset-[1px] ${radius} bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer`}
      ></span>
      <ButtonContent />
    </button>
  );
}
