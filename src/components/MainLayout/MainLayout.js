import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Header from './Header'; 
import Footer from './Footer'; 
import Content from './Content'; 

class MainLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Content/>        
                <Footer/>
            </Layout>   
        )
    }
}

export default MainLayout;