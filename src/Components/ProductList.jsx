import products from './products'
import ProductCard from './ProductCard'


const ProductList = () => {
    console.log(products)
  return (
    <div className='containers'>
        <h1>E-laptop shop Lagos</h1>
        <div className='grid'>
            {products.map((item) => (
                <ProductCard
                key={item.name}
                name={item.name}
                price ={item.price}
                description={item.description}
                imgurl={item.imgUrl}
                />
            
            ))}

        </div>
    </div>
  )
}

export default ProductList