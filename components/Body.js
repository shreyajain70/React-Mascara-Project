import { useState, useEffect } from "react";
import { BeautyCards } from "./BeautyCards";
import { Link } from "react-router";

export const Body = () => {
    const [oldList, setOldList] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        const Products_List = fetch("https://dummyjson.com/products")
            .then((response) => {
                return (response.json())
            }).then((readableData) => {
                setOldList(readableData.products);
                setList(readableData.products);
                console.log(readableData.products)

            })
    }, [])


    //    input setState:->
    const [currentInput, setInput] = useState([]);
    return (
        // https://i.pinimg.com/736x/89/97/d4/8997d4e3df224705fc0503e50b51cf65.jpg
        <>
            <div className="body-main-div">
                <div className="front-div">
                    <img className="body-img" src="https://i.pinimg.com/736x/30/3a/6a/303a6a5d530ed72036ca4dd8a8e3d803.jpg"></img>
                    <h1 className="quote"><i><span className="first-heading">"Beauty is the</span> <br></br><span className="second-heading"> illumination of your soul."</span></i></h1>

                    <div className="button-div">

                        <button className="main-btn btn1"
                            onClick={() => {
                                let BeautyFilterList = oldList.filter((prod) => {
                                    console.log(prod)
                                    return (prod.category === "beauty")
                                })
                                setOldList(BeautyFilterList);

                            }}
                        >Beauty</button>

                        <button className="main-btn btn2"
                            onClick={() => {
                                let GroceryFilterList = oldList.filter((prod) => {
                                    return (prod.category === "groceries")
                                })
                                setOldList(GroceryFilterList);
                            }}
                        >Groceries</button>
                        <br></br>
                        <br></br>
                        <button className="main-btn btn3" onClick={() => {
                            let FurnitureFilterList = oldList.filter((prod) => {
                                return (prod.category === "furniture")
                            })
                            setOldList(FurnitureFilterList)
                        }}>Furniture</button>

                        <button className="main-btn btn4" onClick={() => {
                            let FragranceFilterList = oldList.filter((prod) => {
                                return (prod.category === "fragrances")
                            })
                            setOldList(FragranceFilterList)
                        }}>Fragrance</button>
<div className="search-div">
    <input
        className="search-inpt"
        placeholder="Search Here..."
        value={currentInput}
        onChange={(e) => {
            setInput(e.target.value);
        }}
    />
    <button
        className="search-btn"
        type="button" 
        onClick={() => {
            const searchFilterList = list.filter((prod) =>
                prod.title.toLowerCase().includes(currentInput.toLowerCase())
            );
            setOldList(searchFilterList); 
        }}
    >
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

    </button>
</div>

                    </div>
                </div>


                <div className="main-products-div">
                    {
                        oldList.map((cards) => {
                            return (
                                <>


                                    <Link key={cards.id} to={`/products/${cards.id}`}>
                                        <BeautyCards productObj={cards}></BeautyCards>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}
