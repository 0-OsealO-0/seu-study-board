window.MATH_REVIEW_CHAPTER3 = [
  {
    "number": "3.1",
    "bookChapter": "3",
    "title": "定积分的概念与性质",
    "lead": "从曲边梯形面积与变速直线运动的路程抽出\"分割—近似—求和—取极限\"四步，把和式极限定义为定积分；再用 Darboux 和给出可积的充要条件，最后把线性、单调、可加、绝对值、乘积与积分中值定理逐条建立。",
    "map": [
      "两个实际问题",
      "黎曼和与定积分",
      "可积的必要条件",
      "Darboux 和",
      "可积的充要条件",
      "可积函数类",
      "定积分的性质",
      "积分中值定理"
    ],
    "definitions": [
      {
        "label": "定义 3.1.1",
        "title": "定积分（黎曼积分）",
        "statement": [
          "设 $f(x)$ 在 $[a,b]$ 上有界。任取一组分点 $T$：$a=x_0<x_1<\\cdots<x_n=b$，在 $[x_{i-1},x_i]$ 上任取 $\\xi_i$，作黎曼和 $\\sum_{i=1}^{n}f(\\xi_i)\\Delta x_i$，其中 $\\Delta x_i=x_i-x_{i-1}$。记 $d=\\max_{1\\le i\\le n}\\Delta x_i$。",
          "若 $d\\to0$ 时上述和式的极限存在，且与分割 $T$ 及取点 $\\xi_i$ 的取法都无关，则称 $f$ 在 $[a,b]$ 上可积（黎曼可积），并称此极限为 $f$ 在 $[a,b]$ 上的定积分：$\\int_a^b f(x)\\,dx=\\lim\\limits_{d\\to0}\\sum\\limits_{i=1}^{n}f(\\xi_i)\\Delta x_i$。"
        ],
        "source": "§3.1.2，课件 3-1 p. 34-51"
      }
    ],
    "entries": [
      {
        "id": "ch3-31-sum-limit-think",
        "type": "method",
        "label": "四步法",
        "title": "分割—近似—求和—取极限，是整节所有问题的统一套路",
        "statement": [
          "两个实例（曲边梯形面积、变速直线运动的路程）都先\"分割\"成小段，在小段上\"以直代曲、以匀速代变速\"取近似，再\"求和\"得到近似值，最后\"取极限\"让误差消失，得到精确值。"
        ],
        "source": "§3.1.1，课件 3-1 p. 7-33",
        "conditions": [
          "分割后每个小区间上的\"近似量\"必须能写成 $f(\\xi_i)\\Delta x_i$ 的形式（即\"微元\"）。"
        ],
        "conclusion": [
          "面积 $S=\\lim\\limits_{d\\to0}\\sum\\limits_{i=1}^{n}f(\\xi_i)\\Delta x_i$，路程 $s=\\lim\\limits_{d\\to0}\\sum\\limits_{i=1}^{n}v(\\tau_i)\\Delta t_i$，两者形式完全相同，抽象出来就是定积分定义。"
        ],
        "pitfalls": [
          "把\"求和\"当成已经求出了精确值；求和只是近似，必须取极限才有精确含义。"
        ]
      },
      {
        "id": "ch3-31-geometry",
        "type": "property",
        "label": "几何意义",
        "title": "定积分是曲边梯形面积的代数和",
        "statement": [
          "当 $f(x)\\ge0$ 时，$\\int_a^b f(x)\\,dx$ 等于曲线 $y=f(x)$、两条竖直线 $x=a$、$x=b$ 与 $x$ 轴所围曲边梯形的面积 $S$。"
        ],
        "source": "§3.1.2，课件 3-1 p. 64-71",
        "conditions": [
          "讨论面积要求 $f(x)\\ge0$；$f(x)<0$ 时积分取负值。"
        ],
        "conclusion": [
          "一般情形下，定积分等于 $x$ 轴上方图形面积减去下方图形面积（代数面积）。"
        ],
        "pitfalls": [
          "直接说\"定积分就是面积\"，忽略 $f$ 变号时面积要带符号。"
        ]
      },
      {
        "id": "ch3-31-note-d",
        "type": "property",
        "label": "注 1",
        "title": "极限过程用 $d\\to0$ 而不是 $n\\to\\infty$",
        "statement": [
          "定义中取 $d=\\max\\Delta x_i\\to0$。$d\\to0$ 必然推出 $n\\to\\infty$，但反过来 $n\\to\\infty$ 推不出 $d\\to0$（把区间越切越细的同时保留一个很大的小区间即可）。"
        ],
        "source": "§3.1.2，课件 3-1 p. 52-58",
        "conditions": [
          "只有保证\"每个小区间都趋于零\"，$\\xi_i$ 处取值才代表整个小区的值。"
        ],
        "conclusion": [
          "用 $d\\to0$ 才能保证 $f(\\xi_i)\\Delta x_i$ 与真实小量之差被一致控制住。"
        ]
      },
      {
        "id": "ch3-31-invariance",
        "type": "property",
        "label": "注 3",
        "title": "定积分是一个确定的数，与积分变量符号无关",
        "statement": [
          "$\\int_a^b f(x)\\,dx=\\int_a^b f(t)\\,dt=\\int_a^b f(u)\\,du$。"
        ],
        "source": "§3.1.2，课件 3-1 p. 61-63",
        "conditions": [
          "被积函数与积分区间确定后积分值就确定。"
        ],
        "conclusion": [
          "定积分的结果是数，不是函数；换积分变量只改写法，不改数值。"
        ]
      },
      {
        "id": "ch3-31-bounded",
        "type": "theorem",
        "label": "必要条件",
        "title": "可积的函数必有界",
        "statement": [
          "若 $f$ 在 $[a,b]$ 上可积，则 $f$ 在 $[a,b]$ 上有界。"
        ],
        "source": "§3.1.3，课件 3-1 p. 72-94",
        "conditions": [
          "反过来不成立：有界不一定可积（如 Dirichlet 函数在 $[0,1]$ 上有界但不可积）。"
        ],
        "conclusion": [
          "「有界」是可积的必要而非充分条件，所以后面讨论可积性时总是先假设 $f$ 有界。"
        ]
      },
      {
        "id": "ch3-31-darboux",
        "type": "definition",
        "label": "Darboux 和",
        "title": "用上下确界构造两个\"夹逼\"的和",
        "statement": [
          "对分割 $T$，令 $M_i=\\sup_{[x_{i-1},x_i]}f$，$m_i=\\inf_{[x_{i-1},x_i]}f$，称 $S(T)=\\sum M_i\\Delta x_i$ 为 Darboux 大和，$s(T)=\\sum m_i\\Delta x_i$ 为 Darboux 小和。"
        ],
        "source": "§3.1.3，课件 3-1 p. 82-94",
        "conditions": [
          "要求 $f$ 在 $[a,b]$ 上有界。"
        ],
        "conclusion": [
          "对任何取点 $s(T)\\le\\sum f(\\xi_i)\\Delta x_i\\le S(T)$；且加细分点时大和不增、小和不减。"
        ]
      },
      {
        "id": "ch3-31-integrable-iff",
        "type": "theorem",
        "label": "定理 3.1.2",
        "title": "可积的充要条件：振幅加权和趋于零",
        "statement": [
          "设 $f$ 在 $[a,b]$ 上有界，则 $f$ 在 $[a,b]$ 上可积的充要条件是：对 $[a,b]$ 的任意分割 $T$，都有 $\\lim\\limits_{d\\to0}\\sum\\limits_{i=1}^{n}\\omega_i\\Delta x_i=0$，其中 $\\omega_i=M_i-m_i$ 是 $f$ 在 $[x_{i-1},x_i]$ 上的振幅。"
        ],
        "source": "§3.1.3，课件 3-1 p. 95-114",
        "conditions": [
          "$f$ 必须在 $[a,b]$ 上有界（否则根本不谈可积）。"
        ],
        "conclusion": [
          "等价说法：$\\lim\\limits_{d\\to0}S(T)=\\lim\\limits_{d\\to0}s(T)$，即大和与小和之差可以任意小；它也常写成 $S(T)-s(T)<\\varepsilon$。"
        ],
        "pitfalls": [
          "只验证某一种特殊分割（如等分）振幅和趋于零不足以证明可积，必须是\"任意分割\"。"
        ]
      },
      {
        "id": "ch3-31-classes",
        "type": "theorem",
        "label": "可积函数类",
        "title": "连续、单调、有界且只有有限个间断点，三类函数都可积",
        "statement": [
          "若 $f$ 在 $[a,b]$ 上连续，则 $f\\in R([a,b])$；若 $f$ 在 $[a,b]$ 上单调有界，则 $f\\in R([a,b])$；若 $f$ 在 $[a,b]$ 上有界且只有有限个间断点，则 $f\\in R([a,b])$。"
        ],
        "source": "§3.1.3，课件 3-1 p. 95-120",
        "conditions": [
          "连续情形用一致连续性估计振幅；有限间断情形把间断点附近的小区间单独拎出来，其余部分一致连续。"
        ],
        "conclusion": [
          "三类可积函数覆盖了初等函数在闭区间上的绝大多数情形。"
        ]
      },
      {
        "id": "ch3-31-linearity",
        "type": "theorem",
        "label": "定理 3.1.6",
        "title": "线性性质",
        "statement": [
          "设 $f,g\\in R([a,b])$，$\\alpha,\\beta\\in\\mathbb{R}$，则 $\\alpha f+\\beta g\\in R([a,b])$，且 $\\int_a^b(\\alpha f(x)+\\beta g(x))\\,dx=\\alpha\\int_a^b f(x)\\,dx+\\beta\\int_a^b g(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 121-125",
        "conditions": [
          "$f,g$ 都可积。"
        ],
        "conclusion": [
          "定积分对和与数乘可以逐项拆分，这是所有计算的基础。"
        ]
      },
      {
        "id": "ch3-31-finite-points",
        "type": "corollary",
        "label": "推论 3.1.1",
        "title": "有限个点上改动函数值不影响可积性与积分值",
        "statement": [
          "设 $f\\in R([a,b])$，若 $g$ 只在有限个点上与 $f$ 的取值不同，则 $g\\in R([a,b])$ 且 $\\int_a^b f(x)\\,dx=\\int_a^b g(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 126-132",
        "conditions": [
          "改动只能发生在有限个点。"
        ],
        "conclusion": [
          "积分值对个别点的取值\"不敏感\"，这也是黎曼和里 $\\xi_i$ 取在哪一点都不影响结果的原因。"
        ]
      },
      {
        "id": "ch3-31-additivity",
        "type": "theorem",
        "label": "定理 3.1.7",
        "title": "积分区间的可加性",
        "statement": [
          "设 $f$ 在闭区间 $I$ 上可积，$a,b,c$ 为 $I$ 上任意三点，则 $f$ 在这三点两两组成的闭区间上都可积，且 $\\int_a^b f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^b f(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 133-137",
        "conditions": [
          "三点次序任意，$c$ 可以在 $a,b$ 之间，也可以在区间外（配合 $\\int_a^b=-\\int_b^a$）。"
        ],
        "conclusion": [
          "分段函数的积分可以按分界点拆开逐段算，这是处理分段函数的主要工具。"
        ],
        "pitfalls": [
          "忘记 $\\int_b^a f=-\\int_a^b f$ 就把区间拆错符号。"
        ]
      },
      {
        "id": "ch3-31-monotone",
        "type": "theorem",
        "label": "定理 3.1.8",
        "title": "单调性（保序性）",
        "statement": [
          "设 $f,g\\in R([a,b])$，且 $f(x)\\le g(x)$ 对一切 $x\\in[a,b]$ 成立，则 $\\int_a^b f(x)\\,dx\\le\\int_a^b g(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 138-155",
        "conditions": [
          "$a<b$；若区间反向则不等号方向翻转。"
        ],
        "conclusion": [
          "由此得估值：若 $m\\le f(x)\\le M$，则 $m(b-a)\\le\\int_a^b f(x)\\,dx\\le M(b-a)$。"
        ]
      },
      {
        "id": "ch3-31-abs",
        "type": "theorem",
        "label": "定理 3.1.10",
        "title": "绝对值性质",
        "statement": [
          "设 $f\\in R([a,b])$，则 $|f|\\in R([a,b])$，且 $\\left|\\int_a^b f(x)\\,dx\\right|\\le\\int_a^b|f(x)|\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 156-166",
        "conditions": [
          "$a<b$。"
        ],
        "conclusion": [
          "积分的绝对值不超过绝对值的积分；但反向不等式一般不成立。"
        ],
        "pitfalls": [
          "误以为 $\\int_a^b|f|=\\left|\\int_a^b f\\right|$，只有 $f$ 不变号时才相等。"
        ]
      },
      {
        "id": "ch3-31-product",
        "type": "theorem",
        "label": "定理 3.1.11",
        "title": "乘积性质",
        "statement": [
          "设 $f,g\\in R([a,b])$，则 $fg\\in R([a,b])$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 167-181",
        "conditions": [
          "两个因子都可积且有界。"
        ],
        "conclusion": [
          "可积函数对乘法封闭，证明用 $|fg|$ 的振幅估计 $\\omega(fg)\\le M_f\\omega(g)+M_g\\omega(f)$。"
        ]
      },
      {
        "id": "ch3-31-mvt",
        "type": "theorem",
        "label": "定理 3.1.12",
        "title": "推广的积分中值定理",
        "statement": [
          "设 $f\\in C([a,b])$，$g\\in R([a,b])$ 且在 $[a,b]$ 上不变号，则至少存在一点 $\\xi\\in[a,b]$，使 $\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 182-195",
        "conditions": [
          "$f$ 连续（保证取到最小值与最大值）；$g$ 可积且不变号（保证单调性可用）。"
        ],
        "conclusion": [
          "$\\xi$ 一般不能加强为开区间 $(a,b)$；若 $g$ 严格正则在开区间内取到。"
        ]
      },
      {
        "id": "ch3-31-mvt-special",
        "type": "corollary",
        "label": "定理 3.1.12 特例",
        "title": "取 $g\\equiv1$ 得积分中值定理",
        "statement": [
          "若 $f\\in C([a,b])$，则存在 $\\xi\\in[a,b]$ 使 $\\int_a^b f(x)\\,dx=f(\\xi)(b-a)$，即 $f(\\xi)=\\frac{1}{b-a}\\int_a^b f(x)\\,dx$。"
        ],
        "source": "§3.1.4，课件 3-1 p. 192-207",
        "conditions": [
          "$f$ 在 $[a,b]$ 上连续。"
        ],
        "conclusion": [
          "$\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ 称为 $f$ 在 $[a,b]$ 上的平均值，积分中值定理说明连续函数必取到自己的平均值。"
        ]
      }
    ]
  },
  {
    "number": "3.2",
    "bookChapter": "3",
    "title": "微积分学的基本定理",
    "lead": "Newton-Leibniz 公式把定积分与原函数连起来；变上限积分说明连续函数必有原函数并给出求导公式；最后用不定积分统一原函数全体，并列出基本积分表。",
    "map": [
      "原函数",
      "Newton-Leibniz 公式",
      "分段连续的处理",
      "变上限积分",
      "原函数存在定理",
      "变限积分的复合求导",
      "奇偶性与周期性",
      "不定积分与基本积分表"
    ],
    "definitions": [
      {
        "label": "定义 3.2.1",
        "title": "原函数",
        "statement": [
          "设函数 $f(x)$ 在区间 $I$ 上有定义。若存在 $I$ 上的可微函数 $F(x)$，使得对一切 $x\\in I$ 都有 $F'(x)=f(x)$（或 $\\mathrm{d}F(x)=f(x)\\,\\mathrm{d}x$），则称 $F(x)$ 是 $f(x)$ 在 $I$ 上的一个原函数。",
          "若 $F$ 是 $f$ 的一个原函数，则 $f$ 的全体原函数为 $F(x)+C$（$C$ 为任意常数）。"
        ],
        "source": "§3.2.1，课件 3-2 p. 9-15"
      },
      {
        "label": "定义 3.2.2",
        "title": "不定积分",
        "statement": [
          "函数 $f$ 在区间 $I$ 上的全体原函数称为 $f$ 在 $I$ 上的不定积分，记作 $\\int f(x)\\,dx$。若 $F$ 是 $f$ 的一个原函数，则 $\\int f(x)\\,dx=F(x)+C$。"
        ],
        "source": "§3.2.3，课件 3-2 p. 143-151"
      }
    ],
    "entries": [
      {
        "id": "ch3-32-nl",
        "type": "theorem",
        "label": "定理 3.2.1",
        "title": "Newton-Leibniz 公式（微积分基本公式）",
        "statement": [
          "设 $f\\in R([a,b])$，且 $f$ 在 $[a,b]$ 上有一个原函数 $F$，则 $\\int_a^b f(x)\\,dx=F(b)-F(a)=F(x)\\Big|_a^b$。"
        ],
        "source": "§3.2.1，课件 3-2 p. 16-49",
        "conditions": [
          "$f$ 可积；$F$ 是 $f$ 在 $[a,b]$ 上的原函数（在 $[a,b]$ 上 $F'=f$）。"
        ],
        "conclusion": [
          "定积分的计算从\"求和的极限\"降为\"原函数作差\"，这是微积分的基本定理。"
        ],
        "pitfalls": [
          "只验证 $F'=f$ 在开区间内成立、区间端点处不成立时，需用连续性确认 $F$ 在闭区间上可用。"
        ]
      },
      {
        "id": "ch3-32-piecewise",
        "type": "method",
        "label": "分段连续",
        "title": "被积函数分段连续时按分界点拆区间再逐段用 N-L 公式",
        "statement": [
          "若 $f$ 在 $[a,b]$ 上分段连续（除有限个第一类间断点外连续），则按间断点把 $[a,b]$ 分成若干子区间，在每段上用 Newton-Leibniz 公式，再用区间可加性相加。"
        ],
        "source": "§3.2.1，课件 3-2 p. 50-58",
        "conditions": [
          "间断点必须是可去或跳跃型（第一类），且只有有限个。"
        ],
        "conclusion": [
          "分段连续函数可积，积分等于各段积分之和。"
        ],
        "pitfalls": [
          "在对分段点处若函数无定义，需要先补充或直接按左右段分别取端点的单侧极限值。"
        ]
      },
      {
        "id": "ch3-32-variable-upper",
        "type": "theorem",
        "label": "定理 3.2.3",
        "title": "变上限积分可导，且导数就是被积函数",
        "statement": [
          "设 $f\\in C([a,b])$，$\\Phi(x)=\\int_a^x f(t)\\,dt$，则 $\\Phi\\in D([a,b])$，且 $\\Phi'(x)=f(x)$（$x\\in[a,b]$）。"
        ],
        "source": "§3.2.2，课件 3-2 p. 59-82",
        "conditions": [
          "$f$ 在 $[a,b]$ 上连续；积分上限是变量，下限是常数。"
        ],
        "conclusion": [
          "变上限积分是 $f$ 的一个原函数：$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\int_a^x f(t)\\,dt=f(x)$。"
        ]
      },
      {
        "id": "ch3-32-existence",
        "type": "corollary",
        "label": "推论 3.2.1",
        "title": "连续函数必有原函数",
        "statement": [
          "设 $f\\in C([a,b])$，则 $f$ 在 $[a,b]$ 上必有原函数，且变上限积分 $\\Phi(x)=\\int_a^x f(t)\\,dt$ 就是它的一个原函数，并满足 $\\Phi(a)=0$。"
        ],
        "source": "§3.2.2，课件 3-2 p. 83-88",
        "conditions": [
          "$f$ 连续。"
        ],
        "conclusion": [
          "这条推论补上了 N-L 公式的条件：闭区间上连续函数一定满足\"有原函数\"。"
        ]
      },
      {
        "id": "ch3-32-composite",
        "type": "formula",
        "label": "推论 3.2.2",
        "title": "复合上下限的变限积分求导",
        "statement": [
          "设 $f\\in C(I)$，$\\varphi(x),\\psi(x)\\in D([a,b])$，且 $\\varphi([a,b])\\subset I$，$\\psi([a,b])\\subset I$，则 $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\int_{\\psi(x)}^{\\varphi(x)}f(t)\\,dt=f(\\varphi(x))\\varphi'(x)-f(\\psi(x))\\psi'(x)$。"
        ],
        "source": "§3.2.2，课件 3-2 p. 89-96",
        "conditions": [
          "$f$ 连续，$\\varphi,\\psi$ 可导。"
        ],
        "conclusion": [
          "上限贡献 $+f(\\varphi)\\varphi'$，下限贡献 $-f(\\psi)\\psi'$；上限是常数时对应项为零。"
        ]
      },
      {
        "id": "ch3-32-limit-method",
        "type": "method",
        "label": "例 12-14 型",
        "title": "变限积分参与求极限时先化成 0/0 再用洛必达",
        "statement": [
          "形如 $\\lim\\limits_{x\\to0}\\frac{\\int_0^{x^2}\\sin\\sqrt{t}\\,\\mathrm{d}t}{x^3}$ 的极限，先确认是 $\\frac{0}{0}$ 型，再用洛必达法则并配合推论 3.2.2 对上、下限求导；必要时先做等价无穷小替换。"
        ],
        "source": "§3.2.2，课件 3-2 p. 104-118",
        "conditions": [
          "分子是变限积分且积分上限趋于下限（保证分子趋于零）。"
        ],
        "conclusion": [
          "求导后 $f(\\varphi(x))\\varphi'(x)$ 里的 $f$ 直接用被积函数代入，不必真的积分。"
        ],
        "pitfalls": [
          "忘记对上限 $x^2$ 再乘 $2x$（链式法则）。"
        ]
      },
      {
        "id": "ch3-32-parity",
        "type": "property",
        "label": "例 15",
        "title": "偶函数（奇函数）的变限积分是奇函数（偶函数）",
        "statement": [
          "设 $f$ 连续。若 $f$ 是偶函数，则 $F(x)=\\int_0^x f(t)\\,dt$ 是奇函数；若 $f$ 是奇函数，则 $F(x)=\\int_0^x f(t)\\,dt$ 是偶函数。"
        ],
        "source": "§3.2.2，课件 3-2 p. 119-125",
        "conditions": [
          "下限固定为 $0$（换成任意常数 $a$ 结论可能改变）。"
        ],
        "conclusion": [
          "换元 $t=-u$ 即可证明；这是\"求导降一级、积分升一级\"奇偶性规律的体现。"
        ]
      },
      {
        "id": "ch3-32-period",
        "type": "property",
        "label": "例 16",
        "title": "周期函数的变限积分在周期平移下不变",
        "statement": [
          "设 $f$ 是以 $T$ 为周期的连续函数，则对任意 $x$ 有 $\\int_x^{x+T}f(t)\\,dt=\\int_0^T f(t)\\,dt$。"
        ],
        "source": "§3.2.2，课件 3-2 p. 126-133",
        "conditions": [
          "$f$ 连续且以 $T$ 为周期。"
        ],
        "conclusion": [
          "长度为一个周期的区间上的积分与起点无关。"
        ]
      },
      {
        "id": "ch3-32-basic-table",
        "type": "formula",
        "label": "基本积分表",
        "title": "十二个必须背熟的基本不定积分",
        "statement": [
          "$\\int x^{\\alpha}\\,\\mathrm{d}x=\\frac{x^{\\alpha+1}}{\\alpha+1}+C\\;(\\alpha\\ne-1)$；$\\int\\frac{\\mathrm{d}x}{x}=\\ln|x|+C$；$\\int e^x\\,\\mathrm{d}x=e^x+C$；$\\int\\cos x\\,\\mathrm{d}x=\\sin x+C$；$\\int\\sin x\\,\\mathrm{d}x=-\\cos x+C$；$\\int\\sec^2x\\,\\mathrm{d}x=\\tan x+C$；$\\int\\csc^2x\\,\\mathrm{d}x=-\\cot x+C$；$\\int\\sec x\\tan x\\,\\mathrm{d}x=\\sec x+C$；$\\int\\csc x\\cot x\\,\\mathrm{d}x=-\\csc x+C$；$\\int\\frac{\\mathrm{d}x}{\\sqrt{1-x^2}}=\\arcsin x+C$；$\\int\\frac{\\mathrm{d}x}{1+x^2}=\\arctan x+C$；$\\int a^x\\,\\mathrm{d}x=\\frac{a^x}{\\ln a}+C$。"
        ],
        "source": "§3.2.3，课件 3-2 p. 152-161",
        "conditions": [
          "每个公式都在使被积函数有意义的区间上成立。"
        ],
        "conclusion": [
          "基本积分表就是基本求导公式的逆写；计算完必须求导验证。"
        ],
        "pitfalls": [
          "漏写任意常数 $C$；$\\int\\frac{\\mathrm{d}x}{x}=\\ln|x|+C$ 绝对值不能丢。"
        ]
      },
      {
        "id": "ch3-32-linear",
        "type": "theorem",
        "label": "定理 3.2.5",
        "title": "不定积分的线性性质",
        "statement": [
          "设 $f$ 与 $g$ 在区间 $I$ 上存在原函数，$\\alpha,\\beta$ 为任意常数，则 $\\alpha f+\\beta g$ 在 $I$ 上存在原函数，且 $\\int(\\alpha f(x)+\\beta g(x))\\,\\mathrm{d}x=\\alpha\\int f(x)\\,\\mathrm{d}x+\\beta\\int g(x)\\,\\mathrm{d}x$。"
        ],
        "source": "§3.2.3，课件 3-2 p. 162-181",
        "conditions": [
          "$f,g$ 在 $I$ 上存在原函数。"
        ],
        "conclusion": [
          "和与数乘可以拆开逐项积分，常数因子可以提到积分号外。"
        ],
        "pitfalls": [
          "乘积没有对应的\"拆开\"公式，$\\int fg\\ne\\int f\\cdot\\int g$。"
        ]
      },
      {
        "id": "ch3-32-inverse-ops",
        "type": "property",
        "label": "互逆运算",
        "title": "求导与不定积分是互逆运算（差一个常数）",
        "statement": [
          "$\\left(\\int f(x)\\,\\mathrm{d}x\\right)'=f(x)$；$\\int F'(x)\\,\\mathrm{d}x=F(x)+C$；$\\mathrm{d}\\int f\\,\\mathrm{d}x=f\\,\\mathrm{d}x$。"
        ],
        "source": "§3.2.3，课件 3-2 p. 148-151",
        "conditions": [
          "$f$ 连续（保证原函数存在）。"
        ],
        "conclusion": [
          "求导与积分互相抵消（只差常数 $C$），这是检验积分结果是否正确的唯一标准。"
        ]
      }
    ]
  },
  {
    "number": "3.3",
    "bookChapter": "3",
    "title": "不定积分的换元积分法和分部积分法",
    "lead": "基本积分表只覆盖少数函数，本节建立两件工具：换元法（把积分改写成基本表中的形状）与分部积分法（把乘积的积分转移成另一个积分），再用它们把有理函数、三角有理式与无理函数的积分全部化归为有理函数积分。",
    "map": [
      "第一类换元法（凑微分）",
      "常见凑微分形式",
      "第二类换元法",
      "三角代换与倒代换",
      "分部积分公式",
      "分部积分的选元策略",
      "递推公式",
      "有理函数积分",
      "部分分式分解",
      "三角有理式与万能代换",
      "无理函数代换"
    ],
    "definitions": [
      {
        "label": "定义 3.3.1",
        "title": "有理函数（真分式与假分式）",
        "statement": [
          "设 $P_n(x)$ 与 $Q_m(x)$ 分别为 $x$ 的 $n$ 次与 $m$ 次实系数多项式，称 $R(x)=\\frac{P_n(x)}{Q_m(x)}$ 为有理函数。本节总假定 $P_n$ 与 $Q_m$ 没有公因式。",
          "当 $n<m$ 时称 $R(x)$ 为真分式；当 $n\\ge m$ 时称 $R(x)$ 为假分式。一个有理函数总可以化为一个多项式与一个真分式之和（多项式部分用带余除法，真分式部分用部分分式定理）。"
        ],
        "source": "§3.3.3，课件 3-3 p. 233-247"
      },
      {
        "label": "定义 3.3.2",
        "title": "三角函数有理式",
        "statement": [
          "由 $\\sin x$、$\\cos x$ 与常数经有限次加、减、乘、除运算得到的函数称为三角函数有理式，记作 $R(\\sin x,\\cos x)$。",
          "若令 $t=\\tan\\frac{x}{2}$，则 $\\sin x=\\frac{2t}{1+t^2}$，$\\cos x=\\frac{1-t^2}{1+t^2}$，$\\mathrm{d}x=\\frac{2\\,\\mathrm{d}t}{1+t^2}$，从而 $\\int R(\\sin x,\\cos x)\\,\\mathrm{d}x$ 化为 $t$ 的有理函数的积分。"
        ],
        "source": "§3.3.4，课件 3-3 p. 288-305"
      }
    ],
    "entries": [
      {
        "id": "ch3-33-first-sub",
        "type": "theorem",
        "label": "定理 3.3.1",
        "title": "第一类换元法（凑微分法）",
        "statement": [
          "设函数 $F(u)$ 是 $f(u)$ 在区间 $I$ 上的原函数，若函数 $u=\\varphi(x)$ 可微，则 $\\int f(\\varphi(x))\\varphi'(x)\\,\\mathrm{d}x=\\int f(\\varphi(x))\\,\\mathrm{d}\\varphi(x)=F(\\varphi(x))+C$。"
        ],
        "source": "§3.3.1，课件 3-3 p. 6-30",
        "conditions": [
          "$F$ 是 $f$ 在 $I$ 上的原函数；$u=\\varphi(x)$ 可微；$f(\\varphi(x))\\varphi'(x)$ 有意义（$\\varphi$ 的值域落在 $I$ 内）。"
        ],
        "conclusion": [
          "把 $\\varphi'(x)\\mathrm{d}x$ 整体凑成 $\\mathrm{d}\\varphi(x)$，积分就变成了对 $u=\\varphi(x)$ 的基本积分，算出结果后不必换回 $u$（因为 $u$ 只是记号，结果里直接保留 $\\varphi(x)$ 即可）。"
        ],
        "pitfalls": [
          "凑不出 $\\varphi'(x)\\mathrm{d}x$ 时不要硬凑，考虑第二类换元或分部积分。",
          "熟练后可以省略中间变量替换，直接\"视 $\\varphi(x)$ 为一个新变量\"，但初学时把 $u$ 写出来可以避免丢因子。"
        ],
        "proofIdea": [
          "由链式法则 $\\frac{\\mathrm{d}}{\\mathrm{d}x}F(\\varphi(x))=F'(\\varphi(x))\\varphi'(x)=f(\\varphi(x))\\varphi'(x)$，故 $F(\\varphi(x))$ 是左端被积函数的一个原函数。"
        ],
        "intuition": "链式法则的逆运算：复合函数的导数会多出一个内层导数，凑微分就是把这个多出来的内层导数重新收回去。"
      },
      {
        "id": "ch3-33-common-differentials",
        "type": "formula",
        "label": "常见凑微分",
        "title": "八种最常用的凑微分形式",
        "statement": [
          "$\\displaystyle x\\,\\mathrm{d}x=\\frac12\\mathrm{d}(x^2)$，$\\displaystyle x^2\\mathrm{d}x=\\frac13\\mathrm{d}(x^3)$，$\\displaystyle \\frac{\\mathrm{d}x}{x}=\\mathrm{d}(\\ln|x|)$。",
          "$\\displaystyle \\mathrm{d}x=\\frac{1}{a}\\mathrm{d}(ax+b)$，$\\displaystyle \\frac{\\mathrm{d}x}{\\sqrt{x}}=2\\,\\mathrm{d}(\\sqrt{x})$，$\\displaystyle \\frac{\\mathrm{d}x}{x^2}=\\mathrm{d}\\left(-\\frac1x\\right)$。",
          "$\\displaystyle e^x\\mathrm{d}x=\\mathrm{d}(e^x)$，$\\displaystyle \\cos x\\,\\mathrm{d}x=\\mathrm{d}(\\sin x)$，$\\displaystyle \\sin x\\,\\mathrm{d}x=-\\mathrm{d}(\\cos x)$，$\\displaystyle \\sec^2x\\,\\mathrm{d}x=\\mathrm{d}(\\tan x)$，$\\displaystyle \\frac{\\mathrm{d}x}{1+x^2}=\\mathrm{d}(\\arctan x)$。"
        ],
        "source": "§3.3.1，课件 3-3 p. 31-90",
        "conclusion": [
          "凑微分的本质是\"看出被积函数里藏着一个内层函数的导数\"；表中右侧的 $u$ 就是第一类换元里的 $\\varphi(x)$。"
        ],
        "pitfalls": [
          "系数别丢：$x\\mathrm{d}x=\\frac12\\mathrm{d}(x^2)$ 里的 $\\frac12$、$\\sin x\\mathrm{d}x=-\\mathrm{d}(\\cos x)$ 里的负号。"
        ]
      },
      {
        "id": "ch3-33-second-sub",
        "type": "theorem",
        "label": "定理 3.3.2",
        "title": "第二类换元法（$x=\\varphi(t)$）",
        "statement": [
          "设 $x=\\varphi(t)$ 可导且 $\\varphi'(t)\\ne0$，若 $f(\\varphi(t))\\varphi'(t)$ 有原函数 $F(t)$，则 $\\int f(x)\\,\\mathrm{d}x=\\int f(\\varphi(t))\\varphi'(t)\\,\\mathrm{d}t=F(\\varphi^{-1}(x))+C$，其中 $t=\\varphi^{-1}(x)$ 是 $x=\\varphi(t)$ 的反函数。"
        ],
        "source": "§3.3.1，课件 3-3 p. 91-130",
        "conditions": [
          "$x=\\varphi(t)$ 可导且 $\\varphi'(t)\\ne0$（保证反函数存在）；$f(\\varphi(t))\\varphi'(t)$ 有原函数。"
        ],
        "conclusion": [
          "与第一类换元方向相反：第一类是把 $x$ 的式子凑成新变量，第二类是把 $x$ 直接换成一个新变量的函数；算完必须把 $t$ 用 $x$ 代回（反函数）。"
        ],
        "pitfalls": [
          "忘记回代：结果里留着 $t$ 是错的（与第一类换元相反）。",
          "三角代换要写清 $t$ 的范围，回代时才能正确取符号（如 $\\sqrt{a^2-x^2}=a\\cos t$ 要求 $t\\in[-\\pi/2,\\pi/2]$，此时 $\\cos t\\ge0$）。"
        ],
        "proofIdea": [
          "由 $\\varphi'(t)\\ne0$ 得 $t=\\varphi^{-1}(x)$ 存在；对 $F(\\varphi^{-1}(x))$ 用链式法则求导，得 $F'(t)\\cdot\\frac{1}{\\varphi'(t)}=f(\\varphi(t))\\varphi'(t)\\cdot\\frac{1}{\\varphi'(t)}=f(x)$。"
        ]
      },
      {
        "id": "ch3-33-trig-sub",
        "type": "method",
        "label": "三角代换",
        "title": "含 $\\sqrt{a^2-x^2}$、$\\sqrt{a^2+x^2}$、$\\sqrt{x^2-a^2}$ 的三套代换",
        "statement": [
          "$\\sqrt{a^2-x^2}$：令 $x=a\\sin t$，$t\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$，$\\sqrt{a^2-x^2}=a\\cos t$，$\\mathrm{d}x=a\\cos t\\,\\mathrm{d}t$。",
          "$\\sqrt{a^2+x^2}$：令 $x=a\\tan t$，$t\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$，$\\sqrt{a^2+x^2}=a\\sec t$，$\\mathrm{d}x=a\\sec^2t\\,\\mathrm{d}t$。",
          "$\\sqrt{x^2-a^2}$：令 $x=a\\sec t$（$x>a$ 时 $t\\in\\left(0,\\frac{\\pi}{2}\\right)$；$x<-a$ 时 $t\\in\\left(\\frac{\\pi}{2},\\pi\\right)$），$\\sqrt{x^2-a^2}=a|\\tan t|$。"
        ],
        "source": "§3.3.1，课件 3-3 p. 131-172",
        "conditions": [
          "根号内是二次式 $ax^2+bx+c$ 时，先配方化到上述三种标准形，再选代换。"
        ],
        "conclusion": [
          "三角代换的目的是去根号；做完后要用直角三角形把 $t$ 的三角函数换回 $x$ 的表达式。第二例 $\\int\\frac{\\mathrm{d}x}{\\sqrt{x^2-a^2}}=\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C$ 要把 $x>a$ 与 $x<-a$ 两种情形合并。"
        ],
        "pitfalls": [
          "开根号时不加绝对值：$\\sqrt{x^2-a^2}=a\\tan t$ 只在 $t\\in(0,\\pi/2)$ 成立，$x<-a$ 时要取 $|\\tan t|$ 并在回代时定号。"
        ]
      },
      {
        "id": "ch3-33-reciprocal-sub",
        "type": "method",
        "label": "倒代换",
        "title": "$x=\\frac1t$ 适用于分母次数高于分子的情形",
        "statement": [
          "当被积函数形如 $\\frac{1}{x^n\\sqrt{ax^2+bx+c}}$ 或分母次数明显高于分子时，可令 $x=\\frac1t$（$t>0$ 或 $t<0$），$\\mathrm{d}x=-\\frac{\\mathrm{d}t}{t^2}$。"
        ],
        "source": "§3.3.1，课件 3-3 p. 173-200",
        "conclusion": [
          "倒代换把 $x$ 的高次项压到分子上，常能把无理式化为有理式或基本积分表内的形状。"
        ],
        "pitfalls": [
          "倒代换后 $t$ 的正负决定 $\\sqrt{\\cdot}$ 的符号，回代时要注意。"
        ]
      },
      {
        "id": "ch3-33-parts",
        "type": "formula",
        "label": "分部积分公式",
        "title": "$\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u$",
        "statement": [
          "设 $u=u(x)$ 与 $v=v(x)$ 都可微，且 $u'$、$v'$ 连续，则 $\\int u(x)v'(x)\\,\\mathrm{d}x=u(x)v(x)-\\int u'(x)v(x)\\,\\mathrm{d}x$，即 $\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u$。"
        ],
        "source": "§3.3.2，课件 3-3 p. 201-215",
        "conditions": [
          "$u,v$ 可微且导数连续（保证两边的积分都存在）。"
        ],
        "conclusion": [
          "分部积分的实质是把 $\\int uv'$ 转移到 $\\int u'v$：选 $u$ 求导后变简单、选 $\\mathrm{d}v$ 积分后不变复杂，就能把问题化简。"
        ],
        "pitfalls": [
          "$\\int v\\,\\mathrm{d}u$ 不一定比原积分简单；选错 $u$ 与 $\\mathrm{d}v$ 会越做越复杂（见选元策略）。"
        ],
        "proofIdea": [
          "由乘积求导公式 $(uv)'=u'v+uv'$，移项得 $uv'=(uv)'-u'v$，两边求不定积分即得。"
        ]
      },
      {
        "id": "ch3-33-parts-choice",
        "type": "method",
        "label": "选元策略",
        "title": "按被积函数的类型决定谁当 $u$、谁当 $\\mathrm{d}v$",
        "statement": [
          "多项式 × 三角/指数（如 $\\int x^n\\cos x\\,\\mathrm{d}x$、$\\int x^ne^x\\,\\mathrm{d}x$）：取 $u=x^n$，$\\mathrm{d}v=\\cos x\\,\\mathrm{d}x$（或 $e^x\\mathrm{d}x$），每分部一次多项式的次数降一次——降幂。",
          "多项式 × 对数/反三角（如 $\\int x^n\\ln x\\,\\mathrm{d}x$、$\\int x^n\\arctan x\\,\\mathrm{d}x$）：取 $u=\\ln x$（或 $\\arctan x$），$\\mathrm{d}v=x^n\\mathrm{d}x$，虽然 $\\int v\\,\\mathrm{d}u$ 里 $v$ 的次数升高，但求导后的 $u$ 化成了简单分式——升幂。",
          "纯对数/反三角（如 $\\int\\ln x\\,\\mathrm{d}x$、$\\int\\arctan x\\,\\mathrm{d}x$）：取 $u=\\ln x$、$\\mathrm{d}v=\\mathrm{d}x$。",
          "指数 × 三角（如 $\\int e^{ax}\\sin bx\\,\\mathrm{d}x$）：分部两次后出现与原积分同型的项，移项解出（循环型）。"
        ],
        "source": "§3.3.2，课件 3-3 p. 216-260",
        "conclusion": [
          "判断标准只有一条：分部之后 $\\int v\\,\\mathrm{d}u$ 要比原积分容易。口诀\"反对幂三指\"（反三角、对数、幂、三角、指数）给出优先当 $u$ 的顺序。"
        ],
        "pitfalls": [
          "循环型分部两次后必须把所有含原积分的项移到同一边再除系数，不能直接\"约掉\"。"
        ]
      },
      {
        "id": "ch3-33-recursion",
        "type": "formula",
        "label": "递推公式",
        "title": "用分部积分建立 $I_n$ 的递推关系",
        "statement": [
          "$\\displaystyle I_n=\\int\\sin^nx\\,\\mathrm{d}x$：$I_n=-\\frac{1}{n}\\sin^{n-1}x\\cos x+\\frac{n-1}{n}I_{n-2}$（$n\\ge2$）。",
          "$\\displaystyle I_n=\\int\\frac{\\mathrm{d}x}{(x^2+a^2)^n}$：$I_n=\\frac{x}{2a^2(n-1)(x^2+a^2)^{n-1}}+\\frac{2n-3}{2a^2(n-1)}I_{n-1}$（$n\\ge2$），$I_1=\\frac1a\\arctan\\frac xa+C$。"
        ],
        "source": "§3.3.2，课件 3-3 p. 261-287",
        "conclusion": [
          "递推公式的意义：把一个含参数 $n$ 的积分一步步降到 $n=0$ 或 $n=1$ 的基本积分，最后代入初始值即可。"
        ],
        "pitfalls": [
          "递推方向搞反（把 $I_n$ 表示成 $I_{n+1}$）或者把系数抄错；递推公式必须验证 $n=2$ 时能退回基本积分。"
        ]
      },
      {
        "id": "ch3-33-rational",
        "type": "theorem",
        "label": "部分分式定理",
        "title": "真分式一定能拆成四类简单分式之和",
        "statement": [
          "设 $R(x)=\\frac{P_n(x)}{Q_m(x)}$ 为真分式，分母 $Q_m(x)$ 在实数范围内分解为 $Q_m(x)=(x-a)^\\alpha\\cdots(x-b)^\\beta(x^2+px+q)^\\mu\\cdots(x^2+rx+s)^\\nu$，其中二次因子满足 $p^2-4q<0$、$r^2-4s<0$。",
          "则 $R(x)$ 可唯一地分解为 $\\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\cdots+\\frac{A_\\alpha}{(x-a)^\\alpha}+\\cdots+\\frac{M_1x+N_1}{x^2+px+q}+\\cdots+\\frac{M_\\mu x+N_\\mu}{(x^2+px+q)^\\mu}$ 之和，其中各系数都是实数且被唯一确定。"
        ],
        "source": "§3.3.3，课件 3-3 p. 248-270",
        "conditions": [
          "必须是真分式（假分式先做带余除法）；分母在实数范围内完全分解；二次因子不可约（判别式小于零）。"
        ],
        "conclusion": [
          "有理函数的积分问题因此\"原则上全部解决\"：四类简单分式都能积出来，第一类得对数、第二类得幂函数、后两类配方后得对数与 arctan。"
        ],
        "pitfalls": [
          "分解式里每个因式的幂次都要写全（$\\alpha$ 次因式对应 $\\alpha$ 项），漏项会导致待定系数无解。"
        ]
      },
      {
        "id": "ch3-33-partial-fractions",
        "type": "method",
        "label": "待定系数法",
        "title": "拆项的两条路：比较系数与代特殊值",
        "statement": [
          "写出分解式后两边乘以 $Q_m(x)$，得到一个恒等式；比较同次幂系数列方程组，或代入若干特殊值（如分母的零点）直接解出部分系数，两种方法可以混用。",
          "例：$\\frac{1}{x^2-4x+3}=\\frac{1}{(x-1)(x-3)}=\\frac{A}{x-1}+\\frac{B}{x-3}$，通分比较分子得 $1=A(x-3)+B(x-1)$；令 $x=1$ 得 $A=-\\frac12$，令 $x=3$ 得 $B=\\frac12$。"
        ],
        "source": "§3.3.3，课件 3-3 p. 271-287",
        "conclusion": [
          "能先观察到简化结构时（如拆成 $\\frac{1}{x-1}-\\frac{1}{x-3}$ 再整理）不必拘泥于分解定理，直接凑更省时间。"
        ],
        "pitfalls": [
          "假分式不先除就硬拆；或者把 $\\frac{Mx+N}{(x^2+px+q)^\\mu}$ 写成 $\\frac{M}{(x^2+px+q)^\\mu}$，丢掉一次项。"
        ]
      },
      {
        "id": "ch3-33-two-class",
        "type": "formula",
        "label": "两类分式的积分",
        "title": "一次因式与不可约二次因式的积分结果",
        "statement": [
          "第一类：$\\displaystyle\\int\\frac{A}{(x-a)^k}\\,\\mathrm{d}x=\\begin{cases}A\\ln|x-a|+C,&k=1\\\\ \\dfrac{A}{(1-k)(x-a)^{k-1}}+C,&k\\ge2\\end{cases}$。",
          "第二类：对 $\\displaystyle\\int\\frac{Mx+N}{(x^2+px+q)^\\mu}\\,\\mathrm{d}x$，先配方 $x^2+px+q=\\left(x+\\frac p2\\right)^2+a^2$（$a^2=q-\\frac{p^2}{4}>0$），再令 $t=x+\\frac p2$ 化为 $\\int\\frac{Mt+C}{(t^2+a^2)^\\mu}\\,\\mathrm{d}t$，其中一次项部分凑 $\\mathrm{d}(t^2+a^2)$ 得对数，常数部分用递推公式（见例 32）。"
        ],
        "source": "§3.3.3，课件 3-3 p. 271-287",
        "conclusion": [
          "四类简单分式的积分都不超出初等函数，这是\"有理函数积分原则上可积出\"的依据。"
        ],
        "pitfalls": [
          "二次因式配方后忘记 $a^2=q-\\frac{p^2}{4}$ 必须为正；$\\mu\\ge2$ 时直接硬积而不走递推。"
        ]
      },
      {
        "id": "ch3-33-universal",
        "type": "method",
        "label": "万能代换",
        "title": "$t=\\tan\\frac x2$ 把三角有理式化为有理函数",
        "statement": [
          "令 $t=\\tan\\frac x2$，则 $\\sin x=\\frac{2t}{1+t^2}$，$\\cos x=\\frac{1-t^2}{1+t^2}$，$\\mathrm{d}x=\\frac{2\\,\\mathrm{d}t}{1+t^2}$，于是 $\\int R(\\sin x,\\cos x)\\,\\mathrm{d}x=\\int R\\left(\\frac{2t}{1+t^2},\\frac{1-t^2}{1+t^2}\\right)\\frac{2\\,\\mathrm{d}t}{1+t^2}$，右端是 $t$ 的有理函数的积分。"
        ],
        "source": "§3.3.4，课件 3-3 p. 288-305",
        "conditions": [
          "被积函数是 $\\sin x$、$\\cos x$ 的有理式；$x\\ne(2k+1)\\pi$ 时 $t$ 才有定义（端点情形单独讨论）。"
        ],
        "conclusion": [
          "万能代换是\"一定能用\"的兜底方法，但常常引入高次有理函数，计算量大；能观察到 $R(-\\sin x,\\cos x)=-R(\\sin x,\\cos x)$ 等对称性时，改用 $t=\\cos x$、$t=\\sin x$、$t=\\tan x$（整角代换）更快。"
        ],
        "pitfalls": [
          "一律用万能代换导致分母次数爆炸；忘记 $\\mathrm{d}x=\\frac{2\\mathrm{d}t}{1+t^2}$ 里的因子 2。"
        ]
      },
      {
        "id": "ch3-33-irrational",
        "type": "method",
        "label": "无理函数代换",
        "title": "两类根式的有理化代换",
        "statement": [
          "形如 $\\displaystyle\\int R\\left(x,\\sqrt[n]{ax+b}\\right)\\mathrm{d}x$：令 $t=\\sqrt[n]{ax+b}$，则 $x=\\frac{t^n-b}{a}$，$\\mathrm{d}x=\\frac{n}{a}t^{n-1}\\mathrm{d}t$，化为 $t$ 的有理函数积分。",
          "形如 $\\displaystyle\\int R\\left(x,\\sqrt[n]{\\frac{ax+b}{cx+d}}\\right)\\mathrm{d}x$（$ad-bc\\ne0$）：令 $t=\\sqrt[n]{\\frac{ax+b}{cx+d}}$，解出 $x$ 与 $\\mathrm{d}x$，同样化为有理函数积分。"
        ],
        "source": "§3.3.4，课件 3-3 p. 306-319",
        "conclusion": [
          "多个根号同时出现时取各根指数的最小公倍数，例如 $\\sqrt{x}$ 与 $\\sqrt[3]{x}$ 同现时令 $t=\\sqrt[6]{x}$。"
        ],
        "pitfalls": [
          "只代换根号内的部分而忘记把 $\\mathrm{d}x$ 一起换掉；多个根号时取了公倍数以外的代换。"
        ]
      },
      {
        "id": "ch3-33-basic-table-ext",
        "type": "formula",
        "label": "积分表扩充",
        "title": "由换元与分部积分得到的常用积分",
        "statement": [
          "$\\displaystyle\\int\\tan x\\,\\mathrm{d}x=-\\ln|\\cos x|+C$，$\\displaystyle\\int\\cot x\\,\\mathrm{d}x=\\ln|\\sin x|+C$，$\\displaystyle\\int\\sec x\\,\\mathrm{d}x=\\ln|\\sec x+\\tan x|+C$，$\\displaystyle\\int\\csc x\\,\\mathrm{d}x=\\ln|\\csc x-\\cot x|+C$。",
          "$\\displaystyle\\int\\frac{\\mathrm{d}x}{a^2+x^2}=\\frac1a\\arctan\\frac xa+C$，$\\displaystyle\\int\\frac{\\mathrm{d}x}{\\sqrt{a^2-x^2}}=\\arcsin\\frac xa+C$。",
          "$\\displaystyle\\int\\frac{\\mathrm{d}x}{\\sqrt{x^2\\pm a^2}}=\\ln\\left|x+\\sqrt{x^2\\pm a^2}\\right|+C$，$\\displaystyle\\int\\sqrt{a^2-x^2}\\,\\mathrm{d}x=\\frac x2\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\arcsin\\frac xa+C$。"
        ],
        "source": "§3.3.2，课件 3-3 p. 261-287",
        "conclusion": [
          "这些结果都由 3.3 的方法推出，应当与基本积分表一起记住；考试中直接使用可以省去推导时间。"
        ],
        "pitfalls": [
          "$\\int\\sec x\\,\\mathrm{d}x$ 的结果写成 $\\ln|\\sec x|$ 漏掉 $\\tan x$；$\\int\\frac{\\mathrm{d}x}{\\sqrt{a^2-x^2}}$ 忘记 $\\arcsin\\frac xa$ 里的 $\\frac1a$。"
        ]
      },
      {
        "id": "ch3-33-integrability",
        "type": "note",
        "label": "可积出与积不出",
        "title": "初等函数的原函数不一定是初等函数",
        "statement": [
          "被积函数的原函数是初等函数时，称该不定积分可积出；否则称积不出。例如 $\\int e^{-x^2}\\mathrm{d}x$、$\\int\\frac{\\sin x}{x}\\mathrm{d}x$、$\\int\\frac{\\mathrm{d}x}{\\ln x}$、$\\int\\sqrt{1-x^3}\\,\\mathrm{d}x$ 都是积不出的。"
        ],
        "source": "§3.3.3，课件 3-3 p. 233-247",
        "conclusion": [
          "因此\"算不出来\"有两种原因：方法没选对，或者本来就积不出。判断属于哪一种，是学完 3.3 之后应有的分寸感；本章其余部分只处理可积出的情形。"
        ],
        "pitfalls": [
          "在积不出的积分上耗费大量时间试图\"变形出来\"。"
        ]
      },
      {
        "id": "ch3-33-verification",
        "type": "note",
        "label": "结果验证",
        "title": "不定积分算完必须求导验算",
        "statement": [
          "对结果 $F(x)+C$ 求导，应得到被积函数 $f(x)$；这是唯一不依赖答案的检验方式，也能立刻查出漏系数、漏负号、漏回代这三类高频错误。"
        ],
        "source": "§3.3.1，课件 3-3 p. 6-30",
        "conclusion": [
          "换元法引入的系数（$\\frac12$、$\\frac1a$、$\\frac2{1+t^2}$ 等）和三角代换的符号，是验算时最该盯的地方。"
        ]
      }
    ]
  },
  {
    "number": "3.4",
    "bookChapter": "3",
    "title": "定积分的换元积分法和分部积分法",
    "lead": "把 3.3 的两件工具搬到定积分上，但要多管一件事——上下限。换元时上下限必须跟着换，且不需要反函数；分部积分则直接把边界项分离出来，配合对称区间、周期性与 Wallis 递推公式处理大量定积分。",
    "map": [
      "定积分换元公式",
      "换元时上下限的对应",
      "对称区间的奇偶性",
      "周期函数的积分",
      "用代换证明积分恒等式",
      "定积分的分部积分",
      "Wallis 公式"
    ],
    "definitions": [],
    "entries": [
      {
        "id": "ch3-34-sub-formula",
        "type": "theorem",
        "label": "定理 3.4.1",
        "title": "定积分的换元积分法",
        "statement": [
          "设 $f(x)\\in C([a,b])$，$x=\\varphi(t)$ 在闭区间 $[\\alpha,\\beta]$（或 $[\\beta,\\alpha]$）上连续可导，且 $\\varphi(\\alpha)=a$、$\\varphi(\\beta)=b$，$\\varphi$ 的值域含于 $[a,b]$，则 $\\int_a^b f(x)\\,\\mathrm{d}x=\\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,\\mathrm{d}t$。"
        ],
        "source": "§3.4.1，课件 3-4 p. 3-9",
        "conditions": [
          "$f$ 在 $[a,b]$ 上连续；$x=\\varphi(t)$ 连续可导；端点对应 $a=\\varphi(\\alpha)$、$b=\\varphi(\\beta)$；$\\varphi$ 的值域落在 $[a,b]$ 内。"
        ],
        "conclusion": [
          "换元后**上下限必须一起换**，并且直接代入新变量即可（不必像不定积分那样把 $t$ 换回 $x$）。"
        ],
        "pitfalls": [
          "换元后仍用原上下限（最常见的错）；或者只换下限不换上限。"
        ],
        "proofIdea": [
          "由 $f$ 连续知存在原函数 $F$；令 $\\Phi(t)=F(\\varphi(t))$，由链式法则 $\\Phi'(t)=f(\\varphi(t))\\varphi'(t)$，对 $\\Phi$ 用 N-L 公式：$\\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\mathrm{d}t=\\Phi(\\beta)-\\Phi(\\alpha)=F(b)-F(a)=\\int_a^b f(x)\\mathrm{d}x$。"
        ]
      },
      {
        "id": "ch3-34-no-inverse",
        "type": "note",
        "label": "注 1",
        "title": "定积分换元不要求 $x=\\varphi(t)$ 有反函数",
        "statement": [
          "与不定积分的第二类换元（定理 3.3.2）不同，定积分换元只需 $x=\\varphi(t)$ 连续可导且端点对应，**不要求 $\\varphi'(t)\\ne0$、不要求反函数存在**。"
        ],
        "source": "§3.4.1，课件 3-4 p. 10-11",
        "conclusion": [
          "原因是定积分换元只用到 $\\Phi(t)=F(\\varphi(t))$ 与 N-L 公式，不需要把结果表成 $x$ 的函数，因此可以允许 $\\varphi$ 在中间折返（例如 $x=\\sin t$ 在 $[0,\\pi]$ 上先增后减）。"
        ],
        "pitfalls": [
          "把不定积分\"必须单调、必须回代\"的要求错搬到定积分上，或者反过来在不定积分里滥用不单调的代换。"
        ]
      },
      {
        "id": "ch3-34-bounds",
        "type": "note",
        "label": "注 2",
        "title": "新上下限与原上下限对应，不必考虑大小",
        "statement": [
          "当 $x=\\varphi(t)$ 把积分变量由 $x$ 换成 $t$ 后，$\\alpha,\\beta$ 必须满足 $\\varphi(\\alpha)=a$、$\\varphi(\\beta)=b$，**不必考虑 $\\alpha$ 与 $\\beta$ 哪个大**；若 $\\varphi$ 单调，$\\alpha,\\beta$ 唯一，否则可以取不同的对应点（例 1 中 $x=-2\\sqrt2$ 时取 $t=\\frac{3\\pi}{4}$ 或 $t=\\frac{5\\pi}{4}$ 都行）。"
        ],
        "source": "§3.4.1，课件 3-4 p. 10-14",
        "conclusion": [
          "定积分换元后上限仍对应上限的像，下限对应下限的像，符号由 N-L 公式自动处理，不需要手动调整。"
        ],
        "pitfalls": [
          "为了\"让上限大于下限\"而擅自交换 $\\alpha,\\beta$ 并加负号，导致多一个负号。"
        ]
      },
      {
        "id": "ch3-34-symmetry",
        "type": "theorem",
        "label": "对称区间命题",
        "title": "奇偶函数在对称区间上的积分",
        "statement": [
          "设 $f(x)$ 在对称区间 $[-a,a]$ 上连续。若 $f$ 是偶函数，则 $\\int_{-a}^a f(x)\\,\\mathrm{d}x=2\\int_0^a f(x)\\,\\mathrm{d}x$；若 $f$ 是奇函数，则 $\\int_{-a}^a f(x)\\,\\mathrm{d}x=0$。"
        ],
        "source": "§3.4.1，课件 3-4 p. 15-60",
        "conclusion": [
          "证明只需对 $\\int_{-a}^0 f$ 作代换 $x=-t$；这条性质可以把大量\"看着复杂\"的对称区间积分直接砍半或归零（如 $\\int_{-3}^3(\\sin^5x+x^3\\cos x)\\mathrm{d}x=0$）。"
        ],
        "pitfalls": [
          "区间不对称时硬套（如 $\\int_{-1}^2$）；或者被积函数\"部分奇部分偶\"时整体判奇偶。"
        ]
      },
      {
        "id": "ch3-34-period",
        "type": "property",
        "label": "周期性",
        "title": "周期函数的积分与起点无关",
        "statement": [
          "若 $f$ 以 $T$ 为周期且在任意有限区间上可积，则对任意实数 $a$ 有 $\\int_a^{a+T}f(x)\\,\\mathrm{d}x=\\int_0^Tf(x)\\,\\mathrm{d}x$；更一般地 $\\int_a^{a+nT}f=n\\int_0^Tf$。"
        ],
        "source": "§3.4.1，课件 3-4 p. 61-90",
        "conclusion": [
          "证明用区间可加性与代换 $x=t+T$；它使得\"积分区间跨好几个周期\"的题可以先算一个周期再乘倍数。"
        ],
        "pitfalls": [
          "周期与积分限不匹配时（如 $\\int_0^{2\\pi}$ 对周期为 $\\pi$ 的函数）忘记先拆成整数个周期。"
        ]
      },
      {
        "id": "ch3-34-complement",
        "type": "method",
        "label": "互补代换",
        "title": "用 $x=a+b-t$ 或 $x=\\pi-t$ 把积分与原积分配对",
        "statement": [
          "常用恒等式：$\\int_0^{\\pi/2}f(\\sin x)\\,\\mathrm{d}x=\\int_0^{\\pi/2}f(\\cos x)\\,\\mathrm{d}x$（令 $x=\\frac{\\pi}{2}-t$）；更一般地 $\\int_a^b f(x)\\,\\mathrm{d}x=\\int_a^b f(a+b-x)\\,\\mathrm{d}x$。",
          "若能把原积分 $I$ 与代换后的积分相加得到可直接计算的积分，就能解出 $I$（如 $\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}\\mathrm{d}x=\\frac{\\pi}{4}$）。"
        ],
        "source": "§3.4.1，课件 3-4 p. 91-110",
        "conclusion": [
          "这类\"配成 $2I$\"的技巧在定积分里极其常用，判型信号是：被积函数由 $\\sin x$ 与 $\\cos x$ 对称地组成，或者区间端点为 $0$ 与 $\\frac{\\pi}{2}$。"
        ],
        "pitfalls": [
          "代换后忘记同步换上下限；相加时把 $I$ 与代换后的积分误认为不同对象。"
        ]
      },
      {
        "id": "ch3-34-parts",
        "type": "formula",
        "label": "定积分分部积分",
        "title": "$\\int_a^b u\\,\\mathrm{d}v=uv\\big|_a^b-\\int_a^b v\\,\\mathrm{d}u$",
        "statement": [
          "设 $u(x)$、$v(x)$ 在 $[a,b]$ 上有连续导数，则 $\\int_a^b u(x)v'(x)\\,\\mathrm{d}x=u(x)v(x)\\Big|_a^b-\\int_a^b u'(x)v(x)\\,\\mathrm{d}x$。"
        ],
        "source": "§3.4.2，课件 3-4 p. 111-125",
        "conclusion": [
          "与不定积分的分部积分相比多了一个边界项 $uv\\big|_a^b$，它常常直接给出数值，把\"求原函数\"变成\"算端点值\"。"
        ],
        "pitfalls": [
          "漏写边界项，或者把 $uv\\big|_a^b$ 写成 $u(b)v(a)-u(a)v(b)$（顺序反了）。"
        ]
      },
      {
        "id": "ch3-34-wallis",
        "type": "formula",
        "label": "Wallis 公式",
        "title": "$\\int_0^{\\pi/2}\\sin^nx\\,\\mathrm{d}x$ 的递推与闭式",
        "statement": [
          "记 $I_n=\\int_0^{\\pi/2}\\sin^nx\\,\\mathrm{d}x=\\int_0^{\\pi/2}\\cos^nx\\,\\mathrm{d}x$，由分部积分得 $I_n=\\frac{n-1}{n}I_{n-2}$（$n\\ge2$），$I_0=\\frac{\\pi}{2}$，$I_1=1$。",
          "故 $I_{2k}=\\frac{(2k-1)!!}{(2k)!!}\\cdot\\frac{\\pi}{2}$，$I_{2k+1}=\\frac{(2k)!!}{(2k+1)!!}$。"
        ],
        "source": "§3.4.2，课件 3-4 p. 126-152",
        "conclusion": [
          "递推关系把任意 $n$ 的积分降到 $0$ 或 $1$；奇数情形结果是纯有理数，偶数情形带 $\\frac{\\pi}{2}$。这是定积分部分出现频率最高的公式之一。"
        ],
        "pitfalls": [
          "偶奇混用（把 $I_{2k}$ 的 $\\frac{\\pi}{2}$ 漏掉）；或者把 $(2k)!!$ 与 $(2k+1)!!$ 的位置写反。"
        ]
      },
      {
        "id": "ch3-34-integral-equation",
        "type": "method",
        "label": "含未知积分的方程",
        "title": "分部积分把 $\\int f'$ 型积分化成端点值",
        "statement": [
          "已知 $f''$ 连续与若干端点值（如 $f(0)=1$、$f(2)=3$、$f'(2)=5$）时，求 $\\int_0^2 xf''(x)\\,\\mathrm{d}x$ 一类的问题：取 $u=x$、$\\mathrm{d}v=f''(x)\\mathrm{d}x$，得 $\\int_0^2xf''(x)\\mathrm{d}x=xf'(x)\\big|_0^2-\\int_0^2f'(x)\\mathrm{d}x=2f'(2)-0-\\left[f(2)-f(0)\\right]$，代入已知值即可。"
        ],
        "source": "§3.4.2，课件 3-4 p. 111-125",
        "conclusion": [
          "「含 $f'$ 或 $f''$ 的定积分 + 端点条件」是分部积分的标准信号：分部一次降低一阶导数，边界项正好用上端点值。"
        ],
        "pitfalls": [
          "直接把 $f$ 当已知函数算，或者分部后忘记把 $\\int f'$ 化成 $f(b)-f(a)$。"
        ]
      },
      {
        "id": "ch3-34-indef-vs-def",
        "type": "note",
        "label": "对比小结",
        "title": "定积分换元与不定积分换元的三点不同",
        "statement": [
          "① 定积分换元**必须同步换上下限**，算完不需要回代；不定积分必须回代成 $x$ 的函数。",
          "② 定积分换元**不要求反函数存在**（定理 3.4.1 无 $\\varphi'\\ne0$ 条件）；不定积分的第二类换元要求 $\\varphi'\\ne0$。",
          "③ 定积分换元后的上下限只需满足 $\\varphi(\\alpha)=a$、$\\varphi(\\beta)=b$，不必考虑 $\\alpha$ 与 $\\beta$ 的大小；不定积分没有上下限问题，但结果必须求导验证。"
        ],
        "source": "§3.4.1，课件 3-4 p. 3-14",
        "conclusion": [
          "三条差别都源于\"定积分是一个数，不定积分是一族函数\"；做题前先认清是哪一类，可以避免把两者的规则互相串用。"
        ]
      }
    ]
  },
  {
    "number": "3.5",
    "bookChapter": "3",
    "title": "定积分的应用",
    "lead": "定积分是把\"局部近似\"加起来的工具，本节把它正式化为微元法——取一个小区间上的近似量 dQ=f(x)dx，再在整段上积分。用这套办法可以统一求出弧长、面积、体积、旋转曲面面积，以及质量、压力、引力、功这些物理量。",
    "map": [
      "微元法",
      "平面曲线的弧长",
      "直角坐标与参数方程下的弧长",
      "极坐标下的弧长",
      "平面图形的面积",
      "参数方程与极坐标下的面积",
      "平行截面面积已知的立体体积",
      "旋转体的体积",
      "旋转曲面的面积",
      "质量与质心",
      "液体静压力",
      "引力",
      "变力做功"
    ],
    "definitions": [],
    "entries": [
      {
        "id": "ch3-35-element",
        "type": "method",
        "label": "微元法",
        "title": "微元法（两步法）",
        "statement": [
          "设 $f\\in C([a,b])$，$Q$ 是由 $y=f(x)$ 确定的、在 $[a,b]$ 上非均匀连续分布且对区间具有可加性的量。若总量可写成 $Q=\\int_a^b f(x)\\,\\mathrm{d}x$，并记 $Q(x)$ 为分布在 $[a,x]$ 上的量，则 $\\mathrm{d}Q=f(x)\\,\\mathrm{d}x$ 称为 $Q$ 的微元。",
          "求 $Q$ 的步骤只有两步：① 在 $[x,x+\\mathrm{d}x]$ 上把部分量 $\\Delta Q$ 近似成与 $\\mathrm{d}x$ 成线性关系的 $\\mathrm{d}Q=f(x)\\mathrm{d}x$，要求误差是 $\\mathrm{d}x$ 的高阶无穷小；② 在 $[a,b]$ 上积分 $Q=\\int_a^b\\mathrm{d}Q=\\int_a^b f(x)\\,\\mathrm{d}x$。"
        ],
        "source": "§3.5.1，课件 3-5 p. 1-20",
        "conditions": [
          "$Q$ 对区间可加（分段求和等于整体）；$\\mathrm{d}Q$ 与 $\\Delta Q$ 之差是 $\\mathrm{d}x$ 的高阶无穷小；$f$ 连续。"
        ],
        "conclusion": [
          "原来\"分割—近似—求和—取极限\"四步简化成\"取微元—积分\"两步，图形与物理中的几乎所有量都可以套这个模板。"
        ],
        "pitfalls": [
          "只写 $f(x)\\,\\mathrm{d}x$ 而不验证\"误差是 $\\mathrm{d}x$ 的高阶小量\"，可能得出错误结果（典型如用\"弧长微分 $=$ 弦长\"直接近似是正确的，但用\"面积微分 $=\\Delta x\\Delta y$ 的平均\"就会出偏）。",
          "对称性可以省一半计算，但先要判断积分变量的范围是否也对称。"
        ],
        "intuition": "微元法就是\"局部线性化\"加\"整体积分\"：把曲线、曲面在这一小段上当成直线、平面（或圆柱、圆台的侧面）来算，误差是高阶小量就不会影响积分结果。"
      },
      {
        "id": "ch3-35-arc-length",
        "type": "formula",
        "label": "弧长公式",
        "title": "平面曲线的弧长与弧微分",
        "statement": [
          "设平面曲线 $C$ 的参数方程为 $x=x(t)$、$y=y(t)$，$t\\in[\\alpha,\\beta]$，且 $x'(t)$、$y'(t)$ 连续、不同时为零（这样的曲线称为光滑曲线）。则弧长 $s=\\int_\\alpha^\\beta\\sqrt{x'^2(t)+y'^2(t)}\\,\\mathrm{d}t$，弧微分 $\\mathrm{d}s=\\sqrt{x'^2+y'^2}\\,\\mathrm{d}t$。",
          "直角坐标 $y=f(x)$（$f$ 连续可导）时，$s=\\int_a^b\\sqrt{1+f'^2(x)}\\,\\mathrm{d}x$，$\\mathrm{d}s=\\sqrt{1+y'^2}\\,\\mathrm{d}x$。",
          "极坐标 $\\rho=\\rho(\\theta)$（$\\rho$ 连续可导）时，$s=\\int_{\\theta_1}^{\\theta_2}\\sqrt{\\rho^2(\\theta)+\\rho'^2(\\theta)}\\,\\mathrm{d}\\theta$，$\\mathrm{d}s=\\sqrt{\\rho^2+\\rho'^2}\\,\\mathrm{d}\\theta$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 20-60",
        "conditions": [
          "参数方程中 $x'$、$y'$ 连续且不同时为零；直角坐标中 $f$ 连续可导；极坐标中 $\\rho$ 连续可导。"
        ],
        "conclusion": [
          "三种坐标下的弧长公式来自同一个弧微分 $\\mathrm{d}s=\\sqrt{\\mathrm{d}x^2+\\mathrm{d}y^2}$，代换不同而已。"
        ],
        "pitfalls": [
          "参数方程求弧长时不要忘记 $\\mathrm{d}s=\\sqrt{x'^2+y'^2}\\,\\mathrm{d}t$ 里的 $\\mathrm{d}t$；用错成 $\\sqrt{x'^2+y'^2}$ 直接对 $x$ 积分。",
          "极坐标的弧微分是 $\\sqrt{\\rho^2+\\rho'^2}\\,\\mathrm{d}\\theta$，漏掉 $\\rho^2$ 项最常见。"
        ],
        "proofIdea": [
          "在 $[\\alpha,\\beta]$ 上取分点，用折线长度和逼近曲线长度；由不等式 $\\left|\\sqrt{a^2+b^2}-\\sqrt{c^2+d^2}\\right|\\le|a-c|+|b-d|$ 证明折线长度和收敛到右端的积分（这正是\"曲线可求长\"的定义）。"
        ]
      },
      {
        "id": "ch3-35-area-cartesian",
        "type": "formula",
        "label": "面积公式（直角坐标）",
        "title": "直角坐标下平面图形的面积",
        "statement": [
          "由连续曲线 $y=f(x)$、$y=g(x)$（$f(x)\\ge g(x)$）与直线 $x=a$、$x=b$ 围成的图形面积 $A=\\int_a^b\\left[f(x)-g(x)\\right]\\mathrm{d}x$。",
          "由曲线 $y=f(x)$ 与 $x=a$、$x=b$ 及 $x$ 轴围成的面积取 $A=\\int_a^b|f(x)|\\,\\mathrm{d}x$，$f$ 在区间内变号时必须分段或加绝对值。"
        ],
        "source": "§3.5.2，课件 3-5 p. 60-100",
        "conditions": [
          "两块区域在 $[a,b]$ 上上下位置不变；若交点把区间分段，要在每段上重新判断上下关系。"
        ],
        "conclusion": [
          "面积微元 $\\mathrm{d}A=\\left[f(x)-g(x)\\right]\\mathrm{d}x$，\"上减下\"是唯一规则。"
        ],
        "pitfalls": [
          "直接把 $\\int_a^b f(x)\\mathrm{d}x$ 当面积（$f$ 变号时会抵消）；遇到\"上减下\"关系在区间内改变时忘记分段。"
        ]
      },
      {
        "id": "ch3-35-area-parametric",
        "type": "formula",
        "label": "面积公式（参数方程）",
        "title": "参数方程下的面积",
        "statement": [
          "若曲线由 $x=x(t)$、$y=y(t)$ 给出，$t\\in[\\alpha,\\beta]$（或 $[\\beta,\\alpha]$），$y(t)$ 连续、$x(t)$ 有连续导数且 $x'(t)\\ne0$，则曲线与直线 $x=a$、$x=b$、$x$ 轴围成的面积 $A=\\int_\\alpha^\\beta y(t)x'(t)\\,\\mathrm{d}t$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 100-120",
        "conditions": [
          "$x'(t)\\ne0$ 保证 $x$ 与 $t$ 一一对应；$x(\\alpha)=a$、$x(\\beta)=b$ 时要按对应关系换上下限。"
        ],
        "conclusion": [
          "与直角坐标公式只差一个换元：$A=\\int_a^b y\\,\\mathrm{d}x=\\int_\\alpha^\\beta y(t)x'(t)\\,\\mathrm{d}t$。"
        ],
        "pitfalls": [
          "换元后上下限忘记对应（$x$ 从 $0$ 变到 $a$ 时 $t$ 可能从 $\\frac\\pi2$ 变到 $0$），导致符号相反。"
        ]
      },
      {
        "id": "ch3-35-area-polar",
        "type": "formula",
        "label": "面积公式（极坐标）",
        "title": "极坐标下曲边扇形的面积",
        "statement": [
          "由射线 $\\theta=\\alpha$、$\\theta=\\beta$（$0<\\beta-\\alpha\\le2\\pi$）与连续曲线 $\\rho=\\rho(\\theta)$ 围成的曲边扇形面积 $A=\\frac12\\int_\\alpha^\\beta\\rho^2(\\theta)\\,\\mathrm{d}\\theta$，面积微元 $\\mathrm{d}A=\\frac12\\rho^2(\\theta)\\,\\mathrm{d}\\theta$。",
          "若原点在区域内部且 $\\rho(\\theta)$ 在 $[0,2\\pi]$ 上连续，则整个区域面积 $A=\\frac12\\int_0^{2\\pi}\\rho^2(\\theta)\\,\\mathrm{d}\\theta$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 120-150",
        "conditions": [
          "$\\rho(\\theta)$ 在 $[\\alpha,\\beta]$ 上连续且非负；$\\beta-\\alpha\\le2\\pi$（否则会把同一块区域重复计入）。"
        ],
        "conclusion": [
          "小曲边扇形用半径为 $\\rho(\\theta)$、圆心角为 $\\mathrm{d}\\theta$ 的扇形近似，面积 $\\frac12\\rho^2\\mathrm{d}\\theta$。"
        ],
        "pitfalls": [
          "求两曲线围成的公共部分面积时，先求交点定出 $\\theta$ 的分段，再分别积分；直接用一个 $\\theta$ 区间会算错。"
        ]
      },
      {
        "id": "ch3-35-volume-cross",
        "type": "formula",
        "label": "体积公式（截面）",
        "title": "平行截面面积已知的立体体积",
        "statement": [
          "设立体介于平面 $x=a$ 与 $x=b$ 之间，过 $x$ 且垂直于 $x$ 轴的截面面积为连续的 $A(x)$，则体积 $V=\\int_a^b A(x)\\,\\mathrm{d}x$，微元 $\\mathrm{d}V=A(x)\\,\\mathrm{d}x$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 150-170",
        "conditions": [
          "$A(x)$ 在 $[a,b]$ 上连续。"
        ],
        "conclusion": [
          "用底面积为 $A(x)$、高为 $\\mathrm{d}x$ 的正柱体近似薄片体积，误差是 $\\mathrm{d}x$ 的高阶小量。"
        ],
        "pitfalls": [
          "截面积函数 $A(x)$ 要写对（例如圆柱楔用半圆截面 $A(x)=\\frac12(R^2-x^2)$），不要与旋转体公式混用。"
        ]
      },
      {
        "id": "ch3-35-volume-revolve",
        "type": "formula",
        "label": "旋转体体积",
        "title": "旋转体体积（圆盘法与柱壳法）",
        "statement": [
          "由 $y=f(x)\\ge0$、$x=a$、$x=b$ 与 $x$ 轴围成的图形绕 $x$ 轴旋转一周，体积 $V=\\pi\\int_a^b f^2(x)\\,\\mathrm{d}x$，微元 $\\mathrm{d}V=\\pi f^2(x)\\mathrm{d}x$（圆盘法）。",
          "同一图形绕 $y$ 轴旋转时，用柱壳法 $V=2\\pi\\int_a^b x\\,f(x)\\,\\mathrm{d}x$（微元 $\\mathrm{d}V=2\\pi x f(x)\\mathrm{d}x$），或把 $x$ 表成 $y$ 的函数后用圆盘法 $\\pi\\int x^2(y)\\,\\mathrm{d}y$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 170-200",
        "conditions": [
          "$f$ 连续且非负；绕 $y$ 轴时需要 $x\\ge0$（柱壳法）或 $x(y)$ 单调（圆盘法）。"
        ],
        "conclusion": [
          "两种方法本质都是\"截面面积×厚度\"，只是把厚度取在 $\\mathrm{d}x$ 还是 $\\mathrm{d}y$ 方向；柱壳法的截面是圆柱侧面展开的长方形（周长 $2\\pi x$、高 $f(x)$、厚 $\\mathrm{d}x$）。"
        ],
        "pitfalls": [
          "绕 $y$ 轴时仍然写 $\\pi\\int f^2(x)\\mathrm{d}x$（张冠李戴）；柱壳法漏掉 $2\\pi x$ 中的 $x$（它是周长因子）。"
        ]
      },
      {
        "id": "ch3-35-surface-revolve",
        "type": "formula",
        "label": "旋转曲面面积",
        "title": "旋转曲面的面积",
        "statement": [
          "曲线 $y=f(x)\\ge0$（$x\\in[a,b]$）绕 $x$ 轴旋转，曲面面积 $S=2\\pi\\int_a^b f(x)\\sqrt{1+f'^2(x)}\\,\\mathrm{d}x$。",
          "参数方程 $x=x(t)$、$y=y(t)\\ge0$（$t\\in[\\alpha,\\beta]$）绕 $x$ 轴旋转时，$S=2\\pi\\int_\\alpha^\\beta y(t)\\sqrt{x'^2(t)+y'^2(t)}\\,\\mathrm{d}t$；极坐标 $\\rho=\\rho(\\theta)$ 绕极轴旋转时，$S=2\\pi\\int_\\alpha^\\beta\\rho(\\theta)\\sin\\theta\\sqrt{\\rho^2+\\rho'^2}\\,\\mathrm{d}\\theta$。"
        ],
        "source": "§3.5.2，课件 3-5 p. 200-210",
        "conditions": [
          "$f\\ge0$（到轴的距离 $f(x)$ 就是旋转半径）；$f$ 连续可导；极坐标形式要求曲线在极轴同侧（$\\sin\\theta\\ge0$）。"
        ],
        "conclusion": [
          "面积微元 $\\mathrm{d}S=2\\pi y\\,\\mathrm{d}s$——周长 $2\\pi y$ 乘弧微分 $\\mathrm{d}s$，用的是圆台侧面而非圆柱侧面。"
        ],
        "pitfalls": [
          "把 $\\mathrm{d}S=2\\pi y\\,\\mathrm{d}s$ 写成 $2\\pi y\\,\\mathrm{d}x$（漏掉弧微分），只有在 $y$ 近似水平时才退化成柱面。"
        ]
      },
      {
        "id": "ch3-35-mass",
        "type": "formula",
        "label": "质量公式",
        "title": "细棒的质量与质心",
        "statement": [
          "细棒位于 $[a,b]$，线密度 $\\rho(x)$ 连续，则质量 $m=\\int_a^b\\rho(x)\\,\\mathrm{d}x$，质心横坐标 $\\bar x=\\frac{1}{m}\\int_a^b x\\rho(x)\\,\\mathrm{d}x$。"
        ],
        "source": "§3.5.3，课件 3-5 p. 210-220",
        "conditions": [
          "线密度连续；细棒视为一维（横截面尺度可忽略）。"
        ],
        "conclusion": [
          "均匀细棒时 $\\rho$ 为常数，退化成 $m=\\rho l$，与初等结论一致。"
        ],
        "pitfalls": [
          "单位不统一（如 $\\rho$ 用 $\\mathrm{kg/m}$、长度用 $\\mathrm{cm}$）导致结果差 100 倍。"
        ]
      },
      {
        "id": "ch3-35-pressure",
        "type": "formula",
        "label": "液体静压力",
        "title": "液体静压力",
        "statement": [
          "竖直放置的薄板（区域在深度 $x$ 处的宽度为 $w(x)$，$x$ 从 $a$ 到 $b$）所受静压力 $P=\\rho g\\int_a^b x\\,w(x)\\,\\mathrm{d}x$，其中 $\\rho$ 为液体密度、$g$ 为重力加速度，$x$ 是深度。"
        ],
        "source": "§3.5.3，课件 3-5 p. 220-230",
        "conditions": [
          "液体静止；薄板竖直；深度从液面量起。"
        ],
        "conclusion": [
          "压力微元 $\\mathrm{d}P=(\\rho g x)\\cdot w(x)\\mathrm{d}x$：\"压强×面积\"，压强随深度线性变化。"
        ],
        "pitfalls": [
          "坐标系原点不放在液面，导致深度写成 $x+h$ 忘记平移；宽度的单位与压力单位混用。"
        ]
      },
      {
        "id": "ch3-35-gravity",
        "type": "formula",
        "label": "引力",
        "title": "细棒对质点的引力",
        "statement": [
          "均匀细棒长 $l$、质量 $M$，质点为单位质量，位于棒的垂直平分线上距棒 $a$ 处，则棒对质点的引力大小 $F=\\frac{2kM}{l a}\\cdot\\frac{l}{\\sqrt{4a^2+l^2}}$（$k$ 为引力常数），方向沿垂直平分线指向棒。"
        ],
        "source": "§3.5.3，课件 3-5 p. 230-245",
        "conditions": [
          "棒均匀、质点位置在对称轴上；各微元对质点的引力方向不同，须先分解再积分。"
        ],
        "conclusion": [
          "引力微元 $\\mathrm{d}F=\\frac{k\\,\\mathrm{d}m}{r^2}$ 是矢量，只能对同一方向的分量积分，垂直于对称轴的分量因对称性相互抵消。"
        ],
        "pitfalls": [
          "直接对标量 $\\mathrm{d}F$ 积分而不做投影；对称轴上的方向判断错误（符号）。"
        ]
      },
      {
        "id": "ch3-35-work",
        "type": "formula",
        "label": "功",
        "title": "变力做功",
        "statement": [
          "物体沿 $x$ 轴从 $a$ 移到 $b$，受力 $F(x)$（方向沿 $x$ 轴），则功 $W=\\int_a^b F(x)\\,\\mathrm{d}x$。",
          "典型应用：把半球形水池中的水抽干，微元 $\\mathrm{d}W=\\rho g\\cdot\\pi r^2(x)\\cdot x\\,\\mathrm{d}x$（$x$ 为薄层到池口的距离）；火箭脱离地球引力所需功 $W=\\int_R^{\\infty}\\frac{kMm}{r^2}\\mathrm{d}r=mgR$，对应第二宇宙速度 $v=\\sqrt{2gR}$。"
        ],
        "source": "§3.5.3，课件 3-5 p. 245-258",
        "conditions": [
          "力只与位置有关（$F=F(x)$）；位移方向与力方向一致或差一个符号。"
        ],
        "conclusion": [
          "功微元 $\\mathrm{d}W=F(x)\\mathrm{d}x$，物理含义是\"力×微小位移\"；位移量要选对（抽水时是\"抽到池口的距离\"而不是绝对高度）。"
        ],
        "pitfalls": [
          "抽水问题的位移取成水的绝对高度（应取到池口的竖直距离）；忘记 $\\rho g$ 或把体积元写成面积元。"
        ]
      },
      {
        "id": "ch3-35-pitfall",
        "type": "pitfall",
        "label": "易错点",
        "title": "应用微元法的三个常见错误",
        "statement": [
          "① 微元写对但积分限不对（极坐标的 $\\theta$ 区间、参数方程的 $t$ 对应）；② 面积/体积/曲面面积三套公式张冠李戴（体积有 $\\pi$、曲面面积有 $2\\pi$、面积没有）；③ 物理问题中坐标系原点选错，导致深度、距离的表达式整体平移。"
        ],
        "source": "§3.5.2 至 §3.5.3，课件 3-5 p. 20-258",
        "conditions": [
          "适用于 $3.5$ 全部例题。"
        ],
        "conclusion": [
          "检查办法：量纲检查（面积 $\\mathrm{m}^2$、体积 $\\mathrm{m}^3$、功 $\\mathrm{J}$）与特例检查（令 $f$ 为常数时是否退化成初等公式）。"
        ]
      }
    ]
  },
  {
    "number": "3.6",
    "bookChapter": "3",
    "title": "反常积分",
    "lead": "正常积分要求区间有限、函数有界，本节放开这两条限制，把积分定义为极限——无界区间上的极限（无穷限积分）与无界函数的极限（瑕积分）。核心问题是敛散性判定：先靠 p 积分与 q 积分作尺子，再用比较判别法及极限形式；之后介绍两个由反常积分定义的函数 Γ 与 Beta。",
    "map": [
      "反常积分的两条限制被放开",
      "无穷限反常积分",
      "无界函数的反常积分（瑕积分）",
      "p 积分与 q 积分的敛散性",
      "有界判别法",
      "比较判别法",
      "极限形式的比较判别法",
      "Cauchy 收敛准则",
      "绝对收敛与条件收敛",
      "反常积分的换元与分部积分",
      "Gamma 函数",
      "Beta 函数"
    ],
    "definitions": [
      {
        "label": "定义 3.6.1",
        "title": "无穷区间上的反常积分",
        "statement": [
          "设 $f(x)$ 在 $[a,+\\infty)$ 上有定义，且 $\\forall b>a$，$f$ 在 $[a,b]$ 上 Riemann 可积，则称极限 $\\lim\\limits_{b\\to+\\infty}\\int_a^b f(x)\\,\\mathrm{d}x$ 为 $f$ 在 $[a,+\\infty)$ 上的反常积分，记作 $\\int_a^{+\\infty}f(x)\\,\\mathrm{d}x$。",
          "若该极限存在，称此无穷限积分收敛，极限值即积分值；否则称发散。$(-\\infty,b]$ 上类似地定义为 $\\lim\\limits_{a\\to-\\infty}\\int_a^b f(x)\\mathrm{d}x$。$(-\\infty,+\\infty)$ 上的积分定义为 $\\int_{-\\infty}^{c}+\\int_c^{+\\infty}$，两个都收敛才算收敛。"
        ],
        "source": "§3.6.1，课件 3-6 p. 6-60"
      },
      {
        "label": "定义 3.6.2",
        "title": "无界函数的反常积分（瑕积分）",
        "statement": [
          "若函数 $f(x)$ 在点 $x_0$ 的任意左邻域或任意右邻域内无界，则称 $x_0$ 为 $f$ 的奇点（瑕点）。",
          "设 $f$ 在 $(a,b]$ 上有定义、$a$ 为奇点，且 $\\forall\\varepsilon>0$，$f$ 在 $[a+\\varepsilon,b]$ 上可积，则称 $\\lim\\limits_{\\varepsilon\\to0^+}\\int_{a+\\varepsilon}^b f(x)\\,\\mathrm{d}x$ 为 $f$ 在 $(a,b]$ 上的反常积分；极限存在称收敛，否则称发散。$b$ 为奇点时类似。若 $c\\in(a,b)$ 为奇点，则定义为 $\\int_a^c+\\int_c^b$，两段都收敛才算收敛。"
        ],
        "source": "§3.6.1，课件 3-6 p. 60-100"
      },
      {
        "label": "定义 3.6.3",
        "title": "绝对收敛与条件收敛",
        "statement": [
          "设 $f\\in C([a,+\\infty))$。若 $\\int_a^{+\\infty}|f(x)|\\,\\mathrm{d}x$ 收敛，则称 $\\int_a^{+\\infty}f(x)\\,\\mathrm{d}x$ 绝对收敛；若 $\\int_a^{+\\infty}|f(x)|\\mathrm{d}x$ 发散而 $\\int_a^{+\\infty}f(x)\\mathrm{d}x$ 收敛，则称条件收敛。",
          "对无界函数的反常积分有同样的定义（定义 3.6.4）。"
        ],
        "source": "§3.6.2，课件 3-6 p. 180-200"
      },
      {
        "label": "Gamma 函数",
        "title": "Gamma 函数",
        "statement": [
          "对 $x>0$，反常积分 $\\int_0^{+\\infty}t^{x-1}e^{-t}\\,\\mathrm{d}t$ 收敛，它定义了 $(0,+\\infty)$ 上的函数 $\\Gamma(x)=\\int_0^{+\\infty}t^{x-1}e^{-t}\\,\\mathrm{d}t$，称为 Gamma（伽玛）函数。",
          "当 $x=n$ 为正整数时 $\\Gamma(n)=(n-1)!$，所以 Gamma 函数是阶乘的推广。"
        ],
        "source": "§3.6.3，课件 3-6 p. 299-320"
      },
      {
        "label": "Beta 函数",
        "title": "Beta 函数",
        "statement": [
          "当 $p>0$、$q>0$ 时，反常积分 $\\int_0^1x^{p-1}(1-x)^{q-1}\\,\\mathrm{d}x$ 收敛，它定义了 $(p,q)$ 的函数 $\\mathrm{B}(p,q)=\\int_0^1x^{p-1}(1-x)^{q-1}\\,\\mathrm{d}x$，称为 Beta（贝塔）函数。"
        ],
        "source": "§3.6.3，课件 3-6 p. 320-360"
      }
    ],
    "entries": [
      {
        "id": "ch3-36-motivation",
        "type": "note",
        "label": "引入",
        "title": "反常积分的两条限制被放开",
        "statement": [
          "定积分 $\\int_a^b f(x)\\mathrm{d}x$ 有两条基本限制：[a,b] 是有限闭区间；$f$ 是 [a,b] 上的有界函数。满足这两条的积分称为正常积分。",
          "反常积分就是放开其中一条：区间无限（无穷限积分），或函数无界（瑕积分）。它们都定义为正常积分的极限。"
        ],
        "source": "§3.6 导言，课件 3-6 p. 1-6",
        "conclusion": [
          "两类反常积分的处理套路完全一致——先算部分区间的正常积分，再取极限；判敛也共用一把尺子（p 积分／q 积分 + 比较判别法）。"
        ]
      },
      {
        "id": "ch3-36-p-integral",
        "type": "theorem",
        "label": "p 积分",
        "title": "无穷限 p 积分的敛散性",
        "statement": [
          "对 $a>0$ 与 $p\\in\\mathbb{R}$，$\\int_a^{+\\infty}\\frac{\\mathrm{d}x}{x^p}$ 当 $p>1$ 时收敛，且 $\\int_a^{+\\infty}\\frac{\\mathrm{d}x}{x^p}=\\frac{a^{1-p}}{p-1}$；当 $p\\le1$ 时发散。"
        ],
        "source": "§3.6.1，课件 3-6 p. 30-40",
        "conditions": [
          "$a>0$；$p$ 为任意实数。"
        ],
        "conclusion": [
          "p 积分是无穷限积分判敛的\"标准尺子\"：$p>1$ 收敛的临界值来自 $\\int_1^b x^{-p}\\mathrm{d}x=\\frac{1-b^{1-p}}{p-1}$ 的极限是否存在。"
        ],
        "proofIdea": [
          "$p\\ne1$ 时 $\\int_a^b x^{-p}\\mathrm{d}x=\\frac{a^{1-p}-b^{1-p}}{p-1}$，$b\\to+\\infty$ 时 $b^{1-p}\\to0$ 当且仅当 $p>1$；$p=1$ 时积分为 $\\ln b-\\ln a\\to+\\infty$。"
        ]
      },
      {
        "id": "ch3-36-q-integral",
        "type": "theorem",
        "label": "q 积分",
        "title": "无界函数 q 积分的敛散性",
        "statement": [
          "对 $a<b$ 与 $q\\in\\mathbb{R}$，$\\int_a^b\\frac{\\mathrm{d}x}{(x-a)^q}$ 当 $q<1$ 时收敛，且 $\\int_a^b\\frac{\\mathrm{d}x}{(x-a)^q}=\\frac{(b-a)^{1-q}}{1-q}$；当 $q\\ge1$ 时发散。类似地 $\\int_a^b\\frac{\\mathrm{d}x}{(b-x)^q}$ 当 $q<1$ 时收敛、$q\\ge1$ 时发散。"
        ],
        "source": "§3.6.1，课件 3-6 p. 65-80",
        "conditions": [
          "$a$ 为奇点；$q>0$ 时为反常积分，$q\\le0$ 时是正常积分（必然收敛）。"
        ],
        "conclusion": [
          "注意临界值的方向与 p 积分相反：无界函数要\"幂次小于 1\"才收敛，无穷限要\"幂次大于 1\"才收敛。"
        ],
        "pitfalls": [
          "把 p 积分与 q 积分的临界值记反（$p>1$ 收敛、$q<1$ 收敛）。"
        ],
        "proofIdea": [
          "$q\\ne1$ 时 $\\int_{a+\\varepsilon}^b (x-a)^{-q}\\mathrm{d}x=\\frac{(b-a)^{1-q}-\\varepsilon^{1-q}}{1-q}$，$\\varepsilon\\to0^+$ 时 $\\varepsilon^{1-q}\\to0$ 当且仅当 $q<1$。"
        ]
      },
      {
        "id": "ch3-36-bounded-criterion",
        "type": "theorem",
        "label": "定理 3.6.1",
        "title": "有界判别法",
        "statement": [
          "设 $f$ 在 $[a,+\\infty)$ 上非负且连续，则无穷限积分 $\\int_a^{+\\infty}f(x)\\,\\mathrm{d}x$ 收敛的充要条件是其部分积分 $F(b)=\\int_a^b f(x)\\mathrm{d}x$ 在 $[a,+\\infty)$ 上有界。"
        ],
        "source": "§3.6.2，课件 3-6 p. 101-115",
        "conditions": [
          "$f\\ge0$ 且连续（非负保证 $F(b)$ 单调不减，否则有界推不出收敛）。"
        ],
        "conclusion": [
          "非负函数的无穷限积分要么收敛到有限值，要么发散到 $+\\infty$；单调有界即收敛。"
        ]
      },
      {
        "id": "ch3-36-comparison",
        "type": "theorem",
        "label": "定理 3.6.2",
        "title": "比较判别法",
        "statement": [
          "设 $f,g\\in C([a,+\\infty))$，$0\\le f(x)\\le g(x)$（$\\forall x\\ge a$）。则（1）$\\int_a^{+\\infty}g\\,\\mathrm{d}x$ 收敛 $\\Rightarrow\\int_a^{+\\infty}f\\,\\mathrm{d}x$ 收敛；（2）$\\int_a^{+\\infty}f\\,\\mathrm{d}x$ 发散 $\\Rightarrow\\int_a^{+\\infty}g\\,\\mathrm{d}x$ 发散。"
        ],
        "source": "§3.6.2，课件 3-6 p. 115-135",
        "conditions": [
          "只需在充分远处（$\\exists X>a$ 之后）满足 $0\\le f\\le g$ 即可，前面有限段不影响敛散性。"
        ],
        "conclusion": [
          "大的收敛则小的收敛、小的发散则大的发散——被积函数能被收敛函数压住就收敛，能压住发散函数就发散。"
        ],
        "pitfalls": [
          "用比较判别法时把不等号方向搞反（应找\"更大且收敛\"或\"更小且发散\"的对象）。"
        ],
        "proofIdea": [
          "由 $0\\le\\int_a^b f\\le\\int_a^b g$ 与有界判别法（定理 3.6.1）直接可得。"
        ]
      },
      {
        "id": "ch3-36-limit-comparison",
        "type": "theorem",
        "label": "推论 3.6.1",
        "title": "极限形式的比较判别法",
        "statement": [
          "设 $f,g$ 在 $[a,+\\infty)$ 上非负连续，$\\lim\\limits_{x\\to+\\infty}\\frac{f(x)}{g(x)}=l$（$l$ 可为 $0$ 或 $+\\infty$）。则（1）$0<l<+\\infty$ 时 $\\int f$ 与 $\\int g$ 同敛散；（2）$l=0$ 且 $\\int g$ 收敛时 $\\int f$ 收敛；（3）$l=+\\infty$ 且 $\\int g$ 发散时 $\\int f$ 也发散。"
        ],
        "source": "§3.6.2，课件 3-6 p. 135-160",
        "conditions": [
          "$f,g\\ge0$ 且连续；$g(x)\\ne0$（充分远处）。"
        ],
        "conclusion": [
          "实用做法：取 $g(x)=\\frac{1}{x^p}$ 作尺子，$x\\to+\\infty$ 时 $f(x)\\sim\\frac{c}{x^p}$，则 $p>1$ 收敛、$p\\le1$ 发散。"
        ],
        "pitfalls": [
          "选尺子时忘记先看 $f$ 在无穷远处的阶（如 $f(x)=\\frac{1}{x\\ln x}$，与 $\\frac1x$ 比是 $l=0$ 但 $\\int\\frac1x$ 发散，不能据此下结论，必须换尺子 $\\frac{1}{x\\ln^p x}$）。"
        ],
        "intuition": "极限形式说明两个被积函数在无穷远处\"同阶\"，收敛性只取决于衰减的幂次。"
      },
      {
        "id": "ch3-36-cauchy",
        "type": "theorem",
        "label": "定理 3.6.5",
        "title": "无穷限积分的 Cauchy 收敛准则",
        "statement": [
          "设 $f\\in C([a,+\\infty))$，则 $\\int_a^{+\\infty}f(x)\\mathrm{d}x$ 收敛的充要条件是：$\\forall\\varepsilon>0$，$\\exists X>a$，使 $\\forall b_2>b_1>X$ 都有 $\\left|\\int_{b_1}^{b_2}f(x)\\mathrm{d}x\\right|<\\varepsilon$。"
        ],
        "source": "§3.6.2，课件 3-6 p. 160-175",
        "conditions": [
          "$f$ 连续；对无界函数的反常积分有完全平行的版本（定理 3.6.10）。"
        ],
        "conclusion": [
          "不依赖被积函数的符号（不要求非负），是判敛的一般准则，也是证明 Dirichlet／Abel 型判敛法的基础。"
        ]
      },
      {
        "id": "ch3-36-linear",
        "type": "theorem",
        "label": "定理 3.6.4",
        "title": "反常积分的线性性质",
        "statement": [
          "设 $f,g\\in C([a,+\\infty))$，若 $\\int_a^{+\\infty}f\\,\\mathrm{d}x$ 与 $\\int_a^{+\\infty}g\\,\\mathrm{d}x$ 都收敛，则对任意常数 $\\alpha,\\beta$，$\\int_a^{+\\infty}(\\alpha f+\\beta g)\\mathrm{d}x$ 也收敛，且等于 $\\alpha\\int_a^{+\\infty}f+\\beta\\int_a^{+\\infty}g$。"
        ],
        "source": "§3.6.2，课件 3-6 p. 175-185",
        "conditions": [
          "两个积分都收敛（不能是一个收敛一个发散）。"
        ],
        "conclusion": [
          "反常积分是定积分的极限，定积分与极限都保持线性，所以线性性质自动成立；区间可加性同样成立。"
        ]
      },
      {
        "id": "ch3-36-abs-cond",
        "type": "theorem",
        "label": "定理 3.6.6",
        "title": "绝对收敛与条件收敛的关系",
        "statement": [
          "设 $f\\in C([a,+\\infty))$。若 $\\int_a^{+\\infty}|f(x)|\\mathrm{d}x$ 收敛，则 $\\int_a^{+\\infty}f(x)\\mathrm{d}x$ 必收敛（绝对收敛蕴含收敛）；反之不成立，此时称为条件收敛。"
        ],
        "source": "§3.6.2，课件 3-6 p. 185-200",
        "conditions": [
          "$f$ 连续；结论对无界函数反常积分同样成立。"
        ],
        "conclusion": [
          "最常用的绝对收敛判据：$|f(x)|\\le g(x)$ 且 $\\int g$ 收敛 $\\Rightarrow\\int f$ 绝对收敛。例 $\\int_0^{+\\infty}e^{-x}\\sin x\\,\\mathrm{d}x$ 绝对收敛。"
        ],
        "pitfalls": [
          "误以为\"收敛即绝对收敛\"；$\\int_1^{+\\infty}\\frac{\\sin x}{x}\\mathrm{d}x$ 是条件收敛的经典反例（$\\int\\frac{\\sin x}{x}$ 收敛但 $\\int\\frac{|\\sin x|}{x}$ 发散）。"
        ],
        "proofIdea": [
          "由 $0\\le|f|\\pm f\\le2|f|$ 与比较判别法，得 $\\int(|f|+f)$ 与 $\\int(|f|-f)$ 都收敛，两者相减即得 $\\int f$ 收敛。"
        ]
      },
      {
        "id": "ch3-36-nl-generalized",
        "type": "formula",
        "label": "N-L 公式的推广",
        "title": "反常积分的 Newton-Leibniz 公式",
        "statement": [
          "若 $f(x)$ 连续、$F(x)$ 为 $f$ 的原函数，则 $\\int_a^{+\\infty}f(x)\\mathrm{d}x=F(+\\infty)-F(a)$，其中 $F(+\\infty)=\\lim\\limits_{x\\to+\\infty}F(x)$；对瑕积分 $\\int_a^b f(x)\\mathrm{d}x=F(b)-F(a+0)$。"
        ],
        "source": "§3.6.1，课件 3-6 p. 40-60",
        "conditions": [
          "极限 $F(+\\infty)$ 或 $F(a+0)$ 存在（否则积分发散）。"
        ],
        "conclusion": [
          "只要原函数能求出来，反常积分就是\"原函数在极限点的值之差\"，这是最简单的一类计算。"
        ]
      },
      {
        "id": "ch3-36-parts-improper",
        "type": "theorem",
        "label": "定理 3.6.11",
        "title": "反常积分的换元与分部积分",
        "statement": [
          "设 $u,v\\in C^1([a,+\\infty))$，则 $\\int_a^{+\\infty}u\\,\\mathrm{d}v=uv\\big|_a^{+\\infty}-\\int_a^{+\\infty}v\\,\\mathrm{d}u$。等式意义：若右端有意义，则左端收敛且相等。换元法则在反常积分上同样成立（代换后区间与奇点要同步处理）。"
        ],
        "source": "§3.6.2，课件 3-6 p. 200-230",
        "conditions": [
          "右端两项都有意义；换元时若代换把有限区间映到无限区间（或反之），才能把一类反常积分化成另一类。"
        ],
        "conclusion": [
          "反常积分的分部积分多出的边界项是 $uv\\big|_{a}^{+\\infty}$（或 $uv\\big|_{a}^{b-0}$），要单独检查极限是否存在。"
        ],
        "pitfalls": [
          "用分部积分时忘记检查边界项极限是否存在，把发散的积分算成了有限值。"
        ]
      },
      {
        "id": "ch3-36-gamma-recursion",
        "type": "theorem",
        "label": "Gamma 递推",
        "title": "Gamma 函数的递推公式",
        "statement": [
          "对 $x>0$，$\\Gamma(x+1)=x\\Gamma(x)$；特别地 $\\Gamma(n+1)=n!$（$n$ 为非负整数），$\\Gamma(1)=1$，$\\Gamma\\left(\\frac12\\right)=\\sqrt\\pi$。"
        ],
        "source": "§3.6.3，课件 3-6 p. 320-340",
        "conditions": [
          "$x>0$（保证 $t^{x-1}e^{-t}$ 在 $0$ 附近可积）。"
        ],
        "conclusion": [
          "Gamma 函数是阶乘的连续推广；由 $\\Gamma\\left(\\frac12\\right)=\\sqrt\\pi$ 可算出一批半整数处的值。"
        ],
        "pitfalls": [
          "记成 $\\Gamma(x)=\\int_0^{+\\infty}t^xe^{-t}\\mathrm{d}t$（少一个 $-1$），导致 $\\Gamma(n)$ 与 $(n-1)!$ 对不上。"
        ],
        "proofIdea": [
          "分部积分：$\\Gamma(x+1)=\\int_0^{+\\infty}t^xe^{-t}\\mathrm{d}t=\\left[-t^xe^{-t}\\right]_0^{+\\infty}+x\\int_0^{+\\infty}t^{x-1}e^{-t}\\mathrm{d}t=x\\Gamma(x)$，边界项在 $x>0$ 时为零。"
        ]
      },
      {
        "id": "ch3-36-gamma-probability",
        "type": "formula",
        "label": "概率积分",
        "title": "概率积分与 Γ 的其它表示",
        "statement": [
          "$\\int_0^{+\\infty}e^{-u^2}\\,\\mathrm{d}u=\\frac{\\sqrt\\pi}{2}$（概率积分），从而 $\\Gamma\\left(\\frac12\\right)=\\int_0^{+\\infty}t^{-1/2}e^{-t}\\mathrm{d}t=2\\int_0^{+\\infty}e^{-u^2}\\mathrm{d}u=\\sqrt\\pi$。"
        ],
        "source": "§3.6.3，课件 3-6 p. 340-350",
        "conditions": [
          "$u>0$ 时令 $t=u^2$ 代入。"
        ],
        "conclusion": [
          "概率积分在重积分（二重积分极坐标）里才能算出，这里先承认其值。"
        ]
      },
      {
        "id": "ch3-36-beta-property",
        "type": "theorem",
        "label": "Beta 性质",
        "title": "Beta 函数的对称性与递推",
        "statement": [
          "$\\mathrm{B}(p,q)=\\mathrm{B}(q,p)$（对称性，作 $x=1-t$ 即得）；$\\mathrm{B}(p,q)=\\frac{p-1}{p+q-1}\\mathrm{B}(p-1,q)$（递推，分部积分得）；当 $m,n$ 为正整数时 $\\mathrm{B}(m,n)=\\frac{(m-1)!(n-1)!}{(m+n-1)!}$。"
        ],
        "source": "§3.6.3，课件 3-6 p. 350-360",
        "conditions": [
          "$p>0$、$q>0$。"
        ],
        "conclusion": [
          "Beta 函数与 Gamma 的关系是 $\\mathrm{B}(p,q)=\\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$（本课件未展开证明），整数情形代入 $\\Gamma(n)=(n-1)!$ 即得上面的组合数式。"
        ],
        "proofIdea": [
          "对称性：$\\mathrm{B}(p,q)=\\int_0^1x^{p-1}(1-x)^{q-1}\\mathrm{d}x$ 作 $x=1-t$ 得 $\\mathrm{B}(q,p)$。递推：对 $\\int_0^1x^{p-1}(1-x)^{q-1}\\mathrm{d}x$ 分部积分，整理即得。"
        ]
      },
      {
        "id": "ch3-36-pitfall",
        "type": "pitfall",
        "label": "易错点",
        "title": "反常积分判敛与计算的高频错误",
        "statement": [
          "① 奇点没找齐（闭区间内部有奇点时必须拆成两段并各自判敛，两段都收敛才算收敛，如 $\\int_0^{+\\infty}\\frac{\\mathrm{d}x}{\\sqrt{x}(1+x)}$ 在 $0$ 和 $+\\infty$ 各有一个\"广义奇点\"）；② p 与 q 的临界值记反；③ 比较判别法选错尺子（用 $\\frac1x$ 去判 $\\frac{1}{x\\ln x}$）；④ 用 N-L 公式前不检查原函数在奇点处的极限是否存在；⑤ 条件收敛误判成绝对收敛。"
        ],
        "source": "§3.6.1 至 §3.6.3，课件 3-6 p. 6-360",
        "conditions": [
          "适用于 3.6 全部例题与练习。"
        ],
        "conclusion": [
          "检查办法：先画奇点位置，再把被积函数在奇点或无穷远附近做等价量比较，最后套 p／q 积分的临界值。"
        ]
      }
    ]
  }
];

window.MATH_REVIEW_CHAPTERS = (window.MATH_REVIEW_CHAPTERS || []).concat(
  window.MATH_REVIEW_CHAPTER3
);
