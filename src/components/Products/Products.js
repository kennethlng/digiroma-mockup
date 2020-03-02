import React from 'react'; 
import ProductsTable from './Table'; 
import Search from './Search'; 
import Filters from './Filters'; 

class ProductsPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <div style={{ marginBottom: 16}}>
                    <Search/>
                </div>
                <div style={{ marginBottom: 16}}>
                    <Filters/>
                </div>
                <ProductsTable/>
            </div>
        )
    }
}

export default ProductsPage; 