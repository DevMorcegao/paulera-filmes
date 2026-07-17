/**
 * -----------------------------------------------------------------------------
 * Motion Tokens
 * -----------------------------------------------------------------------------
 *
 * Source of Truth for every animation in the project.
 *
 * Inspired by:
 * - Motion Bible
 * - Design Tokens
 * - UI Principles
 *
 * Never hardcode animation values inside components.
 *
 * -----------------------------------------------------------------------------
 */

import { cubicBezier } from "motion"

export const easing = {
  standard: cubicBezier(0.4, 0, 0.2, 1),

  soft: cubicBezier(0.22, 0.61, 0.36, 1),

  dramatic: cubicBezier(0.16, 1, 0.3, 1),

  cinematic: cubicBezier(0.19, 1, 0.22, 1)
}

export const duration = {
  instant: 0.12,

  fast: 0.18,

  normal: 0.32,

  slow: 0.65,

  cinematic: 1.2
}

export const transition = {
  instant: {
    duration: duration.instant,
    ease: easing.standard
  },

  fast: {
    duration: duration.fast,
    ease: easing.standard
  },

  normal: {
    duration: duration.normal,
    ease: easing.soft
  },

  slow: {
    duration: duration.slow,
    ease: easing.soft
  },

  cinematic: {
    duration: duration.cinematic,
    ease: easing.cinematic
  }
}

export const fade = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: transition.normal
  },

  exit: {
    opacity: 0,
    transition: transition.fast
  }
}

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 40
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transition.normal
  }
}

export const revealDown = {
  hidden: {
    opacity: 0,
    y: -40
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transition.normal
  }
}

export const revealLeft = {
  hidden: {
    opacity: 0,
    x: -48
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transition.normal
  }
}

export const revealRight = {
  hidden: {
    opacity: 0,
    x: 48
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: transition.normal
  }
}

export const heroReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.cinematic
  }
}

export const cardHover = {
  rest: {
    y: 0,
    scale: 1
  },

  hover: {
    y: -6,
    scale: 1.015,
    transition: transition.fast
  }
}

export const imageHover = {
  rest: {
    scale: 1
  },

  hover: {
    scale: 1.04,
    transition: transition.slow
  }
}

export const buttonHover = {
  rest: {
    scale: 1
  },

  hover: {
    scale: 1.03,
    transition: transition.fast
  },

  tap: {
    scale: 0.98
  }
}

export const treeGrowth = {
  hidden: {
    scaleY: 0,
    opacity: 0
  },

  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      ...transition.cinematic
    }
  }
}

export const leafFloating = {
  animate: {
    y: [-4, 4, -4],

    rotate: [-2, 2, -2],

    transition: {
      repeat: Infinity,

      duration: 6,

      ease: "easeInOut"
    }
  }
}

export const ambientFloating = {
  animate: {
    y: [-8, 8, -8],

    transition: {
      repeat: Infinity,

      duration: 10,

      ease: "easeInOut"
    }
  }
}

export const sectionReveal = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,

      delayChildren: 0.12
    }
  }
}

export const pageTransition = {
  initial: {
    opacity: 0
  },

  animate: {
    opacity: 1,
    transition: transition.normal
  },

  exit: {
    opacity: 0,
    transition: transition.fast
  }
}

export const cinematicTransition = {
  initial: {
    opacity: 0,
    scale: 0.985
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: transition.cinematic
  },

  exit: {
    opacity: 0,
    scale: 1.01
  }
}

export const reducedMotion = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1
  }
}

export const motionTokens = {
  easing,

  duration,

  transition,

  fade,

  revealUp,

  revealDown,

  revealLeft,

  revealRight,

  heroReveal,

  cardHover,

  imageHover,

  buttonHover,

  treeGrowth,

  leafFloating,

  ambientFloating,

  sectionReveal,

  pageTransition,

  cinematicTransition,

  reducedMotion
}

export default motionTokens