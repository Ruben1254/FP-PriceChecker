import React from "react";
import { Link } from "react-router-dom";
import '../styles/Sidebar.css'

export const Sidebar = () => {
    return(
        <div className="general">
            <ul className="sideList">
                {/* <h2>Category</h2> */}
                <Link to='/category/vegetables' className="link"><li className="liSide">Vegetables</li></Link>
                <Link to='/category/grocerie' className="link"><li className="liSide">Grocery</li></Link>
                <Link to='/category/cosmetics' className="link"><li className="liSide">Cosmetics</li></Link>
                <Link to='/category/meat' className="link"><li className="liSide">Meat</li></Link>
                <Link to='/category/fish' className="link"><li className="liSide">Fish</li></Link>
                <Link to='/category/fruits' className="link"><li className="liSide">Fruits</li></Link>
                <Link to='/category/drinks' className="link"><li className="liSide">Drinks</li></Link>
            </ul>
        </div>
    )
}