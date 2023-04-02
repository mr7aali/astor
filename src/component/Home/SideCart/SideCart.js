import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../../Redux/ActionCreators/productAction';
import { shortedWithId } from '../../../utility/usePostUser';
import { BsFillTrash2Fill } from 'react-icons/bs'


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };


    const cart = useSelector((s) => s.product.cart);
    const dispatch = useDispatch();
    const sortedCart = shortedWithId(cart);

    const priceOfArry = cart?.map((m, i) => parseInt(m.resalePrice) * parseInt(m.quantity));
    const quantity = cart?.map((m, i) => parseInt(m.quantity));


    const subTotal = priceOfArry.reduce((partialSum, a) => partialSum + a, 0);
    const sum_auantity = quantity.reduce((partialSum, a) => partialSum + a, 0);

    const Delivary_Charge = parseInt(60 + sum_auantity * (10));


    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>
                        <AddShoppingCartIcon

                            sx={{

                                color: '#000',
                                height: '45px',
                                width: '45px',
                                background: '#fff',
                                borderRadius: '50%',
                                padding: '6px',

                            }}
                        />
                        {
                            <div style={{ "textShadow": "0px 0px 16px #000000", borderRadius: '500%' }} className=' p-1 absolute top-[-2px] left-[35px]'>
                                <h1 className='rounded-full px-1 text-[red] m-0  font-extrabold text-[15px]'>{cart?.length}+</h1>
                            </div>
                        }
                    </Button>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >

                        <h1 className='text-[#000] mt-6 ml-5 text-[25px]'>Shopping Bag</h1>



                        {
                            sortedCart?.map(m =>

                                <div key={m._id} className='w-[350px] mt-2'>

                                    <div style={{ borderTop: '1px solid black' }} className='p-3 m-2 flex items-center'>
                                        <div onClick={() => dispatch(deleteFromCart(m._id))} className='m-0 text-red-500 font-bold cursor-pointer'>X</div>
                                        <div className='h-[40px] w-[60px] bg-black ml-3'>
                                            <img className='h-[100%] w-[100%]' src={m.picture} alt="" />
                                        </div>
                                        <div className='w-[150px] ml-2'>
                                            <h1 className='overflow-hidden text-[15px] font-bold'>{m.name}</h1>
                                            <p className='text-[#000] text-[13px]'>{m.condition}</p>
                                        </div>
                                        <div className='ml-1 font-semibold'> ${m.resalePrice}  <div></div> <span className='flex justify-end'>X {m.quantity}</span> </div>
                                    </div>


                                </div>

                            )
                        }
                        {
                            cart?.length ?
                                <div className='w-full mt-12'>
                                    <div className='bg-[#f7dcdc] p-3 text-xl mx-3'>
                                        <h1 className='text-center font-bold'>Cart Totals</h1>
                                    </div>
                                    <div className='flex px-5 mt-2 justify-between'>
                                        <h1 className='font-medium'>Sub Totals</h1>
                                        <p className='font-medium'>${subTotal}</p>
                                    </div>
                                    <div className='flex px-5 mt-2 justify-between'>
                                        <h1 className='font-medium'>Delivary Charge</h1>
                                        <p className='font-medium'>$ {Delivary_Charge}</p>
                                    </div>
                                    <div className='flex px-5 mt-2 justify-between'>
                                        <h1 className='font-medium'>Total</h1>
                                        <p className='font-medium'>${subTotal + Delivary_Charge}</p>
                                    </div>
                                    <div className='bg-[#13AFF0] mt-5 p-3 text-lg mx-3'>
                                        <h1 className='text-center text-[#fff] '>Proceed To Checkout</h1>
                                    </div>
                                </div>
                                :
                                <div className='w-[350px] '>
                                    <h1 className='flex items-center flex-col  mt-96 text-xl text-[#000]'>
                                        <BsFillTrash2Fill className='text-[100px]' />
                                        <p className='text-xl mt-3'>Empty</p>
                                    </h1>

                                </div>
                        }
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}