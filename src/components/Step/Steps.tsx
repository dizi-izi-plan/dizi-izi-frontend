import Grid from '@mui/material/Grid';
import { Step } from '@/components/Step/Step';

const steps = [
  {
    title: '1 шаг',
    content: 'Нажмите кнопку «Начать» и пройдите простую регистрацию. ',
  },
  {
    title: '2 шаг',
    content:
      'В личном кабинете нажмите «создать проект» и выберите тип помещения.',
  },
  {
    title: '3 шаг',
    content: 'Введите параметры комнаты, отметьте окна и двери на плане.',
  },
  {
    title: '4 шаг',
    content: 'Выберите необходимую мебель или оставьте этот выбор нам.',
  },
  {
    title: '5 шаг',
    content:
      'Получите план расстановки мебели и план расположения электроточек.',
  },
  {
    title: '6 шаг',
    content:
      'Попробуйте новые комбинации расстановки мебели, скачайте план или отправьте его себе на почту. ',
  },
];

export const Steps = () => {
  return (
    <Grid container rowSpacing={9} columnSpacing={4}>
      {steps.map(({ title, content }) => (
        <Grid item xs={4} key={title}>
          <Step title={title} content={content} />
        </Grid>
      ))}
    </Grid>
  );
};
