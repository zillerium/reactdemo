const productsArray = [
  {
       id: "1",
	  title: "Coffee",
	  price: 4.99
  },
  {
       id: "2",
	  title: "Tea",
	  price: 14.99
  },
  {
       id: "3",
	  title: "Tea Org",
	  price: 114.99
  }
]

const getProductData = (id) => {
    let productData = productsArray.find(product=>product.id === id)

    return productData;

}

export {productsArray, getProductData};
