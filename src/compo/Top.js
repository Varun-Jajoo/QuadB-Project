import React from 'react'

import { motion } from 'framer-motion'

export default function Top() {
  return (
    <>
    <div
    id="carouselExampleAutoplaying"
    className="carousel slide"
    data-bs-ride="carousel"
    style={{height : "700px"}}>
        <motion.div class="d-flex justify-content-around">
          <div className="tt" style={{color:"yellow"}}>
          Welcome.
          <p className='p' style={{fontWeight :"lighter"}}>Millions of movies, TV shows and people to discover.</p>
          <p className="p"  style={{fontWeight :"lighter"}}> Explore now.</p>

          </div>
        <div className="img2">
        <img src="https://www.clerksy.co/assets/hero-f09b73e367e36e9a39fd215049966db45a5a93740a09ce3aa6ededd503052067.svg" class="object-fit-cover rounded" alt="..." style={{outline :"none"}}/>
        </div>
        </motion.div>
        
      
     
     

      </div>

      
      
    {/* <div className="overlay" id="wave" style={{zIndex : "999"}}>
   <Wave fill="url(#gradient)"
     paused={false}
     options={{
       height: 5,
       amplitude: 30,
       speed: 0.75,
       points: 3
     }}
   >
 <defs>
   <linearGradient id="gradient" gradientTransform="rotate(90)">
     <stop offset="10%"  stopColor="#2aff0e" />
     <stop offset="40%" stopColor="#104e08" />
     <stop offset="80%" stopColor="black" />
   </linearGradient>
 </defs>
</Wave>

           </div>
   */}
           </>
  )
}
