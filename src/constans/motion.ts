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
    ease: 'easeOut',
    duration: 0.8,
  },

  viewport: {
    amount: 0.2,
    once: false,
  },

  initial: 'hidden',
  whileInView: 'visible',
}
