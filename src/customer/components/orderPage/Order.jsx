import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'
import OrderDetails from './OrderDetails'


const orderStatus = [
    {lable: "On the way", value: "on_the_way"},
    {lable: "Delivered", value: "delivered"},
    {lable: "Cancelled", value: "cancelled"},
    {lable: "Returned", value: "returned"},
]

const Order = () => {
  return (
    <div className='px:5 lg:px-20 sm:p-3'>
      <Grid container sx={{justifyContent:"space-between"}} columns={{ xs: 4, sm: 8, md: 12 }}>

        <Grid item xs={2.5}>
            <div className='h-auto shadow-lg sm:w-full bg-white p-5 sticky top-5'>
                <h1 className='font-bold text-lg'>Filter</h1>

                <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold'>ORDER STATUS</h1>

                   {orderStatus.map((option)=> <div className='flex items-center'>
                        <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-600 text-indigo-600 focus:ring-indigo-500' />
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.lable}</label>
                    </div>
                    )}
                </div>
            </div>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-5'>
                {[1,1,1,1].map((item)=><OrderCard />)}
            </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Order
