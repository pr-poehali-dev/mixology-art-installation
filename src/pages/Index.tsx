import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  { t: 'Авторская карта', d: 'Коктейли, собранные под вашу историю — не из меню, а из настроения вечера.', i: 'Wine' },
  { t: 'Барная стойка', d: 'Мобильная инсталляция из дерева и латуни. Свет, который не торопится.', i: 'Sparkles' },
  { t: 'Безалкогольное', d: 'Не «детское», а полноценный вкус для тех, кто за рулём вечера.', i: 'Citrus' },
  { t: 'Сомелье вечера', d: 'Бармен, который читает гостя раньше, чем тот произнёс заказ.', i: 'GlassWater' },
];

const works = [
  { t: 'Свадьба в оранжерее', m: '120 гостей · сумерки', i: 'Flower2' },
  { t: 'Открытие галереи', m: 'арт-приём · 60 гостей', i: 'Frame' },
  { t: 'Юбилей на крыше', m: 'город под ногами', i: 'Building2' },
];

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const els = sectionsRef.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('opacity-100', 'translate-y-0')),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [revealed]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="grain-overlay" />

      {/* Интро: одна капля */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-opacity duration-[1200ms] ${
          revealed ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative mb-10 h-16 w-16">
          <span className="absolute inset-0 animate-ripple rounded-full border border-primary/40" />
          <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 animate-drop-fall rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-primary" />
        </div>
        <p className="animate-reveal-up font-display text-2xl font-light tracking-luxe text-primary [animation-delay:1.1s] opacity-0">
          Скоро приедем
        </p>
      </div>

      {/* Контент */}
      <div ref={sectionsRef} className={`transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        {/* Навигация */}
        <header className="fixed left-0 right-0 top-0 z-30 mix-blend-difference">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 text-white">
            <span className="font-display text-xl tracking-[0.25em]">М</span>
            <div className="hidden gap-9 text-[0.7rem] uppercase tracking-[0.3em] md:flex">
              <a href="#about" className="opacity-70 transition hover:opacity-100">О проекте</a>
              <a href="#services" className="opacity-70 transition hover:opacity-100">Услуги</a>
              <a href="#works" className="opacity-70 transition hover:opacity-100">Портфолио</a>
              <a href="#booking" className="opacity-70 transition hover:opacity-100">Бронь</a>
            </div>
            <a href="#booking" className="text-[0.7rem] uppercase tracking-[0.3em] opacity-70 transition hover:opacity-100">
              Связаться
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary">
            <div className="absolute inset-0 opacity-40 [background:radial-gradient(120%_80%_at_70%_20%,hsl(222_38%_30%),transparent_60%),radial-gradient(90%_70%_at_20%_90%,hsl(20_40%_30%),transparent_55%)]" />
            <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-[radial-gradient(circle,hsl(40_30%_96%/0.06),transparent_70%)] blur-3xl" />
          </div>
          <div className="relative z-10 px-6 text-center text-background">
            <p className="mb-8 animate-reveal-up text-[0.7rem] uppercase tracking-luxe opacity-0 [animation-delay:0.2s]">
              выездной бар
            </p>
            <h1 className="animate-reveal-up font-display text-[20vw] font-light leading-[0.85] opacity-0 [animation-delay:0.4s] md:text-[12rem]">
              Миксология
            </h1>
            <p className="mx-auto mt-10 max-w-xl animate-reveal-up font-display text-xl font-light italic leading-relaxed text-background/80 opacity-0 [animation-delay:0.8s] md:text-2xl">
              Для тех, кто понимает разницу между «выпить» и «вкусить вечер».
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-reveal-up opacity-0 [animation-delay:1.2s]">
            <Icon name="ChevronDown" className="text-background/50" size={22} />
          </div>
        </section>

        {/* О проекте */}
        <section id="about" className="mx-auto max-w-4xl px-6 py-32">
          <div data-reveal className="translate-y-8 opacity-0 transition-all duration-1000">
            <p className="mb-10 text-[0.7rem] uppercase tracking-luxe text-muted-foreground">О проекте</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
              Мы не привозим бар. <br />Мы привозим <span className="italic">настроение</span>, которое остаётся с гостями дольше, чем послевкусие.
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Каждый вечер собирается заново — под свет, под людей, под паузы между тостами. Это не услуга с прайсом за коктейль. Это сценография вкуса.
            </p>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="border-y border-border bg-secondary/40 py-32">
          <div className="mx-auto max-w-6xl px-6">
            <p data-reveal className="mb-16 translate-y-8 text-[0.7rem] uppercase tracking-luxe text-muted-foreground opacity-0 transition-all duration-1000">
              Услуги
            </p>
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {services.map((s, idx) => (
                <div
                  key={s.t}
                  data-reveal
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className="group translate-y-8 bg-background p-10 opacity-0 transition-all duration-1000 hover:bg-primary"
                >
                  <Icon name={s.i} className="mb-8 text-primary transition-colors group-hover:text-background" size={28} />
                  <h3 className="font-display text-3xl font-light text-foreground transition-colors group-hover:text-background">{s.t}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Портфолио */}
        <section id="works" className="mx-auto max-w-6xl px-6 py-32">
          <p data-reveal className="mb-16 translate-y-8 text-[0.7rem] uppercase tracking-luxe text-muted-foreground opacity-0 transition-all duration-1000">
            Портфолио
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {works.map((w, idx) => (
              <div
                key={w.t}
                data-reveal
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="group translate-y-8 opacity-0 transition-all duration-1000"
              >
                <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-primary">
                  <div className="absolute inset-0 opacity-30 [background:radial-gradient(80%_60%_at_50%_30%,hsl(40_30%_96%/0.15),transparent)]" />
                  <Icon name={w.i} className="text-background/30 transition-transform duration-700 group-hover:scale-110" size={56} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{w.t}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{w.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Бронь */}
        <section id="booking" className="bg-primary py-32 text-background">
          <div className="mx-auto max-w-3xl px-6">
            <div data-reveal className="translate-y-8 opacity-0 transition-all duration-1000">
              <p className="mb-8 text-[0.7rem] uppercase tracking-luxe text-background/50">Бронь</p>
              <h2 className="font-display text-5xl font-light leading-tight md:text-7xl">
                Расскажите <br />о вашем вечере
              </h2>
            </div>
            <form
              data-reveal
              onSubmit={(e) => e.preventDefault()}
              className="mt-16 translate-y-8 space-y-8 opacity-0 transition-all delay-200 duration-1000"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Input placeholder="Как вас зовут" className="h-12 rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:ring-0" />
                <Input placeholder="Телефон" className="h-12 rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:ring-0" />
              </div>
              <Input placeholder="Дата и формат события" className="h-12 rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:ring-0" />
              <Textarea placeholder="Каким должен быть этот вечер?" rows={3} className="resize-none rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:ring-0" />
              <Button type="submit" className="h-12 rounded-none bg-background px-10 text-[0.7rem] uppercase tracking-[0.3em] text-primary hover:bg-background/85">
                Отправить заявку
              </Button>
            </form>
          </div>
        </section>

        {/* Контакты */}
        <footer id="contacts" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="font-display text-5xl font-light">Миксология</span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Выездной бар. Работаем по городу и за его пределами.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground md:text-right">
              <a href="tel:+70000000000" className="transition hover:text-foreground">+7 000 000 00 00</a>
              <a href="mailto:hi@mixology.ru" className="transition hover:text-foreground">hi@mixology.ru</a>
              <span className="mt-2 text-[0.7rem] uppercase tracking-[0.25em]">© 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
