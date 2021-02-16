import React, {Component} from 'react'
import {DataContext} from '../Context'

class Cart extends Component{
    static contextType = DataContext
    render(){
        const {cart} = this.context
        return(
            <div >
                <div className="pay">
                    <button>Payment</button>
                    <p>Cost: ${this.context.total}</p>
                </div>
                {
                    cart.map(item =>(
                        <div className="detail">
                            <img src={item.src}></img>
                            <span>${item.price}</span>
                            <p>{item.title}</p>
                            <p>{item.content}</p>                          
                            <div className="amount">
                                <button onClick={()=>this.context.removeItem(item._id)}>-</button>
                                <span>{item.count}</span>
                                <button onClick={()=>this.context.addItem(item._id)}>+</button>
                                <p>Total: ${item.price*item.count}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            
        );
    }
}
export default Cart