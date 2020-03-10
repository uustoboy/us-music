import React from 'react';
import {
  BorderOutlined,
  CloseOutlined,
  MinusOutlined
} from '@ant-design/icons';
import './head.less';

function Head() {
  return (
    <div className="head">
      <span>
        <img  src={[require("../static/img/logo.png")]} />
        Us Music
      </span>

      
      <div>
      <MinusOutlined style={{ fontSize: '16px',color:'#fff' }} />
      <BorderOutlined style={{ fontSize: '16px',color:'#fff' }}/>
        <CloseOutlined style={{ fontSize: '20px',color:'#fff' }} />
      </div>
    </div>
  );
}

export default Head;
