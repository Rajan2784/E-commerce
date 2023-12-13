import AdjustIcon from '@mui/icons-material/Adjust';
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${4}`)} className='p-5 shadow-md hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/kxrvi4w0/shirt/v/k/d/38-pesfoslb493283-peter-england-original-imaga5p5shuyv6u5.jpeg?q=70" alt="" />
            </div>
            <div className='ml-5 space-y-2'>
                <p className=''>Men Slim Mid rise black jeans</p>
                <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

            </div>

        </Grid>

        <Grid item xs={2}>
            <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
            {true && <div>
                <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm' />
                    <span> Delivered on March 24</span>
                    
                </p>
                <p className='text-xs'>
                    Your Item Has been Delivered
                </p>
            </div> }

           {false && <p>
                <span>Expeceted Delivery on Mar 23</span>
            </p>}

        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard
