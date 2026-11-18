// 工科数学分析 I · 第五章 习题课：完整论证（定理证明 + 关键题推导骨架）
// 本文件手工维护：定理证明、公式推导与 7 道关键题的完整推导骨架。
window.MATH_REVIEW_PROOFS = Object.assign(window.MATH_REVIEW_PROOFS || {}, {
  "der-t1": [
    "设 $x_{0}$ 是 $f$ 的极大值点，则存在 $\\delta>0$，使 $|x-x_{0}|<\\delta$ 时 $f(x)\\le f(x_{0})$。",
    "取 $0<\\Delta x<\\delta$：分子 $f(x_{0}+\\Delta x)-f(x_{0})\\le0$，分母 $\\Delta x>0$，故差商 $\\le0$，令 $\\Delta x\\to0^{+}$ 得右导数 $f'_{+}(x_{0})\\le0$。",
    "取 $-\\delta<\\Delta x<0$：分子 $\\le0$ 而分母 $<0$，差商 $\\ge0$，令 $\\Delta x\\to0^{-}$ 得左导数 $f'_{-}(x_{0})\\ge0$。",
    "由 $f$ 在 $x_{0}$ 可导，左右导数相等，只能 $f'_{+}(x_{0})=f'_{-}(x_{0})=0$，即 $f'(x_{0})=0$。极小值点把不等号反向，结论相同。"
  ],
  "der-t2": [
    "由闭区间连续函数的最值定理，$f$ 在 $[a,b]$ 上取到最大值 $M$ 与最小值 $m$。",
    "若 $M=m$，则 $f$ 在 $[a,b]$ 上恒为常数，任取 $\\xi\\in(a,b)$ 都有 $f'(\\xi)=0$。",
    "若 $M>m$，因 $f(a)=f(b)$，最大值与最小值中至少有一个不等于端点值，于是它在内部某点 $\\xi\\in(a,b)$ 取到。",
    "在 $\\xi$ 处 $f$ 取到极值且可导，由费马引理 $f'(\\xi)=0$。"
  ],
  "der-t3": [
    "作辅助函数 $F(x)=f(x)-f(a)-\\frac{f(b)-f(a)}{b-a}(x-a)$。",
    "$F$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导（两个连续可导函数之差，再减一次线性函数）。",
    "验证端点：$F(a)=0$；$F(b)=f(b)-f(a)-(f(b)-f(a))=0$。",
    "由罗尔定理，存在 $\\xi\\in(a,b)$ 使 $F'(\\xi)=0$，即 $f'(\\xi)=\\frac{f(b)-f(a)}{b-a}$；移项得有限增量公式 $f(b)-f(a)=f'(\\xi)(b-a)$。"
  ],
  "der-t4": [
    "先说明分母不为零：若 $g(b)=g(a)$，对 $g$ 用罗尔定理得某点 $g'=0$，与条件 $g'(x)\\ne0$ 矛盾，故 $g(b)\\ne g(a)$。",
    "作辅助函数 $F(x)=f(x)-f(a)-\\frac{f(b)-f(a)}{g(b)-g(a)}\\big(g(x)-g(a)\\big)$。",
    "$F$ 在 $[a,b]$ 连续、在 $(a,b)$ 内可导，且 $F(a)=0$、$F(b)=f(b)-f(a)-(f(b)-f(a))=0$。",
    "由罗尔定理存在 $\\xi\\in(a,b)$ 使 $F'(\\xi)=0$，即 $f'(\\xi)=\\frac{f(b)-f(a)}{g(b)-g(a)}g'(\\xi)$；因 $g'(\\xi)\\ne0$，两边相除即得 $\\frac{f'(\\xi)}{g'(\\xi)}=\\frac{f(b)-f(a)}{g(b)-g(a)}$。"
  ],
  "der-t5": [
    "固定 $x\\ne x_{0}$，令 $F(t)=f(x)-\\sum_{k=0}^{n}\\frac{f^{(k)}(t)}{k!}(x-t)^{k}$，$G(t)=(x-t)^{n+1}$。",
    "则 $F(x_{0})=f(x)-P_{n}(x)$ 正是待定余项 $R_{n}(x)$，而 $F(x)=0$；同时 $G(x_{0})=(x-x_{0})^{n+1}$，$G(x)=0$。",
    "在 $[x_{0},x]$（或 $[x,x_{0}]$）上对 $F,G$ 用柯西中值定理：存在 $\\xi$ 介于 $x_{0},x$ 之间，使 $\\frac{R_{n}(x)}{(x-x_{0})^{n+1}}=\\frac{F(x_{0})-F(x)}{G(x_{0})-G(x)}=\\frac{F'(\\xi)}{G'(\\xi)}$。",
    "求导：$F'(t)=-\\frac{f^{(n+1)}(t)}{n!}(x-t)^{n}$，$G'(t)=-(n+1)(x-t)^{n}$。",
    "代入得 $R_{n}(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_{0})^{n+1}$，即泰勒公式 $f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_{0})}{k!}(x-x_{0})^{k}+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_{0})^{n+1}$。"
  ],
  "der-t8": [
    "设 $f(a)<0<f(b)$，令 $S=\\{x\\in[a,b]:f(x)<0\\}$。$S$ 非空（含 $a$）且有上界，记 $c=\\sup S\\in[a,b]$。",
    "若 $f(c)<0$，由连续性存在 $c$ 的右邻域使 $f<0$，于是 $c$ 不是上界，矛盾。",
    "若 $f(c)>0$，由连续性存在 $c$ 的左邻域使 $f>0$，于是 $c-\\delta$ 也是上界，与 $c$ 是最小上界矛盾。",
    "故 $f(c)=0$，即存在零点。对 $f(a)<\\eta<f(b)$ 用 $g(x)=f(x)-\\eta$ 套零点定理，即得介值定理。"
  ],
  "der-t9": [
    "设 $x>x_{0}$ 且 $x$ 充分靠近 $x_{0}$。$f$ 在 $[x_{0},x]$ 连续、在 $(x_{0},x)$ 可导，由拉格朗日中值定理存在 $\\xi_{x}\\in(x_{0},x)$ 使 $\\frac{f(x)-f(x_{0})}{x-x_{0}}=f'(\\xi_{x})$。",
    "令 $x\\to x_{0}^{+}$，则 $\\xi_{x}\\to x_{0}^{+}$，由 $\\lim_{t\\to x_{0}}f'(t)=A$ 得 $f'_{+}(x_{0})=\\lim_{x\\to x_{0}^{+}}\\frac{f(x)-f(x_{0})}{x-x_{0}}=A$。",
    "对 $x<x_{0}$ 同理得 $f'_{-}(x_{0})=A$。",
    "左右导数相等，故 $f'(x_{0})=A$。洛必达法则的 $\\frac{0}{0}$ 型证明正是把它用在 $\\frac{F(x)}{G(x)}$ 的差商上。"
  ],
  "der-f2": [
    "设 $y=f(x)$ 在区间上严格单调连续，反函数 $x=f^{-1}(y)$ 存在且连续。",
    "对增量 $\\Delta y=f(x+\\Delta x)-f(x)\\ne0$，有 $\\frac{f^{-1}(y+\\Delta y)-f^{-1}(y)}{\\Delta y}=\\frac{\\Delta x}{\\Delta y}=\\dfrac{1}{\\Delta y/\\Delta x}$。",
    "令 $\\Delta y\\to0$：由连续性 $\\Delta x\\to0$，右端趋于 $\\frac{1}{f'(x)}$；又 $f'(x)\\ne0$ 保证分母不为零。",
    "故 $(f^{-1})'(y)=\\frac{1}{f'(x)}\\Big|_{x=f^{-1}(y)}$，即 $\\frac{\\mathrm{d}x}{\\mathrm{d}y}=\\frac{1}{\\mathrm{d}y/\\mathrm{d}x}$。"
  ],
  "der-f3": [
    "设 $x=\\varphi(t)$、$y=\\psi(t)$，$\\varphi'(t)\\ne0$，则一阶导为 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{\\psi'(t)}{\\varphi'(t)}=u(t)$，它是 $t$ 的函数。",
    "二阶导要对 $x$ 再求导，不能对 $t$ 直接求，必须再除一次 $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$。",
    "$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{1}{\\varphi'(t)}\\cdot\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\psi'(t)}{\\varphi'(t)}\\right)=\\frac{1}{\\varphi'(t)}\\cdot\\frac{\\psi''\\varphi'-\\psi'\\varphi''}{(\\varphi')^{2}}$。",
    "整理得 $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{\\psi''(t)\\varphi'(t)-\\psi'(t)\\varphi''(t)}{\\big(\\varphi'(t)\\big)^{3}}$；漏乘 $\\frac{1}{\\varphi'(t)}$ 是最常见的错。"
  ],
  "der-f6": [
    "当 $n=1$ 时 $(uv)'=u'v+uv'$，即 $\\sum_{k=0}^{1}C_{1}^{k}u^{(k)}v^{(1-k)}$，成立。",
    "设 $n$ 时成立：$(uv)^{(n)}=\\sum_{k=0}^{n}C_{n}^{k}u^{(k)}v^{(n-k)}$。",
    "两边再求一次导：$\\sum_{k=0}^{n}C_{n}^{k}\\big(u^{(k+1)}v^{(n-k)}+u^{(k)}v^{(n-k+1)}\\big)$。",
    "把两串同类项对齐并用 $C_{n}^{k}+C_{n}^{k-1}=C_{n+1}^{k}$ 合并，即得 $(uv)^{(n+1)}=\\sum_{k=0}^{n+1}C_{n+1}^{k}u^{(k)}v^{(n+1-k)}$。"
  ],
  "der-f7": [
    "极坐标 $r=r(\\theta)$ 转为参数方程：$x=r(\\theta)\\cos\\theta$，$y=r(\\theta)\\sin\\theta$。",
    "分别对 $\\theta$ 求导：$\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}=r'\\sin\\theta+r\\cos\\theta$，$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}=r'\\cos\\theta-r\\sin\\theta$。",
    "故斜率 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}$（$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\ne0$ 时）。",
    "若 $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0$ 而 $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\ne0$，切线竖直；若二者同时为零，斜率改由 $\\lim\\frac{\\mathrm{d}y/\\mathrm{d}\\theta}{\\mathrm{d}x/\\mathrm{d}\\theta}$ 判定，此时切线与极轴的射线方向重合。"
  ],
  "der-f10": [
    "对幂指函数 $y=u(x)^{v(x)}$（$u>0$）两边取对数：$\\ln y=v(x)\\ln u(x)$。",
    "两边对 $x$ 求导：$\\frac{y'}{y}=v'\\ln u+v\\cdot\\frac{u'}{u}$。",
    "乘回 $y=u^{v}$ 得 $y'=u^{v}\\left(v'\\ln u+\\frac{v\\,u'}{u}\\right)$。",
    "多个因子连乘除时先取对数把乘除化成加减，再求导，可完全避开商法则的两次符号错误。"
  ],
  "der-e2": [
    "对 $x+y=f(x^{2}-y)$ 两边求导：$1+y'=f'(u)\\,(2x-y')$，其中 $u=x^{2}-y$。",
    "解出 $y'$：$y'(1+f'(u))=2xf'(u)-1$，即 $y'=\\frac{2xf'(u)-1}{1+f'(u)}$（这正是 $f'\\ne-1$ 的用处）。",
    "再求导时注意 $f'(u)$ 仍含 $y$：$y''=f''(u)(2x-y')^{2}+f'(u)(2-y'')$。",
    "整理得 $y''=\\frac{f''(u)(2x-y')^{2}+2f'(u)}{1+f'(u)}$，最后把 $y'$ 的表达式回代，答案中不再出现 $y'$。"
  ],
  "der-e9": [
    "记 $F(x)=f(x)(1+|x|)$。$F$ 在 $0$ 可导当且仅当 $\\lim_{x\\to0}\\frac{F(x)-F(0)}{x}$ 存在。",
    "拆项：$F(x)-F(0)=\\big(f(x)-f(0)\\big)(1+|x|)+f(0)|x|$，于是 $\\frac{F(x)-F(0)}{x}=\\frac{f(x)-f(0)}{x}(1+|x|)+f(0)\\frac{|x|}{x}$。",
    "第一项当 $x\\to0$ 时趋于 $f'(0)\\cdot1=f'(0)$；第二项在 $x\\to0^{+}$ 时为 $+f(0)$，在 $x\\to0^{-}$ 时为 $-f(0)$。",
    "故 $F'_{+}(0)=f'(0)+f(0)$，$F'_{-}(0)=f'(0)-f(0)$，两者相等的充要条件是 $f(0)=0$；此时 $F'(0)=f'(0)$。"
  ],
  "der-e10": [
    "关键观察：$\\int_{0}^{\\pi/2}\\cos(2k-1)x\\,\\mathrm{d}x=\\frac{\\sin(2k-1)\\frac{\\pi}{2}}{2k-1}=\\frac{(-1)^{k-1}}{2k-1}$，恰为题设中的系数。",
    "构造 $F(x)=\\sum_{k=1}^{n}\\frac{a_{k}}{2k-1}\\sin(2k-1)x$，则 $F'(x)=\\sum_{k=1}^{n}a_{k}\\cos(2k-1)x$ 正是要证有零点的那串和。",
    "验证端点：$F(0)=0$；$F\\left(\\frac{\\pi}{2}\\right)=\\sum\\frac{a_{k}}{2k-1}\\sin\\frac{(2k-1)\\pi}{2}=\\sum\\frac{(-1)^{k-1}a_{k}}{2k-1}=0$，最后一步正是题设等式。",
    "由罗尔定理，存在 $\\xi\\in\\left(0,\\frac{\\pi}{2}\\right)$ 使 $F'(\\xi)=\\sum_{k=1}^{n}a_{k}\\cos(2k-1)\\xi=0$。"
  ],
  "der-e11": [
    "(6) 做法：因 $0<\\alpha<1$，在 $[0,\\alpha]$ 上用拉格朗日得 $f'(\\xi)=\\frac{f(\\alpha)-f(0)}{\\alpha}=\\frac{f(\\alpha)}{\\alpha}$，$\\xi\\in(0,\\alpha)$。",
    "再在 $[\\alpha,1]$ 上用拉格朗日得 $f'(\\eta)=\\frac{f(1)-f(\\alpha)}{1-\\alpha}=\\frac{1-f(\\alpha)}{\\beta}$，$\\eta\\in(\\alpha,1)$，故 $\\xi\\ne\\eta$。",
    "加权相加：$\\alpha f'(\\xi)+\\beta f'(\\eta)=f(\\alpha)+\\big(1-f(\\alpha)\\big)=1$，结论成立。",
    "(6') 做法：$f(0)=0<\\alpha<1=f(1)$，由介值定理存在 $c\\in(0,1)$ 使 $f(c)=\\alpha$；在 $[0,c]$、$[c,1]$ 上分别用拉格朗日得 $f'(\\xi)=\\frac{\\alpha}{c}$、$f'(\\eta)=\\frac{\\beta}{1-c}$。",
    "于是 $\\frac{\\alpha}{f'(\\xi)}+\\frac{\\beta}{f'(\\eta)}=c+(1-c)=1$。区分点：加和型直接用 $\\alpha$ 作分点，倒数和型必须先由介值定理找出 $c$。"
  ],
  "der-e12": [
    "固定 $x\\in(a,b)$，令 $k=\\frac{f(x)}{(x-a)^{2}(x-b)}$，作 $F(t)=f(t)-k(t-a)^{2}(t-b)$。",
    "零点清单：$F(a)=f(a)-0=0$，$F(b)=f(b)-0=0$，$F(x)=f(x)-k(x-a)^{2}(x-b)=0$。",
    "再补一个导数零点：$F'(t)=f'(t)-k\\big[2(t-a)(t-b)+(t-a)^{2}\\big]$，故 $F'(a)=f'(a)-0=0$（$(t-a)^{2}$ 是重根因子）。",
    "在 $[a,x]$ 与 $[x,b]$ 上各用一次罗尔，得 $c_{1}\\in(a,x)$、$c_{2}\\in(x,b)$ 使 $F'(c_{1})=F'(c_{2})=0$；连同 $F'(a)=0$，$F'$ 已有三个不同零点 $a<c_{1}<c_{2}$。",
    "对 $F'$ 两次用罗尔得 $F'''$ 的零点：存在 $\\xi\\in(a,b)$ 使 $F'''(\\xi)=0$，而 $F'''(t)=f'''(t)-6k$，故 $f'''(\\xi)=6k$，代回 $k$ 得 $f(x)=\\frac{f'''(\\xi)}{3!}(x-a)^{2}(x-b)$。"
  ],
  "der-e13": [
    "把 $g(x)=\\sqrt{x}f'(x)$ 连续延拓到 $[0,a]$（$x\\to0^{+}$ 时极限存在），故 $|g|\\le M$，即 $|f'(x)|\\le\\frac{M}{\\sqrt{x}}$。",
    "设 $0<x_{1}<x_{2}\\le a$，改用积分估计：$|f(x_{1})-f(x_{2})|\\le\\int_{x_{1}}^{x_{2}}|f'(t)|\\,\\mathrm{d}t\\le M\\int_{x_{1}}^{x_{2}}\\frac{\\mathrm{d}t}{\\sqrt{t}}=2M(\\sqrt{x_{2}}-\\sqrt{x_{1}})$。",
    "由 $(\\sqrt{x_{2}}-\\sqrt{x_{1}})^{2}\\le x_{2}-x_{1}$ 得 $|f(x_{1})-f(x_{2})|\\le 2M\\sqrt{x_{2}-x_{1}}$。",
    "取 $\\delta=\\frac{\\varepsilon^{2}}{4M^{2}}$：当 $|x_{1}-x_{2}|<\\delta$ 时 $|f(x_{1})-f(x_{2})|\\le 2M\\cdot\\frac{\\varepsilon}{2M}=\\varepsilon$，故 $f$ 在 $(0,a]$ 上一致连续。"
  ],
  "der-e14": [
    "(1) 先求极限。两次洛必达：$\\lim_{x\\to0}\\frac{x\\cos x-e^{x}+1}{x^{2}}=\\lim_{x\\to0}\\frac{\\cos x-x\\sin x-e^{x}}{2x}=\\lim_{x\\to0}\\frac{-2\\sin x-x\\cos x-e^{x}}{2}=-\\frac{1}{2}$。",
    "令 $f(0)=a$ 等于该极限，得 $a=-\\frac{1}{2}$，此时 $f$ 在 $0$ 连续。",
    "(2) 判可导用差商：$f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{x\\cos x-e^{x}+1+\\frac{x^{2}}{2}}{x^{3}}$。",
    "用泰勒一次看穿：$x\\cos x-e^{x}+1=-\\frac{x^{2}}{2}-\\frac{2}{3}x^{3}-\\frac{x^{4}}{24}+O(x^{5})$，加 $\\frac{x^{2}}{2}$ 后除以 $x^{3}$ 得极限 $-\\frac{2}{3}$。",
    "故 $f$ 在 $0$ 可导且 $f'(0)=-\\frac{2}{3}$。也可用三次洛必达得到同一结果。"
  ],
  "der-e15": [
    "把两项看成同一个函数 $\\arctan t$ 在两点 $t_{1}=\\frac{a}{n}$、$t_{2}=\\frac{a}{n+1}$ 处的函数值之差。",
    "在 $t_{1},t_{2}$ 之间用拉格朗日中值定理：$\\arctan\\frac{a}{n}-\\arctan\\frac{a}{n+1}=\\frac{1}{1+\\xi_{n}^{2}}\\left(\\frac{a}{n}-\\frac{a}{n+1}\\right)=\\frac{1}{1+\\xi_{n}^{2}}\\cdot\\frac{a}{n(n+1)}$，其中 $\\xi_{n}$ 介于 $t_{1},t_{2}$ 之间。",
    "当 $n\\to\\infty$ 时 $t_{1},t_{2}\\to0$，故 $\\xi_{n}\\to0$，$\\frac{1}{1+\\xi_{n}^{2}}\\to1$。",
    "于是 $n^{2}\\left(\\arctan\\frac{a}{n}-\\arctan\\frac{a}{n+1}\\right)=\\frac{n^{2}}{n(n+1)}\\cdot\\frac{a}{1+\\xi_{n}^{2}}\\to a$。"
  ],
  "der-e16": [
    "由 $\\tan x=x+\\frac{x^{3}}{3}+\\cdots$ 得 $\\tan^{2}x=x^{2}+\\frac{2}{3}x^{4}+\\cdots$，故 $\\frac{1}{2}\\tan^{2}x=\\frac{x^{2}}{2}+\\frac{x^{4}}{3}+O(x^{6})$；又 $\\cos x-1=-\\frac{x^{2}}{2}+\\frac{x^{4}}{24}+O(x^{6})$。",
    "相加时二次项相消，得 $f(x)=\\left(\\frac{1}{3}+\\frac{1}{24}\\right)x^{4}+O(x^{6})=\\frac{3}{8}x^{4}+O(x^{6})$。",
    "验证阶：$\\lim_{x\\to0}\\frac{f(x)}{x^{4}}=\\frac{3}{8}\\ne0$，故 $f$ 是 $4$ 阶无穷小，主部为 $\\frac{3}{8}x^{4}$。",
    "判阶通法：先猜 $k$，再算 $\\lim\\frac{f}{x^{k}}$，得到非零常数即定阶；只展开到二阶会看到主项相消而误判。"
  ]
});
