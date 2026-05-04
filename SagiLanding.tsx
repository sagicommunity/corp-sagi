import { useState } from 'react';
import {
  Shield,
  CreditCard,
  Store,
  Clock,
  RefreshCw,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Users,
  TrendingUp,
  Headphones,
  GraduationCap,
  Briefcase,
  Bell,
  ChevronRight,
  Zap,
  Building2,
  CircleUser,
  ShoppingBag,
} from 'lucide-react';

const GREEN = '#2ABB6F';
const GREEN_DARK = '#1E9E5A';

const FEATURE_ICONS_LG = [
  <Smartphone size={17} />,
  <CreditCard size={17} />,
  <Store size={17} />,
  <Shield size={17} />,
  <Bell size={17} />,
  <BarChart3 size={17} />,
  <RefreshCw size={17} />,
  <Briefcase size={17} />,
  <Headphones size={17} />,
  <Clock size={17} />,
  <GraduationCap size={17} />,
  <Users size={17} />,
];

const FEATURE_GROUP_ICONS = [
  [<CreditCard size={15} />, <Shield size={15} />, <Store size={15} />, <Bell size={15} />],
  [<BarChart3 size={15} />, <RefreshCw size={15} />, <Clock size={15} />, <Briefcase size={15} />],
  [<Headphones size={15} />, <GraduationCap size={15} />, <Users size={15} />, <Smartphone size={15} />],
];

const T = {
  ru: {
    navBadge: 'Корпоративная лояльность',
    navLinks: [['Возможности', '#Возможности'], ['Для бизнеса', '#Бизнес'], ['Тарифы', '#Тарифы']] as [string, string][],
    heroBadge: 'Цифровая платформа корпоративной лояльности',
    heroH1a: 'Лояльность сотрудников',
    heroH1b: 'и клиентов автоматически',
    heroSubtitle: 'Запустите программу корпоративных привилегий за несколько дней. Всё управление в одном дашборде.',
    heroCta: 'Посмотреть тарифы',
    heroStats: [
      { v: '12', l: 'функций в одной подписке' },
      { v: '$20', l: 'в месяц за участника' },
      { v: '30%', l: 'скидка при оплате за год' },
    ],
    cardAdded: 'Карта добавлена',
    appBadge: 'Интерфейс приложения',
    appH2a: 'Как это выглядит',
    appH2b: 'в реальном использовании',
    appSubtitle: 'Три ключевых экрана: профиль участника, лента компании и каталог привилегий.',
    screens: [
      { label: 'Профиль участника', sub: 'Карта лояльности + QR-код' },
      { label: 'Лента компании', sub: 'Новости и предложения' },
      { label: 'Каталог привилегий', sub: 'Категории и партнёры программы' },
    ],
    painBadge: 'Контекст',
    painH2a: 'Sagi Community:',
    painH2b: 'решение для всех сторон',
    painSubtitle: 'Каждая сторона сталкивается со своими вызовами. Sagi создан, чтобы их снять.',
    painGroups: [
      {
        label: 'Компания',
        items: [
          'Сложно централизованно управлять льготами для большого числа сотрудников или клиентов',
          'Нет прозрачной аналитики: непонятно, какие привилегии реально используются и насколько они ценятся',
          'Высокая текучесть: программа лояльности есть, но без цифрового доступа её никто не замечает',
          'Операционная нагрузка на HR и маркетинг растёт вместе с базой участников',
        ],
      },
      {
        label: 'Участник',
        items: [
          'Информация о льготах разбросана по почте, буклетам и чатам — слишком много шагов, чтобы что-то найти',
          'Нет единого места для быстрого доступа к статусу участника и актуальным привилегиям',
          'Список партнёров и условий не всегда под рукой: непонятно, куда идти и что предъявить',
          'Ценность программы не ощущается в повседневной жизни без удобного цифрового доступа',
        ],
      },
      {
        label: 'Партнёр',
        items: [
          'Нет простого способа верифицировать участника корпоративной программы при визите',
          'Сложно оценить реальный поток клиентов, пришедших именно благодаря партнёрству',
          'Обновление условий предложения требует координации с HR и несколькими сторонами',
          'Не хватает данных, чтобы понять, насколько партнёрство приносит измеримый результат',
        ],
      },
    ],
    featuresBadge: 'Всё включено',
    featuresH2a: '12 возможностей',
    featuresH2b: 'в одной подписке',
    featuresSubtitle: 'Каждый инструмент создан для полноценной корпоративной программы лояльности',
    featureLabels: [
      'Доступ к платформе',
      'Apple Wallet карта',
      'Каталог корпоративных привилегий',
      'Карта участника (QR ID)',
      'Лента событий компании',
      'Аналитика использования',
      'Управление контентом',
      'Личный кабинет HR / Маркетинга',
      'Техническая поддержка',
      'Контроль сроков действия',
      'Онбординг и обучение',
      'Персональный менеджер по партнёрам',
    ],
    walletSub: 'Членство прямо в смартфоне',
    clockLabel: 'Контроль сроков действия',
    clockDesc: 'Карта автоматически деактивируется по истечении периода. Доступ к привилегиям сохраняется только у активных участников программы.',
    managerBadge: 'Персональный менеджер',
    managerTitle: 'Менеджер по работе с партнёрами',
    managerDesc: 'Выделенный менеджер Sagi самостоятельно ведёт переговоры с партнёрами, договаривается об условиях и наполняет каталог привилегий актуальными предложениями. Вашей команде не нужно тратить на это время.',
    managerItems: ['Переговоры с партнёрами', 'Наполнение каталога', 'Контроль условий'],
    toolsBadge: 'Операционный контроль',
    toolsH2: 'Инструменты',
    toolsSubtitle: 'Полный цикл управления в одном дашборде.',
    adminLabel: 'Для HR / Маркетинга',
    adminTitle: 'Панель управления',
    adminItems: [
      { t: 'Контроль сроков действия', d: 'Автоблокировка карт по истечении периода. Push-уведомления о продлении.' },
      { t: 'Управление контентом', d: 'Мгновенное обновление предложений, партнёров и условий без ручного труда.' },
      { t: 'Аналитика использования', d: 'Статистика по льготам: какие категории востребованы и у каких групп участников.' },
      { t: 'База участников', d: 'Управление сотрудниками и клиентами, история продлений, статусы карт в реальном времени.' },
    ],
    partnerLabel: 'Для партнёров',
    partnerTitle: 'Кабинет партнёра',
    partnerItems: [
      { t: 'Сканирование QR-карт', d: 'Мгновенная верификация участника при посещении без пластиковых карт.' },
      { t: 'Управление предложениями', d: 'Создание и редактирование скидок, акций и эксклюзивных условий.' },
      { t: 'Статистика визитов', d: 'Измеримый поток клиентов из корпоративной программы, данные о сканированиях карт.' },
      { t: 'Персональный менеджер', d: 'Выделенный менеджер Sagi сопровождает партнёра на всех этапах.' },
    ],
    aboutDesc: 'Платформа лояльности для бизнеса в Казахстане и СНГ. Возвращаем до 70% клиентов и автоматизируем маркетинг.',
    aboutStats: [
      { v: '1000', l: 'бизнесов доверяют нам' },
      { v: '3 млн+', l: 'пользователей' },
      { v: '7 лет', l: 'на рынке' },
    ],
    trustedBy: 'Нам доверяют',
    pricingBadge: 'Прозрачная тарификация',
    pricingH2a: 'Два формата,',
    pricingH2b: 'один продукт',
    pricingSubtitle: 'Выберите подходящий формат — анонимная карта или персональная программа для каждого участника.',
    anonBadge: 'Без личных данных',
    anonTitle: 'Корпоративная карта',
    anonDesc: 'Одна цифровая карта на всю организацию. Сотрудники предъявляют её у партнёров — без регистрации и хранения личных данных участников.',
    anonFeatures: [
      'Одна карта на организацию',
      'QR-код для сканирования у партнёров',
      'Каталог корпоративных привилегий',
      'Лента событий и новостей компании',
      'Без сбора личных данных участников',
    ],
    anonNote: 'Идеально для пилота или небольших команд',
    anonCta: 'Уточнить цену',
    volumeBadge: 'Персональная программа',
    volumeTitle: 'Карта для каждого участника',
    volumeDesc: 'Каждый сотрудник или клиент получает личную карту с QR-кодом и Apple Wallet. Полная аналитика использования.',
    volumeHeader: ['Команда', 'За участника', 'В месяц'],
    volumeTiers: [
      { range: 'До 100', price: '$17', total: 'от $1 700', highlight: false },
      { range: 'До 200', price: '$15', total: 'от $3 000', highlight: false },
      { range: 'До 300', price: '$13', total: 'от $3 900', highlight: false },
      { range: '300+', price: 'Договорная', total: '', highlight: true },
    ],
    volumeCta: 'Рассчитать стоимость',
    includedLabel: 'Входит в оба тарифа',
    featureGroups: [
      { label: 'Для участника', color: 'bg-[#EDFAF3] text-[#1E9E5A]', items: ['Apple Wallet карта', 'Карта участника (QR ID)', 'Каталог корпоративных привилегий', 'Лента событий компании'] },
      { label: 'Для HR / Маркетинга', color: 'bg-[#EEF2FF] text-[#4338CA]', items: ['Аналитика использования', 'Управление контентом', 'Контроль сроков действия', 'Личный кабинет'] },
      { label: 'Сервис и поддержка', color: 'bg-[#FFF7ED] text-[#C2410C]', items: ['Техническая поддержка', 'Онбординг и обучение', 'Персональный менеджер', 'Доступ к платформе'] },
    ],
    pricingNote: 'Оплата единым счётом за всю базу участников. Для команд 300+ — индивидуальное предложение.',
    roiBadge: 'Почему это выгодно',
    roiH2a: 'Что вы получаете',
    roiH2b: 'помимо продукта',
    roiItems: [
      { t: 'Снижение текучести', d: 'Цифровой продукт повышает воспринимаемую ценность льгот. Сотрудники и клиенты остаются дольше.' },
      { t: 'Снижение операционных затрат', d: 'Каталог и база участников обновляются в пару кликов. Без ручной работы команды.' },
      { t: 'Аналитика и прозрачность', d: 'Понятные данные о том, как используются льготы. Для обоснованных решений HR и маркетинга.' },
    ],
    footerBadge: 'Платформа готова к запуску',
    footerH2: 'Sagi Community: технологическая основа корпоративной лояльности',
    footerDesc: 'Современная платформа для цифровизации привилегий сотрудников и клиентов. Полный контроль. Живое сообщество. Измеримый результат.',
  },
  en: {
    navBadge: 'Corporate Loyalty',
    navLinks: [['Features', '#Возможности'], ['For Business', '#Бизнес'], ['Pricing', '#Тарифы']] as [string, string][],
    heroBadge: 'Digital Corporate Loyalty Platform',
    heroH1a: 'Employee and client',
    heroH1b: 'loyalty on autopilot',
    heroSubtitle: 'Launch a corporate perks program in days. All management in one dashboard.',
    heroCta: 'View pricing',
    heroStats: [
      { v: '12', l: 'features in one plan' },
      { v: '$20', l: 'per member per month' },
      { v: '30%', l: 'discount with annual plan' },
    ],
    cardAdded: 'Card added',
    appBadge: 'App Interface',
    appH2a: 'What it looks like',
    appH2b: 'in real use',
    appSubtitle: 'Three key screens: member profile, company feed, and perks catalog.',
    screens: [
      { label: 'Member Profile', sub: 'Loyalty card + QR code' },
      { label: 'Company Feed', sub: 'News and offers' },
      { label: 'Perks Catalog', sub: 'Program categories and partners' },
    ],
    painBadge: 'Context',
    painH2a: 'Sagi Community:',
    painH2b: 'a solution for everyone',
    painSubtitle: 'Every stakeholder faces their own challenges. Sagi is built to solve them.',
    painGroups: [
      {
        label: 'Company',
        items: [
          'Hard to centrally manage perks for a large number of employees or clients',
          'No clear analytics: unclear which benefits are actually used and how much they are valued',
          'High turnover: a loyalty program exists, but without digital access no one notices it',
          'Operational load on HR and marketing grows alongside the member base',
        ],
      },
      {
        label: 'Member',
        items: [
          'Benefits info is scattered across emails, brochures, and chats — too many steps to find anything',
          'No single place for quick access to member status and current perks',
          'The partner list and terms are not always handy: unclear where to go or what to show',
          'The program\'s value is not felt in everyday life without convenient digital access',
        ],
      },
      {
        label: 'Partner',
        items: [
          'No easy way to verify a corporate program member at the point of visit',
          'Hard to measure the actual flow of customers coming specifically from the partnership',
          'Updating offer terms requires coordination with HR and multiple stakeholders',
          'Not enough data to understand whether the partnership delivers measurable results',
        ],
      },
    ],
    featuresBadge: 'All included',
    featuresH2a: '12 features',
    featuresH2b: 'in one subscription',
    featuresSubtitle: 'Every tool built for a complete corporate loyalty program',
    featureLabels: [
      'Platform access',
      'Apple Wallet card',
      'Corporate perks catalog',
      'Member card (QR ID)',
      'Company event feed',
      'Usage analytics',
      'Content management',
      'HR / Marketing dashboard',
      'Technical support',
      'Expiry control',
      'Onboarding & training',
      'Dedicated partner manager',
    ],
    walletSub: 'Membership right on your phone',
    clockLabel: 'Expiry control',
    clockDesc: 'Card is automatically deactivated when the period expires. Access to perks is preserved only for active program members.',
    managerBadge: 'Dedicated Manager',
    managerTitle: 'Partner Relations Manager',
    managerDesc: 'A dedicated Sagi manager independently negotiates with partners, agrees on terms, and keeps the perks catalog stocked with current offers. Your team does not need to spend time on this.',
    managerItems: ['Partner negotiations', 'Catalog management', 'Terms control'],
    toolsBadge: 'Operational Control',
    toolsH2: 'Tools',
    toolsSubtitle: 'Full management cycle in one dashboard.',
    adminLabel: 'For HR / Marketing',
    adminTitle: 'Control Panel',
    adminItems: [
      { t: 'Expiry control', d: 'Auto-block cards when the period expires. Push notifications for renewals.' },
      { t: 'Content management', d: 'Instant updates to offers, partners, and terms with no manual work.' },
      { t: 'Usage analytics', d: 'Perk statistics: which categories are popular and for which member groups.' },
      { t: 'Member base', d: 'Manage employees and clients, renewal history, card statuses in real time.' },
    ],
    partnerLabel: 'For Partners',
    partnerTitle: 'Partner Dashboard',
    partnerItems: [
      { t: 'QR card scanning', d: 'Instant member verification at point of visit — no plastic cards needed.' },
      { t: 'Offer management', d: 'Create and edit discounts, promotions, and exclusive conditions.' },
      { t: 'Visit statistics', d: 'Measurable customer flow from the corporate program, card scan data.' },
      { t: 'Dedicated manager', d: 'A dedicated Sagi manager supports the partner at every stage.' },
    ],
    aboutDesc: 'Loyalty platform for businesses in Kazakhstan and the CIS. We bring back up to 70% of customers and automate marketing.',
    aboutStats: [
      { v: '1000', l: 'businesses trust us' },
      { v: '3M+', l: 'users' },
      { v: '7 yrs', l: 'on the market' },
    ],
    trustedBy: 'Trusted by',
    pricingBadge: 'Transparent Pricing',
    pricingH2a: 'Two formats,',
    pricingH2b: 'one product',
    pricingSubtitle: 'Choose your format — an anonymous card or a personal program for each member.',
    anonBadge: 'No personal data',
    anonTitle: 'Corporate Card',
    anonDesc: 'One digital card for the entire organization. Employees show it at partner locations — no registration or personal data stored.',
    anonFeatures: [
      'One card for the organization',
      'QR code for partner scanning',
      'Corporate perks catalog',
      'Company event and news feed',
      'No personal member data collected',
    ],
    anonNote: 'Perfect for a pilot or small teams',
    anonCta: 'Get pricing',
    volumeBadge: 'Personal Program',
    volumeTitle: 'A card for each member',
    volumeDesc: 'Each employee or client gets a personal card with QR code and Apple Wallet. Full usage analytics included.',
    volumeHeader: ['Team size', 'Per member', 'Per month'],
    volumeTiers: [
      { range: 'Up to 100', price: '$17', total: 'from $1,700', highlight: false },
      { range: 'Up to 200', price: '$15', total: 'from $3,000', highlight: false },
      { range: 'Up to 300', price: '$13', total: 'from $3,900', highlight: false },
      { range: '300+', price: 'Custom', total: '', highlight: true },
    ],
    volumeCta: 'Calculate cost',
    includedLabel: 'Included in both plans',
    featureGroups: [
      { label: 'For Member', color: 'bg-[#EDFAF3] text-[#1E9E5A]', items: ['Apple Wallet card', 'Member card (QR ID)', 'Corporate perks catalog', 'Company event feed'] },
      { label: 'For HR / Marketing', color: 'bg-[#EEF2FF] text-[#4338CA]', items: ['Usage analytics', 'Content management', 'Expiry control', 'Dashboard'] },
      { label: 'Service & Support', color: 'bg-[#FFF7ED] text-[#C2410C]', items: ['Technical support', 'Onboarding & training', 'Dedicated manager', 'Platform access'] },
    ],
    pricingNote: 'Billed as a single invoice for your entire member base. Teams of 300+ get a custom quote.',
    roiBadge: 'Why it\'s worth it',
    roiH2a: 'What you get',
    roiH2b: 'beyond the product',
    roiItems: [
      { t: 'Reduced turnover', d: 'A digital product raises the perceived value of perks. Employees and clients stay longer.' },
      { t: 'Lower operational costs', d: 'The catalog and member base update in a couple of clicks. No manual team effort.' },
      { t: 'Analytics & transparency', d: 'Clear data on how perks are used. For informed HR and marketing decisions.' },
    ],
    footerBadge: 'Platform ready to launch',
    footerH2: 'Sagi Community: the technology backbone of corporate loyalty',
    footerDesc: 'A modern platform for digitalizing employee and client perks. Full control. Live community. Measurable results.',
  },
};

type Lang = keyof typeof T;
type Translations = typeof T['ru'];

function FeatureGroupList({ t }: { t: Translations }) {
  return (
    <div className="space-y-8">
      {t.featureGroups.map((g, gi) => (
        <div key={g.label}>
          <div className="flex justify-center mb-5">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider ${g.color}`}>
              {g.label}
            </div>
          </div>
          <div className="grid grid-cols-2 max-w-2xl mx-auto gap-y-3">
            {g.items.map((label, fi) => (
              <div key={label} className="flex items-center gap-3 px-4">
                <CheckCircle size={16} style={{ color: GREEN, flexShrink: 0 }} />
                <span className="text-[15px] font-semibold text-[#1F2937]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PainBlock({ t }: { t: Translations }) {
  const icons = [<Building2 size={20} />, <CircleUser size={20} />, <ShoppingBag size={20} />];
  const styles = [
    { color: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE' },
    { color: '#2ABB6F', bg: '#EDFAF3', border: '#B6EDD2' },
    { color: '#C2410C', bg: '#FFF7ED', border: '#FED7AA' },
  ];

  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            {t.painBadge}
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            {t.painH2a}<br />
            <span className="green-text">{t.painH2b}</span>
          </h2>
          <p className="text-[#6B7280] text-lg">{t.painSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.painGroups.map((g, i) => (
            <div key={g.label} className="rounded-2xl p-6 border" style={{ background: styles[i].bg, borderColor: styles[i].border }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: styles[i].color, color: 'white' }}>
                  {icons[i]}
                </div>
                <div className="text-base font-black" style={{ color: styles[i].color }}>{g.label}</div>
              </div>
              <div className="space-y-3">
                {g.items.map((text, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: styles[i].color }} />
                    <p className="text-sm text-[#374151] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SagiLanding() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = T[lang];

  const gridFeatures = t.featureLabels
    .map((label, i) => ({ icon: FEATURE_ICONS_LG[i], label }))
    .filter((_, i) => i !== 1 && i !== 9 && i !== 11);

  return (
    <div className="min-h-screen bg-white text-[#111827]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .btn-green { background: ${GREEN}; color: #fff; transition: background 0.18s; }
        .btn-green:hover { background: ${GREEN_DARK}; }

        .badge-green { background: #EDFAF3; color: ${GREEN_DARK}; border: 1px solid #B6EDD2; }
        .icon-green { background: #EDFAF3; color: ${GREEN_DARK}; }

        .card-border { border: 1.5px solid #F0F0F0; }
        .card-border:hover { border-color: #B6EDD2; }
        .card-lift { transition: transform 0.2s, box-shadow 0.2s; }
        .card-lift:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(42,187,111,0.10); }

        .hero-bg { background: linear-gradient(160deg, #F2FDF7 0%, #FFFFFF 55%); }
        .section-alt { background: #FAFAFA; }

        .annual-pill { background: ${GREEN}; color: #fff; }
        .price-card-featured { border: 2px solid ${GREEN} !important; box-shadow: 0 16px 48px rgba(42,187,111,0.12); }
        .divider { background: linear-gradient(90deg, transparent, #E8E8E8, transparent); }
        .cta-card { background: linear-gradient(140deg, #1D3828 0%, #0F2218 100%); }
        .green-text { color: ${GREEN}; }

        .lang-btn { transition: all 0.15s; }
        .lang-btn.active { background: ${GREEN}; color: #fff; }
        .lang-btn:not(.active) { color: #6B7280; }
        .lang-btn:not(.active):hover { color: #111827; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#F0F0F0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[22px] font-black tracking-tight text-[#111827]">sagi</span>
            <span className="text-xs font-semibold text-[#2ABB6F] border border-[#B6EDD2] bg-[#EDFAF3] rounded-full px-2.5 py-0.5 ml-1">{t.navBadge}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {t.navLinks.map(([label, href]) => (
                <a key={label} href={href} className="text-sm text-[#6B7280] hover:text-[#111827] transition font-medium">{label}</a>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-[#F5F5F5] rounded-lg p-1">
              {(['ru', 'en'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`lang-btn px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${lang === l ? 'active' : ''}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className="hero-bg pt-20 pb-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 text-center lg:text-left">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7">
              <Zap size={11} />
              {t.heroBadge}
            </span>

            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              {t.heroH1a}<br />
              <span className="green-text">{t.heroH1b}</span>
            </h1>

            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="#Тарифы" className="btn-green inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md">
                {t.heroCta} <ArrowRight size={17} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {t.heroStats.map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black green-text">{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Apple Wallet Card */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
              <div className="absolute -inset-8 rounded-full opacity-30" style={{ background: `radial-gradient(ellipse, ${GREEN}55, transparent 70%)` }} />
              <div className="relative rounded-[2.6rem] overflow-hidden" style={{
                background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DARK} 100%)`,
                padding: '36px 32px 40px',
                boxShadow: '0 40px 96px rgba(42,187,111,0.32), 0 8px 24px rgba(0,0,0,0.10)',
              }}>
                <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-white/10" />
                <div className="absolute -bottom-14 -left-12 w-44 h-44 rounded-full bg-white/10" />
                <div className="relative">
                  <div className="text-[11px] text-white/60 font-semibold tracking-[0.15em] uppercase mb-1">Corporate Member</div>
                  <div className="text-white font-black text-[38px] tracking-tight mb-10">Premium</div>
                  <div className="mb-10">
                    <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Cardholder</div>
                    <div className="text-white font-bold text-lg">Alima Alieva</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Valid thru</div>
                      <div className="text-white font-mono font-bold text-lg">08/26</div>
                    </div>
                    <div className="w-[72px] h-[72px] bg-white rounded-2xl flex items-center justify-center p-1.5">
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="18" height="18" rx="2" fill="#111"/><rect x="3" y="3" width="12" height="12" rx="1" fill="white"/><rect x="6" y="6" width="6" height="6" fill="#111"/>
                        <rect x="36" y="0" width="18" height="18" rx="2" fill="#111"/><rect x="39" y="3" width="12" height="12" rx="1" fill="white"/><rect x="42" y="6" width="6" height="6" fill="#111"/>
                        <rect x="0" y="36" width="18" height="18" rx="2" fill="#111"/><rect x="3" y="39" width="12" height="12" rx="1" fill="white"/><rect x="6" y="42" width="6" height="6" fill="#111"/>
                        <rect x="21" y="0" width="3" height="3" fill="#111"/><rect x="27" y="0" width="3" height="3" fill="#111"/><rect x="24" y="3" width="3" height="3" fill="#111"/><rect x="30" y="3" width="3" height="3" fill="#111"/>
                        <rect x="21" y="6" width="3" height="3" fill="#111"/><rect x="27" y="6" width="6" height="3" fill="#111"/><rect x="21" y="12" width="6" height="3" fill="#111"/><rect x="30" y="12" width="3" height="3" fill="#111"/>
                        <rect x="0" y="21" width="3" height="3" fill="#111"/><rect x="6" y="21" width="6" height="3" fill="#111"/><rect x="15" y="21" width="3" height="3" fill="#111"/><rect x="21" y="21" width="3" height="3" fill="#111"/>
                        <rect x="27" y="21" width="6" height="3" fill="#111"/><rect x="36" y="21" width="3" height="3" fill="#111"/><rect x="42" y="21" width="6" height="3" fill="#111"/><rect x="51" y="21" width="3" height="3" fill="#111"/>
                        <rect x="3" y="24" width="6" height="3" fill="#111"/><rect x="12" y="24" width="3" height="3" fill="#111"/><rect x="18" y="24" width="6" height="3" fill="#111"/><rect x="27" y="24" width="3" height="3" fill="#111"/>
                        <rect x="33" y="24" width="6" height="3" fill="#111"/><rect x="45" y="24" width="3" height="3" fill="#111"/><rect x="0" y="27" width="3" height="3" fill="#111"/><rect x="9" y="27" width="3" height="3" fill="#111"/>
                        <rect x="15" y="27" width="6" height="3" fill="#111"/><rect x="24" y="27" width="6" height="3" fill="#111"/><rect x="36" y="27" width="6" height="3" fill="#111"/><rect x="48" y="27" width="6" height="3" fill="#111"/>
                        <rect x="21" y="33" width="3" height="3" fill="#111"/><rect x="27" y="33" width="6" height="3" fill="#111"/><rect x="36" y="33" width="3" height="3" fill="#111"/><rect x="42" y="33" width="3" height="3" fill="#111"/><rect x="51" y="33" width="3" height="3" fill="#111"/>
                        <rect x="21" y="36" width="6" height="3" fill="#111"/><rect x="30" y="36" width="3" height="3" fill="#111"/><rect x="39" y="36" width="6" height="3" fill="#111"/>
                        <rect x="21" y="42" width="3" height="3" fill="#111"/><rect x="27" y="42" width="6" height="3" fill="#111"/><rect x="36" y="42" width="3" height="3" fill="#111"/><rect x="45" y="42" width="6" height="3" fill="#111"/>
                        <rect x="24" y="45" width="3" height="3" fill="#111"/><rect x="30" y="45" width="6" height="3" fill="#111"/><rect x="39" y="45" width="3" height="3" fill="#111"/><rect x="48" y="45" width="3" height="3" fill="#111"/>
                        <rect x="21" y="48" width="6" height="3" fill="#111"/><rect x="30" y="48" width="3" height="3" fill="#111"/><rect x="36" y="48" width="6" height="3" fill="#111"/><rect x="45" y="48" width="6" height="3" fill="#111"/>
                        <rect x="24" y="51" width="6" height="3" fill="#111"/><rect x="33" y="51" width="3" height="3" fill="#111"/><rect x="42" y="51" width="3" height="3" fill="#111"/><rect x="51" y="51" width="3" height="3" fill="#111"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-14 top-10 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0]">
                <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.36.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">Apple Wallet</div>
                  <div className="text-[9px] text-[#9CA3AF]">{t.cardAdded}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          APP PREVIEW
      ══════════════════════════ */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <Smartphone size={11} />
              {t.appBadge}
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">{t.appH2a}<br />{t.appH2b}</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">{t.appSubtitle}</p>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-center gap-8 lg:gap-12">
            {[
              { src: '/profile.png', offset: 'md:mb-10', objPos: 'calc(20% - 9.5px) -1px' },
              { src: '/news.png', offset: '', objPos: 'calc(20% - 6.5px) -2px' },
              { src: '/offers.png', offset: 'md:mb-10', objPos: 'calc(20% - 7px) -2.5px' },
            ].map(({ src, offset, objPos }, i) => (
              <div key={src} className={`flex flex-col items-center gap-5 ${offset}`}>
                <div className="relative" style={{ width: 220 }}>
                  <div className="relative rounded-[3rem] overflow-hidden" style={{
                    background: '#1A1A1A', padding: '10px',
                    boxShadow: '0 0 0 1px #3a3a3a, 0 32px 64px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}>
                    <div className="relative rounded-[2.3rem] overflow-hidden bg-black" style={{ aspectRatio: '9/19.5' }}>
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-[72px] h-[22px] bg-black rounded-full" />
                      <img src={src} alt={t.screens[i].label} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: objPos }} draggable={false} />
                    </div>
                  </div>
                  <div className="absolute left-[-3px] top-[88px] w-[3px] h-[34px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
                  <div className="absolute left-[-3px] top-[132px] w-[3px] h-[34px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
                  <div className="absolute left-[-3px] top-[176px] w-[3px] h-[34px] rounded-l-sm" style={{ background: '#2a2a2a' }} />
                  <div className="absolute right-[-3px] top-[120px] w-[3px] h-[56px] rounded-r-sm" style={{ background: '#2a2a2a' }} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-[#111827]">{t.screens[i].label}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{t.screens[i].sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      <PainBlock t={t} />

      <div className="divider h-px" />

      {/* ══════════════════════════
          12 ФУНКЦИЙ / FEATURES
      ══════════════════════════ */}
      <section id="Возможности" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              {t.featuresBadge}
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">{t.featuresH2a}<br />{t.featuresH2b}</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">{t.featuresSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-5">
            {gridFeatures.map((f, i) => (
              <div key={i} className="card-border card-lift flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#FAFFFE] transition-colors">
                <div className="icon-green w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">{f.icon}</div>
                <span className="text-sm font-semibold text-[#374151]">{f.label}</span>
              </div>
            ))}

            {/* Apple Wallet featured */}
            <div className="card-lift flex items-center gap-4 p-4 rounded-2xl" style={{ background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DARK} 100%)`, border: `1.5px solid ${GREEN}` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/20">
                <CreditCard size={17} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{t.featureLabels[1]}</div>
                <div className="text-[11px] text-white/70 mt-0.5">{t.walletSub}</div>
              </div>
            </div>

            {/* Expiry span-2 */}
            <div className="card-border card-lift flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#FAFFFE] transition-colors sm:col-span-2 lg:col-span-2">
              <div className="icon-green w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={17} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#374151]">{t.clockLabel}</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">{t.clockDesc}</div>
              </div>
            </div>
          </div>

          {/* Manager highlight */}
          <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ background: 'linear-gradient(135deg, #EDFAF3 0%, #F7FDF9 100%)', border: '1.5px solid #B6EDD2' }}>
            <div className="icon-green w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users size={22} />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: GREEN }}>{t.managerBadge}</div>
              <div className="text-base font-black text-[#111827] mb-1.5">{t.managerTitle}</div>
              <p className="text-sm text-[#6B7280] leading-relaxed">{t.managerDesc}</p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              {t.managerItems.map(item => (
                <div key={item} className="flex items-center gap-2 text-xs font-semibold" style={{ color: GREEN_DARK }}>
                  <CheckCircle size={13} style={{ color: GREEN }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          TOOLS
      ══════════════════════════ */}
      <section id="Бизнес" className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              {t.toolsBadge}
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">{t.toolsH2}</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">{t.toolsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-green w-10 h-10 rounded-xl flex items-center justify-center"><Shield size={18} /></div>
                <div>
                  <div className="text-[11px] text-[#9CA3AF] uppercase tracking-wider font-semibold">{t.adminLabel}</div>
                  <h3 className="text-xl font-black text-[#111827]">{t.adminTitle}</h3>
                </div>
              </div>
              <div className="space-y-3">
                {t.adminItems.map((item, i) => (
                  <div key={i} className="card-border card-lift flex gap-4 p-4 rounded-2xl bg-white">
                    <div className="icon-green w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      {[<Clock size={15} />, <RefreshCw size={15} />, <BarChart3 size={15} />, <Users size={15} />][i]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111827] mb-0.5">{item.t}</div>
                      <div className="text-sm text-[#6B7280] leading-relaxed">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-green w-10 h-10 rounded-xl flex items-center justify-center"><Store size={18} /></div>
                <div>
                  <div className="text-[11px] text-[#9CA3AF] uppercase tracking-wider font-semibold">{t.partnerLabel}</div>
                  <h3 className="text-xl font-black text-[#111827]">{t.partnerTitle}</h3>
                </div>
              </div>
              <div className="space-y-3">
                {t.partnerItems.map((item, i) => (
                  <div key={i} className="card-border card-lift flex gap-4 p-4 rounded-2xl bg-white">
                    <div className="icon-green w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      {[<Smartphone size={15} />, <RefreshCw size={15} />, <BarChart3 size={15} />, <Users size={15} />][i]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111827] mb-0.5">{item.t}</div>
                      <div className="text-sm text-[#6B7280] leading-relaxed">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          WHO WE ARE
      ══════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 22s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-6">
                <span className="text-[42px] font-black tracking-tight text-[#111827]">sagi</span>
                <span className="text-sm font-semibold text-[#2ABB6F] border border-[#B6EDD2] bg-[#EDFAF3] rounded-full px-3.5 py-1">Community</span>
              </div>
              <p className="text-[#6B7280] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">{t.aboutDesc}</p>
            </div>
            <div className="flex gap-8 lg:gap-12">
              {t.aboutStats.map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-4xl font-black green-text leading-none">{s.v}</div>
                  <div className="text-sm text-[#9CA3AF] mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-b border-[#F0F0F0] py-6 bg-[#FAFAFA]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C4C4C4] text-center mb-6">{t.trustedBy}</div>
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="marquee-track flex items-center gap-4 w-max">
              {[...Array(2)].map((_, repeat) =>
                [1,2,3,4,5,6,7,8].map(i => (
                  <div key={`${repeat}-${i}`} className="w-32 h-24 rounded-xl overflow-hidden bg-white border border-[#EFEFEF] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img src={`/brands/brand${i}.jpeg`} alt={`brand ${i}`} className="w-full h-full object-cover" draggable={false} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          PRICING
      ══════════════════════════ */}
      <section id="Тарифы" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              {t.pricingBadge}
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">{t.pricingH2a}<br />{t.pricingH2b}</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">{t.pricingSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* ── Анонимная карта ── */}
            <div className="card-border card-lift rounded-2xl p-8 bg-white flex flex-col">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit" style={{ background: '#EEF2FF', color: '#4338CA', border: '1px solid #C7D2FE' }}>
                {t.anonBadge}
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-3">{t.anonTitle}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{t.anonDesc}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {t.anonFeatures.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#374151]">
                    <CheckCircle size={15} style={{ color: GREEN, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#9CA3AF] italic mb-6">{t.anonNote}</p>
              <a href="mailto:info@sagi.kz" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 font-bold text-sm hover:bg-[#FAFFFE] transition" style={{ borderColor: GREEN, color: GREEN }}>
                {t.anonCta} <ChevronRight size={15} />
              </a>
            </div>

            {/* ── Персональная программа ── */}
            <div className="price-card-featured card-lift rounded-2xl p-8 bg-white flex flex-col">
              <div className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit">
                {t.volumeBadge}
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-3">{t.volumeTitle}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{t.volumeDesc}</p>

              {/* Volume table */}
              <div className="rounded-xl overflow-hidden border border-[#F0F0F0] mb-6 flex-1">
                <div className="grid grid-cols-3 bg-[#F9F9F9] px-4 py-2.5 border-b border-[#F0F0F0]">
                  {t.volumeHeader.map(h => (
                    <div key={h} className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">{h}</div>
                  ))}
                </div>
                {t.volumeTiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-4 py-3 border-b border-[#F0F0F0] last:border-0 ${tier.highlight ? 'bg-[#F2FDF7]' : 'bg-white'}`}
                  >
                    <div className={`text-sm font-bold ${tier.highlight ? 'green-text' : 'text-[#111827]'}`}>{tier.range}</div>
                    <div className={`text-sm font-bold ${tier.highlight ? 'green-text' : 'text-[#111827]'}`}>{tier.price}</div>
                    <div className="text-sm text-[#6B7280]">{tier.total || <span className="text-xs italic text-[#9CA3AF]">—</span>}</div>
                  </div>
                ))}
              </div>

              <a href="mailto:info@sagi.kz" className="btn-green w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm shadow-md">
                {t.volumeCta} <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Входит в оба тарифа */}
          <div className="card-border rounded-2xl p-8 bg-white">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-8">{t.includedLabel}</p>
            <FeatureGroupList t={t} />
          </div>

          <p className="text-center text-sm text-[#9CA3AF] mt-6">{t.pricingNote}</p>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          ROI
      ══════════════════════════ */}
      <section id="ROI" className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <TrendingUp size={11} />
              {t.roiBadge}
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">{t.roiH2a}<br />{t.roiH2b}</h2>
          </div>

          <div className="card-border rounded-2xl bg-white p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {t.roiItems.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="icon-green w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {[<Users size={17} />, <Zap size={17} />, <BarChart3 size={17} />][i]}
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#111827] mb-1.5">{v.t}</div>
                    <div className="text-base text-[#6B7280] leading-relaxed">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          CTA FOOTER
      ══════════════════════════ */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-card rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-white text-3xl font-black tracking-tight">sagi</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-7">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2ABB6F]" />
                {t.footerBadge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">{t.footerH2}</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">{t.footerDesc}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
