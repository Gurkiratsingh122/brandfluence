// Color Palettes
export const colors = {
  primary: {
    cyan: "cyan-600",
    teal: "teal-500",
  },
  gradients: {
    primary: "from-cyan-600 to-teal-500",
    primaryVia: "from-cyan-600 via-teal-500 to-cyan-600",
    cyanBlue: "from-cyan-500 to-blue-500",
    orangePink: "from-orange-500 to-pink-500",
    purpleIndigo: "from-purple-500 to-indigo-500",
    tealGreen: "from-teal-500 to-green-500",
  },
  text: {
    primary: "text-slate-900",
    secondary: "text-slate-700",
    muted: "text-slate-600",
    light: "text-slate-400",
  },
  bg: {
    white: "bg-white",
    lightGray: "bg-slate-50",
    lightBlue: "bg-cyan-50",
    lightOrange: "bg-orange-50",
    lightPink: "bg-pink-50",
    darkSlate: "bg-slate-900",
  },
  borders: {
    light: "border-slate-100",
    cyan: "border-cyan-600",
  },
  shadows: {
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    cyan: "shadow-cyan-600/30",
  },
};

// Spacing
export const spacing = {
  container: "max-w-7xl",
  containerLg: "max-w-7xl",
  containerSmall: "max-w-4xl",
  px: "px-6",
  py: {
    section: "py-20",
    sectionLg: "py-32",
    card: "p-8",
    cardLg: "p-10",
  },
};

// Border Radius
export const borderRadius = {
  full: "rounded-full",
  lg: "rounded-3xl",
  xl: "rounded-[40px]",
  md: "rounded-2xl",
  sm: "rounded-lg",
};

// Typography
export const typography = {
  h1: "text-5xl md:text-7xl lg:text-8xl font-bold",
  h2: "text-4xl md:text-5xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  body: "text-base",
  bodyLg: "text-lg",
  bodySm: "text-sm",
};

// Transitions
export const transitions = {
  default: "transition-all",
  colors: "transition-colors",
  transform: "transition-transform",
  shadow: "transition-shadow",
  duration300: "duration-300",
};
