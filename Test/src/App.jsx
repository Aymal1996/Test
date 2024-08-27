import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import './styles/App.css'

const { Header, Content } = Layout;

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <Layout>
      <Header>
        <HamburgerMenu />
        <HorizontalMenu />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#595959cc', padding: 24, minHeight: 280, borderRadius: '10px'}}>
          <GridView onCardClick={handleCardClick} />
          {selectedItem && (
            <TileView
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              data={selectedItem}
            />
          )}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
