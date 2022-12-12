import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/action';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Products1 = () => {


    const { id } = useParams();
    const [product, setProducts1] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch=useDispatch();
    const addProduct =(product)=>{
dispatch(addcart(product));

    }



    useEffect(() => {

        const getProducts1 = async () => {

            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProducts1(await response.json());
            setLoading(false);

        }

        getProducts1();

    }, []);

    const Loading = () => {
        return (

            <>

                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>


                </div>



            </>
        )
    }

    const ShowProduct = () => {
        return (


            <>
                <div className="col-md-6">

                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />

                </div>
                <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}

                </h4>

                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                Rating {product.rating && product.rating.rate}
                <i className='fa fa-star'></i>
                    
                </p>
                <h3 className='display-6 fw-bold my-4'>
                 ${product.price}
                </h3>

                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to Cart</button>
                <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go To Cart</Link>

                </div>

            </>
        )

    }

    return (

        <div>
            <div className="container py-5"></div>
            <div className="row py-5"></div>
            {loading ? <Loading /> : <ShowProduct/>}


        </div>
    );


}
export default Products1;