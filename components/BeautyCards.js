export const BeautyCards = ({productObj})=>{
    console.log(productObj)
    return(
        <>
        <div className="products-div">
        <h1>{productObj.title}</h1>
        <img className="products-image" src={productObj.images[0]}></img>
        <h4>{"$"+productObj.price}</h4>
        <h6 className="rating">{productObj.rating + "⭐"}</h6>

        <button className="cart-btn">Add To Cart</button>
        </div>
        </>
    )
}