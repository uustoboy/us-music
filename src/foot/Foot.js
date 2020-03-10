import React from 'react';
import './foot.less';
import { 
  LeftCircleTwoTone,
  PlayCircleTwoTone,
  RightCircleTwoTone,
  BarsOutlined,
  SoundOutlined
} from '@ant-design/icons';
import { Progress } from 'antd';

function Foot() {
  return (
    <div className="Foot">
    <LeftCircleTwoTone style={{ fontSize: '30px',color:'#fff' }} twoToneColor="#ffd944" />
      <PlayCircleTwoTone  style={{ fontSize: '34px',color:'#fff' }} twoToneColor="#ffd944"  />
      <RightCircleTwoTone style={{ fontSize: '30px',color:'#fff' }} twoToneColor="#ffd944" />
      <SoundOutlined style={{ fontSize: '16px',color:'#666' }}/>
      <span className="volume-span">
        <Progress percent={50} />
      </span>
      
      <BarsOutlined style={{ fontSize: '16px',color:'#666' }} />
    </div>
  );
}

export default Foot;
