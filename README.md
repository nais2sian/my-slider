# My Slider (Next.js + Tailwind)

Веб-приложение для демонстрации слайдера и адаптивного интерфейса на **Next.js** и **Tailwind CSS**.
Проект задеплоен на [Vercel](https://my-slider-beta.vercel.app/).

## Технологии
- **Next.js 13+ (App Router)**
- **Tailwind CSS**
- **TypeScript**

## Установка и запуск
1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/username/my-slider.git
   cd my-slider

2. **Установите зависимости**:
npm install

3. **Запустите в режиме разработки**:
npm run dev
Проект будет доступен на http://localhost:3000.


### Как работает слайдер
- ServerSlider (Server Component) генерирует HTML карточек на сервере.
- SliderClient (Client Component) управляет состоянием, анимацией и кнопками «Вперёд/Назад».
- Пагинация отображается на мобильных (md:hidden), а стрелки — на больших экранах (hidden md:flex).
