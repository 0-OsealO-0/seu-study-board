// 工科数学分析 I · 第三章 习题课：数列极限（16 题全解 + 方法总结）
// 由 tmp/build_sequence_exercises_data.py 生成，请勿手改。
window.MATH_REVIEW_EXERCISE_CHAPTERS = 
[
  {
    "number": "4.1",
    "bookChapter": "4",
    "title": "方法地图：十六题背后的九种套路",
    "lead": "十六道题不是十六个技巧，而是九种套路的不同外壳。先按题面信号锁定套路，再按模板写步骤。",
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
        "title": "夹逼：把和式、根式、振荡项关进两个同阶的笼子",
        "statement": "待求数列既不能直接求和，也约不掉，但能放大、缩小成两个简单数列。",
        "conditions": [],
        "conclusion": [
          "目标：找 $y_n\\le x_n\\le z_n$，且 $\\lim y_n=\\lim z_n=A$，则 $\\lim x_n=A$。",
          "本题课里 16 题有 7 题靠它解决：题 1、2(3)(4)(5)(6)、7、9（配反证）。"
        ],
        "intuition": "两端必须同阶。放大成 $n\\cdot1$ 只剩上界、夹不住下界，是最常见的失败方式。",
        "proofIdea": [
          "① 找出和式里最小的项与最大的项，用「项数 × 最小/最大项」造出下、上界。",
          "② 根式型先估根号内的最高次项，再整体开 $n$ 次方。",
          "③ 双阶乘、阶乘型先找到能与之相乘后塌缩的配对数列。",
          "④ 分别求两端极限；两值相等才可下结论，否则换放缩方式。",
          "⑤ 边界项（$n=1,2$ 或 $\\sin^2n\\le1$ 这类）单独处理，或放大成常数。"
        ],
        "pitfalls": [
          "放缩过头，两端不同阶，等于没夹。",
          "只写「显然 $x_n$ 介于两者之间」而不交代为什么，考试按没做处理。"
        ],
        "dependencies": [
          "夹逼准则",
          "极限四则运算"
        ],
        "source": "习题课 第 1–4 页",
        "id": "seq-m1"
      },
      {
        "type": "method",
        "label": "套路 2",
        "title": "单调有界：先证有界，再证单调，最后才允许取极限",
        "statement": "递推给出的数列、部分和数列，凡是题目里有「证明收敛」四个字，先想这一招。",
        "conditions": [],
        "conclusion": [
          "有界 + 单调 $\\Rightarrow$ 收敛（单调递增有上界，或递减有下界）。",
          "这是本题课出现频率第二高的套路：题 10、11、12、13。"
        ],
        "intuition": "只升不降又没有天花板，就只能停在一个极限上；反过来说，必须先把天花板找到。",
        "proofIdea": [
          "① 用归纳法证 $a\\le x_n\\le b$，界从递推式本身读出来（如 $x_{n+1}=\\frac{a+x_n^2}{2}<1$）。",
          "② 作差 $x_{n+1}-x_n$ 定号；递推含平方时先因式分解，把符号归结到 $x_n-x_{n-1}$。",
          "③ 作比 $x_{n+1}/x_n$ 与 1 比较，适用于连乘、连除结构。",
          "④ 断言 $\\lim x_n=A$ 存在，再在递推式两边取极限解方程。",
          "⑤ 用 $x_n$ 的取值范围舍去多余根（这一步经常被漏掉）。"
        ],
        "pitfalls": [
          "只证单调不证有界，可能发散到 $+\\infty$。",
          "先取极限再证存在，属于循环论证，大题直接扣分。",
          "解出两个根不取舍，答案写「$A=1\\pm\\sqrt{1-a}$」即错。"
        ],
        "dependencies": [
          "单调有界准则",
          "数学归纳法"
        ],
        "source": "习题课 第 6 页、第 11–13 页",
        "id": "seq-m2"
      },
      {
        "type": "method",
        "label": "套路 3",
        "title": "递推数列：不动点方程 + 压缩映射估计",
        "statement": "已知 $x_{n+1}=f(x_n)$ 且 $f$ 连续，要求极限值。",
        "conditions": [],
        "conclusion": [
          "若 $x_n\\to A$，则 $A=f(A)$——极限点必须是不动点。",
          "再补一步 $|x_{n+1}-A|\\le k|x_n-A|$（$0<k<1$），即可得 $x_n\\to A$。",
          "题 12 用的就是这个办法，配合奇偶子列分别单调。"
        ],
        "intuition": "极限点是不动点，因为再迭代一次还停在原地；压缩条件保证它真的被吸过去。",
        "proofIdea": [
          "① 解 $A=f(A)$ 得候选极限（可能有两个根，按取值范围选）。",
          "② 计算 $|x_{n+1}-A|$，用 $|f(u)-f(v)|$ 的显式表达式提出 $|u-v|$。",
          "③ 得到 $|x_{n+1}-A|\\le k|x_n-A|$ 后迭代：$|x_n-A|\\le k^{\\,n-1}|x_1-A|\\to0$。",
          "④ 若 $f$ 递增，可用「$f$ 把区间映进自己」先证奇偶子列单调，再令两条子列极限相等。"
        ],
        "pitfalls": [
          "只写 $A=f(A)$ 就宣布极限 $=A$，缺存在性。",
          "$|f(u)-f(v)|$ 展开时把分母估反（$\\frac{1}{x_nA}\\ge\\frac1A$ 还是 $\\le$），导致 $k$ 不是常数。"
        ],
        "dependencies": [
          "不动点",
          "压缩映射",
          "单调有界准则"
        ],
        "source": "习题课 第 11–12 页",
        "id": "seq-m3"
      },
      {
        "type": "method",
        "label": "套路 4",
        "title": "裂项相消：把通项拆成后项减前项",
        "statement": "通项是分式、分母是相邻整数的乘积，或连乘里出现 $(k-1)(k+1)$。",
        "conditions": [],
        "conclusion": [
          "和式：$\\frac{1}{k(k+1)}=\\frac1k-\\frac1{k+1}$，求和后只剩首尾。",
          "乘积：$1-\\frac{1}{k^2}=\\frac{(k-1)(k+1)}{k^2}$，上下错位约分。",
          "题 2(1)(2) 与题 15 都用了它。"
        ],
        "intuition": "拆开后中间项两两抵消，一个 $n$ 项和塌成两项之差。",
        "proofIdea": [
          "① 部分分式分解，把 $\\frac{1}{k(k+1)}$ 写成 $\\frac1k-\\frac1{k+1}$ 型。",
          "② 写出前 $n$ 项和，明确标出哪些项被抵消。",
          "③ 只保留首尾，得到只含 $n$ 的表达式。",
          "④ 再求 $n\\to\\infty$ 的极限；若外层还有 $n$ 次方，用 $(1+\\frac1n)^{-n}\\to\\frac1e$。"
        ],
        "pitfalls": [
          "分解后系数写错（缺 $\\frac1{a}$ 之类）。",
          "抵消时把首项或尾项多消掉一项。"
        ],
        "dependencies": [
          "部分分式",
          "等比数列求和"
        ],
        "source": "习题课 第 1–2 页、第 27 页",
        "id": "seq-m4"
      },
      {
        "type": "method",
        "label": "套路 5",
        "title": "Cauchy 收敛准则：证明收敛不必先猜出极限",
        "statement": "部分和数列写不出封闭形式，或题目要求证明发散。",
        "conditions": [],
        "conclusion": [
          "正用：$\\forall\\varepsilon>0,\\exists N,\\forall n>N,\\forall p\\in\\mathbb{N}^+$，有 $|x_{n+p}-x_n|<\\varepsilon$。",
          "否定：$\\exists\\varepsilon_0>0,\\forall N,\\exists n>N,\\exists m>n$，使 $|x_m-x_n|\\ge\\varepsilon_0$。",
          "题 15、16 分别对应正用与否定。"
        ],
        "intuition": "它把「有没有极限」翻译成「尾部任意两项能不能任意靠近」，不需要知道极限是谁。",
        "proofIdea": [
          "① 写 $|x_{n+p}-x_n|$，把 $p$ 项全部用绝对值不等式放成求和。",
          "② 把求和放大成可裂项的形式，化到只剩 $n$。",
          "③ 令上界 $<\\varepsilon$ 反解 $N$；说明 $N$ 与 $p$ 无关。",
          "④ 证明发散时：取定 $\\varepsilon_0$（如 $\\frac{1}{\\sqrt2}$），对任意 $N$ 取 $n>N$、$m=2n$，估算 $|x_m-x_n|\\ge\\varepsilon_0$。"
        ],
        "pitfalls": [
          "只验证 $|x_{n+1}-x_n|\\to0$ 就断言收敛——调和级数 $\\sum\\frac1k$ 是标准反例。",
          "把 $N$ 取成依赖 $p$ 的量，逻辑作废。"
        ],
        "dependencies": [
          "Cauchy 收敛准则",
          "裂项相消"
        ],
        "source": "习题课 第 26–28 页",
        "id": "seq-m5"
      },
      {
        "type": "method",
        "label": "套路 6",
        "title": "反证 + 子列：证明极限不存在",
        "statement": "题目要求证明 $\\lim\\sin n$、$\\lim(-1)^n$ 这类不存在。",
        "conditions": [],
        "conclusion": [
          "两条子列极限不同 $\\Rightarrow$ 原数列发散；假设收敛推出矛盾 $\\Rightarrow$ 不存在。",
          "题 9 走的是第二条路：假设 $\\lim\\sin n=A$，反解 $\\cos n$ 得到两个不同的极限。"
        ],
        "intuition": "收敛数列的所有子列都必须收敛到同一个值；只要找到两条子列打架就赢了。",
        "proofIdea": [
          "① 反设 $\\lim x_n=A$。",
          "② 用和角公式把 $x_{n+1}$、$x_{n+2}$ 拆成 $x_n$ 与另一量的组合，反解出那个量（如 $\\cos n$）。",
          "③ 两条路径得到的同一量的极限必须相等，逼出 $A$ 的值。",
          "④ 再与恒等式（如 $\\sin^2n+\\cos^2n=1$）矛盾，或给出两条极限不同的子列。"
        ],
        "pitfalls": [
          "把「在 $[-1,1]$ 之间来回振荡」当证明——那是描述，不是论证。",
          "反证时用了「$\\lim\\sin(n+1)=\\lim\\sin n$」，却没说明为什么（需要先假设收敛）。"
        ],
        "dependencies": [
          "子列性质",
          "和角公式"
        ],
        "source": "习题课 第 10 页",
        "id": "seq-m6"
      },
      {
        "type": "method",
        "label": "套路 7",
        "title": "含参极限函数：按 $|x|$ 与 1 的大小分段",
        "statement": "形如 $f(x)=\\lim_{n\\to\\infty}F(x,n)$，式中出现 $x^{2n}$、$x^n$ 这类「底数含 $x$」的因子。",
        "conditions": [],
        "conclusion": [
          "分 $|x|<1$、$|x|=1$、$|x|>1$ 三段求，最后拼成分段函数。",
          "题 8 是典型：$f(x)=\\lim\\frac{x^{2n+1}-x}{x^{2n}+1}$。"
        ],
        "intuition": "变量是 $n$ 不是 $x$：$x$ 站在哪一侧决定 $x^{2n}$ 是缩到 0 还是炸开。",
        "proofIdea": [
          "① 找出会「爆」或会「缩」的因子 $x^{2n}$。",
          "② $|x|<1$：直接令 $x^{2n}\\to0$ 代入。",
          "③ $|x|>1$：分子分母同除 $x^{2n}$，化成含 $x^{-2n}\\to0$ 的式子。",
          "④ $|x|=1$：直接代 $x^{2n}=1$，注意 $x=\\pm1$ 分别算。",
          "⑤ 检查分段点处的取值，必要时讨论连续性。"
        ],
        "pitfalls": [
          "漏掉 $x=\\pm1$ 这一段。",
          "把 $x$ 当成变量、$n$ 当参数，方向弄反。",
          "$|x|>1$ 时同除 $x^{2n}$ 后符号写错（$x^{2n+1}/x^{2n}=x$，不是 $1$）。"
        ],
        "dependencies": [
          "极限四则运算",
          "分段函数"
        ],
        "source": "习题课 第 8 页",
        "id": "seq-m7"
      },
      {
        "type": "method",
        "label": "套路 8",
        "title": "两把备用刀：定积分定义与 Stolz 定理",
        "statement": "和式极限夹逼夹不住时，或者 $\\frac{a_n}{b_n}$ 型（$b_n$ 严格增趋于 $+\\infty$）。",
        "conditions": [],
        "conclusion": [
          "定积分：$\\lim\\frac1n\\sum_{k=1}^n f\\!\\left(\\frac kn\\right)=\\int_0^1f(x)\\,dx$。",
          "Stolz：$\\lim\\frac{a_n}{b_n}=\\lim\\frac{a_n-a_{n-1}}{b_n-b_{n-1}}$（右端存在时）。",
          "本题课没考，但期中期末常以此收尾，属于必须会的拓展。"
        ],
        "intuition": "定积分是把「离散求和」换成「连续面积」；Stolz 是数列版的洛必达。",
        "proofIdea": [
          "① 先确认结构：每项 $\\sim\\frac1n$、指标以 $\\frac kn$ 出现，才可写积分。",
          "② 把和式整理成 $\\frac1n\\sum f(\\frac kn)$，读出 $f$，算 $\\int_0^1f$。",
          "③ 分母是 $n$、$n^2$、$\\ln n$ 且分子为部分和时，用 Stolz 降一阶再算。"
        ],
        "pitfalls": [
          "看到和式就套积分。题 2(5) 的分母是 $n^2+k\\pi$，没有 $\\frac kn$ 结构，只能夹逼。",
          "Stolz 用反方向（右端不存在就断言左端不存在）——定理只保证右端存在时可用。"
        ],
        "dependencies": [
          "定积分定义",
          "Stolz 定理"
        ],
        "source": "拓展（第 1 章课件 + 常见考法）",
        "id": "seq-m8"
      },
      {
        "type": "method",
        "label": "套路 9",
        "title": "判型索引：看到什么信号，先想哪个套路",
        "statement": "考场上没有时间试错，先按题面信号锁定套路，再动笔。",
        "conditions": [],
        "conclusion": [
          "$n$ 项和 / 根式 / 双阶乘 / $\\sin,\\cos$ 振荡因子 $\\to$ 夹逼。",
          "递推式 + 「证明收敛」$\\to$ 单调有界，再取极限解方程。",
          "递推式 + 「求极限」且能解不动点 $\\to$ 不动点 + 压缩。",
          "「证明收敛」但和式无封闭形式 $\\to$ Cauchy 准则。",
          "「证明不存在 / 发散」$\\to$ 反证 + 子列，或 Cauchy 否定形式。",
          "含 $x^{2n}$ 的极限 $\\to$ 按 $|x|$ 与 1 分段。"
        ],
        "intuition": "十六题的实际分布：夹逼 7、单调有界 4、递推 2、Cauchy 2、反证 1、分段 1（有交叉）。",
        "proofIdea": [
          "① 读题时先圈出关键词：求和、递推、不存在、证明收敛。",
          "② 关键词对到上表，直接套模板，不要从零想。",
          "③ 写完回头检查两件事：存在性有没有单独证、放缩两端是否同阶。"
        ],
        "pitfalls": [
          "跳过「判断题型」直接算，常常算到一半发现路走不通。"
        ],
        "dependencies": [
          "夹逼准则",
          "单调有界准则",
          "Cauchy 收敛准则"
        ],
        "source": "习题课全卷统计",
        "id": "seq-m9"
      }
    ]
  },
  {
    "number": "4.2",
    "bookChapter": "4",
    "title": "常考核心知识点",
    "lead": "这些是必须能默写出来的东西：定义、准则、常用极限与恒等式。考场上没有时间现推。",
    "map": [
      "定义",
      "准则",
      "常用极限",
      "恒等式"
    ],
    "definitions": [
      {
        "label": "定义 1",
        "title": "$\\varepsilon$–$N$ 定义与它的否定形式",
        "statement": [
          "$\\lim_{n\\to\\infty}x_n=A$ 是指：$\\forall\\varepsilon>0,\\ \\exists N\\in\\mathbb{N}^+$，当 $n>N$ 时 $|x_n-A|<\\varepsilon$。",
          "否定形式：$\\exists\\varepsilon_0>0,\\ \\forall N,\\ \\exists n>N$，使 $|x_n-A|\\ge\\varepsilon_0$。",
          "「极限不存在」的严格表述：对任意实数 $A$，上述否定形式都成立。"
        ],
        "source": "习题课 第 5 页（第 1 章 1.2 节）",
        "id": "seq-def-1"
      },
      {
        "label": "定义 2",
        "title": "Cauchy 列（基本列）",
        "statement": [
          "$\\{x_n\\}$ 是 Cauchy 列：$\\forall\\varepsilon>0,\\ \\exists N$，当 $n>N$ 时，对一切 $p\\in\\mathbb{N}^+$ 有 $|x_{n+p}-x_n|<\\varepsilon$。",
          "在实数系中「Cauchy 列」与「收敛数列」等价——这就是 Cauchy 收敛准则。",
          "注意 $p$ 必须是任意正整数，不能只取 $p=1$。"
        ],
        "source": "习题课 第 26 页",
        "id": "seq-def-2"
      }
    ],
    "entries": [
      {
        "type": "property",
        "label": "知识点 1",
        "title": "收敛数列的四条基本性质",
        "statement": "唯一性、有界性、保号性、子列同极限——证明题里最常用的四个结论。",
        "conditions": [],
        "conclusion": [
          "唯一性：极限若存在则唯一。",
          "有界性：收敛 $\\Rightarrow$ 有界（反之不成立，如 $(-1)^n$）。",
          "保号性：$\\lim x_n=A>0$，则 $n$ 充分大时 $x_n>\\frac A2>0$。",
          "子列性：$x_n\\to A$ $\\Rightarrow$ 任意子列 $x_{n_k}\\to A$；反之，若两条子列极限不同则原数列发散。"
        ],
        "intuition": "有界是收敛的必要条件，不是充分条件；子列性是把「收敛」拆成两条子列去用的依据。",
        "proofIdea": [
          "证明唯一性用 $\\varepsilon$ 的双重控制：$|A-B|\\le|A-x_n|+|x_n-B|<2\\varepsilon$。",
          "证明有界用 $\\varepsilon=1$：$n>N$ 时 $|x_n|\\le|A|+1$，前 $N$ 项取最大值。",
          "判断发散：找两条极限不同的子列，或直接用 Cauchy 否定形式。"
        ],
        "pitfalls": [
          "把「有界」当「收敛」用——$(-1)^n$ 有界但不收敛。"
        ],
        "dependencies": [
          "ε–N 定义"
        ],
        "source": "第 1 章 1.2 节",
        "id": "seq-k1"
      },
      {
        "type": "theorem",
        "label": "知识点 2",
        "title": "夹逼准则（含实践版用法）",
        "statement": "若存在 $N_0$，当 $n>N_0$ 时 $y_n\\le x_n\\le z_n$，且 $\\lim y_n=\\lim z_n=A$，则 $\\lim x_n=A$。",
        "conditions": [],
        "conclusion": [
          "标准形式如上；实践版：只要两端同阶且极限相等，中间项必然同极限。",
          "常见造界方式：项数 × 最小项 $\\le$ 和 $\\le$ 项数 × 最大项。"
        ],
        "intuition": "两端都掉进 $A$ 的邻域，中间被夹着的 $x_n$ 也就只能在 $A$ 附近。",
        "proofIdea": [
          "① 对和式，先数项数（常是 $n$），再取最小项与最大项。",
          "② 对根式，先看根号内最高次项，再整体开 $n$ 次方（配合 $\\sqrt[n]{n}\\to1$）。",
          "③ 对含 $\\sin,\\cos$ 的项，用 $|\\sin|\\le1$ 把振荡项变成常数扰动。",
          "④ 求两端极限，相等则结论成立。"
        ],
        "pitfalls": [
          "两端不同阶：如把 $n$ 项都放大成 1，得上界 $n$，与下界 0 不匹配。",
          "忘记「存在 $N_0$ 之后才成立」，对 $n=1$ 的边界项不成立时仍直接写。"
        ],
        "dependencies": [
          "极限四则运算"
        ],
        "source": "第 1 章 1.2 节 / 习题课 第 1–4 页",
        "id": "seq-k2"
      },
      {
        "type": "theorem",
        "label": "知识点 3",
        "title": "单调有界准则",
        "statement": "单调递增且有上界（或单调递减且有下界）的数列必收敛。",
        "conditions": [],
        "conclusion": [
          "只保证存在，不给极限值；极限值要在递推式两边取极限后解方程得到。",
          "与「确界」等价：递增有上界的数列收敛到其上确界。"
        ],
        "intuition": "数列被天花板压住又一直往上走，只能停在天花板下面某处。",
        "proofIdea": [
          "① 有界性一般用归纳法，界从递推式读出。",
          "② 单调性优先作差，其次作比。",
          "③ 存在之后才允许写 $\\lim x_n=A$ 并代入递推式。"
        ],
        "pitfalls": [
          "缺少有界性：$x_n=n$ 单调但发散。"
        ],
        "dependencies": [
          "数学归纳法"
        ],
        "source": "第 1 章 1.2 节 / 习题课 第 6 页、第 11–13 页",
        "id": "seq-k3"
      },
      {
        "type": "theorem",
        "label": "知识点 4",
        "title": "Cauchy 收敛准则及其否定形式",
        "statement": "$\\{x_n\\}$ 收敛 $\\iff$ $\\{x_n\\}$ 是 Cauchy 列。",
        "conditions": [],
        "conclusion": [
          "正用证明收敛：把 $|x_{n+p}-x_n|$ 放大到只含 $n$，令其 $<\\varepsilon$。",
          "否定形式证明发散：取定 $\\varepsilon_0$，构造 $m>n>N$ 使 $|x_m-x_n|\\ge\\varepsilon_0$。",
          "题 16 的取法：$\\varepsilon_0=\\frac{1}{\\sqrt2}$，$m=2n$。"
        ],
        "intuition": "不需要知道极限是谁，只需要尾部任意两项足够靠近。",
        "proofIdea": [
          "① 写差、取绝对值、用三角不等式拆成 $p$ 项之和。",
          "② 放大成可裂项的求和，塌成只含 $n$ 的式子。",
          "③ 反解 $N$，并声明 $N$ 与 $p$ 无关。",
          "④ 发散题：选 $\\varepsilon_0$ 与配对下标 $(n,2n)$，使下界是常数。"
        ],
        "pitfalls": [
          "只验证 $p=1$（相邻差）就下结论。",
          "$\\varepsilon_0$ 取得依赖 $n$，等于没证。"
        ],
        "dependencies": [
          "Cauchy 列",
          "裂项相消"
        ],
        "source": "第 1 章 1.2 节 / 习题课 第 26–28 页",
        "id": "seq-k4"
      },
      {
        "type": "formula",
        "label": "知识点 5",
        "title": "增长速度阶梯与四个必背极限",
        "statement": "$$\\ln n\\ \\ll\\ n^{\\alpha}\\ (\\alpha>0)\\ \\ll\\ a^{n}\\ (a>1)\\ \\ll\\ n!\\ \\ll\\ n^{n}$$",
        "conditions": [],
        "conclusion": [
          "$\\lim\\sqrt[n]{n}=1$，更一般地 $\\lim\\sqrt[n]{a}=1\\ (a>0)$。",
          "$\\lim\\left(1+\\frac1n\\right)^n=e$，$\\lim\\left(1+\\frac1n\\right)^{n+1}=e$。",
          "$\\lim\\frac{a^n}{n!}=0\\ (a>1)$，$\\lim\\frac{n!}{n^n}=0$。",
          "$\\lim\\sqrt[n]{n!}=+\\infty$（由 Stirling 公式也可看出）。"
        ],
        "intuition": "指数压过多项式，阶乘压过指数——这是判断「谁把谁压成 0」的总纲。",
        "proofIdea": [
          "比较型极限先看属于哪一档，直接报结果。",
          "$\\sqrt[n]{}$ 型先取对数：$\\ln\\sqrt[n]{x_n}=\\frac{\\ln x_n}{n}$，再估 $\\ln x_n=O(\\ln n)$。",
          "$1^{\\infty}$ 型一律化 $e^{n\\ln(\\cdot)}$ 或用 $(1+\\frac1n)^n\\to e$。"
        ],
        "pitfalls": [
          "把 $\\ln n$ 与 $n^{0.1}$ 的次序记反。"
        ],
        "dependencies": [
          "对数函数",
          "指数函数"
        ],
        "source": "第 1 章 1.2 节 / 常见考法",
        "id": "seq-k5"
      },
      {
        "type": "formula",
        "label": "知识点 6",
        "title": "三个必背恒等式：平方和、裂项、双阶乘",
        "statement": "$$\\sum_{k=1}^{n}k^{2}=\\frac{n(n+1)(2n+1)}{6},\\qquad \\frac{1}{k(k+1)}=\\frac1k-\\frac1{k+1}$$",
        "conditions": [],
        "conclusion": [
          "$\\sum_{k=1}^{n}k^{2}=\\frac{n(n+1)(2n+1)}{6}\\sim\\frac{n^{3}}{3}$（题 2(6) 的 1/3 就来自这里）。",
          "$\\sum_{k=1}^{n}\\frac{1}{k(k+1)}=1-\\frac{1}{n+1}$（题 2(2)、题 15）。",
          "$\\prod_{k=2}^{n}\\left(1-\\frac1{k^2}\\right)=\\frac{n+1}{2n}\\to\\frac12$（题 2(1)）。",
          "双阶乘：$(2n)!!=2^{n}n!$，$(2n-1)!!=\\frac{(2n)!}{2^{n}n!}$，且 $\\frac{(2n-1)!!}{(2n)!!}\\le\\frac{1}{\\sqrt{2n+1}}$。"
        ],
        "intuition": "这几个式子必须背到能默写，考场上没有时间现推。",
        "proofIdea": [
          "遇到 $\\sum k^2$ 先换成 $\\frac{n^3}{3}$ 看阶。",
          "遇到双阶乘比值，用 $\\frac{2k-1}{2k}\\le\\sqrt{\\frac{2k-1}{2k+1}}$ 连乘塌缩。"
        ],
        "pitfalls": [
          "$\\sum k^2$ 记成 $\\frac{n(n+1)(2n+1)}{3}$。",
          "$(2n)!!$ 与 $(2n)!$ 混为一谈。"
        ],
        "dependencies": [
          "数学归纳法"
        ],
        "source": "第 1 章 1.2 节 / 习题课 第 1–4 页",
        "id": "seq-k6"
      },
      {
        "type": "theorem",
        "label": "知识点 7",
        "title": "递推数列收敛性判定：三件套",
        "statement": "已知 $x_{n+1}=f(x_n)$，判断 $\\{x_n\\}$ 是否收敛并求极限。",
        "conditions": [],
        "conclusion": [
          "路径 A（单调有界）：证 $x_n$ 落在区间 $I$ 内且 $f$ 在 $I$ 上单调，则 $\\{x_n\\}$ 单调；再证有界。",
          "路径 B（压缩）：证 $|f(u)-f(v)|\\le k|u-v|$（$0<k<1$），则唯一不动点即为极限，且误差按 $k^n$ 衰减。",
          "路径 C（奇偶子列）：$f$ 递减时 $\\{x_{2n}\\}$、$\\{x_{2n+1}\\}$ 各自单调，分别求极限再证相等（题 12）。"
        ],
        "intuition": "$f$ 递增则迭代单调；$f$ 递减则迭代在两支之间来回，必须拆奇偶。",
        "proofIdea": [
          "① 先解 $A=f(A)$，知道答案大概是多少，便于估界。",
          "② 判断 $f$ 在候选区间上的单调性，决定走 A 还是 C。",
          "③ 用归纳法证界，用作差证单调。",
          "④ 极限存在后代入递推式定值，并按范围取舍。"
        ],
        "pitfalls": [
          "$f$ 递减却直接断言 $\\{x_n\\}$ 单调，是最典型的错误。"
        ],
        "dependencies": [
          "单调有界准则",
          "压缩映射"
        ],
        "source": "第 1 章 1.2 节 / 习题课 第 11–13 页",
        "id": "seq-k7"
      }
    ]
  },
  {
    "number": "4.3",
    "bookChapter": "4",
    "title": "十六题精解",
    "lead": "按原课件顺序逐题给出题目、思路、完整解答与踩坑提示。完整解答默认折叠，先自己做再看。",
    "map": [
      "题目",
      "思路",
      "完整解答",
      "易错"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "example",
        "label": "题 1",
        "title": "证明 $\\lim_{n\\to\\infty}\\frac{a^{n}}{n!}=0\\ (a>1)$",
        "statement": "设 $a>1$，证明 $\\lim_{n\\to\\infty}\\frac{a^{n}}{n!}=0$。",
        "conditions": [],
        "conclusion": [
          "极限为 $0$。两种写法：比值 + 单调有界；或夹逼成几何衰减。"
        ],
        "intuition": "阶乘增长快于指数，比值法一步到位。",
        "proofIdea": [
          "① 记 $b_n=\\frac{a^n}{n!}$，算比值 $\\frac{b_{n+1}}{b_n}=\\frac{a}{n+1}$。",
          "② 取 $m=[a]+1$，当 $n\\ge m$ 时比值 $<1$，故数列从某项起递减且有下界 0。",
          "③ 由单调有界得极限存在，设为 $L$；在 $b_{n+1}=b_n\\cdot\\frac{a}{n+1}$ 两边取极限得 $L=0$。",
          "④ 备用写法（夹逼）：$b_n\\le\\frac{a^m}{m!}\\left(\\frac{a}{m+1}\\right)^{n-m}\\to0$。"
        ],
        "pitfalls": [
          "直接说「阶乘比指数快」不算证明，必须给出比值或夹逼。"
        ],
        "dependencies": [
          "单调有界准则",
          "夹逼准则"
        ],
        "source": "习题课 第 1 页",
        "id": "seq-ex-1"
      },
      {
        "type": "example",
        "label": "题 2(1)",
        "title": "求 $\\lim_{n\\to\\infty}\\prod_{k=2}^{n}\\left(1-\\frac{1}{k^{2}}\\right)$",
        "statement": "求 $\\lim_{n\\to\\infty}\\left(1-\\frac{1}{2^2}\\right)\\left(1-\\frac{1}{3^2}\\right)\\cdots\\left(1-\\frac{1}{n^2}\\right)$。",
        "conditions": [],
        "conclusion": [
          "极限为 $\\frac12$。"
        ],
        "intuition": "连乘先因式分解，上下错位约分。",
        "proofIdea": [
          "① $1-\\frac{1}{k^2}=\\frac{(k-1)(k+1)}{k^2}$。",
          "② 乘积 $=\\frac{(1\\cdot3)(2\\cdot4)\\cdots((n-1)(n+1))}{(2\\cdot3\\cdots n)^2}$。",
          "③ 分子中的 $2,3,\\dots,n-1$ 与分母部分约掉，只剩 $\\frac{n+1}{2n}$。",
          "④ 令 $n\\to\\infty$ 得 $\\frac12$。"
        ],
        "pitfalls": [
          "约分时漏掉首项 1 或尾项 $n+1$。"
        ],
        "dependencies": [
          "裂项相消"
        ],
        "source": "习题课 第 1 页",
        "id": "seq-ex-2a"
      },
      {
        "type": "example",
        "label": "题 2(2)",
        "title": "求 $\\lim_{n\\to\\infty}\\left(\\sum_{k=1}^{n}\\frac{1}{2(1+2+\\cdots+k)}\\right)^{n}$",
        "statement": "求 $\\lim_{n\\to\\infty}\\left(\\frac{1}{2(1)}+\\frac{1}{2(1+2)}+\\cdots+\\frac{1}{2(1+2+\\cdots+n)}\\right)^{n}$。",
        "conditions": [],
        "conclusion": [
          "极限为 $\\frac1e$。"
        ],
        "intuition": "先裂项求和，再用 $(1+\\frac1n)^n\\to e$。",
        "proofIdea": [
          "① $1+2+\\cdots+k=\\frac{k(k+1)}{2}$，所以每项 $=\\frac{1}{k(k+1)}=\\frac1k-\\frac1{k+1}$。",
          "② 求和 $=\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1n-\\frac1{n+1}\\right)=\\frac{n}{n+1}$。",
          "③ 原式 $=\\left(\\frac{n}{n+1}\\right)^{n}=\\dfrac{1}{\\left(1+\\frac1n\\right)^{n}}$。",
          "④ 分母 $\\to e$，故极限为 $\\frac1e$。"
        ],
        "pitfalls": [
          "把 $\\frac{n}{n+1}$ 写成 $1-\\frac1{n+1}$ 后直接说极限是 1，忘了外层还有 $n$ 次方。"
        ],
        "dependencies": [
          "裂项相消",
          "重要极限 e"
        ],
        "source": "习题课 第 1 页",
        "id": "seq-ex-2b"
      },
      {
        "type": "example",
        "label": "题 2(3)",
        "title": "求 $\\lim_{n\\to\\infty}\\frac{1!+2!+\\cdots+n!}{n!}$",
        "statement": "求 $\\lim_{n\\to\\infty}\\frac{1!+2!+\\cdots+n!}{n!}$。",
        "conditions": [],
        "conclusion": [
          "极限为 $1$。"
        ],
        "intuition": "分母只有 $n!$，夹逼把前面所有项压成一个小量。",
        "proofIdea": [
          "① 下界：$\\frac{n!}{n!}=1$，故原式 $\\ge1$。",
          "② 上界：$1!+2!+\\cdots+(n-2)!\\le(n-2)(n-2)!$。",
          "③ 于是原式 $\\le\\frac{(n-2)(n-2)!+(n-1)!+n!}{n!}=\\frac{n-2}{n(n-1)}+\\frac1n+1$。",
          "④ 上界 $\\to1$，由夹逼得极限 $1$。"
        ],
        "pitfalls": [
          "把 $1!+\\cdots+(n-2)!$ 放大成 $(n-2)!$ 一项（漏了项数 $n-2$），或放大成 $n!$ 导致上界为 $n$。"
        ],
        "dependencies": [
          "夹逼准则",
          "阶乘估计"
        ],
        "source": "习题课 第 2 页",
        "id": "seq-ex-2c"
      },
      {
        "type": "example",
        "label": "题 2(4)",
        "title": "求 $\\lim_{n\\to\\infty}\\sqrt[n]{n^{2}+n+\\sin^{2}n}$",
        "statement": "求 $\\lim_{n\\to\\infty}\\sqrt[n]{n^{2}+n+\\sin^{2}n}$。",
        "conditions": [],
        "conclusion": [
          "极限为 $1$。"
        ],
        "intuition": "$\\sqrt[n]{}$ 型先估根号内最高次项，振荡项只是常数级扰动。",
        "proofIdea": [
          "① $n^{2}\\le n^{2}+n+\\sin^{2}n\\le n^{2}+n+1\\le2n^{2}$（$n\\ge1$）。",
          "② 开 $n$ 次方：$(\\sqrt[n]{n})^{2}\\le x_n\\le\\sqrt[n]{2}\\,(\\sqrt[n]{n})^{2}$。",
          "③ $\\sqrt[n]{n}\\to1$，$\\sqrt[n]{2}\\to1$，两端都 $\\to1$。",
          "④ 由夹逼得 $x_n\\to1$。"
        ],
        "pitfalls": [
          "把根号内放大成 $n^2+2n$ 后忘记 $2n\\le 2n^2$，导致上界不是常数倍。"
        ],
        "dependencies": [
          "夹逼准则",
          "lim ⁿ√n = 1"
        ],
        "source": "习题课 第 2 页",
        "id": "seq-ex-2d"
      },
      {
        "type": "example",
        "label": "题 2(5)",
        "title": "求 $\\lim_{n\\to\\infty}n\\left(\\frac{1}{n^{2}+\\pi}+\\frac{1}{n^{2}+2\\pi}+\\cdots+\\frac{1}{n^{2}+n\\pi}\\right)$",
        "statement": "求 $\\lim_{n\\to\\infty}n\\left(\\frac{1}{n^{2}+\\pi}+\\frac{1}{n^{2}+2\\pi}+\\cdots+\\frac{1}{n^{2}+n\\pi}\\right)$。",
        "conditions": [],
        "conclusion": [
          "极限为 $1$。"
        ],
        "intuition": "共 $n$ 项，每项都趋近 $\\frac{1}{n^2}$，和乘 $n$ 后夹在 1 附近。",
        "proofIdea": [
          "① 括号内共 $n$ 项，最小项 $\\frac{1}{n^{2}+n\\pi}$，最大项 $\\frac{1}{n^{2}+\\pi}$。",
          "② 于是 $\\frac{n^{2}}{n^{2}+n\\pi}\\le$ 原式 $\\le\\frac{n^{2}}{n^{2}+\\pi}$。",
          "③ 两端都 $\\to1$。",
          "④ 由夹逼得极限 $1$。"
        ],
        "pitfalls": [
          "误以为要套定积分定义——这里分母是 $n^2+k\\pi$，没有 $\\frac kn$ 结构。"
        ],
        "dependencies": [
          "夹逼准则"
        ],
        "source": "习题课 第 3 页",
        "id": "seq-ex-2e"
      },
      {
        "type": "example",
        "label": "题 2(6)",
        "title": "求 $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{k^{2}}{\\sqrt{n^{6}+kn}}$",
        "statement": "求 $\\lim_{n\\to\\infty}\\left(\\frac{1}{\\sqrt{n^{6}+n}}+\\frac{2^{2}}{\\sqrt{n^{6}+2n}}+\\cdots+\\frac{n^{2}}{\\sqrt{n^{6}+n^{2}}}\\right)$。",
        "conditions": [],
        "conclusion": [
          "极限为 $\\frac13$。"
        ],
        "intuition": "分母的 $kn$ 被 $n^{2}$ 压住，整个分母与 $n^{3}$ 同阶；分子求和给出 $\\frac{n^3}{3}$。",
        "proofIdea": [
          "① 因为 $kn\\le n^{2}$，有 $\\sqrt{n^{6}+n}\\le\\sqrt{n^{6}+kn}\\le\\sqrt{n^{6}+n^{2}}$。",
          "② 于是 $\\frac{\\sum k^{2}}{\\sqrt{n^{6}+n^{2}}}\\le$ 原式 $\\le\\frac{\\sum k^{2}}{\\sqrt{n^{6}+n}}$。",
          "③ $\\sum_{k=1}^{n}k^{2}=\\frac{n(n+1)(2n+1)}{6}\\sim\\frac{n^{3}}{3}$，而 $\\sqrt{n^{6}+n^{2}}\\sim n^{3}$。",
          "④ 两端都 $\\to\\frac13$，由夹逼得极限 $\\frac13$。"
        ],
        "pitfalls": [
          "把 $\\sum k^2$ 记成 $\\frac{n^3}{6}$，答案变 $\\frac16$。"
        ],
        "dependencies": [
          "夹逼准则",
          "平方和公式"
        ],
        "source": "习题课 第 3 页",
        "id": "seq-ex-2f"
      },
      {
        "type": "example",
        "label": "题 7",
        "title": "求 $\\lim_{n\\to\\infty}\\frac{(2n-1)!!}{(2n)!!}$",
        "statement": "求 $\\lim_{n\\to\\infty}\\frac{1\\cdot3\\cdot5\\cdots(2n-1)}{2\\cdot4\\cdot6\\cdots(2n)}$。",
        "conditions": [],
        "conclusion": [
          "极限为 $0$。"
        ],
        "intuition": "双阶乘比值的标准技巧：乘一个「同族」的因子，让连乘塌成单项。",
        "proofIdea": [
          "① 记 $a_n=\\frac{(2n-1)!!}{(2n)!!}$，显然 $a_n>0$。",
          "② 关键不等式 $\\frac{2k-1}{2k}<\\sqrt{\\frac{2k-1}{2k+1}}$（等价于 $(2k-1)(2k+1)<(2k)^{2}$）。",
          "③ 连乘得 $a_n<\\prod_{k=1}^{n}\\sqrt{\\frac{2k-1}{2k+1}}=\\frac{1}{\\sqrt{2n+1}}$。",
          "④ 于是 $0<a_n<\\frac{1}{\\sqrt{2n+1}}\\to0$，由夹逼得 $a_n\\to0$。"
        ],
        "pitfalls": [
          "只写「$a_n$ 越来越小」不给出定量上界，得 0 分。"
        ],
        "dependencies": [
          "夹逼准则",
          "双阶乘恒等式"
        ],
        "source": "习题课 第 4 页",
        "id": "seq-ex-7"
      },
      {
        "type": "example",
        "label": "题 8",
        "title": "设 $f(x)=\\lim_{n\\to\\infty}\\frac{x^{2n+1}-x}{x^{2n}+1}$，求 $f(x)$",
        "statement": "设 $f(x)=\\lim_{n\\to\\infty}\\frac{x^{2n+1}-x}{x^{2n}+1}$，求 $f(x)$ 的表达式。",
        "conditions": [],
        "conclusion": [
          "分段结果：$|x|<1$ 时 $f(x)=-x$；$|x|=1$ 时 $f(x)=0$；$|x|>1$ 时 $f(x)=x$。"
        ],
        "intuition": "$x$ 是参数、$n$ 是变量，$x^{2n}$ 在 $|x|<1$ 时缩成 0、在 $|x|>1$ 时炸开。",
        "proofIdea": [
          "① $|x|<1$：$x^{2n}\\to0$，$x^{2n+1}\\to0$，故 $f(x)=\\frac{0-x}{0+1}=-x$。",
          "② $|x|>1$：分子分母同除 $x^{2n}$，得 $\\frac{x-x^{1-2n}}{1+x^{-2n}}\\to x$。",
          "③ $|x|=1$：$x^{2n}=1$，$x^{2n+1}=x$，分子为 $x-x=0$，故 $f(x)=0$。",
          "④ 合并写成分段函数，并注明 $x=\\pm1$ 处取 0。"
        ],
        "pitfalls": [
          "漏掉 $x=\\pm1$ 一段；或 $|x|>1$ 时把 $\\frac{x^{2n+1}}{x^{2n}}$ 算成 1。"
        ],
        "dependencies": [
          "分段函数",
          "极限四则运算"
        ],
        "source": "习题课 第 8 页",
        "id": "seq-ex-8"
      },
      {
        "type": "example",
        "label": "题 9",
        "title": "证明 $\\lim_{n\\to\\infty}\\sin n$ 不存在",
        "statement": "证明 $\\lim_{n\\to\\infty}\\sin n$ 极限不存在。",
        "conditions": [],
        "conclusion": [
          "极限不存在。"
        ],
        "intuition": "反设收敛，用和角公式反解 $\\cos n$，得到两个不同的极限，与 $\\sin^2+\\cos^2=1$ 矛盾。",
        "proofIdea": [
          "① 反设 $\\lim_{n\\to\\infty}\\sin n=A$。",
          "② 由 $\\sin(n+1)=\\sin n\\cos1+\\cos n\\sin1$ 解出 $\\cos n=\\frac{\\sin(n+1)-\\sin n\\cos1}{\\sin1}\\to A\\tan\\frac12$。",
          "③ 由 $\\sin(n+2)=\\sin n\\cos2+\\cos n\\sin2$ 同理得 $\\cos n\\to A\\tan1$。",
          "④ 两式相等：$A\\left(\\tan1-\\tan\\frac12\\right)=0$，因 $\\tan1\\ne\\tan\\frac12$，故 $A=0$。",
          "⑤ 于是 $\\sin n\\to0$ 且 $\\cos n\\to0$，与 $\\sin^{2}n+\\cos^{2}n=1$ 矛盾。故极限不存在。"
        ],
        "pitfalls": [
          "用「$\\sin n$ 在 $[-1,1]$ 内振荡」当证明，缺少严格论证。"
        ],
        "dependencies": [
          "子列性质",
          "和角公式"
        ],
        "source": "习题课 第 10 页",
        "id": "seq-ex-9"
      },
      {
        "type": "example",
        "label": "题 10",
        "title": "证明 $x_n=\\sum_{k=1}^{n}\\frac{1}{k!+k}$ 收敛",
        "statement": "设 $x_n=\\frac{1}{1!+1}+\\frac{1}{2!+2}+\\cdots+\\frac{1}{n!+n}$，证明数列 $\\{x_n\\}$ 收敛。",
        "conditions": [],
        "conclusion": [
          "收敛（极限无初等封闭形式，只证存在）。上界可取 2。"
        ],
        "intuition": "正项部分和，单调自动成立；只要找一个与 $n$ 无关的上界。",
        "proofIdea": [
          "① 各项为正，故 $\\{x_n\\}$ 单调递增。",
          "② 对 $k\\ge2$，$k!\\ge k(k-1)$，故 $\\frac{1}{k!+k}\\le\\frac{1}{k!}\\le\\frac{1}{k(k-1)}$。",
          "③ 于是 $x_n\\le\\frac12+\\sum_{k=2}^{n}\\frac{1}{k(k-1)}=\\frac12+\\left(1-\\frac1n\\right)<\\frac32$。",
          "④ 单调递增且有上界，由单调有界准则收敛。"
        ],
        "pitfalls": [
          "试图求出 $x_n$ 的通项公式——这个级数没有初等和，题目只要求证收敛。",
          "用 $\\frac{1}{k!+k}\\le\\frac{1}{k}$ 得调和级数上界，夹不住。"
        ],
        "dependencies": [
          "单调有界准则",
          "裂项相消"
        ],
        "source": "习题课 第 6 页",
        "id": "seq-ex-10"
      },
      {
        "type": "example",
        "label": "题 11",
        "title": "设 $x_1=\\frac a2$，$x_{n+1}=\\frac{a+x_n^{2}}{2}\\ (0<a\\le1)$，求 $\\lim x_n$",
        "statement": "设 $x_1=\\frac a2$，$x_{n+1}=\\frac{a+x_n^{2}}{2}$（$0<a\\le1$，$n=1,2,\\cdots$），求 $\\lim_{n\\to\\infty}x_n$。",
        "conditions": [],
        "conclusion": [
          "$\\lim_{n\\to\\infty}x_n=1-\\sqrt{1-a}$。"
        ],
        "intuition": "单调递增 + 有上界 1，取极限解二次方程后按 $x_n\\le1$ 取舍。",
        "proofIdea": [
          "① $x_2-x_1=\\frac{a^2}{8}>0$，起步是递增的。",
          "② 归纳：若 $x_n>x_{n-1}>0$，则 $x_{n+1}-x_n=\\frac{(x_n-x_{n-1})(x_n+x_{n-1})}{2}>0$，故 $\\{x_n\\}$ 单调递增。",
          "③ $x_1=\\frac a2<1$；若 $x_n<1$，则 $x_{n+1}<\\frac{a+1}{2}\\le1$，故有上界 1。",
          "④ 单调有界，极限存在，设为 $A$；在递推式两边取极限：$A=\\frac{a+A^{2}}{2}$。",
          "⑤ 解得 $A=1\\pm\\sqrt{1-a}$，由 $A\\le1$ 取 $A=1-\\sqrt{1-a}$。"
        ],
        "pitfalls": [
          "解出两个根后不取舍，写成 $1\\pm\\sqrt{1-a}$。"
        ],
        "dependencies": [
          "单调有界准则",
          "数学归纳法"
        ],
        "source": "习题课 第 6 页",
        "id": "seq-ex-11"
      },
      {
        "type": "example",
        "label": "题 12",
        "title": "设 $x_0=1$，$x_n=1+\\frac{1}{x_{n-1}}$，证明收敛并求极限",
        "statement": "设 $x_0=1$，$x_n=1+\\frac{1}{x_{n-1}}$（$n=1,2,\\cdots$），证明 $\\{x_n\\}$ 收敛，并求 $\\lim_{n\\to\\infty}x_n$。",
        "conditions": [],
        "conclusion": [
          "收敛，极限为 $\\frac{1+\\sqrt5}{2}$（黄金分割比）。"
        ],
        "intuition": "$f(t)=1+\\frac1t$ 递减，迭代在两支之间来回，必须拆奇偶子列分别证单调。",
        "proofIdea": [
          "① 归纳得 $1\\le x_n\\le2$。",
          "② 消去中间变量：$x_{n+2}=1+\\frac{1}{x_{n+1}}=1+\\frac{x_n}{1+x_n}$。",
          "③ 记 $f(t)=1+\\frac{t}{1+t}$，则 $f(u)-f(v)=\\frac{u-v}{(1+u)(1+v)}$，故 $x_{n+2}-x_n$ 与 $x_{n+1}-x_{n-1}$ 同号。",
          "④ $x_2-x_0=\\frac12>0$，$x_3-x_1=-\\frac13<0$，故 $\\{x_{2n}\\}$ 递增（有上界 2），$\\{x_{2n+1}\\}$ 递减（有下界 1），各自收敛。",
          "⑤ 在 $x_{n+2}=1+\\frac{x_n}{1+x_n}$ 两边取极限：$A=1+\\frac{A}{1+A}$，即 $A^{2}-A-1=0$，取正根 $\\frac{1+\\sqrt5}{2}$；偶数子列同解。",
          "⑥ 两条子列极限相同，故 $\\lim x_n=\\frac{1+\\sqrt5}{2}$。（也可用压缩估计 $|x_{n+1}-A|=\\frac{|x_n-A|}{x_nA}\\le\\frac{|x_n-A|}{A}$，$A>1$。）"
        ],
        "pitfalls": [
          "直接对 $x_n=1+\\frac{1}{x_{n-1}}$ 取极限却不证存在。"
        ],
        "dependencies": [
          "单调有界准则",
          "不动点"
        ],
        "source": "习题课 第 11–12 页",
        "id": "seq-ex-12"
      },
      {
        "type": "example",
        "label": "题 13",
        "title": "正数列满足 $2x_{n+1}+\\frac{1}{x_n^{2}}<3$，证明收敛并求极限",
        "statement": "设 $\\{x_n\\}$ 是正数列，且满足 $2x_{n+1}+\\frac{1}{x_n^{2}}<3$（$n=1,2,\\cdots$），证明 $\\{x_n\\}$ 收敛并求 $\\lim_{n\\to\\infty}x_n$。",
        "conditions": [],
        "conclusion": [
          "收敛，极限为 $1$。"
        ],
        "intuition": "全题只有一个机关：$2t+\\frac{1}{t^{2}}\\ge3$，等号仅在 $t=1$ 成立。",
        "proofIdea": [
          "① 对任意 $t>0$，$2t+\\frac{1}{t^{2}}\\ge3$（均值不等式，$t=1$ 取等）。",
          "② 由 $2x_{n+1}<3-\\frac{1}{x_n^{2}}\\le2x_n$ 得 $x_{n+1}<x_n$，故 $\\{x_n\\}$ 单调递减。",
          "③ 又 $x_n>0$，有下界 0，故收敛，设 $x_n\\to A\\ge0$。",
          "④ 若 $A=0$，则 $\\frac{1}{x_n^{2}}\\to+\\infty$，与 $2x_{n+1}<3$ 矛盾，故 $A>0$。",
          "⑤ 取极限得 $2A+\\frac{1}{A^{2}}\\le3$；又恒有 $2A+\\frac{1}{A^{2}}\\ge3$，故等号成立，$A=1$。"
        ],
        "pitfalls": [
          "忘记排除 $A=0$（极限为 0 时 $\\frac{1}{x_n^2}$ 会爆，与条件冲突）。",
          "只证递减不证有下界。"
        ],
        "dependencies": [
          "单调有界准则",
          "均值不等式"
        ],
        "source": "习题课 第 13 页",
        "id": "seq-ex-13"
      },
      {
        "type": "example",
        "label": "题 14",
        "title": "设 $a_0=a$，$a_1=b$，$a_{n+1}=\\frac{a_n+a_{n-1}}{2}$，证明收敛并求极限",
        "statement": "设 $a_0=a$，$a_1=b$，$a_{n+1}=\\frac{a_n+a_{n-1}}{2}$（$n=1,2,\\cdots$），证明 $\\{a_n\\}$ 收敛并求 $\\lim_{n\\to\\infty}a_n$。",
        "conditions": [],
        "conclusion": [
          "收敛，极限为 $\\frac a3+\\frac{2b}{3}$。"
        ],
        "intuition": "差分是等比数列，用望远镜求和直接写出通项，收敛性随之而来。",
        "proofIdea": [
          "① $a_{n+1}-a_n=\\frac{a_n+a_{n-1}}{2}-a_n=-\\frac{a_n-a_{n-1}}{2}$，故 $a_{n+1}-a_n=\\left(-\\frac12\\right)^{n}(b-a)$。",
          "② 望远镜：$a_{n+1}=a+\\sum_{k=0}^{n}(a_{k+1}-a_k)=a+(b-a)\\sum_{k=0}^{n}\\left(-\\frac12\\right)^{k}$。",
          "③ 等比求和：$a_{n+1}=a+(b-a)\\dfrac{1-\\left(-\\frac12\\right)^{n+1}}{1+\\frac12}$。",
          "④ 令 $n\\to\\infty$：$a_{n+1}\\to a+\\frac23(b-a)=\\frac a3+\\frac{2b}{3}$，极限存在即收敛。"
        ],
        "pitfalls": [
          "用单调有界却搞不清奇偶项的单调方向——本题直接写通项更快。"
        ],
        "dependencies": [
          "等比数列求和",
          "望远镜求和"
        ],
        "source": "习题课 第 14 页",
        "id": "seq-ex-14"
      },
      {
        "type": "example",
        "label": "题 15",
        "title": "设 $x_n=\\sum_{k=1}^{n}\\frac{\\cos k}{k(k+1)}$，证明收敛",
        "statement": "设 $x_n=\\frac{\\cos1}{1\\cdot2}+\\frac{\\cos2}{2\\cdot3}+\\cdots+\\frac{\\cos n}{n(n+1)}$，证明 $\\{x_n\\}$ 收敛。",
        "conditions": [],
        "conclusion": [
          "收敛（极限无初等封闭形式）。"
        ],
        "intuition": "和式写不出封闭形式，但尾部可以裂项压到 $\\frac1n$——Cauchy 准则的标准用法。",
        "proofIdea": [
          "① 对任意 $p\\in\\mathbb{N}^{+}$，$|x_{n+p}-x_n|\\le\\sum_{k=n+1}^{n+p}\\frac{|\\cos k|}{k(k+1)}\\le\\sum_{k=n+1}^{n+p}\\frac{1}{k(k+1)}$。",
          "② 裂项：$\\sum_{k=n+1}^{n+p}\\frac{1}{k(k+1)}=\\frac{1}{n+1}-\\frac{1}{n+p+1}<\\frac{1}{n+1}\\le\\frac1n$。",
          "③ 任给 $\\varepsilon>0$，取 $N=\\left[\\frac1\\varepsilon\\right]$，当 $n>N$ 时对一切 $p$ 有 $|x_{n+p}-x_n|<\\varepsilon$。",
          "④ 由 Cauchy 收敛准则，$\\{x_n\\}$ 收敛。"
        ],
        "pitfalls": [
          "只算 $|x_{n+1}-x_n|\\to0$，这不足以推出收敛。"
        ],
        "dependencies": [
          "Cauchy 收敛准则",
          "裂项相消"
        ],
        "source": "习题课 第 27 页",
        "id": "seq-ex-15"
      },
      {
        "type": "example",
        "label": "题 16",
        "title": "设 $x_n=1+\\frac{1}{\\sqrt2}+\\cdots+\\frac{1}{\\sqrt n}$，证明 $\\lim x_n$ 不存在",
        "statement": "设 $x_n=1+\\frac{1}{\\sqrt2}+\\cdots+\\frac{1}{\\sqrt n}$，证明 $\\lim_{n\\to\\infty}x_n$ 不存在。",
        "conditions": [],
        "conclusion": [
          "发散到 $+\\infty$。"
        ],
        "intuition": "用 Cauchy 准则的否定形式：取 $m=2n$，尾部 $n$ 项每项不小于 $\\frac{1}{\\sqrt{2n}}$，和至少是常数。",
        "proofIdea": [
          "① 取 $\\varepsilon_0=\\frac{1}{\\sqrt2}$。对任意 $N$，取 $n>N$（且 $n\\ge2$），令 $m=2n$。",
          "② $|x_{m}-x_n|=\\sum_{k=n+1}^{2n}\\frac{1}{\\sqrt k}\\ge\\frac{n}{\\sqrt{2n}}=\\frac{\\sqrt n}{\\sqrt2}>\\frac{1}{\\sqrt2}=\\varepsilon_0$。",
          "③ 故 $\\{x_n\\}$ 不是 Cauchy 列，由 Cauchy 收敛准则，$\\lim x_n$ 不存在。",
          "④ 直接法（等价）：$x_n\\ge n\\cdot\\frac{1}{\\sqrt n}=\\sqrt n\\to+\\infty$。"
        ],
        "pitfalls": [
          "只证「$x_n$ 递增」就说不存在——递增也可能收敛。",
          "$\\varepsilon_0$ 取得依赖 $n$（如取 $\\varepsilon_0=\\frac{\\sqrt n}{\\sqrt2}$），逻辑作废。"
        ],
        "dependencies": [
          "Cauchy 收敛准则",
          "否定形式"
        ],
        "source": "习题课 第 28 页",
        "id": "seq-ex-16"
      }
    ]
  },
  {
    "number": "4.4",
    "bookChapter": "4",
    "title": "易错点清单",
    "lead": "把 16 题里最容易失分的地方集中列出来。考前只看这一页，比再刷十道题有用。",
    "map": [
      "存在性",
      "放缩",
      "准则",
      "边界"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "pitfall",
        "label": "易错 1",
        "title": "把「取极限」当成「证明存在」",
        "statement": "拿到递推式直接写「两边取极限得 $A=f(A)$」，然后宣布答案。",
        "conditions": [],
        "conclusion": [
          "必须先独立证明 $\\{x_n\\}$ 收敛，才允许设 $\\lim x_n=A$。"
        ],
        "intuition": "循环论证在阅卷里是硬伤，往往整题不得分。",
        "proofIdea": [
          "① 先找有界性（归纳法），再找单调性（作差/作比）。",
          "② 有了存在性，才写「设 $\\lim x_n=A$」。"
        ],
        "pitfalls": [
          "题 11、12、13 的评分点里，「证明存在」通常占一半分数。"
        ],
        "dependencies": [],
        "source": "习题课 第 6 页、第 11–13 页",
        "id": "seq-p1"
      },
      {
        "type": "pitfall",
        "label": "易错 2",
        "title": "夹逼时两端不同阶",
        "statement": "把 $n$ 项和放大成「$n\\times$最大项」后只剩上界，下界写成 0，两端不相等。",
        "conditions": [],
        "conclusion": [
          "两端必须趋于同一个有限值，否则夹逼失效。"
        ],
        "intuition": "夹逼的本质是「阶相同」，不是「有界就行」。",
        "proofIdea": [
          "① 放大、缩小时都保留 $n$ 的阶。",
          "② 若两端极限不同，说明放缩太粗，要重新找更贴的界。"
        ],
        "pitfalls": [
          "题 2(3)、2(6) 都靠「保留阶」才成功。"
        ],
        "dependencies": [],
        "source": "习题课 第 2–3 页",
        "id": "seq-p2"
      },
      {
        "type": "pitfall",
        "label": "易错 3",
        "title": "用相邻差代替 Cauchy 条件",
        "statement": "验证 $|x_{n+1}-x_n|\\to0$ 就断言收敛。",
        "conditions": [],
        "conclusion": [
          "Cauchy 条件要求任意 $p$ 项之和都小，$p=1$ 只是特例。"
        ],
        "intuition": "调和级数 $\\sum\\frac1k$ 的相邻差 $\\frac1n\\to0$，但它发散。",
        "proofIdea": [
          "① 写 $|x_{n+p}-x_n|$，保留 $p$。",
          "② 放大后要能说明「与 $p$ 无关」。"
        ],
        "pitfalls": [
          "题 15 的正确写法必须出现 $p$。"
        ],
        "dependencies": [],
        "source": "习题课 第 26–27 页",
        "id": "seq-p3"
      },
      {
        "type": "pitfall",
        "label": "易错 4",
        "title": "只证单调，不证有界",
        "statement": "题 13 只说「$x_{n+1}<x_n$，所以收敛」。",
        "conditions": [],
        "conclusion": [
          "单调 + 有界才是充分条件；单调本身可能发散（如 $x_n=n$）。"
        ],
        "intuition": "递减数列必须有下界（本题是 0），递增数列必须有上界。",
        "proofIdea": [
          "① 递减：说明 $x_n>0$（或 $\\ge$ 某常数）。",
          "② 递增：说明 $x_n\\le$ 某常数，界通常由递推式读出。"
        ],
        "pitfalls": [
          "题 13 的下界 0 来自「正数列」这个条件，要引用。"
        ],
        "dependencies": [],
        "source": "习题课 第 13 页",
        "id": "seq-p4"
      },
      {
        "type": "pitfall",
        "label": "易错 5",
        "title": "分段极限漏掉 $|x|=1$",
        "statement": "求 $\\lim\\frac{x^{2n+1}-x}{x^{2n}+1}$ 时只分 $|x|<1$ 与 $|x|>1$。",
        "conditions": [],
        "conclusion": [
          "$x=\\pm1$ 处 $x^{2n}=1$，属于第三种情形，必须单独算。"
        ],
        "intuition": "分段点是命题人最爱设的陷阱，也是压轴判断的高发区。",
        "proofIdea": [
          "① 先列出使 $x^{2n}$ 行为改变的临界值（这里是 $\\pm1$）。",
          "② 逐个代入算，再写成分段函数。"
        ],
        "pitfalls": [
          "题 8 的答案必须出现三段。"
        ],
        "dependencies": [],
        "source": "习题课 第 8 页",
        "id": "seq-p5"
      },
      {
        "type": "pitfall",
        "label": "易错 6",
        "title": "解出两个根不取舍",
        "statement": "题 11 得出 $A=1\\pm\\sqrt{1-a}$ 就停笔。",
        "conditions": [],
        "conclusion": [
          "要结合 $x_n$ 的取值范围（这里 $x_n\\le1$）舍去 $1+\\sqrt{1-a}$。"
        ],
        "intuition": "极限必须落在数列的取值范围内，否则不是该数列的极限。",
        "proofIdea": [
          "① 由归纳得到的界确定 $A$ 的范围。",
          "② 只保留落在该范围内的根。"
        ],
        "pitfalls": [
          "题 11、12 都有这个问题（题 12 取正根）。"
        ],
        "dependencies": [],
        "source": "习题课 第 6 页、第 11 页",
        "id": "seq-p6"
      },
      {
        "type": "pitfall",
        "label": "易错 7",
        "title": "把「振荡」当成「不存在」的证明",
        "statement": "写「$\\sin n$ 在 $[-1,1]$ 之间来回振荡，所以极限不存在」。",
        "conditions": [],
        "conclusion": [
          "振荡只是描述；严格证明要么给两条极限不同的子列，要么反证推出矛盾。"
        ],
        "intuition": "阅卷只看逻辑链，不看直觉。",
        "proofIdea": [
          "① 反设收敛，推出矛盾（题 9 的做法）；",
          "② 或构造子列 $n_k$ 使 $\\sin n_k\\to1$、另一子列 $\\to-1$（需要有理逼近定理，较难）。"
        ],
        "pitfalls": [
          "题 9 用和角公式反解 $\\cos n$ 是最省力的严格路线。"
        ],
        "dependencies": [],
        "source": "习题课 第 10 页",
        "id": "seq-p7"
      },
      {
        "type": "pitfall",
        "label": "易错 8",
        "title": "双阶乘与阶乘的放缩方向搞反",
        "statement": "用 $(2n)!!\\le(2n-1)!!$ 或把 $(2n)!!$ 当成 $(2n)!$。",
        "conditions": [],
        "conclusion": [
          "$(2n)!!=2^{n}n!$ 远小于 $(2n)!$；$(2n-1)!!<(2n)!!$。"
        ],
        "intuition": "双阶乘只取同奇偶的因子，别和阶乘混。",
        "proofIdea": [
          "① 展开写几项再判断大小。",
          "② 用 $\\frac{2k-1}{2k}<\\sqrt{\\frac{2k-1}{2k+1}}$ 之类的不等式造可塌缩的连乘。"
        ],
        "pitfalls": [
          "题 7 的核心就是这个不等式。"
        ],
        "dependencies": [],
        "source": "习题课 第 4 页",
        "id": "seq-p8"
      },
      {
        "type": "pitfall",
        "label": "易错 9",
        "title": "看到和式就套定积分定义",
        "statement": "题 2(5) 分母为 $n^{2}+k\\pi$，仍硬写成 $\\frac1n\\sum f(\\frac kn)$。",
        "conditions": [],
        "conclusion": [
          "定积分定义要求每项含 $\\frac1n$、指标以 $\\frac kn$ 的形式出现。"
        ],
        "intuition": "结构不对，套公式必错；本题只能夹逼。",
        "proofIdea": [
          "① 先检查是否每项都能写成 $\\frac1n f(\\frac kn)$。",
          "② 不能则回到夹逼或裂项。"
        ],
        "pitfalls": [
          "题 2(5)、2(6) 都是夹逼而非积分。"
        ],
        "dependencies": [],
        "source": "习题课 第 3 页",
        "id": "seq-p9"
      },
      {
        "type": "pitfall",
        "label": "易错 10",
        "title": "常用求和公式记错",
        "statement": "$\\sum k^{2}=\\frac{n(n+1)(2n+1)}{6}$ 写成 $\\frac{n(n+1)(2n+1)}{3}$，或漏掉 $\\frac16$。",
        "conditions": [],
        "conclusion": [
          "题 2(6) 的答案 $\\frac13$ 完全依赖这个系数。"
        ],
        "intuition": "这类公式必须默写到条件反射。",
        "proofIdea": [
          "① 用 $n=1$ 验算：$\\frac{1\\cdot2\\cdot3}{6}=1$。",
          "② 用 $n=2$ 验算：$\\frac{2\\cdot3\\cdot5}{6}=5=1+4$。"
        ],
        "pitfalls": [
          "考前用两个小值验算是划算的检查手段。"
        ],
        "dependencies": [],
        "source": "习题课 第 3 页",
        "id": "seq-p10"
      }
    ]
  }
]
;

window.MATH_REVIEW_PROOFS = window.MATH_REVIEW_PROOFS || {};
Object.assign(window.MATH_REVIEW_PROOFS, 
{
  "seq-ex-1": [
    "① 记 $b_n=\\frac{a^n}{n!}$，算比值 $\\frac{b_{n+1}}{b_n}=\\frac{a}{n+1}$。",
    "② 取 $m=[a]+1$，当 $n\\ge m$ 时比值 $<1$，故数列从某项起递减且有下界 0。",
    "③ 由单调有界得极限存在，设为 $L$；在 $b_{n+1}=b_n\\cdot\\frac{a}{n+1}$ 两边取极限得 $L=0$。",
    "④ 备用写法（夹逼）：$b_n\\le\\frac{a^m}{m!}\\left(\\frac{a}{m+1}\\right)^{n-m}\\to0$。"
  ],
  "seq-ex-2a": [
    "① $1-\\frac{1}{k^2}=\\frac{(k-1)(k+1)}{k^2}$。",
    "② 乘积 $=\\frac{(1\\cdot3)(2\\cdot4)\\cdots((n-1)(n+1))}{(2\\cdot3\\cdots n)^2}$。",
    "③ 分子中的 $2,3,\\dots,n-1$ 与分母部分约掉，只剩 $\\frac{n+1}{2n}$。",
    "④ 令 $n\\to\\infty$ 得 $\\frac12$。"
  ],
  "seq-ex-2b": [
    "① $1+2+\\cdots+k=\\frac{k(k+1)}{2}$，所以每项 $=\\frac{1}{k(k+1)}=\\frac1k-\\frac1{k+1}$。",
    "② 求和 $=\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1n-\\frac1{n+1}\\right)=\\frac{n}{n+1}$。",
    "③ 原式 $=\\left(\\frac{n}{n+1}\\right)^{n}=\\dfrac{1}{\\left(1+\\frac1n\\right)^{n}}$。",
    "④ 分母 $\\to e$，故极限为 $\\frac1e$。"
  ],
  "seq-ex-2c": [
    "① 下界：$\\frac{n!}{n!}=1$，故原式 $\\ge1$。",
    "② 上界：$1!+2!+\\cdots+(n-2)!\\le(n-2)(n-2)!$。",
    "③ 于是原式 $\\le\\frac{(n-2)(n-2)!+(n-1)!+n!}{n!}=\\frac{n-2}{n(n-1)}+\\frac1n+1$。",
    "④ 上界 $\\to1$，由夹逼得极限 $1$。"
  ],
  "seq-ex-2d": [
    "① $n^{2}\\le n^{2}+n+\\sin^{2}n\\le n^{2}+n+1\\le2n^{2}$（$n\\ge1$）。",
    "② 开 $n$ 次方：$(\\sqrt[n]{n})^{2}\\le x_n\\le\\sqrt[n]{2}\\,(\\sqrt[n]{n})^{2}$。",
    "③ $\\sqrt[n]{n}\\to1$，$\\sqrt[n]{2}\\to1$，两端都 $\\to1$。",
    "④ 由夹逼得 $x_n\\to1$。"
  ],
  "seq-ex-2e": [
    "① 括号内共 $n$ 项，最小项 $\\frac{1}{n^{2}+n\\pi}$，最大项 $\\frac{1}{n^{2}+\\pi}$。",
    "② 于是 $\\frac{n^{2}}{n^{2}+n\\pi}\\le$ 原式 $\\le\\frac{n^{2}}{n^{2}+\\pi}$。",
    "③ 两端都 $\\to1$。",
    "④ 由夹逼得极限 $1$。"
  ],
  "seq-ex-2f": [
    "① 因为 $kn\\le n^{2}$，有 $\\sqrt{n^{6}+n}\\le\\sqrt{n^{6}+kn}\\le\\sqrt{n^{6}+n^{2}}$。",
    "② 于是 $\\frac{\\sum k^{2}}{\\sqrt{n^{6}+n^{2}}}\\le$ 原式 $\\le\\frac{\\sum k^{2}}{\\sqrt{n^{6}+n}}$。",
    "③ $\\sum_{k=1}^{n}k^{2}=\\frac{n(n+1)(2n+1)}{6}\\sim\\frac{n^{3}}{3}$，而 $\\sqrt{n^{6}+n^{2}}\\sim n^{3}$。",
    "④ 两端都 $\\to\\frac13$，由夹逼得极限 $\\frac13$。"
  ],
  "seq-ex-7": [
    "① 记 $a_n=\\frac{(2n-1)!!}{(2n)!!}$，显然 $a_n>0$。",
    "② 关键不等式 $\\frac{2k-1}{2k}<\\sqrt{\\frac{2k-1}{2k+1}}$（等价于 $(2k-1)(2k+1)<(2k)^{2}$）。",
    "③ 连乘得 $a_n<\\prod_{k=1}^{n}\\sqrt{\\frac{2k-1}{2k+1}}=\\frac{1}{\\sqrt{2n+1}}$。",
    "④ 于是 $0<a_n<\\frac{1}{\\sqrt{2n+1}}\\to0$，由夹逼得 $a_n\\to0$。"
  ],
  "seq-ex-8": [
    "① $|x|<1$：$x^{2n}\\to0$，$x^{2n+1}\\to0$，故 $f(x)=\\frac{0-x}{0+1}=-x$。",
    "② $|x|>1$：分子分母同除 $x^{2n}$，得 $\\frac{x-x^{1-2n}}{1+x^{-2n}}\\to x$。",
    "③ $|x|=1$：$x^{2n}=1$，$x^{2n+1}=x$，分子为 $x-x=0$，故 $f(x)=0$。",
    "④ 合并写成分段函数，并注明 $x=\\pm1$ 处取 0。"
  ],
  "seq-ex-9": [
    "① 反设 $\\lim_{n\\to\\infty}\\sin n=A$。",
    "② 由 $\\sin(n+1)=\\sin n\\cos1+\\cos n\\sin1$ 解出 $\\cos n=\\frac{\\sin(n+1)-\\sin n\\cos1}{\\sin1}\\to A\\tan\\frac12$。",
    "③ 由 $\\sin(n+2)=\\sin n\\cos2+\\cos n\\sin2$ 同理得 $\\cos n\\to A\\tan1$。",
    "④ 两式相等：$A\\left(\\tan1-\\tan\\frac12\\right)=0$，因 $\\tan1\\ne\\tan\\frac12$，故 $A=0$。",
    "⑤ 于是 $\\sin n\\to0$ 且 $\\cos n\\to0$，与 $\\sin^{2}n+\\cos^{2}n=1$ 矛盾。故极限不存在。"
  ],
  "seq-ex-10": [
    "① 各项为正，故 $\\{x_n\\}$ 单调递增。",
    "② 对 $k\\ge2$，$k!\\ge k(k-1)$，故 $\\frac{1}{k!+k}\\le\\frac{1}{k!}\\le\\frac{1}{k(k-1)}$。",
    "③ 于是 $x_n\\le\\frac12+\\sum_{k=2}^{n}\\frac{1}{k(k-1)}=\\frac12+\\left(1-\\frac1n\\right)<\\frac32$。",
    "④ 单调递增且有上界，由单调有界准则收敛。"
  ],
  "seq-ex-11": [
    "① $x_2-x_1=\\frac{a^2}{8}>0$，起步是递增的。",
    "② 归纳：若 $x_n>x_{n-1}>0$，则 $x_{n+1}-x_n=\\frac{(x_n-x_{n-1})(x_n+x_{n-1})}{2}>0$，故 $\\{x_n\\}$ 单调递增。",
    "③ $x_1=\\frac a2<1$；若 $x_n<1$，则 $x_{n+1}<\\frac{a+1}{2}\\le1$，故有上界 1。",
    "④ 单调有界，极限存在，设为 $A$；在递推式两边取极限：$A=\\frac{a+A^{2}}{2}$。",
    "⑤ 解得 $A=1\\pm\\sqrt{1-a}$，由 $A\\le1$ 取 $A=1-\\sqrt{1-a}$。"
  ],
  "seq-ex-12": [
    "① 归纳得 $1\\le x_n\\le2$。",
    "② 消去中间变量：$x_{n+2}=1+\\frac{1}{x_{n+1}}=1+\\frac{x_n}{1+x_n}$。",
    "③ 记 $f(t)=1+\\frac{t}{1+t}$，则 $f(u)-f(v)=\\frac{u-v}{(1+u)(1+v)}$，故 $x_{n+2}-x_n$ 与 $x_{n+1}-x_{n-1}$ 同号。",
    "④ $x_2-x_0=\\frac12>0$，$x_3-x_1=-\\frac13<0$，故 $\\{x_{2n}\\}$ 递增（有上界 2），$\\{x_{2n+1}\\}$ 递减（有下界 1），各自收敛。",
    "⑤ 在 $x_{n+2}=1+\\frac{x_n}{1+x_n}$ 两边取极限：$A=1+\\frac{A}{1+A}$，即 $A^{2}-A-1=0$，取正根 $\\frac{1+\\sqrt5}{2}$；偶数子列同解。",
    "⑥ 两条子列极限相同，故 $\\lim x_n=\\frac{1+\\sqrt5}{2}$。（也可用压缩估计 $|x_{n+1}-A|=\\frac{|x_n-A|}{x_nA}\\le\\frac{|x_n-A|}{A}$，$A>1$。）"
  ],
  "seq-ex-13": [
    "① 对任意 $t>0$，$2t+\\frac{1}{t^{2}}\\ge3$（均值不等式，$t=1$ 取等）。",
    "② 由 $2x_{n+1}<3-\\frac{1}{x_n^{2}}\\le2x_n$ 得 $x_{n+1}<x_n$，故 $\\{x_n\\}$ 单调递减。",
    "③ 又 $x_n>0$，有下界 0，故收敛，设 $x_n\\to A\\ge0$。",
    "④ 若 $A=0$，则 $\\frac{1}{x_n^{2}}\\to+\\infty$，与 $2x_{n+1}<3$ 矛盾，故 $A>0$。",
    "⑤ 取极限得 $2A+\\frac{1}{A^{2}}\\le3$；又恒有 $2A+\\frac{1}{A^{2}}\\ge3$，故等号成立，$A=1$。"
  ],
  "seq-ex-14": [
    "① $a_{n+1}-a_n=\\frac{a_n+a_{n-1}}{2}-a_n=-\\frac{a_n-a_{n-1}}{2}$，故 $a_{n+1}-a_n=\\left(-\\frac12\\right)^{n}(b-a)$。",
    "② 望远镜：$a_{n+1}=a+\\sum_{k=0}^{n}(a_{k+1}-a_k)=a+(b-a)\\sum_{k=0}^{n}\\left(-\\frac12\\right)^{k}$。",
    "③ 等比求和：$a_{n+1}=a+(b-a)\\dfrac{1-\\left(-\\frac12\\right)^{n+1}}{1+\\frac12}$。",
    "④ 令 $n\\to\\infty$：$a_{n+1}\\to a+\\frac23(b-a)=\\frac a3+\\frac{2b}{3}$，极限存在即收敛。"
  ],
  "seq-ex-15": [
    "① 对任意 $p\\in\\mathbb{N}^{+}$，$|x_{n+p}-x_n|\\le\\sum_{k=n+1}^{n+p}\\frac{|\\cos k|}{k(k+1)}\\le\\sum_{k=n+1}^{n+p}\\frac{1}{k(k+1)}$。",
    "② 裂项：$\\sum_{k=n+1}^{n+p}\\frac{1}{k(k+1)}=\\frac{1}{n+1}-\\frac{1}{n+p+1}<\\frac{1}{n+1}\\le\\frac1n$。",
    "③ 任给 $\\varepsilon>0$，取 $N=\\left[\\frac1\\varepsilon\\right]$，当 $n>N$ 时对一切 $p$ 有 $|x_{n+p}-x_n|<\\varepsilon$。",
    "④ 由 Cauchy 收敛准则，$\\{x_n\\}$ 收敛。"
  ],
  "seq-ex-16": [
    "① 取 $\\varepsilon_0=\\frac{1}{\\sqrt2}$。对任意 $N$，取 $n>N$（且 $n\\ge2$），令 $m=2n$。",
    "② $|x_{m}-x_n|=\\sum_{k=n+1}^{2n}\\frac{1}{\\sqrt k}\\ge\\frac{n}{\\sqrt{2n}}=\\frac{\\sqrt n}{\\sqrt2}>\\frac{1}{\\sqrt2}=\\varepsilon_0$。",
    "③ 故 $\\{x_n\\}$ 不是 Cauchy 列，由 Cauchy 收敛准则，$\\lim x_n$ 不存在。",
    "④ 直接法（等价）：$x_n\\ge n\\cdot\\frac{1}{\\sqrt n}=\\sqrt n\\to+\\infty$。"
  ]
}
);
