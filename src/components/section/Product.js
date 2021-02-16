import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'

class Product extends Component{
    static contextType = DataContext
    render(){
        const {products} = this.context
        return(
            <div className = "product">
            {
                products.map(product =>(
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.src} alt=""/>
                        </Link>
                        <div>
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>
                                ${product.price}
                            </span>
                            <p>{product.description}</p>
                            <Link to="/cart"><button onClick ={() => this.context.addCart(product._id)}>Add to cart</button></Link>
                        </div>
                    </div>
                ))
            }
         </div>
        )
    }
}
export default Product;