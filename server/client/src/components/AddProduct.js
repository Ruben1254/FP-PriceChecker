import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/AddProduct.css'

export const AddProduct = (props) => {
    const [itemBrand, setItemBrand] = useState('')
    const [itemType, setItemType] = useState('')
    const [itemQuant, setItemQuant] = useState()
    const [itemUnit, setItemUnit] = useState('gr')
    const [rmPrice, setRmPrice] = useState(null)
    const [vPrice, setVPrice] = useState(null)
    const [shPrice, setShPrice] = useState(null)
    const [hhPrice, setHhPrice] = useState(null)
    const [bPrice, setBPrice] = useState(null)
    const [itemCat, setItemCat] = useState('vegetables')
    const [itemUrl, setItemUrl] = useState('')

    const navigate = useNavigate()

    const AddData = async (e) => {
        try{
            const result = await axios.post(`http://localhost:${process.env.PORT}/addItem`, {
              brand: itemBrand,
              type: itemType,
              quantity: itemQuant,
              unity: itemUnit,
              rami_levy: rmPrice,
              victory: vPrice,
              shufersal: shPrice,
              hetsi_hinam: hhPrice,
              beitan: bPrice,
              category: itemCat,
              url: itemUrl
            })
            if(result.status===200){
               navigate('/')
            }  
        }
        catch(e){
            console.log(e);
        }
    }
    

    return(
        <div className='generalAdd'>
            <h1>Add product</h1>
            <form onSubmit={AddData} className="formAdd">
                <label>Brand: </label><br/>
                <input type='text' onChange={(e)=>setItemBrand(e.target.value)} /><br/>
                <label>Type: </label><br/>
                <input type='text' onChange={(e)=>setItemType(e.target.value)} /><br/>
                <label>Quantity: </label><br/>
                <input type='number' onChange={(e)=>setItemQuant(e.target.value)} step="0.01" /><br/>
                <label>Unity: </label><br/>
                <select onChange={(e)=>setItemUnit(e.target.value)}>
                    <option value="gr">gr</option>
                    <option value="ml">ml</option>
                </select><br/>
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
                <label>Category:</label><br/>
                <select onChange={(e)=>setItemCat(e.target.value)}>
                    <option value="vegetables">vegetables</option>
                    <option value="grocerie">grocerie</option>
                    <option value="cosmetics">cosmetics</option>
                    <option value="meat">meat</option>
                    <option value="fish">fish</option>
                    <option value="fruits">fruits</option>
                    <option value="drinks">drinks</option>
                </select><br/>
                <label>Pic Url: </label><br/>
                <input type='text' onChange={(e)=>setItemUrl(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        
    )
}