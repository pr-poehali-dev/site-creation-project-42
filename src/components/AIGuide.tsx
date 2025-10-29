import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AIGuide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Полный гайд по искусственному интеллекту</h2>
        <p className="text-lg text-muted-foreground">
          От первых нейросетей до современных LLM-моделей
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem value="item-1" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="History" size={24} className="text-primary" />
              История развития ИИ: от 1950-х до наших дней
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">1950-1960</Badge>
                <div>
                  <p className="font-semibold">Рождение ИИ</p>
                  <p className="text-muted-foreground">Алан Тьюринг предложил тест Тьюринга (1950). Термин "искусственный интеллект" появился на конференции в Дартмуте (1956). Первые программы: Logic Theorist и General Problem Solver.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">1980-1990</Badge>
                <div>
                  <p className="font-semibold">Экспертные системы</p>
                  <p className="text-muted-foreground">Развитие экспертных систем в медицине и бизнесе. Первая "зима ИИ" из-за завышенных ожиданий. Появление обратного распространения ошибки для нейросетей.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">1997</Badge>
                <div>
                  <p className="font-semibold">Deep Blue побеждает Каспарова</p>
                  <p className="text-muted-foreground">Компьютер IBM впервые победил чемпиона мира по шахматам. Прорыв в вычислительных возможностях.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">2012</Badge>
                <div>
                  <p className="font-semibold">Революция глубокого обучения</p>
                  <p className="text-muted-foreground">AlexNet выигрывает ImageNet с огромным отрывом. Начало эры глубоких нейросетей благодаря GPU и большим данным.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">2016</Badge>
                <div>
                  <p className="font-semibold">AlphaGo побеждает Ли Седоля</p>
                  <p className="text-muted-foreground">ИИ от DeepMind победил чемпиона мира по го. Использование reinforcement learning и нейросетей.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">2017</Badge>
                <div>
                  <p className="font-semibold">Появление Transformer</p>
                  <p className="text-muted-foreground">Google представила архитектуру Transformer в статье "Attention is All You Need". Основа для всех современных LLM.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">2020-2025</Badge>
                <div>
                  <p className="font-semibold">Эра больших языковых моделей</p>
                  <p className="text-muted-foreground">GPT-3, GPT-4, Claude, Gemini, LLaMA. ИИ становится доступным каждому через ChatGPT и другие интерфейсы.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Brain" size={24} className="text-secondary" />
              Как работает современный ИИ
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Network" size={20} className="text-primary" />
                  Нейронные сети
                </p>
                <p className="text-sm text-muted-foreground">
                  Имитируют работу мозга: искусственные "нейроны" соединены связями с весами. 
                  Обучаются на примерах, подстраивая веса для минимизации ошибок.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Layers" size={20} className="text-primary" />
                  Глубокое обучение (Deep Learning)
                </p>
                <p className="text-sm text-muted-foreground">
                  Использует многослойные нейросети (десятки и сотни слоёв). Каждый слой извлекает всё более абстрактные признаки. 
                  Эффективно для изображений, текста, звука.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  Transformer и механизм внимания (Attention)
                </p>
                <p className="text-sm text-muted-foreground">
                  Модель "обращает внимание" на важные части входных данных. Параллельная обработка текста (в отличие от RNN). 
                  Основа GPT, BERT, Claude и всех современных LLM.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  Предобучение и дообучение (Pre-training & Fine-tuning)
                </p>
                <p className="text-sm text-muted-foreground">
                  Сначала модель учится на огромных объёмах текста (интернет, книги). 
                  Затем дообучается на специализированных данных (код, медицина, юриспруденция).
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Zap" size={20} className="text-primary" />
                  Обучение с подкреплением (RLHF)
                </p>
                <p className="text-sm text-muted-foreground">
                  Reinforcement Learning from Human Feedback. Люди оценивают ответы модели, и она учится давать более полезные и безопасные ответы.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Cpu" size={24} className="text-accent" />
              Основные модели ИИ в 2025
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    GPT-4o и GPT-4 Turbo (OpenAI)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Параметры:</strong> ~1.7 триллиона (GPT-4)</p>
                  <p className="text-sm"><strong>Возможности:</strong> Текст, изображения, код, анализ документов, веб-поиск</p>
                  <p className="text-sm"><strong>Особенности:</strong> Лучший для сложных задач, рассуждений, креатива. GPT-4o — быстрая мультимодальная версия</p>
                  <Badge className="gradient-bg text-white border-0">Платно + API</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🧠</span>
                    Claude 3.5 Sonnet (Anthropic)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Параметры:</strong> Не раскрываются</p>
                  <p className="text-sm"><strong>Возможности:</strong> Длинный контекст (200K токенов), безопасность, рассуждения</p>
                  <p className="text-sm"><strong>Особенности:</strong> Лучший баланс качества и безопасности. Отлично понимает контекст и нюансы</p>
                  <Badge className="gradient-bg text-white border-0">Бесплатно + Pro</Badge>
                </CardContent>
              </Card>

              <Card className="border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💎</span>
                    Gemini Ultra и Pro (Google)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Параметры:</strong> Не раскрываются</p>
                  <p className="text-sm"><strong>Возможности:</strong> Мультимодальность (текст, изображения, видео, аудио), интеграция с Google</p>
                  <p className="text-sm"><strong>Особенности:</strong> Длинный контекст (до 1M токенов в Ultra), встроен в Google Workspace</p>
                  <Badge className="gradient-bg text-white border-0">Бесплатно + Advanced</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🦙</span>
                    LLaMA 3 (Meta)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Параметры:</strong> 8B, 70B, 405B параметров</p>
                  <p className="text-sm"><strong>Возможности:</strong> Open-source, можно запускать локально</p>
                  <p className="text-sm"><strong>Особенности:</strong> Бесплатная, настраиваемая модель для разработчиков</p>
                  <Badge variant="secondary">Open Source</Badge>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    Midjourney, DALL-E 3, Stable Diffusion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Тип:</strong> Генерация изображений</p>
                  <p className="text-sm"><strong>Возможности:</strong> Создание фотореалистичных изображений из текста</p>
                  <p className="text-sm"><strong>Особенности:</strong> Midjourney — лучшее качество, DALL-E — интеграция с ChatGPT, SD — open-source</p>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Lightbulb" size={24} className="text-primary" />
              Реальные применения ИИ сегодня
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">💼</span>
                  Бизнес и продуктивность
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Автоматизация email и документов</li>
                  <li>Анализ данных и отчётов</li>
                  <li>Чат-боты поддержки клиентов</li>
                  <li>Персонализация маркетинга</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">💻</span>
                  Программирование
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>GitHub Copilot — автодополнение кода</li>
                  <li>Cursor — ИИ-редактор кода</li>
                  <li>Отладка и рефакторинг</li>
                  <li>Генерация документации</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🎨</span>
                  Креатив и дизайн
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Генерация изображений (Midjourney, DALL-E)</li>
                  <li>Создание видео (Runway, Pika)</li>
                  <li>Музыка и звуковые эффекты (Suno, Udio)</li>
                  <li>3D-моделирование</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🏥</span>
                  Медицина и наука
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Диагностика по снимкам</li>
                  <li>Разработка лекарств (AlphaFold)</li>
                  <li>Персонализированная медицина</li>
                  <li>Анализ геномных данных</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg border border-accent/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🎓</span>
                  Образование
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Персональные репетиторы (Khan Academy)</li>
                  <li>Автоматическая проверка работ</li>
                  <li>Адаптивное обучение</li>
                  <li>Перевод и изучение языков</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg border border-secondary/20">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🚗</span>
                  Транспорт и логистика
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Автономное вождение (Tesla, Waymo)</li>
                  <li>Оптимизация маршрутов</li>
                  <li>Предсказание спроса</li>
                  <li>Управление складами</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="TrendingUp" size={24} className="text-secondary" />
              Прогресс ИИ: метрики и достижения
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                <p className="font-bold text-accent mb-2">📈 Рост производительности</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• GPT-2 (2019): 1.5B параметров → GPT-4 (2023): ~1.7T параметров = <strong>рост в 1000+ раз</strong></li>
                  <li>• Стоимость обучения GPT-4: ~$100 миллионов</li>
                  <li>• Качество генерации: от бессмысленных фраз до текстов уровня человека</li>
                </ul>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="font-bold text-primary mb-2">🎯 Бенчмарки и тесты</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• <strong>MMLU</strong> (знания): GPT-4 — 86.4%, человек — ~90%</li>
                  <li>• <strong>HumanEval</strong> (программирование): GPT-4 — 67%, Claude 3.5 — 92%</li>
                  <li>• <strong>Экзамены</strong>: GPT-4 сдает SAT, Bar exam на уровне топ-10% людей</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="font-bold text-secondary mb-2">⚡ Скорость эволюции</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• 2020: GPT-3 — революция в генерации текста</li>
                  <li>• 2022: ChatGPT — 100M пользователей за 2 месяца (быстрее всех в истории)</li>
                  <li>• 2023: Мультимодальность — текст + изображения + код в одной модели</li>
                  <li>• 2024-2025: Автономные агенты, длинный контекст (1M+ токенов), видео-генерация</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Rocket" size={24} className="text-accent" />
              Будущее ИИ: что нас ждёт
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-primary/30">
                <p className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  AGI — Искусственный общий интеллект
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  ИИ, который может выполнять любую интеллектуальную задачу человека. OpenAI, DeepMind и другие работают над этой целью.
                </p>
                <p className="text-sm"><strong>Прогноз:</strong> 2027-2035 (по оценкам экспертов)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">🧑‍💼 Автономные агенты</p>
                  <p className="text-sm text-muted-foreground">ИИ-помощники, которые могут самостоятельно выполнять сложные задачи: бронировать билеты, писать код, вести переговоры</p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">🔬 Научные прорывы</p>
                  <p className="text-sm text-muted-foreground">ИИ ускоряет открытия в физике, биологии, химии. AlphaFold уже предсказал структуру всех известных белков</p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">🎬 Полноценное видео</p>
                  <p className="text-sm text-muted-foreground">Генерация длинных видео, фильмов, игр из текстового описания. Sora от OpenAI — первый шаг</p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">🧠 Интерфейсы мозг-компьютер</p>
                  <p className="text-sm text-muted-foreground">Neuralink и аналоги + ИИ = прямое подключение сознания к искусственному интеллекту</p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">💼 Трансформация работы</p>
                  <p className="text-sm text-muted-foreground">40-60% задач будут автоматизированы. Новые профессии: prompt engineers, AI trainers, этики ИИ</p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">🌍 Квантовый ИИ</p>
                  <p className="text-sm text-muted-foreground">Объединение квантовых компьютеров и ИИ для решения невозможных сегодня задач</p>
                </div>
              </div>

              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30 mt-4">
                <p className="font-bold text-destructive mb-2">⚠️ Риски и вызовы</p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Потеря рабочих мест в некоторых сферах</li>
                  <li>Дипфейки и дезинформация</li>
                  <li>Зависимость от технологий</li>
                  <li>Этические вопросы и контроль ИИ</li>
                  <li>Концентрация власти у компаний-разработчиков</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={24} className="text-primary" />
              Как начать использовать ИИ прямо сейчас
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold mb-2">1️⃣ Попробуйте ChatGPT или Claude</p>
                <p className="text-sm text-muted-foreground">Начните с простых задач: написание текстов, ответы на вопросы, мозговой штурм</p>
                <Badge className="mt-2">chat.openai.com</Badge>
                <Badge className="mt-2 ml-2">claude.ai</Badge>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="font-semibold mb-2">2️⃣ Для программистов: GitHub Copilot</p>
                <p className="text-sm text-muted-foreground">Автодополнение кода прямо в VS Code. Экономия до 40% времени</p>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-semibold mb-2">3️⃣ Для креатива: Midjourney</p>
                <p className="text-sm text-muted-foreground">Генерация изображений через Discord. Начните с /imagine prompt</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold mb-2">4️⃣ Изучите промпт-инжиниринг</p>
                <p className="text-sm text-muted-foreground">Научитесь писать эффективные запросы. Курсы от OpenAI, Anthropic, DeepLearning.AI</p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="font-semibold mb-2">5️⃣ Автоматизируйте рутину</p>
                <p className="text-sm text-muted-foreground">Zapier + ChatGPT API для автоматизации email, отчётов, соцсетей</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mt-8 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Icon name="Star" size={32} className="text-accent" />
            Ключевые выводы
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-muted-foreground">
            <p>✨ ИИ прошёл путь от теоретических концепций (1950-е) до практических инструментов в каждом смартфоне (2020-е)</p>
            <p>🚀 Современные LLM (GPT-4, Claude, Gemini) достигли уровня человека во многих задачах</p>
            <p>💡 ИИ уже применяется в медицине, образовании, бизнесе, науке, креативе</p>
            <p>📈 Прогресс ускоряется: от GPT-3 до GPT-4 — 3 года, от GPT-4 до AGI — предположительно 3-10 лет</p>
            <p>🌍 Будущее: автономные агенты, AGI, интеграция в каждый аспект жизни</p>
            <p className="font-bold text-primary">⚡ Совет: начните использовать ИИ сегодня, чтобы не отстать завтра</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIGuide;
