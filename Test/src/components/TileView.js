import React from 'react';
import { Modal, Card, Button } from 'antd';

const { Meta } = Card;

const TileView = ({ visible, onClose, data }) => (
  <Modal visible={visible} onCancel={onClose} footer={null} width={800}>
    <Card cover={<img alt={data.name} src="https://via.placeholder.com/400" />}>
      <Meta title={data.name} description={data.email} />
      <p>{data.company.catchPhrase}</p>
      <Button type="primary">Do Something</Button>
    </Card>
  </Modal>
);

export default TileView;
