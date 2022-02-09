import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Hero() {
  return (
    <div className="hero">
      <h2>Change starts here</h2>
      <Input
        size="large"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        suffix={<SearchOutlined />}
      />
    </div>
  );
}

export default Hero;
