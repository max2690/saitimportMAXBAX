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

## Развёртывание на Vercel
1. Импортируйте репозиторий в [Vercel](https://vercel.com) (Import Git Repository).
2. Переменные окружения (опционально для старта):
   - `NEXT_PUBLIC_SITE_URL` — полный URL сайта (например `https://ваш-проект.vercel.app`) для SEO и ссылок.
   - `BITRIX_WEBHOOK_URL` — чтобы заявки уходили в Bitrix24; если не задан, форма всё равно вернёт «Заявка отправлена» (заглушка).
   - `OPENAI_API_KEY` и `OPENAI_MODEL` — для ИИ-чата; если не заданы, чат работает заглушкой (одно стандартное сообщение).
3. Deploy — сборка `next build` уже проверена.

Docker/Nginx — при необходимости.

## Медиафайлы (если с репозитория не всё подтянулось)
В GitHub могли не попасть тяжёлые файлы. Положите сами в проект:
- **Херо:** `public/video/hero.mp4` и по желанию `public/hero/hero-main-1920.jpg` (постер).
- **Виды доставки:** `public/video/air.mp4`, `rail.mp4`, `road.mp4`, `sea.mp4` (часть уже может быть в репе).
Подробный список — в [PUBLIC_ASSETS.md](./PUBLIC_ASSETS.md).

## Где править контент
- Блоки — `src/components/*`
- SEO — `src/app/layout.tsx` + `src/lib/seo.ts`
- Видео — `public/video/*`
- Логотип — `public/logo.svg`

## Интеграции (включение после деплоя)
- **Bitrix24**: задать `BITRIX_WEBHOOK_URL` в Vercel (или в `.env.local`) — иначе заявки только в логах (заглушка).
- **OpenAI**: в `src/app/api/chat/route.ts` выставить `USE_STUB = false` и раскомментировать вызов API; задать `OPENAI_API_KEY` и `OPENAI_MODEL` в Vercel.
