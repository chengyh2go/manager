import React from "react";
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less'

const { SubMenu } = Menu; //等价于const SubMenu = Menu.SubMenu

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>Test MS</h1>
                </div>
                <Menu theme="dark">
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="2">Option 3</Menu.Item>
                        <Menu.Item key="2">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }

}