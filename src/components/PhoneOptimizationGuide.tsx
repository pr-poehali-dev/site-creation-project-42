import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PhoneOptimizationGuide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Полное руководство по ускорению смартфона</h2>
        <p className="text-lg text-muted-foreground">
          Превратите медленный телефон в быстрое устройство за 15 минут
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem value="item-1" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Trash2" size={24} className="text-accent" />
              1. Очистка памяти и кэша
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 1</Badge>
                <div>
                  <p className="font-semibold">Очистка кэша приложений</p>
                  <p className="text-muted-foreground">Настройки → Приложения → выберите приложение → Хранилище → Очистить кэш</p>
                  <p className="text-sm text-primary mt-1">💡 Очищайте кэш браузеров, соцсетей и мессенджеров — они накапливают гигабайты</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 2</Badge>
                <div>
                  <p className="font-semibold">Удаление ненужных файлов</p>
                  <p className="text-muted-foreground">Используйте Files by Google или встроенный менеджер файлов</p>
                  <p className="text-sm text-primary mt-1">💡 Удалите дубликаты фото, старые загрузки, временные файлы</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 3</Badge>
                <div>
                  <p className="font-semibold">Перенос данных на SD-карту</p>
                  <p className="text-muted-foreground">Настройки → Хранилище → Внутренняя память → Освободить место</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Zap" size={24} className="text-secondary" />
              2. Отключение анимаций (самый эффективный способ)
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30 mb-4">
              <p className="font-bold text-accent mb-2">⚡ Ускорение в 2-3 раза!</p>
              <p className="text-sm">Отключение анимаций даёт мгновенный визуальный эффект ускорения</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 1</Badge>
                <div>
                  <p className="font-semibold">Включить режим разработчика</p>
                  <p className="text-muted-foreground">Настройки → О телефоне → Нажмите 7 раз на "Номер сборки"</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 2</Badge>
                <div>
                  <p className="font-semibold">Отключить анимации</p>
                  <p className="text-muted-foreground">Настройки → Для разработчиков → Найдите 3 пункта:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Шкала анимации окна → Отключить</li>
                    <li>Шкала анимации перехода → Отключить</li>
                    <li>Шкала длительности аниматора → Отключить</li>
                  </ul>
                  <p className="text-sm text-accent mt-2">⚡ Альтернатива: поставьте 0.5x вместо отключения для плавности</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Power" size={24} className="text-primary" />
              3. Оптимизация фоновых процессов
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 1</Badge>
                <div>
                  <p className="font-semibold">Ограничение фоновых приложений</p>
                  <p className="text-muted-foreground">Настройки → Приложения → Выберите приложение → Батарея → Ограничить</p>
                  <p className="text-sm text-primary mt-1">💡 Ограничьте соцсети, игры, редко используемые приложения</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 2</Badge>
                <div>
                  <p className="font-semibold">Автозапуск приложений</p>
                  <p className="text-muted-foreground">Настройки → Приложения → Автозапуск → Отключите ненужные</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 3</Badge>
                <div>
                  <p className="font-semibold">Лимит фоновых процессов (для продвинутых)</p>
                  <p className="text-muted-foreground">Для разработчиков → Лимит фоновых процессов → Не более 4 процессов</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="X" size={24} className="text-destructive" />
              4. Удаление ненужных приложений
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <p className="text-muted-foreground">Удалите или отключите приложения, которые:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Не использовались более 3 месяцев</li>
                <li>Дублируют функции (2 браузера, 3 галереи и т.д.)</li>
                <li>Предустановленные системные приложения (bloatware)</li>
                <li>Антивирусы и "ускорители" (они сами тормозят систему!)</li>
              </ul>
              <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/30 mt-4">
                <p className="text-sm">⚠️ Не удаляйте критические системные приложения — только bloatware производителя</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="RefreshCw" size={24} className="text-secondary" />
              5. Обновление системы и приложений
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Android</Badge>
                <div>
                  <p className="font-semibold">Обновите систему</p>
                  <p className="text-muted-foreground">Настройки → Обновление ПО → Проверить обновления</p>
                  <p className="text-sm text-primary mt-1">💡 Новые версии Android оптимизированы и работают быстрее</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Приложения</Badge>
                <div>
                  <p className="font-semibold">Обновите все приложения</p>
                  <p className="text-muted-foreground">Google Play → Меню → Мои приложения и игры → Обновить все</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="Settings" size={24} className="text-primary" />
              6. Дополнительные настройки производительности
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2">🎨 Отключите живые обои</p>
                <p className="text-sm text-muted-foreground">Используйте статичные обои — экономия ресурсов до 15%</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2">🔋 Режим энергосбережения</p>
                <p className="text-sm text-muted-foreground">Настройки → Батарея → Режим энергосбережения (ограничивает фон и анимации)</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2">🔔 Отключите ненужные уведомления</p>
                <p className="text-sm text-muted-foreground">Каждое уведомление — это пробуждение процессора</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2">📍 Отключите GPS и Bluetooth</p>
                <p className="text-sm text-muted-foreground">Включайте только когда нужно — экономия батареи и ресурсов</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-2">🎯 Принудительная GPU-отрисовка</p>
                <p className="text-sm text-muted-foreground">Для разработчиков → Принудительная обработка GPU → Включить</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors">
          <AccordionTrigger className="text-lg font-semibold hover:text-primary">
            <div className="flex items-center gap-3">
              <Icon name="RotateCcw" size={24} className="text-destructive" />
              7. Крайняя мера: Сброс до заводских настроек
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30 mb-4">
              <p className="font-bold text-destructive mb-2">⚠️ ВНИМАНИЕ!</p>
              <p className="text-sm">Все данные будут удалены. Обязательно сделайте резервную копию!</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 1</Badge>
                <div>
                  <p className="font-semibold">Резервное копирование</p>
                  <p className="text-muted-foreground">Сохраните фото, контакты, документы в Google Drive или на компьютер</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary">Шаг 2</Badge>
                <div>
                  <p className="font-semibold">Сброс настроек</p>
                  <p className="text-muted-foreground">Настройки → Система → Сброс → Сброс до заводских настроек</p>
                </div>
              </div>

              <div className="bg-accent/10 p-3 rounded-lg border border-accent/30 mt-4">
                <p className="text-sm">💡 После сброса телефон будет работать как новый. Устанавливайте только нужные приложения!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mt-8 border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Rocket" size={28} className="text-accent" />
            Быстрые результаты
          </CardTitle>
          <CardDescription>Что даст наибольший эффект прямо сейчас</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="text-2xl">⚡</div>
              <div className="flex-1">
                <p className="font-semibold">Отключить анимации</p>
                <p className="text-sm text-muted-foreground">Эффект +300% к скорости визуально</p>
              </div>
              <Badge className="gradient-bg text-white border-0">2 мин</Badge>
            </div>

            <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="text-2xl">🧹</div>
              <div className="flex-1">
                <p className="font-semibold">Очистить кэш</p>
                <p className="text-sm text-muted-foreground">Освободите 2-5 ГБ памяти</p>
              </div>
              <Badge className="gradient-bg text-white border-0">5 мин</Badge>
            </div>

            <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="text-2xl">🗑️</div>
              <div className="flex-1">
                <p className="font-semibold">Удалить ненужные приложения</p>
                <p className="text-sm text-muted-foreground">Меньше фоновых процессов</p>
              </div>
              <Badge className="gradient-bg text-white border-0">3 мин</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneOptimizationGuide;
