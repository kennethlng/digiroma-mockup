import React from 'react'; 
import { Row, Col, Descriptions } from 'antd';
import RadarChart from './RadarChart'; 
import LineChart from'./LineChart'; 
import BarChart from './BarChart'; 

const gridStyle = { background: '#FFF', padding: 24 };

class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Product</h1>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div style={gridStyle}>
                            <Descriptions title="Jason Doman">
                                <Descriptions.Item label="Username">jasondoman</Descriptions.Item>
                                <Descriptions.Item label="Telephone">1 800 248 5737</Descriptions.Item>
                                <Descriptions.Item label="Location">San Jose, CA</Descriptions.Item>
                                <Descriptions.Item label="Gender">Male</Descriptions.Item>
                                <Descriptions.Item label="Address">85 Leeton Ridge St., Hastings, MN 55033</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={gridStyle}>
                            <RadarChart/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={gridStyle}>
                            <LineChart/>
                        </div>
                    </Col>
                    {/* <Col span={12}>
                        <div style={gridStyle}>
                            <BarChart/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={gridStyle}>
                            <LineChart/>
                        </div>
                    </Col> */}
                </Row>
            </div>
        )
    }
}

export default ProductPage; 