import React from 'react';
import './foot.less';
import { 
  LeftCircleTwoTone,
  PlayCircleTwoTone,
  RightCircleTwoTone,
  BarsOutlined,
  SoundOutlined,
  PauseCircleTwoTone
} from '@ant-design/icons';
import { 
  Progress,
  Row,
  Col
} from 'antd';

class Foot extends React.Component {
  state = {
    payStart: false,
  };
  pay = () =>{
    this.setState({
      payStart : true
    });
  }
  pause =()=>{
    this.setState({
      payStart : false
    });
  }
  prevSong=()=>{
    
  }
  nextSong=()=>{
    
  }
  render(){
    let {payStart} = this.state;
    return (
      <div className="Foot">
        <Row>
          <Col span={4}>
            <LeftCircleTwoTone 
              className="prevSong" style={{ fontSize: '30px',color:'#fff' }} twoToneColor="#ffd944" 
              onClick={this.prevSong}
            />
            {
              payStart ? 
                <PauseCircleTwoTone  onClick={this.pause} style={{ fontSize: '34px',color:'#fff' }} twoToneColor="#ffd944" />
                :
                <PlayCircleTwoTone  onClick={this.pay} style={{ fontSize: '34px',color:'#fff' }} twoToneColor="#ffd944"  />
            }
            <RightCircleTwoTone 
              className="nextSong" style={{ fontSize: '30px',color:'#fff' }} twoToneColor="#ffd944" 
              onClick={this.nextSong}
            />
          </Col>
          <Col span={12}>
            111
          </Col>
          <Col span={6}>
            <SoundOutlined style={{ fontSize: '16px',color:'#666' }}/>  
            <span className="volume-span">
              
            </span>
            <BarsOutlined style={{ fontSize: '16px',color:'#666' }} />
          </Col>
        </Row>
      </div>
    )
  }
 
}

export default Foot;
