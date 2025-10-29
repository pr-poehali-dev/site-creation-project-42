import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const predefinedResponses: { [key: string]: string } = {
  'привет': 'Привет! 👋 Я ИИ-помощник блога. Могу рассказать об искусственном интеллекте, его истории и применении. Задай мне вопрос!',
  'что такое ии': 'Искусственный интеллект (ИИ) — это способность компьютерных систем выполнять задачи, требующие человеческого интеллекта: понимание языка, распознавание образов, принятие решений. Современный ИИ основан на глубоких нейронных сетях и обучается на огромных массивах данных.',
  'gpt': 'GPT (Generative Pre-trained Transformer) — это семейство больших языковых моделей от OpenAI. GPT-4 — самая продвинутая версия с ~1.7 триллиона параметров, способная генерировать текст, код, анализировать изображения и решать сложные задачи на уровне человека.',
  'claude': 'Claude — это семейство ИИ-моделей от Anthropic, созданных с акцентом на безопасность и полезность. Claude 3.5 Sonnet может обрабатывать до 200K токенов контекста, отлично понимает нюансы и показывает один из лучших результатов в программировании (92% на HumanEval).',
  'история': 'История ИИ началась в 1950-х с теста Тьюринга. Ключевые вехи: 1956 — термин "ИИ", 1997 — Deep Blue побеждает Каспарова, 2012 — революция глубокого обучения, 2017 — архитектура Transformer, 2022 — ChatGPT собрал 100M пользователей за 2 месяца.',
  'будущее': 'Будущее ИИ: AGI (искусственный общий интеллект) ожидается к 2027-2035 годам, автономные агенты будут выполнять сложные задачи самостоятельно, квантовый ИИ решит невозможные сегодня задачи, интерфейсы мозг-компьютер объединят людей и ИИ. Но есть и риски: потеря работ, дипфейки, этические вопросы.',
  'применение': 'ИИ применяется везде: 💼 Бизнес (автоматизация, анализ данных), 💻 Программирование (Copilot, автодополнение), 🎨 Креатив (Midjourney, генерация изображений), 🏥 Медицина (диагностика, разработка лекарств), 🎓 Образование (персональные репетиторы), 🚗 Транспорт (автопилот).',
  'как начать': 'Начни с ChatGPT (chat.openai.com) или Claude (claude.ai) — попробуй писать тексты, задавать вопросы, мозговой штурм. Для программистов — GitHub Copilot. Для креатива — Midjourney. Изучи промпт-инжиниринг для эффективных запросов!',
  'нейросети': 'Нейронные сети имитируют работу мозга: искусственные нейроны соединены связями с весами. Обучаются на примерах, подстраивая веса для минимизации ошибок. Глубокое обучение использует десятки-сотни слоёв для извлечения абстрактных признаков.',
  'transformer': 'Transformer — это архитектура нейросети с механизмом внимания (attention), представленная Google в 2017. Модель "обращает внимание" на важные части текста, обрабатывает данные параллельно. Основа всех современных LLM: GPT, BERT, Claude, Gemini.',
  'риски': 'Риски ИИ: 🔴 Потеря рабочих мест (40-60% задач автоматизируются), 🔴 Дипфейки и дезинформация, 🔴 Зависимость от технологий, 🔴 Этические вопросы контроля ИИ, 🔴 Концентрация власти у компаний-разработчиков. Важно развивать ИИ ответственно.',
  'alphago': 'AlphaGo — это программа от DeepMind, которая в 2016 победила чемпиона мира Ли Седоля в го (игра сложнее шахмат). Использовала reinforcement learning и нейросети. Прорыв показал, что ИИ может превзойти человека в сложнейших задачах.',
  'помощь': 'Я могу ответить на вопросы об ИИ! Попробуй спросить: "что такое ии", "gpt", "claude", "история", "будущее", "применение", "как начать", "нейросети", "transformer", "риски", "alphago". Или просто задай свой вопрос!',
};

const quickQuestions = [
  'Что такое ИИ?',
  'Расскажи про GPT',
  'История ИИ',
  'Как начать?',
  'Будущее ИИ',
  'Применение ИИ'
];

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Привет! 👋 Я ИИ-помощник этого блога. Задай мне вопрос об искусственном интеллекте, и я с радостью отвечу!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return 'Интересный вопрос! 🤔 Я специализируюсь на вопросах об искусственном интеллекте. Попробуй спросить про GPT, Claude, историю ИИ, нейросети или будущее технологий. Напиши "помощь", чтобы увидеть все темы!';
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseContent = findResponse(textToSend);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold gradient-text mb-4">ИИ-Чат Помощник</h2>
        <p className="text-lg text-muted-foreground">
          Задай вопрос об искусственном интеллекте и получи мгновенный ответ
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <span className="text-sm font-medium text-muted-foreground flex items-center">
          Быстрые вопросы:
        </span>
        {quickQuestions.map((question, index) => (
          <Badge
            key={index}
            variant="outline"
            className="cursor-pointer hover-scale px-3 py-2"
            onClick={() => handleQuickQuestion(question)}
          >
            {question}
          </Badge>
        ))}
      </div>

      <Card className="border-2 border-primary/30 h-[600px] flex flex-col">
        <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Bot" size={24} className="text-primary" />
            Чат с ИИ
            <Badge className="ml-auto gradient-bg text-white border-0">Онлайн</Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Bot" size={16} className="text-white" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-primary to-secondary text-white'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={16} className="text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Bot" size={16} className="text-white" />
              </div>
              <div className="bg-muted rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 border-t bg-muted/30">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Задай вопрос об ИИ..."
              className="flex-1"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="gradient-bg text-white border-0 hover:opacity-90"
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            💡 Совет: попробуй спросить про GPT, Claude, историю ИИ или будущее технологий
          </p>
        </div>
      </Card>

      <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon name="Info" size={20} className="text-accent" />
            О чат-боте
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>🤖 Это демо-версия ИИ-чата с предопределёнными ответами</p>
          <p>💬 Бот понимает вопросы об искусственном интеллекте, GPT, Claude, нейросетях</p>
          <p>⚡ Ответы мгновенные — реальные ИИ-модели требуют API-интеграции</p>
          <p>🚀 Для полноценного чат-бота можно интегрировать OpenAI API или Claude API</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;
