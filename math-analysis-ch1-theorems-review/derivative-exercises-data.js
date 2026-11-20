// 工科数学分析 I · 第五章 习题课：求导法与中值定理（40 题全解 + 方法总结）
// 由 tmp/build_derivative_exercises_data.py 生成，请勿手改。
window.MATH_REVIEW_EXERCISE_CHAPTERS = (window.MATH_REVIEW_EXERCISE_CHAPTERS || []).concat(
[
  {
    "number": "6.1",
    "bookChapter": "6",
    "title": "方法地图：四十题背后的八套套路",
    "lead": "这 40 道题看着五花八门，实际只有两条主线：前半段把「求导」拆成四件套，后半段把「证存在」拆成「造辅助函数」。先看这张地图，再做题，就不会在题海里迷路。",
    "map": [
      "识别结构",
      "选定工具",
      "执行求导",
      "回代检验"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "method",
        "label": "套路 1",
        "title": "链式法则：由外向内逐层剥",
        "statement": "求 $\\frac{dy}{dx}$ 时先认最外层结构：外层求导后把内层原样留在括号里，再乘内层导数，直到剥到 $x$。",
        "conditions": [],
        "conclusion": [
          "外层留壳：$f'(g(x))$ 里 $g(x)$ 不动，只有最外层被求导。",
          "内层若本身是乘积或商，继续用乘积/商法则，不要跳层。",
          "每剥一层乘一次该层导数；本节题 1(2)、2(1)、2(9)、2(2)。"
        ],
        "intuition": "复合函数像套娃，求导就是一层层拆，拆一层记一个乘数。",
        "proofIdea": [
          "① 写清 $y=f(u),\\ u=g(x)$ 的层次。",
          "② 由外向内写 $f'(u)\\cdot g'(x)$。",
          "③ 逐层代入 $u$ 的表达式。",
          "④ 化简并把同一括号内的项合并。"
        ],
        "pitfalls": [
          "$e^{-f(x)}$ 的指数是 $-f(x)$，求导必须带负号。",
          "$f(e^{x}\\cos x)$ 的内层是乘积，漏乘 $(e^{x}\\cos x)'$ 是本节最高频错误。"
        ],
        "dependencies": [
          "复合函数",
          "乘积法则"
        ],
        "source": "习题课 求导法与中值定理 第 8 页",
        "id": "der-m1"
      },
      {
        "type": "method",
        "label": "套路 2",
        "title": "隐函数求导：两边同导、解出 y′、再回代",
        "statement": "方程 $F(x,y)=0$ 两边对 $x$ 求导，把 $y$ 看成 $y(x)$，得到含 $y'$ 的一次方程，解出 $y'$。",
        "conditions": [],
        "conclusion": [
          "对含 $y$ 的项求导时，尾巴上必须挂一个 $y'$（链式法则）。",
          "解出 $y'$ 后再求二阶导时，把已得的 $y'$ 代回，不要重新解方程。",
          "本节题：2(3) 的 $x+y=f(x^{2}-y)$、2(6) 的方程组。"
        ],
        "intuition": "隐函数求导不是新方法，只是「把 $y$ 当函数」的链式法则。",
        "proofIdea": [
          "① 两边对 $x$ 求导，$y$ 的项挂 $y'$。",
          "② 把所有 $y'$ 项移到一边，解出 $y'=\\dfrac{A}{B}$。",
          "③ 求二阶导时，对 $y'$ 的表达式再求一次导，其中 $y$ 用原方程代、$y'$ 用上一步结果代。",
          "④ 整理成关于 $f'$、$f''$ 的单项分式。"
        ],
        "pitfalls": [
          "$f(x^{2}-y)$ 求导时漏掉内层的 $-y'$。",
          "二阶导直接把 $y'$ 当常数，忘记它还是 $x$ 的函数。"
        ],
        "dependencies": [
          "链式法则"
        ],
        "source": "习题课 求导法与中值定理 第 33 页",
        "id": "der-m2"
      },
      {
        "type": "method",
        "label": "套路 3",
        "title": "参数方程求导：二阶导要再除一次 x′(t)",
        "statement": "由 $x=x(t),\\ y=y(t)$ 给出的曲线，$\\frac{dy}{dx}=\\frac{y'(t)}{x'(t)}$；二阶导必须写成 $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)=\\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{x'(t)}$。",
        "conditions": [],
        "conclusion": [
          "一阶导是两个 $t$ 的导数相除，结果仍是 $t$ 的函数。",
          "二阶导要对 $t$ 再求导一次，然后除以 $x'(t)$ —— 这是「除以 $dx$」的唯一正确写法。",
          "本节题：2(4) 的摆线、2(5) 的心形线。"
        ],
        "intuition": "$\\frac{d}{dx}$ 和 $\\frac{d}{dt}$ 差一个因子 $\\frac{dt}{dx}=\\frac{1}{x'(t)}$，所以每次对 $x$ 求导都要补除一次 $x'(t)$。",
        "proofIdea": [
          "① 分别求 $x'(t)$、$y'(t)$，得一阶导。",
          "② 把一阶导对 $t$ 求导（商的法则）。",
          "③ 再除以 $x'(t)$，整理。",
          "④ 代入具体 $t$ 值。"
        ],
        "pitfalls": [
          "把二阶导写成 $\\frac{y''(t)}{x''(t)}$，这是最典型的零分写法。",
          "对 $t$ 求了两次导却忘了最后除以 $x'(t)$。"
        ],
        "dependencies": [
          "参数方程",
          "商的求导法则"
        ],
        "source": "习题课 求导法与中值定理 第 40 页",
        "id": "der-m3"
      },
      {
        "type": "method",
        "label": "套路 4",
        "title": "幂指函数：先取对数或写成指数",
        "statement": "形如 $u(x)^{v(x)}$ 的函数，化成 $e^{v\\ln u}$ 再求导，或两边取对数后求导。",
        "conditions": [],
        "conclusion": [
          "$u^{v}=e^{v\\ln u}$ 恒等变形后就是普通复合函数。",
          "求导结果 $=u^{v}\\left(v'\\ln u+v\\frac{u'}{u}\\right)$，记不住就用变形式现推。",
          "本节题：2(2) 的 $x^{a^{a}}+a^{x^{a}}+x^{\\tan x}$、1(2) 的 $e^{-f(x)}$。"
        ],
        "intuition": "幂指函数是「底和指数都在动」，取对数把乘法变加法、指数变乘积，就回到熟悉的世界。",
        "proofIdea": [
          "① 确认底与指数都含 $x$。",
          "② 写成 $e^{v\\ln u}$ 或两边取对数。",
          "③ 用乘积法则求导。",
          "④ 把 $u^{v}$ 乘回去。"
        ],
        "pitfalls": [
          "把 $x^{a^{a}}$ 当幂函数、把 $a^{x^{a}}$ 当指数函数分别求，忽略 $a^{a}$ 里的常数结构。",
          "取对数后忘记两边都要乘回原函数。"
        ],
        "dependencies": [
          "指数函数",
          "对数求导法"
        ],
        "source": "习题课 求导法与中值定理 第 28 页",
        "id": "der-m4"
      },
      {
        "type": "method",
        "label": "套路 5",
        "title": "高阶导：先拆项，再用标准公式或莱布尼茨",
        "statement": "求 $y^{(n)}$ 时先看结构：有理分式先拆成 $\\frac{1}{ax+b}$ 的线性组合；乘积形式用莱布尼茨公式；三角与指数用周期公式。",
        "conditions": [],
        "conclusion": [
          "$\\left(\\frac{1}{ax+b}\\right)^{(n)}=\\frac{(-1)^{n}n!a^{n}}{(ax+b)^{n+1}}$，这是拆项后的标准出口。",
          "莱布尼茨 $(uv)^{(n)}=\\sum_{k=0}^{n}C_{n}^{k}u^{(k)}v^{(n-k)}$，当 $u$ 是多项式时只有前几项非零。",
          "本节题：2(7) 的 $\\frac{3x}{1-x-2x^{2}}$、2(8) 的 $x^{2}\\sin ax$。"
        ],
        "intuition": "高阶导的难点不在公式，而在「先化简成标准型」：不拆项硬求，越求越乱。",
        "proofIdea": [
          "① 有理分式：待定系数拆成部分分式。",
          "② 乘积：把容易求高阶导的因子当 $v$，多项式当 $u$。",
          "③ 套标准公式，注意符号 $(-1)^{n}$ 与幂次。",
          "④ 用 $n=1,2$ 回代检验。"
        ],
        "pitfalls": [
          "$\\frac{3x}{(1+x)(1-2x)}$ 不拆项直接求导。",
          "拆项时待定系数算错符号，导致 $n$ 阶导整体差一个负号。"
        ],
        "dependencies": [
          "部分分式",
          "莱布尼茨公式"
        ],
        "source": "习题课 求导法与中值定理 第 54、61 页",
        "id": "der-m5"
      },
      {
        "type": "method",
        "label": "套路 6",
        "title": "分段点：先连续，再左右导数",
        "statement": "分段函数在分段点 $x_0$ 处可导，必须依次验证：$f$ 在 $x_0$ 连续；$f'_{-}(x_0)=f'_{+}(x_0)$。",
        "conditions": [],
        "conclusion": [
          "连续是可导的必要条件，先验证它，否则后面的左右导数无意义。",
          "左右导数只能用定义算，不能对两段分别求导后代点。",
          "本节题：1(5) 的 $x=1$、题 2(12) 的 $|x|$ 因子、题 4 的 $x=0$、题 5 的 $g'(0)$。"
        ],
        "intuition": "分段点的导数由「两侧逼近」决定，求导公式只在段内部有效。",
        "proofIdea": [
          "① 算 $f(x_{0}^{-})$、$f(x_{0}^{+})$、$f(x_{0})$，三者相等才有连续性。",
          "② 用定义写 $f'_{-}(x_{0})=\\lim_{h\\to0^{-}}\\frac{f(x_{0}+h)-f(x_{0})}{h}$，右侧同理。",
          "③ 比较两者；相等则可导，导数就是这个值。",
          "④ 若问「导数是否连续」，再用极限比较 $f'(x)$ 在 $x_0$ 的两侧极限。"
        ],
        "pitfalls": [
          "直接对两段分别求导后代点就宣布可导，不验连续。",
          "题 4 中把 $\\lim\\frac{f(x)}{x}$ 当成 $f'(0)$，实际还要再除以 $x$。"
        ],
        "dependencies": [
          "导数定义",
          "左右导数"
        ],
        "source": "习题课 求导法与中值定理 第 14、200、207 页",
        "id": "der-m6"
      },
      {
        "type": "method",
        "label": "套路 7",
        "title": "中值定理：看结论倒推辅助函数",
        "statement": "要证「存在 $\\xi$ 使某式成立」，先把结论整理成 $F'(\\xi)=0$ 的形状，再倒推 $F$。",
        "conditions": [],
        "conclusion": [
          "结论含 $f'+\\lambda f$ ⇒ 乘 $e^{\\lambda x}$；含 $f'g-fg'$ ⇒ 除 $g$；含 $f(\\xi)=\\xi$ 或 $f'(\\xi)=k$ ⇒ 造 $f(x)-x$ 或 $f(x)-kx$。",
          "造好 $F$ 后统一走「算端点值 → 出现相等 → 罗尔」。",
          "本节题：3(1)(3)(4)(5)(8)(10)(11) 全是这一条。"
        ],
        "intuition": "辅助函数不是猜出来的，是把结论的形状「反过来积分」得到的。",
        "proofIdea": [
          "① 把结论移项成 $\\text{某式}=0$。",
          "② 把这个「某式」看成 $F'$，倒推出 $F$。",
          "③ 检查 $F$ 在区间端点的值是否相等。",
          "④ 用罗尔定理收尾。"
        ],
        "pitfalls": [
          "只写「由罗尔定理得」，不写 $F$ 在端点相等是怎么来的。",
          "结论含 $f'-\\lambda f$ 时误乘 $e^{\\lambda x}$（应为 $e^{-\\lambda x}$）。"
        ],
        "dependencies": [
          "罗尔定理"
        ],
        "source": "习题课 求导法与中值定理 第 104 页",
        "id": "der-m7"
      },
      {
        "type": "method",
        "label": "套路 8",
        "title": "一致连续：把导数有界转成 Lipschitz",
        "statement": "要证 $f$ 在区间 $I$ 上一致连续，若已知 $f'$ 有界（或被某个可延拓的函数控制），就用拉格朗日用中值点把差商换成导数。",
        "conditions": [],
        "conclusion": [
          "$|f(x_{1})-f(x_{2})|=|f'(\\xi)||x_{1}-x_{2}|\\le M|x_{1}-x_{2}|$，取 $\\delta=\\varepsilon/M$。",
          "端点处导数无界的（如 $\\sqrt{x}f'(x)$），先连续延拓到闭区间，用闭区间连续函数有界。",
          "本节题：3(12)。"
        ],
        "intuition": "一致连续的本质是「差商被一致控制」，导数有界是最常见的控制手段。",
        "proofIdea": [
          "① 把已知极限存在写成「延拓后有界」，设界为 $M$。",
          "② 对任意两点用拉格朗日定理，得到 $|f(x_{1})-f(x_{2})|=|f'(\\xi)||x_{1}-x_{2}|$。",
          "③ 用 $|\\sqrt{x_{1}}-\\sqrt{x_{2}}|\\le\\sqrt{|x_{1}-x_{2}|}$ 之类的恒等式把 $|f'(\\xi)|$ 用 $M$ 与两点距离表示。",
          "④ 解出 $\\delta$ 关于 $\\varepsilon$ 的表达式。"
        ],
        "pitfalls": [
          "忘记延拓，直接说「$f'$ 在 $(0,a]$ 有界」，而 $\\sqrt{x}f'(x)$ 只在 $x=0$ 邻域被控制。",
          "$\\delta$ 里残留 $x$，就不是一致连续的证法。"
        ],
        "dependencies": [
          "拉格朗日中值定理",
          "闭区间连续函数有界"
        ],
        "source": "习题课 求导法与中值定理 第 189 页",
        "id": "der-m8"
      }
    ]
  },
  {
    "number": "6.2",
    "bookChapter": "6",
    "title": "公式工具箱：求导四件套",
    "lead": "求导题的失分点几乎全在「公式记混」和「结构认错」两处。这一页把本节真正用到的公式按「什么时候用」排好，配一条最容易错的写法。",
    "map": [
      "链式",
      "隐函数",
      "参数方程",
      "高阶导"
    ],
    "definitions": [
      {
        "label": "定义 1",
        "title": "导数、左右导数与可导",
        "statement": [
          "$f'(x_{0})=\\lim_{\\Delta x\\to0}\\frac{f(x_{0}+\\Delta x)-f(x_{0})}{\\Delta x}$，等价地 $f(x_{0}+\\Delta x)-f(x_{0})=f'(x_{0})\\Delta x+o(\\Delta x)$。",
          "左导数 $f'_{-}(x_{0})=\\lim_{\\Delta x\\to0^{-}}$，右导数 $f'_{+}(x_{0})=\\lim_{\\Delta x\\to0^{+}}$；可导 $\\iff$ 两者存在且相等。",
          "可导 $\\Rightarrow$ 连续；反之不成立（$|x|$ 在 $0$ 处）。"
        ],
        "source": "习题课 求导法与中值定理 第 8、14 页 / 第 3 章 §3.1",
        "id": "der-def-1"
      },
      {
        "label": "定义 2",
        "title": "高阶导数与 n 阶导",
        "statement": [
          "$f^{(n)}(x)=\\left(f^{(n-1)}(x)\\right)'$，$n\\ge2$；约定 $f^{(0)}=f$。",
          "记号 $y^{(n)}$、$\\frac{d^{n}y}{dx^{n}}$ 等价，注意 $n\\ge2$ 时必须加括号。",
          "求 $n$ 阶导的合法工具只有：标准公式、部分分式、莱布尼茨公式、数学归纳。"
        ],
        "source": "习题课 求导法与中值定理 第 54 页 / 第 3 章 §3.4",
        "id": "der-def-2"
      },
      {
        "label": "定义 3",
        "title": "相关变化率",
        "statement": [
          "若两个量 $u=u(t)$、$v=v(t)$ 满足约束 $F(u,v)=0$，则两边对 $t$ 求导得 $\\frac{dF}{dt}=0$，从中解出未知变化率。",
          "关键在于先写出几何约束（勾股、相似、体积公式），再对时间求导。",
          "单位必须统一，速率带符号时「增加」为正。"
        ],
        "source": "习题课 求导法与中值定理 第 70 页",
        "id": "der-def-3"
      }
    ],
    "entries": [
      {
        "type": "formula",
        "label": "公式 1",
        "title": "四则运算与链式法则",
        "statement": "$(u\\pm v)'=u'\\pm v'$，$(uv)'=u'v+uv'$，$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^{2}}$，$\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)$。",
        "conditions": [],
        "conclusion": [
          "乘积法则两项都要写，不能只写 $u'v$。",
          "商的法则分子是 $u'v-uv'$，顺序不能反。",
          "链式法则可以多层嵌套，每层乘一个因子。"
        ],
        "intuition": "导数是「线性算子 + 乘积修正」，链式法则负责处理嵌套。",
        "proofIdea": [
          "① 识别结构（和、积、商、复合）。",
          "② 套对应法则。",
          "③ 内层继续求导。",
          "④ 化简。"
        ],
        "pitfalls": [
          "商的法则写成 $\\frac{u'v+uv'}{v^{2}}$。",
          "链式法则漏掉内层导数。"
        ],
        "dependencies": [
          "导数定义"
        ],
        "source": "习题课 求导法与中值定理 第 8 页",
        "id": "der-f1"
      },
      {
        "type": "formula",
        "label": "公式 2",
        "title": "反函数求导",
        "statement": "若 $y=f(x)$ 与 $x=\\varphi(y)$ 互为反函数且 $f'(x)\\ne0$，则 $\\varphi'(y)=\\frac{1}{f'(x)}$，$\\varphi''(y)=-\\frac{f''(x)}{[f'(x)]^{3}}$。",
        "conditions": [],
        "conclusion": [
          "一阶导取倒数；二阶导多一个负号，分母三次方。",
          "推导关键是 $\\frac{d}{dy}=\\frac{d}{dx}\\cdot\\frac{dx}{dy}=\\frac{d}{dx}\\cdot\\frac{1}{f'}$。",
          "本节题：2(11)。"
        ],
        "intuition": "反函数把 $x$、$y$ 的角色互换，所以「对 $y$ 求导」要多乘一个 $\\frac{dx}{dy}$。",
        "proofIdea": [
          "① 由 $f(\\varphi(y))=y$ 两边对 $y$ 求导得 $f'\\varphi'=1$。",
          "② 再对 $y$ 求导：$f''(\\varphi')^{2}+f'\\varphi''=0$。",
          "③ 代入 $\\varphi'=1/f'$ 解出 $\\varphi''$。"
        ],
        "pitfalls": [
          "写成 $\\varphi''=\\frac{f''}{(f')^{2}}$，漏负号或漏一次方。"
        ],
        "dependencies": [
          "链式法则"
        ],
        "source": "习题课 求导法与中值定理 第 67 页",
        "id": "der-f2"
      },
      {
        "type": "formula",
        "label": "公式 3",
        "title": "参数方程的一阶与二阶导数",
        "statement": "$x=x(t),\\ y=y(t)$ 时 $\\frac{dy}{dx}=\\frac{y'(t)}{x'(t)}$，$\\frac{d^{2}y}{dx^{2}}=\\frac{\\left(\\frac{y'}{x'}\\right)'_{t}}{x'(t)}=\\frac{y''x'-y'x''}{(x')^{3}}$。",
        "conditions": [],
        "conclusion": [
          "二阶导的分子是 $y''x'-y'x''$，分母是 $(x')^{3}$。",
          "极坐标曲线先化参数式 $\\begin{cases}x=\\rho(\\theta)\\cos\\theta\\\\ y=\\rho(\\theta)\\sin\\theta\\end{cases}$ 再用本公式。",
          "本节题：2(4)、2(5)。"
        ],
        "intuition": "每次对 $x$ 求导都要补一个 $\\frac{dt}{dx}=\\frac{1}{x'}$，所以二阶导分母出现 $(x')^{3}$。",
        "proofIdea": [
          "① 求 $x'$、$y'$。",
          "② 一阶导写成商。",
          "③ 对 $t$ 求导后用商的法则展开。",
          "④ 除以 $x'$ 并化简。"
        ],
        "pitfalls": [
          "写成 $\\frac{y''}{x''}$。",
          "心形线题把 $\\frac{dy}{d\\theta}=0$ 直接当「斜率不存在」。"
        ],
        "dependencies": [
          "复合函数",
          "商的法则"
        ],
        "source": "习题课 求导法与中值定理 第 40、45 页",
        "id": "der-f3"
      },
      {
        "type": "formula",
        "label": "公式 4",
        "title": "基本初等函数导数补充表",
        "statement": "$(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^{2}}}$，$(\\arctan x)'=\\frac{1}{1+x^{2}}$，$\\left(\\ln\\left(x+\\sqrt{x^{2}-1}\\right)\\right)'=\\frac{1}{\\sqrt{x^{2}-1}}$，$(a^{x})'=a^{x}\\ln a$，$(x^{x})'=x^{x}(1+\\ln x)$。",
        "conditions": [],
        "conclusion": [
          "$\\ln(x+\\sqrt{x^{2}-1})$ 的导数是 $\\frac{1}{\\sqrt{x^{2}-1}}$，不是 $\\frac{1}{x+\\sqrt{x^{2}-1}}$。",
          "$a^{x}$ 与 $x^{a}$ 别混：底动是幂函数，指数动是指数函数。",
          "本节题：2(1) 正是这两项相加。"
        ],
        "intuition": "这些公式都是链式法则的特例，记不住就现推一遍。",
        "proofIdea": [
          "① 认函数类型。",
          "② 套公式。",
          "③ 检查是否需要链式。",
          "④ 化简。"
        ],
        "pitfalls": [
          "$\\ln(x+\\sqrt{x^{2}-1})$ 求导漏掉内层。"
        ],
        "dependencies": [
          "链式法则"
        ],
        "source": "习题课 求导法与中值定理 第 20 页",
        "id": "der-f4"
      },
      {
        "type": "formula",
        "label": "公式 5",
        "title": "高阶导标准公式",
        "statement": "$\\left(\\frac{1}{ax+b}\\right)^{(n)}=\\frac{(-1)^{n}n!a^{n}}{(ax+b)^{n+1}}$，$(\\sin ax)^{(n)}=a^{n}\\sin\\left(ax+\\frac{n\\pi}{2}\\right)$，$(e^{ax})^{(n)}=a^{n}e^{ax}$。",
        "conditions": [],
        "conclusion": [
          "分式公式的 $(-1)^{n}$ 与 $a^{n}$ 都不能漏。",
          "$\\sin/\\cos$ 的 $n$ 阶导是「振幅乘 $a^{n}$、相位加 $\\frac{n\\pi}{2}$」。",
          "本节题：2(7)、2(8)。"
        ],
        "intuition": "这些公式是归纳法的结论，考场直接用，但要能验证 $n=1$ 的情形。",
        "proofIdea": [
          "① 化成标准型。",
          "② 套公式。",
          "③ 用 $n=1$ 检验。",
          "④ 合并同类项。"
        ],
        "pitfalls": [
          "$\\frac{1}{1-2x}$ 的 $n$ 阶导漏掉 $2^{n}$。"
        ],
        "dependencies": [
          "高阶导数定义"
        ],
        "source": "习题课 求导法与中值定理 第 54 页",
        "id": "der-f5"
      },
      {
        "type": "formula",
        "label": "公式 6",
        "title": "莱布尼茨公式",
        "statement": "$(uv)^{(n)}=\\sum_{k=0}^{n}C_{n}^{k}u^{(k)}v^{(n-k)}$，其中 $C_{n}^{k}=\\frac{n!}{k!(n-k)!}$。",
        "conditions": [],
        "conclusion": [
          "当 $u$ 是 $m$ 次多项式时，$k>m$ 的项全部为零，只剩前 $m+1$ 项。",
          "$x^{2}\\sin ax$ 只剩三项：$k=0,1,2$。",
          "本节题：2(8)。"
        ],
        "intuition": "莱布尼茨公式就是「乘积法则的 $n$ 次版本」，二项式系数控制各项权重。",
        "proofIdea": [
          "① 选定 $u$（多项式）与 $v$（易求高阶导）。",
          "② 写出求和式。",
          "③ 删去为零项。",
          "④ 代入具体导数。"
        ],
        "pitfalls": [
          "忘了 $C_{n}^{k}$ 系数。",
          "相位写作 $ax+\\frac{n\\pi}{2}$ 时把 $a$ 漏在外面。"
        ],
        "dependencies": [
          "高阶导数",
          "二项式定理"
        ],
        "source": "习题课 求导法与中值定理 第 61 页",
        "id": "der-f6"
      },
      {
        "type": "formula",
        "label": "公式 7",
        "title": "极坐标曲线的切线",
        "statement": "$\\rho=\\rho(\\theta)$ 先化参数式 $x=\\rho\\cos\\theta,\\ y=\\rho\\sin\\theta$，则 $\\frac{dy}{dx}=\\frac{\\rho'\\sin\\theta+\\rho\\cos\\theta}{\\rho'\\cos\\theta-\\rho\\sin\\theta}$。",
        "conditions": [],
        "conclusion": [
          "切线斜率是 $\\frac{dy}{dx}$，不是 $\\frac{dy}{d\\theta}$。",
          "$\\frac{dy}{dx}\\to\\infty$ 时切线垂直，应写 $x=x_{0}$。",
          "本节题：2(5) 心形线在 $\\theta=\\pi/3$ 处斜率为 $0$，切线水平。"
        ],
        "intuition": "极坐标曲线本质是参数曲线，$\\theta$ 就是参数。",
        "proofIdea": [
          "① 写出参数式。",
          "② 求 $x'(\\theta)$、$y'(\\theta)$。",
          "③ 相除得斜率。",
          "④ 代点写点斜式。"
        ],
        "pitfalls": [
          "把 $\\frac{dy}{d\\theta}=0$ 当成斜率 $0$（本题恰好对，但逻辑不对）。",
          "切点坐标漏乘 $\\rho$，直接写 $(\\cos\\theta,\\sin\\theta)$。"
        ],
        "dependencies": [
          "参数方程",
          "极坐标"
        ],
        "source": "习题课 求导法与中值定理 第 45 页",
        "id": "der-f7"
      },
      {
        "type": "formula",
        "label": "公式 8",
        "title": "相关变化率",
        "statement": "设 $l=l(t)$、$h=h(t)$ 满足 $l^{2}=h^{2}+d^{2}$（$d$ 为常数），则 $2l\\frac{dl}{dt}=2h\\frac{dh}{dt}$，即 $\\frac{dl}{dt}=\\frac{h}{l}\\frac{dh}{dt}$。",
        "conditions": [],
        "conclusion": [
          "先写几何约束，再对 $t$ 求导，最后代数值。",
          "求「速率」时代入瞬时值，不是平均值。",
          "本节题：2(10) 气球升高，观测点距离 $\\frac{100}{3}$ m。"
        ],
        "intuition": "相关变化率是「隐函数求导 + 时间参数」的组合。",
        "proofIdea": [
          "① 画图写约束。",
          "② 两边对 $t$ 求导。",
          "③ 代入已知瞬时量。",
          "④ 解出未知变化率并写单位。"
        ],
        "pitfalls": [
          "忘记对 $t$ 求导，直接把几何式当答案。",
          "单位不统一（m 与 km）。"
        ],
        "dependencies": [
          "隐函数求导"
        ],
        "source": "习题课 求导法与中值定理 第 70 页",
        "id": "der-f8"
      },
      {
        "type": "formula",
        "label": "公式 9",
        "title": "微分与线性近似",
        "statement": "$dy=f'(x)dx$，$\\Delta y\\approx f'(x)\\Delta x$；一阶微分形式不变性：无论 $x$ 是自变量还是中间变量，$dy=f'(u)du$ 都成立。",
        "conditions": [],
        "conclusion": [
          "可微 $\\iff$ 可导（一元函数），$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$。",
          "近似计算：$f(x_{0}+\\Delta x)\\approx f(x_{0})+f'(x_{0})\\Delta x$。",
          "本节题 1(1) 的「高阶无穷小」叙述就是微分的定义。"
        ],
        "intuition": "微分是「用线性函数局部替代曲线」，导数就是那个线性系数。",
        "proofIdea": [
          "① 写出 $f'$。",
          "② 乘 $dx$ 或 $\\Delta x$。",
          "③ 代入数值。"
        ],
        "pitfalls": [
          "把 $\\Delta y$ 与 $dy$ 混为一谈。"
        ],
        "dependencies": [
          "导数定义"
        ],
        "source": "习题课 求导法与中值定理 第 8 页",
        "id": "der-f9"
      },
      {
        "type": "formula",
        "label": "公式 10",
        "title": "对数求导法",
        "statement": "对 $y=u_{1}^{v_{1}}u_{2}^{v_{2}}\\cdots$ 这类多因子乘积，先取对数 $\\ln y=\\sum v_{i}\\ln u_{i}$，再两边求导得 $\\frac{y'}{y}=\\sum\\left(v_{i}'\\ln u_{i}+v_{i}\\frac{u_{i}'}{u_{i}}\\right)$。",
        "conditions": [],
        "conclusion": [
          "取对数把乘除化为加减，把幂化为乘积。",
          "最后必须乘回 $y$。",
          "本节题：2(2) 的第三项 $x^{\\tan x}$。"
        ],
        "intuition": "求导前先「降难度」，对数是最便宜的降难度工具。",
        "proofIdea": [
          "① 两边取 $\\ln$。",
          "② 用对数性质展开。",
          "③ 两边求导。",
          "④ 乘回 $y$。"
        ],
        "pitfalls": [
          "取对数时忘记 $y>0$ 的假设（必要时加绝对值）。"
        ],
        "dependencies": [
          "复合函数",
          "对数"
        ],
        "source": "习题课 求导法与中值定理 第 28 页",
        "id": "der-f10"
      }
    ]
  },
  {
    "number": "6.3",
    "bookChapter": "6",
    "title": "中值定理家族与辅助函数",
    "lead": "罗尔、拉格朗日、柯西、泰勒是同一个家族的四级台阶。证题的关键不在定理本身，而在「从结论倒推辅助函数」。这一页给出三入口与两套变体。",
    "map": [
      "费马",
      "罗尔",
      "拉格朗日",
      "柯西与泰勒"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "theorem",
        "label": "定理 1",
        "title": "费马引理",
        "statement": "若 $f$ 在 $x_{0}$ 的某邻域内有定义，在 $x_{0}$ 可导且取极值，则 $f'(x_{0})=0$。",
        "conditions": [],
        "conclusion": [
          "条件是「内点 + 可导 + 极值」，三者缺一不可。",
          "它是罗尔定理的证明工具：闭区间上的最值若不在端点，必在内部取得，由费马引理导数为零。",
          "逆命题不成立：$f'(x_{0})=0$ 不保证 $x_{0}$ 是极值点（$x^{3}$ 在 $0$）。"
        ],
        "intuition": "极值点的切线必须水平 —— 但水平切线不一定对应极值。",
        "proofIdea": [
          "① 确认 $x_{0}$ 是内点。",
          "② 确认可导。",
          "③ 用左右导数符号或 $f'=0$ 判定。"
        ],
        "pitfalls": [
          "用 $f'(x_{0})=0$ 反推极值。",
          "忘记「内点」条件。"
        ],
        "dependencies": [
          "导数定义"
        ],
        "source": "习题课 求导法与中值定理 第 104 页 / 第 4 章 §4.1",
        "id": "der-t1"
      },
      {
        "type": "theorem",
        "label": "定理 2",
        "title": "罗尔定理",
        "statement": "若 $f$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导、且 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$ 使 $f'(\\xi)=0$。",
        "conditions": [],
        "conclusion": [
          "三个条件必须逐一写出，缺一不可（各有一个经典反例）。",
          "用法：把要证的式子整理成 $F'(\\xi)=0$，再验证 $F$ 满足三条件。",
          "本节题：3(1)(3)(4)(5)(7)(8)(10)(11) 全部以它收尾。"
        ],
        "intuition": "罗尔定理是「两个等高的点之间必有一个水平切线」——它是构造类证明的标准出口。",
        "proofIdea": [
          "① 构造 $F$（见套路 7）。",
          "② 验证 $F$ 在 $[a,b]$ 连续、$(a,b)$ 可导。",
          "③ 验证 $F(a)=F(b)$。",
          "④ 写出 $\\xi$ 与结论。"
        ],
        "pitfalls": [
          "只验证两个条件。",
          "把「开区间可导」写成「闭区间可导」。"
        ],
        "dependencies": [
          "费马引理"
        ],
        "source": "习题课 求导法与中值定理 第 104 页",
        "id": "der-t2"
      },
      {
        "type": "theorem",
        "label": "定理 3",
        "title": "拉格朗日中值定理",
        "statement": "若 $f$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导，则存在 $\\xi\\in(a,b)$ 使 $f(b)-f(a)=f'(\\xi)(b-a)$。",
        "conditions": [],
        "conclusion": [
          "几何意义：存在一点切线平行于两端点连线。",
          "常用变形：$f(x_{1})-f(x_{2})=f'(\\xi)(x_{1}-x_{2})$，用于估计差值与证明一致连续。",
          "本节题：3(6)(6′)、6(4)、3(12)。"
        ],
        "intuition": "它是「用导数控制函数增量」的唯一桥梁，几乎所有不等式与极限估计都靠它。",
        "proofIdea": [
          "① 确认两个条件。",
          "② 写出结论。",
          "③ 把 $\\xi$ 夹进需要的区间。",
          "④ 用导数有界或单调性收尾。"
        ],
        "pitfalls": [
          "忘记写 $\\xi\\in(a,b)$。",
          "把 $f'(\\xi)$ 当成某个已知点导数（它只是存在）。"
        ],
        "dependencies": [
          "罗尔定理"
        ],
        "source": "习题课 求导法与中值定理 第 111 页",
        "id": "der-t3"
      },
      {
        "type": "theorem",
        "label": "定理 4",
        "title": "柯西中值定理",
        "statement": "若 $f,g$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导且 $g'(x)\\ne0$，则存在 $\\xi\\in(a,b)$ 使 $\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}$。",
        "conditions": [],
        "conclusion": [
          "取 $g(x)=x$ 即得拉格朗日，所以它是更一般的形式。",
          "使用时必须验证 $g'\\ne0$（保证 $g(b)\\ne g(a)$）。",
          "本节题：3(9) 取 $(f(x)e^{x},\\ e^{x})$ 得到 $\\eta$。"
        ],
        "intuition": "两个函数的增量之比等于某点导数之比 —— 相当于「参数化的拉格朗日」。",
        "proofIdea": [
          "① 选定 $g$。",
          "② 验证 $g'\\ne0$。",
          "③ 套公式。",
          "④ 与另一条中值定理联立。"
        ],
        "pitfalls": [
          "不验证 $g'\\ne0$ 就用。",
          "与拉格朗日混用，把 $\\frac{f'}{g'}$ 写成 $f'$。"
        ],
        "dependencies": [
          "拉格朗日中值定理"
        ],
        "source": "习题课 求导法与中值定理 第 123 页",
        "id": "der-t4"
      },
      {
        "type": "theorem",
        "label": "定理 5",
        "title": "泰勒公式（拉格朗日余项）",
        "statement": "$f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_{0})}{k!}(x-x_{0})^{k}+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_{0})^{n+1}$，$\\xi$ 介于 $x_{0}$ 与 $x$ 之间。",
        "conditions": [],
        "conclusion": [
          "它把「函数值」换成「多项式 + 一个导数控制的余项」，是中值定理的推广。",
          "本节题 3(10) 的结论 $f(x)=\\frac{f'''(\\xi)}{3!}(x-a)^{2}(x-b)$ 就是 $x_{0}=a$、$n=2$ 的泰勒公式（余项取到三阶）。",
          "用泰勒证题时，固定 $x$ 把 $\\xi$ 看成 $x$ 的函数，再用罗尔。"
        ],
        "intuition": "泰勒公式是「局部多项式逼近」，余项给出误差的导数控制。",
        "proofIdea": [
          "① 选展开点与阶数。",
          "② 写出带余项展开。",
          "③ 把余项单独解出来。",
          "④ 用导数界估计余项。"
        ],
        "pitfalls": [
          "余项阶数写错（$n$ 阶展开的余项是 $(n+1)$ 阶）。",
          "忘记 $\\xi$ 依赖 $x$。"
        ],
        "dependencies": [
          "中值定理",
          "高阶导数"
        ],
        "source": "习题课 求导法与中值定理 第 173 页",
        "id": "der-t5"
      },
      {
        "type": "property",
        "label": "结论 6",
        "title": "辅助函数三入口",
        "statement": "证「存在 $\\xi$ 使某式成立」时，按结论形状选辅助函数：①含 $f'+\\lambda f$ ⇒ $F=e^{\\lambda x}f$；②含 $f'g-fg'$ ⇒ $F=\\frac{f}{g}$；③含 $f(\\xi)-\\xi$ 或 $f'(\\xi)=k$ ⇒ $F=f(x)-kx$。",
        "conditions": [],
        "conclusion": [
          "三类之外还有两个高频变体：乘 $e^{-\\lambda x}$（对应 $f'-\\lambda f$）、乘 $x^{-n}$（对应 $xf'-nf$）。",
          "造完统一走「算端点 → 相等 → 罗尔」。",
          "本节题：3(4)(5)(7)(8)(11)。"
        ],
        "intuition": "结论的每一项都在提示你「这是谁的导数」，把结论当导数反推原函数即可。",
        "proofIdea": [
          "① 把结论整理成 $\\text{某式}=0$。",
          "② 判断属于哪一类。",
          "③ 写出 $F$ 并验算 $F'$ 确实等于该式。",
          "④ 罗尔收尾。"
        ],
        "pitfalls": [
          "$f'-\\lambda f$ 型误乘 $e^{\\lambda x}$。",
          "造完 $F$ 不验算 $F'$，结果与结论不符。"
        ],
        "dependencies": [
          "罗尔定理",
          "乘积求导"
        ],
        "source": "习题课 求导法与中值定理 第 130 页",
        "id": "der-t6"
      },
      {
        "type": "property",
        "label": "结论 7",
        "title": "双中值点问题的处理",
        "statement": "结论含两个中值点（如 $\\alpha f'(\\xi)+\\beta f'(\\eta)=1$）时，先用介值定理或零点定理确定分点 $c$，再在 $(a,c)$ 与 $(c,b)$ 上各用一次拉格朗日。",
        "conditions": [],
        "conclusion": [
          "分点的作用是保证 $\\xi\\ne\\eta$，没有分点就谈不上「两个不同的中值点」。",
          "$\\alpha+\\beta=1$ 保证两式相加后常数项消掉。",
          "本节题：3(6) 与变式 3(6′)。"
        ],
        "intuition": "两个中值点 = 把区间切成两段，各用一次一阶中值定理。",
        "proofIdea": [
          "① 找分点：$f(0)=0,f(1)=1$ 时取 $c$ 使 $f(c)=\\alpha$。",
          "② 在 $[0,c]$ 用拉格朗日得 $\\xi$。",
          "③ 在 $[c,1]$ 用拉格朗日得 $\\eta$。",
          "④ 按 $\\alpha,\\beta$ 加权相加。"
        ],
        "pitfalls": [
          "不分点就在同一区间用两次，$\\xi,\\eta$ 可能相同。",
          "变式里把分母写成 $\\alpha$ 而不是 $c$。"
        ],
        "dependencies": [
          "拉格朗日中值定理",
          "介值定理"
        ],
        "source": "习题课 求导法与中值定理 第 156 页",
        "id": "der-t7"
      },
      {
        "type": "theorem",
        "label": "定理 8",
        "title": "零点定理与介值定理",
        "statement": "若 $f$ 在 $[a,b]$ 上连续且 $f(a)f(b)<0$，则存在 $c\\in(a,b)$ 使 $f(c)=0$；更一般地，$f$ 取遍 $f(a)$ 与 $f(b)$ 之间的一切值。",
        "conditions": [],
        "conclusion": [
          "这是「至少有一个根」的唯一来源，也是最容易写漏条件的定理。",
          "证「恰有 $n$ 个根」时，零点定理给下界，导数符号给上界。",
          "本节题：3(2)（恰三根）、3(5)（定 $c$）、3(7)（两个异号区间）。"
        ],
        "intuition": "连续函数不能「跳跃」，所以穿过 $x$ 轴必有交点。",
        "proofIdea": [
          "① 写出 $f$ 的连续区间。",
          "② 算两端的函数值并说明异号。",
          "③ 写出 $c$ 的存在性。"
        ],
        "pitfalls": [
          "只写「由零点定理知存在根」，不写端点值。",
          "证「至多」时仍用零点定理。"
        ],
        "dependencies": [
          "连续函数"
        ],
        "source": "习题课 求导法与中值定理 第 147 页",
        "id": "der-t8"
      },
      {
        "type": "theorem",
        "label": "定理 9",
        "title": "导数极限定理与洛必达法则",
        "statement": "若 $f$ 在 $x_{0}$ 连续、在 $x_{0}$ 的去心邻域可导，且 $\\lim_{x\\to x_{0}}f'(x)=A$ 存在，则 $f'(x_{0})=A$；若 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 且导数之比极限存在，则原极限等于该极限。",
        "conditions": [],
        "conclusion": [
          "导数极限定理说明「导数不会有第一类间断点」，是判断分段点可导的快捷工具。",
          "洛必达只适用于 $\\frac{0}{0}$、$\\frac{\\infty}{\\infty}$，且要求导数之比极限存在（或为 $\\infty$）。",
          "本节题：题 4、5、6(1)–(3)。"
        ],
        "intuition": "洛必达是把「函数之比的极限」换成「导数之比的极限」，本质是柯西中值定理的极限形式。",
        "proofIdea": [
          "① 验证未定式类型。",
          "② 分子分母分别求导。",
          "③ 检查新极限是否存在。",
          "④ 不存在就退回等价无穷小或泰勒。"
        ],
        "pitfalls": [
          "不是未定式也硬用洛必达。",
          "连续用多次却不检查每次是否仍是未定式。"
        ],
        "dependencies": [
          "柯西中值定理",
          "导数定义"
        ],
        "source": "习题课 求导法与中值定理 第 200、226 页",
        "id": "der-t9"
      }
    ]
  },
  {
    "number": "6.4",
    "bookChapter": "6",
    "title": "十六道关键题精解",
    "lead": "从 40 题里挑出 16 道：覆盖链式、隐函数二阶、参数方程二阶、极坐标切线、拆项高阶导、莱布尼茨、相关变化率、绝对值可导性、求和构造、双中值点、泰勒型三次罗尔、一致连续、分段连续可导、数列极限、判阶。每题给出「卡住的地方」而不是完整抄解。",
    "map": [
      "题面",
      "关键一步",
      "易错",
      "通用模板"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "example",
        "label": "题 1(3)",
        "title": "链式法则与内层取值",
        "statement": "$y=f\\left(\\frac{3x-2}{3x+2}\\right)$，$f'(x)=\\arcsin x^{4}$，求 $\\left.\\frac{dy}{dx}\\right|_{x=0}$。",
        "conditions": [],
        "conclusion": [
          "内层 $u=\\frac{3x-2}{3x+2}$，$u'(0)=3$（$u(0)=-1$）。",
          "$\\left.\\frac{dy}{dx}\\right|_{x=0}=f'(-1)\\cdot 3=\\arcsin 1\\cdot 3=\\frac{3\\pi}{2}$。"
        ],
        "intuition": "先算内层在该点的值，再去外层函数里查，最后乘内层导数。",
        "proofIdea": [
          "① 令 $u=\\frac{3x-2}{3x+2}$。",
          "② 求 $u'(0)$。",
          "③ 求 $f'(u(0))$。",
          "④ 相乘。"
        ],
        "pitfalls": [
          "先求 $f'$ 的表达式再代 $x=0$，把 $f'$ 的自变量搞错。"
        ],
        "dependencies": [
          "链式法则"
        ],
        "source": "习题课 求导法与中值定理 第 14 页",
        "id": "der-e1"
      },
      {
        "type": "example",
        "label": "题 2(3)",
        "title": "隐函数二阶导：通分与回代",
        "statement": "$x+y=f(x^{2}-y)$，$f$ 二阶可导、$f'\\ne-1$，求 $y''$。",
        "conditions": [],
        "conclusion": [
          "一阶：$1+y'=(2x-y')f'$，解得 $y'=\\frac{2xf'-1}{1+f'}$。",
          "关键中间量：$\\frac{d}{dx}f'=(2x-y')f''=\\frac{(2x+1)f''}{1+f'}$。",
          "二阶：$y''=\\frac{\\left[2f'+2f'^{2}+2x(2x+1)f''\\right](1+f')-(2xf'-1)(2x+1)f''}{(1+f')^{3}}$。"
        ],
        "intuition": "隐函数二阶导的难点在「$f'$ 仍是 $x$ 的函数」：对 $f'$ 求导时还要用一次链式与已得的一阶导。",
        "proofIdea": [
          "① 两边求导解出 $y'$。",
          "② 算 $\\frac{d}{dx}f'$ 备用。",
          "③ 对 $y'$ 用商的法则。",
          "④ 通分，分子分母同乘 $1+f'$。"
        ],
        "pitfalls": [
          "把 $f'$ 当常数，二阶导直接写 $0$。",
          "通分时漏乘 $1+f'$，结果分母只有二次方。"
        ],
        "dependencies": [
          "隐函数求导",
          "商的法则"
        ],
        "source": "习题课 求导法与中值定理 第 33 页",
        "id": "der-e2"
      },
      {
        "type": "example",
        "label": "题 2(4)",
        "title": "参数方程二阶导",
        "statement": "$x=e^{t}\\sin t$，$y=e^{t}\\cos t$，求 $\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{t=\\pi/4}$。",
        "conditions": [],
        "conclusion": [
          "$\\frac{dy}{dx}=\\frac{e^{t}(\\cos t-\\sin t)}{e^{t}(\\sin t+\\cos t)}=\\frac{\\cos t-\\sin t}{\\sin t+\\cos t}$。",
          "在 $t=\\pi/4$ 处一阶导为 $0$；再对 $t$ 求导得 $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)=\\frac{-2}{(\\sin t+\\cos t)^{2}}$。",
          "$\\frac{d^{2}y}{dx^{2}}=\\frac{-2}{(\\sin t+\\cos t)^{2}}\\cdot\\frac{1}{x'(t)}$，在 $t=\\pi/4$ 处 $x'=\\sqrt{2}e^{\\pi/4}$，故为 $-\\frac{\\sqrt{2}}{2}e^{-\\pi/4}$。"
        ],
        "intuition": "一阶导化简后只剩 $t$ 的三角式，二阶导就不用背商的展开式，直接算。",
        "proofIdea": [
          "① 求 $x',y'$。",
          "② 化简 $y'/x'$。",
          "③ 对 $t$ 求导。",
          "④ 除以 $x'(t)$ 并代入。"
        ],
        "pitfalls": [
          "直接用 $\\frac{y''}{x''}$。",
          "第二步忘记除以 $x'(t)$。"
        ],
        "dependencies": [
          "参数方程"
        ],
        "source": "习题课 求导法与中值定理 第 40 页",
        "id": "der-e3"
      },
      {
        "type": "example",
        "label": "题 2(5)",
        "title": "心形线的切线",
        "statement": "$\\rho=a(1+\\cos\\theta)$，求 $\\theta=\\frac{\\pi}{3}$ 处的切线。",
        "conditions": [],
        "conclusion": [
          "参数式：$x=a(1+\\cos\\theta)\\cos\\theta$，$y=a(1+\\cos\\theta)\\sin\\theta$。",
          "$\\frac{dy}{dx}$ 在 $\\theta=\\frac{\\pi}{3}$ 处为 $0$，切点 $\\left(\\frac{a}{4},\\frac{3\\sqrt{3}a}{4}\\right)$。",
          "切线：$y=\\frac{3\\sqrt{3}}{4}a$（水平线）。"
        ],
        "intuition": "极坐标没有「斜率公式」，必须先化成参数式；斜率为零时切线是水平线。",
        "proofIdea": [
          "① 化参数式。",
          "② 求 $\\frac{dy}{dx}$。",
          "③ 代 $\\theta$ 求切点与斜率。",
          "④ 写切线方程。"
        ],
        "pitfalls": [
          "把 $\\frac{dy}{d\\theta}=0$ 直接当斜率。",
          "切点用 $(\\cos\\theta,\\sin\\theta)$，漏乘 $\\rho$。"
        ],
        "dependencies": [
          "极坐标",
          "参数方程"
        ],
        "source": "习题课 求导法与中值定理 第 45 页",
        "id": "der-e4"
      },
      {
        "type": "example",
        "label": "题 2(7)",
        "title": "拆项求 n 阶导",
        "statement": "$y=\\frac{3x}{1-x-2x^{2}}$，求 $y^{(n)}$。",
        "conditions": [],
        "conclusion": [
          "分母 $(1+x)(1-2x)$，待定系数：$y=\\frac{1}{1-2x}-\\frac{1}{1+x}$。",
          "套公式：$y^{(n)}=\\frac{2^{n}n!}{(1-2x)^{n+1}}-\\frac{(-1)^{n}n!}{(1+x)^{n+1}}$。"
        ],
        "intuition": "有理分式的高阶导只有一条路：拆成一次因式的倒数，再套标准公式。",
        "proofIdea": [
          "① 因式分解分母。",
          "② 待定系数拆项。",
          "③ 套 $\\left(\\frac{1}{ax+b}\\right)^{(n)}$ 公式。",
          "④ 用 $n=1$ 检验。"
        ],
        "pitfalls": [
          "不拆项硬求。",
          "拆项系数符号错（本题 $B=-1$）。"
        ],
        "dependencies": [
          "部分分式",
          "高阶导数"
        ],
        "source": "习题课 求导法与中值定理 第 54 页",
        "id": "der-e5"
      },
      {
        "type": "example",
        "label": "题 2(8)",
        "title": "莱布尼茨三定理",
        "statement": "$y=x^{2}\\sin ax$，求 $y^{(n)}$。",
        "conditions": [],
        "conclusion": [
          "$u=x^{2}$ 的三阶及以上导数为零，故只剩 $k=0,1,2$ 三项。",
          "$y^{(n)}=x^{2}a^{n}\\sin\\left(ax+\\frac{n\\pi}{2}\\right)+2nxa^{n-1}\\sin\\left(ax+\\frac{(n-1)\\pi}{2}\\right)+n(n-1)a^{n-2}\\sin\\left(ax+\\frac{(n-2)\\pi}{2}\\right)$。"
        ],
        "intuition": "莱布尼茨公式里「谁是多项式谁就很快变零」，抓住这点只需算三项。",
        "proofIdea": [
          "① 定 $u=x^{2}$、$v=\\sin ax$。",
          "② 写出求和式并删去 $k\\ge3$。",
          "③ 代入 $(\\sin ax)^{(n)}$。",
          "④ 整理系数。"
        ],
        "pitfalls": [
          "漏掉 $C_{n}^{k}$ 系数。",
          "相位里把 $a$ 丢掉。"
        ],
        "dependencies": [
          "莱布尼茨公式"
        ],
        "source": "习题课 求导法与中值定理 第 61 页",
        "id": "der-e6"
      },
      {
        "type": "example",
        "label": "题 2(9)",
        "title": "复合求导后取极限",
        "statement": "$f'$ 在 $x=e$ 连续、$f'(e)=-\\frac{2}{e}$，求 $\\lim_{x\\to0^{+}}\\frac{d}{dx}f\\left(e^{\\cos\\sqrt{x}}\\right)$。",
        "conditions": [],
        "conclusion": [
          "$\\frac{d}{dx}f\\left(e^{\\cos\\sqrt{x}}\\right)=f'\\left(e^{\\cos\\sqrt{x}}\\right)e^{\\cos\\sqrt{x}}\\cdot\\frac{-\\sin\\sqrt{x}}{2\\sqrt{x}}$。",
          "其中 $\\frac{-\\sin\\sqrt{x}}{2\\sqrt{x}}\\to-\\frac{1}{2}$，$e^{\\cos\\sqrt{x}}\\to e$。",
          "由 $f'$ 在 $e$ 连续，极限 $=f'(e)\\cdot e\\cdot\\left(-\\frac1{2}\\right)=1$。"
        ],
        "intuition": "先求导再取极限：把「求导」与「求极限」分开写清，用连续性把极限送进 $f'$。",
        "proofIdea": [
          "① 链式求导。",
          "② 分别求各因子极限。",
          "③ 用 $f'$ 连续合并。"
        ],
        "pitfalls": [
          "先取极限再求导（顺序颠倒）。",
          "漏掉 $\\frac{-\\sin\\sqrt{x}}{2\\sqrt{x}}$ 的极限计算。"
        ],
        "dependencies": [
          "链式法则",
          "导数连续"
        ],
        "source": "习题课 求导法与中值定理 第 67 页",
        "id": "der-e7"
      },
      {
        "type": "example",
        "label": "题 2(10)",
        "title": "相关变化率",
        "statement": "气球在距观测点水平 $\\frac{100}{3}$ m 处竖直上升，升高 $50$ m 时速率为 $3$ m/s，求观测点到气球的距离变化率。",
        "conditions": [],
        "conclusion": [
          "约束：$l^{2}=h^{2}+d^{2}$，$d=\\frac{100}{3}$ 为常数。",
          "求导：$2l\\dot l=2h\\dot h$，即 $\\dot l=\\frac{h}{l}\\dot h$。",
          "$h=50$ 时 $l=\\sqrt{50^{2}+\\left(\\frac{100}{3}\\right)^{2}}=\\frac{50\\sqrt{13}}{3}$，故 $\\dot l=3\\cdot\\frac{50}{50\\sqrt{13}/3}=\\frac{9\\sqrt{13}}{13}$ m/s。"
        ],
        "intuition": "先写几何约束再对时间求导——约束式是唯一的已知条件来源。",
        "proofIdea": [
          "① 写约束。",
          "② 对 $t$ 求导。",
          "③ 用瞬时 $h$ 求 $l$。",
          "④ 代入求 $\\dot l$。"
        ],
        "pitfalls": [
          "把 $d$ 也当变量求导。",
          "单位或近似值处理不当。"
        ],
        "dependencies": [
          "相关变化率",
          "隐函数求导"
        ],
        "source": "习题课 求导法与中值定理 第 70 页",
        "id": "der-e8"
      },
      {
        "type": "example",
        "label": "题 2(12)",
        "title": "绝对值因子的可导性",
        "statement": "$f$ 可导，$F(x)=f(x)\\left(1+|x|\\right)$，证明 $F$ 在 $x=0$ 可导 $\\iff f(0)=0$，并可求 $F'(0)$。",
        "conditions": [],
        "conclusion": [
          "$x<0$ 时 $|x|=-x$：$F'_{-}(0)=f'(0)-f(0)$。",
          "$x>0$ 时 $|x|=x$：$F'_{+}(0)=f'(0)+f(0)$。",
          "两者相等 $\\iff f(0)=0$，此时 $F'(0)=f'(0)$。"
        ],
        "intuition": "绝对值在 $0$ 的两侧「一正一负」，所以左右导数差一个 $f(0)$。",
        "proofIdea": [
          "① 分段写 $F$。",
          "② 用导数定义算左右导数。",
          "③ 令其相等，解出条件。"
        ],
        "pitfalls": [
          "直接对 $|x|$ 求导得 $\\operatorname{sgn}x$ 就下结论，不写定义。"
        ],
        "dependencies": [
          "导数定义",
          "绝对值函数"
        ],
        "source": "习题课 求导法与中值定理 第 78 页",
        "id": "der-e9"
      },
      {
        "type": "example",
        "label": "题 3(1)",
        "title": "求和的积分式构造",
        "statement": "若 $a_{1}-\\frac{a_{2}}{3}+\\cdots+(-1)^{n-1}\\frac{a_{n}}{2n-1}=0$，证明 $\\sum_{k=1}^{n}a_{k}\\cos(2k-1)x=0$ 在 $\\left(0,\\frac{\\pi}{2}\\right)$ 内有根。",
        "conditions": [],
        "conclusion": [
          "观察：$\\int_0^{\\pi/2}\\cos(2k-1)x\\,dx=\\frac{(-1)^{k+1}}{2k-1}$，恰是题设系数。",
          "令 $f(x)=\\sum_{k=1}^{n}\\frac{a_{k}}{2k-1}\\sin(2k-1)x$，则 $f(0)=0$、$f\\left(\\frac{\\pi}{2}\\right)=0$（正是题设等式）。",
          "由罗尔定理存在 $\\xi$ 使 $f'(\\xi)=\\sum a_{k}\\cos(2k-1)\\xi=0$。"
        ],
        "intuition": "题设那个奇怪的零等式，其实是「原函数在右端点为零」，所以辅助函数就是把每项除以 $(2k-1)$ 并换成 $\\sin$。",
        "proofIdea": [
          "① 认出「除以 $2k-1$」是积分的结果。",
          "② 构造 $f$。",
          "③ 验证 $f$ 两端为零。",
          "④ 罗尔。"
        ],
        "pitfalls": [
          "看到和式不知道从积分反推。",
          "只写「令 $f$ 为原函数」而不给出显式构造。"
        ],
        "dependencies": [
          "罗尔定理",
          "定积分"
        ],
        "source": "习题课 求导法与中值定理 第 104 页",
        "id": "der-e10"
      },
      {
        "type": "example",
        "label": "题 3(6)/(6′)",
        "title": "双中值点：分点与加权",
        "statement": "$f(1)=1,f(0)=0$，$\\alpha,\\beta>0$、$\\alpha+\\beta=1$。证：(6) 存在 $\\xi\\ne\\eta$ 使 $\\alpha f'(\\xi)+\\beta f'(\\eta)=1$；(6′) 存在 $\\xi\\ne\\eta$ 使 $\\frac{\\alpha}{f'(\\xi)}+\\frac{\\beta}{f'(\\eta)}=1$。",
        "conditions": [],
        "conclusion": [
          "(6) 在 $[0,\\alpha]$、$[\\alpha,1]$ 上各用拉格朗日：$f'(\\xi)=\\frac{f(\\alpha)}{\\alpha}$，$f'(\\eta)=\\frac{1-f(\\alpha)}{\\beta}$，加权相加得 $f(\\alpha)+1-f(\\alpha)=1$。",
          "(6′) 先用介值定理取 $c$ 使 $f(c)=\\alpha$，再在 $[0,c]$、$[c,1]$ 上用拉格朗日，得 $f'(\\xi)=\\frac{\\alpha}{c}$、$f'(\\eta)=\\frac{\\beta}{1-c}$，故 $\\frac{\\alpha}{f'(\\xi)}+\\frac{\\beta}{f'(\\eta)}=c+(1-c)=1$。"
        ],
        "intuition": "同一个「$\\alpha+\\beta=1$」，在 (6) 里用来消 $f(\\alpha)$，在 (6′) 里用来凑 $c+(1-c)$——变式改的是分母的形式，所以分点必须换成 $f(c)=\\alpha$。",
        "proofIdea": [
          "① 判断是加和型还是倒数和型。",
          "② 加和型直接用 $\\alpha$ 作分点。",
          "③ 倒数和型先用介值定理找 $c$。",
          "④ 两段拉格朗日相加。"
        ],
        "pitfalls": [
          "(6′) 照抄 (6) 的做法。",
          "不验证 $\\xi\\ne\\eta$。"
        ],
        "dependencies": [
          "拉格朗日中值定理",
          "介值定理"
        ],
        "source": "习题课 求导法与中值定理 第 156、161 页",
        "id": "der-e11"
      },
      {
        "type": "example",
        "label": "题 3(10)",
        "title": "泰勒型：三次罗尔",
        "statement": "$f(a)=f'(a)=f(b)=0$，证明对任意 $x\\in(a,b)$ 存在 $\\xi$ 使 $f(x)=\\frac{f'''(\\xi)}{3!}(x-a)^{2}(x-b)$。",
        "conditions": [],
        "conclusion": [
          "固定 $x$，取 $k=\\frac{f(x)}{(x-a)^{2}(x-b)}$，造 $F(t)=f(t)-k(t-a)^{2}(t-b)$。",
          "$F(a)=F(b)=F(x)=0$；又 $F'(a)=f'(a)-k\\cdot0=0$（因为 $(t-a)^{2}$ 在 $a$ 处有重根，其导数含因子 $(t-a)$）。",
          "由 $F(a)=F(x)=0$、$F(x)=F(b)=0$ 得两个中值点，再用 $F'(a)=0$ 凑成三个一阶零点，两次罗尔得两个二阶零点，再一次罗尔得 $F'''(\\xi)=0$，即 $f'''(\\xi)=3!k$。"
        ],
        "intuition": "待定系数 $k$ 的作用是让 $F$ 在 $x$ 处也归零，从而把「三点」变成「三次罗尔」。",
        "proofIdea": [
          "① 固定 $x$，解出 $k$。",
          "② 造 $F$ 并列出全部零点（含 $F'(a)=0$）。",
          "③ 反复罗尔到三阶。",
          "④ 代回 $k$。"
        ],
        "pitfalls": [
          "忘记 $F'(a)=0$ 这个「隐藏零点」，罗尔次数不够。",
          "把 $k$ 当成常数不对，它依赖 $x$。"
        ],
        "dependencies": [
          "罗尔定理",
          "泰勒公式"
        ],
        "source": "习题课 求导法与中值定理 第 173、184 页",
        "id": "der-e12"
      },
      {
        "type": "example",
        "label": "题 3(12)",
        "title": "一致连续：延拓 + Lipschitz",
        "statement": "$f$ 在 $(0,a]$ 上导函数连续，$\\lim_{x\\to0^{+}}\\sqrt{x}f'(x)$ 存在，证明 $f$ 在 $(0,a]$ 上一致连续。",
        "conditions": [],
        "conclusion": [
          "把 $g(x)=\\sqrt{x}f'(x)$ 连续延拓到 $[0,a]$，得 $|g|\\le M$。",
          "把 $g(x)=\\sqrt{x}f'(x)$ 连续延拓到 $[0,a]$（$x\\to0^{+}$ 时极限存在），故 $|g|\\le M$，即 $|f'(x)|\\le\\frac{M}{\\sqrt{x}}$。",
          "设 $0<x_{1}<x_{2}\\le a$，用积分估计：$|f(x_{1})-f(x_{2})|\\le\\int_{x_{1}}^{x_{2}}|f'(t)|\\,\\mathrm{d}t\\le M\\int_{x_{1}}^{x_{2}}\\frac{\\mathrm{d}t}{\\sqrt{t}}=2M(\\sqrt{x_{2}}-\\sqrt{x_{1}})$。",
          "由 $(\\sqrt{x_{2}}-\\sqrt{x_{1}})^{2}\\le x_{2}-x_{1}$ 得 $|f(x_{1})-f(x_{2})|\\le 2M\\sqrt{x_{2}-x_{1}}$，取 $\\delta=\\frac{\\varepsilon^{2}}{4M^{2}}$ 即一致连续。"
        ],
        "intuition": "核心是 $|f'|\\le M/\\sqrt{x}$ 在 $(0,a]$ 上可积，$\\int\\mathrm{d}t/\\sqrt{t}$ 直接给出 $\\sqrt{x_{2}}-\\sqrt{x_{1}}$，再压成 $\\sqrt{x_{2}-x_{1}}$。",
        "proofIdea": [
          "① 延拓取界 $M$。",
          "② 改用积分估计，避开 $|f'|$ 在 $0$ 附近无界。",
          "③ 用 $(\\sqrt{x_{2}}-\\sqrt{x_{1}})^{2}\\le x_{2}-x_{1}$ 压成 $\\sqrt{\\delta}$。",
          "④ 解出 $\\delta(\\varepsilon)$。"
        ],
        "pitfalls": [
          "声称 $f'$ 在 $(0,a]$ 有界（实际只被 $1/\\sqrt{x}$ 控制）。",
          "$\\delta$ 中残留 $x_{1},x_{2}$。"
        ],
        "dependencies": [
          "拉格朗日中值定理",
          "闭区间连续函数有界"
        ],
        "source": "习题课 求导法与中值定理 第 189 页",
        "id": "der-e13"
      },
      {
        "type": "example",
        "label": "题 4",
        "title": "分段函数：连续定参、再判可导",
        "statement": "$f(x)=\\begin{cases}\\frac{x\\cos x-e^{x}+1}{x^{2}},&x\\ne0\\\\ a,&x=0\\end{cases}$。(1) 求 $a$ 使 $f$ 在 $0$ 连续；(2) 在 (1) 之下判可导并求 $f'(0)$。",
        "conditions": [],
        "conclusion": [
          "(1) 洛必达两次：$\\lim_{x\\to0}\\frac{x\\cos x-e^{x}+1}{x^{2}}=\\lim\\frac{\\cos x-x\\sin x-e^{x}}{2x}=\\lim\\frac{-2\\sin x-x\\cos x-e^{x}}{2}=-\\frac12$，故 $a=-\\frac12$。",
          "(2) $f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{x\\cos x-e^{x}+1+\\frac{x^{2}}{2}}{x^{3}}$，再做三次洛必达（或泰勒展开）得 $f'(0)=-\\frac23$。"
        ],
        "intuition": "「连续定参」用 $\\lim f(x)=f(0)$；「可导」还要再算一次差商极限，注意分母多一个 $x$。",
        "proofIdea": [
          "① 用洛必达或泰勒求 $\\lim f$。",
          "② 令其等于 $f(0)=a$。",
          "③ 写差商 $\\frac{f(x)-f(0)}{x}$。",
          "④ 展开到三阶求极限。"
        ],
        "pitfalls": [
          "求出 $a$ 后直接说「可导」。",
          "差商里把 $f(0)$ 写成 $0$ 而不是 $-\\frac12$。"
        ],
        "dependencies": [
          "洛必达法则",
          "导数定义",
          "泰勒公式"
        ],
        "source": "习题课 求导法与中值定理 第 200、207 页",
        "id": "der-e14"
      },
      {
        "type": "example",
        "label": "题 6(4)",
        "title": "拉格朗日求数列极限",
        "statement": "求 $\\lim_{n\\to\\infty}n^{2}\\left(\\arctan\\frac{a}{n}-\\arctan\\frac{a}{n+1}\\right)$。",
        "conditions": [],
        "conclusion": [
          "对 $\\arctan t$ 在 $t_{1}=\\frac{a}{n}$、$t_{2}=\\frac{a}{n+1}$ 之间用拉格朗日：差 $=\\frac{1}{1+\\xi_{n}^{2}}\\cdot\\frac{a}{n(n+1)}$，$\\xi_{n}$ 介于两者之间。",
          "当 $n\\to\\infty$ 时 $\\xi_{n}\\to0$，故原式 $=a\\cdot\\frac{n^{2}}{n(n+1)}\\cdot\\frac{1}{1+\\xi_{n}^{2}}\\to a$。"
        ],
        "intuition": "「函数值之差」就是中值定理的标准信号，$\\xi_{n}$ 夹在两点之间自动趋于 $0$。",
        "proofIdea": [
          "① 识别函数值与两点。",
          "② 用拉格朗日。",
          "③ 夹住 $\\xi_{n}$ 求极限。",
          "④ 乘上外面的 $n^{2}$。"
        ],
        "pitfalls": [
          "直接对 $\\arctan\\frac{a}{n}$ 做等价无穷小替换却忘了 $\\frac{a}{n+1}$ 的位置。"
        ],
        "dependencies": [
          "拉格朗日中值定理"
        ],
        "source": "习题课 求导法与中值定理 第 240 页",
        "id": "der-e15"
      },
      {
        "type": "example",
        "label": "题 7(1)",
        "title": "判阶：猜 k 再验极限",
        "statement": "$f(x)=\\frac{1}{2}\\tan^{2}x+\\cos x-1$，求 $x\\to0$ 时的阶。",
        "conditions": [],
        "conclusion": [
          "泰勒：由 $\\tan x=x+\\frac{x^{3}}{3}+\\cdots$ 得 $\\frac{1}{2}\\tan^{2}x=\\frac{x^{2}}{2}+\\frac{x^{4}}{3}+O(x^{6})$；又 $\\cos x-1=-\\frac{x^{2}}{2}+\\frac{x^{4}}{24}+O(x^{6})$。",
          "二次项相消，得 $f(x)=x^{4}\\left(\\frac{1}{3}+\\frac{1}{24}\\right)+O(x^{6})=\\frac{3}{8}x^{4}+O(x^{6})$；验证 $\\lim_{x\\to0}\\frac{f(x)}{x^{4}}=\\frac{3}{8}\\ne0$。",
          "故 $f$ 是 $4$ 阶无穷小，主部为 $\\frac{3}{8}x^{4}$。"
        ],
        "intuition": "判阶永远是「猜 $k$ → 算 $\\lim\\frac{f}{x^{k}}$ → 非零常数即成立」。",
        "proofIdea": [
          "① 展开到可能相消的阶。",
          "② 合并主项。",
          "③ 用极限验证 $k$。",
          "④ 写结论。"
        ],
        "pitfalls": [
          "只展开到二阶就下结论（主项相消后为 $0$）。"
        ],
        "dependencies": [
          "泰勒公式",
          "等价无穷小"
        ],
        "source": "习题课 求导法与中值定理 第 250 页",
        "id": "der-e16"
      }
    ]
  },
  {
    "number": "6.5",
    "bookChapter": "6",
    "title": "易错点清单",
    "lead": "这 40 题里最容易失分的地方集中列在这里。考前只翻这一页，比刷十道新题有用。",
    "map": [
      "结构",
      "条件",
      "符号",
      "边界"
    ],
    "definitions": [],
    "entries": [
      {
        "type": "pitfall",
        "label": "易错 1",
        "title": "链式法则漏内层",
        "statement": "求 $e^{-f(x)}$ 时忘负号，求 $f(e^{x}\\cos x)$ 时忘内层乘积法则，只写 $f'(e^{x}\\cos x)$。",
        "conditions": [],
        "conclusion": [
          "每剥一层乘一次该层导数。",
          "内层是乘积就再用一次乘积法则。"
        ],
        "intuition": "复合函数求导本质是「乘法链」，漏一环结果就错一环。",
        "proofIdea": [
          "① 标出层次。",
          "② 逐层乘。",
          "③ 检查每个内层都求过导。"
        ],
        "pitfalls": [
          "题 1(2)、2(1)、2(2)。"
        ],
        "dependencies": [
          "链式法则"
        ],
        "source": "习题课 求导法与中值定理 第 8 页",
        "id": "der-p1"
      },
      {
        "type": "pitfall",
        "label": "易错 2",
        "title": "分段点不验连续直接求导",
        "statement": "对两段分别求导后代点，宣布可导；不写 $f(x_{0}^{-})=f(x_{0}^{+})=f(x_{0})$。",
        "conditions": [],
        "conclusion": [
          "连续是可导的必要条件，必须先验。",
          "左右导数只能用定义算。"
        ],
        "intuition": "分段点的导数由两侧逼近决定，段内公式管不到分界点。",
        "proofIdea": [
          "① 验连续。",
          "② 定义算左右导数。",
          "③ 比较。"
        ],
        "pitfalls": [
          "题 1(5)、2(12)、4。"
        ],
        "dependencies": [
          "左右导数"
        ],
        "source": "习题课 求导法与中值定理 第 14 页",
        "id": "der-p2"
      },
      {
        "type": "pitfall",
        "label": "易错 3",
        "title": "反函数二阶导符号与次数",
        "statement": "写成 $\\varphi''=\\frac{f''}{(f')^{2}}$ 或漏负号。",
        "conditions": [],
        "conclusion": [
          "正确：$\\varphi''=-\\frac{f''}{(f')^{3}}$。",
          "记法：「一阶取倒数，二阶带负号、分母三次方」。"
        ],
        "intuition": "对 $y$ 求导比对 $x$ 求导多一个因子 $\\frac{1}{f'}$，所以每求一次多一重。",
        "proofIdea": [
          "① 由 $f(\\varphi(y))=y$ 求导。",
          "② 再求一次并代入。"
        ],
        "pitfalls": [
          "题 2(11)。"
        ],
        "dependencies": [
          "反函数求导"
        ],
        "source": "习题课 求导法与中值定理 第 67 页",
        "id": "der-p3"
      },
      {
        "type": "pitfall",
        "label": "易错 4",
        "title": "参数方程二阶导写成 y″/x″",
        "statement": "$\\frac{d^{2}y}{dx^{2}}$ 直接写 $\\frac{y''(t)}{x''(t)}$，或对 $t$ 求两次导后忘记除以 $x'(t)$。",
        "conditions": [],
        "conclusion": [
          "正确：$\\frac{d^{2}y}{dx^{2}}=\\frac{(y'/x')'_{t}}{x'(t)}$。",
          "也可记 $\\frac{y''x'-y'x''}{(x')^{3}}$。"
        ],
        "intuition": "每次对 $x$ 求导都要补除一次 $x'(t)$。",
        "proofIdea": [
          "① 一阶导。",
          "② 对 $t$ 求导。",
          "③ 除以 $x'$。"
        ],
        "pitfalls": [
          "题 2(4)、2(5)。"
        ],
        "dependencies": [
          "参数方程"
        ],
        "source": "习题课 求导法与中值定理 第 40 页",
        "id": "der-p4"
      },
      {
        "type": "pitfall",
        "label": "易错 5",
        "title": "高阶导不拆项",
        "statement": "对 $\\frac{3x}{1-x-2x^{2}}$ 直接求导两三次找规律，越求越复杂。",
        "conditions": [],
        "conclusion": [
          "先因式分解分母，待定系数拆成 $\\frac{1}{1-2x}-\\frac{1}{1+x}$。",
          "再套 $(ax+b)^{-n}$ 的标准公式。"
        ],
        "intuition": "高阶导题的第一步永远是「化简成标准型」。",
        "proofIdea": [
          "① 因式分解。",
          "② 拆项。",
          "③ 套公式。"
        ],
        "pitfalls": [
          "题 2(7)。"
        ],
        "dependencies": [
          "部分分式"
        ],
        "source": "习题课 求导法与中值定理 第 54 页",
        "id": "der-p5"
      },
      {
        "type": "pitfall",
        "label": "易错 6",
        "title": "极坐标切线直接用 dy/dθ",
        "statement": "把 $\\frac{dy}{d\\theta}$ 当切线斜率，或把 $\\frac{dy}{d\\theta}=0$ 直接解释为「斜率为零」。",
        "conditions": [],
        "conclusion": [
          "必须先化参数式，斜率是 $\\frac{dy/d\\theta}{dx/d\\theta}$。",
          "$\\frac{dy}{dx}=0$ 才是水平切线。"
        ],
        "intuition": "极坐标曲线是参数曲线，$\\theta$ 只是参数。",
        "proofIdea": [
          "① 化参数式。",
          "② 求比值。",
          "③ 代点。"
        ],
        "pitfalls": [
          "题 2(5)。"
        ],
        "dependencies": [
          "极坐标",
          "参数方程"
        ],
        "source": "习题课 求导法与中值定理 第 45 页",
        "id": "der-p6"
      },
      {
        "type": "pitfall",
        "label": "易错 7",
        "title": "零点定理只写「存在」",
        "statement": "不写区间、不写端点函数值异号，直接说「由零点定理存在根」。",
        "conditions": [],
        "conclusion": [
          "必须写出 $f$ 在 $[a,b]$ 连续、$f(a)f(b)<0$，再说存在 $c\\in(a,b)$。"
        ],
        "intuition": "定理的每个条件都是得分点，缺一个就扣分。",
        "proofIdea": [
          "① 写连续。",
          "② 写端点值。",
          "③ 写存在性。"
        ],
        "pitfalls": [
          "题 3(2)(5)(7)。"
        ],
        "dependencies": [
          "零点定理"
        ],
        "source": "习题课 求导法与中值定理 第 147 页",
        "id": "der-p7"
      },
      {
        "type": "pitfall",
        "label": "易错 8",
        "title": "「恰有 n 个根」只证下界",
        "statement": "用零点定理找到三个根就结束，忘记证明不能有第四个。",
        "conditions": [],
        "conclusion": [
          "上界靠导数符号：若根多于 $n$ 个，则 $f^{(n-1)}$ 至少有一个零点，与 $f^{(n-1)}>0$ 矛盾。"
        ],
        "intuition": "「恰有」= 至少 + 至多，后者必须用导数。",
        "proofIdea": [
          "① 零点定理给下界。",
          "② 假设多一个根。",
          "③ 反复罗尔导出矛盾。"
        ],
        "pitfalls": [
          "题 3(2) 的 $f'''=2^{x}(\\ln2)^{3}>0$。"
        ],
        "dependencies": [
          "罗尔定理",
          "零点定理"
        ],
        "source": "习题课 求导法与中值定理 第 147 页",
        "id": "der-p8"
      },
      {
        "type": "pitfall",
        "label": "易错 9",
        "title": "双中值点不分点",
        "statement": "在同一个区间上连用两次拉格朗日，得到 $\\xi,\\eta$ 无法保证相异；变式里把分母写成 $\\alpha$ 而不是 $c$。",
        "conditions": [],
        "conclusion": [
          "先用介值定理或零点定理确定分点，再在两段上各用一次。",
          "加和型分点取 $\\alpha$；倒数和型分点取 $f(c)=\\alpha$ 的 $c$。"
        ],
        "intuition": "两个中值点必须落在两个不同的子区间，才有 $\\xi\\ne\\eta$。",
        "proofIdea": [
          "① 找分点。",
          "② 两段拉格朗日。",
          "③ 相加。"
        ],
        "pitfalls": [
          "题 3(6)、(6′)。"
        ],
        "dependencies": [
          "拉格朗日中值定理"
        ],
        "source": "习题课 求导法与中值定理 第 156 页",
        "id": "der-p9"
      },
      {
        "type": "pitfall",
        "label": "易错 10",
        "title": "辅助函数乘错指数符号",
        "statement": "结论是 $f'-\\lambda f$ 时乘 $e^{\\lambda x}$，结论是 $f'+\\lambda f$ 时乘 $e^{-\\lambda x}$。",
        "conditions": [],
        "conclusion": [
          "验算口诀：$(e^{\\lambda x}f)'=e^{\\lambda x}(f'+\\lambda f)$，$(e^{-\\lambda x}f)'=e^{-\\lambda x}(f'-\\lambda f)$。"
        ],
        "intuition": "乘谁的指数，由结论里 $f'$ 与 $f$ 的符号决定，凑错了 $F'$ 就对不上。",
        "proofIdea": [
          "① 看结论符号。",
          "② 写 $F$。",
          "③ 验算 $F'$。"
        ],
        "pitfalls": [
          "题 3(8)(2)、3(11)。"
        ],
        "dependencies": [
          "辅助函数"
        ],
        "source": "习题课 求导法与中值定理 第 130 页",
        "id": "der-p10"
      },
      {
        "type": "pitfall",
        "label": "易错 11",
        "title": "一致连续不延拓",
        "statement": "直接说「$\\sqrt{x}f'(x)$ 在 $(0,a]$ 有界」，但它在 $x=0$ 处无定义。",
        "conditions": [],
        "conclusion": [
          "先由极限存在把 $g=\\sqrt{x}f'$ 连续延拓到 $[0,a]$，再用闭区间连续函数有界定理。"
        ],
        "intuition": "开区间上的连续函数不一定有界，一定要延拓到闭区间。",
        "proofIdea": [
          "① 定义 $g(0)$。",
          "② 说明 $g$ 在 $[0,a]$ 连续。",
          "③ 取界 $M$。"
        ],
        "pitfalls": [
          "题 3(12)。"
        ],
        "dependencies": [
          "闭区间连续函数有界"
        ],
        "source": "习题课 求导法与中值定理 第 189 页",
        "id": "der-p11"
      },
      {
        "type": "pitfall",
        "label": "易错 12",
        "title": "罗尔定理条件写不全",
        "statement": "只写「连续、可导」，漏掉 $f(a)=f(b)$；或把「开区间可导」写成「闭区间可导」。",
        "conditions": [],
        "conclusion": [
          "三条件：$[a,b]$ 连续、$(a,b)$ 内可导、$f(a)=f(b)$。"
        ],
        "intuition": "罗尔的第三条是结论为零导数的根本原因，漏了就无从下手。",
        "proofIdea": [
          "① 逐条写。",
          "② 逐一验证。",
          "③ 再引结论。"
        ],
        "pitfalls": [
          "题 3(3)–(5)、(10)、(11)。"
        ],
        "dependencies": [
          "罗尔定理"
        ],
        "source": "习题课 求导法与中值定理 第 104 页",
        "id": "der-p12"
      }
    ]
  }
]
);
