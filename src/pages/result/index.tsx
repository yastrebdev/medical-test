import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import mod from './index.module.css';
import { image } from '../../utils';

const { Title } = Typography;

export const Result = () => {
  const { acc } = useAppSelector((state: RootState) => state.point);

  return (
    <div className="container">
      <div className="wrapper">
        <div style={{ marginBottom: 40 }} className="card">
          <div>
            <Title style={{ marginBottom: 40, marginTop: 0 }} level={4}>
              {acc <= 4
                ? 'Ранний ДМО'
                : acc >= 5 && acc <= 10
                ? 'Прогрессирующий ДМО'
                : acc >= 11 && acc <= 15
                ? 'Тяжелый ДМО'
                : acc >= 16
                ? 'Атрофическая макулопатия'
                : 'Что-то пошло не так, попробуйте снова'}
            </Title>
            <img
              className={mod.img}
              src={
                acc <= 4
                  ? image.r1
                  : acc >= 5 && acc <= 10
                  ? image.r2
                  : acc >= 11 && acc <= 15
                  ? image.r3
                  : acc >= 16
                  ? image.r4
                  : ''
              }
              alt="img"
            />
          </div>
        </div>
        <Link className="link" to="/">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};
