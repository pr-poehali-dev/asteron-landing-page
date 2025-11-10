import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'Zap',
      title: 'Монтаж электрики',
      description: 'Профессиональный монтаж электропроводки для жилых и коммерческих объектов',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Home',
      title: 'Умный дом',
      description: 'Установка и настройка систем автоматизации для комфортной жизни',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Settings',
      title: 'Обслуживание',
      description: 'Регулярное техническое обслуживание и ремонт электрооборудования',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const products = [
    {
      name: 'Автоматические выключатели',
      category: 'Защита',
      image: '⚡'
    },
    {
      name: 'Розетки и выключатели',
      category: 'Установочные изделия',
      image: '🔌'
    },
    {
      name: 'Светодиодное освещение',
      category: 'Освещение',
      image: '💡'
    },
    {
      name: 'Кабельная продукция',
      category: 'Провода и кабели',
      image: '🔗'
    },
    {
      name: 'Умные выключатели',
      category: 'Умный дом',
      image: '📱'
    },
    {
      name: 'Щитовое оборудование',
      category: 'Электрощиты',
      image: '📦'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://cdn.poehali.dev/files/847a1590-75bd-43ff-8e4b-d38a18f0fe9c.png" 
              alt="АСТЕРОН" 
              className="h-10"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              О компании
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Услуги
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Товары
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              АСТЕРОН
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-heading">
              Электротехнические решения нового поколения
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Продажа электротехнических товаров, профессиональный монтаж электрики и установка систем умного дома
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-600 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Наши услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">О компании</h2>
            <p className="text-lg text-gray-600">
              АСТЕРОН — надежный партнер в области электротехнических решений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-heading">10+ лет</h3>
                <p className="text-gray-600">опыта на рынке</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-heading">500+</h3>
                <p className="text-gray-600">довольных клиентов</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-heading">100%</h3>
                <p className="text-gray-600">гарантия качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Наши услуги</h2>
            <p className="text-lg text-gray-600">
              Комплексные решения для вашего дома и бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Товары</h2>
            <p className="text-lg text-gray-600">
              Широкий ассортимент качественной электротехнической продукции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  <div className="text-sm text-primary font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold font-heading">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Контакты</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для консультации
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 font-heading">Телефон</h3>
                      <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 font-heading">Email</h3>
                      <p className="text-gray-600">info@asteron.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 font-heading">Адрес</h3>
                      <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      className="border-gray-300 focus:border-primary min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-600 text-white"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 АСТЕРОН. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
