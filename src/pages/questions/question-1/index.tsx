import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Question } from '../../../types/questions';
import { image } from '../../../utils';
import mod from './index.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { setPoint } from '../../../redux/sliceCount';

const { Title } = Typography;

const questions: Question = {
  question: 'Центральная толщина сетчаки',
  options: [
    { text: '< 300 µm', img: image.q_1_1, points: 0 },
    { text: '300 - 500 µm', img: image.q_1_2, points: 1 },
    { text: '≥ 500', img: image.q_1_3, points: 2 },
  ],
};

export const Question1 = () => {
  const dispatch = useAppDispatch();

  const setSum = (point: number) => {
    dispatch(setPoint(point));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="main__title">
            <Title className="main__title" level={4}>
              {questions.question}
            </Title>
          </div>
          <div className="wrapper__links">
            {questions.options.map((option, index) => {
              return (
                <div className="wrapper__link" key={index}>
                  <img className={mod.img} src={option.img} alt="img" />
                  <Link onClick={() => setSum(option.points)} className="link" to="/q-2">
                    <span>{option.text}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
