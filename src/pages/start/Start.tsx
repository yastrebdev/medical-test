import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
// import mod from './Start.module.css';

const { Title } = Typography;

export const Start = () => {
  return (
    <div className="container">
      <Title style={{ marginBottom: 56, color: '#ffffff' }} level={4}>
        Пройдите тест
        <br /> на что-то
      </Title>
      <Link to='q-1'>
        <Button type="primary">Начать тест</Button>
      </Link>
    </div>
  );
};
