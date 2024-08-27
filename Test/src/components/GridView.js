import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const { Meta } = Card;

const GridView = ({ onCardClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with any public API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Row gutter={16}>
      {data.map((item) => (
        <Col
          key={item.id}
          xs={24}      // Full-width on extra small screens
          sm={12}      // Half-width on small screens
          md={8}       // One-third width on medium screens
          lg={6}       // One-fourth width on large screens
          xl={6}       // One-fifth width on extra large screens
          style={{ marginTop: '20px' }}
        >
          <Card
            hoverable
            onClick={() => onCardClick(item)}
            cover={<img alt={item.name} src="https://via.placeholder.com/150" />}
            actions={[
              <span>Edit</span>,
              <span>Flag</span>,
              <span>Delete</span>,
            ]}
          >
            <Meta title={item.name} description={item.email} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GridView;
