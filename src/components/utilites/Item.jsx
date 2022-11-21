import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice';

const Item = ({ ifExist, id, color, shadow, title, text, img, btn, rating, price }) => {

    const dispatch = useDispatch()

    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price }

        dispatch(setAddItemToCart(item))
    }
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }
    return (
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExist ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full `}>
            <div className={`${ifExist ? 'justify-items-start' : 'justify-items-center'}`}>
                <h1 className='text-slate-900 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                <p className='text-slate-900 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
                <div className='flex items-center justify-between w-28 my-2'>
                    <div className='flex items-center bg-black/80 px-1 rounded blur-effect-theme '>
                        <h1 className='text-white text-sm font-medium '>${price}</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                        <StarIcon className='icon-style w-5 h-5 md:h-4 md:w-4 ' /><h1 className='md:text-sm font-normal text-slate-900'>{rating}</h1>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button
                        type='button'
                        className='bg-black/90 blur-effect-theme button-theme p-0.5 shadow-slate-200  '
                        onClick={() => onAddToCart()}
                    ><ShoppingBagIcon className='icon-style text-slate-100' /></button>
                    <button
                        onClick={() => { onAddToCart(); onCartToggle() }}
                        type='button'
                        className='bg-black/90 blur-effect-theme button-theme px-2 py-1 shadow-slate-400 text-sm text-white hover:scale-105 transition ease-in-out '>{btn}</button>
                </div>
            </div>
            <div className={`flex items-center ${ifExist ? 'absolute top-5 right-1' : 'justify-center'} `}>
                <img
                    src={img}
                    alt={`img/item-img/${id}`}
                    className={`transitions-theme hover:-rotate-12 ${ifExist ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64 '}`}
                />
            </div>
        </div>
    )
}

export default Item
