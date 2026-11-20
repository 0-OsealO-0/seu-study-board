window.MATH_REVIEW_CHAPTER2 = [
  {
    "number": "2.1",
    "bookChapter": "2",
    "title": "导数与求导法则",
    "lead": "从差商极限建立导数，并把基本求导公式扩展到复合、隐函数、参数方程与高阶导数。",
    "map": ["导数定义", "可导与连续", "基本公式", "复合与反函数", "隐函数与参数方程", "高阶导数"],
    "definitions": [
      {
        "label": "定义 2.1.1",
        "title": "函数在一点处的导数",
        "statement": [
          "设函数 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义。若极限 $\\lim\\limits_{\\Delta x\\to0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$ 存在，则称 $f$ 在 $x_0$ 处可导，该极限称为 $f$ 在 $x_0$ 处的导数，记作 $f'(x_0)$ 或 $\\left.\\frac{df}{dx}\\right|_{x=x_0}$。",
          "导数也可写成 $f'(x_0)=\\lim\\limits_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$。"
        ],
        "source": "§2.1，课件 PDF 页 71-98"
      },
      {
        "label": "定义 2.1.2",
        "title": "左导数与右导数",
        "statement": [
          "左导数定义为 $f'_-(x_0)=\\lim\\limits_{\\Delta x\\to0^-}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$；右导数定义为 $f'_+(x_0)=\\lim\\limits_{\\Delta x\\to0^+}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$。"
        ],
        "source": "§2.1，课件 PDF 页 99-113"
      },
      {
        "label": "定义 2.1.3",
        "title": "区间可导与导函数",
        "statement": [
          "若函数在开区间内每一点可导，则称其在开区间内可导；若再在左端点右可导、右端点左可导，则称其在闭区间上可导。",
          "区间内每一点的导数组成的函数称为导函数，记作 $f'(x)$、$\\frac{df}{dx}$ 或 $\\frac{dy}{dx}$。"
        ],
        "source": "§2.1，课件 PDF 页 122-148"
      },
      {
        "label": "定义 2.1.4",
        "title": "高阶导数",
        "statement": [
          "若导函数 $f'(x)$ 在 $x_0$ 处仍可导，则其导数称为 $f$ 在 $x_0$ 处的二阶导数，记作 $f''(x_0)$、$\\frac{d^2y}{dx^2}$。类似地定义 $n$ 阶导数 $f^{(n)}(x)=\\left(f^{(n-1)}(x)\\right)'$。"
        ],
        "source": "§2.1.3，课件 PDF 页 389-407"
      }
    ],
    "entries": [
      {
        "id": "thm-2-1-1",
        "type": "theorem",
        "label": "定理 2.1.1",
        "title": "可导与左右导数存在且相等",
        "statement": [
          "函数 $f$ 在点 $x_0$ 处可导，当且仅当左导数 $f'_-(x_0)$ 和右导数 $f'_+(x_0)$ 都存在且相等。此时 $f'(x_0)=f'_-(x_0)=f'_+(x_0)$。"
        ],
        "conditions": ["函数在 $x_0$ 的左右邻域内有定义。", "分别讨论左、右差商极限。"],
        "conclusion": ["分段函数在分界点处应优先检查左右导数。", "任一侧不存在或两侧不相等，则该点不可导。"],
        "intuition": "从左右两个方向逼近同一点时，差商必须落到同一个数。",
        "proofIdea": ["由函数极限存在的左右极限判据，直接作用于差商函数。"],
        "dependencies": ["左导数与右导数定义", "左右极限判据"],
        "pitfalls": ["只比较左右函数值连续，不足以推出左右导数相等。"],
        "source": "§2.1，课件 PDF 页 99-121"
      },
      {
        "id": "thm-2-1-2",
        "type": "theorem",
        "label": "定理 2.1.2",
        "title": "可导必连续",
        "statement": ["若函数 $f$ 在点 $x_0$ 处可导，则 $f$ 在 $x_0$ 处连续。"],
        "conditions": ["$f$ 在 $x_0$ 处可导。"],
        "conclusion": ["连续是可导的必要条件，但不是充分条件。"],
        "intuition": "函数能够拥有有限切线斜率，图像就不可能在该点断开。",
        "proofIdea": [
          "把增量写成 $f(x_0+\\Delta x)-f(x_0)=\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}\\cdot\\Delta x$。",
          "令 $\\Delta x\\to0$，差商趋于有限数 $f'(x_0)$，故增量趋于 $0$。"
        ],
        "dependencies": ["导数定义", "函数连续定义"],
        "pitfalls": ["$f(x)=|x|$ 在 $0$ 处连续但不可导，因此不能用连续反推可导。", "左、右可导分别只保证左、右连续。"],
        "source": "§2.1，课件 PDF 页 124-139"
      },
      {
        "id": "formula-2-1-3",
        "type": "formula",
        "label": "公式 2.1.3",
        "title": "幂、指数与对数函数的导数",
        "statement": [
          "$(C)'=0$；$(x^\\alpha)'=\\alpha x^{\\alpha-1}$；$(a^x)'=a^x\\ln a$；$(e^x)'=e^x$。",
          "$(\\log_a x)'=\\frac1{x\\ln a}$；$(\\ln x)'=\\frac1x$。"
        ],
        "conditions": ["幂函数和指数、对数公式分别在相应定义域内使用。", "对数公式要求 $x>0$，且分母对数底数满足 $a>0,a\\ne1$。"],
        "conclusion": ["这些公式是复合函数求导的基本构件。"],
        "intuition": "基本初等函数的局部变化率由固定公式给出。",
        "proofIdea": ["可由导数定义、二项式展开和已知极限逐个证明。"],
        "dependencies": ["导数定义", "基本极限"],
        "pitfalls": ["$(e^x)'=e^x$，但 $(a^x)'=a^x\\ln a$，不要漏掉 $\\ln a$。", "幂函数 $x^\\alpha$ 与指数函数 $a^x$ 的求导规律不同。"],
        "source": "§2.1.2，课件 PDF 页 191-235"
      },
      {
        "id": "formula-2-1-4",
        "type": "formula",
        "label": "公式 2.1.4",
        "title": "三角函数与反三角函数的导数",
        "statement": [
          "$(\\sin x)'=\\cos x$；$(\\cos x)'=-\\sin x$；$(\\tan x)'=\\sec^2 x$；$(\\cot x)'=-\\csc^2 x$。",
          "$(\\arcsin x)'=\\frac1{\\sqrt{1-x^2}}$；$(\\arccos x)'=-\\frac1{\\sqrt{1-x^2}}$；$(\\arctan x)'=\\frac1{1+x^2}$；$(\\operatorname{arccot}x)'=-\\frac1{1+x^2}$。"
        ],
        "conditions": ["反三角函数的公式在对应可导区间内使用。"],
        "conclusion": ["$\\arcsin x$ 与 $\\arccos x$ 的导数互为相反数；$\\arctan x$ 与 $\\operatorname{arccot}x$ 的导数也互为相反数。"],
        "intuition": "反函数求导会把原函数导数的倒数带回来，并产生相应符号。",
        "proofIdea": ["三角函数公式可直接由定义证明，反三角函数公式可由反函数求导法则得到。"],
        "dependencies": ["导数定义", "反函数求导法则"],
        "pitfalls": ["反三角函数求导后常出现根号或分式，需先检查定义域。"],
        "source": "§2.1.2，课件 PDF 页 191-257"
      },
      {
        "id": "thm-2-1-5",
        "type": "theorem",
        "label": "定理 2.1.3",
        "title": "四则运算求导法则",
        "statement": [
          "若 $f,g$ 在 $x$ 处可导，则 $(f\\pm g)'=f'\\pm g'$，$(fg)'=f'g+fg'$，并在 $g(x)\\ne0$ 时 $\\left(\\frac fg\\right)'=\\frac{f'g-fg'}{g^2}$。"
        ],
        "conditions": ["参与运算的函数在讨论点可导。", "商的法则还要求分母在该点不为零。"],
        "conclusion": ["线性运算、乘积和商都可按固定规则逐层求导。"],
        "intuition": "乘积变化由两个因子各自变化所贡献，商法则用于处理分母变化。",
        "proofIdea": ["把增量比拆成 $\\Delta f\\cdot g+\\Delta g\\cdot f$ 等结构，再令增量趋于零。"],
        "dependencies": ["导数定义", "极限四则运算"],
        "pitfalls": ["$(fg)'\\ne f'g'$。", "商法则分子中的两项顺序不能随意的交换。"],
        "source": "§2.1.2，课件 PDF 页 163-180"
      },
      {
        "id": "thm-2-1-6",
        "type": "theorem",
        "label": "定理 2.1.4",
        "title": "反函数求导法则",
        "statement": [
          "设 $y=f(x)$ 在区间上严格单调且可导，$f'(x)\\ne0$，其反函数为 $x=f^{-1}(y)$，则反函数可导，且 $\\left(f^{-1}\\right)'(y)=\\frac1{f'(x)}$。"
        ],
        "conditions": ["原函数严格单调。", "对应点处原函数导数不为零。"],
        "conclusion": ["反函数的导数等于原函数导数在该对应点处的倒数。"],
        "intuition": "横轴与纵轴交换后，变化率互为倒数。",
        "proofIdea": ["在差商 $\\frac{\\Delta x}{\\Delta y}$ 中利用 $\\Delta y\\to0\\Leftrightarrow\\Delta x\\to0$，再取倒数。"],
        "dependencies": ["导数定义", "反函数连续性"],
        "pitfalls": ["不能漏掉条件 $f'(x)\\ne0$。", "求导结果中的自变量要按反函数关系换回 $y$。"],
        "source": "§2.1.2，课件 PDF 页 181-190"
      },
      {
        "id": "thm-2-1-7",
        "type": "theorem",
        "label": "定理 2.1.5",
        "title": "复合函数链式法则",
        "statement": [
          "若 $u=g(x)$ 在 $x$ 处可导，$y=f(u)$ 在 $u=g(x)$ 处可导，则 $y=f(g(x))$ 在 $x$ 处可导，且 $\\frac{dy}{dx}=f'(g(x))g'(x)$。"
        ],
        "conditions": ["内层函数在 $x$ 处可导。", "外层函数在对应的内层函数值处可导。"],
        "conclusion": ["复合函数的变化率等于外层变化率乘以内层变化率。"],
        "intuition": "输入先被内层函数改变，再由外层函数放大或缩小。",
        "proofIdea": ["通过增量分解 $\\Delta y=f'(u)\\Delta u+o(\\Delta u)$ 和 $\\Delta u=g'(x)\\Delta x+o(\\Delta x)$ 相乘得到。"],
        "dependencies": ["导数定义", "可微增量表示"],
        "pitfalls": ["链式法则要逐层乘到底，不能只对外层求导。", "内外层求导的变量位置不能混淆。"],
        "source": "§2.1.2，课件 PDF 页 181-257"
      },
      {
        "id": "method-2-1-8",
        "type": "method",
        "label": "方法 2.1.6",
        "title": "隐函数求导法",
        "statement": [
          "若 $y=y(x)$ 由方程 $F(x,y)=0$ 隐式确定，则把 $y$ 看作 $x$ 的函数，对等式两边关于 $x$ 求导，再利用链式法则处理含 $y$ 的项，最后解出 $y'$。"
        ],
        "conditions": ["在讨论点附近存在隐函数且相关偏导条件允许求导。"],
        "conclusion": ["隐函数不必显化，也能直接求出切线斜率和高阶导数。"],
        "intuition": "方程中的 $y$ 不是常数，而是随 $x$ 变化的函数。",
        "proofIdea": ["把 $F(x,y(x))$ 看作关于 $x$ 的复合函数，对两边求导后整理。"],
        "dependencies": ["链式法则", "隐函数存在性"],
        "pitfalls": ["对 $y^2$ 求导应得到 $2yy'$，不能写成 $2y$。", "含 $xy$ 的项必须同时使用乘积法则和链式法则。"],
        "source": "§2.1.2，课件 PDF 页 329-350"
      },
      {
        "id": "formula-2-1-9",
        "type": "formula",
        "label": "公式 2.1.7",
        "title": "参数方程确定的函数求导",
        "statement": [
          "若 $x=x(t)$、$y=y(t)$ 在参数区间内可导，且 $x'(t)\\ne0$，则由参数方程确定的函数满足 $\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{y'(t)}{x'(t)}$。"
        ],
        "conditions": ["$x(t)$ 具有连续且严格单调的反函数。", "$x'(t)\\ne0$。"],
        "conclusion": ["参数曲线的切线斜率可通过两个参数导数之比得到。"],
        "intuition": "把曲线上的变化拆成沿参数的纵向与横向变化率。",
        "proofIdea": ["由链式法则 $\\frac{dy}{dt}=\\frac{dy}{dx}\\frac{dx}{dt}$ 解出 $\\frac{dy}{dx}$。"],
        "dependencies": ["链式法则", "反函数求导"],
        "pitfalls": ["不要误写成 $\\frac{dx/dt}{dy/dt}$。", "参数点处 $x'(t)=0$ 时需单独判断竖直切线。"],
        "source": "§2.1.2，课件 PDF 页 351-363"
      },
      {
        "id": "method-2-1-10",
        "type": "method",
        "label": "方法 2.1.8",
        "title": "相关变化率问题的步骤",
        "statement": [
          "先建立各变量之间的关系式，再把关系式两边对同一时间变量 $t$ 求导，最后代入某时刻的已知值与已知变化率，解出目标变化率。"
        ],
        "conditions": ["各变量随时间变化，相关导数存在。"],
        "conclusion": ["距离、角度、体积或面积的变化率可由几何关系转化为导数关系。"],
        "intuition": "变量之间满足约束，因此它们的变化率也被同一约束联系在一起。",
        "proofIdea": ["对约束关系使用链式法则，将几何方程转换为变化率方程。"],
        "dependencies": ["链式法则", "隐函数求导"],
        "pitfalls": ["不能把随时间变化的量在求导前当作常数。", "几何图形中的长度应写成正距离，方向变化要单独判断。"],
        "source": "§2.1.2，课件 PDF 页 364-382"
      },
      {
        "id": "formula-2-1-11",
        "type": "formula",
        "label": "公式 2.1.9",
        "title": "常见高阶导数公式",
        "statement": [
          "$(\\sin x)^{(n)}=\\sin\\left(x+\\frac{n\\pi}{2}\\right)$；$(\\cos x)^{(n)}=\\cos\\left(x+\\frac{n\\pi}{2}\\right)$。",
          "$(e^{ax})^{(n)}=a^n e^{ax}$；$(x^m)^{(n)}=m(m-1)\\cdots(m-n+1)x^{m-n}$（$n\\le m$）。"
        ],
        "conditions": ["各公式在相应函数的可导区间内使用。"],
        "conclusion": ["高阶导数可先计算若干低阶结果，再归纳出通项。"],
        "intuition": "常见函数反复求导后呈现稳定的相位或指数规律。",
        "proofIdea": ["逐次求导并观察规律，再用数学归纳法证明。"],
        "dependencies": ["高阶导数定义", "基本求导公式"],
        "pitfalls": ["正弦、余弦每求导四次循环一次，但不能漏掉相位。", "幂函数的公式只适用于 $n\\le m$；超过次数后导数为零。"],
        "source": "§2.1.3，课件 PDF 页 408-389"
      },
      {
        "id": "thm-2-1-12",
        "type": "theorem",
        "label": "定理 2.1.6",
        "title": "Leibniz 高阶乘积公式",
        "statement": [
          "若 $u,v$ 都 $n$ 阶可导，则 $(uv)^{(n)}=\\sum\\limits_{k=0}^{n}\\binom nk u^{(n-k)}v^{(k)}$。"
        ],
        "conditions": ["$u,v$ 的相应阶导数都存在。"],
        "conclusion": ["高阶乘积的求导结构与二项式展开相似。"],
        "intuition": "每求一次导，微分作用在乘积两侧的分配方式与二项式系数一致。",
        "proofIdea": ["对一阶乘积公式反复求导，并用归纳法整理系数。"],
        "dependencies": ["乘积求导法则", "组合数"],
        "pitfalls": ["把 $u$ 与 $v$ 的导数阶数写反或漏项。"],
        "source": "§2.1.3，课件 PDF 页 425-438"
      },
      {
        "id": "method-2-1-13",
        "type": "method",
        "label": "方法 2.1.10",
        "title": "分段函数在分界点的可导性判断",
        "statement": [
          "先检查分界点是否连续，再分别计算左导数与右导数。只有左右导数都存在且相等时，函数在分界点可导。"
        ],
        "conditions": ["分段函数在分界点左右邻域内有定义。"],
        "conclusion": ["连续性只作为第一道筛选，最终必须以左右导数为准。"],
        "intuition": "分界点两侧来自不同表达式，不能直接对某一个表达式统一求导。",
        "proofIdea": ["分别使用定义计算左右差商极限，再与连续性条件联合。"],
        "dependencies": ["左右导数定义", "可导必连续"],
        "pitfalls": ["先令两侧表达式相等以确定参数，随后忘记检查左右导数。"],
        "source": "§2.1，课件 PDF 页 144-151"
      },
      {
        "id": "pitfall-2-1-14",
        "type": "pitfall",
        "label": "易错点 2.1.11",
        "title": "连续、可导与切线存在",
        "statement": ["连续不一定可导；可导一定连续。函数不可导时，曲线仍可能有竖直切线，也可能出现尖点、角点或振荡。"]
      ,
        "conditions": ["讨论点附近有定义，并分别检查连续性与差商极限。"],
        "conclusion": ["不可导不等于图像不存在，也不等于一定没有切线。"],
        "intuition": "可导描述的是存在有限斜率；竖直切线对应的是导数趋于无穷。",
        "proofIdea": ["用 $f(x)=|x|$ 或 $f(x)=\\sqrt[3]x$ 对照连续、不可导与竖直切线情形。"],
        "dependencies": ["可导必连续", "导数定义"],
        "pitfalls": ["把“连续”当作“可导”的充分条件。", "看到不可导就断言没有切线。"],
        "source": "§2.1，课件 PDF 页 121-143"
      }
    ]
  },
  {
    "number": "2.2",
    "bookChapter": "2",
    "title": "微分",
    "lead": "用线性主部刻画函数增量，并整理微分法则、一阶形式不变性、近似计算与高阶微分。",
    "map": ["微分定义", "可微与可导", "微分法则", "形式不变性", "线性近似", "高阶微分"],
    "definitions": [
      {
        "label": "定义 2.2.1",
        "title": "可微与微分",
        "statement": [
          "设函数 $f$ 在 $x_0$ 的某邻域内有定义。若存在与 $\\Delta x$ 无关的常数 $A$，使得 $\\Delta y=f(x_0+\\Delta x)-f(x_0)=A\\Delta x+o(\\Delta x)$，则称 $f$ 在 $x_0$ 处可微，称 $A\\Delta x$ 为 $f$ 在 $x_0$ 处的微分，记作 $df(x_0)=A\\Delta x$。"
        ],
        "source": "§2.2.1，课件 PDF 页 50-80"
      },
      {
        "label": "定义 2.2.2",
        "title": "高阶微分",
        "statement": [
          "若 $dy$ 仍可微，则 $d(dy)=d^2y$ 称为二阶微分；类似地 $d^ny=d(d^{n-1}y)$。"
        ],
        "source": "§2.2.4，课件 PDF 页 407-420"
      }
    ],
    "entries": [
      {
        "id": "thm-2-2-1",
        "type": "theorem",
        "label": "定理 2.2.1",
        "title": "可微与可导等价",
        "statement": ["函数 $y=f(x)$ 在 $x_0$ 处可微，当且仅当它在 $x_0$ 处可导，并且 $dy=f'(x_0)dx$，其中 $dx=\\Delta x$。"],
        "conditions": ["讨论一元函数在一点处的可微性。"],
        "conclusion": ["对一元函数，可微性与可导性等价。", "微分是函数增量的线性主部。"],
        "intuition": "在很小的邻域内，函数增量的主要部分就是切线带来的线性变化。",
        "proofIdea": ["由 $\\Delta y=A\\Delta x+o(\\Delta x)$ 除以 $\\Delta x$ 得 $f'(x_0)=A$；反过来由导数定义得到增量分解。"],
        "dependencies": ["微分定义", "导数定义"],
        "pitfalls": ["$dy$ 与 $\\Delta y$ 只相差 $o(\\Delta x)$，二者不是同一个量。", "这一等价性只对一元函数直接成立。"],
        "source": "§2.2.1，课件 PDF 页 50-119"
      },
      {
        "id": "formula-2-2-2",
        "type": "formula",
        "label": "公式 2.2.2",
        "title": "基本初等函数的微分公式",
        "statement": [
          "$d(x^\\alpha)=\\alpha x^{\\alpha-1}dx$；$d(e^x)=e^xdx$；$d(a^x)=a^x\\ln a\\,dx$；$d(\\ln x)=\\frac1x dx$。",
          "$d(\\sin x)=\\cos x\\,dx$；$d(\\cos x)=-\\sin x\\,dx$；$d(\\tan x)=\\sec^2x\\,dx$。"
        ],
        "conditions": ["公式在相应定义域和可微区间内使用。"],
        "conclusion": ["微分公式可由 $df=f'(x)dx$ 从导数表直接得到。"],
        "intuition": "微分把导数的局部变化率乘以自变量增量。",
        "proofIdea": ["用 $df=f'(x)dx$ 逐个代入基本导数公式。"],
        "dependencies": ["可微与可导等价", "基本导数公式"],
        "pitfalls": ["不要把 $dx$ 漏掉，微分的量纲与函数增量一致。"],
        "source": "§2.2.1，课件 PDF 页 160-175"
      },
      {
        "id": "property-2-2-3",
        "type": "property",
        "label": "性质 2.2.3",
        "title": "微分的四则运算",
        "statement": [
          "$d(f\\pm g)=df\\pm dg$；$d(fg)=g\\,df+f\\,dg$；$d\\left(\\frac fg\\right)=\\frac{g\\,df-f\\,dg}{g^2}$（$g\\ne0$）。"
        ],
        "conditions": ["参与运算的函数在讨论点可微。", "商的法则要求 $g\\ne0$。"],
        "conclusion": ["微分运算与导数运算具有相同的代数结构。"],
        "intuition": "将每个微分写成导数乘 $dx$ 后，公式与导数四则运算一一对应。",
        "proofIdea": ["由 $dF=F'(x)dx$ 和导数的四则运算法则推出。"],
        "dependencies": ["微分公式", "四则运算求导法则"],
        "pitfalls": ["乘积微分的两项必须分别含有 $df$ 和 $dg$。"],
        "source": "§2.2.2，课件 PDF 页 176-200"
      },
      {
        "id": "property-2-2-4",
        "type": "property",
        "label": "性质 2.2.4",
        "title": "一阶微分形式不变性",
        "statement": ["若 $y=f(u)$ 可微，无论 $u$ 是自变量还是中间变量，都有 $dy=f'(u)du$。"],
        "conditions": ["外层函数 $f(u)$ 在相应点可微；$u$ 本身可微。"],
        "conclusion": ["一阶微分的形式在复合函数中保持不变。"],
        "intuition": "链式法则已经吸收在 $du$ 中，因此写法与把 $u$ 当自变量时一致。",
        "proofIdea": ["令 $u=g(x)$，则 $dy=f'(u)g'(x)dx=f'(u)du$。"],
        "dependencies": ["链式法则", "微分公式"],
        "pitfalls": ["一阶形式不变性不能直接简单推广成高阶微分形式不变性。"],
        "source": "§2.2.2，课件 PDF 页 201-220"
      },
      {
        "id": "formula-2-2-5",
        "type": "formula",
        "label": "公式 2.2.5",
        "title": "线性近似公式",
        "statement": ["当 $|\\Delta x|$ 很小时，$f(x_0+\\Delta x)\\approx f(x_0)+f'(x_0)\\Delta x$。特别地，当 $x_0=0$ 且 $|x|$ 很小时，$f(x)\\approx f(0)+f'(0)x$。"],
        "conditions": ["函数在 $x_0$ 处可微。", "增量 $\\Delta x$ 足够小，使高阶无穷小可忽略。"],
        "conclusion": ["可用切线值近似函数值。"],
        "intuition": "在很小的尺度上，曲线可用切线代替。",
        "proofIdea": ["由 $\\Delta y=f'(x_0)\\Delta x+o(\\Delta x)$ 省略高阶项得到。"],
        "dependencies": ["微分定义"],
        "pitfalls": ["近似精度依赖 $\\Delta x$ 的大小，不能把线性近似当成全局等式。"],
        "source": "§2.2.3，课件 PDF 页 353-380"
      },
      {
        "id": "formula-2-2-6",
        "type": "formula",
        "label": "公式 2.2.6",
        "title": "误差估计",
        "statement": ["函数值误差可用 $\\Delta y\\approx dy=f'(x_0)\\Delta x$ 估计；相对误差为 $\\frac{\\Delta y}{y}\\approx\\frac{f'(x_0)}{f(x_0)}\\Delta x$（$f(x_0)\\ne0$）。"],
        "conditions": ["函数可微且测量误差足够小。"],
        "conclusion": ["微分可把自变量误差传播为函数值误差。"],
        "intuition": "局部灵敏度由导数大小决定。",
        "proofIdea": ["把自变量误差作为 $\\Delta x$，用微分近似增量。"],
        "dependencies": ["线性近似"],
        "pitfalls": ["对误差要求是绝对误差还是相对误差要先统一。"],
        "source": "§2.2.3，课件 PDF 页 353-406"
      },
      {
        "id": "formula-2-2-7",
        "type": "formula",
        "label": "公式 2.2.7",
        "title": "高阶微分公式",
        "statement": ["当 $x$ 为自变量时，$d^ny=f^{(n)}(x)dx^n$。"],
        "conditions": ["$f$ 的 $n$ 阶导数存在，$x$ 为自变量。"],
        "conclusion": ["高阶微分可写成对应高阶导数乘以 $dx^n$。"],
        "intuition": "每次微分都会再乘一个 $dx$。",
        "proofIdea": ["逐次对 $d^{n-1}y=f^{(n-1)}(x)dx^{n-1}$ 在 $dx$ 固定时微分。"],
        "dependencies": ["高阶微分定义", "一阶微分形式"],
        "pitfalls": ["当 $x$ 不是自变量时，高阶微分的形式不再是简单的 $f^{(n)}(x)dx^n$。"],
        "source": "§2.2.4，课件 PDF 页 407-420"
      },
      {
        "id": "method-2-2-8",
        "type": "method",
        "label": "方法 2.2.8",
        "title": "微分近似计算流程",
        "statement": ["先选接近目标值的易算点 $x_0$，再取 $\\Delta x=x-x_0$，计算 $f(x_0)$ 与 $f'(x_0)$，最后代入 $f(x)\\approx f(x_0)+f'(x_0)\\Delta x$。"],
        "conditions": ["$f$ 在 $x_0$ 附近可微，且 $\\Delta x$ 较小。"],
        "conclusion": ["可以在不直接计算复杂函数值的情况下得到一阶近似。"],
        "intuition": "先把目标点移到熟悉的基准点，再用切线修正。",
        "proofIdea": ["直接使用线性近似公式。"],
        "dependencies": ["线性近似公式"],
        "pitfalls": ["基准点选择离目标太远会导致误差过大。"],
        "source": "§2.2.3，课件 PDF 页 353-406"
      },
      {
        "id": "pitfall-2-2-9",
        "type": "pitfall",
        "label": "易错点 2.2.9",
        "title": "$dx$、$\\Delta x$ 与 $dy$、$\\Delta y$ 的区别",
        "statement": ["$dx=\\Delta x$ 是自变量的增量；$dy$ 是切线的纵向增量，是 $\\Delta y$ 的线性主部，一般 $dy\\ne\\Delta y$。"]
      ,
        "conditions": ["在微分近似和误差估计中使用。"],
        "conclusion": ["微分是线性化后的增量，不是原函数的实际增量。"],
        "intuition": "实际增量包含高阶弯曲误差，微分只保留一阶部分。",
        "proofIdea": ["由 $\\Delta y=dy+o(\\Delta x)$ 可见两者只相差高阶无穷小。"],
        "dependencies": ["微分定义"],
        "pitfalls": ["把 $dy=\\Delta y$ 当作精确等式。", "忘记 $dx$ 只在对自变量取增量时等于 $\\Delta x$。"],
        "source": "§2.2.1，课件 PDF 页 68-119"
      }
    ]
  },
  {
    "number": "2.3",
    "bookChapter": "2",
    "title": "微分中值定理与 L'Hospital 法则",
    "lead": "从极值必要条件出发，串起 Fermat、Rolle、Lagrange、Cauchy 中值定理与未定式极限方法。",
    "map": ["极值", "Fermat 引理", "Rolle 定理", "Lagrange 定理", "Cauchy 定理", "L'Hospital 法则"],
    "definitions": [
      {
        "label": "定义 2.3.1",
        "title": "极值点与极值",
        "statement": ["若存在 $\\delta>0$，使得在 $x_0$ 的某邻域内恒有 $f(x)\\le f(x_0)$（或 $f(x)\\ge f(x_0)$），则称 $f$ 在 $x_0$ 处取得极大值（极小值），$x_0$ 称为极值点。"],
        "source": "§2.3.1，课件 PDF 页 20-35"
      },
      {
        "label": "定义 2.3.2",
        "title": "驻点",
        "statement": ["若 $f'(x_0)=0$，则称 $x_0$ 为函数 $f$ 的驻点，也称为稳定点或临界点。"],
        "source": "§2.3.1，课件 PDF 页 101-110"
      }
    ],
    "entries": [
      {
        "id": "lemma-2-3-1",
        "type": "theorem",
        "label": "引理 2.3.1",
        "title": "Fermat 引理",
        "statement": ["若函数 $f$ 在区间内部点 $x_0$ 处取得极值，并且在 $x_0$ 处可导，则 $f'(x_0)=0$。"],
        "conditions": ["$x_0$ 是区间内点。", "$f$ 在 $x_0$ 处可导。", "$x_0$ 是极值点。"],
        "conclusion": ["可导极值点必为驻点。"],
        "intuition": "光滑曲线在局部最高点或最低点处，切线应水平。",
        "proofIdea": ["比较左右差商的符号，利用左右导数相等推出导数只能为零。"],
        "dependencies": ["极值定义", "左右导数"],
        "pitfalls": ["驻点不一定是极值点，例如 $f(x)=x^3$ 在 $0$ 处。", "极值点也可能不可导，端点不是极值点。"],
        "source": "§2.3.1，课件 PDF 页 68-110"
      },
      {
        "id": "thm-2-3-2",
        "type": "theorem",
        "label": "定理 2.3.1",
        "title": "Rolle 中值定理",
        "statement": ["若 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)$，则至少存在一点 $\\xi\\in(a,b)$，使 $f'(\\xi)=0$。"],
        "conditions": ["闭区间连续。", "开区间可导。", "端点函数值相等。"],
        "conclusion": ["函数图像至少有一条水平切线。"],
        "intuition": "两端在同一高度，曲线从起点到终点必须在某处转向。",
        "proofIdea": ["由闭区间上连续函数的最值定理，若最值在内点取得，使用 Fermat 引理；若最大值和最小值都在端点，则函数为常数。"],
        "dependencies": ["最值定理", "Fermat 引理"],
        "pitfalls": ["三个条件缺一不可时，结论可能失效。", "Rolle 定理只保证存在，不保证唯一。"],
        "source": "§2.3.1，课件 PDF 页 131-199"
      },
      {
        "id": "thm-2-3-3",
        "type": "theorem",
        "label": "定理 2.3.2",
        "title": "Lagrange 中值定理",
        "statement": ["若 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，则存在 $\\xi\\in(a,b)$，使 $\\frac{f(b)-f(a)}{b-a}=f'(\\xi)$。"],
        "conditions": ["闭区间连续。", "开区间可导。"],
        "conclusion": ["存在一点，其切线斜率等于端点连线的斜率。"],
        "intuition": "函数从 $a$ 到 $b$ 的平均变化率必在某个瞬间被瞬时变化率取到。",
        "proofIdea": ["构造辅助函数 $F(x)=f(x)-\\frac{f(b)-f(a)}{b-a}(x-a)$，再对 $F$ 应用 Rolle 定理。"],
        "dependencies": ["Rolle 定理"],
        "pitfalls": ["$\\xi$ 的具体位置未知，不能把它当作常数直接再求导。", "端点条件没有要求 $f(a)=f(b)$。"],
        "source": "§2.3.1，课件 PDF 页 281-340"
      },
      {
        "id": "cor-2-3-4",
        "type": "corollary",
        "label": "推论 2.3.2",
        "title": "导数为零与常函数",
        "statement": ["设 $f$ 在区间 $I$ 上可导，则 $f'(x)=0$ 对一切 $x\\in I$ 成立，当且仅当 $f$ 在 $I$ 上恒为常数。"],
        "conditions": ["$f$ 在整个区间 $I$ 上可导。"],
        "conclusion": ["两个函数导数相同，则它们相差一个常数。"],
        "intuition": "区间内没有任何局部变化，函数只能保持同一高度。",
        "proofIdea": ["任取 $x_1<x_2$，在 $[x_1,x_2]$ 上应用 Lagrange 中值定理。"],
        "dependencies": ["Lagrange 中值定理"],
        "pitfalls": ["区间必须连通；在分离的区间上导数为零不代表整体为常数。"],
        "source": "§2.3.1，课件 PDF 页 341-362"
      },
      {
        "id": "thm-2-3-5",
        "type": "theorem",
        "label": "定理 2.3.3",
        "title": "Cauchy 中值定理",
        "statement": ["若 $f,g$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导，且 $g'(x)\\ne0$（$x\\in(a,b)$），则存在 $\\xi\\in(a,b)$，使 $\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}$。"],
        "conditions": ["两函数均满足闭区间连续、开区间可导。", "$g'(x)\\ne0$。"],
        "conclusion": ["两个函数增量之比可由同一点处的导数之比表示。"],
        "intuition": "Lagrange 中值定理的参数化推广。",
        "proofIdea": ["构造 $F(x)=f(x)-\\frac{f(b)-f(a)}{g(b)-g(a)}g(x)$，应用 Rolle 定理。"],
        "dependencies": ["Rolle 定理", "Lagrange 中值定理"],
        "pitfalls": ["不能把 Cauchy 公式拆成两个独立的 Lagrange 公式，因为两个中值点未必相同。"],
        "source": "§2.3.1，课件 PDF 页 533-580"
      },
      {
        "id": "thm-2-3-6",
        "type": "theorem",
        "label": "定理 2.3.4",
        "title": "0/0 型 L'Hospital 法则",
        "statement": ["若在 $x_0$ 附近 $\\lim f(x)=\\lim g(x)=0$，$f,g$ 在去心邻域内可导且 $g'(x)\\ne0$，并且 $\\lim\\frac{f'(x)}{g'(x)}$ 存在或为无穷大，则 $\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$。"],
        "conditions": ["分子分母同趋于零。", "近旁可导且分母导数不为零。", "导数之比的极限存在或为无穷大。"],
        "conclusion": ["在条件满足时，可用导数之比的极限替代原极限。"],
        "intuition": "分子分母的主导变化率决定它们的相对大小。",
        "proofIdea": ["补充函数在 $x_0$ 处的值为 $0$，对 $[x_0,x]$ 使用 Cauchy 中值定理，再令 $x\\to x_0$。"],
        "dependencies": ["Cauchy 中值定理"],
        "pitfalls": ["分子分母不同时趋于零时不能使用。", "导数之比极限不存在时不能据此判定原极限不存在。"],
        "source": "§2.3.2，课件 PDF 页 204-260"
      },
      {
        "id": "thm-2-3-7",
        "type": "theorem",
        "label": "定理 2.3.5",
        "title": "∞/∞ 型 L'Hospital 法则",
        "statement": ["若 $\\lim g(x)=\\infty$ 或 $f(x)$ 的相应条件使原式为 $\\infty/\\infty$ 型，$f,g$ 在去心邻域内可导且 $g'(x)\\ne0$，并且 $\\lim\\frac{f'(x)}{g'(x)}$ 存在或为无穷大，则 $\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$。"],
        "conditions": ["原极限为 $\\infty/\\infty$ 型。", "导数之比满足存在或无穷大。"],
        "conclusion": ["无穷大量之比的极限可转化为变化率之比。"],
        "intuition": "趋向无穷时，谁增长得更快由增长率之比决定。",
        "proofIdea": ["在充分远处应用 Cauchy 中值定理，并控制端点修正项。"],
        "dependencies": ["Cauchy 中值定理"],
        "pitfalls": ["$\\infty/\\infty$ 的条件不能与 $0/0$ 混淆，必须先识别型别。"],
        "source": "§2.3.2，课件 PDF 页 260-280"
      },
      {
        "id": "method-2-3-8",
        "type": "method",
        "label": "方法 2.3.6",
        "title": "其他未定式的转化",
        "statement": ["$0\\cdot\\infty$ 可把其中一个因子移到分母构造 $0/0$ 或 $\\infty/\\infty$；$\\infty-\\infty$ 可通分或有理化；$0^0$、$1^\\infty$、$\\infty^0$ 可先取对数或使用 $(a)^b=e^{b\\ln a}$。"],
        "conditions": ["先确认原式确为相应未定式。"],
        "conclusion": ["五种其他未定式最终都可转化为基本型。"],
        "intuition": "先用代数或对数变换把结构整理成可比较的商。",
        "proofIdea": ["逐类化形后再使用 L'Hospital 法则或 Taylor 展开。"],
        "dependencies": ["L'Hospital 法则", "对数恒等式"],
        "pitfalls": ["$1^\\infty$ 不是 1，必须先取对数消除指数不确定性。"],
        "source": "§2.3.2，课件 PDF 页 291-353"
      },
      {
        "id": "method-2-3-9",
        "type": "method",
        "label": "方法 2.3.7",
        "title": "L'Hospital 法则使用流程",
        "statement": ["先判断型别，再检查可导与分母导数条件，然后求导数之比的极限。出现循环或复杂结构时，可结合等价无穷小、代数变形、提取非零因子或 Taylor 公式。"],
        "conditions": ["只对 $0/0$ 或 $\\infty/\\infty$ 型使用。"],
        "conclusion": ["合理组合多种极限方法通常能显著降低计算量。"],
        "intuition": "L'Hospital 法则不是唯一工具，而是化简未定式的一步。",
        "proofIdea": ["把复杂式子拆成已知极限因子和剩余未定式，再对剩余部分使用法则。"],
        "dependencies": ["L'Hospital 法则", "等价无穷小"],
        "pitfalls": ["连续求导导致式子越来越复杂时，应及时改用其他方法。"],
        "source": "§2.3.2，课件 PDF 页 217-249"
      },
      {
        "id": "cor-2-3-10",
        "type": "corollary",
        "label": "推论 2.3.10",
        "title": "导数极限与单侧导数",
        "statement": ["若 $f$ 在 $x_0$ 右邻域连续、在右侧去心邻域可导，且 $\\lim\\limits_{x\\to x_0^+}f'(x)=A$，则 $f'_+(x_0)=A$。左导数有对应结论。"],
        "conditions": ["相应一侧连续。", "相应去心邻域可导。", "导数极限存在。"],
        "conclusion": ["在条件满足时，导函数的极限等于该点单侧导数。"],
        "intuition": "导函数在近旁的值若稳定到某个数，差商也会被压到同一个数。",
        "proofIdea": ["应用 Lagrange 中值定理，再令增量趋于零。"],
        "dependencies": ["Lagrange 中值定理"],
        "pitfalls": ["导函数极限不存在时，函数仍可能在该点可导。"],
        "source": "§2.3.1，课件 PDF 页 503-532"
      },
      {
        "id": "pitfall-2-3-11",
        "type": "pitfall",
        "label": "易错点 2.3.11",
        "title": "L'Hospital 法则的三个条件边界",
        "statement": ["不是 $0/0$ 或 $\\infty/\\infty$ 型不能直接使用；导数之比极限不存在，不能推出原极限不存在；对数列极限可先化为连续变量函数极限。"],
        "conditions": ["每次使用法则前重新检查型别。"],
        "conclusion": ["法则的逆命题并不总是成立。"],
        "intuition": "L'Hospital 法则是一个充分条件工具，不是所有极限的固定算法。",
        "proofIdea": ["用 $\\frac{1+\\sin x}{1-\\cos x}$ 和 $\\frac{x+\\sin x}{x}$ 等反例检验。"],
        "dependencies": ["L'Hospital 法则"],
        "pitfalls": ["把导数之比极限不存在误判为原极限不存在。", "忽略原式不是未定式却强行求导。"],
        "source": "§2.3.2，课件 PDF 页 343-353"
      }
    ]
  },
  {
    "number": "2.3.3",
    "bookChapter": "2",
    "title": "Taylor 定理",
    "lead": "用多项式逐阶匹配函数的高阶导数，并用 Peano 或 Lagrange 余项控制误差。",
    "map": ["Taylor 多项式", "Peano 余项", "Lagrange 余项", "Maclaurin 公式", "极限", "近似与误差"],
    "definitions": [
      {
        "label": "定义 2.3.3.1",
        "title": "Taylor 多项式",
        "statement": ["函数 $f$ 在 $x_0$ 处的 $n$ 次 Taylor 多项式为 $P_n(x)=\\sum\\limits_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$，系数 $\\frac{f^{(k)}(x_0)}{k!}$ 称为 Taylor 系数。"],
        "source": "§2.3.3，课件 PDF 页 53-65"
      }
    ],
    "entries": [
      {
        "id": "thm-2-3-3-1",
        "type": "theorem",
        "label": "定理 2.3.7",
        "title": "带 Peano 余项的 Taylor 公式",
        "statement": ["若 $f$ 在 $x_0$ 处有 $n$ 阶导数，则 $f(x)=\\sum\\limits_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)$。"],
        "conditions": ["$f$ 在 $x_0$ 处 $n$ 阶可导。"],
        "conclusion": ["Taylor 多项式逐阶匹配函数在 $x_0$ 处的函数值和前 $n$ 阶导数。", "Peano 余项适合研究局部极限。"],
        "intuition": "用一组按阶数排列的多项式逐步逼近函数。",
        "proofIdea": ["对余项除以 $(x-x_0)^n$，反复应用 L'Hospital 法则，最后用 $n$ 阶导数定义。"],
        "dependencies": ["L'Hospital 法则", "高阶导数"],
        "pitfalls": ["Peano 余项只说明局部阶数，不直接给出全局误差上界。"],
        "source": "§2.3.3，课件 PDF 页 26-95"
      },
      {
        "id": "thm-2-3-3-2",
        "type": "theorem",
        "label": "定理 2.3.8",
        "title": "带 Lagrange 余项的 Taylor 公式",
        "statement": ["若 $f$ 在 $[x_0,x_0+\\delta]$ 上 $n$ 阶连续可导，在 $(x_0,x_0+\\delta)$ 内 $n+1$ 阶可导，则 $f(x)=P_n(x)+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$，其中 $\\xi$ 位于 $x_0$ 与 $x$ 之间。"],
        "conditions": ["区间上满足相应的连续可导阶数。", "$n+1$ 阶导数在开区间内存在。"],
        "conclusion": ["Lagrange 余项给出精确余项表达式，可用于误差估计。"],
        "intuition": "用下一个高阶导数控制多项式逼近的误差。",
        "proofIdea": ["构造函数 $F(t)=f(x)-P_n(t;x)$ 与 $g(t)=(x-t)^{n+1}$，应用 Cauchy 中值定理。"],
        "dependencies": ["Cauchy 中值定理", "Peano Taylor 公式"],
        "pitfalls": ["余项中的 $\\xi$ 依赖 $x$，不能把它当常数。"],
        "source": "§2.3.3，课件 PDF 页 98-145"
      },
      {
        "id": "formula-2-3-3-3",
        "type": "formula",
        "label": "公式 2.3.9",
        "title": "常用 Maclaurin 公式",
        "statement": [
          "$e^x=1+x+\\frac{x^2}{2!}+\\cdots+\\frac{x^n}{n!}+o(x^n)$。",
          "$\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots+o(x^{2m})$；$\\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots+o(x^{2m-1})$。",
          "$\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots+(-1)^{n-1}\\frac{x^n}{n}+o(x^n)$。",
          "$(1+x)^\\alpha=1+\\alpha x+\\frac{\\alpha(\\alpha-1)}{2!}x^2+\\cdots+\\binom{\\alpha}{n}x^n+o(x^n)$。"
        ],
        "conditions": ["均在 $x\\to0$ 的局部意义下使用。"],
        "conclusion": ["这些公式是间接展开和极限计算的基础模板。"],
        "intuition": "把常见函数在零点附近表示成多项式加高阶小量。",
        "proofIdea": ["由 Taylor 定理或已知展开通过换元、四则运算和求导得到。"],
        "dependencies": ["Taylor 定理", "基本导数公式"],
        "pitfalls": ["展开阶数要与题目中的分母或需要抵消的项匹配。", "不同函数的奇偶缺项不能写错。"],
        "source": "§2.3.3，课件 PDF 页 158-248"
      },
      {
        "id": "thm-2-3-3-4",
        "type": "theorem",
        "label": "定理 2.3.10",
        "title": "Taylor 多项式的唯一性",
        "statement": ["若函数在 $x_0$ 的邻域内有两个次数不超过 $n$ 的多项式展开，并具有相同的余项阶数，则对应系数唯一。"],
        "conditions": ["两个展开式均在 $x_0$ 处具有相同的 Taylor 阶数。"],
        "conclusion": ["无论用何种合法方法得到展开式，其低阶系数都一致。"],
        "intuition": "局部多项式近似在给定阶数下只有一个答案。",
        "proofIdea": ["比较两式之差，利用除以 $(x-x_0)^k$ 后取极限得到系数相等。"],
        "dependencies": ["Peano Taylor 公式"],
        "pitfalls": ["不能把高阶余项直接省略后当作精确等式。"],
        "source": "§2.3.3，课件 PDF 页 257-269"
      },
      {
        "id": "method-2-3-3-5",
        "type": "method",
        "label": "方法 2.3.11",
        "title": "间接求 Taylor 展开",
        "statement": ["从常用 Maclaurin 公式出发，利用换元、四则运算、待定系数、逐项求导或已知展开复合，得到目标函数的展开式。"],
        "conditions": ["变换后仍处于收敛或局部展开范围内。"],
        "conclusion": ["通常比直接从高阶导数定义计算更快。"],
        "intuition": "把复杂函数拆成已知展开与代数运算的组合。",
        "proofIdea": ["将已知展开代入目标表达式，合并同阶项，再用唯一性确定系数。"],
        "dependencies": ["常用 Maclaurin 公式", "Taylor 多项式唯一性"],
        "pitfalls": ["换元后要同时替换余项阶数。"],
        "source": "§2.3.3，课件 PDF 页 248-305"
      },
      {
        "id": "method-2-3-3-6",
        "type": "method",
        "label": "方法 2.3.12",
        "title": "用 Taylor 公式求极限",
        "statement": ["先展开到足以消去最低阶项的阶数，再比较剩余最低阶项得到极限。分母阶数往往决定需要展开到多少阶。"],
        "conditions": ["各项在极限点附近满足 Taylor 展开条件。"],
        "conclusion": ["可高效处理含三角函数、指数、对数的复杂未定式。"],
        "intuition": "极限的主项由最低阶非零 Taylor 项决定。",
        "proofIdea": ["把各函数替换为展开式，合并同阶项并除以上下限的主尺度。"],
        "dependencies": ["Taylor 公式", "等价无穷小"],
        "pitfalls": ["展开阶数不足时会把非零主项误当成零。", "加减结构中只替换部分项可能漏掉抵消。"],
        "source": "§2.3.3，课件 PDF 页 308-374"
      },
      {
        "id": "method-2-3-3-7",
        "type": "method",
        "label": "方法 2.3.13",
        "title": "用 Lagrange 余项估计误差",
        "statement": ["用 Taylor 多项式近似函数值后，以 $|R_n(x)|=\\left|\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}\\right|$ 的上界估计误差。"],
        "conditions": ["能够估计 $f^{(n+1)}$ 在区间上的上界。"],
        "conclusion": ["可以给出满足指定精度的多项式次数。"],
        "intuition": "下一阶导数越小、离展开点越近，余项越小。",
        "proofIdea": ["由 Lagrange 余项公式取绝对值，并对未知的 $\\xi$ 取统一上界。"],
        "dependencies": ["带 Lagrange 余项的 Taylor 公式"],
        "pitfalls": ["只用 Peano 余项的阶数无法直接推出具体数值误差上界。"],
        "source": "§2.3.3，课件 PDF 页 488-512"
      },
      {
        "id": "method-2-3-3-8",
        "type": "method",
        "label": "方法 2.3.14",
        "title": "用 Taylor 公式证明不等式",
        "statement": ["选取适当的展开点和阶数，利用余项的符号或导数单调性，判断函数与 Taylor 多项式的大小关系。"],
        "conditions": ["余项符号在讨论区间内可控。"],
        "conclusion": ["可证明 $e^x>1+x$、$\\sin x<x$、$\\ln(1+x)<x$ 等常见不等式。"],
        "intuition": "多项式是函数的主部，余项符号决定曲线位于切线或抛物线的哪一侧。",
        "proofIdea": ["把函数写成 Taylor 多项式加余项，再估计余项符号。"],
        "dependencies": ["Taylor 公式", "余项估计"],
        "pitfalls": ["余项中的中值点未知，不能随意假定它的符号，需要结合导数信息。"],
        "source": "§2.3.3，课件 PDF 页 413-428"
      },
      {
        "id": "property-2-3-3-9",
        "type": "property",
        "label": "性质 2.3.15",
        "title": "从展开式读取高阶导数",
        "statement": ["若 $f(x)=\\sum\\limits_{k=0}^{n}a_k(x-x_0)^k+o((x-x_0)^n)$，则由唯一性有 $a_k=\\frac{f^{(k)}(x_0)}{k!}$，即 $f^{(k)}(x_0)=k!a_k$。"],
        "conditions": ["展开式在 $x_0$ 处具有足够的局部阶数。"],
        "conclusion": ["可借助展开式计算某些高阶导数。"],
        "intuition": "Taylor 系数直接编码了各阶导数。",
        "proofIdea": ["比较同次幂系数或反复除以 $x-x_0$ 后求极限。"],
        "dependencies": ["Taylor 多项式唯一性"],
        "pitfalls": ["读取系数后不要忘记乘以 $k!$。"],
        "source": "§2.3.3，课件 PDF 页 518-524"
      },
      {
        "id": "pitfall-2-3-3-10",
        "type": "pitfall",
        "label": "易错点 2.3.16",
        "title": "Peano 余项与 Lagrange 余项的选择",
        "statement": ["求局部极限和判断无穷小阶数时优先用 Peano 余项；估计具体数值误差或证明区间不等式时通常需要 Lagrange 余项或其他可控制余项。"]
      ,
        "conditions": ["根据任务需要选择余项形式。"],
        "conclusion": ["两种 Taylor 公式条件不同，用途也不同。"],
        "intuition": "Peano 余项强调局部阶数，Lagrange 余项强调误差表达式。",
        "proofIdea": ["分别检查是否只做局部极限，或是否需要全局数值上界。"],
        "dependencies": ["Peano Taylor 公式", "Lagrange Taylor 公式"],
        "pitfalls": ["用 Peano 余项做具体误差控制时没有数值上界。"],
        "source": "§2.3.3，课件 PDF 页 26-145、488-512"
      },
      {
        "id": "pitfall-2-3-3-11",
        "type": "pitfall",
        "label": "易错点 2.3.17",
        "title": "展开阶数与分母阶数不匹配",
        "statement": ["Taylor 展开必须至少展开到能暴露最低阶非零误差的阶数；若分母是 $x^n$，通常需要展开到 $n$ 阶或更高，直到相关系数能够比较。"],
        "conditions": ["在未定式极限中尤其重要。"],
        "conclusion": ["展开阶数不足会误判主项和极限值。"],
        "intuition": "低阶项可能全部抵消，真正决定极限的是下一阶项。",
        "proofIdea": ["先判断可能抵消的最高阶，再多展开一阶进行核对。"],
        "dependencies": ["Taylor 公式", "极限主项分析"],
        "pitfalls": ["只背公式不根据题目调整阶数。"],
        "source": "§2.3.3，课件 PDF 页 308-374"
      }
    ]
  },
  {
    "number": "2.4",
    "bookChapter": "2",
    "title": "函数性态的研究",
    "lead": "用导数判断单调性、极值、最值、凹凸性与拐点，并结合渐近线完成函数图像分析。",
    "map": ["单调性", "极值", "最值", "凹凸性", "拐点", "渐近线"],
    "definitions": [
      {
        "label": "定义 2.4.1",
        "title": "单调函数",
        "statement": ["若对区间 $I$ 内任意 $x_1<x_2$，都有 $f(x_1)\\le f(x_2)$（或 $f(x_1)\\ge f(x_2)$），则称 $f$ 在 $I$ 上单调增加（减少）。若不等式严格成立，则称为严格单调增加（减少）。"],
        "source": "§2.4.1，课件 PDF 页 17-26"
      },
      {
        "label": "定义 2.4.2",
        "title": "凸函数与凹函数",
        "statement": ["若对区间 $I$ 内任意 $x_1,x_2$ 及 $\\lambda\\in[0,1]$，都有 $f(\\lambda x_1+(1-\\lambda)x_2)\\le\\lambda f(x_1)+(1-\\lambda)f(x_2)$，则称 $f$ 为凸函数；不等号反向则为凹函数。"],
        "source": "§2.4.4，课件 PDF 页 683-740"
      },
      {
        "label": "定义 2.4.3",
        "title": "拐点",
        "statement": ["若曲线 $y=f(x)$ 经过点 $(x_0,f(x_0))$ 时改变凸向，则称该点为曲线的拐点。"],
        "source": "§2.4.4，课件 PDF 页 722-731"
      },
      {
        "label": "定义 2.4.4",
        "title": "平面曲线的渐近线",
        "statement": ["若平面曲线上的动点沿曲线无限远离坐标原点时，它与某条直线的距离趋于零，则称该直线为该曲线的渐近线。"],
        "source": "§2.4.5，课件 PDF 页 917-935"
      }
    ],
    "entries": [
      {
        "id": "thm-2-4-1",
        "type": "theorem",
        "label": "定理 2.4.1",
        "title": "可导函数单调性的充要条件",
        "statement": ["设 $f$ 在区间 $I$ 上可导，则 $f$ 在 $I$ 上单调增加（减少）当且仅当 $f'(x)\\ge0$（或 $f'(x)\\le0$）对一切 $x\\in I$ 成立。"],
        "conditions": ["$f$ 在整个区间 $I$ 上可导。"],
        "conclusion": ["可由导数符号判断单调区间。"],
        "intuition": "导数符号描述函数局部上升或下降的方向。",
        "proofIdea": ["充分性用 Lagrange 中值定理；必要性由差商极限的保号性得到。"],
        "dependencies": ["Lagrange 中值定理"],
        "pitfalls": ["导数在一个离散点为 0 不影响整体单调。"],
        "source": "§2.4.1，课件 PDF 页 41-80"
      },
      {
        "id": "thm-2-4-2",
        "type": "theorem",
        "label": "定理 2.4.2",
        "title": "严格单调的充要条件",
        "statement": ["设 $f$ 在区间 $I$ 上可导，则 $f$ 严格单调增加（减少）当且仅当 $f'(x)\\ge0$（或 $\\le0$）且 $f'$ 不在 $I$ 的任何子区间上恒为零。"],
        "conditions": ["$f$ 在区间 $I$ 上可导。"],
        "conclusion": ["允许个别点导数为零，但不能出现导数恒为零的区间。"],
        "intuition": "只要函数不在某个小段上完全停住，导数非负就会保证严格上升。",
        "proofIdea": ["反设存在相等的两点，利用区间上的导数恒为零推出矛盾。"],
        "dependencies": ["定理 2.4.1", "常函数判别"],
        "pitfalls": ["把 $f'(x)>0$ 当作严格单调的必要条件；$x^3$ 在 $0$ 处导数为零但整体严格单调。"],
        "source": "§2.4.1，课件 PDF 页 83-155"
      },
      {
        "id": "method-2-4-3",
        "type": "method",
        "label": "方法 2.4.3",
        "title": "利用单调性证明不等式",
        "statement": ["把不等式移项构造差函数，求导确定其在某区间上的单调性，再用端点值或某基准值推出不等式。"],
        "conditions": ["差函数在目标区间上可导。"],
        "conclusion": ["单调函数可以把函数值比较转化为端点值比较。"],
        "intuition": "若差函数始终在零点一侧，则原不等式成立。",
        "proofIdea": ["令 $F(x)=$ 左式减右式，证明 $F'$ 的符号并计算 $F$ 的基准值。"],
        "dependencies": ["单调性判别"],
        "pitfalls": ["只求导而不说明定义域和端点值。"],
        "source": "§2.4.1，课件 PDF 页 155-266"
      },
      {
        "id": "thm-2-4-4",
        "type": "theorem",
        "label": "定理 2.4.3",
        "title": "极值存在的必要条件",
        "statement": ["若 $x_0$ 是函数 $f$ 的极值点，则 $f'(x_0)=0$ 或 $f$ 在 $x_0$ 处不可导，二者至少有一个成立。"],
        "conditions": ["$x_0$ 是区间内点，函数可导或不可导需分别检查。"],
        "conclusion": ["极值候选点包括驻点和不可导点。"],
        "intuition": "极值点要么切线水平，要么切线不存在。",
        "proofIdea": ["若可导则由 Fermat 引理得到导数为零；否则直接不可导。"],
        "dependencies": ["Fermat 引理", "极值定义"],
        "pitfalls": ["驻点不一定是极值点。", "端点不能称为极值点，但可能是最值点。"],
        "source": "§2.4.2，课件 PDF 页 99-110"
      },
      {
        "id": "thm-2-4-5",
        "type": "theorem",
        "label": "定理 2.4.4",
        "title": "极值的第一充分条件",
        "statement": ["若 $f$ 在 $x_0$ 附近连续、在去心邻域可导，且导数在 $x_0$ 左侧为正、右侧为负，则取极大值；左负右正则取极小值；两侧符号相同则不是极值。"],
        "conditions": ["$x_0$ 附近连续。", "去心邻域可导。"],
        "conclusion": ["通过一阶导数符号变化判断极值类型。"],
        "intuition": "上升转为下降形成峰，下降转为上升形成谷。",
        "proofIdea": ["利用单调性判断左右两侧函数值相对 $f(x_0)$ 的大小。"],
        "dependencies": ["导数与单调性"],
        "pitfalls": ["仅检查 $f'(x_0)=0$，不检查符号变化，无法区分极值与非极值。"],
        "source": "§2.4.2，课件 PDF 页 104-120"
      },
      {
        "id": "thm-2-4-6",
        "type": "theorem",
        "label": "定理 2.4.5",
        "title": "极值的第二充分条件",
        "statement": ["若 $f'(x_0)=0$ 且 $f''(x_0)$ 存在，则 $f''(x_0)<0$ 时取极大值，$f''(x_0)>0$ 时取极小值；$f''(x_0)=0$ 时无法判定。"],
        "conditions": ["$x_0$ 是驻点。", "$f$ 在 $x_0$ 处二阶可导。"],
        "conclusion": ["二阶导数符号直接给出凹凸方向上的峰谷判断。"],
        "intuition": "向下的弯曲形成峰，向上的弯曲形成谷。",
        "proofIdea": ["由 Taylor 公式写成 $f(x)-f(x_0)=\\frac12f''(x_0)(x-x_0)^2+o((x-x_0)^2)$。"],
        "dependencies": ["Taylor 公式", "极值定义"],
        "pitfalls": ["$f''(x_0)=0$ 时必须回到一阶导数或更高阶导数判断。"],
        "source": "§2.4.2，课件 PDF 页 121-136"
      },
      {
        "id": "thm-2-4-7",
        "type": "theorem",
        "label": "定理 2.4.6",
        "title": "高阶导数极值判别",
        "statement": ["若 $f'(x_0)=\\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0)\\ne0$，则 $n$ 为偶数时 $x_0$ 是极值点，且 $f^{(n)}(x_0)>0$ 时为极小值、$<0$ 时为极大值；$n$ 为奇数时不是极值点。"],
        "conditions": ["$f$ 在 $x_0$ 处 $n$ 阶可导，且前 $n-1$ 阶导数为零。"],
        "conclusion": ["最低阶非零导数的阶数和符号决定峰谷。"],
        "intuition": "最低阶非零项决定函数在驻点附近的局部形状。",
        "proofIdea": ["由带 Peano 余项的 Taylor 公式保留最低阶项，判断其左右符号。"],
        "dependencies": ["Peano Taylor 公式"],
        "pitfalls": ["必须是最低阶非零导数，不能跳过中间阶数直接随意取。"],
        "source": "§2.4.2，课件 PDF 页 156-164"
      },
      {
        "id": "method-2-4-8",
        "type": "method",
        "label": "方法 2.4.7",
        "title": "闭区间上求最大值与最小值",
        "statement": ["先求区间内部所有驻点和不可导点，再计算这些点及两个端点的函数值，最后比较大小。"],
        "conditions": ["函数在闭区间 $[a,b]$ 上连续。"],
        "conclusion": ["连续函数必能取到最大值和最小值。"],
        "intuition": "最值只可能出现在内部极值候选点或端点。",
        "proofIdea": ["由最值定理保证存在，再用极值必要条件缩小候选范围。"],
        "dependencies": ["最值定理", "极值必要条件"],
        "pitfalls": ["漏掉端点或不可导点。"],
        "source": "§2.4.3，课件 PDF 页 165-266"
      },
      {
        "id": "thm-2-4-9",
        "type": "theorem",
        "label": "定理 2.4.7",
        "title": "可导凸函数的充要条件",
        "statement": ["设 $f$ 在区间 $I$ 上可导，则 $f$ 为凸函数当且仅当 $f'$ 在 $I$ 上单调增加；凹函数对应 $f'$ 单调减少。"],
        "conditions": ["$f$ 在区间 $I$ 上可导。"],
        "conclusion": ["凹凸性等价于导函数斜率的变化方向。"],
        "intuition": "凸函数切线斜率从左到右不断增大。",
        "proofIdea": ["对任意三点使用 Lagrange 中值定理比较斜率，再结合凸函数定义。"],
        "dependencies": ["凸函数定义", "Lagrange 中值定理"],
        "pitfalls": ["凸函数不要求二阶可导。"],
        "source": "§2.4.4，课件 PDF 页 758-803"
      },
      {
        "id": "thm-2-4-10",
        "type": "theorem",
        "label": "定理 2.4.8",
        "title": "二阶导数与凹凸性",
        "statement": ["若 $f$ 在区间 $I$ 上二阶可导，且 $f''(x)\\ge0$，则 $f$ 为凸函数；若 $f''(x)\\le0$，则为凹函数。若严格不等式恒成立，则分别为严格凸、严格凹。"],
        "conditions": ["$f$ 在区间 $I$ 上二阶可导。"],
        "conclusion": ["$f''>0$ 对应曲线向上弯曲，$f''<0$ 对应向下弯曲。"],
        "intuition": "二阶导数是斜率的变化率，直接描述弯曲方向。",
        "proofIdea": ["由 $f''$ 的符号推出 $f'$ 单调，再用可导函数凹凸判别。"],
        "dependencies": ["定理 2.4.7", "导数单调性"],
        "pitfalls": ["$f''(x)=0$ 的点不改变整个区间的凹凸性，需结合左右符号判断拐点。"],
        "source": "§2.4.4，课件 PDF 页 821-833"
      },
      {
        "id": "property-2-4-11",
        "type": "property",
        "label": "性质 2.4.9",
        "title": "凸函数的弦与切线位置",
        "statement": ["凸函数图像位于任意两点连线的弦下方，并在任意一点的切线下方（切线存在时）；凹函数的方向相反。"],
        "conditions": ["凸性或凹性在相应区间内成立。"],
        "conclusion": ["可用弦和切线位置构造不等式。"],
        "intuition": "凸曲线向上弯，弦和切线在曲线上方。",
        "proofIdea": ["从凸函数定义或一阶 Taylor 展开的余项符号得到。"],
        "dependencies": ["凸函数定义", "Taylor 公式"],
        "pitfalls": ["不要把凸函数与“单调增加”混为一谈。"],
        "source": "§2.4.4，课件 PDF 页 743-815"
      },
      {
        "id": "method-2-4-12",
        "type": "method",
        "label": "方法 2.4.10",
        "title": "求拐点",
        "statement": ["先找 $f''$ 为零或二阶导数不存在的点，再检查这些点左右两侧的凹凸性是否改变。只有凸向发生改变的点才是拐点。"],
        "conditions": ["函数在候选点附近连续，且能够判断 $f''$ 的左右符号。"],
        "conclusion": ["拐点候选不一定都是拐点。"],
        "intuition": "弯曲方向改变才叫拐点，二阶导数为零只是候选条件。",
        "proofIdea": ["用二阶导数符号表判断左右凹凸性。"],
        "dependencies": ["凹凸性判别", "二阶导数"],
        "pitfalls": ["$f''(x_0)=0$ 不能单独推出拐点，例如 $f(x)=x^4$。"],
        "source": "§2.4.4，课件 PDF 页 815-917"
      },
      {
        "id": "thm-2-4-13",
        "type": "theorem",
        "label": "定理 2.4.9",
        "title": "铅直渐近线",
        "statement": ["直线 $x=x_0$ 是曲线 $y=f(x)$ 的铅直渐近线，当且仅当 $\\lim\\limits_{x\\to x_0^+}f(x)=\\infty$ 或 $\\lim\\limits_{x\\to x_0^-}f(x)=\\infty$ 至少有一个成立。"],
        "conditions": ["考察 $x_0$ 的单侧邻域。"],
        "conclusion": ["函数在有限点附近无界时通常出现铅直渐近线。"],
        "intuition": "曲线在垂直方向无限靠近某条竖线。",
        "proofIdea": ["由渐近线定义检查动点到直线 $x=x_0$ 的横向距离趋于零。"],
        "dependencies": ["渐近线定义", "无穷极限"],
        "pitfalls": ["只检查一侧趋于无穷也可以形成铅直渐近线。"],
        "source": "§2.4.5，课件 PDF 页 935-944"
      },
      {
        "id": "thm-2-4-14",
        "type": "theorem",
        "label": "定理 2.4.10",
        "title": "斜渐近线与水平渐近线",
        "statement": ["曲线 $y=f(x)$ 在相应侧有斜渐近线 $y=ax+b$，当且仅当 $a=\\lim\\limits_{x\\to\\pm\\infty}\\frac{f(x)}x$ 且 $b=\\lim\\limits_{x\\to\\pm\\infty}(f(x)-ax)$ 存在。$a=0$ 时得到水平渐近线。"],
        "conditions": ["讨论 $x\\to+\\infty$ 或 $x\\to-\\infty$ 的一侧。"],
        "conclusion": ["可分别考察左右两侧，斜率或截距可以不同。"],
        "intuition": "无限远处曲线的平均斜率趋于 $a$，剩余垂直偏移趋于 $b$。",
        "proofIdea": ["由 $f(x)-(ax+b)\\to0$ 先推出斜率极限，再推出截距极限。"],
        "dependencies": ["函数极限", "渐近线定义"],
        "pitfalls": ["不能只计算 $\\lim f(x)/x$ 而漏掉截距 $b$。", "两侧渐近线不一定相同。"],
        "source": "§2.4.5，课件 PDF 页 944-1049"
      },
      {
        "id": "method-2-4-15",
        "type": "method",
        "label": "方法 2.4.11",
        "title": "函数图像分析流程",
        "statement": ["依次确定定义域、奇偶性与周期性、与坐标轴的交点、单调区间与极值、凹凸区间与拐点、渐近线，最后绘制函数图像。"],
        "conditions": ["函数表达式和定义域明确，相关导数可计算。"],
        "conclusion": ["导数信息可以组合成完整的图形特征。"],
        "intuition": "先确定大框架，再用一阶和二阶导数填充局部形状。",
        "proofIdea": ["制作导数符号表，将区间、单调性和凹凸性合并。"],
        "dependencies": ["单调性", "极值", "凹凸性", "渐近线"],
        "pitfalls": ["跳过定义域直接求导。"],
        "source": "§2.4，课件 PDF 页 1049-1060"
      },
      {
        "id": "pitfall-2-4-16",
        "type": "pitfall",
        "label": "易错点 2.4.12",
        "title": "极值、最值与拐点的概念边界",
        "statement": ["极值是局部概念，最值是整体概念；端点不是极值点但可能是最值点；$f''(x_0)=0$ 只是拐点候选条件，仍需检查左右凹凸性是否改变。"]
      ,
        "conditions": ["讨论函数性态时先确认概念范围。"],
        "conclusion": ["不应把局部结论当作全局结论，也不应根据单一导数条件直接下结论。"],
        "intuition": "不同概念回答不同问题，判断条件不能互换。",
        "proofIdea": ["分别用极大值、全局最大值和拐点定义核对条件。"],
        "dependencies": ["极值定义", "最值定理", "拐点定义"],
        "pitfalls": ["把一阶导数为零直接称为极值点。", "把二阶导数为零直接称为拐点。"],
        "source": "§2.4.2-2.4.4，课件 PDF 页 96-833"
      }
    ]
  }
];

window.MATH_REVIEW_CHAPTERS = (window.MATH_REVIEW_CHAPTERS || []).concat(
  window.MATH_REVIEW_CHAPTER2
);
