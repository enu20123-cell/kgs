# Koktal Garden School — институциональный сайт

Многостраничный сайт частной начальной школы «Koktal Garden School» (г. Астана) на **Astro 5** + **Tailwind CSS**.

## Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Запустить дев-сервер (http://localhost:4321)
npm run dev

# 3. Собрать продакшен-версию
npm run build

# 4. Предпросмотр собранной версии
npm run preview
```

> Требуется Node.js 18+ (рекомендуется 20+).

## Структура проекта

```
koktal-garden-school/
├── astro.config.mjs          # конфигурация Astro + интеграция Tailwind
├── tailwind.config.mjs       # дизайн-система (цвета, шрифты, тени)
├── public/
│   └── favicon.svg
└── src/
    ├── data/
    │   └── schoolData.json    # единый источник данных (CMS-подход)
    ├── styles/
    │   └── global.css         # директивы Tailwind, шрифты, базовые стили
    ├── components/
    │   ├── BaseLayout.astro       # мастер-шаблон (<head>, Navbar, slot, Footer)
    │   ├── Navbar.astro           # липкая шапка: мини-бар + основное меню
    │   ├── HeroSlider.astro       # геро-блок с ротацией слайдов
    │   ├── FeatureGrid.astro      # 3 опоры (стандарты / ценности / забота)
    │   ├── ClubsShowcase.astro    # сетка кружков и секций
    │   ├── AdmissionsPipeline.astro # 3 шага поступления
    │   ├── PageHeader.astro       # баннер внутренних страниц
    │   ├── Footer.astro           # многоколоночный футер
    │   └── Logo.astro             # SVG-герб
    └── pages/
        ├── index.astro        # Главная
        ├── about.astro        # О школе
        ├── admissions.astro   # Поступающим (тарифы + форма)
        └── contact.astro      # Контакты (карта)
```

## Дизайн-система

| Токен            | Значение  | Назначение                |
| ---------------- | --------- | ------------------------- |
| `forest-green`   | `#0D4428` | основной цвет             |
| `gold-accent`    | `#D4AF37` | акцент                    |
| `off-white`      | `#F8F9FA` | фон                       |
| `slate-gray`     | `#334155` | основной текст            |
| Шрифт заголовков | `Lora`    | академический serif (Cyrillic) |
| Шрифт текста     | `Inter`   | чистый sans-serif         |

## Данные

Весь контент управляется из одного файла `src/data/schoolData.json` — компоненты
динамически проходят по массивам (`pricing`, `clubs`, `academics`, `admissionsSteps`
и т.д.). Чтобы изменить контакты, цены или список кружков, отредактируйте только JSON.

## Заметки

- Форма заявки на `/admissions` использует демонстрационный обработчик (вывод в консоль).
  Подключите свой backend / CRM / e-mail endpoint в `<script>` внизу `admissions.astro`.
- Карта на `/contact` встроена через Google Maps embed по адресу из `schoolData.json`.
- Переключатель языка (KZ | RU | EN) визуально готов; для полноценной локализации
  подключите [Astro i18n](https://docs.astro.build/en/guides/internationalization/).
