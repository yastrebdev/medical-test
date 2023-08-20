import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Question } from '../../../types/questions';
import { image } from '../../../utils';
import mod from './index.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { setPoint } from '../../../redux/sliceCount';

const { Title } = Typography;

const questions: Question = {
  question: 'Состояние витреоретинального интерфейса',
  options: [
    { text: 'Отсутствие витреоретинальной адгезии', img: image.q_9_1, points: 0 },
    { text: 'Неполная отслойка ЗГМ', img: image.q_9_2, points: 1 },
    { text: 'Отслойка ЗГМ', img: image.q_9_3, points: 2 },
    { text: 'Витреомакулярная тракция', img: image.q_9_4, points: 3 },
    { text: 'Эпиретинальная мембрана', img: image.q_9_5, points: 4 },
  ],
};

export const Question9 = () => {
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
                <div className="wrapper__link">
                  <img className={mod.img} src={option.img} alt="img" />
                  <Link
                    onClick={() => setSum(option.points)}
                    className="link"
                    key={index}
                    to="/result">
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
