export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const navItemAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const navAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const heroImageAnimation = {
  initial: {
    scale: 0,
    rotate: -360,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 200,
      duration: 1.5,
    },
  },
};

export const textContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const textAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const infiniteTextContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      repeat: Infinity,
      repeatType: "loop" as const, // Perbaikan di sini - menambahkan type assertion
    },
  },
};

export const infiniteTextAnimation = {
  initial: {
    y: 0,
    opacity: 1,
    color: "rgb(168, 85, 247)", // purple-500
  },
  animate: {
    y: [-2, 2, -2],
    opacity: [0.5, 1, 0.5],
    color: ["rgb(168, 85, 247)", "rgb(34, 211, 238)", "rgb(168, 85, 247)"], // purple-500 -> cyan-400 -> purple-500
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};
