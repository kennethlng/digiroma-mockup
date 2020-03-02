import React from 'react';
import { Layout } from 'antd';
import './index.css'; 

const Content = () => (
    <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 96}}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Content
        </div>
    </Layout.Content>
)

export default Content; 