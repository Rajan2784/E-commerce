import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()

    const handleCheckOut = () => {
        navigate('/checkout/?step=2')
    }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
                { [1,1,1].map((item)=><CartItem />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border p-5'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-5'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>₹499</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>₹99</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>₹400</span>
                        </div>
                    </div>
                    <Button
                    className='w-full'
                    sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
                    size="large"
                    variant="contained"
                    onClick={handleCheckOut}
                    >
                    Checkout
                    </Button>
                </div>
            </div>
        </div>

        
      

    </div>
  )
}

export default Cart
