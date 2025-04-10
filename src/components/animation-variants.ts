// Animation variants
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1]
        }
    }),
    exit: (index: number) => ({
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

export const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.1 * index,
            ease: [0.22, 1, 0.36, 1]
        }
    }),
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};