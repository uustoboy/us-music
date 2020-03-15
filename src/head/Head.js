import React from 'react';
import {
  BorderOutlined,
  CloseOutlined,
  MinusOutlined
} from '@ant-design/icons';
import './head.less';
import { Input } from 'antd';
const { Search } = Input;
function Head() {
  
  return (
    <div className="head">
      <span className="logo">
        <img className="logo-img" src={[require("../static/img/logo.png")]} />
        US Music
      </span>
      <Search
        placeholder="搜索音乐"
        onSearch={value => console.log(value)}
        style={{ width: 218,borderRadius: 30 }}
        className="search"
        onSearch={value => console.log(value)}
      />
      <div className="set-main">
        <MinusOutlined style={{ fontSize: '16px',color:'#fff' }} />
        <BorderOutlined style={{ fontSize: '16px',color:'#fff' }}/>
        <CloseOutlined style={{ fontSize: '20px',color:'#fff' }} />
      </div>
    </div>
  );
}

export default Head;
