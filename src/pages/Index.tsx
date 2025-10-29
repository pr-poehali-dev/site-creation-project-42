import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import PhoneOptimizationGuide from '@/components/PhoneOptimizationGuide';
import AIGuide from '@/components/AIGuide';
import AIChatbot from '@/components/AIChatbot';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: "ИИ-Чат: Поговори с искусственным интеллектом",
    description: "Интерактивный чат-бот с ИИ. Задай вопрос об искусственном интеллекте и получи мгновенный ответ",
    category: "Интерактив",
    tags: ["Чат", "ИИ", "Интерактив", "Бот"],
    date: "29 октября 2025",
    readTime: "∞",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
  },
  {
    id: 2,
    title: "Искусственный интеллект: Полный гайд по развитию ИИ в 2025",
    description: "От истоков до GPT-4o и Claude: как развивался ИИ, современные возможности и будущее технологий умного интеллекта",
    category: "Искусственный интеллект",
    tags: ["ИИ", "GPT", "Машинное обучение", "Нейросети", "Будущее"],
    date: "27 октября 2025",
    readTime: "20 мин",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 3,
    title: "Полное руководство по ускорению Android-смартфона",
    description: "Исчерпывающий гайд: от очистки памяти до отключения анимаций и настройки системы для максимальной производительности",
    category: "Оптимизация",
    tags: ["Android", "Смартфон", "Производительность", "Ускорение", "Настройки"],
    date: "26 октября 2025",
    readTime: "15 мин",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80"
  },
  {
    id: 4,
    title: "Искусственный интеллект в дизайне",
    description: "Как AI меняет процесс создания интерфейсов и помогает дизайнерам",
    category: "Технологии",
    tags: ["AI", "Дизайн", "Инновации"],
    date: "25 октября 2025",
    readTime: "6 мин",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 5,
    title: "Доступность интерфейсов: руководство",
    description: "Создаем инклюзивные продукты, доступные для всех пользователей",
    category: "Доступность",
    tags: ["A11y", "UX", "Веб-стандарты"],
    date: "24 октября 2025",
    readTime: "10 мин",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
  },
  {
    id: 6,
    title: "CSS Grid и Flexbox: когда что использовать",
    description: "Сравнение двух мощных инструментов для создания макетов",
    category: "Разработка",
    tags: ["CSS", "Layout", "Frontend"],
    date: "23 октября 2025",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80"
  }
];

const allCategories = Array.from(new Set(mockArticles.map(a => a.category)));
const allTags = Array.from(new Set(mockArticles.flatMap(a => a.tags)));

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => article.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text font-heading">
            Блог
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Исследуем технологии, дизайн и инновации
          </p>
        </header>

        <div className="mb-12 space-y-6 animate-slide-up">
          <div className="relative max-w-2xl mx-auto">
            <Icon 
              name="Search" 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
              size={20} 
            />
            <Input
              type="text"
              placeholder="Поиск по статьям, тегам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="text-sm font-medium text-muted-foreground">Категории:</span>
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer hover-scale px-4 py-2"
              onClick={() => setSelectedCategory(null)}
            >
              Все
            </Badge>
            {allCategories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover-scale px-4 py-2"
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-sm font-medium text-muted-foreground">Теги:</span>
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className="cursor-pointer hover-scale px-3 py-1 text-xs"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="FileX" className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h3 className="text-2xl font-semibold mb-2">Статьи не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              article.id === 1 || article.id === 2 || article.id === 3 ? (
                <Dialog key={article.id}>
                  <DialogTrigger asChild>
                    <Card 
                      className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover-scale cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="gradient-bg text-white border-0 shadow-lg">
                            {article.category}
                          </Badge>
                        </div>
                        {article.id === 1 && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                            <Badge className="bg-accent text-white border-0 text-sm px-4 py-2">
                              <Icon name="MessageCircle" size={16} className="mr-1" />
                              Интерактивный чат
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl gradient-text">
                        {article.title}
                      </DialogTitle>
                    </DialogHeader>
                    {article.id === 1 ? <AIChatbot /> : article.id === 3 ? <PhoneOptimizationGuide /> : <AIGuide />}
                  </DialogContent>
                </Dialog>
              ) : (
                <Card 
                  key={article.id} 
                  className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover-scale cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="gradient-bg text-white border-0 shadow-lg">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        )}

        <footer className="mt-20 text-center text-sm text-muted-foreground animate-fade-in pb-8">
          <p>© 2025 Блог. Создано с вдохновением</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;