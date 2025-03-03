import { useContext } from "react";
import { GlobalSavat } from "../App";


function Cart() {
    const { cart, setCart } = useContext(GlobalSavat);

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className='cards-wrapper'>
                {
                    cart.length ? cart?.map((item, index) => (
                        <div className='card' key={index}>
                            <img src={item.image} alt="" />
                            <h2>{item.title.slice(0, 10)}</h2>
                            <p>{item.description.slice(0, 10)}</p>
                            <h3>${item.price}</h3>
                            <h3>rating: {item.rating.rate}</h3>
                            <h3>{item.count} ta savatga qo`shildi</h3>
                        </div>
                    ))
                        :
                        < h1 > Savatga hech narsa qo`shilmagan</h1>
                }
            </div>
        </div>
    )
}

export default Cart;