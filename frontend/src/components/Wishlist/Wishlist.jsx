import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const Wishlist  = ({ setOpenWishlist }) => {

    const cartData = [
     {
            name: "Iphone 16 pro max 256 gb ssd and 8gb ram silver color",
        description: "test",
        price: 999,
      },

     {
            name: "Iphone 16 pro max 256 gb ssd and 8gb ram silver color",
        description: "test",
        price: 245,
      },

     {
            name: "Iphone 16 pro max 256 gb ssd and 8gb ram silver color",
        description: "test",
        price: 645,
      },
    ]

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-blue-100 flex flex-col overflow-y-scroll justify-between shadow-sm">
            <div>
                <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
                />
                </div>
                {/* Item length */}
                <div className={`${styles.noramlFlex} p-4`}>
                 <AiOutlineHeart size={25} color='#ff4d6d' />
                 <h5 className="pl-2 text-[20px] font-[500]">
                   3 Items
                  </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {
                    cartData && cartData.map((i, index) => (
                        <CartSingle key={index} data={i}/>
                    ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}


const CartSingle = ({data}) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;
    return (
        <div className="border-b p-4">
            <div className="w-full flex items-center">
                <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"/>
                <img src="https://m.media-amazon.com/images/I/71Lw1l2PScL._AC_UF894,1000_QL80_.jpg" alt=""
                className='w-[85px] h-[70px] ml-3' />
                
                <div className="pl-[5px] ml-2">
                    <h1>{data.name}</h1>
                    <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">US${totalPrice}</h4>
                </div>
                <div className="">
                    <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
                    //   onClick={() => addToCartHandler(data)}
                     />
                </div>
            </div>
        </div>
    )
}

export default Wishlist 