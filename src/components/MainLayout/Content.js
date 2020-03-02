import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './index.css'; 
import * as ROUTES from '../../constants/routes'; 
import Home from '../Home'; 
import ProductsPage from '../Products';
import ProductPage from '../Product';

const Content = () => (
    <Layout.Content style={{ padding: '0 50px', marginTop: 72}}>
        <div style={{ padding: 24, minHeight: 380 }}>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route exact path={ROUTES.PRODUCTS} component={ProductsPage}/>
                <Route path={ROUTES.PRODUCT(':productId')} component={ProductPage}/>
            </Switch>
        </div>
    </Layout.Content>
)

export default Content; 