import { useState,useEffect } from "react"
import { data, useParams } from "react-router"

export const ProductInfo = ()=>{
    const {productId} = useParams()
   const [oldFetch,setFetch]= useState("")
    useEffect(()=>{
        let productFetchData = fetch(`https://dummyjson.com/products/${productId}`)
        .then((data)=>{
return(data.json())
        }).then((readData)=>{
console.log(readData)
setFetch(readData)
        })
    })
return(
    <>
    <div className="mainClick-div">
        <div className="clickImage-div">
            <img className="clickImage" src={oldFetch.images}></img>
        </div>
        <div className="clickDescription">
            <h1>{oldFetch.availabilityStatus}</h1>
    <h5>{oldFetch.description}</h5>
    </div>
    </div>
 
    </>
)


}