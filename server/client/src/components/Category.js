import {useEffect,useState, useCallback} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/Category.css'


export const Category = (props) => {
    const [items, setItems] = useState([])
    const params = useParams()

    const showCateg = useCallback( async () => {
       
        const results = await axios.get(`http://localhost:${process.env.PORT}/all/${params.category}`)
        setItems(results.data) 
    },[items])

    useEffect(() => {
        showCateg()
        .catch(e =>{
            console.log(e)
        })
    },[showCateg])


    return(
        <div>
            <h2 className='title'>{params.category}</h2>
            <section className='section'>
                <div className='generalProd'>
                    {
                            items.length === 0 ? 'No Items' : items.map(item => {
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