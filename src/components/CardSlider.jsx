import { useEffect, useState } from "react";
import {cardSlide} from '../utils/constants/slideImages'

const CardSlider = () =>{
    const [images,setImages]=useState(cardSlide)

    const handleNext = ()=>{
        setImages((nextContent)=>{
            const next = [...nextContent]
            next.unshift(next.pop())
            return next
        })
    }

    const handlePrev = ()=>{
        setImages((nextContent)=>{
           const prev = [...nextContent];
           prev.push(prev.shift())
           return prev
        })
    }

   useEffect(()=>{
   const timer = setTimeout(()=>{
        handleNext()
    },3000)

    return ()=>{
        clearTimeout(timer)
    }

   },[images])

    return(
        <>
        <div className='flex justify-around m-10'>
            <button className="font-bold p-3" onClick={handlePrev} >Prev</button>
            {images.map((img,index)=> (<div key={img} className=' p-4 rounded-lg'><img className="h-[500px]" src={images[index]}></img></div>))}       
            <button className="font-bold" onClick={handleNext}>Next</button>
        </div>
        </>
    )
}


export default CardSlider;