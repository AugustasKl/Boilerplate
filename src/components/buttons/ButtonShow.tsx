
import React, { useState } from 'react'
import { Button } from './Button'
import { ButtonPrimary } from './ButtonPrimary'

const ButtonShow:React.FC<{onPassdata:(data:number)=>void}> = (props) => {
    const[show, setShow]=useState<boolean>(true)
    const [itemsToShow, setItemsToShow]=useState<number>(5)
    
    const recipesHandler=()=>{
       
        if(itemsToShow ===4){
            setItemsToShow((prevState)=> prevState+1)
            setShow((prevState)=> !prevState)
        }
        if(itemsToShow ===5){
            setItemsToShow((prevState)=> prevState-1)
            setShow((prevState)=> !prevState)
        }

        props.onPassdata(itemsToShow)
    }
  return (
    <Button onClick={recipesHandler} >
        {!show && <ButtonPrimary>Show more</ButtonPrimary> }
        {show && <ButtonPrimary>Show less</ButtonPrimary> }
    </Button>
  )
}

export default ButtonShow