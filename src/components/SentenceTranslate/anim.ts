const transition = {duration: 0.7, ease: [0.76, 0, 0.24, 1]}

export const translateAnimation = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: 0,
    transition: {...transition, delay: i}
  }),
}
