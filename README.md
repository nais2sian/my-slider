# My Slider (Next.js + Tailwind)

Веб-приложение для демонстрации слайдера и адаптивного интерфейса на **Next.js** и **Tailwind CSS**.
Проект также легко задеплоен на [Vercel]([https://vercel.com/](https://my-slider-beta.vercel.app/)).

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


## Структура файлов
my-slider/
  └─ src/
     └─ app/
        ├─ about/
        ├─ components/
        │   ├─ Header.tsx
        │   ├─ Pagination.tsx
        │   ├─ ServerSlider.tsx
        │   ├─ SliderClient.tsx
        │   └─ Slider.tsx
        ├─ courses/
        ├─ library/
        ├─ login/
        ├─ layout.tsx
        ├─ not-found.tsx
        ├─ page.tsx
     ├─ data/
        └─ slides.ts
     ├─ globals.css
     ├─ tailwind.config.js
     └─ tsconfig.json

- components/Slider.tsx — объединяет ServerSlider (карточки на сервере) и SliderClient (логика переключений).
- layout.tsx — базовый лейаут Next.js (App Router).
- data/slides.ts — массив слайдов и интерфейсы.

### Как работает слайдер
- ServerSlider (Server Component) генерирует HTML карточек на сервере.
- SliderClient (Client Component) управляет состоянием, анимацией и кнопками «Вперёд/Назад».
- Пагинация отображается на мобильных (md:hidden), а стрелки — на больших экранах (hidden md:flex).
