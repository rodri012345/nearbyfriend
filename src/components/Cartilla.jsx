import { Card, Button, Typography } from 'antd';


const Cartilla = () => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="user" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      
    >
        <div style={{textAlign:'center'}}>
        <h2>Lorena Valdivia</h2>
        <h5>Cochabamba</h5>
        <Button type="primary">Ver más info</Button>
        </div>  
    </Card>
  );
};

export default Cartilla;
