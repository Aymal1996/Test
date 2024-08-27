import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Button style={{color: "#fff"}} type="text" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer title="Menu" placement="left" onClose={onClose} visible={visible}>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="1">Menu Item 1</Menu.Item>
          <Menu.Item key="2">Menu Item 2</Menu.Item>
          <Menu.Item key="3">Menu Item 3</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
