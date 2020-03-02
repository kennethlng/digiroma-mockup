import React from 'react';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const options = ["Name", "Gender", "Email"]

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <UserOutlined />
            1st menu item
      </Menu.Item>
        <Menu.Item key="2">
            <UserOutlined />
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            <UserOutlined />
            3rd item
      </Menu.Item>
    </Menu>
);

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const Filters = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            {options.map(option => (
                <div style={{ marginRight: 8}}>
                    <Dropdown overlay={menu}>
                        <Button>
                            {option} <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            ))}
        </div>
    )
}

export default Filters; 