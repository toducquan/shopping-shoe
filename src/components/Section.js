import React , {Component} from 'react'
import './css/Section.css'
import {Route} from 'react-router-dom'
import Product from './section/Product'
import Detail from './section/Detail'
import Cart from './section/Cart'

class Section extends Component{
    render(){
        return(
            <section>
                <Route path="/" component={Product} exact></Route>
                <Route path="/product" component={Product} exact></Route>
                <Route path="/product/:id" component={Detail}></Route>
                <Route path="/cart" component={Cart} exact></Route>
            </section>
        );
    }
}
export default Section;