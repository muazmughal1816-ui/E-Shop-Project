import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

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
                            </div>

                        </div>
                    </div>
                </div>
            ) : null
        }
    </div>
  )
}

export default ProductDetails;