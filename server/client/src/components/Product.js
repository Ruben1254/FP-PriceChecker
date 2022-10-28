import {useEffect,useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/Product.css'

export const Product = (props) => {
    const [product, setProduct] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        showProduct();
      },[])

    const showProduct = async() => {
        try{
            const result = await axios.get(`https://price-checker-il.herokuapp.com/item/${params.id}`)
            setProduct(result.data)
            console.log(result.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const deleteProduct = async() => {
        try{
             await axios.delete(`https://price-checker-il.herokuapp.com/item/remove/${params.id}`)
        }
        catch(e){
            console.log(e)
        }
    }

    if (!product[0]) {
        return(
            <div>
                loading
            </div>
        )
    }


    return(
        <div>
            <img src={product[0].url} className='imgProd' />
            <div className='titleProd'>
                <h3>{product[0].brand}</h3>
                <h4>{product[0].type} {product[0].quantity} {product[0].unity}</h4>
            
            <table>
                <tr>
                    <td className='table'>Rami Levi</td>
                    <td className='table'>Victory</td>
                    <td className='table'>Shufersal</td>
                    <td className='table'>Hetsi Hinam</td>
                    <td className='table'>Yeinot Beitan</td>
                </tr>
                <tr>
                    <td>{product[0].rami_levy} ₪</td>
                    <td>{product[0].victory} ₪</td>
                    <td>{product[0].shufersal} ₪</td>
                    <td>{product[0].hetsi_hinam} ₪</td>
                    <td>{product[0].beitan} ₪</td>
                </tr>
            </table>
            <button onClick={deleteProduct} className="butProd red" >
                Delete 
            </button>
            <button onClick={()=> navigate(`/update/${product[0].item_id}`)} className="butProd orange">
                Update
            </button>
            </div>
        </div>
    )
}
