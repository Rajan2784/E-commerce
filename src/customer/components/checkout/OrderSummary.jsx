import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import CartItem from '../cart/CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />

        <div>
        <div className='lg:grid grid-cols-3 relative'>
            <div className='col-span-2 mb-2'>
                { [1,1,1].map((item)=><CartItem />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border p-2'>
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
                    onClick={()=>navigate('/order')}
                    >
                    Checkout
                    </Button>
                </div>
            </div>
        </div>

        
      

    </div>

      </div>
    </div>
  )
}

export default OrderSummary
