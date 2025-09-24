# MaxBax Import — сайт
Тёмный премиальный ленд под импорт из Китая: блоки, анимации, SEO, чат‑виджет с ИИ, заявка в Bitrix24.

## Быстрый старт
```bash
# 1) Установить зависимости
npm i

# 2) Создать .env.local
cp .env.example .env.local
# Заполнить OPENAI_API_KEY, BITRIX_WEBHOOK_URL, NEXT_PUBLIC_SITE_URL

# 3) Запуск dev
npm run dev
```

## Развёртывание
- Vercel (рекомендовано) — просто подключите репозиторий.
- Docker/Nginx — при необходимости.

## Где править контент
- Блоки — `src/components/*`
- SEO — `src/app/layout.tsx` + `src/lib/seo.ts`
- Видео — `public/video/*`
- Логотип — `public/logo.svg`

## Интеграции
- **Bitrix24**: `.env.local` → `BITRIX_WEBHOOK_URL`
- **OpenAI**: `.env.local` → `OPENAI_API_KEY` и `OPENAI_MODEL`
