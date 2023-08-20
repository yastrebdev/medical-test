import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Question } from '../../../types/questions';
import { image } from '../../../utils';
import mod from './index.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { setPoint } from '../../../redux/sliceCount';

const { Title } = Typography;

const questions: Question = {
  question: 'Состояние эллипсоидной зоны и наружной пограничной мембраны',
  options: [
    { text: 'Деструкции нет', points: 0 },
    { text: 'Ограниченное нарушение целостности < 200 µm', points: 1 },
    { text: 'Ограниченное нарушение целостности > 200 µm', points: 2 },
  ],
};

export const Question4 = () => {
  const dispatch = useAppDispatch()

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
            <div>
              <img className={mod.img} src={image.q_4} alt="img" />
            </div>
            {questions.options.map((option, index) => {
              return (
                <div className="wrapper__link">
                  <Link onClick={() => setSum(option.points)} className="link" key={index} to="/q-5">
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
