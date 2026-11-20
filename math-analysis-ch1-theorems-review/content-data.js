window.MATH_REVIEW_CHAPTERS = [
  {
    "number": "1.1",
    "title": "实数集及其完备性",
    "lead": "从界与确界出发，用确界存在定理刻画实数系的完备性。",
    "map": ["实数域", "上界与下界", "上确界与下确界", "确界存在定理", "完备性"],
    "definitions": [
      {
        "label": "定义 1.1.1",
        "title": "数集的上（下）界",
        "statement": [
          "若存在实数 $L$，使对任意 $x\\in A$ 都有 $x\\le L$，则称 $A$ 有上界，$L$ 是 $A$ 的一个上界。",
          "若存在实数 $l$，使对任意 $x\\in A$ 都有 $x\\ge l$，则称 $A$ 有下界，$l$ 是 $A$ 的一个下界。既有上界又有下界的集合称为有界集。"
        ],
        "source": "1.1, p. 15-20"
      },
      {
        "label": "定义 1.1.2",
        "title": "上确界与下确界",
        "statement": [
          "设 $A$ 是非空实数集。若 $\\beta$ 是 $A$ 的上界，且对任意 $\\varepsilon>0$，存在 $x_0\\in A$ 使 $x_0>\\beta-\\varepsilon$，则称 $\\beta$ 为 $A$ 的上确界，记作 $\\beta=\\sup A$。",
          "若 $\\alpha$ 是 $A$ 的下界，且对任意 $\\varepsilon>0$，存在 $x_0\\in A$ 使 $x_0<\\alpha+\\varepsilon$，则称 $\\alpha$ 为 $A$ 的下确界，记作 $\\alpha=\\inf A$。"
        ],
        "source": "1.1, p. 25-32"
      }
    ],
    "entries": [
      {
        "id": "thm-1-1",
        "type": "theorem",
        "label": "定理 1.1",
        "title": "确界存在定理",
        "statement": [
          "有上（下）界的非空实数集必有上（下）确界。"
        ],
        "conditions": [
          "$A$ 是非空实数集。",
          "$A$ 有上界或 $A$ 有下界。"
        ],
        "conclusion": [
          "若 $A$ 有上界，则 $\\sup A$ 存在。",
          "若 $A$ 有下界，则 $\\inf A$ 存在。",
          "非空有界集的上、下确界都唯一。"
        ],
        "intuition": "它保证实数轴上不会缺少“最合适的边界点”，这是实数完备性的核心体现。",
        "proofIdea": [
          "原课件只给出定理结论，并用它说明非空有界集的上、下确界唯一。",
          "确界存在性不能由有理数集保证，例如集合 $\\{x\\in\\mathbb{Q}\\mid x^2<2\\}$ 在 $\\mathbb{Q}$ 中没有上确界。"
        ],
        "dependencies": ["上界、下界与确界的定义"],
        "pitfalls": [
          "“有界”与“有确界”在实数系中互相保证，但在有理数系中并不成立。",
          "上确界不一定属于集合。"
        ],
        "source": "1.1, p. 45-50"
      }
    ]
  },
  {
    "number": "1.2",
    "title": "数列极限",
    "lead": "由 $\\varepsilon$-$N$ 定义出发，依次整理极限性质、收敛判别法与实数完备性。",
    "map": ["极限定义", "基本性质", "夹逼与 Stolz", "单调有界与区间套", "子列与 Cauchy 准则"],
    "definitions": [
      {
        "label": "数列极限",
        "title": "$\\varepsilon$-$N$ 定义",
        "statement": [
          "$\\lim\\limits_{n\\to\\infty}a_n=a$ 当且仅当对任意 $\\varepsilon>0$，存在正整数 $N$，使当 $n>N$ 时，恒有 $|a_n-a|<\\varepsilon$。"
        ],
        "source": "1.2, p. 109-162"
      },
      {
        "label": "有界数列",
        "title": "数列的有界性",
        "statement": [
          "若存在常数 $l,L$，使对任意 $n$ 都有 $l\\le a_n\\le L$，则称数列 $\\{a_n\\}$ 有界。"
        ],
        "source": "1.2, p. 173-182"
      },
      {
        "label": "定义 1.2.4",
        "title": "闭区间套",
        "statement": [
          "若闭区间列 $\\{[a_n,b_n]\\}$ 满足 $[a_1,b_1]\\supseteq[a_2,b_2]\\supseteq\\cdots$，且 $\\lim\\limits_{n\\to\\infty}(b_n-a_n)=0$，则称其为一个闭区间套。"
        ],
        "source": "1.2, p. 328-338"
      },
      {
        "label": "定义 1.2.5",
        "title": "子列",
        "statement": [
          "若 $n_1<n_2<\\cdots<n_k<\\cdots$ 是严格递增的正整数列，则 $a_{n_1},a_{n_2},\\ldots,a_{n_k},\\ldots$ 称为 $\\{a_n\\}$ 的子列，记作 $\\{a_{n_k}\\}$。"
        ],
        "source": "1.2, p. 348-355"
      },
      {
        "label": "定义 1.2.6",
        "title": "Cauchy 列",
        "statement": [
          "若对任意 $\\varepsilon>0$，存在正整数 $N$，使当 $m,n>N$ 时，恒有 $|a_m-a_n|<\\varepsilon$，则称 $\\{a_n\\}$ 为 Cauchy 列或基本列。"
        ],
        "source": "1.2, p. 401-407"
      }
    ],
    "entries": [
      {
        "id": "thm-1-2-1",
        "type": "theorem",
        "label": "定理 1.2.1",
        "title": "极限的唯一性",
        "statement": ["收敛数列的极限唯一。"],
        "conditions": ["数列 $\\{a_n\\}$ 收敛。"],
        "conclusion": ["若 $a_n\\to a$ 且 $a_n\\to b$，则 $a=b$。"],
        "intuition": "同一个数列不能在两个不同位置附近无限接近。",
        "proofIdea": [
          "设两个极限为 $a,b$，取任意 $\\varepsilon>0$。",
          "分别使 $|a_n-a|<\\varepsilon/2$ 与 $|a_n-b|<\\varepsilon/2$ 同时成立，再由三角不等式得到 $|a-b|<\\varepsilon$。",
          "由于 $\\varepsilon$ 任意小，只能有 $a=b$。"
        ],
        "dependencies": ["数列极限的 $\\varepsilon$-$N$ 定义", "三角不等式"],
        "pitfalls": ["必须先假定两个极限都存在，才能谈唯一性。"],
        "source": "1.2, p. 152-162"
      },
      {
        "id": "thm-1-2-2",
        "type": "theorem",
        "label": "定理 1.2.2",
        "title": "收敛数列的有界性",
        "statement": ["收敛数列是有界的，即存在常数 $l,L$，使 $l\\le a_n\\le L$ 对一切 $n$ 成立。"],
        "conditions": ["$\\{a_n\\}$ 收敛。"],
        "conclusion": ["$\\{a_n\\}$ 既有上界又有下界。", "逆命题不成立。"],
        "intuition": "数列最终必须留在一个有限窗口内，只有有限多个前面的项可能跑到窗口外。",
        "proofIdea": [
          "取 $\\varepsilon=1$，得到 $N$，使尾部所有项满足 $a-1<a_n<a+1$。",
          "再取尾部范围与有限个前项中的最小、最大值作为下界和上界。"
        ],
        "dependencies": ["数列极限定义"],
        "pitfalls": ["有界数列不一定收敛，例如 $(-1)^n$。"],
        "source": "1.2, p. 173-182"
      },
      {
        "id": "thm-1-2-3",
        "type": "theorem",
        "label": "定理 1.2.3",
        "title": "保序性",
        "statement": [
          "若 $a_n\\to a$，$b_n\\to b$，且 $a<b$，则存在正整数 $N$，使当 $n>N$ 时，恒有 $a_n<b_n$。"
        ],
        "conditions": ["两数列都收敛。", "两个极限满足 $a<b$。"],
        "conclusion": ["从某一项以后，$a_n<b_n$ 恒成立。"],
        "intuition": "两个极限之间若有正距离，则两个数列最终也会保持相同的先后顺序。",
        "proofIdea": [
          "取 $\\varepsilon=(b-a)/2>0$。",
          "同时控制 $a_n$ 与 $b_n$ 的误差，得到 $a_n<(a+b)/2<b_n$。"
        ],
        "dependencies": ["数列极限定义", "实数稠密性"],
        "pitfalls": ["只从最终 $a_n<b_n$ 推不出 $a<b$，只能推出 $a\\le b$。"],
        "source": "1.2, p. 183-192"
      },
      {
        "id": "thm-1-2-4",
        "type": "theorem",
        "label": "定理 1.2.4",
        "title": "绝对值的极限性质",
        "statement": ["若 $a_n\\to a$，则 $|a_n|\\to |a|$。"],
        "conditions": ["$\\{a_n\\}$ 收敛。"],
        "conclusion": ["$\\lim\\limits_{n\\to\\infty}|a_n|=|a|$。"],
        "intuition": "绝对值只抹去符号，不会破坏“项与极限越来越近”这一事实。",
        "proofIdea": ["由 $\\bigl||a_n|-|a|\\bigr|\\le|a_n-a|$，直接套用极限定义。"],
        "dependencies": ["数列极限定义", "绝对值不等式"],
        "pitfalls": ["逆命题不成立，例如 $a_n=(-1)^n$。"],
        "source": "1.2, p. 202-209"
      },
      {
        "id": "thm-1-2-5",
        "type": "theorem",
        "label": "定理 1.2.5",
        "title": "四则运算法则",
        "statement": [
          "设 $a_n\\to a$，$b_n\\to b$。若 $\\alpha,\\beta$ 为常数，则 $\\{\\alpha a_n+\\beta b_n\\}$、$\\{a_nb_n\\}$ 均收敛；当 $b\\ne0$ 时，$\\{a_n/b_n\\}$ 也收敛。"
        ],
        "conditions": ["两数列的极限都存在。", "商法则还要求分母极限 $b\\ne0$。"],
        "conclusion": [
          "$\\lim\\limits_{n\\to\\infty}(\\alpha a_n+\\beta b_n)=\\alpha a+\\beta b$。",
          "$\\lim\\limits_{n\\to\\infty}(a_nb_n)=ab$。",
          "$\\lim\\limits_{n\\to\\infty}(a_n/b_n)=a/b$。"
        ],
        "intuition": "极限运算与加、减、乘、除在条件满足时可以交换顺序。",
        "proofIdea": [
          "和与积由误差分解证明。",
          "商法则先证明 $1/b_n\\to1/b$，再与乘法法则组合。"
        ],
        "dependencies": ["收敛数列有界", "数列极限定义"],
        "pitfalls": ["不能只看分母某项非零，必须保证分母极限非零。"],
        "source": "1.2, p. 210-217"
      },
      {
        "id": "thm-1-2-6",
        "type": "theorem",
        "label": "定理 1.2.6",
        "title": "夹逼定理",
        "statement": [
          "若从某一项以后有 $a_n\\le b_n\\le c_n$，且 $a_n\\to a$、$c_n\\to a$，则 $b_n\\to a$。"
        ],
        "conditions": ["三数列从某一项以后满足上下夹逼。", "两侧数列趋于同一极限。"],
        "conclusion": ["中间的数列也收敛，且极限相同。"],
        "intuition": "两侧边界收缩到同一点时，被夹在中间的项没有别的去处。",
        "proofIdea": ["由两侧极限定义得到 $a-\\varepsilon<a_n$ 与 $c_n<a+\\varepsilon$，再套入不等式。"],
        "dependencies": ["数列极限定义"],
        "pitfalls": ["两侧极限必须相同；只给出不同能级只能得到界，不能得到极限。"],
        "source": "1.2, p. 248-255"
      },
      {
        "id": "thm-1-2-7",
        "type": "theorem",
        "label": "定理 1.2.7",
        "title": "Stolz 公式",
        "statement": [
          "设 $\\{y_n\\}$ 为严格递增的正无穷大量，且 $\\lim\\limits_{n\\to\\infty}\\frac{x_n-x_{n-1}}{y_n-y_{n-1}}=a$。若 $a$ 为有限数或 $\\pm\\infty$，则 $\\lim\\limits_{n\\to\\infty}\\frac{x_n}{y_n}=a$。"
        ],
        "conditions": [
          "$\\{y_n\\}$ 严格递增且 $y_n\\to+\\infty$。",
          "差商的极限 $a$ 存在，允许 $a=\\pm\\infty$。"
        ],
        "conclusion": ["$x_n/y_n$ 的极限等于差商极限 $a$。"],
        "intuition": "当分母增量充分大时，整体平均变化率会跟踪相邻差商的变化。",
        "proofIdea": ["原课件注明证明略，并说明可由 Stolz 公式得到相关例题结论。"],
        "dependencies": ["数列极限定义"],
        "pitfalls": ["必须使用严格递增且无界的分母数列，不能随意移植到普通分数极限。"],
        "source": "1.2, p. 270-273"
      },
      {
        "id": "thm-1-2-2-6",
        "type": "theorem",
        "label": "定理 1.2.6",
        "title": "单调有界原理",
        "numberNote": "已按整理要求归入 §1.2 的编号体系。",
        "statement": ["单调增（减）且有上（下）界的数列必定收敛。"],
        "conditions": ["数列单调。", "数列具有与单调方向对应的界。"],
        "conclusion": ["数列收敛。"],
        "intuition": "数列只朝一个方向走，又被边界挡住，就只能逼近某个实数。",
        "proofIdea": [
          "不妨设 $\\{a_n\\}$ 单调增且有上界。",
          "由确界存在定理取 $\\beta=\\sup\\{a_n\\}$，再用上确界定义验证 $a_n\\to\\beta$。"
        ],
        "dependencies": ["确界存在定理", "数列极限定义"],
        "pitfalls": ["“单调”和“有界”缺一不可。"],
        "source": "1.2, p. 284-291"
      },
      {
        "id": "thm-1-2-9",
        "type": "theorem",
        "label": "定理 1.2.9",
        "title": "闭区间套定理",
        "statement": [
          "若 $\\{[a_n,b_n]\\}$ 是闭区间套，则存在唯一的实数 $\\xi$ 属于所有闭区间，并且 $\\xi=\\lim\\limits_{n\\to\\infty}a_n=\\lim\\limits_{n\\to\\infty}b_n$。"
        ],
        "conditions": ["区间列逐层包含。", "区间长度 $b_n-a_n\\to0$。"],
        "conclusion": ["存在唯一公共点 $\\xi$。", "左右端点数列都收敛到 $\\xi$。"],
        "intuition": "区间不断缩到一个任意小的长度，只能剩下一个点。",
        "proofIdea": ["对左右端点数列分别使用单调有界原理，再结合长度趋于 0 证明公共点唯一。"],
        "dependencies": ["定义 1.2.4 闭区间套", "单调有界原理"],
        "pitfalls": ["闭区间、嵌套、长度趋于 0 三个条件不能随意删减。"],
        "source": "1.2, p. 328-338"
      },
      {
        "id": "thm-1-2-10",
        "type": "theorem",
        "label": "定理 1.2.10",
        "title": "数列与子列的收敛性结论（一）",
        "statement": ["若数列 $\\{a_n\\}$ 收敛于 $a$，则它的任意子列也收敛，且都收敛于 $a$。"],
        "conditions": ["原数列收敛。"],
        "conclusion": ["任一子列收敛到同一个极限。"],
        "intuition": "删去任意多项，只要保序留下无限多项，仍会保持原来的逼近趋势。",
        "proofIdea": ["利用 $n_k\\ge k$，把原数列的尾项控制直接传递给子列。"],
        "dependencies": ["子列定义", "数列极限定义"],
        "pitfalls": ["只能从原列推子列，不能从某个子列收敛反推原列收敛。"],
        "source": "1.2, p. 356-364"
      },
      {
        "id": "thm-1-2-11",
        "type": "theorem",
        "label": "定理 1.2.11",
        "title": "拉链定理",
        "statement": [
          "$\\lim\\limits_{n\\to\\infty}a_n=a$ 当且仅当 $\\lim\\limits_{n\\to\\infty}a_{2n-1}=a$ 且 $\\lim\\limits_{n\\to\\infty}a_{2n}=a$。"
        ],
        "conditions": ["同时考察奇子列与偶子列。"],
        "conclusion": ["两个奇偶子列收敛到同一个极限时，原数列收敛到该极限。"],
        "intuition": "奇、偶两条腿最终走到同一点时，整个数列也会到达同一点。",
        "proofIdea": ["必要性来自子列结论；充分性把奇、偶尾项合并覆盖全部自然数指标。"],
        "dependencies": ["定理 1.2.10", "子列定义"],
        "pitfalls": ["奇偶子列极限不同会导致原数列发散。"],
        "source": "1.2, p. 365-376"
      },
      {
        "id": "thm-1-2-12",
        "type": "theorem",
        "label": "定理 1.2.12",
        "title": "致密性定理（Bolzano-Weierstrass）",
        "statement": ["有界数列必有收敛子列。"],
        "conditions": ["数列有界。"],
        "conclusion": ["存在至少一个收敛子列。"],
        "intuition": "有界把数列限制在有限区间内，反复二分区间，终会留下不断靠近某一点的子列。",
        "proofIdea": ["原课件注明证明附在下页，核心是利用闭区间套定理构造缩小区间并选出子列。"],
        "dependencies": ["闭区间套定理", "子列定义"],
        "pitfalls": ["有界数列本身不一定收敛，只保证存在收敛子列。"],
        "source": "1.2, p. 377-384"
      },
      {
        "id": "thm-1-2-13",
        "type": "theorem",
        "label": "定理 1.2.13",
        "title": "无界数列的性质",
        "statement": ["若 $\\{x_n\\}$ 是无界数列，则存在子列 $\\{x_{n_k}\\}$，使 $\\lim\\limits_{k\\to\\infty}x_{n_k}=\\infty$。"],
        "conditions": ["原数列无界。"],
        "conclusion": ["可取出一列，使项的绝对值无限增大。"],
        "intuition": "无界意味着可以不断挑出小于预设阈值的项，逐步制造一条奔向无穷的子列。",
        "proofIdea": [
          "依次取 $M_k=k$，由无界性选出满足 $|x_{n_k}|>k$ 的项，并保持指标递增。",
          "于是 $|x_{n_k}|\\to\\infty$。"
        ],
        "dependencies": ["子列定义", "无界定义"],
        "pitfalls": ["原课件结论按 $+\\infty$ 记法书写，证明中实际构造的是绝对值趋于无穷。"],
        "source": "1.2, p. 393-400"
      },
      {
        "id": "thm-1-2-14",
        "type": "theorem",
        "label": "定理 1.2.14",
        "title": "Cauchy 收敛准则",
        "statement": ["数列 $\\{a_n\\}$ 收敛的充分必要条件是它是 Cauchy 列。"],
        "conditions": ["讨论对象是实数数列。"],
        "conclusion": ["收敛 $\\iff$ Cauchy。"],
        "intuition": "不必预先知道极限值，只要尾部项彼此足够接近，就能判定收敛。",
        "proofIdea": [
          "必要性：用三角不等式把两项都夹到极限附近。",
          "充分性：先证 Cauchy 列有界，再用致密性定理取收敛子列，最后证明原列也收敛到同一极限。"
        ],
        "dependencies": ["Cauchy 列定义", "致密性定理", "实数完备性"],
        "pitfalls": ["在有理数系中，Cauchy 列不一定收敛到有理数。"],
        "source": "1.2, p. 408-416"
      },
      {
        "id": "cor-1-2-1",
        "type": "corollary",
        "label": "推论 1",
        "title": "保序性推论",
        "statement": [
          "若 $a_n\\to a$，$b_n\\to b$，且从某一项以后恒有 $a_n\\le b_n$（或 $a_n<b_n$），则 $a\\le b$。"
        ],
        "conditions": ["两数列都收敛。", "不等式只需从某一项以后成立。"],
        "conclusion": ["极限之间只能推出非严格不等式 $a\\le b$。"],
        "intuition": "项与项之间即使一直严格小于，极限仍可能在取极限时“贴”到一起。",
        "proofIdea": ["反设 $a>b$，由保序性可知最终应有 $a_n>b_n$，与题设矛盾。"],
        "dependencies": ["定理 1.2.3"],
        "pitfalls": ["即使处处 $a_n<b_n$，也不能推出 $a<b$；例如 $1/n<2/n$，两者极限都为 0。"],
        "source": "1.2, p. 193-199"
      },
      {
        "id": "cor-1-2-2",
        "type": "corollary",
        "label": "推论 2",
        "title": "极限与给定常数的大小",
        "statement": [
          "若 $a_n\\to a$，且 $a<b$（或 $a>b$），则存在正整数 $N$，使当 $n>N$ 时，有 $a_n<b$（或 $a_n>b$）。"
        ],
        "conditions": ["数列收敛到 $a$。", "给定常数与 $a$ 有严格大小关系。"],
        "conclusion": ["从某一项以后，数列项落在给定常数同一侧。"],
        "intuition": "极限严格位于常数一侧时，尾部也会进入该侧。",
        "proofIdea": ["取 $\\varepsilon=|b-a|/2$，由极限定义得到尾部不等式。"],
        "dependencies": ["数列极限定义"],
        "pitfalls": ["如果只给出 $a\\le b$，不能推出最终所有项都小于 $b$。"],
        "source": "1.2, p. 200"
      },
      {
        "id": "cor-1-2-3",
        "type": "corollary",
        "label": "推论 3",
        "title": "保号性",
        "statement": [
          "若 $a_n\\to a>0$，则存在 $N$，使当 $n>N$ 时，有 $a_n>a/2>0$。",
          "若 $a_n\\to a<0$，则存在 $N$，使当 $n>N$ 时，有 $a_n<a/2<0$。"
        ],
        "conditions": ["极限严格正或严格负。"],
        "conclusion": ["从某一项以后，数列保持相应的正负号。"],
        "intuition": "极限离零有固定距离，尾部不可能突然跨过零。",
        "proofIdea": ["取 $b=a/2$，应用推论 2。"],
        "dependencies": ["推论 2"],
        "pitfalls": ["若极限为 0，保号性一般失效。"],
        "source": "1.2, p. 201"
      },
      {
        "id": "cor-1-2-4",
        "type": "corollary",
        "label": "推论",
        "title": "绝对值极限的等价形式",
        "statement": ["$\\lim\\limits_{n\\to\\infty}a_n=0$ 当且仅当 $\\lim\\limits_{n\\to\\infty}|a_n|=0$。"],
        "conditions": ["考虑极限为 0 的特殊情形。"],
        "conclusion": ["数列本身趋于 0 与绝对值数列趋于 0 等价。"],
        "intuition": "当一个值的绝对值可以被压到任意小时，它本身也只能趋于 0。",
        "proofIdea": ["由 $|a_n|=\\bigl||a_n|\\bigr|$，结合绝对值性质即可。"],
        "dependencies": ["定理 1.2.4 绝对值性质"],
        "pitfalls": ["等价只对极限 0 成立，不能推广到一般极限。"],
        "source": "1.2, p. 209"
      }
    ]
  },
  {
    "number": "1.3",
    "title": "函数极限",
    "lead": "用 $\\varepsilon$-$\\delta$ 语言整理局部性质、判敛法则与 Cauchy 收敛准则。",
    "map": ["函数极限定义", "唯一性与局部性", "四则运算与复合", "夹逼与单调", "Cauchy 准则"],
    "definitions": [
      {
        "label": "函数极限",
        "title": "$\\varepsilon$-$\\delta$ 定义",
        "statement": [
          "$\\lim\\limits_{x\\to x_0}f(x)=A$ 当且仅当对任意 $\\varepsilon>0$，存在 $\\delta>0$，使当 $0<|x-x_0|<\\delta$ 时，恒有 $|f(x)-A|<\\varepsilon$。"
        ],
        "source": "1.3, p. 10-16"
      },
      {
        "label": "单侧极限",
        "title": "左极限与右极限",
        "statement": [
          "$\\lim\\limits_{x\\to x_0^-}f(x)=A$ 只考察 $x<x_0$ 的邻域；$\\lim\\limits_{x\\to x_0^+}f(x)=A$ 只考察 $x>x_0$ 的邻域。"
        ],
        "source": "1.3, p. 46-54"
      },
      {
        "label": "定义 1.3.4",
        "title": "函数的上（下）界与上（下）确界",
        "statement": [
          "对函数 $f:A\\to\\mathbb{R}$，若存在 $L$ 使一切 $x\\in A$ 满足 $f(x)\\le L$，则 $f$ 有上界。",
          "$R(f)$ 的上确界称为 $f$ 在 $A$ 上的上确界，记作 $\\sup\\limits_{x\\in A}f(x)$；下确界类似。"
        ],
        "source": "1.3, p. 229-241"
      }
    ],
    "entries": [
      {
        "id": "thm-1-3-1",
        "type": "theorem",
        "label": "定理 1.3.1",
        "title": "函数极限的唯一性",
        "statement": ["若 $\\lim\\limits_{x\\to x_0}f(x)$ 存在，则极限值必唯一。"],
        "conditions": ["函数在 $x_0$ 的某去心邻域内有定义，且极限存在。"],
        "conclusion": ["不存在两个不同的极限值。"],
        "intuition": "极限点只有一个，函数在趋近过程中不能同时稳定到两个不同位置。",
        "proofIdea": ["与数列极限唯一性的证明类似，用 $\\varepsilon/2$ 和三角不等式。"],
        "dependencies": ["函数极限定义"],
        "pitfalls": ["这只讨论极限存在时的唯一性，不判断极限是否存在。"],
        "source": "1.3, p. 106-116"
      },
      {
        "id": "thm-1-3-2",
        "type": "theorem",
        "label": "定理 1.3.2",
        "title": "局部有界性",
        "statement": [
          "若 $\\lim\\limits_{x\\to x_0}f(x)$ 存在，则 $f$ 在 $x_0$ 的某去心邻域内有界，即存在 $\\delta>0,L>0$，使 $0<|x-x_0|<\\delta$ 时 $|f(x)|\\le L$。"
        ],
        "conditions": ["函数在 $x_0$ 处有有限极限。"],
        "conclusion": ["存在一个去心邻域，使函数在其中局部有界。"],
        "intuition": "极限点附近函数值不会突然无限增大。",
        "proofIdea": ["取 $\\varepsilon=1$，由 $|f(x)-a|<1$ 推出 $|f(x)|<1+|a|$。"],
        "dependencies": ["函数极限定义", "三角不等式"],
        "pitfalls": ["只保证局部有界，不保证整个定义域有界。"],
        "source": "1.3, p. 106-116"
      },
      {
        "id": "thm-1-3-3",
        "type": "theorem",
        "label": "定理 1.3.3",
        "title": "局部保序性",
        "statement": [
          "若 $\\lim\\limits_{x\\to x_0}f(x)=a$，$\\lim\\limits_{x\\to x_0}g(x)=b$，且 $a<b$，则存在 $\\delta>0$，使当 $x\\in\\mathring N(x_0,\\delta)$ 时，恒有 $f(x)<g(x)$。"
        ],
        "conditions": ["两个函数极限都存在。", "两个极限严格有序。"],
        "conclusion": ["在 $x_0$ 的某去心邻域内，两个函数保持同样的严格序。"],
        "intuition": "函数值最终会受到极限邻域的控制。",
        "proofIdea": ["取 $\\varepsilon=(b-a)/2$，分别控制 $f(x),g(x)$ 与各自极限的距离。"],
        "dependencies": ["函数极限定义"],
        "pitfalls": ["从局部 $f(x)<g(x)$ 只能推 $a\\le b$。"],
        "source": "1.3, p. 117-128"
      },
      {
        "id": "thm-1-3-4",
        "type": "theorem",
        "label": "定理 1.3.4",
        "title": "Heine 定理（归并原理）",
        "statement": [
          "设 $f$ 在 $x_0$ 的某去心邻域内有定义，则 $\\lim\\limits_{x\\to x_0}f(x)=a$ 当且仅当：对满足 $x_n\\to x_0$、$x_n\\ne x_0$ 的任意数列 $\\{x_n\\}$，都有 $f(x_n)\\to a$。"
        ],
        "conditions": ["函数在 $x_0$ 的去心邻域内有定义。", "所取数列始终不等于 $x_0$。"],
        "conclusion": ["函数极限与任意趋近数列的像极限等价。"],
        "intuition": "把函数极限转化为所有可能路径上的数列极限。",
        "proofIdea": ["必要性由 $\\varepsilon$-$\\delta$ 定义直接传递；充分性通常用反证法构造反例数列。"],
        "dependencies": ["函数极限定义", "数列极限定义"],
        "pitfalls": ["必须要求 $x_n\\ne x_0$，否则会给函数在 $x_0$ 的取值造成干扰。"],
        "source": "1.3, p. 129-137"
      },
      {
        "id": "thm-1-3-5",
        "type": "theorem",
        "label": "定理 1.3.5",
        "title": "四则运算法则",
        "statement": [
          "设 $\\lim\\limits_{x\\to x_0}f(x)=a$，$\\lim\\limits_{x\\to x_0}g(x)=b$，则函数极限对加减、乘法和除法满足相应的运算法则；除法还要求 $b\\ne0$。"
        ],
        "conditions": ["两个函数极限都存在。", "除法还要求分母极限 $b\\ne0$。"],
        "conclusion": [
          "$\\lim\\limits_{x\\to x_0}(f\\pm g)=a\\pm b$。",
          "$\\lim\\limits_{x\\to x_0}(fg)=ab$。",
          "$\\lim\\limits_{x\\to x_0}(f/g)=a/b$，其中 $b\\ne0$。"
        ],
        "intuition": "函数极限与数列极限具有相同的运算结构。",
        "proofIdea": ["可用 Heine 定理把函数极限转成数列极限，或直接用 $\\varepsilon$-$\\delta$ 估计。"],
        "dependencies": ["Heine 定理", "数列极限四则运算"],
        "pitfalls": ["除法中的 $b\\ne0$ 不能省略。"],
        "source": "1.3, p. 157-165"
      },
      {
        "id": "thm-1-3-6",
        "type": "theorem",
        "label": "定理 1.3.6",
        "title": "复合函数的极限运算法则",
        "statement": [
          "设 $y=f(g(x))$ 由 $y=f(u)$ 与 $u=g(x)$ 复合而成。若 $g(x)\\to u_0$，$f(u)\\to a$，且 $x_0$ 的去心邻域内 $g(x)\\ne u_0$，则 $\\lim\\limits_{x\\to x_0}f(g(x))=\\lim\\limits_{u\\to u_0}f(u)=a$。"
        ],
        "conditions": [
          "$u=g(x)$ 在 $x\\to x_0$ 时有极限 $u_0$。",
          "$f(u)$ 在 $u\\to u_0$ 时有极限 $a$。",
          "靠近 $x_0$ 时 $g(x)\\ne u_0$。"
        ],
        "conclusion": ["复合函数在 $x_0$ 处有极限，且极限为 $a$。"],
        "intuition": "先让内层趋近 $u_0$，再让外层在 $u_0$ 附近趋近 $a$。",
        "proofIdea": ["先控制 $f(u)$ 的误差，再用 $g(x)\\to u_0$ 把 $u$ 拉进对应邻域。"],
        "dependencies": ["函数极限定义"],
        "pitfalls": ["条件 $g(x)\\ne u_0$ 用于排除在 $u_0$ 处取值的干扰。"],
        "source": "1.3, p. 185-195"
      },
      {
        "id": "thm-1-3-7",
        "type": "theorem",
        "label": "定理 1.3.7",
        "title": "夹逼定理",
        "statement": [
          "若在 $x_0$ 的某去心邻域内 $g(x)\\le f(x)\\le h(x)$，且 $g(x)\\to a$、$h(x)\\to a$，则 $f(x)\\to a$。"
        ],
        "conditions": ["函数在去心邻域内满足夹逼不等式。", "上下界函数的极限相同。"],
        "conclusion": ["函数 $f$ 在 $x_0$ 处有极限，且等于公共极限。"],
        "intuition": "函数被两条趋于同一点的曲线夹住。",
        "proofIdea": ["按函数极限定义同步控制上下界，再传递到中间函数。"],
        "dependencies": ["函数极限定义"],
        "pitfalls": ["上下界极限必须相同。"],
        "source": "1.3, p. 212-220"
      },
      {
        "id": "thm-1-3-8",
        "type": "theorem",
        "label": "定理 1.3.8",
        "title": "函数极限的单调有界原理",
        "statement": [
          "(1) 若 $f$ 在 $[a,+\\infty)$ 上单调增且有上界（单调减且有下界），则 $\\lim\\limits_{x\\to+\\infty}f(x)$ 存在。",
          "(2) 若 $f$ 在开区间 $I$ 内单调，则 $f$ 在 $I$ 内每一点处的左、右极限都存在。"
        ],
        "conditions": ["函数在相应区间上单调。", "相应的有界条件成立。"],
        "conclusion": ["相应方向的极限存在。"],
        "intuition": "单调函数的值只能沿一个方向变化，若被界限制，就会稳定下来。",
        "proofIdea": ["用相应函数值集合的上、下确界作为极限候选。"],
        "dependencies": ["函数的确界", "单调性"],
        "pitfalls": ["无穷远处的有界条件与单侧极限的存在性不是同一个命题。"],
        "source": "1.3, p. 242-246"
      },
      {
        "id": "thm-1-3-9",
        "type": "theorem",
        "label": "定理 1.3.9",
        "title": "$x\\to x_0$ 时的 Cauchy 收敛准则",
        "statement": [
          "设 $f$ 在 $N(x_0,\\delta_0)$ 内有定义，则 $\\lim\\limits_{x\\to x_0}f(x)$ 存在的充分必要条件是：对任意 $\\varepsilon>0$，存在 $\\delta\\in(0,\\delta_0)$，使对任意 $x',x''\\in\\mathring N(x_0,\\delta)$，恒有 $|f(x')-f(x'')|<\\varepsilon$。"
        ],
        "conditions": ["函数在 $x_0$ 的某个去心邻域内有定义。"],
        "conclusion": ["极限存在的判据是函数值在靠近 $x_0$ 时彼此足够接近。"],
        "intuition": "不必先知道极限值，只要函数值在局部形成 Cauchy 型控制。",
        "proofIdea": ["必要性由三角不等式直接得到；充分性通过构造数列或使用完备性证明。"],
        "dependencies": ["函数极限定义", "实数完备性"],
        "pitfalls": ["Cauchy 条件控制的是任意两点之间的差，不是与某个固定点的距离。"],
        "source": "1.3, p. 255-263"
      },
      {
        "id": "thm-1-3-10",
        "type": "theorem",
        "label": "定理 1.3.10",
        "title": "$x\\to\\infty$ 时的 Cauchy 收敛准则",
        "statement": [
          "设 $f$ 对一切 $|x|>a$ 有定义，则 $\\lim\\limits_{x\\to\\infty}f(x)$ 存在的充分必要条件是：对任意 $\\varepsilon>0$，存在 $X>a$，使对任意 $x',x''$ 满足 $|x'|>X,|x''|>X$ 时，恒有 $|f(x')-f(x'')|<\\varepsilon$。"
        ],
        "conditions": ["函数在无穷远的定义域上处处有定义。"],
        "conclusion": ["根据远处任意两点函数值的差判断极限存在性。"],
        "intuition": "只要足够远处的函数值彼此接近，就可以判定函数有极限。",
        "proofIdea": ["原课件注明证明略，可仿照 $x\\to x_0$ 情形处理。"],
        "dependencies": ["定理 1.3.9", "实数完备性"],
        "pitfalls": ["注意这里同时讨论 $x\\to+\\infty$ 与 $x\\to-\\infty$ 方向。"],
        "source": "1.3, p. 288-290"
      },
      {
        "id": "cor-1-3-1",
        "type": "corollary",
        "label": "推论 1",
        "title": "局部保号性",
        "statement": [
          "若 $\\lim\\limits_{x\\to x_0}f(x)=a$，且 $a>0$，则存在 $\\delta>0$，使当 $x\\in\\mathring N(x_0,\\delta)$ 时，有 $f(x)>0$；$a<0$ 时同理可得 $f(x)<0$。"
        ],
        "conditions": ["函数极限存在，且极限值严格为正或严格为负。"],
        "conclusion": ["在局部去心邻域内函数保持相应符号。"],
        "intuition": "函数在趋近 $x_0$ 的过程中不会越过一个正负分界点。",
        "proofIdea": ["取 $b=0$，应用局部保序性，或取 $\\varepsilon=|a|/2$。"],
        "dependencies": ["定理 1.3.3"],
        "pitfalls": ["极限为 0 时不能断言符号。"],
        "source": "1.3, p. 117-128"
      },
      {
        "id": "cor-1-3-2",
        "type": "corollary",
        "label": "推论 2",
        "title": "局部序的极限传递",
        "statement": [
          "设 $\\lim\\limits_{x\\to x_0}f(x)=a$，$\\lim\\limits_{x\\to x_0}g(x)=b$。若在 $x_0$ 的某去心邻域内恒有 $f(x)\\le g(x)$，则 $a\\le b$。"
        ],
        "conditions": ["两函数极限存在。", "去心邻域内存在函数值之间的不等式。"],
        "conclusion": ["极限之间只推得非严格不等式。"],
        "intuition": "局部函数值有序，取极限后序不会反转。",
        "proofIdea": ["反设 $a>b$，与保序性矛盾。"],
        "dependencies": ["定理 1.3.3"],
        "pitfalls": ["不能从 $f(x)<g(x)$ 推出 $a<b$。"],
        "source": "1.3, p. 117-128"
      },
      {
        "id": "cor-1-3-3",
        "type": "corollary",
        "label": "推论 1.3.3",
        "title": "线性运算法则",
        "statement": [
          "设 $\\lim\\limits_{x\\to x_0}f(x)=a$，$\\lim\\limits_{x\\to x_0}g(x)=b$。若 $k_1,k_2\\in\\mathbb{R}$，则 $\\lim\\limits_{x\\to x_0}(k_1f(x)+k_2g(x))=k_1a+k_2b$。"
        ],
        "conditions": ["两函数极限存在。", "$k_1,k_2$ 为常数。"],
        "conclusion": ["线性组合的极限等于极限的线性组合。"],
        "intuition": "极限对线性运算保持封闭。",
        "proofIdea": ["由定理 1.3.5 的加法与数乘情形合成。"],
        "dependencies": ["定理 1.3.5"],
        "pitfalls": ["要求每个部分极限都存在。"],
        "source": "1.3, p. 165"
      }
    ]
  },
  {
    "number": "1.4",
    "title": "无穷小量与无穷大量",
    "lead": "用极限为零和无穷大的变量比较趋于极限的快慢。",
    "map": ["无穷小量", "无穷大的趋于方式", "阶的比较", "等价替换", "极限转换"],
    "definitions": [
      {
        "label": "定义 1.4.1",
        "title": "无穷小量",
        "statement": [
          "若在指定极限过程中 $X\\to0$，则称 $X$ 是该极限过程中的无穷小量，简称无穷小。"
        ],
        "source": "1.4, p. 13-22"
      },
      {
        "label": "定义 1.4.2",
        "title": "无穷小量的阶",
        "statement": [
          "$X=o(Y)$ 表示 $X$ 是比 $Y$ 高阶的无穷小；$X=O(Y)$ 表示同阶控制；$X\\sim Y$ 表示等价无穷小；$X$ 是 $Y$ 的 $k$ 阶无穷小则要求 $X/Y^k$ 趋于非零常数。"
        ],
        "source": "1.4, p. 58-69"
      },
      {
        "label": "定义 1.4.3",
        "title": "无穷大量",
        "statement": [
          "若对任意 $G>0$，存在 $\\delta>0$，使当 $0<|x-x_0|<\\delta$ 时恒有 $|f(x)|>G$，则称 $f(x)$ 是 $x\\to x_0$ 时的无穷大量，记作 $f(x)\\to\\infty$。"
        ],
        "source": "1.4, p. 125-134"
      },
      {
        "label": "定义 1.4.4",
        "title": "无穷大量的阶",
        "statement": [
          "无穷大量之间同样可以用 $o,O,\\sim$ 描述增长快慢；若 $u(x)/v(x)$ 保持在一个正数倍数范围内，则称同阶；若 $u/v\\to1$，则称等价，记作 $u\\sim v$。"
        ],
        "source": "1.4, p. 172-188"
      }
    ],
    "entries": [
      {
        "id": "thm-1-4-1",
        "type": "theorem",
        "label": "定理 1.4.1",
        "title": "极限存在与无穷小量的转换关系",
        "statement": ["在指定极限过程中，$X\\to A$ 当且仅当 $X=A+\\alpha$，其中 $\\alpha$ 为无穷小量，即 $\\alpha\\to0$。"],
        "conditions": ["在同一个极限过程中讨论 $X$ 与 $\\alpha$。"],
        "conclusion": ["任何一个收敛变量都可以写成极限值加无穷小量。"],
        "intuition": "把“趋于某个值”拆成“固定值加上逐渐消失的修正量”。",
        "proofIdea": [
          "必要性：令 $\\alpha=X-A$，则 $\\alpha\\to0$。",
          "充分性：若 $\\alpha\\to0$，则 $X=A+\\alpha\\to A$。"
        ],
        "dependencies": ["无穷小量定义", "函数极限的四则运算"],
        "pitfalls": ["无穷小量是变量，不是一个很小的常数；零是特殊的无穷小量。"],
        "source": "1.4, p. 36-46"
      },
      {
        "id": "thm-1-4-2",
        "type": "theorem",
        "label": "定理 1.4.2",
        "title": "等价无穷小的性质",
        "statement": [
          "(1) 若 $X\\sim Y$，则 $X-Y=o(X)=o(Y)$。",
          "(2) 若 $X\\sim\\widetilde X$，$Y\\sim\\widetilde Y$，且在指定极限过程中 $X/Y\\to A$，则 $\\widetilde X/\\widetilde Y\\to A$。"
        ],
        "conditions": ["相关符号都在同一极限过程下讨论。", "涉及商的式子要求分母不为零并满足等价关系。"],
        "conclusion": ["等价无穷小可以用于简化极限，而不会改变商的极限。"],
        "intuition": "等价的变量在相对误差趋于 0 的意义下可以互相替换。",
        "proofIdea": ["把 $\\widetilde X/\\widetilde Y$ 拆成三个因子的乘积，并利用等价比趋于 1。"],
        "dependencies": ["等价无穷小定义", "极限四则运算"],
        "pitfalls": ["等价替换适合乘除结构，直接代入加减结构可能改变主项。"],
        "source": "1.4, p. 84-94"
      }
    ]
  },
  {
    "number": "1.5",
    "title": "连续函数",
    "lead": "从点连续出发，整理闭区间上的整体性质与一致连续。",
    "map": ["点连续", "运算与复合", "闭区间整体性质", "介值与值域", "一致连续"],
    "definitions": [
      {
        "label": "定义 1.5.1",
        "title": "函数在一点处连续",
        "statement": [
          "设函数 $f$ 在 $x_0$ 的某邻域内有定义。若 $\\lim\\limits_{x\\to x_0}f(x)=f(x_0)$，则称 $f$ 在 $x_0$ 处连续。",
          "用 $\\varepsilon$-$\\delta$ 语言表示为：对任意 $\\varepsilon>0$，存在 $\\delta>0$，当 $|x-x_0|<\\delta$ 时，$|f(x)-f(x_0)|<\\varepsilon$。"
        ],
        "source": "1.5, p. 5-12"
      },
      {
        "label": "定义 1.5.2",
        "title": "单侧连续",
        "statement": [
          "若 $\\lim\\limits_{x\\to x_0^-}f(x)=f(x_0)$，则称 $f$ 在 $x_0$ 左连续；若 $\\lim\\limits_{x\\to x_0^+}f(x)=f(x_0)$，则称右连续。"
        ],
        "source": "1.5, p. 21-26"
      },
      {
        "label": "定义 1.5.3",
        "title": "在区间上连续",
        "statement": [
          "若 $f$ 在开区间 $(a,b)$ 内连续，且在左端点 $a$ 右连续、在右端点 $b$ 左连续，则称 $f$ 在闭区间 $[a,b]$ 上连续，记作 $f\\in C([a,b])$。"
        ],
        "source": "1.5, p. 27-30"
      },
      {
        "label": "定义 1.5.5",
        "title": "一致连续",
        "statement": [
          "若对任意 $\\varepsilon>0$，存在与点的位置无关的 $\\delta>0$，使对任意 $x_1,x_2\\in I$，只要 $|x_1-x_2|<\\delta$，就有 $|f(x_1)-f(x_2)|<\\varepsilon$，则称 $f$ 在区间 $I$ 上一致连续。"
        ],
        "source": "1.5, p. 314-321"
      }
    ],
    "entries": [
      {
        "id": "thm-1-5-1",
        "type": "theorem",
        "label": "定理 1.5.1",
        "title": "连续函数的四则运算法则",
        "statement": [
          "设函数 $f(x)$ 与 $g(x)$ 都在点 $x_0$ 处连续，则 $f(x)\\pm g(x)$、$f(x)g(x)$ 与 $f(x)/g(x)$（当 $g(x_0)\\ne0$）也都在 $x_0$ 处连续。"
        ],
        "conditions": ["两个函数在 $x_0$ 处连续。", "商的情形还要求 $g(x_0)\\ne0$。"],
        "conclusion": ["四则运算后的函数仍在 $x_0$ 处连续。"],
        "intuition": "点连续的定义与函数极限四则运算法则结合即可完成传递。",
        "proofIdea": ["把连续性写成 $\\lim\\limits_{x\\to x_0}f(x)=f(x_0)$，再使用函数极限的四则运算。"],
        "dependencies": ["定义 1.5.1", "定理 1.3.5"],
        "pitfalls": ["商法则要求的是 $g(x_0)\\ne0$，不能只看分母极限形式。"],
        "source": "1.5, p. 43-51"
      },
      {
        "id": "thm-1-5-2",
        "type": "theorem",
        "label": "定理 1.5.2",
        "title": "复合函数的连续性",
        "statement": [
          "设 $u=g(x)$ 在 $x_0$ 处连续，$y=f(u)$ 在 $u_0=g(x_0)$ 处连续，则复合函数 $y=f(g(x))$ 在 $x_0$ 处连续。"
        ],
        "conditions": ["内层函数在 $x_0$ 处连续。", "外层函数在对应的内层函数值 $u_0$ 处连续。"],
        "conclusion": ["复合函数在 $x_0$ 处连续。"],
        "intuition": "先保证内层输出靠近 $u_0$，再让外层输入靠近 $u_0$ 时输出靠近 $f(u_0)$。",
        "proofIdea": ["由外层连续，对任意 $\\varepsilon$ 取到内层需要的 $\\delta$，再结合内层连续性。"],
        "dependencies": ["定义 1.5.1", "函数极限定义"],
        "pitfalls": ["要注意内层函数在 $x_0$ 处的实际取值，而不是只关注去心邻域。"],
        "source": "1.5, p. 58-64"
      },
      {
        "id": "thm-1-5-3",
        "type": "theorem",
        "label": "定理 1.5.3",
        "title": "反函数的连续性",
        "statement": [
          "设函数 $y=f(x)$ 在区间 $I_x$ 上严格单调。若 $f$ 在 $I_x$ 上连续，则它的反函数 $x=f^{-1}(y)$ 在对应的区间 $I_y=\\{y\\mid y=f(x),x\\in I_x\\}$ 上处处有定义，并且在 $I_y$ 上严格单调且连续。"
        ],
        "conditions": ["原函数严格单调。", "原函数在区间上连续。"],
        "conclusion": ["反函数在对应值域区间上连续且保持严格单调性。"],
        "intuition": "严格单调保证一一对应，连续性保证正、反两方向都不会撕裂图形。",
        "proofIdea": ["先由单调性建立反函数，再用连续性和单调区间证明其在每一点连续。"],
        "dependencies": ["定义 1.5.1", "单调函数"],
        "pitfalls": ["反函数的定义域不是随便取的，而是原函数在该区间上的值域。"],
        "source": "1.5, p. 65-75"
      },
      {
        "id": "thm-1-5-4",
        "type": "theorem",
        "label": "定理 1.5.4",
        "title": "有界性定理",
        "statement": ["设 $f\\in C([a,b])$，则 $f$ 在 $[a,b]$ 上有界。"],
        "conditions": ["函数在闭区间 $[a,b]$ 上连续。"],
        "conclusion": ["存在 $M>0$，使 $|f(x)|\\le M$ 对一切 $x\\in[a,b]$ 成立。"],
        "intuition": "闭区间上的连续图像不能无限向上或向下伸展。",
        "proofIdea": [
          "反设 $f$ 无界，则对每个自然数 $n$，可取 $x_n\\in[a,b]$ 使 $|f(x_n)|\\ge n$。",
          "由有界数列存在收敛子列，利用连续性和子列极限推出矛盾。"
        ],
        "dependencies": ["Bolzano-Weierstrass 定理", "连续函数性质"],
        "pitfalls": ["如果区间不是闭区间，结论可能失效，例如 $1/x$ 在 $(0,1)$ 上无界。"],
        "source": "1.5, p. 198-212"
      },
      {
        "id": "thm-1-5-5",
        "type": "theorem",
        "label": "定理 1.5.5",
        "title": "最大最小值定理",
        "statement": [
          "设 $f\\in C([a,b])$，则 $f$ 在 $[a,b]$ 上一定能取到它的最大值和最小值，即存在 $\\xi,\\eta\\in[a,b]$，使 $f(\\xi)=\\max\\limits_{x\\in[a,b]}f(x)$，$f(\\eta)=\\min\\limits_{x\\in[a,b]}f(x)$。"
        ],
        "conditions": ["函数在闭区间上连续。"],
        "conclusion": ["函数值域在闭区间上取到最大和最小。"],
        "intuition": "把连续的闭区间图像看成一个有限高的图形，它必然有最高的点和最低的点。",
        "proofIdea": ["先用有界性定理得到值域有界，再构造趋近上确界与下确界的点列，结合连续性取极限。"],
        "dependencies": ["有界性定理", "确界存在定理"],
        "pitfalls": ["仅知道有界不等于取到最大、最小值；开区间上可能逼近而不达到。"],
        "source": "1.5, p. 213-217"
      },
      {
        "id": "thm-1-5-6",
        "type": "theorem",
        "label": "定理 1.5.6",
        "title": "零点存在定理",
        "statement": ["设 $f\\in C([a,b])$，若 $f(a)f(b)<0$，则至少存在一点 $\\xi\\in(a,b)$，使 $f(\\xi)=0$。"],
        "conditions": ["函数在闭区间上连续。", "端点函数值异号。"],
        "conclusion": ["区间内部至少有一个零点。"],
        "intuition": "连续曲线若要跨过 $x$ 轴，必须在某处与 $x$ 轴相交。",
        "proofIdea": ["通常用二分法构造嵌套区间，再用闭区间套定理或确界原理证明。"],
        "dependencies": ["闭区间套定理", "连续函数定义"],
        "pitfalls": ["至少一个零点不等于唯一；零点也可能出现在端点之外的条件组合中需另行判断。"],
        "source": "1.5, p. 237-240"
      },
      {
        "id": "thm-1-5-7",
        "type": "theorem",
        "label": "定理 1.5.7",
        "title": "介值定理",
        "statement": [
          "设 $f\\in C([a,b])$，令 $M=\\max\\limits_{x\\in[a,b]}f(x)$，$m=\\min\\limits_{x\\in[a,b]}f(x)$，则对任意 $\\mu\\in[m,M]$，至少存在一点 $\\xi\\in[a,b]$，使 $f(\\xi)=\\mu$。"
        ],
        "conditions": ["函数在闭区间上连续。"],
        "conclusion": ["函数值域覆盖 $[m,M]$ 中的每一个值。"],
        "intuition": "连续图像在最高和最低之间不能跳过任何中间高度。",
        "proofIdea": ["对给定的 $\\mu$，分别考虑最大值点和最小值点，构造零点问题或直接使用上、下确界。"],
        "dependencies": ["最大最小值定理", "零点存在定理"],
        "pitfalls": ["必须连续，间断函数可以跳过中间值。"],
        "source": "1.5, p. 280-283"
      },
      {
        "id": "thm-1-5-8",
        "type": "theorem",
        "label": "定理 1.5.8",
        "title": "Cantor 定理",
        "statement": ["设 $f\\in C([a,b])$，则 $f$ 在 $[a,b]$ 上一致连续。"],
        "conditions": ["函数在闭区间上连续。"],
        "conclusion": ["连续升级为一致连续。"],
        "intuition": "紧的闭区间排除了端点附近或内部点附近出现“越来越陡”的情况。",
        "proofIdea": [
          "反设不一致连续，取不满足一致连续定义的点列 $x_n',x_n''$，使距离趋于 0 而函数值差保持正距离。",
          "由有界性取收敛子列，结合连续性得到矛盾。"
        ],
        "dependencies": ["Bolzano-Weierstrass 定理", "连续函数定义"],
        "pitfalls": ["闭区间和连续两个条件都不能省。"],
        "source": "1.5, p. 345-350"
      },
      {
        "id": "thm-1-5-9",
        "type": "theorem",
        "label": "定理 1.5.9",
        "title": "一致连续的充要条件",
        "statement": [
          "设函数 $f$ 在区间 $I$ 上有定义，则 $f$ 在 $I$ 上一致连续的充分必要条件是：对 $I$ 中任意点列 $\\{x_n'\\}$ 与 $\\{x_n''\\}$，只要 $\\lim\\limits_{n\\to\\infty}(x_n'-x_n'')=0$，就有 $\\lim\\limits_{n\\to\\infty}(f(x_n')-f(x_n''))=0$。"
        ],
        "conditions": ["函数在整个区间 $I$ 上有定义。"],
        "conclusion": ["用任意靠近但不一定收敛的点列来判定一致连续。"],
        "intuition": "一致连续要求函数不能再把越来越近的两点拉出固定大小的差。",
        "proofIdea": ["必要性和充分性都可通过定义与反证法处理。"],
        "dependencies": ["定义 1.5.5 一致连续"],
        "pitfalls": ["点列本身不必收敛，只要求两点之间的距离趋于 0。"],
        "source": "1.5, p. 356-362"
      },
      {
        "id": "thm-1-5-10",
        "type": "theorem",
        "label": "定理 1.5.10",
        "title": "有限开区间上一致连续的充要条件",
        "statement": [
          "若函数 $f\\in C((a,b))$，则 $f$ 在 $(a,b)$ 内一致连续的充分必要条件是 $f(a+0)$ 与 $f(b-0)$ 都存在。"
        ],
        "conditions": ["函数在有限开区间 $(a,b)$ 内连续。"],
        "conclusion": ["一致连续等价于两个端点处的单侧极限都存在。"],
        "intuition": "开区间上的一致连续不允许在端点附近出现无法延拓的振荡或无穷大。",
        "proofIdea": ["充分性：先补充端点值，构造闭区间连续函数，再用 Cantor 定理；必要性由一致连续的 Cauchy 型控制证明端点单侧极限存在。"],
        "dependencies": ["Cantor 定理", "一致连续定义"],
        "pitfalls": ["只适用于有限开区间；无穷区间不能用同一个端点判据。"],
        "source": "1.5, p. 384-399"
      },
      {
        "id": "cor-1-5-1",
        "type": "corollary",
        "label": "推论 1.5.1",
        "title": "端点异号时的介值形式",
        "statement": [
          "若函数 $f\\in C([a,b])$，且 $f(a)\\ne f(b)$，则 $f$ 必可取介于 $f(a)$ 与 $f(b)$ 之间的任何值。"
        ],
        "conditions": ["函数在闭区间上连续。", "端点函数值不相等。"],
        "conclusion": ["对 $f(a)$ 与 $f(b)$ 之间的任意值，都存在 $\\xi$ 对应。"],
        "intuition": "介值定理在端点值之间的直接形式。",
        "proofIdea": ["把区间端点看作两个函数值，应用介值定理。"],
        "dependencies": ["定理 1.5.7 介值定理"],
        "pitfalls": ["这是介值定理的一个具体形式，不代替零点存在定理的异号条件。"],
        "source": "1.5, p. 299"
      },
      {
        "id": "cor-1-5-2",
        "type": "corollary",
        "label": "推论 1.5.2",
        "title": "值域定理",
        "statement": [
          "设函数 $f\\in C([a,b])$。若 $m=\\min\\limits_{x\\in[a,b]}f(x)$，$M=\\max\\limits_{x\\in[a,b]}f(x)$，则 $f([a,b])=[m,M]$。"
        ],
        "conditions": ["函数在闭区间上连续。"],
        "conclusion": ["连续函数把闭区间映成一个闭区间，且值域恰好为 $[m,M]$。"],
        "intuition": "连续函数既不会跳过中间值，也不会超出最大值和最小值，因此值域完整地填满 $[m,M]$。",
        "proofIdea": ["先由最大最小值定理得到 $m,M$，再由介值定理说明中间值都取到。"],
        "dependencies": ["最大最小值定理", "介值定理"],
        "pitfalls": ["这是闭区间连续函数的整体性质，开区间或间断函数不保证成立。"],
        "source": "1.5, p. 307"
      }
    ]
  }
];
