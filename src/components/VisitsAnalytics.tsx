import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Visit {
  id: number;
  visitor_ip: string;
  page_url: string;
  referrer: string;
  country: string;
  city: string;
  device_type: string;
  browser: string;
  os: string;
  visit_duration: number;
  created_at: string;
}

interface Stats {
  total_visits: number;
  unique_visitors: number;
  avg_duration: number;
  mobile_visits: number;
  desktop_visits: number;
  tablet_visits: number;
}

const mockStats: Stats = {
  total_visits: 20,
  unique_visitors: 19,
  avg_duration: 174,
  mobile_visits: 7,
  desktop_visits: 11,
  tablet_visits: 2
};

const mockVisits: Visit[] = [
  { id: 1, visitor_ip: '192.168.1.1', page_url: '/', referrer: 'google.com', country: 'Россия', city: 'Москва', device_type: 'Desktop', browser: 'Chrome', os: 'Windows', visit_duration: 145, created_at: '2025-10-29T10:15:23' },
  { id: 2, visitor_ip: '192.168.1.2', page_url: '/blog', referrer: 'yandex.ru', country: 'Россия', city: 'Санкт-Петербург', device_type: 'Mobile', browser: 'Safari', os: 'iOS', visit_duration: 89, created_at: '2025-10-29T10:23:45' },
  { id: 3, visitor_ip: '192.168.1.3', page_url: '/', referrer: 'direct', country: 'США', city: 'Нью-Йорк', device_type: 'Desktop', browser: 'Safari', os: 'macOS', visit_duration: 234, created_at: '2025-10-29T10:45:12' },
  { id: 4, visitor_ip: '192.168.1.4', page_url: '/blog', referrer: 'vk.com', country: 'Россия', city: 'Казань', device_type: 'Desktop', browser: 'Chrome', os: 'Windows', visit_duration: 167, created_at: '2025-10-29T11:02:33' },
  { id: 5, visitor_ip: '192.168.1.5', page_url: '/', referrer: 'google.com', country: 'Украина', city: 'Киев', device_type: 'Mobile', browser: 'Chrome', os: 'Android', visit_duration: 92, created_at: '2025-10-29T11:15:47' },
  { id: 6, visitor_ip: '192.168.1.6', page_url: '/blog', referrer: 'facebook.com', country: 'Германия', city: 'Берлин', device_type: 'Tablet', browser: 'Safari', os: 'iOS', visit_duration: 201, created_at: '2025-10-29T11:34:21' },
  { id: 7, visitor_ip: '192.168.1.7', page_url: '/', referrer: 'direct', country: 'Россия', city: 'Новосибирск', device_type: 'Desktop', browser: 'Firefox', os: 'Windows', visit_duration: 178, created_at: '2025-10-29T12:08:15' },
  { id: 8, visitor_ip: '192.168.1.8', page_url: '/blog', referrer: 'google.com', country: 'Беларусь', city: 'Минск', device_type: 'Mobile', browser: 'Safari', os: 'iOS', visit_duration: 134, created_at: '2025-10-29T12:28:42' },
  { id: 9, visitor_ip: '192.168.1.9', page_url: '/', referrer: 'telegram.org', country: 'Россия', city: 'Екатеринбург', device_type: 'Desktop', browser: 'Chrome', os: 'macOS', visit_duration: 256, created_at: '2025-10-29T13:12:09' },
  { id: 10, visitor_ip: '192.168.1.10', page_url: '/blog', referrer: 'yandex.ru', country: 'Казахстан', city: 'Алматы', device_type: 'Mobile', browser: 'Chrome', os: 'Android', visit_duration: 143, created_at: '2025-10-29T13:45:33' }
];

const VisitsAnalytics = () => {
  const [visits] = useState<Visit[]>(mockVisits);
  const [stats] = useState<Stats>(mockStats);

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Mobile': return 'Smartphone';
      case 'Tablet': return 'Tablet';
      case 'Desktop': return 'Monitor';
      default: return 'HelpCircle';
    }
  };

  const getDeviceColor = (device: string) => {
    switch (device) {
      case 'Mobile': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Tablet': return 'bg-accent/20 text-accent border-accent/30';
      case 'Desktop': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-muted';
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return minutes > 0 ? `${minutes}м ${secs}с` : `${secs}с`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold gradient-text mb-4">Аналитика посещений</h2>
        <p className="text-lg text-muted-foreground">
          Статистика и детальная информация о посетителях сайта
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-2 border-primary/30 hover:border-primary/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="Users" size={16} />
              Всего посещений
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold gradient-text">{stats.total_visits}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Уникальных: {stats.unique_visitors}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/30 hover:border-secondary/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Среднее время
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold gradient-text">
              {formatDuration(stats.avg_duration)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              На сайте
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/30 hover:border-accent/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="Smartphone" size={16} />
              Устройства
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Desktop</span>
                <span className="font-semibold">{stats.desktop_visits}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Mobile</span>
                <span className="font-semibold">{stats.mobile_visits}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tablet</span>
                <span className="font-semibold">{stats.tablet_visits}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Activity" size={24} className="text-primary" />
            Последние посещения
          </CardTitle>
          <CardDescription>Детальная информация о визитах на сайт</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Дата и время</TableHead>
                  <TableHead>Страница</TableHead>
                  <TableHead>Город, Страна</TableHead>
                  <TableHead>Устройство</TableHead>
                  <TableHead>Браузер</TableHead>
                  <TableHead>Источник</TableHead>
                  <TableHead className="text-right">Время</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visits.map((visit, index) => (
                  <TableRow key={visit.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        {formatDate(visit.created_at)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs">
                        {visit.page_url}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} className="text-muted-foreground" />
                        <span className="text-sm">{visit.city}, {visit.country}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getDeviceColor(visit.device_type)} border`}>
                        <Icon name={getDeviceIcon(visit.device_type)} size={12} className="mr-1" />
                        {visit.device_type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{visit.browser}</div>
                      <div className="text-xs text-muted-foreground">{visit.os}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {visit.referrer === 'direct' ? '🔗 Прямой' : `🔍 ${visit.referrer}`}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {formatDuration(visit.visit_duration)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Globe" size={20} className="text-primary" />
              Топ стран
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Россия', 'США', 'Германия', 'Украина', 'Беларусь'].map((country, idx) => (
                <div key={country} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{idx + 1}</span>
                    <span>{country}</span>
                  </div>
                  <Badge className="gradient-bg text-white border-0">
                    {[8, 1, 1, 1, 1][idx]} визитов
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Chrome" size={20} className="text-secondary" />
              Топ браузеров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { browser: 'Chrome', count: 10, icon: 'Chrome' },
                { browser: 'Safari', count: 6, icon: 'Compass' },
                { browser: 'Firefox', count: 1, icon: 'Flame' },
                { browser: 'Edge', count: 1, icon: 'Wind' }
              ].map((item, idx) => (
                <div key={item.browser} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name={item.icon as any} size={18} className="text-secondary" />
                    <span>{item.browser}</span>
                  </div>
                  <Badge className="gradient-bg text-white border-0">
                    {item.count} визитов
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Info" size={20} className="text-accent" />
            О таблице посещений
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>📊 Таблица хранит полную информацию о каждом визите на сайт</p>
          <p>🌍 География: страна, город посетителя</p>
          <p>📱 Устройства: Desktop, Mobile, Tablet</p>
          <p>🔍 Источники трафика: Google, Яндекс, прямые заходы, соцсети</p>
          <p>⏱️ Метрики: время на сайте, количество уникальных посетителей</p>
          <p className="text-primary font-semibold mt-4">💡 Данные можно использовать для улучшения UX и контента</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitsAnalytics;
