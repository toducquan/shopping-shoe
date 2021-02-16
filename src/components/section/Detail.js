import React, {Component} from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css'



class Detail extends Component{
    static contextType = DataContext;
    state ={
        product:[]
    }

    getProduct = ()=>{
        const res = this.context.products
        const data = res.filter(item =>{
            return item._id === this.props.match.params.id;
        })
        this.setState(
            {
                product:data
            }
        )

    }
    componentDidMount(){
        this.getProduct();
    }

    render(){
        const {product} = this.state
        return(
            <div >
                {
                    product.map(item =>(
                        <div className="detail">
                            <img src={item.src}></img>
                            <span>${item.price}</span>
                            <p>{item.title}</p>
                            <p>{item.content}</p>
                            <button><Link to="/cart">Add to cart</Link></button>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Detail;