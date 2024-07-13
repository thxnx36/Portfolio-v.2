export const motionSection = {
  variants: {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 20,
      opacity: 1,
    },
  },

  transition: {
    duration: 1.1,
    ease: 'easeInOut',
  },

  viewport: {
    // amount: 0.2,
    once: true,
  },

  initial: { opacity: 0 },
  whileInView: 'visible',
}

export const motionNav = {
  variants: {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: 0,
    },
  },

  transition: {
    ease: 'easeInOut',
    duration: 0.35,
  },

  animate: {
    hidden: 'hidden',
    visible: 'visible',
  },
}

export const motionProgrLine = {
  variants: {
    hidden: {
      width: '0%',
      opacity: 0,
    },
    visible: {
      width: '90%',
      opacity: 1,
    },
  },

  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },

  viewport: {
    amount: 0.2,
    once: false,
  },

  initial: 'hidden',
  whileInView: 'visible',
}
