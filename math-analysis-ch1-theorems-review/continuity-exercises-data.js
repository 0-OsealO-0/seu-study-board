// 工科数学分析 I · 第四章 习题课：连续函数（22 题全解 + 方法总结）
// 由 tmp/build_continuity_exercises_data.py 生成，请勿手改。
window.MATH_REVIEW_EXERCISE_CHAPTERS = (window.MATH_REVIEW_EXERCISE_CHAPTERS || []).concat(
[
  {
    "number": "4.1",
    "bookChapter": "4",
    "title": "方法地图：二十二题背后的八种套路",
    "lead": "二十二道题不是二十二个技巧，而是八种套路的不同外壳。连续函数这一节，一半的题在「求极限」，一半在「用连续性」。先按题面信号锁定套路，再按模板写步骤。",
    "map": [
      "信号识别",
      "套路选择",
      "步骤模板",
      "边界检查"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "method",
        "label": "套路 1",
        "title": "判阶：等价无穷小替换是比较阶数的唯一工具",
        "statement": "题目出现「是 $x$ 的几阶无穷小」「同阶无穷小」「求 $k$ 使……」，本质都是比较阶数：找一个非零常数 $C$ 使 $\\lim\\frac{f(x)}{x^{k}}=C$，则 $f$ 是 $k$ 阶无穷小。",
        "conditions": [],
        "conclusion": [
          "判阶 = 求 $\\lim\\frac{f(x)}{x^{k}}$，结果是非零常数时 $k$ 就是阶数。",
          "同阶 = 比值极限为非零常数；等价 = 比值极限为 $1$。",
          "本节用它的题：1(1)–(4)、2(4)、2(5)。"
        ],
        "intuition": "把复杂因子拆成标准块，逐块换成幂，最后只看最低次幂。",
        "proofIdea": [
          "① 把式子拆成 $\\sin u$、$\\tan u$、$\\ln(1+u)$、$e^{u}-1$、$(1+u)^{\\alpha}-1$、$1-\\cos u$ 这些标准块。",
          "② 用 $\\sin u\\sim u$、$\\tan u\\sim u$、$\\ln(1+u)\\sim u$、$e^{u}-1\\sim u$、$(1+u)^{\\alpha}-1\\sim\\alpha u$、$1-\\cos u\\sim\\frac{u^{2}}{2}$ 逐块替换。",
          "③ 合并同类幂次，最低次项决定阶数；系数之比必须非零。",
          "④ 若一次替换后出现 $0/0$ 或主项相消，说明替换精度不够，回到上一阶重新展开。"
        ],
        "pitfalls": [
          "加减法里直接替换：$e^{x\\cos x^{2}}-e^{x}$ 要先提 $e^{x}$，括号内是 $\\cos x^{2}-1$，否则会漏掉 $x^{5}$ 阶的来源。",
          "只换一项不换另一项，导致分子分母精度不一致。"
        ],
        "dependencies": [
          "等价无穷小表",
          "极限的四则运算"
        ],
        "source": "习题课 第 1–4 页",
        "id": "cont-m1"
      },
      {
        "type": "method",
        "label": "套路 2",
        "title": "$1^{\\infty}$ 型：指数化后用第二重要极限",
        "statement": "底数趋于 $1$、指数趋于 $\\infty$，形如 $u(x)^{v(x)}$，其中 $u\\to1$、$v\\to\\infty$。",
        "conditions": [],
        "conclusion": [
          "恒等变形：$u^{v}=(1+(u-1))^{\\frac{1}{u-1}\\cdot(u-1)v}\\to e^{\\lim(u-1)v}$。",
          "先算 $\\lim(u-1)v=A$（有限），答案就是 $e^{A}$。",
          "本节用它的题：2(1)、2(2)、2(3)。"
        ],
        "intuition": "把「$1$ 加一点」抬成 $e$ 的指数，问题就变成算 $\\lim u\\cdot v$ 这一个数。",
        "proofIdea": [
          "① 确认是 $1^{\\infty}$ 型，写出 $u=1+w$，$w\\to0$。",
          "② 原式 $=\\big[(1+w)^{1/w}\\big]^{wv}$，中括号趋于 $e$。",
          "③ 求 $\\lim wv$：优先用等价无穷小把 $w$ 换成幂，再与 $v$ 相乘。",
          "④ 答案 $=e^{\\lim wv}$；若 $wv$ 的极限不存在或为 $\\infty$，要回到原式重新处理。"
        ],
        "pitfalls": [
          "写成 $e^{\\lim u\\cdot v}$（应为 $e^{\\lim(u-1)v}$）。",
          "只对底数做等价替换，忘了指数上的 $v$ 也要一起乘。"
        ],
        "dependencies": [
          "第二重要极限",
          "等价无穷小"
        ],
        "source": "习题课 第 12–18 页",
        "id": "cont-m2"
      },
      {
        "type": "method",
        "label": "套路 3",
        "title": "间断点：先定位、再算左右极限、最后分类",
        "statement": "问「间断点为 ______，类型为 ______」的题，先在定义域内找可疑点。",
        "conditions": [],
        "conclusion": [
          "可去：$f(x_0^{\\pm})$ 都存在且相等（有限），但不等于 $f(x_0)$ 或 $f(x_0)$ 无定义。",
          "跳跃：$f(x_0^{\\pm})$ 都存在且有限，但不相等。",
          "无穷：至少一侧为 $\\infty$；振荡：至少一侧振荡无极限。第一类 = 左右极限都存在；第二类 = 至少一侧不存在。"
        ],
        "intuition": "间断点的类型只由左右极限决定，与 $f(x_0)$ 取什么值无关。",
        "proofIdea": [
          "① 列可疑点：分母零点、分段点、$\\arctan\\frac{1}{x-x_0}$ 型、底数含 $x$ 的极限定义函数、$\\ln$ 真数的零点。",
          "② 逐点算 $f(x_0^{+})$、$f(x_0^{-})$，先判是否有限。",
          "③ 两侧有限且相等 → 可去；有限但不等 → 跳跃；出现 $\\infty$ → 无穷；振荡 → 振荡。",
          "④ 用一句话收尾：因为左右极限都存在且有限，所以是第一类 ×× 间断点。"
        ],
        "pitfalls": [
          "漏掉 $\\arctan\\frac{1}{x-1}$ 在 $x=1$ 两侧分别趋于 $\\mp\\frac{\\pi}{2}$ 的跳跃。",
          "把「函数无定义」直接当间断点，忘了间断点必须先在 $x_0$ 的某个去心邻域内有定义。",
          "可去间断点忘记比较极限与 $f(x_0)$。"
        ],
        "dependencies": [
          "左、右极限",
          "连续的定义"
        ],
        "source": "习题课 第 8–11 页",
        "id": "cont-m3"
      },
      {
        "type": "method",
        "label": "套路 4",
        "title": "已知极限反推：把已知式拆成「已知量 × 待求量」",
        "statement": "已知 $\\lim\\frac{A(x)}{B(x)}=c$ 求 $\\lim C(x)$，或已知某式极限求参数。",
        "conditions": [],
        "conclusion": [
          "$A(x)=\\frac{A(x)}{B(x)}\\cdot B(x)$，把已知极限与 $B(x)$ 的极限相乘即得 $A(x)$ 的极限。",
          "分母趋于 $0$ 而比值有极限 ⇒ 分子趋于 $0$，这是最常用的一条附加信息。",
          "本节用它的题：3、12，以及填空 1(4)(5)。"
        ],
        "intuition": "已知的是整体的极限，要拆出其中一个因子，就必须先知道另一个因子的极限。",
        "proofIdea": [
          "① 写出已知极限的乘积形式，把待求量单独隔离。",
          "② 由分母趋于 $0$ 且比值有限，推出分子趋于 $0$，得到新信息（如 $\\frac{f(x)}{\\sin2x}\\to0$）。",
          "③ 用 $\\ln(1+u)\\sim u$、$(1+u)^{\\alpha}-1\\sim\\alpha u$ 把非线性关系线性化，解出目标。",
          "④ 含参题按「同阶项系数相等」列方程。"
        ],
        "pitfalls": [
          "由分子趋于 $0$ 反推时，要说明存在去心邻域使分母非零，否则 $\\ln(1+u)\\neq0$ 的推导不合法。",
          "把 $\\ln(1+u)\\sim u$ 用于 $u$ 不趋于 $0$ 的情形。"
        ],
        "dependencies": [
          "等价无穷小",
          "极限的四则运算"
        ],
        "source": "习题课 第 19–23 页",
        "id": "cont-m4"
      },
      {
        "type": "method",
        "label": "套路 5",
        "title": "和式夹逼：用 $n\\cdot\\min\\le\\sum\\le n\\cdot\\max$ 造两端",
        "statement": "求和式的极限，通项里带 $e^{k/n}$、$\\frac{k}{n}$、$\\frac{k^{2}}{n^{2}}$ 这类慢变因子，无法直接求和。",
        "conditions": [],
        "conclusion": [
          "把慢变部分用最小、最大项夹住，剩下的部分用等比、等差或平方和公式求闭式。",
          "两端必须同阶同极限，否则等于没夹。",
          "本节用它的题：4。"
        ],
        "intuition": "夹逼不是估个数，而是把和式换成「常数 × 可求和的和式」，让两端都算得出来。",
        "proofIdea": [
          "① 把通项写成 $a_k b_k$，其中 $b_k$ 的变化幅度小。",
          "② 对 $b_k$ 用 $\\min\\le b_k\\le\\max$ 夹住整和。",
          "③ 对 $\\sum a_k$ 用等比求和：$\\sum_{k=0}^{n-1}e^{\\frac{k+1}{n}}=e^{\\frac1n}\\frac{1-e}{1-e^{\\frac1n}}$。",
          "④ 两端分别求极限，$1-e^{\\frac1n}\\sim-\\frac1n$ 是最后一步的关键等价。"
        ],
        "pitfalls": [
          "只夹一头，另一端写「显然」。",
          "等比求和公比写错：公比是 $e^{\\frac1n}$，不是 $e$。"
        ],
        "dependencies": [
          "夹逼准则",
          "等比数列求和"
        ],
        "source": "习题课 第 24–25 页",
        "id": "cont-m5"
      },
      {
        "type": "method",
        "label": "套路 6",
        "title": "连续性的证明：三个入口",
        "statement": "证 $f$ 在点 $x_0$ 或区间 $I$ 上连续。",
        "conditions": [],
        "conclusion": [
          "入口一（$\\varepsilon$–$\\delta$）：直接证 $|f(x)-f(x_0)|<\\varepsilon$。",
          "入口二（增量式）：证 $\\lim_{\\Delta x\\to0}[f(x_0+\\Delta x)-f(x_0)]=0$，适合抽象函数与函数方程。",
          "入口三（左右极限）：分段点处分别算 $f(x_0^{\\pm})$，验证都等于 $f(x_0)$。区间上连续 = 对任意 $x_0\\in I$ 都成立。"
        ],
        "intuition": "连续是「极限等于函数值」，所以所有证明最终都落在算一个极限上。",
        "proofIdea": [
          "① 先看对象：具体初等函数用入口三；含 $\\varepsilon$ 的题用入口一；满足 $f(x+y)=f(x)f(y)$ 这类函数方程的用入口二。",
          "② 入口二先确定 $f(0)$：由 $f(0)=f(0)^{2}$ 且 $f$ 不恒为零得 $f(0)=1$。",
          "③ 把 $f(x_0+\\Delta x)-f(x_0)$ 化成「$f(x_0)\\times$（在 $0$ 处的增量）」。",
          "④ 用 $f$ 在 $0$ 连续得增量趋于 $0$，再写「$x_0$ 任意，故在 $\\mathbb{R}$ 上连续」。"
        ],
        "pitfalls": [
          "只在 $x_0$ 证完就宣称「在区间上连续」，漏掉「$x_0$ 任意」。",
          "函数方程题忘记先求 $f(0)$（$f(0)=0$ 与 $f(0)=1$ 两支要讨论）。"
        ],
        "dependencies": [
          "连续的定义",
          "函数方程"
        ],
        "source": "习题课 第 26–30 页",
        "id": "cont-m6"
      },
      {
        "type": "method",
        "label": "套路 7",
        "title": "存在性证明：构造辅助函数 + 零点定理 / 最值定理",
        "statement": "证「存在 $\\xi$ 使 $f(\\xi)=\\cdots$」「方程至少 $k$ 个实根」「$f$ 取到最大（小）值」。",
        "conditions": [],
        "conclusion": [
          "证等式：把等式移项构造 $F$，找两点异号，用零点定理。",
          "证多根：在每个开区间（或每个分支）上用极限定号，各得一根。",
          "证最值：$x\\to\\pm\\infty$ 时 $f\\to-\\infty$，取 $M=|f(0)|+1$，在闭区间 $[X_1,X_2]$ 上用最值定理，再说明区间外更小。"
        ],
        "intuition": "存在性证明不需求出 $\\xi$，只需证明中间值被取到，所以辅助函数和端点符号是全部工作。",
        "proofIdea": [
          "① 读题，把要证的式子整理成 $F(\\xi)=0$ 的形式。",
          "② 找 $F$ 的定义区间，验证 $F$ 连续。",
          "③ 在端点算 $F$ 的值或单侧极限，得到 $F(a)F(b)\\le0$。",
          "④ 多根题：把实轴按分母零点切成若干段，每段用两端极限符号各得一根。",
          "⑤ 最值题：先砍掉远处的尾部，在剩下的闭区间用最值定理，再比较。"
        ],
        "pitfalls": [
          "零点定理要求闭区间上连续，端点值要算出来而不是写「显然」。",
          "多根题只在中间区间证了一根，漏掉 $(c,+\\infty)$ 或 $(-\\infty,a)$。"
        ],
        "dependencies": [
          "零点定理",
          "介值定理",
          "最值定理"
        ],
        "source": "习题课 第 31–37 页",
        "id": "cont-m7"
      },
      {
        "type": "method",
        "label": "套路 8",
        "title": "一致连续：定义式证明与两列反证",
        "statement": "证 $f$ 在区间 $I$ 上一致连续，或证明它不一致连续。",
        "conditions": [],
        "conclusion": [
          "证一致：$\\forall\\varepsilon>0$ 找 $\\delta=\\delta(\\varepsilon)$，使 $|x_1-x_2|<\\delta$ 时 $|f(x_1)-f(x_2)|<\\varepsilon$，且 $\\delta$ 与点的位置无关。",
          "证不一致：取两列 $x_n',x_n''\\in I$，$|x_n'-x_n''|\\to0$ 但 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0$。",
          "本节用它的题：10、11。"
        ],
        "intuition": "一致连续 = 整条曲线上同样陡；不一致连续 = 某处越来越陡（如 $\\frac1x\\cos\\frac1x$ 在 $0$ 附近）。",
        "proofIdea": [
          "① 证一致：优先找 Lipschitz 型估计 $|f(x_1)-f(x_2)|\\le L|x_1-x_2|$，或 $\\le\\varphi(|x_1-x_2|)$。",
          "② $\\sqrt{x}$ 型用 $|\\sqrt{x_1}-\\sqrt{x_2}|=\\frac{|x_1-x_2|}{\\sqrt{x_1}+\\sqrt{x_2}}\\le\\sqrt{|x_1-x_2|}$，取 $\\delta=\\varepsilon^{2}$。",
          "③ 证不一致：构造两列点落在函数值相差很大的位置，如 $x_n'=\\frac{1}{2n\\pi}$、$x_n''=\\frac{1}{2n\\pi+\\frac{\\pi}{2}}$。",
          "④ 最后必须写「取 $\\varepsilon_0=1$，对任意 $\\delta>0$ 都存在 $n$ 使……」，量词顺序不能乱。"
        ],
        "pitfalls": [
          "把连续直接当一致连续；开区间上连续不一定一致连续。",
          "$\\delta$ 里含 $x$，例如对 $\\frac1x$ 取 $\\delta=\\varepsilon x^{2}$，这不是一致连续的证明。"
        ],
        "dependencies": [
          "一致连续定义",
          "Cantor 定理"
        ],
        "source": "习题课 第 38–40 页",
        "id": "cont-m8"
      }
    ]
  },
  {
    "number": "4.2",
    "bookChapter": "4",
    "title": "常考知识点",
    "lead": "这些是必须能默写出来的东西：定义、等价无穷小、两个重要极限、间断点分类、闭区间三大性质与一致连续的判据。",
    "map": [
      "定义",
      "公式",
      "性质",
      "判据"
    ],
    "definitions": [
      {
        "label": "定义 1",
        "title": "连续与左、右连续",
        "statement": [
          "$f$ 在 $x_0$ 连续 $\\iff\\lim_{x\\to x_0}f(x)=f(x_0)$。",
          "$\\varepsilon$–$\\delta$ 形式：$\\forall\\varepsilon>0,\\ \\exists\\delta>0$，当 $|x-x_0|<\\delta$ 时 $|f(x)-f(x_0)|<\\varepsilon$。",
          "左连续：$f(x_0^{-})=f(x_0)$；右连续：$f(x_0^{+})=f(x_0)$；连续 $\\iff$ 既左连续又右连续。"
        ],
        "source": "习题课 第 1、8 页 / 第 1 章 §1.4",
        "id": "cont-def-1"
      },
      {
        "label": "定义 2",
        "title": "一致连续",
        "statement": [
          "$f$ 在区间 $I$ 上一致连续：$\\forall\\varepsilon>0,\\ \\exists\\delta>0$，对任意 $x_1,x_2\\in I$，$|x_1-x_2|<\\delta\\Rightarrow|f(x_1)-f(x_2)|<\\varepsilon$。",
          "与连续的区别：连续的 $\\delta$ 依赖 $x_0$，一致连续的 $\\delta$ 只依赖 $\\varepsilon$。"
        ],
        "source": "习题课 第 38 页 / 第 1 章 §1.5",
        "id": "cont-def-2"
      }
    ],
    "entries": [
      {
        "type": "formula",
        "label": "知识点 1",
        "title": "等价无穷小表（$x\\to0$）",
        "statement": "$\\sin x\\sim\\tan x\\sim\\arcsin x\\sim\\arctan x\\sim x$；$\\ln(1+x)\\sim x$；$e^{x}-1\\sim x$；$a^{x}-1\\sim x\\ln a$；$1-\\cos x\\sim\\frac{x^{2}}{2}$；$(1+x)^{\\alpha}-1\\sim\\alpha x$。",
        "conditions": [],
        "conclusion": [
          "以上每条都是判阶、求极限、定参数的第一工具。",
          "复合形式把 $x$ 换成趋于 $0$ 的 $u(x)$ 仍然成立，例如 $\\ln(1-3(x-1))\\sim-3(x-1)$。"
        ],
        "intuition": "等价无穷小只解决「乘除」；加减法里要用必须先合并同类项，保证不出现主项相消。",
        "proofIdea": [
          "① 优先把式子凑成「$1+$ 小量」的形式。",
          "② 乘除结构直接逐块替换。",
          "③ 加减结构先通分、提公因子或合并（如 $\\ln(1+x)+\\ln(1-x)=\\ln(1-x^{2})$）再替换。"
        ],
        "pitfalls": [
          "在 $\\cos x-1$ 上把 $\\cos x\\sim1$ 写成 $0$，忽略 $x^{2}$ 阶主项。",
          "$1-\\cos x\\sim\\frac{x^{2}}{2}$ 的系数 $\\frac12$ 经常漏掉。"
        ],
        "dependencies": [
          "极限的四则运算"
        ],
        "source": "第 1 章 §1.3 / 习题课 第 1–11 页",
        "id": "cont-k1"
      },
      {
        "type": "formula",
        "label": "知识点 2",
        "title": "两个重要极限与 $1^{\\infty}$ 公式",
        "statement": "$\\lim_{x\\to0}\\frac{\\sin x}{x}=1$；$\\lim_{x\\to0}(1+x)^{\\frac1x}=e$，$\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^{n}=e$；$1^{\\infty}$ 型：$u^{v}\\to e^{\\lim(u-1)v}$。",
        "conditions": [],
        "conclusion": [
          "$1^{\\infty}$ 型标准三步：写成 $1+w$；凑 $(1+w)^{\\frac1w}$；算 $\\lim wv$。",
          "本节用它的题：2(1)、2(2)、2(3)。"
        ],
        "intuition": "第二重要极限的价值就是把「底数趋于 1」的不定型变成指数上的一个普通极限。",
        "proofIdea": [
          "① 判断是否为 $1^{\\infty}$ 型。",
          "② 底数写成 $1+w$，$w\\to0$。",
          "③ $wv$ 用等价无穷小化简后求极限。",
          "④ 结果写成 $e^{\\lim wv}$。"
        ],
        "pitfalls": [
          "把 $\\lim(1+x)^{\\frac1x}$ 与 $\\lim(1+\\frac1x)^{x}$ 混用。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "第 1 章 §1.3 / 习题课 第 7–9 页",
        "id": "cont-k2"
      },
      {
        "type": "property",
        "label": "知识点 3",
        "title": "间断点分类总表",
        "statement": "按左右极限是否存在、是否相等分成四类。",
        "conditions": [],
        "conclusion": [
          "第一类可去：$f(x_0^{+})=f(x_0^{-})$ 有限，但不等于 $f(x_0)$ 或 $f(x_0)$ 无定义。",
          "第一类跳跃：$f(x_0^{+})\\ne f(x_0^{-})$，两者都有限。",
          "第二类无穷：至少一侧为 $\\infty$；第二类振荡：至少一侧振荡无极限（如 $\\sin\\frac1x$）。"
        ],
        "intuition": "先看「有没有极限」，再看「极限等不等于函数值」——这是分类的唯一顺序。",
        "proofIdea": [
          "① 找可疑点。",
          "② 算左右极限。",
          "③ 两侧都有限 → 第一类；否则第二类。",
          "④ 第一类里再分：相等 → 可去；不等 → 跳跃。"
        ],
        "pitfalls": [
          "把 $\\arctan\\frac{1}{x-1}$ 的跳跃漏掉。",
          "把「无定义点」一律当间断点。"
        ],
        "dependencies": [
          "左、右极限",
          "连续的定义"
        ],
        "source": "第 1 章 §1.4 / 习题课 第 5–6 页",
        "id": "cont-k3"
      },
      {
        "type": "property",
        "label": "知识点 4",
        "title": "连续函数的运算与初等函数的连续性",
        "statement": "连续函数的和、差、积、商（分母不为零）仍连续；复合函数内外都连续则连续；一切初等函数在其定义区间内连续。",
        "conditions": [],
        "conclusion": [
          "所以判断分段函数连续性，只需检查分段点。",
          "求初等函数在定义区间内某点的极限，可直接代入函数值。"
        ],
        "intuition": "初等函数的连续性把「求极限」降级成「代值」。",
        "proofIdea": [
          "① 确认点在定义区间内。",
          "② 直接代入。",
          "③ 分段点单独用左右极限验证。"
        ],
        "pitfalls": [
          "在分段点直接代值，忽略分段两侧表达式不同。"
        ],
        "dependencies": [
          "连续的定义"
        ],
        "source": "第 1 章 §1.4",
        "id": "cont-k4"
      },
      {
        "type": "theorem",
        "label": "知识点 5",
        "title": "有界性与最大值最小值定理",
        "statement": "闭区间 $[a,b]$ 上的连续函数必在该区间上有界，且必取到最大值与最小值。",
        "conditions": [],
        "conclusion": [
          "条件缺一不可：闭区间、连续。开区间或含无穷的区间结论不成立（如 $\\frac1x$ 在 $(0,1)$）。",
          "本节用它的题：9。"
        ],
        "intuition": "闭区间把函数「关起来」，连续保证不会在内部跑到无穷。",
        "proofIdea": [
          "① 验证闭区间与连续。",
          "② 直接引用最值定理。",
          "③ 若区间无界，先用 $x\\to\\pm\\infty$ 的极限砍尾，再在剩余闭区间上用定理。"
        ],
        "pitfalls": [
          "对开区间 $(0,1)$ 直接引用最值定理。",
          "最值题只写「有最大值」而不构造闭区间。"
        ],
        "dependencies": [
          "连续的定义"
        ],
        "source": "第 1 章 §1.5 / 习题课 第 19 页",
        "id": "cont-k5"
      },
      {
        "type": "theorem",
        "label": "知识点 6",
        "title": "零点定理与介值定理",
        "statement": "零点定理：$f\\in C[a,b]$ 且 $f(a)f(b)<0$，则存在 $\\xi\\in(a,b)$ 使 $f(\\xi)=0$。介值定理：$f\\in C[a,b]$，则 $f$ 取遍 $f(a)$ 与 $f(b)$ 之间的一切值。",
        "conditions": [],
        "conclusion": [
          "零点定理是介值定理取 $\\mu=0$ 的特例。",
          "本节用它的题：7、8。"
        ],
        "intuition": "要证「存在一点使两个值相等」，就把差构造出来再找异号端点。",
        "proofIdea": [
          "① 把待证等式移项成 $F(x)=0$。",
          "② 验证 $F$ 在闭区间上连续。",
          "③ 找端点或单侧极限异号（$F(a)F(b)\\le0$ 即可，用 $\\le$ 不用 $<$）。",
          "④ 引用零点定理。"
        ],
        "pitfalls": [
          "忘记验证连续与闭区间。",
          "端点取开区间，导致定理条件不满足。"
        ],
        "dependencies": [
          "连续的定义",
          "极限"
        ],
        "source": "第 1 章 §1.5 / 习题课 第 16–18 页",
        "id": "cont-k6"
      },
      {
        "type": "theorem",
        "label": "知识点 7",
        "title": "一致连续的充分条件",
        "statement": "① 闭区间上连续 ⇒ 一致连续（Cantor 定理）。② 满足 Lipschitz 条件 $|f(x_1)-f(x_2)|\\le L|x_1-x_2|$ ⇒ 一致连续。③ 有界区间上导数有界 ⇒ 一致连续。",
        "conditions": [],
        "conclusion": [
          "证明一致连续时优先用 ①（闭区间）或 ②（Lipschitz 估计）。",
          "本节用它的题：11。"
        ],
        "intuition": "一致性来自「整段区间被同一个界控制」，闭区间或导数有界恰好提供这个统一控制。",
        "proofIdea": [
          "① 先看区间：闭区间直接 Cantor。",
          "② 开区间则尝试找 Lipschitz 估计或导数有界。",
          "③ 导数无界不等于不一致连续（如 $\\sqrt x$ 在 $[0,+\\infty)$）。"
        ],
        "pitfalls": [
          "用「导数无界」直接断言不一致连续。",
          "在 $[0,+\\infty)$ 这类无界区间上误用 Cantor。"
        ],
        "dependencies": [
          "一致连续定义",
          "拉格朗日中值定理"
        ],
        "source": "第 1 章 §1.5 / 习题课 第 21 页",
        "id": "cont-k7"
      },
      {
        "type": "formula",
        "label": "知识点 8",
        "title": "常用不等式与放缩",
        "statement": "$|\\sin x|\\le|x|$，$|\\sin x|\\le1$，$|\\cos x|\\le1$；$|\\sqrt{x_1}-\\sqrt{x_2}|\\le\\sqrt{|x_1-x_2|}$（$x_1,x_2\\ge0$）；$2t+\\frac{1}{t^{2}}\\ge3$（$t>0$，$t=1$ 取等）；$|x_1-x_2|\\le|x_1|+|x_2|$。",
        "conditions": [],
        "conclusion": [
          "这些不等式是夹逼、一致连续、放缩证明的原料。",
          "本节用它的题：4、10、11。"
        ],
        "intuition": "几乎所有放缩题的难点都在「选对那个能把两项塌缩成一项的不等式」。",
        "proofIdea": [
          "① 明确要控制的目标量。",
          "② 选能把目标量压到 $|x_1-x_2|$ 或某个幂的不等式。",
          "③ 验证取等条件是否可达。"
        ],
        "pitfalls": [
          "把 $|\\sin x|\\le|x|$ 在 $x$ 很大时当作有效放缩（此时下界也用 $|\\sin x|\\le1$）。"
        ],
        "dependencies": [
          "绝对值不等式"
        ],
        "source": "第 1 章 §1.3 / 习题课 第 20–21 页",
        "id": "cont-k8"
      },
      {
        "type": "property",
        "label": "知识点 9",
        "title": "极限存在的三个判定工具",
        "statement": "夹逼准则、单调有界准则、归结原则（Heine 定理）。",
        "conditions": [],
        "conclusion": [
          "夹逼：用于和式、根式、含振荡项的极限。",
          "单调有界：用于递推数列。",
          "归结原则：证明极限不存在——找两个子列极限不同即可（题 6 用此）。"
        ],
        "intuition": "归结原则是「不存在的证明器」，夹逼与单调有界是「存在的证明器」。",
        "proofIdea": [
          "① 想证存在：夹逼或单调有界。",
          "② 想证不存在：取两列点／两个子列，让极限不同。",
          "③ 写清「$x_n\\to x_0$ 且 $f(x_n)\\to A$，而 $y_n\\to x_0$ 且 $f(y_n)\\to B\\ne A$」。"
        ],
        "pitfalls": [
          "用「$x$ 无限接近」这种含糊描述代替两列构造。"
        ],
        "dependencies": [
          "夹逼准则",
          "单调有界准则"
        ],
        "source": "第 1 章 §1.2–1.4 / 习题课 第 15 页",
        "id": "cont-k9"
      },
      {
        "type": "method",
        "label": "知识点 10",
        "title": "极限定义的函数：先算内层极限，再讨论连续性",
        "statement": "形如 $f(x)=\\lim_{t\\to+\\infty}F(x,t)$ 或 $\\lim_{n\\to\\infty}$ 的函数，先对每个固定的 $x$ 求出内层极限，得到 $f$ 的显式表达式。",
        "conditions": [],
        "conclusion": [
          "含 $e^{tx}$、$x^{n}$ 这类底数含 $x$ 的因子时，按 $x$ 相对 $1$（或相对 $e$）的大小分段。",
          "本节用它的题：1(7)、12。"
        ],
        "intuition": "内层极限把「一列函数」压成「一个函数」，之后就是普通的分段函数连续性问题。",
        "proofIdea": [
          "① 固定 $x$，判断哪个因子在 $t\\to+\\infty$ 时主导。",
          "② 按主导因子切换的位置分段。",
          "③ 写出 $f$ 的分段表达式。",
          "④ 只在分段点验证左右极限与函数值。"
        ],
        "pitfalls": [
          "漏掉恰好取等的位置（如 $x=e$）。",
          "把 $x<0$ 与 $x>0$ 的主导项搞反。"
        ],
        "dependencies": [
          "极限的四则运算",
          "间断点分类"
        ],
        "source": "习题课 第 6、22 页",
        "id": "cont-k10"
      },
      {
        "type": "property",
        "label": "知识点 11",
        "title": "连续与可导、极限的关系",
        "statement": "可导 ⇒ 连续；连续 ⇏ 可导（如 $|x|$ 在 $0$、$\\sqrt[3]{x}$ 在 $0$）。连续 ⇒ 极限等于函数值，可直接代入。",
        "conditions": [],
        "conclusion": [
          "「连续」是比「可导」更弱的条件，证明里不要拿可导去替代连续。",
          "本节所有题都只用到连续，不涉及导数。"
        ],
        "intuition": "连续管「函数值接得上」，可导管「变化率存在」；后者要求更高。",
        "proofIdea": [
          "① 题目只给连续时，不要用中值定理去证连续性。",
          "② 需要导数有界时，必须题目另给可导条件。"
        ],
        "pitfalls": [
          "把连续当可导，引用拉格朗日中值定理。"
        ],
        "dependencies": [
          "连续的定义",
          "导数的定义"
        ],
        "source": "第 1 章 §1.4 / 第 2 章 §2.1",
        "id": "cont-k11"
      },
      {
        "type": "formula",
        "label": "知识点 12",
        "title": "和式极限的两个标准界",
        "statement": "$n\\cdot\\min\\le\\sum_{k=1}^{n}a_k\\le n\\cdot\\max$；若 $a_k>0$，则 $\\frac{1}{n\\cdot\\max\\frac1{a_k}}\\le\\sum$ 不适用，必须逐项处理分母。",
        "conditions": [],
        "conclusion": [
          "本节题 4 的分母是 $n+\\frac{k^{2}}{n^{2}}$，最小为 $n$、最大为 $n+1$，于是 $\\frac{1}{n+1}\\le\\frac{1}{n+\\frac{k^{2}}{n^{2}}}\\le\\frac1n$。",
          "分子部分 $\\sum e^{\\frac{k+1}{n}}$ 用等比求和，公比 $e^{\\frac1n}$。"
        ],
        "intuition": "夹逼的界要「常数倍」，不能跟着 $n$ 变；所以先夹住分母，再单独处理分子。",
        "proofIdea": [
          "① 分母取最小、最大值。",
          "② 分子用公式求和。",
          "③ 两端同阶同极限。"
        ],
        "pitfalls": [
          "两端不同阶，等于没夹。"
        ],
        "dependencies": [
          "夹逼准则",
          "等比数列求和"
        ],
        "source": "习题课 第 24–25 页",
        "id": "cont-k12"
      },
      {
        "type": "formula",
        "label": "知识点 13",
        "title": "同阶与等价的系数比较",
        "statement": "若 $f\\sim ax^{m}$、$g\\sim bx^{n}$，则 $f$ 与 $g$ 同阶 $\\iff m=n$；此时 $\\frac{f}{g}\\to\\frac ab$。",
        "conditions": [],
        "conclusion": [
          "定参数题（如 1(2)、1(4)）本质就是「最低次项系数相等」。",
          "注意分子分母各取最低次项，而不是最高次项（$x\\to0$ 时最低次主导）。"
        ],
        "intuition": "$x\\to0$ 看最低次，$x\\to\\infty$ 看最高次——两个方向的「主导项」相反。",
        "proofIdea": [
          "① 把分子、分母分别化成 $ax^{m}+o(x^{m})$、$bx^{n}+o(x^{n})$。",
          "② 比较 $m,n$ 判断阶数。",
          "③ 同阶时比较系数。"
        ],
        "pitfalls": [
          "$x\\to0$ 时误取最高次项。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "习题课 第 1–3 页",
        "id": "cont-k13"
      }
    ]
  },
  {
    "number": "4.3",
    "bookChapter": "4",
    "title": "二十二题精解",
    "lead": "按课件顺序逐题给出答案、思路、步骤与易错点；折叠区是完整论证，默写时先自己写再对照。",
    "map": [
      "填空题",
      "求极限",
      "连续证明",
      "一致连续"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "example",
        "label": "题 1(1)",
        "title": "判阶：$\\sqrt{x+\\sqrt{x}}$ 是 $x$ 的几阶无穷小",
        "statement": "填空：当 $x\\to0^{+}$ 时，$\\sqrt{x+\\sqrt{x}}$ 是 $x$ 的 ______ 阶无穷小。",
        "conditions": [],
        "conclusion": [
          "答案：$\\frac14$ 阶。"
        ],
        "intuition": "根号套根号，先把 $\\sqrt{x}$ 提出来，整体就是 $x^{\\frac14}$。",
        "proofIdea": [
          "① $x+\\sqrt{x}=\\sqrt{x}(\\sqrt{x}+1)$。",
          "② $\\sqrt{x+\\sqrt{x}}=(\\sqrt{x})^{\\frac12}(\\sqrt{x}+1)^{\\frac12}=x^{\\frac14}(1+\\sqrt{x})^{\\frac12}$。",
          "③ $(1+\\sqrt{x})^{\\frac12}\\to1$，所以 $\\sqrt{x+\\sqrt{x}}\\sim x^{\\frac14}$。",
          "④ 阶数为 $\\frac14$。"
        ],
        "pitfalls": [
          "把 $x+\\sqrt{x}$ 近似成 $\\sqrt{x}$ 后忘记开方，得到 $\\frac12$ 阶。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "习题课 第 1 页",
        "id": "cont-ex-1a"
      },
      {
        "type": "example",
        "label": "题 1(2)",
        "title": "定参数：$(1-a\\sin^{2}x)^{\\frac13}-1\\sim1-\\cos x$",
        "statement": "填空：已知当 $x\\to0$ 时，$(1-a\\sin^{2}x)^{\\frac13}-1\\sim1-\\cos x$，则 $a=$ ______。",
        "conditions": [],
        "conclusion": [
          "答案：$a=-\\frac32$。"
        ],
        "intuition": "$(1+u)^{\\alpha}-1\\sim\\alpha u$，两边都化成 $x^{2}$ 的倍数再比系数。",
        "proofIdea": [
          "① $(1-a\\sin^{2}x)^{\\frac13}-1\\sim\\frac13(-a\\sin^{2}x)\\sim-\\frac{a}{3}x^{2}$。",
          "② $1-\\cos x\\sim\\frac{x^{2}}{2}$。",
          "③ 等价 ⇒ 系数相等：$-\\frac a3=\\frac12$。",
          "④ $a=-\\frac32$。"
        ],
        "pitfalls": [
          "把 $(1+u)^{\\frac13}-1$ 写成 $\\frac13u$ 时漏掉 $u=-a\\sin^{2}x$ 中的负号。"
        ],
        "dependencies": [
          "等价无穷小表"
        ],
        "source": "习题课 第 1 页",
        "id": "cont-ex-1b"
      },
      {
        "type": "example",
        "label": "题 1(3)",
        "title": "判阶：$e^{x\\cos x^{2}}-e^{x}$ 与 $x^{k}$ 同阶",
        "statement": "填空：已知当 $x\\to0$ 时，$e^{x\\cos x^{2}}-e^{x}$ 与 $x^{k}$ 是同阶无穷小，则 $k=$ ______。",
        "conditions": [],
        "conclusion": [
          "答案：$k=5$。"
        ],
        "intuition": "先提 $e^{x}$，再用 $e^{u}-1\\sim u$，最后用 $\\cos u-1\\sim-\\frac{u^{2}}{2}$。",
        "proofIdea": [
          "① 提公因子：$e^{x\\cos x^{2}}-e^{x}=e^{x}(e^{x(\\cos x^{2}-1)}-1)$。",
          "② $e^{u}-1\\sim u$，$u=x(\\cos x^{2}-1)$，所以原式 $\\sim x(\\cos x^{2}-1)$。",
          "③ $\\cos x^{2}-1\\sim-\\frac{(x^{2})^{2}}{2}=-\\frac{x^{4}}{2}$。",
          "④ 原式 $\\sim-\\frac{x^{5}}{2}$，故 $k=5$。"
        ],
        "pitfalls": [
          "只看到 $e^{x}$ 就写阶数为 $1$；忘记指数里还有 $\\cos x^{2}-1$。"
        ],
        "dependencies": [
          "等价无穷小",
          "$e^{u}-1\\sim u$"
        ],
        "source": "习题课 第 2 页",
        "id": "cont-ex-1c"
      },
      {
        "type": "example",
        "label": "题 1(4)",
        "title": "定参数：分式极限为 2，求 $a$ 与 $c$ 的关系",
        "statement": "填空：已知 $\\lim_{x\\to0}\\frac{a\\tan x+b(1-\\cos x)}{c\\ln(1-2x)+d(1-e^{-x^{2}})}=2$，$a^{2}+c^{2}\\neq0$，则 $a$ 与 $c$ 的关系为 ______。",
        "conditions": [],
        "conclusion": [
          "答案：$a=-4c$。"
        ],
        "intuition": "分子分母各取最低次项，比值就是系数比。",
        "proofIdea": [
          "① 分子：$a\\tan x\\sim ax$ 是一次项，$b(1-\\cos x)\\sim\\frac b2x^{2}$ 是二次项，最低次为 $ax$。",
          "② 分母：$c\\ln(1-2x)\\sim-2cx$，$d(1-e^{-x^{2}})\\sim dx^{2}$，最低次为 $-2cx$。",
          "③ 比值极限 $=\\frac{a}{-2c}=2$。",
          "④ 得 $a=-4c$。"
        ],
        "pitfalls": [
          "把 $1-e^{-x^{2}}$ 的符号搞反；$\\ln(1-2x)\\sim-2x$ 中的负号漏掉。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "习题课 第 3 页",
        "id": "cont-ex-1d"
      },
      {
        "type": "example",
        "label": "题 1(5)",
        "title": "分段点连续：求 $a$ 与 $b$",
        "statement": "填空：设 $f(x)=\\begin{cases}\\frac{\\sin(a(x-1))}{e^{x-1}-1},&x>1\\\\2,&x=1\\\\\\frac{\\ln(4-3x)}{b(x-1)},&x<1\\end{cases}$，若 $f$ 在 $x=1$ 连续，则 $a=$ ______，$b=$ ______。",
        "conditions": [],
        "conclusion": [
          "答案：$a=2$，$b=-\\frac32$。"
        ],
        "intuition": "分段点连续 = 左极限 = 右极限 = 函数值，三个都算出来联立。",
        "proofIdea": [
          "① 右极限：令 $t=x-1\\to0^{+}$，$\\frac{\\sin(at)}{e^{t}-1}\\sim\\frac{at}{t}=a$。",
          "② 左极限：$\\ln(4-3x)=\\ln(1-3(x-1))\\sim-3(x-1)$，故 $\\frac{\\ln(4-3x)}{b(x-1)}\\to-\\frac3b$。",
          "③ 连续 ⇒ 左 = 右 = $f(1)=2$。",
          "④ 由 $-\\frac3b=2$ 得 $b=-\\frac32$；由 $a=2$ 得 $a=2$。"
        ],
        "pitfalls": [
          "把 $\\ln(4-3x)$ 在 $x=1$ 处近似成 $\\ln1=0$ 就停住，没能提出 $\\ln(1-3t)$ 的一次项。"
        ],
        "dependencies": [
          "连续的定义",
          "等价无穷小"
        ],
        "source": "习题课 第 4 页",
        "id": "cont-ex-1e"
      },
      {
        "type": "example",
        "label": "题 1(6)",
        "title": "间断点定位与分类：三项分式 + arctan",
        "statement": "填空：设 $f(x)=\\arctan\\frac{1}{x-1}+\\frac{\\sin x}{x^{2}(\\pi-x)}$，则间断点为 ______，类型为 ______。",
        "conditions": [],
        "conclusion": [
          "$x=0$：第二类（无穷）间断点。",
          "$x=1$：第一类（跳跃）间断点。",
          "$x=\\pi$：第一类（可去）间断点。"
        ],
        "intuition": "可疑点来自分母 $x^{2}(\\pi-x)$ 与 $\\arctan\\frac{1}{x-1}$ 在 $x=1$ 的跳跃。",
        "proofIdea": [
          "① 可疑点：$x=0$、$x=1$、$x=\\pi$。",
          "② $x\\to0$：$\\frac{\\sin x}{x^{2}(\\pi-x)}\\sim\\frac{1}{\\pi x}\\to\\infty$，故 $x=0$ 为第二类（无穷）间断点。",
          "③ $x\\to1^{\\pm}$：$\\arctan\\frac{1}{x-1}\\to\\pm\\frac{\\pi}{2}$，另一项有限，左右极限不同，故 $x=1$ 为第一类跳跃间断点。",
          "④ $x\\to\\pi$：$\\sin x=\\sin(\\pi-x)\\sim\\pi-x$，另一项趋于 $\\frac{1}{\\pi^{2}}$，极限存在，故 $x=\\pi$ 为第一类可去间断点。"
        ],
        "pitfalls": [
          "漏掉 $x=1$：$\\arctan\\frac{1}{x-1}$ 在 $x=1$ 两侧分别趋于 $\\mp\\frac{\\pi}{2}$，是典型跳跃。"
        ],
        "dependencies": [
          "间断点分类",
          "等价无穷小"
        ],
        "source": "习题课 第 5 页",
        "id": "cont-ex-1f"
      },
      {
        "type": "example",
        "label": "题 1(7)",
        "title": "极限定义的函数：求间断点",
        "statement": "填空：设 $f(x)=\\lim_{t\\to+\\infty}\\frac{x+x^{2}e^{tx}}{\\sin x+e^{tx}}$（$x>-\\pi$），则 $f$ 的间断点为 ______，类型为 ______。",
        "conditions": [],
        "conclusion": [
          "$x=0$，第一类（跳跃）间断点。"
        ],
        "intuition": "按 $x>0$、$x=0$、$x<0$ 三种情况把 $e^{tx}$ 的极限算出来，先写成显式分段。",
        "proofIdea": [
          "① $x>0$：分子分母同除 $e^{tx}$，得 $f(x)=x^{2}$。",
          "② $x=0$：$e^{tx}=1$，$f(0)=\\frac{0}{0+1}=0$。",
          "③ $x<0$：$e^{tx}\\to0$，$f(x)=\\frac{x}{\\sin x}$。",
          "④ 在 $x=0$：右极限 $0$，左极限 $1$，左右有限不等 ⇒ 第一类跳跃间断点。"
        ],
        "pitfalls": [
          "忽略 $x=0$ 要单独算；$x>0$ 时把 $x$ 项也留下。"
        ],
        "dependencies": [
          "间断点分类",
          "极限的四则运算"
        ],
        "source": "习题课 第 6 页",
        "id": "cont-ex-1g"
      },
      {
        "type": "example",
        "label": "题 2(1)",
        "title": "求极限：$(2-x)^{\\sec\\frac{\\pi x}{2}}$",
        "statement": "求 $\\lim_{x\\to1}(2-x)^{\\sec\\frac{\\pi x}{2}}$。",
        "conditions": [],
        "conclusion": [
          "$e^{\\frac{2}{\\pi}}$。"
        ],
        "intuition": "$1^{\\infty}$ 型：$2-x=1+(1-x)$，指数 $\\sec\\frac{\\pi x}{2}\\sim\\frac{2}{\\pi(1-x)}$。",
        "proofIdea": [
          "① 令 $t=1-x\\to0$，底 $=1+t$。",
          "② $\\sec\\frac{\\pi x}{2}=\\frac{1}{\\cos(\\frac{\\pi}{2}-\\frac{\\pi t}{2})}=\\frac{1}{\\sin\\frac{\\pi t}{2}}\\sim\\frac{2}{\\pi t}$。",
          "③ 原式 $\\sim(1+t)^{\\frac{2}{\\pi t}}\\to e^{\\frac{2}{\\pi}}$。"
        ],
        "pitfalls": [
          "$\\sec$ 的角变换写错：$\\frac{\\pi x}{2}=\\frac{\\pi}{2}-\\frac{\\pi t}{2}$。"
        ],
        "dependencies": [
          "$1^{\\infty}$ 型",
          "等价无穷小"
        ],
        "source": "习题课 第 7 页",
        "id": "cont-ex-2a"
      },
      {
        "type": "example",
        "label": "题 2(2)",
        "title": "求极限：$(\\sin\\frac4{x^{2}}+\\cos\\frac2x)^{x^{2}}$",
        "statement": "求 $\\lim_{x\\to\\infty}\\left(\\sin\\frac{4}{x^{2}}+\\cos\\frac{2}{x}\\right)^{x^{2}}$。",
        "conditions": [],
        "conclusion": [
          "$e^{2}$。"
        ],
        "intuition": "$1^{\\infty}$ 型：底 $=1+u$，$u\\sim\\frac{4}{x^{2}}-\\frac{2}{x^{2}}=\\frac{2}{x^{2}}$。",
        "proofIdea": [
          "① $u=\\sin\\frac{4}{x^{2}}+\\cos\\frac{2}{x}-1$。",
          "② $\\sin\\frac{4}{x^{2}}\\sim\\frac{4}{x^{2}}$，$\\cos\\frac{2}{x}-1\\sim-\\frac{2}{x^{2}}$，故 $u\\sim\\frac{2}{x^{2}}$。",
          "③ $x^{2}\\ln(1+u)\\sim x^{2}u\\to2$。",
          "④ 原式 $=e^{2}$。"
        ],
        "pitfalls": [
          "把 $\\cos\\frac2x-1$ 的等价写成 $\\frac{2}{x^{2}}$，符号错。"
        ],
        "dependencies": [
          "$1^{\\infty}$ 型",
          "等价无穷小"
        ],
        "source": "习题课 第 8 页",
        "id": "cont-ex-2b"
      },
      {
        "type": "example",
        "label": "题 2(3)",
        "title": "求极限：幂平均型 $1^{\\infty}$",
        "statement": "求 $\\lim_{x\\to0}\\left(\\frac{a^{x}+b^{x}+c^{x}}{3}\\right)^{\\frac1x}$（$a,b,c>0$）。",
        "conditions": [],
        "conclusion": [
          "$(abc)^{\\frac13}$。"
        ],
        "intuition": "$1^{\\infty}$ 型：底 $=1+\\frac{a^{x}+b^{x}+c^{x}-3}{3}$，再用 $a^{x}-1\\sim x\\ln a$。",
        "proofIdea": [
          "① 底写成 $1+u$，$u=\\frac{a^{x}+b^{x}+c^{x}-3}{3}\\to0$。",
          "② $\\frac1x\\ln(1+u)\\sim\\frac{u}{x}=\\frac13\\cdot\\frac{a^{x}-1+b^{x}-1+c^{x}-1}{x}$。",
          "③ 用 $\\frac{a^{x}-1}{x}\\to\\ln a$，得 $\\frac13(\\ln a+\\ln b+\\ln c)=\\ln(abc)^{\\frac13}$。",
          "④ 原式 $=(abc)^{\\frac13}$。"
        ],
        "pitfalls": [
          "直接说「算术平均的极限是几何平均」而不给证明。"
        ],
        "dependencies": [
          "$1^{\\infty}$ 型",
          "$a^{x}-1\\sim x\\ln a$"
        ],
        "source": "习题课 第 9 页",
        "id": "cont-ex-2c"
      },
      {
        "type": "example",
        "label": "题 2(4)",
        "title": "求极限：两个根式之差除以 $x$",
        "statement": "求 $\\lim_{x\\to0}\\frac{\\sqrt[n]{1-ax}-\\sqrt[m]{1+bx}}{x}$（$a,b$ 为常数，$m,n$ 为正整数）。",
        "conditions": [],
        "conclusion": [
          "$-\\frac an-\\frac bm$。"
        ],
        "intuition": "两个根式各减 1 再补回来，分别用 $(1+u)^{\\alpha}-1\\sim\\alpha u$。",
        "proofIdea": [
          "① 拆成 $\\frac{(\\sqrt[n]{1-ax}-1)-(\\sqrt[m]{1+bx}-1)}{x}$。",
          "② $\\sqrt[n]{1-ax}-1\\sim\\frac1n(-ax)=-\\frac{a}{n}x$。",
          "③ $\\sqrt[m]{1+bx}-1\\sim\\frac1m(bx)=\\frac{b}{m}x$。",
          "④ 相减除以 $x$，得 $-\\frac an-\\frac bm$。"
        ],
        "pitfalls": [
          "先通分或用洛必达，越算越复杂；直接用 $(1+u)^{\\alpha}-1\\sim\\alpha u$ 最快。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "习题课 第 10 页",
        "id": "cont-ex-2d"
      },
      {
        "type": "example",
        "label": "题 2(5)",
        "title": "求极限：对数和除以三角式",
        "statement": "求 $\\lim_{x\\to0}\\frac{\\ln(1+x)+\\ln(1-x)}{1-\\cos x+\\sin^{2}x}$。",
        "conditions": [],
        "conclusion": [
          "$-\\frac23$。"
        ],
        "intuition": "分子合并成 $\\ln(1-x^{2})\\sim-x^{2}$，分母逐项降到 $x^{2}$。",
        "proofIdea": [
          "① 分子 $=\\ln(1-x^{2})\\sim-x^{2}$。",
          "② 分母 $1-\\cos x\\sim\\frac{x^{2}}{2}$，$\\sin^{2}x\\sim x^{2}$，合计 $\\frac32x^{2}$。",
          "③ 比值 $=-\\frac{1}{3/2}=-\\frac23$。"
        ],
        "pitfalls": [
          "把 $\\ln(1+x)+\\ln(1-x)$ 分别等价成 $x+(-x)=0$，得到 $0/0$ 假象。"
        ],
        "dependencies": [
          "等价无穷小",
          "对数运算"
        ],
        "source": "习题课 第 11 页",
        "id": "cont-ex-2e"
      },
      {
        "type": "example",
        "label": "题 3",
        "title": "已知极限反推：求 $\\lim\\frac{f(x)}{x^{2}}$",
        "statement": "已知 $\\lim_{x\\to0}\\frac{\\ln\\left(1+\\frac{f(x)}{\\sin2x}\\right)}{e^{x}-1}=5$，求 $\\lim_{x\\to0}\\frac{f(x)}{x^{2}}$。",
        "conditions": [],
        "conclusion": [
          "$10$。"
        ],
        "intuition": "分母 $\\sim x$，所以 $\\ln(1+u)\\sim u$ 给出 $\\frac{f}{\\sin2x}\\sim5x$，再乘 $\\sin2x\\sim2x$。",
        "proofIdea": [
          "① $e^{x}-1\\sim x$，故 $\\ln\\left(1+\\frac{f}{\\sin2x}\\right)\\sim5x\\to0$。",
          "② 于是 $\\frac{f}{\\sin2x}\\to0$，由 $\\ln(1+u)\\sim u$ 得 $\\frac{f}{\\sin2x}\\sim5x$。",
          "③ $f(x)\\sim5x\\sin2x\\sim10x^{2}$。",
          "④ 所以 $\\lim\\frac{f}{x^{2}}=10$。"
        ],
        "pitfalls": [
          "忽略「$\\frac{f}{\\sin2x}\\to0$」这一步，直接对 $\\ln(1+u)$ 用等价会失去合法性说明。"
        ],
        "dependencies": [
          "等价无穷小",
          "已知极限反推"
        ],
        "source": "习题课 第 12 页",
        "id": "cont-ex-3"
      },
      {
        "type": "example",
        "label": "题 4",
        "title": "和式夹逼：$\\sum\\frac{e^{\\frac{k+1}{n}}}{n+\\frac{k^{2}}{n^{2}}}$",
        "statement": "设 $x_n=\\sum_{k=0}^{n-1}\\frac{e^{\\frac{k+1}{n}}}{n+\\frac{k^{2}}{n^{2}}}$，求 $\\lim_{n\\to\\infty}x_n$。",
        "conditions": [],
        "conclusion": [
          "$e-1$。"
        ],
        "intuition": "分母夹在 $n$ 与 $n+1$ 之间，把 $x_n$ 夹成「常数 ÷ 等比和」。",
        "proofIdea": [
          "① 对 $0\\le k\\le n-1$，$\\frac{1}{n+1}\\le\\frac{1}{n+\\frac{k^{2}}{n^{2}}}\\le\\frac1n$。",
          "② 记 $S_n=\\sum_{k=0}^{n-1}e^{\\frac{k+1}{n}}=\\frac{e^{\\frac1n}(1-e)}{1-e^{\\frac1n}}$。",
          "③ 夹逼 $\\frac{S_n}{n+1}\\le x_n\\le\\frac{S_n}{n}$。",
          "④ $\\frac{S_n}{n}\\to e-1$（因 $1-e^{\\frac1n}\\sim-\\frac1n$），左端同极限，故 $x_n\\to e-1$。"
        ],
        "pitfalls": [
          "等比求和分子写成 $1-e^{n}$；$S_n$ 的公比是 $e^{\\frac1n}$ 不是 $e$。"
        ],
        "dependencies": [
          "夹逼准则",
          "等比数列求和"
        ],
        "source": "习题课 第 13 页",
        "id": "cont-ex-4"
      },
      {
        "type": "example",
        "label": "题 5",
        "title": "函数方程 + 在 0 连续 ⇒ 处处连续",
        "statement": "设 $f$ 在 $\\mathbb{R}$ 上有定义，对任意 $x,y\\in\\mathbb{R}$ 有 $f(x+y)=f(x)f(y)$，且 $f$ 在 $x=0$ 连续，证明 $f$ 在 $\\mathbb{R}$ 上连续。",
        "conditions": [],
        "conclusion": [
          "对任意 $x_0$，$f(x_0+\\Delta x)-f(x_0)=f(x_0)(f(\\Delta x)-f(0))\\to0$，故连续。"
        ],
        "intuition": "函数方程把「任一点的增量」转成「0 点的增量」。",
        "proofIdea": [
          "① 由 $f(0)=f(0)^{2}$，若 $f\\equiv0$ 已连续；否则 $f(0)=1$。",
          "② 对任意 $x_0$，$f(x_0+\\Delta x)-f(x_0)=f(x_0)f(\\Delta x)-f(x_0)=f(x_0)[f(\\Delta x)-f(0)]$。",
          "③ 由 $f$ 在 $0$ 连续，$f(\\Delta x)\\to f(0)$，故增量 $\\to0$。",
          "④ $x_0$ 任意，故 $f$ 在 $\\mathbb{R}$ 上连续。"
        ],
        "pitfalls": [
          "忘记先确定 $f(0)=1$；直接写「显然连续」。"
        ],
        "dependencies": [
          "连续的定义",
          "函数方程"
        ],
        "source": "习题课 第 14 页",
        "id": "cont-ex-5"
      },
      {
        "type": "example",
        "label": "题 6",
        "title": "Dirichlet 型函数：仅在 $x=0$ 连续",
        "statement": "设 $f(x)=\\begin{cases}0,&x\\in\\mathbb{Q}\\\\ x,&x\\in\\mathbb{R}\\setminus\\mathbb{Q}\\end{cases}$，证明 $f$ 仅在 $x=0$ 处连续。",
        "conditions": [],
        "conclusion": [
          "在 $x=0$ 连续；其余点极限不存在，故不连续。"
        ],
        "intuition": "有理点函数值为 $0$，无理点函数值为点本身；用两列逼近同一 $x_0$，极限不同。",
        "proofIdea": [
          "① $x=0$：$|f(x)-f(0)|=|f(x)|\\le|x|<\\varepsilon$，取 $\\delta=\\varepsilon$。",
          "② $x_0\\ne0$：取有理列 $x_n\\to x_0$，$f(x_n)=0\\to0$。",
          "③ 取无理列 $y_n\\to x_0$，$f(y_n)=y_n\\to x_0\\ne0$。",
          "④ 两子列极限不同 ⇒ $x_0$ 处极限不存在 ⇒ 不连续。"
        ],
        "pitfalls": [
          "只用「任意点附近既有有理数又有无理数」定性说明，没有构造两列。"
        ],
        "dependencies": [
          "归结原则",
          "连续的定义"
        ],
        "source": "习题课 第 15 页",
        "id": "cont-ex-6"
      },
      {
        "type": "example",
        "label": "题 7",
        "title": "零点定理：$f(\\xi)=f(\\xi-a)$",
        "statement": "设 $f$ 在 $[-a,a]$ 上连续，且 $f(-a)=f(a)$，证明至少存在一点 $\\xi\\in[0,a]$，使 $f(\\xi)=f(\\xi-a)$。",
        "conditions": [],
        "conclusion": [
          "构造函数 $F(x)=f(x)-f(x-a)$，$F(0)F(a)\\le0$，由零点定理得证。"
        ],
        "intuition": "把要证的 $f(\\xi)-f(\\xi-a)=0$ 直接当成辅助函数。",
        "proofIdea": [
          "① 令 $F(x)=f(x)-f(x-a)$，$x\\in[0,a]$，$F$ 连续。",
          "② $F(0)=f(0)-f(-a)$，$F(a)=f(a)-f(0)$。",
          "③ $F(0)+F(a)=f(a)-f(-a)=0$，故 $F(0)F(a)=-F(0)^{2}\\le0$。",
          "④ 由零点定理，存在 $\\xi\\in[0,a]$ 使 $F(\\xi)=0$。"
        ],
        "pitfalls": [
          "忘记验证 $f(x-a)$ 的自变量 $-a\\le x-a\\le0$ 落在 $f$ 的定义区间内。"
        ],
        "dependencies": [
          "零点定理"
        ],
        "source": "习题课 第 16 页",
        "id": "cont-ex-7"
      },
      {
        "type": "example",
        "label": "题 8",
        "title": "方程至少三个实根",
        "statement": "证明：方程 $\\frac{1}{x-a}+\\frac{1}{x-b}+\\frac{1}{x-c}=k$（$a<b<c$，$k\\ne0$）至少有三个实根。",
        "conditions": [],
        "conclusion": [
          "对 $k>0$，在 $(a,b)$、$(b,c)$、$(c,+\\infty)$ 各有一根；$k<0$ 时在 $(-\\infty,a)$、$(a,b)$、$(b,c)$ 各有一根。"
        ],
        "intuition": "每个分母零点处函数值跑向 $\\pm\\infty$，用单侧极限定号，每个区间夹一根。",
        "proofIdea": [
          "① 令 $f(x)=\\frac{1}{x-a}+\\frac{1}{x-b}+\\frac{1}{x-c}-k$，在 $x\\ne a,b,c$ 处连续。",
          "② $k>0$：$f(a^{+})=+\\infty$，$f(b^{-})=-\\infty$ ⇒ $(a,b)$ 有根。",
          "③ $f(b^{+})=+\\infty$，$f(c^{-})=-\\infty$ ⇒ $(b,c)$ 有根。",
          "④ $f(c^{+})=+\\infty$，$f(+\\infty)=-k<0$ ⇒ $(c,+\\infty)$ 有根。",
          "⑤ $k<0$ 时在 $(-\\infty,a)$、$(a,b)$、$(b,c)$ 各一根，同理。"
        ],
        "pitfalls": [
          "只证了 $(a,b)$、$(b,c)$ 两根，漏掉无穷远那一支；$f(b^{-})$ 的符号写错（$\\frac{1}{x-b}\\to-\\infty$）。"
        ],
        "dependencies": [
          "零点定理",
          "单侧极限"
        ],
        "source": "习题课 第 17–18 页",
        "id": "cont-ex-8"
      },
      {
        "type": "example",
        "label": "题 9",
        "title": "两端趋于 $-\\infty$ ⇒ 取到最大值",
        "statement": "设 $f$ 在 $(-\\infty,+\\infty)$ 内连续，且 $\\lim_{x\\to-\\infty}f(x)=\\lim_{x\\to+\\infty}f(x)=-\\infty$，证明 $f$ 在 $(-\\infty,+\\infty)$ 内取到最大值。",
        "conditions": [],
        "conclusion": [
          "取 $M=|f(0)|+1$，把尾部砍掉，在闭区间 $[X_1,X_2]$ 上用最值定理。"
        ],
        "intuition": "两端都掉到 $-\\infty$，最大值只能在中间某段闭区间里取。",
        "proofIdea": [
          "① 由 $x\\to-\\infty$ 时 $f\\to-\\infty$，存在 $X_1<0$，当 $x<X_1$ 时 $f(x)<-(|f(0)|+1)$。",
          "② 同理存在 $X_2>0$，当 $x>X_2$ 时 $f(x)<-(|f(0)|+1)$。",
          "③ $f$ 在 $[X_1,X_2]$ 上连续，取到最大值 $f(\\xi)\\ge f(0)$。",
          "④ 区间外 $f(x)<-|f(0)|-1<f(0)\\le f(\\xi)$，故 $f(\\xi)$ 是全局最大值。"
        ],
        "pitfalls": [
          "只说「由最值定理」而不先构造 $X_1,X_2$ 把区域变成闭区间。"
        ],
        "dependencies": [
          "最值定理",
          "极限的定义"
        ],
        "source": "习题课 第 19 页",
        "id": "cont-ex-9"
      },
      {
        "type": "example",
        "label": "题 10",
        "title": "不一致连续：$\\frac1x\\cos\\frac1x$",
        "statement": "证明函数 $f(x)=\\frac1x\\cos\\frac1x$ 在 $(0,1)$ 上不一致连续。",
        "conditions": [],
        "conclusion": [
          "取两列点使 $|x_n'-x_n''|\\to0$ 但 $|f(x_n')-f(x_n'')|=2n\\pi\\to\\infty$。"
        ],
        "intuition": "在 $x=0$ 附近振荡越来越快，取相邻的波峰与零点即可。",
        "proofIdea": [
          "① 取 $x_n'=\\frac{1}{2n\\pi}$，$x_n''=\\frac{1}{2n\\pi+\\frac{\\pi}{2}}$。",
          "② $|x_n'-x_n''|=\\frac{\\pi/2}{2n\\pi(2n\\pi+\\pi/2)}\\to0$。",
          "③ $f(x_n')=2n\\pi\\cos(2n\\pi)=2n\\pi$，$f(x_n'')=0$。",
          "④ 取 $\\varepsilon_0=1$，对任意 $\\delta>0$ 存在 $n$ 使 $|x'-x''|<\\delta$ 而 $|f(x')-f(x'')|\\ge1$。"
        ],
        "pitfalls": [
          "两列点取成同阶的 $\\frac1n$，算不出函数值差。"
        ],
        "dependencies": [
          "一致连续定义",
          "归结原则"
        ],
        "source": "习题课 第 20 页",
        "id": "cont-ex-10"
      },
      {
        "type": "example",
        "label": "题 11",
        "title": "一致连续：$\\sqrt{x}$ 在 $[0,+\\infty)$",
        "statement": "证明函数 $f(x)=\\sqrt{x}$ 在 $[0,+\\infty)$ 上一致连续。",
        "conditions": [],
        "conclusion": [
          "用 $|\\sqrt{x_1}-\\sqrt{x_2}|\\le\\sqrt{|x_1-x_2|}$，取 $\\delta=\\varepsilon^{2}$。"
        ],
        "intuition": "分子有理化把「两个根号之差」变成「两点之差 ÷ 正数」，从而控制住。",
        "proofIdea": [
          "① $x_1,x_2\\ge0$ 时 $|\\sqrt{x_1}-\\sqrt{x_2}|=\\frac{|x_1-x_2|}{\\sqrt{x_1}+\\sqrt{x_2}}$。",
          "② 由 $|\\sqrt{x_1}-\\sqrt{x_2}|^{2}\\le|x_1-x_2|$ 得 $|\\sqrt{x_1}-\\sqrt{x_2}|\\le\\sqrt{|x_1-x_2|}$。",
          "③ $\\forall\\varepsilon>0$ 取 $\\delta=\\varepsilon^{2}$。",
          "④ 当 $|x_1-x_2|<\\delta$ 时 $|f(x_1)-f(x_2)|\\le\\sqrt{|x_1-x_2|}<\\varepsilon$。"
        ],
        "pitfalls": [
          "在 $x=0$ 附近说「导数无界」就断言不一致连续——导数无界只是充分条件误用。"
        ],
        "dependencies": [
          "一致连续定义"
        ],
        "source": "习题课 第 21 页",
        "id": "cont-ex-11"
      },
      {
        "type": "example",
        "label": "题 12",
        "title": "极限定义的函数：是否连续",
        "statement": "设 $f(x)=\\lim_{n\\to\\infty}\\frac{\\ln(e^{n}+x^{n})}{n}$（$x>0$），问 $f(x)$ 在其定义域内是否连续。",
        "conditions": [],
        "conclusion": [
          "$f(x)=\\begin{cases}1,&0<x\\le e\\\\\\ln x,&x>e\\end{cases}$，在 $(0,+\\infty)$ 上连续。"
        ],
        "intuition": "把 $\\frac{\\ln A}{n}$ 写成 $\\ln A^{1/n}$，内层就是 $\\max\\{e,x\\}$。",
        "proofIdea": [
          "① $\\frac{\\ln(e^{n}+x^{n})}{n}=\\ln(e^{n}+x^{n})^{\\frac1n}=\\ln\\sqrt[n]{e^{n}+x^{n}}$。",
          "② $\\sqrt[n]{e^{n}+x^{n}}=\\max\\{e,x\\}\\cdot\\left(1+\\left(\\frac{\\min}{\\max}\\right)^{n}\\right)^{\\frac1n}\\to\\max\\{e,x\\}$。",
          "③ 故 $f(x)=\\ln\\max\\{e,x\\}$ 分段：$0<x<e$ 时为 $1$；$x\\ge e$ 时为 $\\ln x$。",
          "④ 在 $x=e$ 处验证左右极限都为 $1$，故连续。"
        ],
        "pitfalls": [
          "直接对 $\\frac{\\ln}{n}$ 求极限时只保留 $x^{n}$，漏掉 $x<e$ 的情形。"
        ],
        "dependencies": [
          "极限定义的函数",
          "连续的定义",
          "夹逼"
        ],
        "source": "习题课 第 22 页",
        "id": "cont-ex-12"
      }
    ]
  },
  {
    "number": "4.4",
    "bookChapter": "4",
    "title": "易错点清单",
    "lead": "这 22 题里最容易失分的地方集中列在这里。考前只翻这一页，比刷十道新题有用。",
    "map": [
      "结构",
      "条件",
      "分类",
      "边界"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "pitfall",
        "label": "易错 1",
        "title": "在加减法内部直接用等价无穷小",
        "statement": "看到 $e^{x\\cos x^{2}}-e^{x}$ 或 $\\ln(1+x)+\\ln(1-x)$ 就把每一项各自换成等价无穷小，主项相消后得到 $0$。",
        "conditions": [],
        "conclusion": [
          "先合并：提公因子、用对数运算合并、通分。",
          "必要时用泰勒展开到主项相消后的那一阶。"
        ],
        "intuition": "等价无穷小是「乘除的许可证」，不是「加减的许可证」。",
        "proofIdea": [
          "① 先看结构是乘除还是加减。",
          "② 加减先化乘积。",
          "③ 再逐块替换。"
        ],
        "pitfalls": [
          "1(3) 必须提 $e^{x}$；2(5) 必须合并成 $\\ln(1-x^{2})$。"
        ],
        "dependencies": [
          "等价无穷小"
        ],
        "source": "习题课 第 2、11 页",
        "id": "cont-p1"
      },
      {
        "type": "pitfall",
        "label": "易错 2",
        "title": "$1^{\\infty}$ 公式记错",
        "statement": "把 $u^{v}\\to e^{\\lim uv}$ 当成公式，正确写法是 $e^{\\lim(u-1)v}$。",
        "conditions": [],
        "conclusion": [
          "底数写成 $1+w$，$w=u-1$。",
          "答案 $=e^{\\lim wv}$。"
        ],
        "intuition": "指数上的极限是「底数减 1 再乘指数」，不是「底数乘指数」。",
        "proofIdea": [
          "① 写 $u=1+w$。",
          "② 算 $\\lim wv$。",
          "③ 写成 $e^{\\lim wv}$。"
        ],
        "pitfalls": [
          "2(1)、2(2)、2(3) 都是这一条。"
        ],
        "dependencies": [
          "第二重要极限"
        ],
        "source": "习题课 第 7–9 页",
        "id": "cont-p2"
      },
      {
        "type": "pitfall",
        "label": "易错 3",
        "title": "间断点漏检、分类只看 $f(x_0)$",
        "statement": "只盯分母零点，漏掉 $\\arctan\\frac{1}{x-1}$ 的跳跃；或只看函数值是否等于极限。",
        "conditions": [],
        "conclusion": [
          "分母零点、分段点、$\\arctan\\frac{1}{x-x_0}$、极限定义函数、$\\ln$ 真数零点，都要列。",
          "分类只由左右极限决定。"
        ],
        "intuition": "间断点的「类型」与 $f(x_0)$ 无关，只与左右极限有关。",
        "proofIdea": [
          "① 列全可疑点。",
          "② 逐点算左右极限。",
          "③ 再判是否可去。"
        ],
        "pitfalls": [
          "1(6) 漏 $x=1$；1(7) 漏 $x=0$。"
        ],
        "dependencies": [
          "间断点分类"
        ],
        "source": "习题课 第 5–6 页",
        "id": "cont-p3"
      },
      {
        "type": "pitfall",
        "label": "易错 4",
        "title": "连续性证明漏掉「任意性」",
        "statement": "在某个 $x_0$ 证完连续就写「所以 $f$ 在区间上连续」。",
        "conditions": [],
        "conclusion": [
          "点连续 → 区间连续，必须补一句「$x_0$ 任意」。",
          "函数方程题先确定 $f(0)$。"
        ],
        "intuition": "区间连续的定义是全称命题，缺了「任意」就只证了一个点。",
        "proofIdea": [
          "① 证 $x_0$ 处连续。",
          "② 明确 $x_0$ 是任取的。",
          "③ 收尾写「故在区间上连续」。"
        ],
        "pitfalls": [
          "题 5 的收尾句不能省。"
        ],
        "dependencies": [
          "连续的定义"
        ],
        "source": "习题课 第 14 页",
        "id": "cont-p4"
      },
      {
        "type": "pitfall",
        "label": "易错 5",
        "title": "零点定理条件不完整",
        "statement": "只写「由零点定理存在 $\\xi$」，不验证闭区间与连续，端点值用「显然」带过。",
        "conditions": [],
        "conclusion": [
          "验证 $F$ 在闭区间上连续。",
          "端点值或单侧极限要算出符号。"
        ],
        "intuition": "零点定理是「存在性」工具，前提不满足时结论可能为假。",
        "proofIdea": [
          "① 写出 $F$。",
          "② 验证连续。",
          "③ 算端点符号。",
          "④ 引用定理。"
        ],
        "pitfalls": [
          "题 7、题 8。"
        ],
        "dependencies": [
          "零点定理"
        ],
        "source": "习题课 第 16–18 页",
        "id": "cont-p5"
      },
      {
        "type": "pitfall",
        "label": "易错 6",
        "title": "最值题不砍尾",
        "statement": "对无界区间直接引用最值定理。",
        "conditions": [],
        "conclusion": [
          "先用 $x\\to\\pm\\infty$ 的极限构造 $X_1,X_2$，把区间截成闭区间。"
        ],
        "intuition": "定理只对闭区间成立，无界区间要先「截断」。",
        "proofIdea": [
          "① 取 $M=|f(0)|+1$。",
          "② 找 $X_1,X_2$。",
          "③ 在 $[X_1,X_2]$ 用定理。",
          "④ 比较区间外。"
        ],
        "pitfalls": [
          "题 9。"
        ],
        "dependencies": [
          "最值定理"
        ],
        "source": "习题课 第 19 页",
        "id": "cont-p6"
      },
      {
        "type": "pitfall",
        "label": "易错 7",
        "title": "把连续当一致连续",
        "statement": "开区间上连续就断言一致连续；或证明里 $\\delta$ 依赖 $x$。",
        "conditions": [],
        "conclusion": [
          "一致连续要求 $\\delta$ 只依赖 $\\varepsilon$。",
          "反证要么用两列点，要么用端点附近导数无界。"
        ],
        "intuition": "连续是「逐点」，一致连续是「统一」。",
        "proofIdea": [
          "① 证一致：找与 $x$ 无关的 $\\delta$。",
          "② 证不一致：取两列点。"
        ],
        "pitfalls": [
          "题 10 与题 11 是一对反例与正例。"
        ],
        "dependencies": [
          "一致连续定义"
        ],
        "source": "习题课 第 20–21 页",
        "id": "cont-p7"
      },
      {
        "type": "pitfall",
        "label": "易错 8",
        "title": "夹逼两端不同阶",
        "statement": "把和式放成 $0\\le x_n\\le n$，两端不相等，等于没夹。",
        "conditions": [],
        "conclusion": [
          "两端必须同阶同极限。",
          "分母夹最小/最大，分子用公式求和。"
        ],
        "intuition": "夹逼的价值在于两端都算得出来且相等。",
        "proofIdea": [
          "① 造两端。",
          "② 求两端极限。",
          "③ 相等才下结论。"
        ],
        "pitfalls": [
          "题 4。"
        ],
        "dependencies": [
          "夹逼准则"
        ],
        "source": "习题课 第 13 页",
        "id": "cont-p8"
      },
      {
        "type": "pitfall",
        "label": "易错 9",
        "title": "分段点连续只写左右极限",
        "statement": "算出左右极限相等就结束，忘记写「且等于 $f(x_0)$」。",
        "conditions": [],
        "conclusion": [
          "连续 = 左极限 = 右极限 = 函数值，三个都要写。"
        ],
        "intuition": "分段函数的连续性判定是三个量相等，不是两个。",
        "proofIdea": [
          "① 左极限。",
          "② 右极限。",
          "③ 函数值。",
          "④ 三者相等。"
        ],
        "pitfalls": [
          "1(5)、1(7)。"
        ],
        "dependencies": [
          "连续的定义"
        ],
        "source": "习题课 第 4、6 页",
        "id": "cont-p9"
      }
    ]
  }
]
);


Object.assign(window.MATH_REVIEW_PROOFS = window.MATH_REVIEW_PROOFS || {}, 
{
  "cont-ex-1a": [
    "$\\lim_{x\\to0^{+}}\\frac{\\sqrt{x+\\sqrt{x}}}{x^{1/4}}=\\lim_{x\\to0^{+}}\\sqrt{\\frac{x+\\sqrt{x}}{\\sqrt{x}}}=\\lim_{x\\to0^{+}}\\sqrt{\\sqrt{x}+1}=1$。",
    "由定义，$\\sqrt{x+\\sqrt{x}}$ 与 $x^{1/4}$ 同阶，故为 $\\frac14$ 阶无穷小。"
  ],
  "cont-ex-1b": [
    "$x\\to0$ 时 $\\sin^{2}x\\sim x^{2}$，故 $(1-a\\sin^{2}x)^{\\frac13}-1\\sim\\frac13(-a\\sin^{2}x)\\sim-\\frac{a}{3}x^{2}$。",
    "又 $1-\\cos x\\sim\\frac{x^{2}}{2}$。",
    "由 $\\sim$ 的传递性得 $-\\frac{a}{3}x^{2}\\sim\\frac{x^{2}}{2}$，即 $a=-\\frac32$。"
  ],
  "cont-ex-1c": [
    "$e^{x\\cos x^{2}}-e^{x}=e^{x}\\big(e^{x(\\cos x^{2}-1)}-1\\big)$。",
    "因 $x(\\cos x^{2}-1)\\to0$，由 $e^{u}-1\\sim u$ 得 $e^{x(\\cos x^{2}-1)}-1\\sim x(\\cos x^{2}-1)$。",
    "又 $\\cos x^{2}-1\\sim-\\frac{x^{4}}{2}$，故原式 $\\sim e^{x}\\cdot x\\cdot\\left(-\\frac{x^{4}}{2}\\right)\\sim-\\frac{x^{5}}{2}$（$e^{x}\\to1$）。",
    "所以 $k=5$。"
  ],
  "cont-ex-1d": [
    "分子 $=ax+O(x^{2})$，分母 $=-2cx+O(x^{2})$。",
    "因此 $\\lim\\frac{a\\tan x+b(1-\\cos x)}{c\\ln(1-2x)+d(1-e^{-x^{2}})}=\\lim\\frac{ax+O(x^{2})}{-2cx+O(x^{2})}=\\frac{a}{-2c}$。",
    "由 $\\frac{a}{-2c}=2$ 得 $a=-4c$。"
  ],
  "cont-ex-1e": [
    "右极限：令 $t=x-1$，$\\lim_{x\\to1^{+}}\\frac{\\sin(a(x-1))}{e^{x-1}-1}=\\lim_{t\\to0^{+}}\\frac{\\sin at}{e^{t}-1}=\\lim\\frac{at}{t}=a$。",
    "左极限：$\\ln(4-3x)=\\ln\\big(1-3(x-1)\\big)\\sim-3(x-1)$，故 $\\lim_{x\\to1^{-}}\\frac{\\ln(4-3x)}{b(x-1)}=-\\frac{3}{b}$。",
    "由连续性，$-\\frac3b=2$ 且 $a=2$，解得 $b=-\\frac32$。"
  ],
  "cont-ex-1f": [
    "$x\\to0$ 时 $\\frac{\\sin x}{x^{2}(\\pi-x)}\\sim\\frac{x}{x^{2}\\pi}=\\frac{1}{\\pi x}\\to\\infty$，而 $\\arctan\\frac{1}{x-1}\\to-\\frac{\\pi}{4}$，故 $x=0$ 为第二类无穷间断点。",
    "$x\\to1^{+}$ 时 $\\arctan\\frac1{x-1}\\to\\frac{\\pi}{2}$，$x\\to1^{-}$ 时趋于 $-\\frac{\\pi}{2}$；另一项在 $x=1$ 连续，值为 $\\frac{\\sin1}{\\pi-1}$，左右极限有限但不等，故为第一类跳跃间断点。",
    "$x\\to\\pi$ 时 $\\sin x=\\sin(\\pi-x)\\sim\\pi-x$，$\\frac{\\sin x}{x^{2}(\\pi-x)}\\to\\frac{1}{\\pi^{2}}$，$\\arctan\\frac1{\\pi-1}$ 为常数，极限存在，故为第一类可去间断点。"
  ],
  "cont-ex-1g": [
    "当 $x>0$，$e^{tx}\\to+\\infty$，$f(x)=\\lim\\frac{x/e^{tx}+x^{2}}{\\sin x/e^{tx}+1}=x^{2}$。",
    "当 $x=0$，$f(0)=\\lim\\frac{0+0}{0+1}=0$。",
    "当 $x<0$，$e^{tx}\\to0$，$f(x)=\\frac{x}{\\sin x}$。",
    "于是 $f(0^{+})=0$，$f(0^{-})=1$，左右极限都有限但不相等，故 $x=0$ 是第一类跳跃间断点；其余点 $f$ 为初等函数且连续。"
  ],
  "cont-ex-2a": [
    "设 $t=1-x$，则 $x\\to1$ 时 $t\\to0$，$2-x=1+t$。",
    "$\\cos\\frac{\\pi x}{2}=\\cos\\left(\\frac{\\pi}{2}-\\frac{\\pi t}{2}\\right)=\\sin\\frac{\\pi t}{2}\\sim\\frac{\\pi t}{2}$，故 $\\sec\\frac{\\pi x}{2}\\sim\\frac{2}{\\pi t}$。",
    "于是 $(2-x)^{\\sec\\frac{\\pi x}{2}}=(1+t)^{\\frac{2}{\\pi t}\\cdot(1+o(1))}\\to e^{\\frac{2}{\\pi}}$。"
  ],
  "cont-ex-2b": [
    "记 $u=\\sin\\frac{4}{x^{2}}+\\cos\\frac{2}{x}-1$，则原式的对数 $=x^{2}\\ln(1+u)$。",
    "$\\sin\\frac{4}{x^{2}}\\sim\\frac{4}{x^{2}}$，$\\cos\\frac{2}{x}-1\\sim-\\frac{1}{2}\\left(\\frac{2}{x}\\right)^{2}=-\\frac{2}{x^{2}}$，故 $u\\sim\\frac{2}{x^{2}}\\to0$。",
    "由 $\\ln(1+u)\\sim u$，$x^{2}\\ln(1+u)\\sim x^{2}\\cdot\\frac{2}{x^{2}}=2$，故原式 $=e^{2}$。"
  ],
  "cont-ex-2c": [
    "原式的对数 $=\\frac1x\\ln\\left(1+\\frac{a^{x}+b^{x}+c^{x}-3}{3}\\right)$。",
    "$\\ln(1+u)\\sim u$ 且 $u\\to0$，故上式 $\\sim\\frac{1}{3x}(a^{x}+b^{x}+c^{x}-3)$。",
    "$\\frac{a^{x}-1}{x}\\to\\ln a$ 等三式相加，得极限 $\\frac13(\\ln a+\\ln b+\\ln c)=\\frac13\\ln(abc)$。",
    "所以原式 $=e^{\\frac13\\ln(abc)}=(abc)^{\\frac13}$。"
  ],
  "cont-ex-2d": [
    "$\\sqrt[n]{1-ax}-1\\sim\\frac1n(-ax)=-\\frac{a}{n}x$，$\\sqrt[m]{1+bx}-1\\sim\\frac1m(bx)=\\frac bm x$。",
    "两式相减得分子 $\\sim\\left(-\\frac an-\\frac bm\\right)x$，除以 $x$ 后极限为 $-\\frac an-\\frac bm$。"
  ],
  "cont-ex-2e": [
    "$\\ln(1+x)+\\ln(1-x)=\\ln(1-x^{2})\\sim-x^{2}$。",
    "分母：$1-\\cos x\\sim\\frac{x^{2}}{2}$，$\\sin^{2}x\\sim x^{2}$，故分母 $\\sim\\frac32x^{2}$。",
    "原式 $=\\lim\\frac{-x^{2}}{\\frac32x^{2}}=-\\frac23$。"
  ],
  "cont-ex-3": [
    "由 $e^{x}-1\\sim x$，已知式化为 $\\lim\\frac{\\ln(1+u)}{x}=5$，其中 $u=\\frac{f(x)}{\\sin2x}$。",
    "$\\ln(1+u)\\to0$ 故 $u\\to0$，且 $\\ln(1+u)\\sim u$，于是 $\\frac{u}{x}\\to5$。",
    "所以 $f(x)\\sim5x\\sin2x\\sim5x\\cdot2x=10x^{2}$，即 $\\lim\\frac{f(x)}{x^{2}}=10$。"
  ],
  "cont-ex-4": [
    "$\\frac{1}{n+1}\\le\\frac{1}{n+\\frac{k^{2}}{n^{2}}}\\le\\frac1n$ 对 $0\\le k\\le n-1$ 成立。",
    "令 $S_n=\\sum_{k=0}^{n-1}e^{\\frac{k+1}{n}}$，则 $\\frac{S_n}{n+1}\\le x_n\\le\\frac{S_n}{n}$。",
    "$S_n=e^{\\frac1n}\\frac{1-e}{1-e^{\\frac1n}}$，而 $1-e^{\\frac1n}\\sim-\\frac1n$，故 $\\frac{S_n}{n}\\to e-1$，同理 $\\frac{S_n}{n+1}\\to e-1$。",
    "由夹逼准则 $\\lim x_n=e-1$。"
  ],
  "cont-ex-5": [
    "$f(0)=f(0+0)=f(0)^{2}$，故 $f(0)=0$ 或 $1$。若 $f(0)=0$，则 $f(x)=f(x+0)=f(x)f(0)=0$，$f\\equiv0$ 连续。",
    "下设 $f(0)=1$。对任意 $x_0\\in\\mathbb{R}$，$f(x_0+\\Delta x)-f(x_0)=f(x_0)[f(\\Delta x)-f(0)]$。",
    "由 $f$ 在 $0$ 连续，$\\lim_{\\Delta x\\to0}f(\\Delta x)=f(0)=1$，故上式趋于 $0$，即 $f$ 在 $x_0$ 连续。",
    "$x_0$ 任意，故 $f$ 在 $\\mathbb{R}$ 上连续。"
  ],
  "cont-ex-6": [
    "在 $x=0$：$\\forall\\varepsilon>0$ 取 $\\delta=\\varepsilon$，当 $|x|<\\delta$ 时 $|f(x)-f(0)|=|f(x)|\\le|x|<\\varepsilon$，故连续。",
    "设 $x_0\\ne0$。取有理数列 $x_n\\to x_0$，则 $f(x_n)=0\\to0$；取无理数列 $y_n\\to x_0$，则 $f(y_n)=y_n\\to x_0\\ne0$。",
    "由归结原则，$x_0$ 处极限不存在，故 $f$ 在 $x_0$ 不连续。",
    "因此 $f$ 仅在 $x=0$ 处连续。"
  ],
  "cont-ex-7": [
    "令 $F(x)=f(x)-f(x-a)$，$x\\in[0,a]$。因 $f$ 在 $[-a,a]$ 连续，$x-a\\in[-a,0]$，故 $F$ 在 $[0,a]$ 上连续。",
    "$F(0)=f(0)-f(-a)$，$F(a)=f(a)-f(0)$，两式相加得 $F(0)+F(a)=f(a)-f(-a)=0$。",
    "于是 $F(0)F(a)=-F(0)^{2}\\le0$。",
    "由零点定理，存在 $\\xi\\in[0,a]$ 使 $F(\\xi)=0$，即 $f(\\xi)=f(\\xi-a)$。"
  ],
  "cont-ex-8": [
    "设 $f(x)=\\frac{1}{x-a}+\\frac{1}{x-b}+\\frac{1}{x-c}-k$。",
    "当 $k>0$：$x\\to a^{+}$ 时 $\\frac{1}{x-a}\\to+\\infty$ 主导，故 $f\\to+\\infty$；$x\\to b^{-}$ 时 $\\frac{1}{x-b}\\to-\\infty$ 主导，故 $f\\to-\\infty$。于是在 $(a,b)$ 内由零点定理有一根。",
    "同理 $x\\to b^{+}$ 时 $f\\to+\\infty$，$x\\to c^{-}$ 时 $f\\to-\\infty$，在 $(b,c)$ 内有一根；$x\\to c^{+}$ 时 $f\\to+\\infty$，而 $x\\to+\\infty$ 时 $f\\to-k<0$，在 $(c,+\\infty)$ 内有一根。",
    "故至少三个实根；$k<0$ 时在 $(-\\infty,a)$、$(a,b)$、$(b,c)$ 上同理各得一根。"
  ],
  "cont-ex-9": [
    "取 $M=|f(0)|+1>0$。由 $\\lim_{x\\to-\\infty}f(x)=-\\infty$，存在 $X_1<0$，当 $x<X_1$ 时 $f(x)<-M$；同理存在 $X_2>0$，当 $x>X_2$ 时 $f(x)<-M$。",
    "$f$ 在闭区间 $[X_1,X_2]$ 上连续，由最值定理存在 $\\xi\\in[X_1,X_2]$ 使 $f(\\xi)=\\max_{[X_1,X_2]}f\\ge f(0)>-M$。",
    "对 $x<X_1$ 或 $x>X_2$，$f(x)<-M<f(\\xi)$，故 $f(\\xi)$ 也是全局最大值。"
  ],
  "cont-ex-10": [
    "令 $x_n'=\\frac{1}{2n\\pi}$，$x_n''=\\frac{1}{2n\\pi+\\frac{\\pi}{2}}$，则 $|x_n'-x_n''|=\\frac{\\frac{\\pi}{2}}{2n\\pi(2n\\pi+\\frac{\\pi}{2})}\\to0$。",
    "$f(x_n')=\\frac{1}{x_n'}\\cos\\frac{1}{x_n'}=2n\\pi\\cos(2n\\pi)=2n\\pi$。",
    "$f(x_n'')=0$（因 $\\cos(2n\\pi+\\frac{\\pi}{2})=0$），故 $|f(x_n')-f(x_n'')|=2n\\pi\\ge1$。",
    "取 $\\varepsilon_0=1$，对任意 $\\delta>0$，存在 $n$ 使 $|x_n'-x_n''|<\\delta$ 且 $|f(x_n')-f(x_n'')|\\ge\\varepsilon_0$，故 $f$ 在 $(0,1)$ 上不一致连续。"
  ],
  "cont-ex-11": [
    "对任意 $x_1,x_2\\ge0$，$|\\sqrt{x_1}-\\sqrt{x_2}|^{2}\\le|\\sqrt{x_1}-\\sqrt{x_2}|\\cdot(\\sqrt{x_1}+\\sqrt{x_2})=|x_1-x_2|$，故 $|\\sqrt{x_1}-\\sqrt{x_2}|\\le\\sqrt{|x_1-x_2|}$。",
    "$\\forall\\varepsilon>0$，取 $\\delta=\\varepsilon^{2}$，当 $|x_1-x_2|<\\delta$ 时 $|f(x_1)-f(x_2)|\\le\\sqrt{|x_1-x_2|}<\\varepsilon$。",
    "故 $\\sqrt{x}$ 在 $[0,+\\infty)$ 上一致连续。"
  ],
  "cont-ex-12": [
    "$\\frac{\\ln(e^{n}+x^{n})}{n}=\\ln(e^{n}+x^{n})^{\\frac1n}$。",
    "若 $0<x<e$，$(e^{n}+x^{n})^{\\frac1n}=e\\left(1+\\left(\\frac xe\\right)^{n}\\right)^{\\frac1n}\\to e$，故 $f(x)=1$。",
    "若 $x\\ge e$，$(e^{n}+x^{n})^{\\frac1n}=x\\left(1+\\left(\\frac ex\\right)^{n}\\right)^{\\frac1n}\\to x$，故 $f(x)=\\ln x$。",
    "在 $x=e$ 处，左极限 $\\lim_{x\\to e^{-}}f=1$，右极限 $\\lim_{x\\to e^{+}}f=\\ln e=1=f(e)$，故 $f$ 在 $x=e$ 连续。",
    "其余点 $f$ 为初等函数，故 $f$ 在 $(0,+\\infty)$ 上连续。"
  ]
}
);
