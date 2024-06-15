export const textGradient = {
  initial: {
    width: 0
  },
  enter: {
      width: "100%",
      transition: {duration: 1, delay: 0.5}
  },
}

export const topText = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100%",
    transition: {duration: 0.2}
  },
}

export const slideUp = {
  initial: {
      height: "100%"
  },
  exit: (i: number) => ({
      height: 0,
      transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 + (i * 0.05)}
  })
}