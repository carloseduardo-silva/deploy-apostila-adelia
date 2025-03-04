import React from 'react'
import styles from "./ToggleFontSizeBtn.module.css"

export const ToggleFontSizeBtn = () => {


    const increaseText = () =>{
    
        document.querySelectorAll(".leading-8, .descParagrah, .summaryCard div p").forEach((item) => {

            if(item.classList.contains("text-sm")){
                item.classList.remove("text-sm")
                item.classList.add("text-[18px]")
            }
            else{
                item.classList.remove("text-[18px]")
                item.classList.add(`text-2xl`)
            }
        })
     
    }

    const decreaseText = () =>{
        document.querySelectorAll(".leading-8, .descParagrah, .summaryCard div p").forEach((item) => {

            if(item.classList.contains("text-2xl")){
                item.classList.remove("text-2xl")
                item.classList.add("text-[18px]")
            }
            else{
                item.classList.remove("text-[18px]")
                item.classList.add(`text-sm`)
            }

        })   
    }

  return (
    <div className="flex flex-row gap-4 items-center  hover:cursor-pointer">
     <span onClick={increaseText} className="text-[0.95rem]">A+</span>
     <span onClick={decreaseText} className="text-[0.95rem]">A-</span>
    </div>
  )
}
