import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const LOGO = 'https://cdn.poehali.dev/projects/a7a4840f-4ba4-4174-8190-f949c4f4c314/bucket/d5d994ea-5ace-4999-8ccc-29cbd5754dbb.png';
const LOGO2 = 'https://cdn.poehali.dev/projects/a7a4840f-4ba4-4174-8190-f949c4f4c314/bucket/3bf6060c-1439-4901-9ec6-5248da064d17.jpg';
const HERO = 'https://cdn.poehali.dev/projects/a7a4840f-4ba4-4174-8190-f949c4f4c314/bucket/673fc984-ed9e-475f-adb0-769b34f3c42a.png';

const services = [
  { t: 'Авторская карта', d: 'Коктейли под настроение вечера — не из меню, а из вашей истории.', i: 'Wine' },
  { t: 'Барная стойка', d: 'Мобильная стойка из дерева и латуни, тёплый свет, гирлянды.', i: 'Sparkles' },
  { t: 'Безалкогольное', d: 'Полноценный вкус для тех, кто за рулём праздника.', i: 'Citrus' },
  { t: 'Бармен-шоумен', d: 'Читает гостя раньше, чем тот произнёс заказ.', i: 'GlassWater' },
];

const works = [
  { t: 'Свадьба под гирляндами', m: '120 гостей · сумерки' },
  { t: 'Открытие галереи', m: 'арт-приём · 60 гостей' },
  { t: 'Юбилей на крыше', m: 'город под ногами' },
];

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('opacity-100', 'translate-y-0')),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [revealed]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="grain-overlay" />

      {/* Интро: логотип появляется */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-emerald-deep transition-opacity duration-[1100ms] ${
          revealed ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(70%_50%_at_50%_45%,hsl(156_28%_22%),transparent_70%)]" />
        <img src={LOGO} alt="Миксология" className="relative w-44 animate-scale-in md:w-56" />
        <p className="relative mt-6 animate-fade-in font-serif text-xl font-light italic tracking-wide text-gold-soft [animation-delay:0.6s] md:text-2xl">
          Праздник уже здесь!
        </p>
      </div>

      <div ref={ref} className={`transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        {/* Навигация */}
        <header className="fixed left-0 right-0 top-0 z-30">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Миксология" className="h-11 w-auto opacity-90" />
              <span className="h-7 w-px bg-gold/30" />
              <img src={LOGO2} alt="Бюро Важных Событий" className="h-10 w-10 rounded-full bg-gold-soft p-1 object-contain" />
            </div>
            <div className="hidden gap-9 font-display text-[0.72rem] font-light uppercase tracking-[0.28em] text-gold-soft md:flex">
              <a href="#services" className="opacity-80 transition hover:opacity-100">Услуги</a>
              <a href="#works" className="opacity-80 transition hover:opacity-100">Праздники</a>
              <a href="#booking" className="opacity-80 transition hover:opacity-100">Бронь</a>
            </div>
            <a href="#booking" className="bg-gold px-6 py-2.5 font-display text-[0.74rem] font-medium uppercase tracking-[0.22em] text-emerald-deep shadow-[0_0_24px_hsl(43_55%_62%/0.35)] transition hover:bg-gold-soft hover:shadow-[0_0_32px_hsl(43_55%_62%/0.55)]">
              Заказать
            </a>
          </nav>
        </header>

        {/* Hero с фото */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <img src={HERO} alt="Выездной бар Миксология" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/55 to-emerald-deep/15" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
            <p className="mb-5 animate-reveal-up font-display text-xs uppercase tracking-luxe text-gold opacity-0 [animation-delay:0.2s]">
              выездной бар
            </p>
            <h1 className="animate-reveal-up font-display text-6xl font-bold uppercase leading-[0.92] text-gold-gradient opacity-0 [animation-delay:0.4s] md:text-8xl">
              Миксология
            </h1>
            <p className="mt-6 max-w-md animate-reveal-up font-serif text-2xl font-light italic leading-snug text-gold-soft/90 opacity-0 [animation-delay:0.8s] md:text-3xl">
              Праздник уже здесь — мы привозим его с собой.
            </p>
            <div className="mt-10 flex animate-reveal-up flex-wrap gap-4 opacity-0 [animation-delay:1.1s]">
              <a href="#booking">
                <Button className="h-12 rounded-none bg-gold px-9 font-display text-[0.78rem] uppercase tracking-[0.25em] text-emerald-deep hover:bg-gold-soft">
                  Забронировать вечер
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="h-12 rounded-none border-gold/50 bg-transparent px-9 font-display text-[0.78rem] uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-emerald-deep">
                  Что мы умеем
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* О проекте */}
        <section className="mx-auto max-w-4xl px-6 py-28 text-center">
          <div data-reveal className="translate-y-8 opacity-0 transition-all duration-1000">
            <div className="mx-auto mb-10 h-px w-24 hairline" />
            <h2 className="font-serif text-3xl font-light leading-snug text-gold-soft md:text-5xl">
              Мы не просто наливаем напитки. Мы создаём <span className="italic text-gold">атмосферу</span>, ради которой гости остаются до последнего тоста.
            </h2>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Гирлянды, тёплый свет, дымка над бокалом и бармен, который помнит ваш вкус. Каждый вечер собирается заново — под людей, под повод, под паузы между разговорами.
            </p>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="bg-emerald py-28">
          <div className="mx-auto max-w-6xl px-6">
            <p data-reveal className="mb-14 translate-y-8 text-center font-display text-xs uppercase tracking-luxe text-gold opacity-0 transition-all duration-1000">
              Услуги
            </p>
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {services.map((s, i) => (
                <div
                  key={s.t}
                  data-reveal
                  style={{ transitionDelay: `${i * 110}ms` }}
                  className="group translate-y-8 bg-emerald-deep p-10 opacity-0 transition-all duration-1000 hover:bg-emerald-light"
                >
                  <Icon name={s.i} className="mb-7 text-gold transition-transform group-hover:scale-110" size={30} />
                  <h3 className="font-display text-2xl font-light uppercase tracking-wide text-gold-soft">{s.t}</h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Праздники */}
        <section id="works" className="mx-auto max-w-6xl px-6 py-28">
          <p data-reveal className="mb-14 translate-y-8 text-center font-display text-xs uppercase tracking-luxe text-gold opacity-0 transition-all duration-1000">
            Где мы зажигаем
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {works.map((w, i) => (
              <div
                key={w.t}
                data-reveal
                style={{ transitionDelay: `${i * 110}ms` }}
                className="group translate-y-8 border border-border p-8 opacity-0 transition-all duration-1000 hover:border-gold/50"
              >
                <span className="font-serif text-5xl font-light text-gold/40">0{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-light uppercase tracking-wide text-gold-soft">{w.t}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{w.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Бронь */}
        <section id="booking" className="bg-emerald py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div data-reveal className="translate-y-8 text-center opacity-0 transition-all duration-1000">
              <p className="mb-6 font-display text-xs uppercase tracking-luxe text-gold">Бронь</p>
              <h2 className="font-display text-4xl font-light uppercase leading-tight text-gold-gradient md:text-6xl">
                Расскажите о вашем вечере
              </h2>
            </div>
            <form
              data-reveal
              onSubmit={(e) => e.preventDefault()}
              className="mt-14 translate-y-8 space-y-7 opacity-0 transition-all delay-200 duration-1000"
            >
              <div className="grid gap-7 md:grid-cols-2">
                <Input placeholder="Как вас зовут" className="h-12 rounded-none border-0 border-b border-gold/30 bg-transparent px-0 text-gold-soft placeholder:text-muted-foreground focus-visible:ring-0" />
                <Input placeholder="Телефон" className="h-12 rounded-none border-0 border-b border-gold/30 bg-transparent px-0 text-gold-soft placeholder:text-muted-foreground focus-visible:ring-0" />
              </div>
              <Input placeholder="Дата и формат события" className="h-12 rounded-none border-0 border-b border-gold/30 bg-transparent px-0 text-gold-soft placeholder:text-muted-foreground focus-visible:ring-0" />
              <Textarea placeholder="Каким должен быть этот праздник?" rows={3} className="resize-none rounded-none border-0 border-b border-gold/30 bg-transparent px-0 text-gold-soft placeholder:text-muted-foreground focus-visible:ring-0" />
              <div className="text-center">
                <Button type="submit" className="h-12 rounded-none bg-gold px-12 font-display text-[0.78rem] uppercase tracking-[0.28em] text-emerald-deep hover:bg-gold-soft">
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Контакты */}
        <footer className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-center gap-8 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
            <img src={LOGO} alt="Миксология" className="h-20 w-auto" />
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-end">
              <a href="tel:+70000000000" className="font-display text-lg tracking-wide text-gold-soft transition hover:text-gold">+7 000 000 00 00</a>
              <a href="mailto:hi@mixology.ru" className="transition hover:text-gold-soft">hi@mixology.ru</a>
              <span className="mt-2 text-[0.7rem] uppercase tracking-[0.25em]">© 2026 · Выездной бар</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;