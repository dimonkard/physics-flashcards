// Физика: формулы по проверяемым элементам содержания ФИПИ (2026).
// Карточки по самостоятельным формульным соотношениям; частные производные формулы удалены.
const formulaData = [{id:'fipi-2026', exam:['oge','ege'], icon:'φ', title:'Формулы', description:'', formulas:[
  {
    "id": "speed",
    "name": "Равномерное прямолинейное движение",
    "formula": "v = \\frac{s}{t}",
    "note": "s — путь, t — время",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "x_uniform",
    "name": "Равномерное прямолинейное движение",
    "formula": "x = x_0 + v_x t",
    "note": "x₀ — начальная координата",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "acc",
    "name": "Ускорение материальной точки",
    "formula": "a = \\frac{v-v_0}{t}",
    "note": "v₀ — начальная скорость",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "v_acc",
    "name": "Равноускоренное прямолинейное движение",
    "formula": "v = v_0 + at",
    "note": "a — ускорение",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "s_acc",
    "name": "Равноускоренное прямолинейное движение",
    "formula": "s = v_0t + \\frac{at^2}{2}",
    "note": "для движения вдоль одной оси",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "v2",
    "name": "Равноускоренное прямолинейное движение",
    "formula": "v^2-v_0^2 = 2as",
    "note": "без времени",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "circle",
    "name": "Центростремительное ускорение точки",
    "formula": "a_n = \\frac{v^2}{R} = \\omega^2R",
    "note": "R — радиус окружности",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "period",
    "name": "Угловая и линейная скорость точки",
    "formula": "v = \\frac{2\\pi R}{T} = 2\\pi R\\nu",
    "note": "T — период, ν — частота",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "newton2",
    "name": "Второй закон Ньютона",
    "formula": "\\vec F_{рез} = m\\vec a",
    "note": "равнодействующая всех сил",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "gravity",
    "name": "Сила тяжести",
    "formula": "F_{тяж} = mg",
    "note": "g ≈ 9{,}8 м/с²",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "hooke",
    "name": "Закон Гука",
    "formula": "F_{упр} = k\\Delta l",
    "note": "k — жёсткость пружины",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "friction",
    "name": "Сила трения скольжения",
    "formula": "F_{тр} = \\mu N",
    "note": "N — сила реакции опоры",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "gravitation",
    "name": "Закон всемирного тяготения",
    "formula": "F = G\\frac{m_1m_2}{r^2}",
    "note": "r — расстояние между центрами масс",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "gplanet",
    "name": "Ускорение свободного падения",
    "formula": "g = G\\frac{M}{R^2}",
    "note": "у поверхности планеты",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "pressure",
    "name": "Давление",
    "formula": "p = \\frac{F}{S}",
    "note": "F — сила давления",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "hydro",
    "name": "Гидростатическое давление",
    "formula": "p = \\rho gh",
    "note": "h — глубина",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "arch",
    "name": "Сила Архимеда",
    "formula": "F_A = \\rho gV",
    "note": "V — объём погружённой части",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "moment",
    "name": "Момент силы относительно оси вращения",
    "formula": "M = Fl",
    "note": "l — плечо силы",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "balance",
    "name": "Условие равновесия рычага",
    "formula": "F_1l_1 = F_2l_2",
    "note": "моменты сил равны",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "work",
    "name": "Механическая работа",
    "formula": "A = Fs\\cos\\alpha",
    "note": "α — угол между силой и перемещением",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "power",
    "name": "Мощность",
    "formula": "P = \\frac{A}{t}",
    "note": "работа за единицу времени",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "ek",
    "name": "Кинетическая энергия",
    "formula": "E_k = \\frac{mv^2}{2}",
    "note": "энергия движения",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "ep",
    "name": "Потенциальная энергия тела в однородном поле тяжести",
    "formula": "E_p = mgh",
    "note": "относительно выбранного нулевого уровня",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "spring_e",
    "name": "Потенциальная энергия упруго деформированной пружины",
    "formula": "E_{упр} = \\frac{kx^2}{2}",
    "note": "x — деформация",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "eff",
    "name": "КПД",
    "formula": "\\eta = \\frac{A_{пол}}{A_{зат}}\\cdot100\\%",
    "note": "полезная работа к затраченной",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "heat",
    "name": "Количество теплоты при нагревании и охлаждении",
    "formula": "Q = cm\\Delta T",
    "note": "c — удельная теплоёмкость",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "fusion",
    "name": "Удельная теплота плавления",
    "formula": "Q = \\lambda m",
    "note": "λ — удельная теплота плавления",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "vap",
    "name": "Удельная теплота парообразования",
    "formula": "Q = Lm",
    "note": "L — удельная теплота парообразования",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "fuel",
    "name": "Удельная теплота сгорания топлива",
    "formula": "Q = qm",
    "note": "q — удельная теплота сгорания",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "heat_balance",
    "name": "Тепловой баланс",
    "formula": "Q_{отд} = Q_{пол}",
    "note": "для изолированной системы",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "amount",
    "name": "Количество вещества",
    "formula": "\\nu = \\frac{m}{M}",
    "note": "M — молярная масса",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "particles",
    "name": "Число частиц",
    "formula": "N = \\nu N_A",
    "note": "Nₐ — постоянная Авогадро",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mkt_pressure",
    "name": "Основное уравнение МКТ",
    "formula": "p = \\frac13 m_0 n\\overline{v^2}",
    "note": "n — концентрация частиц",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "ideal",
    "name": "Уравнение Менделеева — Клапейрона",
    "formula": "pV = \\nu RT",
    "note": "идеальный газ",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "first_law",
    "name": "Первый закон термодинамики",
    "formula": "Q = \\Delta U + A",
    "note": "A — работа, совершённая газом",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "gas_work",
    "name": "Работа газа при изобарном процессе",
    "formula": "A = p\\Delta V",
    "note": "p = const",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mono_u",
    "name": "Внутренняя энергия одноатомного идеального газа",
    "formula": "U = \\frac32\\nu RT",
    "note": "идеальный одноатомный газ",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "heat_engine",
    "name": "КПД теплового двигателя",
    "formula": "\\eta = \\frac{Q_1-Q_2}{Q_1}",
    "note": "Q₁ — теплота от нагревателя",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "coulomb",
    "name": "Закон Кулона",
    "formula": "F = k\\frac{|q_1q_2|}{r^2}",
    "note": "для точечных зарядов",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "efield",
    "name": "Напряжённость электрического поля",
    "formula": "E = \\frac{F}{q}",
    "note": "сила на единичный положительный заряд",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "point_e",
    "name": "Напряжённость поля точечного заряда",
    "formula": "E = k\\frac{|q|}{r^2}",
    "note": "r — расстояние до заряда",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "voltage",
    "name": "Напряжение",
    "formula": "U = \\frac{A}{q}",
    "note": "работа поля на единицу заряда",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "cap",
    "name": "Электроёмкость конденсатора",
    "formula": "C = \\frac{q}{U}",
    "note": "для конденсатора",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "cap_energy",
    "name": "Энергия конденсатора",
    "formula": "W = \\frac{CU^2}{2}",
    "note": "также W=qU/2",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "current",
    "name": "Сила тока",
    "formula": "I = \\frac{q}{t}",
    "note": "заряд через поперечное сечение за время t",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "ohm",
    "name": "Закон Ома для участка цепи",
    "formula": "I = \\frac{U}{R}",
    "note": "U — напряжение",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "resistance",
    "name": "Сопротивление проводника",
    "formula": "R = \\rho\\frac{l}{S}",
    "note": "ρ — удельное сопротивление",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "series",
    "name": "Последовательное соединение",
    "formula": "R = R_1 + R_2 + \\ldots",
    "note": "ток одинаков во всех элементах",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "parallel",
    "name": "Параллельное соединение",
    "formula": "\\frac1R=\\frac1{R_1}+\\frac1{R_2}+\\ldots",
    "note": "напряжение одинаково на ветвях",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "electric_work",
    "name": "Работа электрического тока",
    "formula": "A = UIt",
    "note": "также A=I²Rt",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "electric_power",
    "name": "Мощность электрического тока",
    "formula": "P = UI",
    "note": "также P=I²R",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "joule",
    "name": "Закон Джоуля — Ленца",
    "formula": "Q = I^2Rt",
    "note": "теплота в проводнике",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "ampere",
    "name": "Сила Ампера",
    "formula": "F_A = BIl\\sin\\alpha",
    "note": "l — длина проводника в поле",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "lorentz",
    "name": "Сила Лоренца",
    "formula": "F_L = |q|vB\\sin\\alpha",
    "note": "для движущегося заряда",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "flux",
    "name": "Магнитный поток",
    "formula": "\\Phi = BS\\cos\\alpha",
    "note": "α — угол между B и нормалью",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "faraday",
    "name": "Закон электромагнитной индукции",
    "formula": "\\mathcal{E}_i = -\\frac{\\Delta\\Phi}{\\Delta t}",
    "note": "знак отражает правило Ленца",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "freq",
    "name": "Период и частота колебаний",
    "formula": "\\nu = \\frac1T",
    "note": "T — период",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "wave",
    "name": "Скорость волны",
    "formula": "v = \\lambda\\nu",
    "note": "λ — длина волны",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "spring_period",
    "name": "Период пружинного маятника",
    "formula": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
    "note": "для малых колебаний",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "pendulum",
    "name": "Период математического маятника",
    "formula": "T = 2\\pi\\sqrt{\\frac{l}{g}}",
    "note": "для малых углов отклонения",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "refract",
    "name": "Законы преломления света",
    "formula": "n_1\\sin\\alpha = n_2\\sin\\beta",
    "note": "α — угол падения",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "index",
    "name": "Абсолютный показатель преломления",
    "formula": "n = \\frac{c}{v}",
    "note": "c — скорость света в вакууме",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "lens",
    "name": "Формула тонкой линзы",
    "formula": "\\frac1F = \\frac1d + \\frac1f",
    "note": "d — расстояние до предмета, f — до изображения",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "opt_power",
    "name": "Оптическая сила линзы",
    "formula": "D = \\frac1F",
    "note": "F в метрах, D в диоптриях",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "magnification",
    "name": "Линейное увеличение",
    "formula": "\\Gamma = \\frac{H}{h} = \\frac{f}{d}",
    "note": "H и h — размеры изображения и предмета",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "photon",
    "name": "Энергия фотона",
    "formula": "E = h\\nu = \\frac{hc}{\\lambda}",
    "note": "h — постоянная Планка",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "photo",
    "name": "Уравнение Эйнштейна для фотоэффекта",
    "formula": "h\\nu = A_{вых}+E_{k,max}",
    "note": "Aвых — работа выхода",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mass_energy",
    "name": "Связь массы и энергии",
    "formula": "E = mc^2",
    "note": "эквивалентность массы и энергии",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "avg_speed",
    "name": "Средняя путевая скорость",
    "formula": "v_{ср}=\\frac{s_{общ}}{t_{общ}}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "displacement",
    "name": "Перемещение вдоль оси",
    "formula": "\\Delta x=x-x_0",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "acc_x",
    "name": "Ускорение материальной точки",
    "formula": "a_x=\\frac{v_x-v_{0x}}{t}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "x_acc",
    "name": "Равноускоренное прямолинейное движение",
    "formula": "x=x_0+v_{0x}t+\\frac{a_xt^2}{2}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "s_av_acc",
    "name": "Равноускоренное прямолинейное движение",
    "formula": "s=\\frac{v_0+v}{2}t",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "omega",
    "name": "Угловая и линейная скорость точки",
    "formula": "\\omega=\\frac{2\\pi}{T}=2\\pi\\nu",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "impulse",
    "name": "Импульс тела",
    "formula": "\\vec p=m\\vec v",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "impulse_force",
    "name": "Импульс силы",
    "formula": "\\vec F\\Delta t=\\Delta\\vec p",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mom_cons",
    "name": "Закон сохранения импульса",
    "formula": "\\sum\\vec p_{до}=\\sum\\vec p_{после}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "work_energy",
    "name": "Теорема о кинетической энергии",
    "formula": "A_{рез}=\\Delta E_k",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "energy_cons",
    "name": "Закон сохранения механической энергии",
    "formula": "E_k+E_p=\\mathrm{const}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "density",
    "name": "Плотность вещества",
    "formula": "\\rho=\\frac{m}{V}",
    "note": "",
    "exam": [
      "oge",
      "ege"
    ]
  },
  {
    "id": "pascal",
    "name": "Передача давления гидропрессом",
    "formula": "\\frac{F_1}{S_1}=\\frac{F_2}{S_2}",
    "note": "",
    "exam": [
      "oge"
    ]
  },
  {
    "id": "torque_eq",
    "name": "Условие равновесия по моментам",
    "formula": "\\sum M_i=0",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "force_eq",
    "name": "Условие равновесия по силам",
    "formula": "\\sum\\vec F_i=0",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "power_mech",
    "name": "Мощность силы при движении",
    "formula": "P=Fv\\cos\\alpha",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "osc_eq",
    "name": "Уравнение гармонических колебаний",
    "formula": "x=A\\cos(\\omega t+\\varphi_0)",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "n_density",
    "name": "Концентрация частиц",
    "formula": "n=\\frac{N}{V}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "molecule_mass",
    "name": "Масса молекулы",
    "formula": "m_0=\\frac{M}{N_A}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mkt_p",
    "name": "Давление идеального газа через среднюю кинетическую энергию",
    "formula": "p=\\frac23 n\\overline{E_k}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mkt_temp",
    "name": "Средняя кинетическая энергия поступательного движения молекулы",
    "formula": "\\overline{E_k}=\\frac32 k_BT",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mkt_eos",
    "name": "Уравнение МКТ идеального газа",
    "formula": "p=nk_BT",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "gas_isoT",
    "name": "Закон Бойля — Мариотта",
    "formula": "pV=\\mathrm{const}\\quad(T=\\mathrm{const})",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "gas_isop",
    "name": "Закон Гей-Люссака",
    "formula": "\\frac VT=\\mathrm{const}\\quad(p=\\mathrm{const})",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "gas_isov",
    "name": "Закон Шарля",
    "formula": "\\frac pT=\\mathrm{const}\\quad(V=\\mathrm{const})",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "temp_kelvin",
    "name": "Перевод температуры в кельвины",
    "formula": "T=t_{^\\circ C}+273{,}15",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "u_change",
    "name": "Изменение внутренней энергии одноатомного идеального газа",
    "formula": "\\Delta U=\\frac32\\nu R\\Delta T",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "carnot",
    "name": "КПД идеального цикла Карно",
    "formula": "\\eta=1-\\frac{T_2}{T_1}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "humid",
    "name": "Относительная влажность воздуха",
    "formula": "\\varphi=\\frac{p}{p_{нас}}\\cdot100\\%",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "charge_cons",
    "name": "Закон сохранения электрического заряда",
    "formula": "\\sum q_i=\\mathrm{const}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "charge_quant",
    "name": "Квантование электрического заряда",
    "formula": "q=Ne",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "field_force",
    "name": "Сила в электрическом поле",
    "formula": "\\vec F=q\\vec E",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "potential",
    "name": "Потенциал электрического поля",
    "formula": "\\varphi=\\frac{W_p}{q}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "potential_diff",
    "name": "Разность потенциалов",
    "formula": "U_{12}=\\varphi_1-\\varphi_2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "homog_e",
    "name": "Напряжённость однородного поля",
    "formula": "E=\\frac Ud",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "point_potential",
    "name": "Потенциал точечного заряда",
    "formula": "\\varphi=k\\frac qr",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "plate_cap",
    "name": "Ёмкость плоского конденсатора",
    "formula": "C=\\frac{\\varepsilon\\varepsilon_0 S}{d}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "cap_series",
    "name": "Последовательное соединение конденсаторов",
    "formula": "\\frac1C=\\sum_i\\frac1{C_i}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "cap_parallel",
    "name": "Параллельное соединение конденсаторов",
    "formula": "C=\\sum_i C_i",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "full_ohm",
    "name": "Закон Ома для полной цепи",
    "formula": "I=\\frac{\\mathcal E}{R+r}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "emf",
    "name": "Электродвижущая сила источника",
    "formula": "\\mathcal E=\\frac{A_{ст}}q",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "terminal_volt",
    "name": "Напряжение на зажимах источника",
    "formula": "U=\\mathcal E-Ir",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "series_current",
    "name": "Сила тока при последовательном соединении",
    "formula": "I=I_1=I_2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "parallel_current",
    "name": "Сила тока при параллельном соединении",
    "formula": "I=I_1+I_2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "series_voltage",
    "name": "Напряжение при последовательном соединении",
    "formula": "U=U_1+U_2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "parallel_voltage",
    "name": "Напряжение при параллельном соединении",
    "formula": "U=U_1=U_2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "ind_energy",
    "name": "Энергия магнитного поля катушки",
    "formula": "W=\\frac{LI^2}{2}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "lc_period",
    "name": "Период колебаний в LC-контуре",
    "formula": "T=2\\pi\\sqrt{LC}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "lc_omega",
    "name": "Циклическая частота колебательного контура",
    "formula": "\\omega=\\frac1{\\sqrt{LC}}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "reflection",
    "name": "Законы отражения света",
    "formula": "\\alpha=\\beta",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "critical_angle",
    "name": "Предельный угол полного внутреннего отражения",
    "formula": "\\sin\\alpha_{кр}=\\frac{n_2}{n_1}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "lens_zoom",
    "name": "Линейное увеличение линзы по расстояниям",
    "formula": "|\\Gamma|=\\frac{|f|}{d}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "diffraction",
    "name": "Дифракционная решётка",
    "formula": "d\\sin\\varphi=k\\lambda",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "photon_mom",
    "name": "Импульс фотона",
    "formula": "p=\\frac h\\lambda=\\frac Ec",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "stop_potential",
    "name": "Запирающее напряжение фотоэффекта",
    "formula": "eU_{зап}=\\frac{mv_{max}^2}{2}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "threshold",
    "name": "Красная граница фотоэффекта",
    "formula": "\\lambda_{кр}=\\frac{hc}{A_{вых}}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "bohr",
    "name": "Постулаты Бора",
    "formula": "h\\nu=|E_n-E_m|",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "binding",
    "name": "Энергия связи ядра",
    "formula": "E_{св}=\\Delta mc^2",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "mass_defect",
    "name": "Дефект массы ядра",
    "formula": "\\Delta m=Zm_p+(A-Z)m_n-m_{ядра}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "nuclear_decay",
    "name": "Закон радиоактивного распада",
    "formula": "N=N_0 2^{-t/T_{1/2}}",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "decay_activity",
    "name": "Активность радиоактивного образца",
    "formula": "\\mathcal A=\\lambda N",
    "note": "",
    "exam": [
      "ege"
    ]
  },
  {
    "id": "nuclear_reaction",
    "name": "Энергетический выход ядерной реакции",
    "formula": "Q=(m_{до}-m_{после})c^2",
    "note": "",
    "exam": [
      "ege"
    ]
  }
]}];
