import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = () => {

  }

  return (
    <div className="bg-white">
        {
            data ? (
                <div className={`${styles.section} w-[90%] 800px:w-[80%] min-h-screen py-10`}>
                    <div className="w-full py-5">
                        <div className="block w-full 800px:flex gap-10">
                            
                            {/* LEFT COLUMN: IMAGES */}
                            <div className="w-full 800px:w-[50%] flex flex-col items-center">
                                <div className="w-full max-h-[500px] flex justify-center overflow-hidden rounded-lg shadow-sm border border-gray-100 p-4">
                                    <img 
                                        src={data.image_Url && data.image_Url[select]?.url} 
                                        alt={data.name} 
                                        className='w-[80%] max-h-[400px] object-contain transition-all duration-300'
                                    />
                                </div>
                                <div className="w-full flex gap-4 mt-4 justify-start">
                                    {data?.image_Url?.map((imgItem, index) => (
                                        <div 
                                            key={index}
                                            className={`${select === index ? "border-2 border-teal-500 scale-105" : "border border-gray-200"} cursor-pointer p-1 rounded-md overflow-hidden bg-white max-w-[120px] shadow-sm transition-all duration-200`}
                                            onClick={() => setSelect(index)}
                                        >
                                            <img 
                                                src={imgItem?.url} 
                                                alt=""
                                                className="h-[80px] w-[80px] object-contain mx-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT COLUMN: CONTENT & INTERACTIONS */}
                            <div className="w-full 800px:w-[50%] pt-5 800px:pt-0 flex flex-col justify-center">
                                <h1 className={`${styles.productTitle} text-[26px] font-[600] font-Roboto text-[#333]`}>
                                    {data.name}
                                </h1>
                                <p className="mt-3 text-[16px] text-[#666] leading-relaxed font-Roboto">
                                    {data.description}
                                </p>
                                
                                <div className="flex items-center pt-5 gap-3">
                                    <h4 className={`${styles.productDiscountPrice} text-[20px] font-bold text-[#333]`}>
                                        {data.discount_price}$
                                    </h4>
                                    {data.price && (
                                        <h3 className={`${styles.price} text-[16px] text-[#d55b56] line-through font-[500]`}>
                                            {data.price}$
                                        </h3>
                                    )}
                                </div>

                                <div className="flex items-center mt-12 justify-between pr-3 bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-100">
                                    {/* QUANTITY COUNTER */}
                                    <div className="flex items-center shadow-md rounded-lg overflow-hidden border border-gray-200">
                                        <button 
                                            className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-85 active:scale-95 transition duration-200 ease-in-out'
                                            onClick={decrementCount}
                                        >
                                            -
                                        </button>
                                        <span className="bg-white text-gray-800 font-semibold px-5 py-[8px] min-w-[40px] text-center">
                                            {count}
                                        </span>
                                        <button 
                                            className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-85 active:scale-95 transition duration-200 ease-in-out'
                                            onClick={incrementCount}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* WISHLIST BUTTON */}
                                    <div className="p-2 hover:bg-red-50 rounded-full transition-colors duration-200">
                                        {click ? (
                                            <AiFillHeart
                                                size={32}
                                                className="cursor-pointer animate-ping-once"
                                                onClick={() => setClick(!click)}
                                                color="red"
                                                title="Remove from wishlist"
                                            /> 
                                        ) : (
                                            <AiOutlineHeart
                                                size={32}
                                                className="cursor-pointer text-[#333] hover:text-red-500 transition-colors duration-200"
                                                onClick={() => setClick(!click)}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                </div>
                                 <div className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}>
                                <span className="text-white flex items-center">
                                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                                </span>
                            </div>
                            <div className="flex items-center pt-8">
                                <Link>
                                <img className="w-[50px] h-[50px] rounded-full mr-2"
                                 src={data.shop.shop_avatar.url} alt="" />
                                </Link>
                                <div className="pr-8">
                                    <Link>
                                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                        {data.shop.name}
                                    </h3>
                                    </Link>
                                    <h5 className="pb-3 text-[15px]">
                                        ({data.shop.ratings}) Ratings
                                    </h5>
                                </div>
                                <div onClick={handleMessageSubmit}
                                 className={`${styles.button} bg-green-500 mt-4 !rounded !h-11`}>
                                    <span className="text-white flex items-center">
                                        Send Message <AiOutlineMessage className="ml-1" />
                                    </span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <ProductDetailsInfo data={data} />
                    <br />
                    <br />
                </div>
            ) : null
        }
    </div>
  )
};

const ProductDetailsInfo = ({data}) => {
    const [active, setActive] = useState(1);
    return (        
        <div className="bg-sky-200 px-3 800px:px-10 py-2 rounded">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5 onClick={() => setActive(1)}
                     className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}>
                        Product Details
                    </h5>
                    {active === 1 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
                <div className="relative">
                    <h5 onClick={() => setActive(2)}
                     className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}>
                        Product Reviews
                    </h5>
                    {active === 2 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
                <div className="relative">
                    <h5 onClick={() => setActive(3)}
                     className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}>
                        Seller Information
                    </h5>
                    {active === 3 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
            </div>

            {active === 1 ? (
                <>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        {data.description}
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        {data.description}
                    </p>
                </>
            ) : null}

            {
                active === 2 ? (
                    <div className="w-full justify-center min-h-[40vh] flex items-center">
                        <p>No Reviews yet!</p>
                    </div>
                ) : null
            }

            {
                active === 3 && (
                    <div className="w-full block 800px:flex p-5">
                        <div className="w-full 800px:w-[50%]">
                            <Link>
                            <div className="flex items-center">
                                <img src={data.shop.shop_avatar.url} alt=""
                                className="w-[50px] h-[50px] rounded-full" />
                                <div className="pl-3">
                                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                                    <h5 className="pb-2 text-[15px]">
                                        ({data.shop.ratings}) Ratings
                                    </h5>
                                </div>
                            </div>
                            </Link>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti numquam, optio quae fugit neque nemo culpa quibusdam dicta! Harum sapiente ex quas, laboriosam fugiat inventore blanditiis aspernatur maiores facilis. Quo veniam ipsum, libero praesentium id officia sit reiciendis alias?
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails;