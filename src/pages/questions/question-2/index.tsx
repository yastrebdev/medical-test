import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Question } from '../../../types/questions';
import { image } from '../../../utils';
import mod from './index.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { setPoint } from '../../../redux/sliceCount';

const { Title } = Typography;

const questions: Question = {
  question: 'Тип отека',
  options: [
    { text: 'Диффузный отек', img: image.q_2_1, points: 1 },
    { text: 'Кистозный отек', img: image.q_2_2, points: 2 },
    { text: 'Отслойка нейроэпителия сетчатки', img: image.q_2_3, points: 3 },
    { text: 'Смешанныый', img: image.q_2_4, points: 3 },
  ],
};

export const Question2 = () => {
  const dispatch = useAppDispatch()

  const setSum = (point: number) => {
    dispatch(setPoint(point));
  };

  return (
    <div className="container">
      <div className='wrapper'>
        <div className="card">
          <div className="main__title">
            <Title className="main__title" level={4}>
              {questions.question}
            </Title>
          </div>
          <div className="wrapper__links">
            {questions.options.map((option, index) => {
              return (
                <div className="wrapper__link">
                  <img className={mod.img} src={option.img} alt="img" />
                  <Link onClick={() => setSum(option.points)} className="link" key={index} to="/q-3">
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
