import {CreateContext, useState} from 'react';
import {productsArray} from './productsStore';

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {}
})

export const CartProvider = ({children}) => {

	const [cartProducts, setCartProducts] = useState)[]);

//{id:1, quantity: 2
//
//
        const getProductQuantity = (id) => {
              const quantity = cartProducts.find(product=>product.id)?.quantity;

	      if (quantity === undefined) {
                   return 0;
	      }
	}

        const addOneToCart(id) {
              const quantity = getProductQuantity(id);

		if (quantity === 0) {
                     setCartProducts([...cartProducts, {id:id, quantity:1}
		} else {
                     setCartProducts(
                           cartProducts.map(
                                   
			   )
		     )
		}
	}

	const contextValue = {
            items: cartProducts,
		getProductQuantity,
	  getProductQuantity,
  	  addOneToCart,
	  removeOneFromCart,
	  deleteFromCart,
	  getTotalCost,
	}
		return (
                     <CartContext.Provider value={contextValue}>
                         {children}
		     </CartContext.Provider>
		)

}


