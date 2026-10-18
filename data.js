// Карточки перенесены только из загруженных PDF «Формулы ОГЭ» и «Формулы ЕГЭ».
// Названия сохранены по соответствующим документам. Один пункт PDF = одна карточка.
const formulaData = [
  {
    "id": "pdf-oge",
    "exam": [
      "oge"
    ],
    "icon": "φ",
    "title": "Формулы OGE",
    "description": "Из загруженного PDF",
    "formulas": [
      {
        "id": "oge-001",
        "name": "Равномерное прямолинейное движение",
        "formula": "\\begin{gathered}x=x_0+v_xt \\\\ S_x=v_xt \\\\ v_x=\\mathrm{const},\\ a_x=0\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-002",
        "name": "Равноускоренное прямолинейное движение",
        "formula": "\\begin{gathered}x=x_0+v_{0x}t+\\frac{a_xt^2}{2} \\\\ v_x=v_{0x}+a_xt\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-003",
        "name": "Перемещение при равноускоренном движении",
        "formula": "\\begin{gathered}S_x=v_{0x}t+\\frac{a_xt^2}{2} \\\\ S_x=\\frac{v_x^2-v_{0x}^2}{2a_x} \\\\ S=\\frac{v_1+v_2}{2}\\,t\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-004",
        "name": "Ускорение",
        "formula": "a=\\frac{v-v_0}{t}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-005",
        "name": "Движение по окружности",
        "formula": "\\begin{gathered}v=\\frac{2\\pi R}{T}=2\\pi R\\nu \\\\ \\omega=\\frac{2\\pi}{T}=2\\pi\\nu \\\\ v=\\omega R\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-006",
        "name": "Центростремительное ускорение",
        "formula": "a_{\\mathrm{цс}}=\\frac{v^2}{R}=\\omega^2R",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-007",
        "name": "Плотность вещества",
        "formula": "\\rho=\\frac{m}{V}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-008",
        "name": "Второй закон Ньютона",
        "formula": "\\vec F=m\\vec a",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-009",
        "name": "Закон всемирного тяготения",
        "formula": "F=G\\frac{m_1m_2}{R^2}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-010",
        "name": "Сила тяжести",
        "formula": "F=mg",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-011",
        "name": "Сила упругости",
        "formula": "F_{\\mathrm{упр}}=k\\Delta l",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-012",
        "name": "Сила трения",
        "formula": "F_{\\mathrm{тр}}=\\mu N",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-013",
        "name": "Давление",
        "formula": "p=\\frac{F}{S}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-014",
        "name": "Момент силы",
        "formula": "M=Fl",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-015",
        "name": "Давление внутри жидкости",
        "formula": "p=\\rho_{\\mathrm{ж}}gh",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-016",
        "name": "Сила Архимеда",
        "formula": "F_{\\mathrm{Арх}}=\\rho_{\\mathrm{ж}}gV_{\\mathrm{погруж}}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-017",
        "name": "Импульс тела",
        "formula": "\\vec p=m\\vec v",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-018",
        "name": "Работа силы",
        "formula": "A=Fs",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-019",
        "name": "Мощность",
        "formula": "P=\\frac{A}{t}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-020",
        "name": "Кинетическая энергия",
        "formula": "E_{\\mathrm{k}}=\\frac{mv^2}{2}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-021",
        "name": "Потенциальная энергия",
        "formula": "E_{\\mathrm{п}}=mgh",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-022",
        "name": "Потенциально упругая энергия",
        "formula": "E_{\\mathrm{п}}=\\frac{kx^2}{2}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-023",
        "name": "Закон сохранения энергии",
        "formula": "E_{\\mathrm{k}1}+E_{\\mathrm{п}1}=E_{\\mathrm{k}2}+E_{\\mathrm{п}2}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-024",
        "name": "Закон изменения энергии",
        "formula": "\\Delta E=A_{\\mathrm{тр}}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-025",
        "name": "Длина волны",
        "formula": "\\lambda=vT=\\frac{v}{\\nu}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-026",
        "name": "Количество теплоты (нагрев)",
        "formula": "Q=cm(t_2-t_1)",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-027",
        "name": "Количество теплоты (плавление)",
        "formula": "Q=\\lambda m",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-028",
        "name": "Количество теплоты (парообразование)",
        "formula": "Q=Lm",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-029",
        "name": "Количество теплоты (сгорание топлива)",
        "formula": "Q=qm",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-030",
        "name": "КПД",
        "formula": "\\eta=\\frac{A_{\\mathrm{п}}}{A_{\\mathrm{з}}}\\cdot100\\%",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-031",
        "name": "Сила тока",
        "formula": "I=\\frac{q}{t}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-032",
        "name": "Напряжение",
        "formula": "U=\\frac{A}{q}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-033",
        "name": "Сопротивление",
        "formula": "R=\\frac{\\rho l}{S}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-034",
        "name": "Закон Ома",
        "formula": "I=\\frac{U}{R}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-035",
        "name": "Последовательное соединение",
        "formula": "\\begin{gathered}I_1=I_2 \\\\ U=U_1+U_2 \\\\ R=R_1+R_2\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-036",
        "name": "Параллельное соединение",
        "formula": "\\begin{gathered}I=I_1+I_2 \\\\ U_1=U_2 \\\\ \\frac1R=\\frac1{R_1}+\\frac1{R_2} \\\\ R=\\frac{R_1R_2}{R_1+R_2}\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-037",
        "name": "Работа электрического тока",
        "formula": "\\begin{gathered}A=UIt \\\\ A=\\frac{U^2}{R}t \\\\ A=I^2Rt\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-038",
        "name": "Закон Джоуля-Ленца",
        "formula": "Q=I^2Rt",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-039",
        "name": "Мощность электрического тока",
        "formula": "\\begin{gathered}P=UI \\\\ P=\\frac{U^2}{R} \\\\ P=I^2R\\end{gathered}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-040",
        "name": "Закон преломления света",
        "formula": "\\frac{\\sin\\alpha}{\\sin\\beta}=\\frac{n_2}{n_1}",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-041",
        "name": "Оптическая сила линзы",
        "formula": "D=\\frac1F",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-042",
        "name": "Частота",
        "formula": "\\nu=\\frac1T",
        "note": "",
        "exam": [
          "oge"
        ]
      },
      {
        "id": "oge-043",
        "name": "Закон Кулона",
        "formula": "F=k\\frac{|q_1|\\,|q_2|}{r^2}",
        "note": "",
        "exam": [
          "oge"
        ]
      }
    ]
  },
  {
    "id": "pdf-ege",
    "exam": [
      "ege"
    ],
    "icon": "φ",
    "title": "Формулы EGE",
    "description": "Из загруженного PDF",
    "formulas": [
      {
        "id": "ege-001",
        "name": "Равномерное прямолинейное движение",
        "formula": "\\begin{gathered}x=x_0+v_xt \\\\ v=\\frac{s}{t}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-002",
        "name": "Равноускоренное прямолинейное движение",
        "formula": "x=x_0+v_{0x}t+\\frac{a_xt^2}{2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-003",
        "name": "Ускорение",
        "formula": "a=\\frac{v-v_0}{t}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-004",
        "name": "Скорость",
        "formula": "v=v_0+at",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-005",
        "name": "Перемещение",
        "formula": "\\begin{gathered}s=v_0t+\\frac{at^2}{2} \\\\ s=\\frac{v^2-v_0^2}{2a} \\\\ s=\\frac{v_0+v}{2}\\,t\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-006",
        "name": "Центростремительное ускорение",
        "formula": "a_{\\mathrm{ц}}=\\frac{v^2}{R}=\\omega^2R",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-007",
        "name": "Линейная скорость",
        "formula": "v=\\omega R",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-008",
        "name": "Угловая скорость",
        "formula": "\\begin{gathered}\\omega=\\frac{2\\pi}{T} \\\\ \\omega=2\\pi\\nu\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-009",
        "name": "Плотность вещества",
        "formula": "\\rho=\\frac{m}{V}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-010",
        "name": "Второй закон Ньютона",
        "formula": "F=ma",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-011",
        "name": "Второй закон Ньютона в импульсной форме",
        "formula": "Ft=\\Delta p",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-012",
        "name": "Закон всемирного тяготения",
        "formula": "F=G\\frac{m_1m_2}{R^2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-013",
        "name": "Сила упругости",
        "formula": "F_{\\mathrm{упр}}=k\\Delta x",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-014",
        "name": "Сила трения",
        "formula": "F_{\\mathrm{тр}}=\\mu N",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-015",
        "name": "Давление",
        "formula": "p=\\frac{F}{S}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-016",
        "name": "Момент силы",
        "formula": "M=Fl",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-017",
        "name": "Условия равновесия твёрдого тела",
        "formula": "\\begin{gathered}M_1+M_2+\\dots=0 \\\\ F_1+F_2+\\dots=0\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-018",
        "name": "Давление в жидкости",
        "formula": "p=\\rho gh",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-019",
        "name": "Сила Архимеда",
        "formula": "F_A=\\rho gV",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-020",
        "name": "Импульс",
        "formula": "p=mv",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-021",
        "name": "Работа силы",
        "formula": "A=Fs\\cos\\alpha",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-022",
        "name": "Мощность силы",
        "formula": "P=\\frac{A}{t}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-023",
        "name": "Кинетическая энергия",
        "formula": "E_k=\\frac{mv^2}{2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-024",
        "name": "Потенциальная энергия",
        "formula": "E_{\\mathrm{п}}=mgh",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-025",
        "name": "Потенциально упругая энергия",
        "formula": "E_{\\mathrm{пу}}=\\frac{kx^2}{2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-026",
        "name": "Уравнение гармонического колебания",
        "formula": "x=A\\sin\\omega t",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-027",
        "name": "Максимальная скорость и ускорение колеблющегося тела",
        "formula": "\\begin{gathered}v_{\\max}=\\omega A \\\\ a_{\\max}=\\omega^2 A\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-028",
        "name": "Период колебаний",
        "formula": "\\begin{gathered}T=\\frac{1}{\\nu} \\\\ T=\\frac{2\\pi}{\\omega}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-029",
        "name": "Период математического маятника",
        "formula": "T=2\\pi\\sqrt{\\frac{l}{g}}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-030",
        "name": "Период пружинного маятника",
        "formula": "T=2\\pi\\sqrt{\\frac{m}{k}}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-031",
        "name": "Длина волны",
        "formula": "\\begin{gathered}\\lambda=\\frac{v}{\\nu} \\\\ \\lambda=vT\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-032",
        "name": "Количество вещества",
        "formula": "\\begin{gathered}\\nu=\\frac{m}{M} \\\\ \\nu=\\frac{N}{N_A}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-033",
        "name": "Основное уравнение МКТ",
        "formula": "\\begin{gathered}p=\\frac13m_0n\\overline{v^2} \\\\ p=\\frac23n\\overline{E_k}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-034",
        "name": "Абсолютная температура",
        "formula": "T=t+273",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-035",
        "name": "Средняя кинетическая энергия молекул",
        "formula": "\\overline{E_k}=\\frac32kT",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-036",
        "name": "Давление газа",
        "formula": "p=nkT",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-037",
        "name": "Уравнение Менделеева – Клапейрона",
        "formula": "\\begin{gathered}pV=\\frac{m}{\\mu}RT \\\\ pV=\\nu RT \\\\ p=\\frac{\\rho}{\\mu}RT\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-038",
        "name": "Внутренняя энергия одноатомного идеального газа",
        "formula": "\\begin{gathered}U=\\frac32\\nu RT \\\\ U=\\frac{3m}{2\\mu}RT \\\\ U=\\frac32pV\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-039",
        "name": "Закон Дальтона",
        "formula": "p=p_1+p_2+\\dots",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-040",
        "name": "Изотермический процесс",
        "formula": "\\begin{gathered}T=\\mathrm{const} \\\\ pV=\\mathrm{const}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-041",
        "name": "Изохорический процесс",
        "formula": "\\begin{gathered}V=\\mathrm{const} \\\\ \\frac{p}{T}=\\mathrm{const}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-042",
        "name": "Изобарический процесс",
        "formula": "\\begin{gathered}p=\\mathrm{const} \\\\ \\frac{V}{T}=\\mathrm{const}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-043",
        "name": "Относительная влажность",
        "formula": "\\begin{gathered}\\varphi=\\frac{p_a}{p_\\mathrm{н}}\\cdot100\\% \\\\ \\varphi=\\frac{\\rho_a}{\\rho_\\mathrm{н}}\\cdot100\\%\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-044",
        "name": "Количество теплоты для нагревания/охлаждения",
        "formula": "Q=cm(t_2-t_1)",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-045",
        "name": "Количество теплоты для плавления/кристаллизации",
        "formula": "Q=\\lambda m",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-046",
        "name": "Количество теплоты для парообразования/конденсации",
        "formula": "Q=Lm",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-047",
        "name": "Количество теплоты для сгорания топлива",
        "formula": "Q=qm",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-048",
        "name": "Работа газа",
        "formula": "A=p\\Delta V",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-049",
        "name": "Первый закон термодинамики",
        "formula": "Q=\\Delta U+A",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-050",
        "name": "КПД теплового двигателя",
        "formula": "\\begin{gathered}\\eta=\\frac{A_\\mathrm{п}}{Q_\\mathrm{н}}\\cdot100\\% \\\\ \\eta=\\frac{Q_\\mathrm{н}-Q_\\mathrm{х}}{Q_\\mathrm{н}}\\cdot100\\%\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-051",
        "name": "Максимальное значение КПД. Цикл Карно",
        "formula": "\\eta=\\frac{T_\\mathrm{н}-T_\\mathrm{х}}{T_\\mathrm{н}}\\cdot100\\%",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-052",
        "name": "Закон Кулона",
        "formula": "\\begin{gathered}F=k\\frac{q_1q_2}{r^2} \\\\ F=\\frac{1}{4\\pi\\varepsilon\\varepsilon_0}\\frac{q_1q_2}{r^2}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-053",
        "name": "Напряжённость электрического поля",
        "formula": "E=\\frac{F}{q}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-054",
        "name": "Напряжённость точечного заряда",
        "formula": "E=k\\frac{q}{r^2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-055",
        "name": "Потенциал электростатического поля",
        "formula": "\\varphi=\\frac{W}{q}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-056",
        "name": "Напряжение",
        "formula": "U=\\frac{A}{q}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-057",
        "name": "Связь напряжённости и напряжения для однородного электростатического поля",
        "formula": "U=Ed",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-058",
        "name": "Принцип суперпозиции электрических полей",
        "formula": "\\vec E=\\vec E_1+\\vec E_2+\\dots",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-059",
        "name": "Электроёмкость конденсатора",
        "formula": "C=\\frac{q}{U}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-060",
        "name": "Электроёмкость плоского конденсатора",
        "formula": "C=\\frac{\\varepsilon\\varepsilon_0 S}{d}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-061",
        "name": "Последовательное соединение конденсаторов",
        "formula": "\\begin{gathered}q=q_1=q_2 \\\\ U=U_1+U_2 \\\\ \\frac1C=\\frac1{C_1}+\\frac1{C_2}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-062",
        "name": "Параллельное соединение конденсаторов",
        "formula": "\\begin{gathered}q=q_1+q_2 \\\\ U=U_1=U_2 \\\\ C=C_1+C_2\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-063",
        "name": "Энергия заряженного конденсатора",
        "formula": "W=\\frac{CU^2}{2}=\\frac{q^2}{2C}=\\frac{qU}{2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-064",
        "name": "Сила тока",
        "formula": "I=\\frac{q}{t}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-065",
        "name": "Электрическое сопротивление",
        "formula": "R=\\frac{\\rho l}{S}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-066",
        "name": "Закон Ома для участка цепи",
        "formula": "I=\\frac{U}{R}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-067",
        "name": "ЭДС источника тока",
        "formula": "\\mathcal E=\\frac{A_{\\mathrm{ст}}}{q}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-068",
        "name": "Закон Ома для полной электрической цепи",
        "formula": "I=\\frac{\\mathcal E}{R+r}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-069",
        "name": "Последовательное соединение проводников",
        "formula": "\\begin{gathered}I=I_1=I_2 \\\\ U=U_1+U_2 \\\\ R=R_1+R_2\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-070",
        "name": "Параллельное соединение проводников",
        "formula": "\\begin{gathered}I=I_1+I_2 \\\\ U=U_1=U_2 \\\\ \\frac1R=\\frac1{R_1}+\\frac1{R_2} \\\\ R=\\frac{R_1R_2}{R_1+R_2}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-071",
        "name": "Работа электрического тока",
        "formula": "A=UIt=\\frac{U^2}{R}t=I^2Rt",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-072",
        "name": "Мощность электрического тока",
        "formula": "\\begin{gathered}P=\\frac{A}{t} \\\\ P=IU=I^2R=\\frac{U^2}{R}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-073",
        "name": "Закон Джоуля – Ленца",
        "formula": "\\begin{gathered}Q=A \\\\ Q=I^2Rt\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-074",
        "name": "Сила Ампера",
        "formula": "F_A=BIl\\sin\\alpha",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-075",
        "name": "Сила Лоренца",
        "formula": "F_\\mathrm{л}=qvB\\sin\\alpha",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-076",
        "name": "Поток вектора магнитной индукции",
        "formula": "\\Phi=BS\\cos\\alpha",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-077",
        "name": "Закон электромагнитной индукции",
        "formula": "\\mathcal E_i=-\\frac{\\Delta\\Phi}{\\Delta t}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-078",
        "name": "ЭДС индукции в движущемся проводнике",
        "formula": "\\mathcal E_i=Blv\\sin\\alpha",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-079",
        "name": "Магнитный поток в катушке",
        "formula": "\\Phi=LI",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-080",
        "name": "ЭДС самоиндукции",
        "formula": "\\mathcal E_{si}=L\\frac{\\Delta I}{\\Delta t}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-081",
        "name": "Энергия магнитного поля",
        "formula": "W=\\frac{LI^2}{2}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-082",
        "name": "Уравнение электромагнитного колебания",
        "formula": "\\begin{gathered}q=q_{\\max}\\sin\\omega t \\\\ I=q'=I_{\\max}\\cos\\omega t\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-083",
        "name": "Формула Томсона",
        "formula": "T=2\\pi\\sqrt{LC}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-084",
        "name": "Связь амплитуды заряда конденсатора с амплитудой силы тока",
        "formula": "I_{\\max}=q_{\\max}\\omega",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-085",
        "name": "Законы преломления света",
        "formula": "\\frac{\\sin\\alpha}{\\sin\\beta}=\\frac{n_2}{n_1}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-086",
        "name": "Абсолютный показатель преломления",
        "formula": "n=\\frac{c}{v}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-087",
        "name": "Оптическая сила тонкой линзы",
        "formula": "D=\\frac1F",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-088",
        "name": "Формула тонкой линзы",
        "formula": "\\frac1d+\\frac1f=\\frac1F",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-089",
        "name": "Увеличение, даваемое линзой",
        "formula": "\\begin{gathered}\\Gamma=\\frac{h}{H} \\\\ \\Gamma=\\frac{f}{d}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-090",
        "name": "Условия наблюдения максимумов интерференции",
        "formula": "\\Delta=\\lambda m",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-091",
        "name": "Условия наблюдения максимумов дифракции",
        "formula": "d\\sin\\varphi=m\\lambda",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-092",
        "name": "Энергия фотона",
        "formula": "\\begin{gathered}E=h\\nu \\\\ E=\\frac{hc}{\\lambda}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-093",
        "name": "Импульс фотона",
        "formula": "\\begin{gathered}p=\\frac{E}{c} \\\\ p=\\frac{h}{\\lambda}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-094",
        "name": "Уравнение Эйнштейна для фотоэффекта",
        "formula": "\\begin{gathered}E_\\phi=A_\\mathrm{вых}+E_{k\\max} \\\\ h\\nu=A_\\mathrm{вых}+\\frac{mv^2}{2} \\\\ E_{k\\max}=eU_\\mathrm{з}\\end{gathered}",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-095",
        "name": "Постулаты Бора",
        "formula": "h\\nu=|E_n-E_m|",
        "note": "",
        "exam": [
          "ege"
        ]
      },
      {
        "id": "ege-096",
        "name": "Закон радиоактивного распада",
        "formula": "N=N_0\\cdot2^{-t/T}",
        "note": "",
        "exam": [
          "ege"
        ]
      }
    ]
  }
];
