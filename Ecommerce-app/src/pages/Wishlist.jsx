import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[60vh] flex justify-center items-center">
                <h1 className='text-2xl font-bold'>Your Wishlist is Empty </h1>
            </div>
        );
    }
  return (
    <div className='px-[5%] py-5'>
      <h1 className='font-bold text-3xl mb-8'>My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4">
        {wishlist.map((product) => (
            <div key={product.id} className="border border-gray-300 p-4 rounded-xl">
                <img src={product.thumbnail} alt={product.title}
                className='w-full h-48 object-contain' />
                <h2 className='font-bold mt-3'>{product.title}</h2>
                <p className='mt-2'>${product.price}</p>
                <button onClick={() => toggleWishlist(product)}
                className='mt-2 px-4 py-2 border rounded'>Remove</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
