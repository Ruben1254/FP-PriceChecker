import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/AllProd.css'

export const AllProd = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems()
    },[])

    const getItems = async() => {
        console.log(process.env.REACT_APP_PORT)
        try{
            const results = await axios.get(`https://price-checker-il.herokuapp.com/all`);
            if(results.status === 200){
                setProducts(results.data)  
                console.log(results.data)  
            }
        }
        catch(e){
            console.log(e);
        }
    }

    const search = async (e) =>{
        try{
          const results = await axios.get(`https://price-checker-il.herokuapp.com/search?brand=${e}&type=${e}`);
          if(results.status === 200){
            setProducts(results.data);
          }
        }
        catch(e){
          console.log(e);
        }
      }

    return(
        <div>
            <input type="text" placeholder="Search Items" className="searchInp"  onInput={(e)=>search(e.target.value)}/>
            <section className='section'>
                <div className='generalProd'>                
                    {
                        products.length === 0 ? 'Loading ...' : products.map(item => {
                            return(
                                <div key={item.item_id} className="card">
                                    <img src={item.url} className='img' />
                                    <Link to={`/product/${(item.item_id)}`} className="info">
                                        <h4>{item.brand}</h4> 
                                        <h5>{item.type}</h5>
                                        <p>{item.quantity}{item.unity}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
