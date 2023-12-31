import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    // using div to represent an object
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "30%"],
    }}
    transition={{
      duration: 2.0,
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#B3D1FC] rounded-full h-[200px] w-[200px] mt-52 animate-ping z-10 dark:border-[#575789]"/>
        <div className="absolute border border-[#E0E0F9] rounded-full h-[300px] w-[300px] mt-52 z-10 dark:border-[#1A1A30]"/>
        <div className="absolute border border-[#E0E0F9] rounded-full h-[500px] w-[500px] mt-52 z-10 dark:border-[#1A1A30]"/>
        <div className="absolute border-2 border-[#8CBAFC] rounded-full h-[650px] w-[650px] mt-52 animate-pulse border-opacity-70 dark:border-[#5685C7]/60" />
        <div className="absolute border border-[#E0E0F9] rounded-full h-[800px] w-[800px] mt-52 dark:border-[#1A1A30]"/>
    </motion.div>
  )
}

export default BackgroundCircles