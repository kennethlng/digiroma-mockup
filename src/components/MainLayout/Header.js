import React from 'react'; 
import { Layout, Menu, Button, Avatar } from 'antd';
import * as ROUTES from '../../constants/routes'; 
import { withRouter } from 'react-router-dom'; 
import { AreaChartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        current: '',
    };

    handleMenuClick = e => {
        this.setState({
            current: e.key,
        });
    };

    handleLogoClick = () => {
        this.setState({ current: '' })
        this.props.history.push(ROUTES.HOME)
    }

    render() {
        return (
            <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <a className="logo" onClick={this.handleLogoClick}/>
                <div style={{ float: 'right'}}>
                    <Button shape="circle" icon={<UserOutlined />}/>       
                </div>
                <Menu 
                    onClick={this.handleMenuClick} 
                    selectedKeys={[this.state.current]} 
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                    theme="dark"
                >
                    <Menu.Item key="mail" onClick={() => this.props.history.push(ROUTES.PRODUCTS)}>
                        <UnorderedListOutlined />
                        Products
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <AreaChartOutlined />
                                Analysis
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>    
            </Layout.Header>
        )
    }
}

export default withRouter(Header); 