export interface SlideItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

export const slidesData: SlideItem[] = [
  {
    id: 1,
    title: 'Анализ текущего состояния карьеры',
    imageUrl: '/images/1.svg',
    description: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
  },
  {
    id: 2,
    title: 'Поиск работы',
    imageUrl: '/images/2.svg',
    description: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
  },
  {
    id: 3,
    title: 'Сопроводительные письма и резюме',
    imageUrl: '/images/3.svg',
    description: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
  },
  {
    id: 4,
    title: 'Тренинг по презентации личного бренда',
    imageUrl: '/images/4.svg',
    description: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
  },
  {
    id: 5,
    title: 'Подготовка к собеседованию',
    imageUrl: '/images/5.svg',
    description: 'Научим говорить о себе кратко, ярко и профессионально.',
  },
  {
    id: 6,
    title: 'Рекомендация по базе STEMPS Career',
    imageUrl: '/images/6.svg',
    description: 'Поможем встретиться соискателю и работодателю.',
  },
];
