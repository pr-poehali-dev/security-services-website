import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [showCallButton, setShowCallButton] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наш специалист свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: 'Building2',
      title: 'Охрана объектов',
      description: 'Профессиональная охрана офисов, складов, торговых центров и производственных площадок',
      features: ['24/7 охрана', 'Патрулирование', 'Контроль доступа']
    },
    {
      icon: 'Shield',
      title: 'Личная охрана',
      description: 'Сопровождение VIP-персон, обеспечение безопасности на мероприятиях и в поездках',
      features: ['Опытные телохранители', 'Планирование маршрутов', 'Круглосуточная готовность']
    },
    {
      icon: 'Video',
      title: 'Видеонаблюдение',
      description: 'Установка и обслуживание систем видеонаблюдения с удаленным доступом и аналитикой',
      features: ['HD камеры', 'Облачное хранение', 'Мобильный доступ']
    }
  ];

  const stats = [
    { value: '15+', label: 'лет на рынке' },
    { value: '500+', label: 'защищенных объектов' },
    { value: '200+', label: 'охранников в штате' },
    { value: '99.8%', label: 'надежность' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">ПЛАТИНА</span>
              <span className="text-xs text-muted-foreground">группа компаний</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#order">Заказать услугу</a>
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональная охрана <br />
              <span className="text-primary">вашей безопасности</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Комплексные решения по обеспечению безопасности для бизнеса и частных лиц по всей России. 
              Лицензия, опыт, надежность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <a href="https://wa.me/79874199611">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр охранных услуг для защиты вашего бизнеса и личной безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-border bg-card animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">О компании</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="Award" className="text-primary mb-4" size={32} />
                  <CardTitle>15 лет надежности</CardTitle>
                  <CardDescription>
                    Работаем с 2009 года. Имеем все необходимые лицензии и сертификаты для оказания охранных услуг
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-4" size={32} />
                  <CardTitle>Профессиональная команда</CardTitle>
                  <CardDescription>
                    200+ аттестованных охранников с опытом работы в силовых структурах. Регулярное обучение персонала
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="Clock" className="text-primary mb-4" size={32} />
                  <CardTitle>Круглосуточная работа</CardTitle>
                  <CardDescription>
                    Диспетчерская служба работает 24/7. Быстрое реагирование на любые инциденты и экстренные ситуации
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="FileCheck" className="text-primary mb-4" size={32} />
                  <CardTitle>Договорные гарантии</CardTitle>
                  <CardDescription>
                    Официальные договоры с прозрачными условиями. Страхование ответственности на все виды услуг
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории защиты бизнеса наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card hover-scale">
              <CardHeader>
                <div className="w-full h-40 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={48} />
                </div>
                <CardTitle>ТЦ "Кольцо"</CardTitle>
                <CardDescription>
                  Комплексная охрана торгового центра площадью 25 000 м². Предотвращено 15+ инцидентов за год, сокращены потери от краж на 87%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>2 года сотрудничества</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-scale">
              <CardHeader>
                <div className="w-full h-40 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Factory" className="text-primary" size={48} />
                </div>
                <CardTitle>Завод "ТехМаш"</CardTitle>
                <CardDescription>
                  Охрана производственного комплекса с режимом повышенной секретности. Установлено 40 камер видеонаблюдения, контроль доступа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>3 года сотрудничества</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-scale">
              <CardHeader>
                <div className="w-full h-40 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={48} />
                </div>
                <CardTitle>VIP-мероприятие</CardTitle>
                <CardDescription>
                  Обеспечение безопасности бизнес-конференции на 500+ участников. Личная охрана спикеров, контроль периметра, аккредитация гостей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Проведено 12 мероприятий</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей Иванов</CardTitle>
                    <p className="text-sm text-muted-foreground">Директор ТЦ "Кольцо"</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "Сотрудничаем с ПЛАТИНА уже 2 года. Профессиональная команда, быстрое реагирование на инциденты. Значительно сократили потери от краж. Рекомендую!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Марина Петрова</CardTitle>
                    <p className="text-sm text-muted-foreground">Владелец сети ресторанов</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "Установили видеонаблюдение во всех наших заведениях. Теперь контролируем всё удаленно с телефона. Удобно, надежно, качественная техника."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Соколов</CardTitle>
                    <p className="text-sm text-muted-foreground">Генеральный директор ООО "ТехМаш"</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "Охрана нашего завода — сложная задача. ПЛАТИНА справилась на отлично. Аттестованные специалисты, строгое соблюдение режима секретности."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="border-border bg-card">
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <a href="https://wa.me/79874199611" className="text-muted-foreground hover:text-primary transition-colors">+7 (987) 419-96-11</a>
                  <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:matrix-7979@mail.ru" className="text-muted-foreground hover:text-primary transition-colors">matrix-7979@mail.ru</a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground mt-8">Работаем по всей России: Казань, Москва, Санкт-Петербург и другие регионы</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={24} />
              <div className="flex flex-col">
                <span className="font-bold leading-tight">ПЛАТИНА</span>
                <span className="text-xs text-muted-foreground">группа компаний</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Группа компаний ПЛАТИНА. Все права защищены. Лицензия № 123456
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/79874199611" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="mailto:matrix-7979@mail.ru" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showCallButton && (
        <a
          href="https://wa.me/79874199611"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50 animate-fade-in"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" className="text-white" size={28} />
        </a>
      )}
    </div>
  );
}