import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/UpdateProd.css'

export const UpdateProd = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const [itemQuant, setItemQuant] = useState()
    const [rmPrice, setRmPrice] = useState()
    const [vPrice, setVPrice] = useState()
    const [shPrice, setShPrice] = useState()
    const [hhPrice, setHhPrice] = useState()
    const [bPrice, setBPrice] = useState()
    const [itemUrl, setItemUrl] = useState('')

    const updateItem = async(e) => {
        try{
            const result = await axios.post(`http://localhost:${process.env.PORT}/update/${params.id}`,{
              quantity: itemQuant,
              rami_levy: rmPrice,
              victory: vPrice,
              shufersal: shPrice,
              hetsi_hinam: hhPrice,
              beitan: bPrice,
              url: itemUrl
            })
            if(result.status===200){
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
    }


    return(
        <div className='generalUpd'>
            <h1>Update Item</h1>
            <form onSubmit={updateItem} className="formUpd">
                <label>Quantity: </label><br/>
                <input type='number' onChange={(e)=>setItemQuant(e.target.value)} step="0.01"/><br/>
                <label>Rami Levy: </label><br/>
                <input type='number' onChange={(e)=>setRmPrice(e.target.value)} step="0.01"/><br/>
                <label>Victory: </label><br/>
                <input type='number' onChange={(e)=>setVPrice(e.target.value)} step="0.01"/><br/>
                <label>Shufersal: </label><br/>
                <input type='number' onChange={(e)=>setShPrice(e.target.value)} step="0.01"/><br/>
                <label>Hetsi Hinam:</label><br/>
                <input type='number' onChange={(e)=>setHhPrice(e.target.value)} step="0.01"/><br/>
                <label>Yeinot Beitan</label><br/>
                <input type='number' onChange={(e)=>setBPrice(e.target.value)} step="0.01"/><br/>
                <label>Pic Url: </label><br/>
                <input type='text' onChange={(e)=>setItemUrl(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}