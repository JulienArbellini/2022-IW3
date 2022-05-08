import { html } from 'lit';
import { Base } from '../Base';

export class AppCart extends Base {
  constructor(cart=[], productStored=[]) {
    super();
    this.prodcutsStored = productStored;
    this.cart = cart;
  }
  
  render() {
    console.log(this.cart);
    console.log(this.productStored);
    return html`
    <div class="cartContainer"> 
        <h1>Panier</h1>
        <div class="productsContainerCart"> 
          ${this.cart.products ? this.cart.products.map((product)=>{return html`
          <div class="productContainerCart">
            <div class="titleAndImage">
              <img class="productImage"  height="auto" width="120px" src= ${this.productStored[product-1] ? this.productStored[product-1].image :''} ></img>
              <div class="productTitle">  ${this.productStored[product-1] ? this.productStored[product-1].title :''}</div>
              <div class="moreOrLess">
                <div id="quantity">
                  <div class="titleQt">Qté: </div>
                  <div class="Qt">0</div>
                </div>
                <div class="MoreLess">+</div>
                <div class="MoreLess">-</div>
                <div id="delete">x</div>
              </div> 
            </div> 

          </div>
            
            `;}):''}
        </div>
    </div>
        
      
    `;
  }
}
customElements.define('app-cart', AppCart);

