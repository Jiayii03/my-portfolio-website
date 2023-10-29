import React from 'react'
import { motion } from "framer-motion";


type Props = {
}

function EducationCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 py-6 w-[360px] md:w-[500px] xl:w-[600px] snap-center bg-slate-300/30'>
        {/* two elements in here */}
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover'
        src="https://cdn.discordapp.com/attachments/1165641776011427900/1168210526233444362/UniversityofNottinghamUoN-logo.png?ex=6550efd5&is=653e7ad5&hm=50b9c8fe518f494c806c2e9eba507b84d736cb5906c83fd5045a5d324daac773&" alt="uonLogo" />

        <div className='px-0 md:px-7 pl-[10%]'>
            <h4 className='text-1xl font-light'>BSc (Hons) Computer Science in Artificial Intelligence (AI)</h4>
            <p className='font-bold text-lg mt-1'>University of Nottingham</p>
            <div className='flex space-x-2 my-2'>
                <img src="https://cdn.discordapp.com/attachments/1165641776011427900/1168214519902900285/1200px-Python-logo-notext.png?ex=6550f38d&is=653e7e8d&hm=135b8d95195fc13b80e4777de8b4a93176fd2b04f9c9ae8ffedd982703abe8ed&" alt="pythonLogo" 
                className='h-8 w-8 rounded-full'
                />
                <img src="https://cdn.discordapp.com/attachments/1165641776011427900/1168214365808373860/png-clipart-java-programming-computer-programming-programming-language-android-coffee-jar-text-logo.png?ex=6550f369&is=653e7e69&hm=5b7d5b233342a10be655f659890b3177bec26d95196aa7e5757017cce5cfae84&" alt="javaLogo" 
                className='h-8 w-8 rounded-full'
                />
                <img src="https://cdn.discordapp.com/attachments/1165641776011427900/1168214008965386260/1853px-C_Programming_Language.png?ex=6550f314&is=653e7e14&hm=6cc3fac019e3cf7eb7b68d3bbaf9d4c4b50da140cf06afe462be121780acff26&" alt="cLogo" 
                className='h-8 w-8 rounded-full'
                />
                <img src="https://cdn.discordapp.com/attachments/1165641776011427900/1168214971319070831/63064c5652d40eda2eb7a838_33ac2334.png?ex=6550f3f9&is=653e7ef9&hm=bf1f870d2105d5ab4bbafdb47b8dee0d626727c421054e84b60886ed59042b21&" alt="haskellLogo" 
                className='h-8 w-8 rounded-full'
                />
                <img src="https://cdn.discordapp.com/attachments/1165641776011427900/1168215612644925601/Git-Icon-1788C.png?ex=6550f492&is=653e7f92&hm=2c82217ced09d8acc79df9e983acaea4af90aeac548afacca4fa257b31b89d2e&" alt="gitLogo" 
                className='h-8 w-8 rounded-full'
                />
            </div>
            <p className='text-slate-500 mt-3 text-sm'>2022 - 2025</p>

            <ul className='list-disc space-y-4 ml-3 mt-2 text-sm'>
                <li>Notes here</li>
                <li>Notes here</li>
                <li>Notes here</li>
            </ul>
        </div>
    </article>
  )
}

export default EducationCard