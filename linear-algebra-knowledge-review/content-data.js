window.LINEAR_REVIEW_CHAPTERS = [
  {
    "number": "1.1",
    "title": "矩阵的基本概念",
    "lead": "先建立矩阵、向量和特殊方阵的语言，为后续运算与变换提供统一记法。",
    "map": ["矩阵", "同型与相等", "特殊方阵", "行向量与列向量"],
    "entries": [
      {
        "id": "la-def-matrix",
        "type": "definition",
        "label": "基本概念 1.1.1",
        "title": "矩阵的定义",
        "statement": ["由 $m\\times n$ 个数按 $m$ 行、$n$ 列排成的矩形数表称为 $m\\times n$ 矩阵，记作 $A=(a_{ij})_{m\\times n}$。"],
        "conditions": ["元素按固定行列位置排列。", "通常先写行数，再写列数。"],
        "conclusion": ["$m=n$ 时称为方阵。", "矩阵的元素既可以是实数，也可以是后续课程中允许的数域元素。"],
        "derivation": ["矩阵不是单个数字，而是带有行列结构的数表。", "$a_{ij}$ 表示第 $i$ 行第 $j$ 列的元素，行指标写在前面，列指标写在后面。"],
        "pitfalls": ["把矩阵写成普通集合，忽略元素位置。"],
        "source": "课件 1-2，1.1 矩阵基本概念"
      },
      {
        "id": "la-def-same-shape",
        "type": "definition",
        "label": "基本概念 1.1.2",
        "title": "同型矩阵与矩阵相等",
        "statement": ["两个矩阵的行数和列数分别相同，称为同型矩阵。若同型矩阵对应位置的元素都相等，则称两个矩阵相等。"],
        "conditions": ["比较前先确认行列数完全一致。"],
        "conclusion": ["$A=B$ 当且仅当 $a_{ij}=b_{ij}$ 对所有允许的 $i,j$ 成立。"],
        "derivation": ["矩阵相等要求所有位置逐个核对。", "只要有一个位置的元素不同，两个矩阵就不相等。"],
        "pitfalls": ["行列数不同不能比较相等。", "只比较部分元素或行列式相等都不足以说明矩阵相等。"],
        "source": "课件 1-2，1.1-1.2"
      },
      {
        "id": "la-def-special-square",
        "type": "definition",
        "label": "基本概念 1.1.3",
        "title": "零矩阵、单位矩阵、对角矩阵与三角矩阵",
        "statement": ["零矩阵的元素全为 $0$；主对角线元素全为 $1$、其余元素全为 $0$ 的方阵是单位矩阵 $E$；除主对角线外元素全为 $0$ 的方阵是对角矩阵；主对角线一侧元素全为 $0$ 的方阵是三角矩阵。"],
        "conditions": ["上述特殊方阵均要求是方阵。"],
        "conclusion": ["单位矩阵在矩阵乘法中承担“数乘中的 1”的角色。", "三角矩阵常用于快速计算行列式和迭代运算。"],
        "derivation": ["零矩阵记作 $O$，不要求行数和列数相等。", "单位矩阵必须标明阶数，如 $E_n$。", "上三角矩阵和下三角矩阵都称为三角矩阵。"],
        "pitfalls": ["零矩阵可以不是方阵。", "$E$ 与任意零矩阵不能混淆。"],
        "source": "课件 1-2，1.1"
      },
      {
        "id": "la-def-vector",
        "type": "definition",
        "label": "基本概念 1.1.4",
        "title": "行向量与列向量",
        "statement": ["只有一行的矩阵称为行向量；只有一列的矩阵称为列向量。"],
        "conditions": ["向量本质上是一类特殊矩阵。"],
        "conclusion": ["$1\\times n$ 矩阵称为 $n$ 维行向量。", "$n\\times1$ 矩阵称为 $n$ 维列向量。"],
        "derivation": ["后续线性组合、方程组和特征向量都统一使用列向量表示，除非特别说明。"],
        "pitfalls": ["行向量与列向量不是同型矩阵，不能随意互换。"],
        "source": "课件 1-2，1.1"
      },
      {
        "id": "la-formula-add-scalar",
        "type": "formula",
        "label": "运算 1.2.1",
        "title": "矩阵加法与数乘",
        "statement": ["同型矩阵 $A,B$ 的加法定义为逐元素相加：$(A+B)_{ij}=a_{ij}+b_{ij}$。数 $k$ 与矩阵的数乘定义为逐元素相乘：$(kA)_{ij}=ka_{ij}$。"],
        "conditions": ["加法要求两个矩阵同型。"],
        "conclusion": ["矩阵加法和数乘满足交换律、结合律以及与数乘的相容性。"],
        "derivation": ["矩阵加法没有元素之间的跨位置运算，本质上是同型数表的逐点运算。"],
        "pitfalls": ["不同型矩阵不能相加。", "数乘是每个元素都乘，不是只乘第一行或主对角线。"],
        "source": "课件 1-2，1.2"
      },
      {
        "id": "la-formula-multiply",
        "type": "formula",
        "label": "运算 1.2.2",
        "title": "矩阵乘法的定义",
        "statement": ["若 $A=(a_{ij})_{m\\times s}$，$B=(b_{ij})_{s\\times n}$，则乘积 $AB$ 是 $m\\times n$ 矩阵，且 $(AB)_{ij}=\\sum_{k=1}^{s}a_{ik}b_{kj}$。"],
        "conditions": ["左矩阵的列数必须等于右矩阵的行数。"],
        "conclusion": ["$AB$ 的行数等于 $A$ 的行数，列数等于 $B$ 的列数。"],
        "derivation": ["第 $i$ 行与第 $j$ 列对应位置相乘后求和。", "矩阵乘法可以看成对右矩阵列向量的线性组合。"],
        "pitfalls": ["不能只看两个矩阵尺寸相同就贸然相乘。", "$AB$ 有意义不代表 $BA$ 有意义。"],
        "source": "课件 2，第 1-10 页"
      },
      {
        "id": "la-property-multiply",
        "type": "property",
        "label": "性质 1.2.3",
        "title": "矩阵乘法的结合律、分配律与数乘相容性",
        "statement": ["在运算有意义时：$(AB)C=A(BC)$；$A(B+C)=AB+AC$，$(A+B)C=AC+BC$；$(kA)B=k(AB)=A(kB)$。"],
        "conditions": ["每一步乘法和加法都必须满足形状条件。"],
        "conclusion": ["矩阵乘法可以结合，可以分配，但不能交换。"],
        "derivation": ["结合律只改变相邻因子的分组，不改变因子顺序。", "分配律要求括号内矩阵同型，且乘法列行匹配。"],
        "pitfalls": ["把 $AB=BA$ 当成普遍规律。", "把结合律误用为交换律。"],
        "source": "课件 2，第 1-10 页"
      },
      {
        "id": "la-property-noncommute",
        "type": "property",
        "label": "性质 1.2.4",
        "title": "矩阵乘法一般不满足交换律",
        "statement": ["即使 $AB$ 和 $BA$ 都有意义，通常仍有 $AB\\ne BA$。"],
        "conditions": ["$A,B$ 为可相乘的同阶方阵等情形。"],
        "conclusion": ["不能随意交换矩阵因子顺序。"],
        "derivation": ["反例：$A=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$，$B=\\begin{pmatrix}1&0\\\\1&0\\end{pmatrix}$，则 $AB\\ne BA$。"],
        "pitfalls": ["由某个具体例子成立就推出普遍成立。", "因 $AB=AC$ 而直接消去 $A$；只有 $A$ 可逆时才能这样做。"],
        "source": "课件 2，第 3-9 页"
      },
      {
        "id": "la-formula-power",
        "type": "formula",
        "label": "运算 1.2.5",
        "title": "方阵的幂与指数律",
        "statement": ["若 $A$ 为方阵，则 $A^k$ 是 $k$ 个 $A$ 连乘。对正整数 $k,l$，有 $A^kA^l=A^{k+l}$，$(A^k)^l=A^{kl}$。"],
        "conditions": ["只有方阵才能定义正整数次幂。"],
        "conclusion": ["同一矩阵的幂可以合并指数。"],
        "derivation": ["因为所有因子都是同一个 $A$，结合后不会出现 $AB$ 与 $BA$ 的交换问题。"],
        "pitfalls": ["非方阵不能写幂。", "$(AB)^k=A^kB^k$ 需要 $AB=BA$。"],
        "source": "课件 2，第 3-9 页"
      },
      {
        "id": "la-formula-polynomial",
        "type": "formula",
        "label": "运算 1.2.6",
        "title": "矩阵多项式",
        "statement": ["若 $f(x)=a_sx^s+\\cdots+a_1x+a_0$，则 $f(A)=a_sA^s+\\cdots+a_1A+a_0E$。"],
        "conditions": ["$A$ 为方阵，常数项需要乘以同阶单位矩阵。"],
        "conclusion": ["矩阵多项式仍是同阶方阵。"],
        "derivation": ["把 $x$ 替换成 $A$，同时把常数 $a_0$ 替换成 $a_0E$。"],
        "pitfalls": ["把常数项写成普通数字，无法与矩阵相加。"],
        "source": "课件 3，第 1-14 页"
      },
      {
        "id": "la-formula-binomial",
        "type": "formula",
        "label": "运算 1.2.7",
        "title": "矩阵二项式展开",
        "statement": ["若 $A,B$ 同阶且 $AB=BA$，则 $(A+B)^n=\\sum_{k=0}^{n}\\binom nk A^{n-k}B^k$。"],
        "conditions": ["$A,B$ 同阶且相乘可交换。"],
        "conclusion": ["在可交换条件下可以沿用普通二项式公式。"],
        "derivation": ["展开中所有交叉项都能合并，是因为 $AB=BA$。"],
        "pitfalls": ["未验证 $AB=BA$ 就使用二项式公式。", "把 $AB+BA$ 直接写成 $2AB$。"],
        "source": "课件 3，第 1-14 页"
      },
      {
        "id": "la-method-high-power",
        "type": "method",
        "label": "方法 1.2.8",
        "title": "用可结合标量求矩阵高次幂",
        "statement": ["若 $A=BC$ 且 $CB$ 为标量或标量矩阵，则 $A^n=B(CB)^{n-1}C$。"],
        "conditions": ["$B,C$ 的维度使 $CB$ 可反复结合。"],
        "conclusion": ["把高次幂转化为标量幂，显著降低计算量。"],
        "derivation": ["按 $(BC)(BC)\\cdots(BC)$ 写开后，先把中间的 $CB$ 结合成标量。"],
        "pitfalls": ["只看 $(BC)^n$ 就暴力乘 $n$ 次，忽略中间的标量结构。"],
        "source": "课件 2-3，第 7-10 页、第 1-14 页"
      },
      {
        "id": "la-property-transpose",
        "type": "property",
        "label": "性质 1.2.9",
        "title": "矩阵转置及其性质",
        "statement": ["转置把 $m\\times n$ 矩阵变为 $n\\times m$ 矩阵。$(A^T)^T=A$，$(A+B)^T=A^T+B^T$，$(kA)^T=kA^T$，$(AB)^T=B^TA^T$。"],
        "conditions": ["加法要求同型，乘法要求形状匹配。"],
        "conclusion": ["转置后行与列互换，乘法的转置需要反序。"],
        "derivation": ["$(AB)^T$ 的反序来自元素求和指标的顺序交换。"],
        "pitfalls": ["把 $(AB)^T$ 误写成 $A^TB^T$。"],
        "source": "课件 3，第 5-10 页"
      },
      {
        "id": "la-def-symmetric",
        "type": "definition",
        "label": "定义 1.2.10",
        "title": "对称矩阵与反对称矩阵",
        "statement": ["若 $A^T=A$，则 $A$ 为对称矩阵；若 $A^T=-A$，则 $A$ 为反对称矩阵。"],
        "conditions": ["只讨论方阵。"],
        "conclusion": ["对称矩阵满足 $a_{ij}=a_{ji}$。", "实反对称矩阵的主对角线元素全为 $0$。"],
        "derivation": ["对称是元素关于主对角线镜像相等；反对称是镜像元素互为相反数。"],
        "pitfalls": ["把某些非方阵也叫对称矩阵。"],
        "source": "课件 3，第 5-10 页"
      },
      {
        "id": "la-application-relation",
        "type": "method",
        "label": "应用 1.2.11",
        "title": "关系矩阵的平方",
        "statement": ["若 $a_{ij}=1$ 表示 $i,j$ 有直接关系，则 $(A^2)_{ii}$ 表示第 $i$ 个对象的关系数，$(A^2)_{ij}$ 表示 $i,j$ 的共同关系数。"],
        "conditions": ["矩阵元素用 $0,1$ 表示是否存在某关系。"],
        "conclusion": ["矩阵平方可以提取“朋友数”“共同朋友数”等二阶关系。"],
        "derivation": ["$(A^2)_{ij}=\\sum_k a_{ik}a_{kj}$，枚举所有中间对象 $k$。"],
        "pitfalls": ["把共同好友数误认为直接好友数。"],
        "source": "课件 3，例 6"
      },
      {
        "id": "la-def-block",
        "type": "definition",
        "label": "定义 1.3.1",
        "title": "分块矩阵",
        "statement": ["用横线和竖线把矩阵划分成若干小矩阵，每个小矩阵称为子块，按子块整体排列得到分块矩阵。"],
        "conditions": ["同一块行的子块有相同行数，同一块列的子块有相同列数。"],
        "conclusion": ["分块不改变矩阵本身，只改变观察和计算单位。"],
        "derivation": ["分块矩阵适合处理维数较大、局部具有单位块或零块结构的矩阵。"],
        "pitfalls": ["分块后只检查外框，忘记内部子块形状。"],
        "source": "课件 3，第 15-53 页"
      },
      {
        "id": "la-method-block-multiply",
        "type": "method",
        "label": "方法 1.3.2",
        "title": "分块矩阵的运算",
        "statement": ["同型且同分块的矩阵可逐块相加；数乘逐块进行；分块乘法按 $C_{ij}=\\sum_k A_{ik}B_{kj}$ 计算。"],
        "conditions": ["分块加法和数乘要求形状一致。", "分块乘法要求每个 $A_{ik}B_{kj}$ 有意义。"],
        "conclusion": ["分块运算形式上与普通矩阵运算相同。"],
        "derivation": ["把每个子块当作一个“元素”，但仍必须检查子块乘积的列行匹配。"],
        "pitfalls": ["分块乘法中调换子块顺序。"],
        "source": "课件 3，第 15-53 页"
      },
      {
        "id": "la-property-block-row-column",
        "type": "property",
        "label": "性质 1.3.3",
        "title": "按行、按列分块与线性组合",
        "statement": ["若 $A=(A_1,\\ldots,A_n)$，则 $Ax=x_1A_1+\\cdots+x_nA_n$。按行分块时，$AB$ 的每个块行是相应行块与 $B$ 的乘积。"],
        "conditions": ["列分块时向量维数与列块维数匹配。"],
        "conclusion": ["$Ax$ 是 $A$ 的列向量的线性组合。"],
        "derivation": ["把矩阵乘法按列或按行拆开后，本质是线性组合。"],
        "pitfalls": ["行向量与列向量方向混用。"],
        "source": "课件 3-4，按行列分块"
      },
      {
        "id": "la-property-block-transpose",
        "type": "property",
        "label": "性质 1.3.4",
        "title": "分块矩阵的转置",
        "statement": ["分块矩阵转置时，子块位置交换，同时每个子块也要转置：$(A_{ij})^T=A_{ji}^T$。"],
        "conditions": ["分块转置后行列位置必须互换。"],
        "conclusion": ["不能只交换子块位置而不转置子块。"],
        "derivation": ["每个子块内部的行列也要交换。"],
        "pitfalls": ["忘记对子块内部元素做转置。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-property-block-diagonal",
        "type": "property",
        "label": "性质 1.3.5",
        "title": "分块对角矩阵",
        "statement": ["若矩阵只在主对角线上有方子块，其余子块为零块，则称为分块对角矩阵，记作 $\\operatorname{diag}(A_1,\\ldots,A_s)$。"],
        "conditions": ["各对角子块均为方阵。"],
        "conclusion": ["分块对角矩阵的加法、乘法和行列式结构通常可逐块处理。"],
        "derivation": ["通过单位块 $E$ 和零块 $O$ 可以简化大矩阵运算。"],
        "pitfalls": ["把非方阵子块放入对角位置。"],
        "source": "课件 3，第 15-53 页"
      },
      {
        "id": "la-def-elementary-transform",
        "type": "definition",
        "label": "定义 1.4.1",
        "title": "初等行变换与初等列变换",
        "statement": ["初等行变换包括：交换两行；用非零数乘某一行；把某一行加另一行的若干倍。列变换定义类似。"],
        "conditions": ["倍乘变换的数必须非零。"],
        "conclusion": ["初等变换都是可逆的，不改变线性方程组的解集。"],
        "derivation": ["三类变换分别对应交换、缩放和消元的可逆操作。"],
        "pitfalls": ["把行变换和列变换混用，改变方程组解的结构。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-def-echelon",
        "type": "definition",
        "label": "定义 1.4.2",
        "title": "行阶梯形与行最简形",
        "statement": ["行阶梯形要求零行在下方，非零首元的列指标严格递增。行最简形还要求首元全为 $1$，且首元所在列其余元素全为 $0$。"],
        "conditions": ["由初等行变换得到。"],
        "conclusion": ["任何矩阵都能化为行阶梯形和行最简形。"],
        "derivation": ["行阶梯形突出消元位置，行最简形进一步把主元列化干净。"],
        "pitfalls": ["把行阶梯形当成行最简形。", "忽略零行必须放在底部。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-def-equivalence",
        "type": "definition",
        "label": "定义 1.4.3",
        "title": "矩阵等价与等价标准形",
        "statement": ["若矩阵 $A$ 可经有限次初等变换化为 $B$，则称 $A$ 与 $B$ 等价，记作 $A\\sim B$。任一 $m\\times n$ 矩阵等价于标准形 $\\begin{pmatrix}E_r&O\\\\O&O\\end{pmatrix}$。"],
        "conditions": ["初等变换可作用于行或列。"],
        "conclusion": ["等价标准形唯一。", "存在可逆矩阵 $P,Q$ 使 $A=PE_{mn}^{(r)}Q$。"],
        "derivation": ["初等变换对应左右乘初等矩阵，连续变换得到可逆矩阵乘积。"],
        "pitfalls": ["把矩阵等价误认为矩阵相等。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-def-elementary-matrix",
        "type": "definition",
        "label": "定义 1.4.4",
        "title": "初等矩阵",
        "statement": ["由单位矩阵经过一次初等变换得到的矩阵称为初等矩阵。"],
        "conditions": ["必须由单位矩阵只进行一次初等变换。"],
        "conclusion": ["初等矩阵都可逆，且逆矩阵仍是初等矩阵。"],
        "derivation": ["三类初等矩阵分别对应交换、倍乘、倍加变换。"],
        "pitfalls": ["把连续多次初等变换得到的矩阵仍称为初等矩阵。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-property-elementary-action",
        "type": "property",
        "label": "性质 1.4.5",
        "title": "初等矩阵的左右乘规则",
        "statement": ["对 $A$ 做一次初等行变换，相当于在左侧乘对应的初等矩阵；做一次初等列变换，相当于在右侧乘对应的初等矩阵。"],
        "conditions": ["初等矩阵的阶数与被变换矩阵的行数或列数对应。"],
        "conclusion": ["口诀：行左列右。"],
        "derivation": ["左乘逐行组合，右乘逐列组合。"],
        "pitfalls": ["把行变换误写成右乘初等矩阵。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-formula-elementary-inverse",
        "type": "formula",
        "label": "公式 1.4.6",
        "title": "初等矩阵的逆",
        "statement": ["$E(i,j)^{-1}=E(i,j)$，$E(i(k))^{-1}=E(i(1/k))$，$E(i,j(k))^{-1}=E(i,j(-k))$。"],
        "conditions": ["倍乘中的 $k\\ne0$。"],
        "conclusion": ["初等变换的逆仍是同类初等变换。"],
        "derivation": ["交换自己即可还原；倍乘用倒数还原；倍加用相反倍数还原。"],
        "pitfalls": ["交换矩阵的逆不是负矩阵。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-def-inverse",
        "type": "definition",
        "label": "定义 1.5.1",
        "title": "逆矩阵",
        "statement": ["若方阵 $A,B$ 满足 $AB=BA=E$，则称 $A$ 可逆，$B$ 是 $A$ 的逆矩阵，记作 $A^{-1}$。"],
        "conditions": ["$A$ 为方阵。"],
        "conclusion": ["逆矩阵若存在则唯一。"],
        "derivation": ["逆矩阵同时满足左右逆，不能只验证 $AB=E$ 而忽略形状和两侧条件。"],
        "pitfalls": ["把 $AB=E$ 的 $B$ 直接称为 $A^{-1}$ 而不检查方阵条件。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-proof-inverse-unique",
        "type": "proof",
        "label": "证明 1.5.2",
        "title": "逆矩阵的唯一性",
        "statement": ["若 $B,C$ 都是方阵 $A$ 的逆矩阵，则 $B=C$。"],
        "conditions": ["$A$ 可逆，$B,C$ 均为同阶逆矩阵。"],
        "conclusion": ["可逆矩阵的逆矩阵唯一。"],
        "derivation": ["$B=BE=B(AC)=(BA)C=EC=C$。"],
        "pitfalls": ["把单位矩阵 $E$ 与标量 $1$ 混同，忽略乘法结合顺序。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-formula-inverse-properties",
        "type": "formula",
        "label": "公式 1.5.3",
        "title": "逆矩阵的运算性质",
        "statement": ["$(A^{-1})^{-1}=A$；$(A^T)^{-1}=(A^{-1})^T$；$(kA)^{-1}=k^{-1}A^{-1}$，$k\\ne0$；$(AB)^{-1}=B^{-1}A^{-1}$。"],
        "conditions": ["相关矩阵均可逆，$k\\ne0$。"],
        "conclusion": ["乘积求逆必须反序。"],
        "derivation": ["$(AB)(B^{-1}A^{-1})=E$，反向乘法同理。"],
        "pitfalls": ["误写 $(AB)^{-1}=A^{-1}B^{-1}$。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-theorem-invertible-criteria",
        "type": "theorem",
        "label": "定理 1.5.4",
        "title": "可逆性判定",
        "statement": ["方阵 $A$ 可逆当且仅当 $A$ 可写成若干初等矩阵的乘积；也等价于 $A$ 可经初等行变换化为单位矩阵 $E$。"],
        "conditions": ["讨论对象为方阵。"],
        "conclusion": ["行最简形若可逆，则只能是 $E$。"],
        "derivation": ["每一类初等变换都可逆，连续初等变换对应初等矩阵乘积。"],
        "pitfalls": ["把矩阵可逆与矩阵等价混为一谈。"],
        "source": "课件 4，第 1-44 页"
      },
      {
        "id": "la-method-row-inverse",
        "type": "method",
        "label": "方法 1.5.5",
        "title": "初等行变换求逆",
        "statement": ["对增广矩阵 $(A,E)$ 实施初等行变换，若 $A\\sim E$，则 $(A,E)\\sim(E,A^{-1})$。"],
        "conditions": ["$A$ 可逆。"],
        "conclusion": ["右侧块就是 $A^{-1}$。"],
        "derivation": ["若 $P_s\\cdots P_1A=E$，则 $P_s\\cdots P_1=A^{-1}$，作用到单位矩阵上即得右块。"],
        "pitfalls": ["只变换左侧，不同步处理右侧。"],
        "source": "课件 5，第 1-8 页"
      },
      {
        "id": "la-method-column-inverse",
        "type": "method",
        "label": "方法 1.5.6",
        "title": "初等列变换求逆",
        "statement": ["把 $A$ 与 $E$ 上下放置，对整体做初等列变换，化为 $\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$。"],
        "conditions": ["$A$ 可逆。"],
        "conclusion": ["下方块就是 $A^{-1}$。"],
        "derivation": ["列变换等价于右乘初等矩阵，和行变换求逆方向相反。"],
        "pitfalls": ["把上下排列的列变换方法与 $(A,E)$ 行变换方法混淆。"],
        "source": "课件 5，第 1-8 页"
      },
      {
        "id": "la-method-solve-ax",
        "type": "method",
        "label": "方法 1.5.7",
        "title": "求解矩阵方程 $AX=B$",
        "statement": ["若 $A$ 为 $n$ 阶可逆矩阵，$B$ 为 $n\\times s$ 矩阵，则 $AX=B$ 有唯一解 $X=A^{-1}B$。"],
        "conditions": ["$A$ 可逆且形状匹配。"],
        "conclusion": ["可用增广矩阵 $(A,B)$ 的行变换直接求解。"],
        "derivation": ["左乘 $A^{-1}$ 得 $X=A^{-1}B$。"],
        "pitfalls": ["不能在右侧随意乘 $A^{-1}$ 消元，必须按乘法方向左乘。"],
        "source": "课件 5，第 9-19 页"
      },
      {
        "id": "la-method-solve-xa",
        "type": "method",
        "label": "方法 1.5.8",
        "title": "求解矩阵方程 $XA=B$",
        "statement": ["若 $A$ 为 $n$ 阶可逆矩阵，$B$ 为 $m\\times n$ 矩阵，则 $XA=B$ 有唯一解 $X=BA^{-1}$。"],
        "conditions": ["$A$ 可逆，$B$ 与 $A$ 的列数匹配。"],
        "conclusion": ["可用上下排列的列变换求解，也可转置后化为 $A^TX^T=B^T$。"],
        "derivation": ["右乘 $A^{-1}$ 得 $X=BA^{-1}$。"],
        "pitfalls": ["误写成 $X=A^{-1}B$。"],
        "source": "课件 5，第 9-19 页"
      },
      {
        "id": "la-def-det2",
        "type": "definition",
        "label": "定义 1.6.1",
        "title": "二阶行列式",
        "statement": ["$\\begin{vmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}$。"],
        "conditions": ["只讨论二阶方阵。"],
        "conclusion": ["结果为标量。"],
        "derivation": ["主对角线乘积减副对角线乘积。"],
        "pitfalls": ["把减号写成加号。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-def-det3",
        "type": "definition",
        "label": "定义 1.6.2",
        "title": "三阶行列式与对角线法则",
        "statement": ["三阶行列式可用六项展开：三个主方向乘积取正号，三个副方向乘积取负号。"],
        "conditions": ["只适用于二阶、三阶行列式。"],
        "conclusion": ["四阶及以上不能直接套用对角线法则。"],
        "derivation": ["将三条主对角线和三条副对角线分别相乘后代数求和。"],
        "pitfalls": ["把四阶行列式也按对角线法则展开。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-def-minor-cofactor",
        "type": "definition",
        "label": "定义 1.6.3",
        "title": "余子式与代数余子式",
        "statement": ["删去 $a_{ij}$ 所在第 $i$ 行和第 $j$ 列，余下 $n-1$ 阶行列式称为余子式 $M_{ij}$；$A_{ij}=(-1)^{i+j}M_{ij}$ 称为代数余子式。"],
        "conditions": ["$a_{ij}$ 位于 $n$ 阶方阵中。"],
        "conclusion": ["代数余子式比余子式多了符号因子。"],
        "derivation": ["符号由行列位置决定，$i+j$ 为偶数时为正，为奇数时为负。"],
        "pitfalls": ["忘记 $(-1)^{i+j}$。", "把余子式与代数余子式混同。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-def-det-recursive",
        "type": "definition",
        "label": "定义 1.6.4",
        "title": "行列式的递归定义",
        "statement": ["一阶行列式定义为该元素本身。对 $n\\ge2$，可按第一行展开：$D=\\sum_{k=1}^na_{1k}A_{1k}$。"],
        "conditions": ["需要先定义低一阶行列式。"],
        "conclusion": ["任意阶行列式都可通过递归展开计算。"],
        "derivation": ["用第一行元素分别乘对应代数余子式后求和。"],
        "pitfalls": ["展开时错位或漏项。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-property-triangular-det",
        "type": "property",
        "label": "性质 1.6.5",
        "title": "三角形行列式",
        "statement": ["上三角行列式与下三角行列式都等于主对角线元素的乘积：$D=a_{11}a_{22}\\cdots a_{nn}$。"],
        "conditions": ["对角线一侧元素全为 $0$。"],
        "conclusion": ["三角结构可以极大简化行列式计算。"],
        "derivation": ["按第一行展开并结合归纳法，可证明非对角项全消失。"],
        "pitfalls": ["把三角行列式误算成所有元素之和。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-method-compute-det3",
        "type": "method",
        "label": "方法 1.6.6",
        "title": "三阶行列式的计算",
        "statement": ["可用对角线展开，也可按某一行或某一列展开；选择含 $0$ 较多的行或列通常更快。"],
        "conditions": ["行列式阶数和元素结构已知。"],
        "conclusion": ["不同展开方式得到同一个行列式值。"],
        "derivation": ["课件例 $D=27$ 可由对角线法则或第一行展开得到。"],
        "pitfalls": ["计算过程中符号或位置错位。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-pitfall-diagonal-rule",
        "type": "pitfall",
        "label": "易错点 1.6.7",
        "title": "对角线法则的适用边界",
        "statement": ["对角线法则只适用于二阶和三阶行列式，四阶及以上一般不能使用。"],
        "conditions": ["阶数 $n\\ge4$。"],
        "conclusion": ["高阶行列式应使用递归展开、初等变换或其他性质化简。"],
        "derivation": ["高阶行列式的展开项数和符号规则远超对角线法则。"],
        "pitfalls": ["把三阶公式机械推广到四阶。"],
        "source": "课件 5，第 20-49 页"
      },
      {
        "id": "la-property-det-transpose",
        "type": "property",
        "label": "性质 1.6.8",
        "title": "行列式转置不变",
        "statement": ["对方阵 $A$，恒有 $|A^T|=|A|$。因此行与列的行列式性质完全对称。"],
        "conditions": ["$A$ 为方阵。"],
        "conclusion": ["关于行成立的性质都可以按同样的方式转到列上。"],
        "derivation": ["按第一行展开与按第一列展开的递归定义在结构上互为转置。"],
        "pitfalls": ["把矩阵转置和行列式符号的写法混淆。"],
        "source": "课件 6，第 2 页"
      },
      {
        "id": "la-property-det-row-swap",
        "type": "property",
        "label": "性质 1.6.9",
        "title": "互换两行或两列变号",
        "statement": ["互换行列式中的两行，行列式变号；互换两列也同样变号。"],
        "conditions": ["交换的是两整行或两整列。"],
        "conclusion": ["如果两行或两列完全相同，则交换后得到同一个行列式，同时由本性质又得到相反数，因此原行列式为 $0$。"],
        "derivation": ["交换一次改变排列的奇偶性，因此产生一个负号。"],
        "pitfalls": ["计算初等变换时漏记换行产生的负号。"],
        "source": "课件 6，第 2-3 页"
      },
      {
        "id": "la-property-det-row-scale",
        "type": "property",
        "label": "性质 1.6.10",
        "title": "单行或单列公因子可提出",
        "statement": ["行列式某一行（列）有公因子 $k$ 时，可以把 $k$ 提到行列式外；对 $n$ 阶方阵还有 $|kA|=k^n|A|$。"],
        "conditions": ["倍乘针对单独一行或单独一列。", "整体数乘 $kA$ 时，所有 $n$ 个行都同时乘 $k$。"],
        "conclusion": ["$|E(i(k))|=k$；整体数乘要提出 $n$ 个因子。"],
        "derivation": ["按该行展开时，每一项都含有共同因子 $k$。"],
        "pitfalls": ["把 $|kA|$ 误写成 $k|A|$。", "把某一行的公因子误认为可以同时对多行提取而只计一次。"],
        "source": "课件 6，第 6、9、24 页"
      },
      {
        "id": "la-property-det-row-additive",
        "type": "property",
        "label": "性质 1.6.11",
        "title": "单行或单列的加性",
        "statement": ["若某一行（列）的元素分别是两项之和，而其余行（列）保持不变，则行列式可拆成两个行列式之和。"],
        "conditions": ["只能同时替换一行或一列；其余行列必须原样保留。"],
        "conclusion": ["行列式对每一行、每一列分别具有线性性。"],
        "derivation": ["把该行中的每一项拆开后，再按展开式逐项分组。"],
        "pitfalls": ["把 $|A+B|$ 直接写成 $|A|+|B|$。", "拆分时改动了其他行或列。"],
        "source": "课件 6，第 7、10 页"
      },
      {
        "id": "la-property-det-row-addition",
        "type": "property",
        "label": "性质 1.6.12",
        "title": "倍加变换不改变行列式",
        "statement": ["把某一行加上另一行的 $k$ 倍，或把某一列加上另一列的 $k$ 倍，行列式不变。"],
        "conditions": ["倍加变换必须是“加上”而非“替换整个行”。"],
        "conclusion": ["倍加变换是化上三角行列式时最常用的工具。"],
        "derivation": ["按单行加性拆开后，其中一个行列式有两行成比例，因而为 $0$。"],
        "pitfalls": ["把倍加变换误记为会改变符号或将因子提出。"],
        "source": "课件 6，第 12-15 页"
      },
      {
        "id": "la-property-det-proportional-zero",
        "type": "property",
        "label": "性质 1.6.13",
        "title": "两行或两列成比例时行列式为零",
        "statement": ["若行列式中有两行或两列成比例，则 $D=0$。特别地，有两行或两列完全相同也有 $D=0$。"],
        "conditions": ["比例倍数可以是任意常数，包括 $0$。"],
        "conclusion": ["行列式为零是线性相关的重要信号。"],
        "derivation": ["先用倍乘性质把比例系数提出，再对两行相同的情形使用换行变号的推论。"],
        "pitfalls": ["只检查完全相同的行，忘记成比例也足够判定为零。"],
        "source": "课件 6，第 3、8 页"
      },
      {
        "id": "la-property-block-triangular-det",
        "type": "property",
        "label": "性质 1.6.14",
        "title": "分块三角行列式",
        "statement": ["若 $A,B$ 为方阵，则 $\\begin{vmatrix}A&C\\\\O&B\\end{vmatrix}=|A||B|$，下分块三角形式也成立；分块对角矩阵的行列式等于各对角块行列式之积。"],
        "conditions": ["$A,B$ 为方阵。", "零块位于另一侧。"],
        "conclusion": ["分块三角结构可把高阶行列式拆成两个低阶行列式的乘积。"],
        "derivation": ["用倍加变换把 $A$ 和 $B$ 分别化为上三角，分块结构使整体仍保持上三角。"],
        "pitfalls": ["把非方阵块放在对角位置。"],
        "source": "课件 6，第 16-18 页"
      },
      {
        "id": "la-property-det-multiplicative",
        "type": "property",
        "label": "性质 1.6.15",
        "title": "行列式乘法性质",
        "statement": ["对同阶方阵 $A,B$，有 $|AB|=|A||B|$；对同阶方阵 $A_1,\\ldots,A_s$，有 $|A_1\\cdots A_s|=|A_1|\\cdots|A_s|$。"],
        "conditions": ["$A,B$ 必须为同阶方阵。"],
        "conclusion": ["行列式把矩阵乘法转化为普通数的乘法。"],
        "derivation": ["把矩阵化为行最简形并用初等矩阵分解，再逐一使用初等矩阵的行列式性质。"],
        "pitfalls": ["对 $m\\times n$ 与 $n\\times m$ 矩阵直接使用该公式。", "误写成 $|A+B|=|A|+|B|$。"],
        "source": "课件 6，第 19-30 页"
      },
      {
        "id": "la-formula-elementary-matrix-det",
        "type": "formula",
        "label": "公式 1.6.16",
        "title": "初等矩阵的行列式",
        "statement": ["$|E(i,j)|=-1$，$|E(i(k))|=k$，$|E(i,j(k))|=1$。"],
        "conditions": ["$E(i(k))$ 中的 $k\\ne0$。"],
        "conclusion": ["初等矩阵的行列式恰好对应换行、倍乘、倍加三种行列式变换。"],
        "derivation": ["直接计算交换行列式、对角行列式和倍加行列式。"],
        "pitfalls": ["把倍加矩阵的行列式写成 $k$。"],
        "source": "课件 6，第 23-25 页"
      },
      {
        "id": "la-property-det-expand-any-row-column",
        "type": "property",
        "label": "性质 1.6.17",
        "title": "行列式可按任意行或任意列展开",
        "statement": ["对 $n\\ge2$ 的方阵 $A=(a_{ij})$，$|A|=\\sum_{j=1}^n a_{ij}A_{ij}$，也可写成 $|A|=\\sum_{i=1}^n a_{ij}A_{ij}$。"],
        "conditions": ["展开使用对应位置 $a_{ij}$ 的代数余子式 $A_{ij}$。"],
        "conclusion": ["展开行或列可任选，通常选择含 $0$ 较多的一行或一列。"],
        "derivation": ["由第一行展开和行列式性质把待展开行移动到第一行，同时跟踪符号。"],
        "pitfalls": ["使用某行元素时配错另一行的代数余子式。"],
        "source": "课件 6，第 4-5、32-33 页"
      },
      {
        "id": "la-property-cofactor-orthogonality",
        "type": "property",
        "label": "性质 1.6.18",
        "title": "异行或异列代数余子式展开为零",
        "statement": ["当 $i\\ne j$ 时，$\\sum_{k=1}^n a_{ik}A_{jk}=0$，且 $\\sum_{k=1}^n a_{ki}A_{kj}=0$。"],
        "conditions": ["元素的指标行与代数余子式的指标行不同，或列指标不同。"],
        "conclusion": ["同行或同列对应展开得到 $|A|$，异行或异列对应展开得到 $0$。"],
        "derivation": ["把第 $i$ 行替换成第 $j$ 行，所得行列式有两行相同，因此为 $0$，再按第 $j$ 行展开。"],
        "pitfalls": ["把异行展开误算为 $|A|$，忽略指标必须相同。"],
        "source": "课件 6，第 34-36 页"
      },
      {
        "id": "la-formula-adjugate-identity",
        "type": "formula",
        "label": "公式 1.6.19",
        "title": "代数余子式矩阵与行列式单位化",
        "statement": ["记 $C=(A_{ij})$ 为代数余子式矩阵，则 $AC^T=C^TA=|A|E$。"],
        "conditions": ["$A$ 为 $n$ 阶方阵。"],
        "conclusion": ["该式把行列式、余子式和矩阵乘法连接起来，也是伴随矩阵公式的直接来源。"],
        "derivation": ["矩阵乘法的 $(i,j)$ 元素是第 $i$ 行元素与第 $j$ 列元素对应代数余子式的乘积之和；$i=j$ 时为 $|A|$，$i\\ne j$ 时为 $0$。"],
        "pitfalls": ["忘记代数余子式矩阵需要转置后才按列与 $A$ 相乘。"],
        "source": "课件 6，第 37-39 页"
      },
      {
        "id": "la-method-det-row-reduction",
        "type": "method",
        "label": "方法 1.6.20",
        "title": "用初等变换化三角形计算行列式",
        "statement": ["用倍加变换造零，把高阶行列式化为上（下）三角行列式，再取主对角线元素乘积。"],
        "conditions": ["换行要记一个负号；某一行乘 $k$ 要记一个因子 $k$；倍加不改变行列式。"],
        "conclusion": ["四阶及以上行列式通常优先消除非对角元素，而不是直接展开。"],
        "derivation": ["倍加变换保持行列式不变，三角行列式等于主对角线元素之积。"],
        "pitfalls": ["把倍加变换误记为倍乘变换，导致多算因子。", "换行后忘记符号。"],
        "source": "课件 6，第 40-42 页"
      },
      {
        "id": "la-method-det-diagonal-x-off-a",
        "type": "method",
        "label": "方法 1.6.21",
        "title": "主对角线为 x、其余为 a 的 n 阶行列式",
        "statement": ["若 $D_n$ 的主对角线元素全为 $x$，其余元素全为 $a$，则 $D_n=[x+(n-1)a](x-a)^{n-1}$。"],
        "conditions": ["$n$ 阶方阵，且对角线外元素统一为 $a$。"],
        "conclusion": ["把各行都加到第一行可提出 $x+(n-1)a$，再用倍加变换化为三角形式。"],
        "derivation": ["先将第一行变成都等于 $x+(n-1)a$，再减去 $a$ 倍的第一行，得到三角形行列式。"],
        "pitfalls": ["把公式记成 $[x-(n-1)a](x+a)^{n-1}$ 或漏掉 $n-1$ 次幂。"],
        "source": "课件 6，第 43 页"
      },
      {
        "id": "la-formula-vandermonde",
        "type": "formula",
        "label": "公式 1.6.22",
        "title": "范德蒙行列式",
        "statement": ["$D_n=\\begin{vmatrix}1&1&\\cdots&1\\\\a_1&a_2&\\cdots&a_n\\\\\\vdots&\\vdots&&\\vdots\\\\a_1^{n-1}&a_2^{n-1}&\\cdots&a_n^{n-1}\\end{vmatrix}=\\prod_{1\\le i<j\\le n}(a_j-a_i)$。"],
        "conditions": ["按列取值 $a_1,\\ldots,a_n$ 构成范德蒙结构。"],
        "conclusion": ["当且仅当某些 $a_i$ 相等时，范德蒙行列式为 $0$。"],
        "derivation": ["低阶直接计算；高阶用逐列消元提取差因子，再递推到 $n-1$ 阶。"],
        "pitfalls": ["把因子顺序写成 $a_i-a_j$ 而不统一。"],
        "source": "课件 6，第 45、50-51 页"
      },
      {
        "id": "la-proof-vandermonde",
        "type": "proof",
        "label": "证明 1.6.23",
        "title": "范德蒙行列式的归纳证明",
        "statement": ["用数学归纳法证明 $D_n=\\prod_{1\\le i<j\\le n}(a_j-a_i)$。"],
        "conditions": ["先验证 $n=2$，再假设 $n-1$ 阶结论成立。"],
        "conclusion": ["从最后一列起逐列减去前一列的 $a_n$ 倍，可提出因子 $(a_1-a_n)\\cdots(a_{n-1}-a_n)$，余下部分对应 $D_{n-1}$。"],
        "derivation": ["对最后一行之前逐列做倍加变换，展开最后一列，得到符号与差因子的乘积，再使用归纳假设。"],
        "pitfalls": ["差因子的符号与列的排列顺序不一致。"],
        "source": "课件 6，第 46-51 页"
      },
      {
        "id": "la-pitfall-det-shape-and-linearity",
        "type": "pitfall",
        "label": "易错点 1.6.24",
        "title": "行列式乘法与加性的边界",
        "statement": ["$|AB|=|A||B|$ 的常用形式要求 $A,B$ 为同阶方阵；行列式对单行或单列是线性的，但一般没有 $|A+B|=|A|+|B|$。"],
        "conditions": ["先把矩阵形状和是否同阶写在题目旁边。"],
        "conclusion": ["不同形状的矩阵乘积需要通过补零块等方式转化为同阶方阵问题，不能直接套用乘法公式。"],
        "derivation": ["行列式的多线性是逐行或逐列线性，不是对整个矩阵加法线性。"],
        "pitfalls": ["把 $|A+B|$ 拆成 $|A|+|B|$。", "对 $2\\times3$ 与 $3\\times2$ 矩阵直接说 $|AB|=|A||B|$。"],
        "source": "课件 6，第 19-30 页"
      },
      {
        "id": "la-pitfall-det-operation-sign-factor",
        "type": "pitfall",
        "label": "易错点 1.6.25",
        "title": "行列式初等变换的符号与倍率跟踪",
        "statement": ["换行产生符号，倍乘产生因子，倍加不改变行列式；每一步都要区分这三类操作。"],
        "conditions": ["进行行列式计算时逐行记录操作。"],
        "conclusion": ["先跟踪符号和因子，再计算三角形行列式，可以减少最后一步的错误。"],
        "derivation": ["三类操作分别对应 $|E(i,j)|=-1$、$|E(i(k))|=k$、$|E(i,j(k))|=1$。"],
        "pitfalls": ["把倍加变换当成换行或倍乘。", "计算完三角形行列式后忘记补回符号和倍数。"],
        "source": "课件 6，第 12-15、23-25、40-42 页"
      },
      {
        "id": "la-def-adjugate-matrix",
        "type": "definition",
        "label": "定义 1.6.26",
        "title": "伴随矩阵",
        "statement": ["设 $A=(a_{ij})_{n\\times n}$，$n\\ge2$，$A_{ij}$ 为 $a_{ij}$ 的代数余子式，则 $A^*=\\begin{pmatrix}A_{11}&A_{21}&\\cdots&A_{n1}\\\\A_{12}&A_{22}&\\cdots&A_{n2}\\\\\\vdots&\\vdots&&\\vdots\\\\A_{1n}&A_{2n}&\\cdots&A_{nn}\\end{pmatrix}$ 称为 $A$ 的伴随矩阵。"],
        "conditions": ["$A$ 为 $n$ 阶方阵，且 $n\\ge2$。"],
        "conclusion": ["伴随矩阵不是代数余子式矩阵本身，而是其转置。"],
        "derivation": ["第 $i$ 行第 $j$ 列位置放的是 $A_{ji}$，因此整体相当于把 $A_{ij}$ 按列排列。"],
        "pitfalls": ["忘记伴随矩阵需要转置。", "把代数余子式 $A_{ij}$ 与余子式 $M_{ij}$ 混同。"],
        "source": "课件 7，第 10-18 页"
      },
      {
        "id": "la-theorem-adjugate-identity",
        "type": "property",
        "label": "定理 1.6.27",
        "title": "伴随矩阵恒等式",
        "statement": ["对 $n$ 阶矩阵 $A$（$n\\ge2$），有 $AA^*=A^*A=|A|E$。"],
        "conditions": ["$A$ 为 $n$ 阶方阵，$n\\ge2$。"],
        "conclusion": ["该式把伴随矩阵、行列式和单位矩阵联系起来。", "当 $|A|\\ne0$ 时，可由它直接得到逆矩阵公式。"],
        "derivation": ["矩阵乘积的 $(i,j)$ 元是 $A$ 的第 $i$ 行与代数余子式第 $j$ 列的内积；同指标时为 $|A|$，异指标时为 $0$。"],
        "pitfalls": ["把 $A^*$ 误认为逐元素取逆或取伴随。"],
        "source": "课件 7，第 7-13 页"
      },
      {
        "id": "la-theorem-invertible-determinant",
        "type": "property",
        "label": "定理 1.6.28",
        "title": "方阵可逆的行列式判据",
        "statement": ["设 $A$ 为 $n$ 阶方阵，则 $A$ 可逆当且仅当 $|A|\\ne0$。若 $n\\ge2$ 且 $|A|\\ne0$，则 $A^{-1}=\\frac1{|A|}A^*$。"],
        "conditions": ["$A$ 为方阵。"],
        "conclusion": ["非奇异矩阵就是可逆矩阵。", "伴随矩阵提供了公式化求逆方法。"],
        "derivation": ["若 $AB=E$，则 $|A||B|=1$，故 $|A|\\ne0$；反过来由 $AA^*=|A|E$ 两边除以 $|A|$。"],
        "pitfalls": ["行列式非零是方阵可逆的判据，非方阵不能直接套用。"],
        "source": "课件 7，第 13、25-30 页"
      },
      {
        "id": "la-corollary-one-sided-inverse",
        "type": "property",
        "label": "推论 1.6.29",
        "title": "单侧矩阵逆与方阵条件",
        "statement": ["若 $A$ 为 $n$ 阶方阵，且存在 $B$ 使 $AB=E$ 或 $BA=E$，则 $A$ 可逆且 $A^{-1}=B$。"],
        "conditions": ["$A$ 必须是方阵。", "等式中的单位矩阵阶数必须匹配。"],
        "conclusion": ["对同阶方阵，单侧逆已经足以推出双侧逆。"],
        "derivation": ["由 $AB=E$ 得 $|A||B|=1$，故 $|A|\\ne0$，再左乘 $A^{-1}$ 得 $B=A^{-1}$。"],
        "pitfalls": ["对非方阵，$AB=E$ 不能推出 $A$ 可逆；例如宽矩阵可能有右逆但不存在逆矩阵。"],
        "source": "课件 7，第 25-27 页"
      },
      {
        "id": "la-method-abstract-inverse",
        "type": "method",
        "label": "方法 1.6.30",
        "title": "用多项式恒等变形判断抽象矩阵可逆",
        "statement": ["若已知矩阵多项式恒等式，可把它整理成 $(A+\\alpha E)B=E$ 或 $B(A+\\alpha E)=E$ 的形式，从而直接得到逆矩阵。"],
        "conditions": ["矩阵恒等式在乘法有意义的前提下成立。"],
        "conclusion": ["抽象矩阵不必显式计算行列式，也可判断可逆性并求逆。"],
        "derivation": ["所有项移到一侧，提取目标矩阵因子，再检查剩余因子是否与单位矩阵相等。"],
        "pitfalls": ["提取因子时不能交换因子顺序。"],
        "source": "课件 7，第 31-34 页"
      },
      {
        "id": "la-formula-block-upper-inverse",
        "type": "formula",
        "label": "公式 1.6.31",
        "title": "分块上三角矩阵的逆",
        "statement": ["若 $A,B$ 可逆，则 $\\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\\\O&B^{-1}\\end{pmatrix}$。"],
        "conditions": ["$A,B$ 分别为可逆方阵。", "分块维数使乘积有意义。"],
        "conclusion": ["分块三角结构可把大矩阵求逆化为两个小矩阵求逆。"],
        "derivation": ["设逆矩阵为分块形式，利用分块乘法与 $\\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}$ 相乘等于单位矩阵，逐个解出子块。"],
        "pitfalls": ["右上块不是 $C^{-1}$，而是 $-A^{-1}CB^{-1}$。", "子块乘法顺序不能随意交换。"],
        "source": "课件 7，第 35-37 页"
      },
      {
        "id": "la-formula-cramer",
        "type": "formula",
        "label": "定理 1.6.32",
        "title": "克拉默法则",
        "statement": ["若线性方程组 $Ax=b$ 的系数矩阵 $A$ 为 $n$ 阶方阵且 $D=|A|\\ne0$，则方程组有唯一解 $x_j=\\frac{D_j}{D}$，其中 $D_j$ 是把 $A$ 的第 $j$ 列换成 $b$ 后得到的行列式。"],
        "conditions": ["方程个数等于未知数个数。", "$D=|A|\\ne0$。"],
        "conclusion": ["可用行列式表示唯一解。", "若 $D\\ne0$，对应的齐次方程组 $Ax=0$ 只有零解。"],
        "derivation": ["由 $x=A^{-1}b=\\frac1D A^*b$ 展开第 $j$ 个分量，得到 $D_j/D$。"],
        "pitfalls": ["克拉默法则只直接给出唯一解情形，不处理 $D=0$ 的完整解集。", "替换的是第 $j$ 列，不是第 $j$ 行。"],
        "source": "课件 7，第 39-44 页"
      },
      {
        "id": "la-def-k-minor",
        "type": "definition",
        "label": "定义 1.7.1",
        "title": "$k$ 阶子式与矩阵的秩",
        "statement": ["在 $m\\times n$ 矩阵 $A$ 中任取 $k$ 行与 $k$ 列，交叉位置元素按原顺序构成 $k$ 阶行列式，称为 $A$ 的 $k$ 阶子式。若存在非零 $r$ 阶子式，但所有 $r+1$ 阶子式都为零，则称 $A$ 的秩为 $r$，记作 $r(A)=r$。"],
        "conditions": ["$1\\le k\\le\\min\\{m,n\\}$。"],
        "conclusion": ["零矩阵的秩规定为 $0$。", "$0\\le r(A)\\le\\min\\{m,n\\}$。"],
        "derivation": ["若 $r$ 阶子式非零，则更高阶子式展开后只由更低阶子式组合，因此一旦所有 $r+1$ 阶子式为零，更高阶也不可能非零。"],
        "pitfalls": ["秩不是非零元素的个数。", "必须用子式的非零最高阶数来定义。"],
        "source": "课件 8，第 1-13 页"
      },
      {
        "id": "la-property-rank-basic",
        "type": "property",
        "label": "性质 1.7.2",
        "title": "矩阵秩的基本结论",
        "statement": ["$r(O)=0$；$r(A)=0\\Leftrightarrow A=O$；$r(A_{m\\times n})\\le\\min\\{m,n\\}$；$r(A)=n$（$A$ 为 $n$ 阶方阵）$\\Leftrightarrow |A|\\ne0\\Leftrightarrow A$ 可逆。"],
        "conditions": ["讨论方阵满秩时需先确认矩阵为方阵。"],
        "conclusion": ["满秩矩阵与非奇异矩阵、可逆矩阵是同一类方阵。"],
        "derivation": ["由秩的子式定义和行列式定义直接得到。"],
        "pitfalls": ["非方阵也可以有“行满秩”或“列满秩”，但不能称为可逆矩阵。"],
        "source": "课件 8，第 9-10 页"
      },
      {
        "id": "la-property-rank-transpose",
        "type": "property",
        "label": "引理 1.7.3",
        "title": "矩阵转置不改变秩",
        "statement": ["$r(A^T)=r(A)$。"],
        "conditions": ["讨论任意 $m\\times n$ 矩阵。"],
        "conclusion": ["矩阵的行秩与列秩相等。"],
        "derivation": ["$A$ 的 $k$ 阶子式转置后成为 $A^T$ 的同阶子式，行列式值不变。"],
        "pitfalls": ["不要把 $r(A^T)=r(A)$ 与 $A^T=A$ 混淆。"],
        "source": "课件 8，第 15 页"
      },
      {
        "id": "la-theorem-rank-elementary",
        "type": "property",
        "label": "定理 1.7.4",
        "title": "初等变换不改变矩阵的秩",
        "statement": ["对矩阵进行有限次初等行变换或初等列变换，矩阵的秩保持不变。"],
        "conditions": ["只进行三类标准初等变换。"],
        "conclusion": ["行阶梯形矩阵的秩等于非零行数。"],
        "derivation": ["每类初等变换都对应乘以可逆初等矩阵；可逆矩阵乘法不改变秩。"],
        "pitfalls": ["用初等变换求秩时，不需要像求行列式那样跟踪换行符号或倍乘因子。"],
        "source": "课件 8，第 16-22 页"
      },
      {
        "id": "la-corollary-rank-equivalent",
        "type": "property",
        "label": "推论 1.7.5",
        "title": "矩阵等价与可逆乘法的秩不变性",
        "statement": ["若 $A$ 与 $B$ 等价，则 $r(A)=r(B)$。若 $P,Q$ 分别为可逆矩阵，则 $r(A)=r(PA)=r(AQ)=r(PAQ)$。"],
        "conditions": ["$P,Q$ 的阶数分别与 $A$ 的行数、列数匹配，并且 $P,Q$ 可逆。"],
        "conclusion": ["初等变换和可逆矩阵乘法都保持秩。"],
        "derivation": ["可逆矩阵可写成初等矩阵的乘积，而初等变换不改变秩。"],
        "pitfalls": ["只乘一侧可逆矩阵已经保秩，不必同时左乘和右乘。"],
        "source": "课件 8，第 19-22 页"
      },
      {
        "id": "la-method-rank-echelon",
        "type": "method",
        "label": "方法 1.7.6",
        "title": "用行阶梯形求矩阵的秩",
        "statement": ["用初等行变换把矩阵化为行阶梯形，矩阵的秩等于阶梯形中非零行的个数；若需等价标准形，再继续化为只含单位块和零块的形式。"],
        "conditions": ["只需行变换即可确定秩。"],
        "conclusion": ["避免按定义枚举所有子式，适合高阶或大型矩阵。"],
        "derivation": ["初等变换保秩，而阶梯形矩阵的秩显然等于非零行数。"],
        "pitfalls": ["把非零首元个数与普通非零元素个数混淆。"],
        "source": "课件 8，第 16-22 页"
      },
      {
        "id": "la-method-rank-parameter",
        "type": "method",
        "label": "方法 1.7.7",
        "title": "含参数矩阵的秩讨论",
        "statement": ["先计算行列式或化简矩阵，找出使某些子式为 $0$ 的参数临界值；再对每个临界值分别回代，求对应的最高非零子式阶数。"],
        "conditions": ["矩阵元素含参数，且需要按参数分类讨论。"],
        "conclusion": ["主行或主元消失时必须回代，不能直接沿用一般情形的结论。"],
        "derivation": ["秩是最高非零子式的阶数；参数使某个子式为零后，需要重新寻找其他非零子式。"],
        "pitfalls": ["只解出 $|A|=0$ 的参数值，却没有分别计算各参数值下的秩。"],
        "source": "课件 8，第 12-13、23 页"
      },
      {
        "id": "la-property-rank-horizontal-block",
        "type": "property",
        "label": "命题 1.7.8",
        "title": "横向分块矩阵的秩上下界",
        "statement": ["设 $A$ 为 $s\\times m$ 矩阵，$B$ 为 $s\\times n$ 矩阵，则 $\\max\\{r(A),r(B)\\}\\le r(A,B)\\le r(A)+r(B)$。"],
        "conditions": ["$A$ 与 $B$ 必须具有相同的行数。", "$(A,B)$ 表示按列方向横向拼接。"],
        "conclusion": ["单独矩阵的秩不超过拼接矩阵的秩。", "拼接矩阵的秩不超过两个矩阵秩之和。"],
        "derivation": ["下界：$A$、$B$ 的子式都是 $(A,B)$ 的子式。", "上界：用可逆矩阵分别把 $A^T$、$B^T$ 化为行阶梯形，再比较非零行数。"],
        "pitfalls": ["把一般不等式误当成等式。", "忽略 $A,B$ 必须同行的维数条件。"],
        "source": "课件 9，第 2、4 页"
      },
      {
        "id": "la-property-rank-sum-bound",
        "type": "property",
        "label": "命题 1.7.9",
        "title": "矩阵和的秩上界",
        "statement": ["设 $A,B$ 均为 $m\\times n$ 矩阵，则 $r(A+B)\\le r(A)+r(B)$。"],
        "conditions": ["$A,B$ 必须同型。"],
        "conclusion": ["和的秩不超过两个矩阵秩的和。"],
        "derivation": ["对分块矩阵 $(A+B,B)$ 作列倍加 $c_j\\leftarrow c_j-c_{n+j}$，可化为 $(A,B)$。", "因此 $r(A+B)\\le r(A+B,B)=r(A,B)\\le r(A)+r(B)$。"],
        "pitfalls": ["误写成 $r(A+B)=r(A)+r(B)$。", "忽略列空间可能相互抵消。"],
        "source": "课件 9，第 5 页"
      },
      {
        "id": "la-property-rank-product-upper",
        "type": "property",
        "label": "命题 1.7.10",
        "title": "矩阵乘积的秩上界",
        "statement": ["设 $A$ 为 $s\\times n$ 矩阵，$B$ 为 $n\\times t$ 矩阵，则 $r(AB)\\le\\min\\{r(A),r(B)\\}$。"],
        "conditions": ["乘积 $AB$ 必须有意义，即 $A$ 的列数等于 $B$ 的行数。"],
        "conclusion": ["乘积的秩同时不超过左右因子的秩。"],
        "derivation": ["设 $r(A)=r$ 并利用等价标准形，得到 $r(AB)\\le r(A)$。", "再对 $r(AB)=r(B^TA^T)$ 使用同一上界，得到 $r(AB)\\le r(B)$。"],
        "pitfalls": ["把双侧上界当作乘积秩的完整刻画。", "遗漏 Sylvester 不等式给出的下界。"],
        "source": "课件 9，第 6 页"
      },
      {
        "id": "la-theorem-rank-one-outer-product",
        "type": "theorem",
        "label": "例 1.7.11",
        "title": "秩 1 矩阵的外积判据",
        "statement": ["设 $A$ 为 $s\\times n$ 矩阵，则 $r(A)=1$ 当且仅当存在非零 $s$ 维列向量 $\\xi$ 与非零 $n$ 维行向量 $\\eta$，使 $A=\\xi\\eta$。"],
        "conditions": ["两个向量都必须非零。", "列向量与行向量的维数必须分别匹配 $A$ 的行数和列数。"],
        "conclusion": ["秩 1 矩阵恰为非零列向量与非零行向量的外积。"],
        "derivation": ["必要性：由 $r(A)=1$ 的等价标准形，取出变换矩阵的第一列与第一行。", "充分性：$r(\\xi\\eta)\\le r(\\xi)=1$，且非零外积含非零元素，所以秩至少为 $1$。"],
        "pitfalls": ["只说 $A=\\xi\\eta$，漏掉两个向量均非零。", "行列向量方向写反，导致乘积维数不匹配。"],
        "source": "课件 9，第 7-8 页"
      },
      {
        "id": "la-theorem-sylvester-rank",
        "type": "theorem",
        "label": "命题 1.7.12",
        "title": "Sylvester 秩不等式",
        "statement": ["设 $A$ 为 $s\\times n$ 矩阵，$B$ 为 $n\\times t$ 矩阵，则 $r(AB)\\ge r(A)+r(B)-n$。"],
        "conditions": ["$A$ 的列数等于 $B$ 的行数，即中间维数为 $n$。"],
        "conclusion": ["乘积秩存在由内部维数决定的非负下界。", "等价形式为 $r(A)+r(B)\\le r(AB)+n$。"],
        "derivation": ["构造恒等式 $\\begin{pmatrix}E_s&-A\\\\O&E_n\\end{pmatrix}\\begin{pmatrix}A&O\\\\E_n&B\\end{pmatrix}\\begin{pmatrix}E_n&B\\\\O&-E_t\\end{pmatrix}=\\begin{pmatrix}O&AB\\\\E_n&O\\end{pmatrix}$。", "左右因子可逆，故中间矩阵与右端矩阵等秩；两者秩分别为 $r(A)+r(B)$ 与 $r(AB)+n$。"],
        "pitfalls": ["把公式中的 $n$ 误记作 $A$ 或 $B$ 的秩。", "漏写乘积中间的维数条件。"],
        "source": "课件 9，第 9 页"
      },
      {
        "id": "la-corollary-rank-zero-product",
        "type": "corollary",
        "label": "推论 1.7.13",
        "title": "零积的秩推论",
        "statement": ["设 $A$ 为 $s\\times n$ 矩阵，$B$ 为 $n\\times t$ 矩阵。若 $AB=O$，则 $r(A)+r(B)\\le n$。"],
        "conditions": ["$AB$ 必须为零矩阵，且中间维数为 $n$。"],
        "conclusion": ["左、右因子不能同时拥有过大的秩。"],
        "derivation": ["由 $AB=O$ 得 $r(AB)=0$，代入 Sylvester 不等式 $0\\ge r(A)+r(B)-n$。"],
        "pitfalls": ["把结论反向使用，误认为 $r(A)+r(B)\\le n$ 一定推出 $AB=O$。"],
        "source": "课件 9，第 9 页"
      },
      {
        "id": "la-property-idempotent-rank",
        "type": "property",
        "label": "例 1.7.14",
        "title": "幂等矩阵的秩分解",
        "statement": ["设 $A$ 为 $n$ 阶方阵且 $A^2=A$，则 $r(A)+r(E-A)=n$。"],
        "conditions": ["$A$ 必须是方阵，并满足幂等恒等式 $A^2=A$。"],
        "conclusion": ["幂等矩阵与补矩阵 $E-A$ 的秩之和恰为阶数。"],
        "derivation": ["下界：$A+(E-A)=E$，所以 $n=r(E)\\le r(A)+r(E-A)$。", "上界：$A(E-A)=O$，由零积推论得 $r(A)+r(E-A)\\le n$。"],
        "pitfalls": ["只证一个方向，未完成上下界夹逼。", "把 $A(E-A)=O$ 误展开成错误的交换次序。"],
        "source": "课件 9，第 10 页"
      },
      {
        "id": "la-method-block-rank-transform",
        "type": "method",
        "label": "方法 1.7.15",
        "title": "用可逆分块变换证明秩不等式",
        "statement": ["构造左右可逆分块矩阵，把目标矩阵化为分块三角矩阵或含单位块的反对角矩阵；利用可逆乘法保秩，比较变换前后的秩。"],
        "conditions": ["左右因子必须可逆。", "分块维数必须使所有乘积有意义。"],
        "conclusion": ["可把抽象的秩不等式转化为易求秩的分块标准形。"],
        "derivation": ["先设计消元矩阵制造零块。", "再把结果整理成三角块或反对角块，并分别计算两边秩。"],
        "pitfalls": ["只写分块恒等式，不说明左右因子可逆。", "分块乘法顺序或维数写错。"],
        "source": "课件 9，第 4、9 页"
      },
      {
        "id": "la-pitfall-rank-bound-direction",
        "type": "pitfall",
        "label": "易错点 1.7.16",
        "title": "区分矩阵秩的上界与下界",
        "statement": ["$r(AB)\\le\\min\\{r(A),r(B)\\}$ 是上界；Sylvester 不等式 $r(AB)\\ge r(A)+r(B)-n$ 是下界。两者通常不能合并成等式。"],
        "conditions": ["所有不等式均需满足相应的矩阵维数条件。"],
        "conclusion": ["估计乘积秩时必须同时检查上界与可用的下界。"],
        "derivation": ["上界来自乘积因子或等价标准形。", "下界来自内部维数 $n$，与左右因子的秩和相关。"],
        "pitfalls": ["把不等号方向写反。", "把 $r(A)+r(B)\\le n$ 与 $AB=O$ 当成等价命题。"],
        "source": "课件 9，第 6、9 页"
      }
    ]
  },
  {
    "number": "2.1",
    "title": "n 维向量及其运算",
    "lead": "把矩阵的一行或一列单独取出来研究，建立向量的语言与线性运算规则，作为向量组的准备。",
    "map": [
      "n 维向量",
      "加法与数乘",
      "零向量与负向量",
      "运算性质"
    ],
    "entries": [
      {
        "id": "la-def-nvector",
        "type": "definition",
        "label": "向量 2.1.1",
        "title": "n 维向量的定义",
        "statement": [
          "由 $n$ 个数 $a_1,a_2,\\dots,a_n$ 组成的有序数组称为 $n$ 维向量。写成一行 $(a_1,a_2,\\dots,a_n)$ 时为 $n$ 维行向量；写成一列时为 $n$ 维列向量。"
        ],
        "conditions": [
          "$n$ 个数必须按固定次序排列。",
          "行向量是 $1\\times n$ 矩阵，列向量是 $n\\times 1$ 矩阵。"
        ],
        "conclusion": [
          "$a_i$ 称为第 $i$ 个分量。",
          "行向量与列向量统称为 $n$ 维向量，简称向量。"
        ],
        "derivation": [
          "向量的本质是有序数组，几何上可看作点的坐标；行、列两种写法只是同一数组的不同表现形式。",
          "因为行向量、列向量分别是行矩阵、列矩阵，所以矩阵的线性运算规则可以整体照搬到向量上。"
        ],
        "pitfalls": [
          "把 $(1,2)$ 与 $(2,1)$ 当成同一个向量，忽略分量次序。",
          "把行向量与列向量直接相加，二者不同型。"
        ],
        "source": "课件 11，第 3-5 页"
      },
      {
        "id": "la-formula-vector-add-scalar",
        "type": "formula",
        "label": "公式 2.1.2",
        "title": "向量的加法与数乘",
        "statement": [
          "设 $\\alpha=(a_1,\\dots,a_n)$，$\\beta=(b_1,\\dots,b_n)$，$k$ 为数，则 $\\alpha+\\beta=(a_1+b_1,\\dots,a_n+b_n)$，$k\\alpha=(ka_1,\\dots,ka_n)$。"
        ],
        "conditions": [
          "加法要求两个向量维数相同。",
          "数乘对每个分量同时进行。"
        ],
        "conclusion": [
          "向量的加法与数乘和矩阵的加法、数乘完全一致，都是逐分量运算。"
        ],
        "derivation": [
          "把行向量看作 $1\\times n$ 矩阵、列向量看作 $n\\times 1$ 矩阵，矩阵加法与数乘的定义直接给出上述分量形式。"
        ],
        "pitfalls": [
          "维数不同的向量相加。",
          "只对第一个分量作数乘。",
          "把向量加法与内积混淆，误把结果写成一个数。"
        ],
        "source": "课件 11，第 6-7 页"
      },
      {
        "id": "la-def-zero-negative-vector",
        "type": "definition",
        "label": "向量 2.1.3",
        "title": "零向量、负向量与向量减法",
        "statement": [
          "各分量全为 $0$ 的向量称为零向量，记作 $0$；$\\alpha=(a_1,\\dots,a_n)$ 的负向量为 $-\\alpha=(-a_1,\\dots,-a_n)$，且 $-\\alpha=(-1)\\alpha$。"
        ],
        "conditions": [
          "零向量与负向量都必须与 $\\alpha$ 同维。"
        ],
        "conclusion": [
          "向量减法定义为 $\\alpha-\\beta=\\alpha+(-\\beta)$。",
          "数 $0$ 与零向量是不同对象，记号相同但含义由上下文决定。"
        ],
        "derivation": [
          "由数乘定义取 $k=-1$ 即得负向量；减法不是新运算，只是加上负向量。"
        ],
        "pitfalls": [
          "把数 $0$ 与零向量 $0$ 混为一谈。",
          "认为不同维数的零向量相等。"
        ],
        "source": "课件 11，第 8 页"
      },
      {
        "id": "la-property-vector-linear-ops",
        "type": "property",
        "label": "性质 2.1.4",
        "title": "n 维向量线性运算的九条性质",
        "statement": [
          "设 $\\alpha,\\beta,\\gamma,0$ 均为 $n$ 维向量，$k,l$ 为数，则 (1) $\\alpha+\\beta=\\beta+\\alpha$；(2) $(\\alpha+\\beta)+\\gamma=\\alpha+(\\beta+\\gamma)$；(3) $\\alpha+0=\\alpha$；(4) $\\alpha+(-\\alpha)=0$；(5) $1\\alpha=\\alpha$；(6) $k(l\\alpha)=(kl)\\alpha$；(7) $(k+l)\\alpha=k\\alpha+l\\alpha$；(8) $k(\\alpha+\\beta)=k\\alpha+k\\beta$；(9) $k\\alpha=0$ 当且仅当 $k=0$ 或 $\\alpha=0$。"
        ],
        "conditions": [
          "所有向量必须同维。"
        ],
        "conclusion": [
          "这九条性质与矩阵线性运算性质逐条对应，是后续所有向量推导的代数依据。",
          "它们说明 $n$ 维向量全体在上述运算下构成一个线性空间。"
        ],
        "derivation": [
          "逐分量使用实数的交换律、结合律和分配律即可验证 (1) 至 (8)。",
          "第 (9) 条：若 $k\\alpha=0$ 且 $k\\neq0$，则每个分量 $ka_i=0$，得 $a_i=0$，即 $\\alpha=0$。"
        ],
        "pitfalls": [
          "漏掉第 (9) 条的反向：$k=0$ 与 $\\alpha=0$ 都能推出 $k\\alpha=0$，但只有 $k\\ne0$ 时才由 $k\\alpha=0$ 推出 $\\alpha=0$。"
        ],
        "source": "课件 11，第 9-10 页"
      }
    ]
  },
  {
    "number": "2.2",
    "title": "向量组的线性表示与秩",
    "lead": "把若干向量作为一个整体研究：线性组合、线性表示、等价关系与向量组的秩。线性相关性留待下一次课。",
    "map": [
      "向量组",
      "线性组合",
      "线性表示",
      "等价关系",
      "向量组的秩"
    ],
    "entries": [
      {
        "id": "la-def-vector-group",
        "type": "definition",
        "label": "向量组 2.2.1",
        "title": "向量组与基本单位向量组",
        "statement": [
          "若干个同维向量 $\\alpha_1,\\alpha_2,\\dots,\\alpha_s$ 组成一个向量组；$e_1=(1,0,\\dots,0)$，$e_2=(0,1,\\dots,0)$，$\\dots$，$e_n=(0,\\dots,0,1)$ 称为 $n$ 维基本单位向量组。"
        ],
        "conditions": [
          "同一向量组内的向量必须维数相同。"
        ],
        "conclusion": [
          "基本单位向量组恰有 $n$ 个向量，按行排成矩阵或按列排成矩阵都得到单位矩阵 $E_n$。"
        ],
        "derivation": [
          "向量组只是把若干向量作为一个整体讨论，不引入新的运算。",
          "$e_1,\\dots,e_n$ 的分量结构使它们按任何方式排成分块矩阵都是 $E_n$。"
        ],
        "pitfalls": [
          "把向量组内向量个数误记为 $n$，向量个数一般记作 $s$。"
        ],
        "source": "课件 11，第 12 页"
      },
      {
        "id": "la-def-vector-group-block",
        "type": "definition",
        "label": "向量组 2.2.2",
        "title": "向量组与分块矩阵（行向量组、列向量组）",
        "statement": [
          "若 $\\alpha_1,\\dots,\\alpha_s$ 为 $n$ 维行向量，以它们为行排成 $s\\times n$ 矩阵 $A$，则称它们为 $A$ 的行向量组；若为 $n$ 维列向量，令 $A=(\\alpha_1,\\dots,\\alpha_s)$ 为 $n\\times s$ 矩阵，则称它们为 $A$ 的列向量组。"
        ],
        "conditions": [
          "行向量组按行排成 $s\\times n$ 矩阵。",
          "列向量组按列排成 $n\\times s$ 矩阵。"
        ],
        "conclusion": [
          "同一个向量组可以按行或按列写成矩阵，对应矩阵互为转置，秩相同。"
        ],
        "derivation": [
          "分块矩阵按行分块，每一块是一个行向量；按列分块，每一块是一个列向量。"
        ],
        "pitfalls": [
          "把行向量组对应的矩阵形状写成 $n\\times s$。",
          "在讨论线性表示时混淆 $B=KA$（行）与 $B=AK$（列）。"
        ],
        "source": "课件 11，第 13-14 页"
      },
      {
        "id": "la-def-linear-combination",
        "type": "definition",
        "label": "向量组 2.2.3",
        "title": "线性组合与组合系数",
        "statement": [
          "设 $\\alpha_1,\\dots,\\alpha_s$ 为同维向量组，$k_1,\\dots,k_s$ 为数，则称 $k_1\\alpha_1+k_2\\alpha_2+\\dots+k_s\\alpha_s$ 为该向量组的一个线性组合，$k_1,\\dots,k_s$ 称为组合系数。"
        ],
        "conditions": [
          "向量组内向量同维，组合系数可以是任意数。"
        ],
        "conclusion": [
          "线性组合的全体构成该向量组张成的集合（生成子空间）。"
        ],
        "derivation": [
          "线性组合只是加法与数乘的反复使用，没有引入新运算。"
        ],
        "pitfalls": [
          "把线性组合与内积混淆。",
          "忽略组合系数可以全为 $0$，此时线性组合是零向量。"
        ],
        "source": "课件 11，第 15-17 页"
      },
      {
        "id": "la-formula-combination-matrix",
        "type": "formula",
        "label": "公式 2.2.4",
        "title": "线性组合的矩阵写法",
        "statement": [
          "行向量情形：$k_1\\alpha_1+\\dots+k_s\\alpha_s=(k_1,\\dots,k_s)\\begin{pmatrix}\\alpha_1\\\\\\vdots\\\\\\alpha_s\\end{pmatrix}$；列向量情形：$k_1\\alpha_1+\\dots+k_s\\alpha_s=(\\alpha_1,\\dots,\\alpha_s)\\begin{pmatrix}k_1\\\\\\vdots\\\\k_s\\end{pmatrix}$。"
        ],
        "conditions": [
          "行向量情形系数行写在左边，列向量情形系数列写在右边。"
        ],
        "conclusion": [
          "线性组合可以统一写成矩阵乘积，这是把向量组问题翻译成矩阵问题的关键一步。"
        ],
        "derivation": [
          "由矩阵乘法定义，左边系数的第 $1$ 行与右侧矩阵的各列作内积，得到组合结果的各个分量，即 $\\sum_i k_i a_{ij}$。"
        ],
        "pitfalls": [
          "列向量情形把系数写成行向量，导致乘积维数不匹配。"
        ],
        "source": "课件 11，第 15-17 页"
      },
      {
        "id": "la-def-linear-representation",
        "type": "definition",
        "label": "向量组 2.2.5",
        "title": "线性表示",
        "statement": [
          "设 $\\alpha_1,\\dots,\\alpha_s,\\beta$ 为同维向量，若存在数 $k_1,\\dots,k_s$ 使 $\\beta=k_1\\alpha_1+\\dots+k_s\\alpha_s$，则称 $\\beta$ 能由向量组 $\\alpha_1,\\dots,\\alpha_s$ 线性表示。"
        ],
        "conditions": [
          "$\\beta$ 与向量组中每个向量必须同维。"
        ],
        "conclusion": [
          "线性表示就是“$\\beta$ 是某个线性组合”。",
          "零向量总能被任何向量组线性表示，取系数全为 $0$ 即可。"
        ],
        "derivation": [
          "把“存在系数”翻译成方程或矩阵乘法，就得到后面的判别方法。"
        ],
        "pitfalls": [
          "认为线性表示要求组合系数唯一，实际上系数可能不唯一。",
          "把“能被表示”与“系数全非零”混为一谈。"
        ],
        "source": "课件 11，第 18 页"
      },
      {
        "id": "la-property-unit-group",
        "type": "property",
        "label": "性质 2.2.6",
        "title": "任一 n 维向量都能由基本单位向量组线性表示",
        "statement": [
          "对任意 $\\alpha=(a_1,a_2,\\dots,a_n)$ 有 $\\alpha=a_1e_1+a_2e_2+\\dots+a_ne_n$，即任何 $n$ 维向量都能由基本单位向量组线性表示，且组合系数恰为它的各个分量。"
        ],
        "conditions": [
          "$e_1,\\dots,e_n$ 必须是 $n$ 维基本单位向量组。"
        ],
        "conclusion": [
          "基本单位向量组可以线性表示全部 $n$ 维向量。"
        ],
        "derivation": [
          "逐分量计算 $a_1e_1+\\dots+a_ne_n$，第 $i$ 个分量只由 $a_ie_i$ 贡献，等于 $a_i$。"
        ],
        "pitfalls": [
          "把系数的顺序与分量的顺序写错。",
          "只验证列向量情形，忘记行向量情形同样成立。"
        ],
        "source": "课件 11，第 19 页"
      },
      {
        "id": "la-theorem-representation-vs-solvable",
        "type": "theorem",
        "label": "定理 2.2.7",
        "title": "线性表示与线性方程组解的关系",
        "statement": [
          "设 $\\alpha_1,\\dots,\\alpha_s$ 为 $n$ 维列向量，$A=(\\alpha_1,\\dots,\\alpha_s)$，则 $\\beta$ 能由 $\\alpha_1,\\dots,\\alpha_s$ 线性表示当且仅当线性方程组 $Ax=\\beta$ 有解。"
        ],
        "conditions": [
          "必须是列向量组，$A$ 为 $n\\times s$ 矩阵。"
        ],
        "conclusion": [
          "向量组的线性表示问题与线性方程组解的问题完全等价。"
        ],
        "derivation": [
          "$x_1\\alpha_1+\\dots+x_s\\alpha_s=(\\alpha_1,\\dots,\\alpha_s)\\begin{pmatrix}x_1\\\\\\vdots\\\\x_s\\end{pmatrix}=Ax$，故 $\\beta$ 能被表示等价于 $Ax=\\beta$ 有解。"
        ],
        "pitfalls": [
          "行向量情形不能直接写成 $Ax=\\beta$，需转置或改用 $xA=\\beta$。",
          "额外要求解唯一，线性表示只要求有解。"
        ],
        "source": "课件 11，第 20 页"
      },
      {
        "id": "la-def-group-representation",
        "type": "definition",
        "label": "向量组 2.2.8",
        "title": "向量组之间的线性表示",
        "statement": [
          "给定两个同维向量组 I: $\\alpha_1,\\dots,\\alpha_r$ 与 II: $\\beta_1,\\dots,\\beta_s$。若 II 中每个向量都能由 I 中的向量线性表示，则称向量组 II 能由向量组 I 线性表示。"
        ],
        "conditions": [
          "两个向量组的向量必须同维。"
        ],
        "conclusion": [
          "“II 能由 I 表示”是逐向量验证，不要求 I 也能被 II 表示。"
        ],
        "derivation": [
          "每个 $\\beta_j$ 各有一组系数，全部合起来就是一个 $s\\times r$ 的系数矩阵。"
        ],
        "pitfalls": [
          "把单向表示当作等价。",
          "只验证 II 中的部分向量。"
        ],
        "source": "课件 11，第 22-25 页"
      },
      {
        "id": "la-theorem-row-group-ka",
        "type": "theorem",
        "label": "定理 2.2.9",
        "title": "行向量组：系数矩阵在左",
        "statement": [
          "设 I: $\\alpha_1,\\dots,\\alpha_r$ 与 II: $\\beta_1,\\dots,\\beta_s$ 为 $n$ 维行向量组，$A,B$ 分别以它们为行。则 II 能由 I 线性表示当且仅当存在 $s\\times r$ 矩阵 $K$ 使 $B=KA$。"
        ],
        "conditions": [
          "行向量组对应“系数矩阵在左”。",
          "$K$ 的行数等于 II 的向量个数 $s$，列数等于 I 的向量个数 $r$。"
        ],
        "conclusion": [
          "行向量组的线性表示等价于左乘系数矩阵。"
        ],
        "derivation": [
          "$\\beta_i=k_{i1}\\alpha_1+\\dots+k_{ir}\\alpha_r=(k_{i1},\\dots,k_{ir})A$：把 $s$ 个这样的等式按行堆叠即得 $B=KA$。"
        ],
        "pitfalls": [
          "把 $K$ 写成 $r\\times s$。",
          "写成 $B=AK$，那是列向量组的公式。"
        ],
        "source": "课件 11，第 26-34 页"
      },
      {
        "id": "la-theorem-column-group-ak",
        "type": "theorem",
        "label": "定理 2.2.10",
        "title": "列向量组：系数矩阵在右",
        "statement": [
          "设 I: $\\alpha_1,\\dots,\\alpha_r$ 与 II: $\\beta_1,\\dots,\\beta_s$ 为 $n$ 维列向量组，$A=(\\alpha_1,\\dots,\\alpha_r)$，$B=(\\beta_1,\\dots,\\beta_s)$。则 II 能由 I 线性表示当且仅当存在 $r\\times s$ 矩阵 $K$ 使 $B=AK$。"
        ],
        "conditions": [
          "列向量组对应“系数矩阵在右”。",
          "$K$ 的列数等于 II 的向量个数 $s$，行数等于 I 的向量个数 $r$。"
        ],
        "conclusion": [
          "列向量组的线性表示等价于右乘系数矩阵。"
        ],
        "derivation": [
          "$\\beta_j=k_{1j}\\alpha_1+\\dots+k_{rj}\\alpha_r=A\\begin{pmatrix}k_{1j}\\\\\\vdots\\\\k_{rj}\\end{pmatrix}$，把 $j=1,\\dots,s$ 按列拼起来得 $B=AK$。"
        ],
        "pitfalls": [
          "把 $K$ 写成 $s\\times r$。",
          "沿用行向量公式写成 $B=KA$。"
        ],
        "source": "课件 11，第 35-45 页"
      },
      {
        "id": "la-property-product-group-representation",
        "type": "property",
        "label": "性质 2.2.11",
        "title": "矩阵乘积与向量组的线性表示",
        "statement": [
          "设 $C_{m\\times n}=A_{m\\times s}B_{s\\times n}$，则 $C$ 的行向量组能由 $B$ 的行向量组线性表示，系数矩阵为 $A$；$C$ 的列向量组能由 $A$ 的列向量组线性表示，系数矩阵为 $B$。"
        ],
        "conditions": [
          "$A$ 的列数等于 $B$ 的行数，乘积才有意义。"
        ],
        "conclusion": [
          "矩阵乘法可以读作“行向量组的线性表示”或“列向量组的线性表示”。",
          "于是 $r(C)\\le r(B)$ 与 $r(C)\\le r(A)$，即 $r(AB)\\le\\min\\{r(A),r(B)\\}$。"
        ],
        "derivation": [
          "按分块乘法，$C$ 的第 $i$ 行等于 $A$ 的第 $i$ 行左乘 $B$，即 $B$ 各行向量以该行为系数的组合。",
          "同理 $C$ 的第 $j$ 列等于 $A$ 右乘 $B$ 的第 $j$ 列。"
        ],
        "pitfalls": [
          "把“行向量组由 $B$ 表示”误记成“由 $A$ 表示”。"
        ],
        "source": "课件 11，第 46-47 页"
      },
      {
        "id": "la-theorem-representation-transitive",
        "type": "theorem",
        "label": "定理 2.2.12",
        "title": "线性表示的传递性",
        "statement": [
          "若向量组 II 能由 I 线性表示，且 III 能由 II 线性表示，则 III 能由 I 线性表示。"
        ],
        "conditions": [
          "三个向量组同维，且表示关系依次衔接。"
        ],
        "conclusion": [
          "“能被线性表示”是传递关系。"
        ],
        "derivation": [
          "以列向量组为例：存在 $K$ 使 $B=AK$，存在 $L$ 使 $C=BL$，于是 $C=(AK)L=A(KL)$，系数矩阵为 $KL$。",
          "行向量组情形对偶：$C=LB=L(KA)=(LK)A$。"
        ],
        "pitfalls": [
          "默认系数矩阵相乘可交换。",
          "只写结论而不给出组合系数矩阵。"
        ],
        "source": "课件 11，第 48-53 页"
      },
      {
        "id": "la-def-group-equivalence",
        "type": "definition",
        "label": "向量组 2.2.13",
        "title": "向量组的等价",
        "statement": [
          "若向量组 I 与 II 能相互线性表示，则称向量组 I 与 II 等价。"
        ],
        "conditions": [
          "两个向量组同维。",
          "必须两个方向都能表示。"
        ],
        "conclusion": [
          "等价意味着两个向量组互相张成同一个集合。"
        ],
        "derivation": [
          "等价 = II 能由 I 表示 且 I 能由 II 表示。"
        ],
        "pitfalls": [
          "只验证一个方向就断言等价。"
        ],
        "source": "课件 11，第 57 页"
      },
      {
        "id": "la-example-equivalent-different-size",
        "type": "example",
        "label": "例 2.2.14",
        "title": "等价向量组所含向量个数未必相等",
        "statement": [
          "取 I: $\\alpha_1=(1,1)$，$\\alpha_2=(1,-1)$，$\\alpha_3=(2,1)$；II: $\\beta_1=(1,0)$，$\\beta_2=(1,2)$。则 I 与 II 等价，但 I 有 $3$ 个向量而 II 只有 $2$ 个。"
        ],
        "conditions": [
          "两组向量都是 $2$ 维行向量。"
        ],
        "conclusion": [
          "等价不要求两个向量组所含向量个数相同。"
        ],
        "derivation": [
          "$\\beta_1=\\frac12\\alpha_1+\\frac12\\alpha_2$，$\\beta_2=\\frac32\\alpha_1-\\frac12\\alpha_2$，故 II 能由 I 线性表示。",
          "$\\alpha_1=\\frac12\\beta_1+\\frac12\\beta_2$，$\\alpha_2=\\frac32\\beta_1-\\frac12\\beta_2$，$\\alpha_3=\\frac32\\beta_1+\\frac12\\beta_2$，故 I 也能由 II 线性表示。"
        ],
        "pitfalls": [
          "误以为等价的两组向量必须一一对应、个数相同。"
        ],
        "source": "课件 11，第 58 页"
      },
      {
        "id": "la-property-equivalence-relation",
        "type": "property",
        "label": "性质 2.2.15",
        "title": "向量组等价的三条性质",
        "statement": [
          "向量组之间的等价关系满足：反身性（I 与自身等价）；对称性（I 与 II 等价则 II 与 I 等价）；传递性（I 与 II 等价且 II 与 III 等价，则 I 与 III 等价）。"
        ],
        "conditions": [
          "三个向量组同维。"
        ],
        "conclusion": [
          "等价是等价关系，可以按等价类讨论向量组。"
        ],
        "derivation": [
          "反身性取系数矩阵为 $E$；对称性来自等价定义本身是双向的；传递性由线性表示的传递性得到。"
        ],
        "pitfalls": [
          "把矩阵等价的三条性质与向量组等价的三条性质混为一谈：形式相同但对象不同。"
        ],
        "source": "课件 11，第 59-60 页"
      },
      {
        "id": "la-theorem-equivalence-rank-standard-form",
        "type": "theorem",
        "label": "定理 2.2.16",
        "title": "等价向量组秩相等与等价标准形",
        "statement": [
          "设 I、II 为 $n$ 维行向量组，向量个数分别为 $s$ 与 $t$，$A,B$ 分别以它们为行。若 I 与 II 等价，则存在 $s\\times t$ 矩阵 $K$ 与 $t\\times s$ 矩阵 $L$ 使 $B=KA$、$A=LB$，从而 $r(A)=r(B)$；当 $s=t$ 时 $K,L$ 为可逆方阵，$A$ 与 $B$ 有相同的等价标准形，即 $A$ 与 $B$ 等价。"
        ],
        "conditions": [
          "行向量组写成 $B=KA$；列向量组写成 $B=AK$。",
          "$s=t$ 是 $K,L$ 为同阶方阵并可逆的前提。"
        ],
        "conclusion": [
          "等价推出秩相等；若两组向量个数还相等，则对应矩阵也等价。"
        ],
        "derivation": [
          "$B=KA$ 给出 $r(B)\\le r(A)$，$A=LB$ 给出 $r(A)\\le r(B)$，故秩相等。",
          "秩相等且 $s=t$ 时两个矩阵的行阶梯形非零行数相同，等价标准形都是 $\\begin{pmatrix}E_r&O\\\\O&O\\end{pmatrix}$，故矩阵等价。"
        ],
        "pitfalls": [
          "把“两组向量个数相同”当成等价的必要条件，它只是附加条件。",
          "列向量组情形忘记把系数矩阵写到右边。"
        ],
        "source": "课件 11，第 67-68 页"
      },
      {
        "id": "la-theorem-elementary-transform-group-equivalence",
        "type": "theorem",
        "label": "定理 2.2.17",
        "title": "初等变换与向量组等价",
        "statement": [
          "对矩阵 $A$ 作一次初等行变换相当于在左边乘一个初等矩阵，所以 $B=PA$（$P$ 可逆）意味着 $A$ 与 $B$ 的行向量组等价；作一次初等列变换相当于在右边乘一个初等矩阵，所以 $B=AQ$ 意味着 $A$ 与 $B$ 的列向量组等价。"
        ],
        "conditions": [
          "行变换只保证行向量组等价，列变换只保证列向量组等价。",
          "初等矩阵可逆，因此表示是双向的。"
        ],
        "conclusion": [
          "初等行变换保持行向量组等价，初等列变换保持列向量组等价。"
        ],
        "derivation": [
          "$B=PA$ 中把 $P$ 看作系数矩阵，就是 $B$ 的行向量组能由 $A$ 的行向量组线性表示；又 $A=P^{-1}B$ 给出反方向。"
        ],
        "pitfalls": [
          "认为初等行变换也保持列向量组等价，这是错误的。"
        ],
        "source": "课件 11，第 62-63 页"
      },
      {
        "id": "la-pitfall-matrix-equivalence-not-group",
        "type": "pitfall",
        "label": "易错点 2.2.18",
        "title": "矩阵等价不蕴含向量组等价",
        "statement": [
          "矩阵等价（存在可逆 $P,Q$ 使 $B=PAQ$）只保证秩相等，它既不保证行向量组等价，也不保证列向量组等价。例如 $M=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ 与 $N=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$ 秩都为 $1$ 故等价，但两者的行向量组不等价，列向量组也不等价。"
        ],
        "conditions": [
          "矩阵等价允许左右同时乘可逆矩阵；向量组等价只允许单侧乘系数矩阵。"
        ],
        "conclusion": [
          "秩相等 $\\Leftrightarrow$ 矩阵等价；行（列）向量组等价 $\\Rightarrow$ 秩相等，但反向不成立。"
        ],
        "derivation": [
          "若 $M$ 与 $N$ 的行向量组等价，应存在 $K$ 使 $N=KM$，但 $KM=\\begin{pmatrix}a&0\\\\c&0\\end{pmatrix}$ 的第二列恒为零，无法等于 $N$。",
          "同理 $MK=\\begin{pmatrix}a&b\\\\0&0\\end{pmatrix}$ 的第二行恒为零，列向量组也不等价。"
        ],
        "pitfalls": [
          "看到秩相等就断言两个向量组等价。",
          "把“矩阵等价”当成比“向量组等价”更强的结论。"
        ],
        "source": "课件 11，第 65-66 页"
      },
      {
        "id": "la-def-vector-group-rank",
        "type": "definition",
        "label": "定义 2.2.19",
        "title": "向量组的秩",
        "statement": [
          "设 $\\alpha_1,\\dots,\\alpha_s$ 为 $n$ 维向量组。把它们按行排成矩阵 $A$（或按列排成矩阵 $A$），则向量组的秩定义为该矩阵的秩，记作 $r\\{\\alpha_1,\\dots,\\alpha_s\\}$ 或 $\\operatorname{rank}\\{\\alpha_1,\\dots,\\alpha_s\\}$。"
        ],
        "conditions": [
          "行向量组排成 $s\\times n$ 矩阵，列向量组排成 $n\\times s$ 矩阵，二者互为转置，秩相同。"
        ],
        "conclusion": [
          "向量组的秩就是矩阵的秩的另一种说法，把向量组问题转化为矩阵问题。"
        ],
        "derivation": [
          "把向量组写成矩阵后，矩阵的行秩（或列秩）就是向量组的秩。"
        ],
        "pitfalls": [
          "把向量组的秩与向量个数混为一谈：秩不超过向量个数。",
          "把行向量组与列向量组算成两个不同的秩。"
        ],
        "source": "课件 11，第 72-73 页"
      },
      {
        "id": "la-method-compute-group-rank",
        "type": "method",
        "label": "方法 2.2.20",
        "title": "计算向量组的秩",
        "statement": [
          "把向量组按行（或按列）排成矩阵 $A$，用初等变换化为行阶梯形，非零行数即为秩；也可用最高阶非零子式判断秩。"
        ],
        "conditions": [
          "初等变换不改变矩阵的秩。",
          "行向量组按行排，列向量组按列排，保持“向量是行还是列”的一致性。"
        ],
        "conclusion": [
          "向量组的秩 = 对应矩阵的秩 = 行阶梯形非零行数 = 最高阶非零子式的阶数。"
        ],
        "derivation": [
          "初等变换保秩，化到行阶梯形后数非零行即可。"
        ],
        "pitfalls": [
          "阶梯形没化到底就数行数。",
          "构造矩阵时把行向量组按列排，虽秩相同但后续表示关系全错。"
        ],
        "source": "课件 11，第 74-77 页"
      },
      {
        "id": "la-example-group-rank-two-dim",
        "type": "example",
        "label": "例 2.2.21",
        "title": "求秩：三个 2 维行向量",
        "statement": [
          "求 $\\alpha_1=(1,1)$，$\\alpha_2=(1,-1)$，$\\alpha_3=(2,1)$ 的秩。"
        ],
        "conditions": [
          "按行排成 $3\\times2$ 矩阵 $A$。"
        ],
        "conclusion": [
          "$r\\{\\alpha_1,\\alpha_2,\\alpha_3\\}=r(A)=2$。"
        ],
        "derivation": [
          "$A=\\begin{pmatrix}1&1\\\\1&-1\\\\2&1\\end{pmatrix}$，二阶子式 $\\begin{vmatrix}1&1\\\\1&-1\\end{vmatrix}=-2\\neq0$，故 $r(A)\\ge2$。",
          "又 $A$ 只有 $2$ 列，$r(A)\\le2$，故 $r(A)=2$。"
        ],
        "pitfalls": [
          "以为 $3$ 个向量秩就一定是 $3$，忽略矩阵只有 $2$ 列。"
        ],
        "source": "课件 11，第 74-75 页"
      },
      {
        "id": "la-example-group-rank-columns",
        "type": "example",
        "label": "例 2.2.22",
        "title": "求秩：三个 3 维列向量",
        "statement": [
          "求 $\\alpha_1=(3,5,7)^T$，$\\alpha_2=(0,0,0)^T$，$\\alpha_3=(5,9,4)^T$ 的秩。"
        ],
        "conditions": [
          "按列排成 $3\\times3$ 矩阵 $A=(\\alpha_1,\\alpha_2,\\alpha_3)$。"
        ],
        "conclusion": [
          "$r\\{\\alpha_1,\\alpha_2,\\alpha_3\\}=2$。"
        ],
        "derivation": [
          "二阶子式 $\\begin{vmatrix}3&5\\\\5&9\\end{vmatrix}=27-25=2\\neq0$，故 $r(A)\\ge2$。",
          "三阶子式只有 $|A|$，而 $A$ 含零列，$|A|=0$，故 $r(A)\\le2$，于是 $r(A)=2$。"
        ],
        "pitfalls": [
          "把 $|A|=0$ 直接当作 $r(A)=0$。"
        ],
        "source": "课件 11，第 76-77 页"
      },
      {
        "id": "la-example-group-rank-parameters",
        "type": "example",
        "label": "例 2.2.23",
        "title": "含参向量组的秩",
        "statement": [
          "已知 $\\alpha_1=(a,3,1)^T$，$\\alpha_2=(1,b,2)^T$，$\\alpha_3=(2,3,1)^T$，$\\alpha_4=(1,1,0)^T$ 的秩为 $2$，求 $a,b$。"
        ],
        "conditions": [
          "按列排成矩阵后作初等行变换化为阶梯形。"
        ],
        "conclusion": [
          "$a=2$，$b=3$。"
        ],
        "derivation": [
          "$A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)=\\begin{pmatrix}a&1&2&1\\\\3&b&3&1\\\\1&2&1&0\\end{pmatrix}\\to\\begin{pmatrix}1&2&1&0\\\\0&b-6&0&1\\\\0&1-2a&2-a&1\\end{pmatrix}$。",
          "秩为 $2$ 要求第三行是第一行的倍数：由第三列得 $2-a=0$，再由第二列得 $1-2a=b-6$，代入得 $a=2$，$b=3$。"
        ],
        "pitfalls": [
          "把“秩为 $2$”读成“有两个非零行”就直接作答，忘记回代检验。",
          "只令一个参数为零就停手。"
        ],
        "source": "课件 11，第 78 页"
      },
      {
        "id": "la-theorem-representation-rank-inequality",
        "type": "theorem",
        "label": "定理 2.2.24",
        "title": "线性表示与秩的大小关系",
        "statement": [
          "若向量组 II: $\\beta_1,\\dots,\\beta_t$ 能由向量组 I: $\\alpha_1,\\dots,\\alpha_s$ 线性表示，则 $r\\{\\beta_1,\\dots,\\beta_t\\}\\le r\\{\\alpha_1,\\dots,\\alpha_s\\}$。"
        ],
        "conditions": [
          "两个向量组同维。"
        ],
        "conclusion": [
          "能被表示的一方秩不会更大，即 $r(II)\\le r(I)$：表示关系具有“秩不增”的方向。"
        ],
        "derivation": [
          "以列向量为例，令 $A=(\\alpha_1,\\dots,\\alpha_s)$，$B=(\\beta_1,\\dots,\\beta_t)$，由 II 能由 I 表示知存在 $K$ 使 $B=AK$。",
          "由 $r(B)=r(AK)\\le r(A)$ 即得结论。"
        ],
        "pitfalls": [
          "把方向记反，写成 $r(I)\\le r(II)$。"
        ],
        "source": "课件 11，第 80-82 页"
      },
      {
        "id": "la-corollary-equivalence-equal-rank",
        "type": "corollary",
        "label": "推论 2.2.25",
        "title": "等价的向量组秩相等",
        "statement": [
          "若向量组 I 与 II 等价，则 $r(I)=r(II)$。"
        ],
        "conditions": [
          "两个向量组同维且能相互线性表示。"
        ],
        "conclusion": [
          "秩是向量组等价的不变量，是等价的必要条件。"
        ],
        "derivation": [
          "I 与 II 等价给出 $r(II)\\le r(I)$ 与 $r(I)\\le r(II)$，两边夹逼得相等。"
        ],
        "pitfalls": [
          "把它误当作充要条件。"
        ],
        "source": "课件 11，第 83 页"
      },
      {
        "id": "la-pitfall-equal-rank-not-equivalent",
        "type": "pitfall",
        "label": "易错点 2.2.26",
        "title": "秩相等不蕴含向量组等价",
        "statement": [
          "$r(I)=r(II)$ 不能推出 I 与 II 等价。例如 $\\alpha_1=(1,0,0)^T$，$\\alpha_2=(0,1,0)^T$；$\\beta_1=(0,1,0)^T$，$\\beta_2=(0,0,1)^T$，则 $r\\{\\alpha_1,\\alpha_2\\}=r\\{\\beta_1,\\beta_2\\}=2$，但 $\\beta_2$ 不能由 $\\alpha_1,\\alpha_2$ 线性表示，故两组不等价。"
        ],
        "conditions": [
          "两组向量个数可以相同，秩也可以相同。"
        ],
        "conclusion": [
          "等价 $\\Rightarrow$ 秩相等；秩相等 $\\nRightarrow$ 等价。"
        ],
        "derivation": [
          "若 $\\beta_2=k_1\\alpha_1+k_2\\alpha_2=(k_1,k_2,0)^T$，第三个分量必为 $0$，而 $\\beta_2=(0,0,1)^T$，矛盾。"
        ],
        "pitfalls": [
          "把“秩相等”当成判定等价的充分条件。"
        ],
        "source": "课件 11，第 84 页"
      }
    ]
  },
  {
    "number": "2.3",
    "title": "向量组的线性相关性",
    "lead": "线性相关与线性无关的秩定义、定理1 与两个推论、八条快速结论、定理2 与定理3、系数矩阵法 B=AC 与典型例题。",
    "map": [
      "相关与无关",
      "定理1",
      "八条结论",
      "定理2 与定理3",
      "系数矩阵法"
    ],
    "entries": [
      {
        "id": "la-def-linear-dependence",
        "type": "definition",
        "label": "定义 2.3.1",
        "title": "向量组的线性相关与线性无关",
        "statement": [
          "设向量组 $\\alpha_1,\\dots,\\alpha_s$ 的秩为 $r\\{\\alpha_1,\\dots,\\alpha_s\\}=r$。若 $r<s$，称该向量组**线性相关**；若 $r=s$，称该向量组**线性无关**。"
        ],
        "conditions": [
          "向量组中向量个数为 $s$，秩为 $r$，两者都是有限数。",
          "按行排成 $s\\times n$ 矩阵或按列排成 $n\\times s$ 矩阵均可，秩不变。"
        ],
        "conclusion": [
          "线性相关 $\\iff r<s$；线性无关 $\\iff r=s$。",
          "相关性完全由秩与向量个数是否相等决定，与向量的具体分量无关。"
        ],
        "derivation": [
          "秩是最大线性无关组所含向量个数，即真正独立的向量个数。",
          "$s$ 个向量彼此独立时秩必须等于 $s$；秩小于 $s$ 说明至少有一个向量能被其余向量线性表示，也就是多余的。"
        ],
        "pitfalls": [
          "把定义记成「行列式为零就相关」，只有方阵且个数等于维数时才成立。",
          "忘记核对秩的阶数，把 $r<s$ 与 $r\\le s$ 混用。"
        ],
        "source": "课件 12，第 4-5 页"
      },
      {
        "id": "la-thm-dependence-criterion",
        "type": "theorem",
        "label": "定理 2.3.2",
        "title": "线性相关的充要条件（定理1）",
        "statement": [
          "向量组 $\\alpha_1,\\dots,\\alpha_s$ 线性相关 $\\iff$ 存在不全为零的数 $k_1,\\dots,k_s$，使 $k_1\\alpha_1+k_2\\alpha_2+\\dots+k_s\\alpha_s=0$。"
        ],
        "conditions": [
          "$s\\ge 1$，各向量同维。",
          "结论对行向量组与列向量组都成立。"
        ],
        "conclusion": [
          "相关 $\\iff$ 零向量有非平凡表示。",
          "这个等式是全章所有证明的出发点。"
        ],
        "derivation": [
          "把行向量组排成矩阵 $A$，只用初等行变换化行阶梯形，得 $PA=U$。",
          "取 $e=(0,\\dots,0,1)$，令 $(k_1,\\dots,k_s)=eP$，则 $(k_1,\\dots,k_s)A=ePA=eU=0$，因为 $U$ 的最后一行是全零行。",
          "$P$ 可逆，故 $eP$ 不是零行，系数不全为零。"
        ],
        "pitfalls": [
          "把「存在不全为零的系数」误写成「任意系数都为零」。",
          "证明中把初等行变换写成列变换，导致 $PA$ 与 $AQ$ 弄混。"
        ],
        "source": "课件 12，第 26-30 页"
      },
      {
        "id": "la-cor-part-overall",
        "type": "corollary",
        "label": "推论 2.3.3",
        "title": "部分与整体的相关性（推论1）",
        "statement": [
          "(1) 若向量组的某一部分线性相关，则整个向量组线性相关。",
          "(2) 若整个向量组线性无关，则它的任何一部分都线性无关。"
        ],
        "conditions": [
          "「部分」指从原向量组中取出若干个向量，保持原有顺序。"
        ],
        "conclusion": [
          "(2) 是 (1) 的逆否命题，两者等价。"
        ],
        "derivation": [
          "(1)：部分相关时把该部分的不全为零系数取出来，其余向量的系数补 $0$，得到整组的不全为零系数。"
        ],
        "pitfalls": [
          "误用成「整体相关则部分相关」，反例：$(1,0),(0,1),(0,0)$ 整体相关，而前两个无关。"
        ],
        "source": "课件 12，第 31-32 页"
      },
      {
        "id": "la-cor-independent-criterion",
        "type": "corollary",
        "label": "推论 2.3.4",
        "title": "线性无关的等价刻画（推论2）",
        "statement": [
          "$\\alpha_1,\\dots,\\alpha_s$ 线性无关 $\\iff$ 由 $k_1\\alpha_1+\\dots+k_s\\alpha_s=0$ 必可推出 $k_1=\\dots=k_s=0$。"
        ],
        "conditions": [
          "各向量同维且个数为 $s$。"
        ],
        "conclusion": [
          "要证明一组向量线性无关，标准动作是：设零组合，推出全部系数为零。"
        ],
        "derivation": [
          "由定理1 取逆否命题即得：不存在不全为零的系数使组合为零。"
        ],
        "pitfalls": [
          "证明中只推出部分系数为零就宣布无关。"
        ],
        "source": "课件 12，第 33 页"
      },
      {
        "id": "la-prop-transpose",
        "type": "property",
        "label": "性质 2.3.5",
        "title": "转置不改变线性相关性（结论1）",
        "statement": [
          "向量组线性相关 $\\iff$ 它的转置向量组线性相关。",
          "即行向量组的相关性与对应列向量组的相关性完全相同。"
        ],
        "conditions": [
          "转置指把每个向量由行写为列（或由列写为行），向量组内顺序不变。"
        ],
        "conclusion": [
          "判断相关性时行、列两种写法可以随意选择，通常选计算更方便的一种。"
        ],
        "derivation": [
          "设行向量组构成矩阵 $A$，转置后构成 $A^T$，而 $r(A)=r(A^T)$，向量个数不变，故 $r<s$ 的判定结果不变。"
        ],
        "pitfalls": [
          "以为转置后相关性会翻转，或忘记个数不变这一前提。"
        ],
        "source": "课件 12，第 6-8 页"
      },
      {
        "id": "la-prop-single-zero",
        "type": "property",
        "label": "性质 2.3.6",
        "title": "单个向量与含零向量的向量组（结论2、3）",
        "statement": [
          "单个向量 $\\alpha$ 线性相关 $\\iff \\alpha=0$。",
          "若向量组中含有零向量，则该向量组必线性相关。"
        ],
        "conditions": [
          "第二条对任意个数、任意维数都成立。"
        ],
        "conclusion": [
          "零向量是「必然多余」的向量，含它的组一定相关。"
        ],
        "derivation": [
          "单个向量构成的组秩为 $0$ 或 $1$：相关即 $0<1$，也就是 $\\alpha=0$。",
          "含零向量时取该向量的系数为 $1$、其余为 $0$，即得非平凡零组合。"
        ],
        "pitfalls": [
          "用结论3 反推「不含零向量就无关」——这是错误的。"
        ],
        "source": "课件 12，第 10 页"
      },
      {
        "id": "la-prop-two-proportional",
        "type": "property",
        "label": "性质 2.3.7",
        "title": "两个向量相关当且仅当分量成比例（结论4）",
        "statement": [
          "两个向量 $\\alpha=(a_1,\\dots,a_n)$，$\\beta=(b_1,\\dots,b_n)$ 线性相关 $\\iff$ 它们的分量成比例，即所有二阶子式 $a_ib_j-a_jb_i=0$。"
        ],
        "conditions": [
          "$n\\ge 2$；$n=1$ 时任意两个数都成比例。"
        ],
        "conclusion": [
          "存在一个二阶子式非零即可断言两向量线性无关。",
          "例：$(1,2,3,4)^T$ 与 $(2,4,6,8)^T$ 相关；与 $(2,4,6,9)^T$ 无关，因为 $\\begin{vmatrix}3&6\\\\4&9\\end{vmatrix}=3\\ne 0$。"
        ],
        "derivation": [
          "相关即秩为 $1$，二阶子式全为零正是秩不超过 $1$ 的判据。"
        ],
        "pitfalls": [
          "只检查个别分量就下结论，或漏掉某个二阶子式。"
        ],
        "source": "课件 12，第 14-16 页"
      },
      {
        "id": "la-prop-count-exceeds-dim",
        "type": "property",
        "label": "性质 2.3.8",
        "title": "个数大于维数必相关（结论5）",
        "statement": [
          "若 $s>n$，则任意 $s$ 个 $n$ 维向量必线性相关。"
        ],
        "conditions": [
          "向量的维数固定为 $n$；$s$ 是向量个数。"
        ],
        "conclusion": [
          "这是最省事的判定：先数个数、看维数即可。",
          "$s\\le n$ 时这条判据完全不起作用，必须回到秩或子式计算。"
        ],
        "derivation": [
          "把 $s$ 个 $n$ 维向量排成 $n\\times s$ 矩阵 $A$，则 $r(A)\\le n<s$，由定义即相关。"
        ],
        "pitfalls": [
          "把结论滥用到 $s\\le n$ 的情形，误以为个数不超过维数就一定无关。"
        ],
        "source": "课件 12，第 17-18 页"
      },
      {
        "id": "la-prop-concatenate",
        "type": "property",
        "label": "性质 2.3.9",
        "title": "拼接与截短：相关性的传递方向（结论6）",
        "statement": [
          "若拼接向量组 $(\\alpha_1;\\beta_1),(\\alpha_2;\\beta_2),\\dots,(\\alpha_s;\\beta_s)$ 线性相关，则 $\\alpha_1,\\dots,\\alpha_s$ 线性相关。",
          "逆否形式：若 $\\alpha_1,\\dots,\\alpha_s$ 线性无关，则拼接向量组线性无关。"
        ],
        "conditions": [
          "拼接指把同下标的两个向量上下接成一个更长的向量。"
        ],
        "conclusion": [
          "相关性只能由「长组」传给「短组」，不能反向传递。"
        ],
        "derivation": [
          "$k_1(\\alpha_1;\\beta_1)+\\dots+k_s(\\alpha_s;\\beta_s)=(\\sum k_i\\alpha_i;\\sum k_i\\beta_i)=0$，上、下两半同时为零向量，故 $\\sum k_i\\alpha_i=0$，拼接组的不全为零系数就是截短组的不全为零系数。"
        ],
        "pitfalls": [
          "把方向写反，用短组的相关性去推长组相关。"
        ],
        "source": "课件 12，第 19 页、第 45-46 页"
      },
      {
        "id": "la-thm-more-represented-by-fewer",
        "type": "theorem",
        "label": "定理 2.3.10",
        "title": "多的能由少的表示则相关（结论7）",
        "statement": [
          "若向量组 II: $\\beta_1,\\dots,\\beta_t$ 可由向量组 I: $\\alpha_1,\\dots,\\alpha_s$ 线性表示，且 $t>s$，则 $\\beta_1,\\dots,\\beta_t$ 线性相关。"
        ],
        "conditions": [
          "两个向量组同维；表示关系是单向的（II 能由 I 表示）。"
        ],
        "conclusion": [
          "推论：若 II 与 I 等价且两组都线性无关，则 $s=t$。"
        ],
        "derivation": [
          "由 $r(II)\\le r(I)$ 得 $r\\{\\beta_1,\\dots,\\beta_t\\}\\le r\\{\\alpha_1,\\dots,\\alpha_s\\}\\le s<t$，秩小于个数故相关。"
        ],
        "pitfalls": [
          "把 $t>s$ 写成 $t\\ge s$；$t=s$ 时不能推出相关。"
        ],
        "source": "课件 12，第 20 页"
      },
      {
        "id": "la-cor-n-plus-one",
        "type": "corollary",
        "label": "推论 2.3.11",
        "title": "$n+1$ 个 $n$ 维向量必相关（例2）",
        "statement": [
          "任意 $n+1$ 个 $n$ 维向量都线性相关。"
        ],
        "conditions": [
          "向量个数恰为 $n+1$，维数为 $n$。"
        ],
        "conclusion": [
          "这是结论5（个数大于维数）在 $s=n+1$ 时的特例，也是「$n$ 维无关组能表示一切」的关键一步。"
        ],
        "derivation": [
          "令 $E=(e_1,\\dots,e_n)$ 为基本单位向量组构成的矩阵，$A=(\\alpha_1,\\dots,\\alpha_{n+1})$，则 $A=EA$，故 $r(A)\\le r(E)=n<n+1$。"
        ],
        "pitfalls": [
          "把它与「$n$ 个 $n$ 维向量可能相关也可能无关」混为一谈。"
        ],
        "source": "课件 12，第 21 页、第 51 页"
      },
      {
        "id": "la-thm-independent-equivalent-count",
        "type": "theorem",
        "label": "定理 2.3.12",
        "title": "无关且等价的向量组个数相等（结论8）",
        "statement": [
          "若向量组 I 与 II 都线性无关且彼此等价，则它们所含向量个数相等，即 $s=t$。"
        ],
        "conditions": [
          "前提是两个条件同时成立：都线性无关、彼此等价。"
        ],
        "conclusion": [
          "个数是无关向量组在等价关系下的不变量。"
        ],
        "derivation": [
          "反证法：若 $t>s$，由 II 能由 I 表示及结论7 得 II 相关，与无关矛盾；直接法：$s=r(I)=r(II)=t$。"
        ],
        "pitfalls": [
          "漏掉「线性无关」这一前提，误以为等价向量组个数都相等。"
        ],
        "source": "课件 12，第 22-23 页"
      },
      {
        "id": "la-prop-equivalent-count-diff",
        "type": "property",
        "label": "性质 2.3.13",
        "title": "等价向量组的个数可以不等",
        "statement": [
          "等价的向量组所含向量个数可以不同，也可能一个线性无关、一个线性相关。"
        ],
        "conditions": [
          "只需两组能相互线性表示。"
        ],
        "conclusion": [
          "例：I: $(1,1),(1,-1),(2,1)$ 与 II: $(1,0),(1,2)$ 等价，个数为 $3$ 与 $2$。",
          "其中 $\\alpha_1=\\tfrac12\\beta_1+\\tfrac12\\beta_2$，$\\alpha_2=\\tfrac12\\beta_1-\\tfrac12\\beta_2$，$\\alpha_3=\\tfrac12\\beta_1+\\tfrac32\\beta_2$；$\\beta_1=\\tfrac12\\alpha_1+\\tfrac12\\alpha_2$，$\\beta_2=\\tfrac12\\alpha_1-\\tfrac32\\alpha_2$。"
        ],
        "derivation": [
          "等价只要求两组能相互线性表示，与个数无关；上例中两组互表关系已逐一验证，故个数 $3$ 与 $2$ 仍算等价。"
        ],
        "pitfalls": [
          "把「等价」误当「一一对应」，从而以为个数必须相同。"
        ],
        "source": "课件 12，第 24 页"
      },
      {
        "id": "la-thm-dependent-some-represent",
        "type": "theorem",
        "label": "定理 2.3.14",
        "title": "相关等价于存在某个向量可由其余表示（定理2）",
        "statement": [
          "当 $s\\ge 2$ 时，向量组 $\\alpha_1,\\dots,\\alpha_s$ 线性相关 $\\iff$ 存在某个 $\\alpha_i$ 可由其余 $s-1$ 个向量线性表示。"
        ],
        "conditions": [
          "要求 $s\\ge 2$；单个向量谈不上「其余向量」。"
        ],
        "conclusion": [
          "注意是「存在某个」，不是「每一个都能由其余表示」。"
        ],
        "derivation": [
          "由定理1 取不全为零的系数，若 $k_i\\ne 0$，则 $\\alpha_i=-\\frac{1}{k_i}\\sum_{j\\ne i}k_j\\alpha_j$；反之移项即得系数含 $-1$ 的零组合。"
        ],
        "pitfalls": [
          "把结论读成「每一个向量都可由其余表示」。反例：$(1,0),(0,1),(1,1)$ 相关，但 $(1,0)$ 不能由 $(0,1),(1,1)$ 表示。"
        ],
        "source": "课件 12，第 47 页"
      },
      {
        "id": "la-thm-unique-representation",
        "type": "theorem",
        "label": "定理 2.3.15",
        "title": "无关组外添一个相关向量则唯一可表示（定理3）",
        "statement": [
          "若 $\\alpha_1,\\dots,\\alpha_s$ 线性无关，而 $\\alpha_1,\\dots,\\alpha_s,\\beta$ 线性相关，则 $\\beta$ 可由 $\\alpha_1,\\dots,\\alpha_s$ 线性表示，且表示方式唯一。"
        ],
        "conditions": [
          "两个前提缺一不可：原组线性无关；添上 $\\beta$ 后线性相关。"
        ],
        "conclusion": [
          "结论包含两件事：能表示（存在性）与表示唯一。"
        ],
        "derivation": [
          "设 $k_1\\alpha_1+\\dots+k_s\\alpha_s+k\\beta=0$。若 $k=0$，则原组相关，矛盾，故 $k\\ne 0$，得 $\\beta=-\\frac{k_1}{k}\\alpha_1-\\dots-\\frac{k_s}{k}\\alpha_s$。",
          "唯一性：若有两组系数，相减得原组的零组合，由无关性系数全为 $0$。"
        ],
        "pitfalls": [
          "漏掉「原组无关」，此时即使能表示也不唯一。",
          "漏掉「加 $\\beta$ 后相关」，此时 $\\beta$ 根本不能表示。"
        ],
        "source": "课件 12，第 48-50 页"
      },
      {
        "id": "la-method-coefficient-matrix",
        "type": "method",
        "label": "方法 2.3.16",
        "title": "系数矩阵法：$B=AC$ 与 $C$ 可逆判据",
        "statement": [
          "设 $A=(\\alpha_1,\\dots,\\alpha_s)$ 且 $\\alpha_1,\\dots,\\alpha_s$ 线性无关，$\\beta_j=\\sum_{i}c_{ij}\\alpha_i$，$C=(c_{ij})$，则 $B=(\\beta_1,\\dots,\\beta_s)=AC$。",
          "此时 $\\beta_1,\\dots,\\beta_s$ 线性无关 $\\iff C$ 可逆 $\\iff |C|\\ne 0$。"
        ],
        "conditions": [
          "$\\alpha$ 组必须线性无关（$A$ 列满秩）；$C$ 为 $s\\times s$ 方阵。"
        ],
        "conclusion": [
          "循环替换、环形组合、含参组合题一律化为判断 $|C|$ 是否为零。"
        ],
        "derivation": [
          "$A$ 列满秩时 $\\ker A=\\{0\\}$：若 $ACx=0$，则 $Cx\\in\\ker A$，故 $Cx=0$，于是 $r(AC)=r(C)$。",
          "因此 $r(B)=s\\iff r(C)=s\\iff C$ 可逆。"
        ],
        "pitfalls": [
          "只用 $r(AC)\\le r(C)$ 就宣布「等价」：它只能由 $C$ 不可逆推出相关，反方向必须补上 $A$ 列满秩。"
        ],
        "source": "课件 12，第 58 页"
      },
      {
        "id": "la-method-parameter-rank",
        "type": "method",
        "label": "方法 2.3.17",
        "title": "含参向量组相关性的判定流程",
        "statement": [
          "含参数向量组判定的标准流程：(1) 先找一个不含参数的低阶非零子式定下秩的下界；(2) 再用最高阶子式（通常行列式）是否为 $0$ 分情况讨论。"
        ],
        "conditions": [
          "向量组为方阵规模且含 $1$-$2$ 个参数时最有效。"
        ],
        "conclusion": [
          "例：$A=\\begin{pmatrix}2&0&b\\\\5&a&0\\\\6&0&1\\end{pmatrix}$，二阶子式 $\\begin{vmatrix}5&0\\\\6&1\\end{vmatrix}=5\\ne 0$ 给出 $r(A)\\ge 2$；$|A|=2a(1-3b)$。",
          "结论：线性无关 $\\iff a\\ne 0$ 且 $b\\ne \\tfrac13$。"
        ],
        "derivation": [
          "先由低阶非零子式锁定秩的下界，再把最高阶子式（行列式）当作参数的函数求零点：$|A|\\ne 0$ 对应无关，$|A|=0$ 对应相关。",
          "当 $|A|=0$ 时，必须用已有的低阶非零子式确认秩恰为 $n-1$，否则可能降到更低。"
        ],
        "pitfalls": [
          "先算最高阶子式、再回头找低阶非零子式，容易在「秩等于 2 还是 1」上出错。",
          "讨论 $|A|=0$ 时忘记说明此时秩恰为 2，而不是降到 1。"
        ],
        "source": "课件 12，第 53 页"
      },
      {
        "id": "la-method-nilpotent",
        "type": "method",
        "label": "方法 2.3.18",
        "title": "幂零型向量组无关性的证明套路",
        "statement": [
          "已知 $A^{m-1}\\eta\\ne 0$、$A^{m}\\eta=0$（$m>2$），证明 $\\eta,A\\eta,\\dots,A^{m-1}\\eta$ 线性无关。"
        ],
        "conditions": [
          "$A$ 为 $n$ 阶方阵，$\\eta$ 为 $n$ 维列向量。"
        ],
        "conclusion": [
          "结论：$\\eta,A\\eta,\\dots,A^{m-1}\\eta$ 线性无关。",
          "两种证法都靠 $A$ 的幂把零组合逐项清零，最终把问题压缩到唯一非零向量 $A^{m-1}\\eta$ 上。"
        ],
        "derivation": [
          "证法一（依次左乘）：对零组合左乘 $A^{m-1}$，注意 $A^{m}\\eta=A^{m+1}\\eta=\\dots=0$，只剩 $k_1A^{m-1}\\eta=0$，得 $k_1=0$；再左乘 $A^{m-2}$ 得 $k_2=0$；如此逐个逼出。",
          "证法二（第一个非零系数）：设 $k_i$ 是第一个非零系数，左乘 $A^{m-i}$ 后只剩 $k_iA^{m-1}\\eta=0$，与 $A^{m-1}\\eta\\ne 0$ 矛盾。"
        ],
        "pitfalls": [
          "左乘的次数写错（应是 $A^{m-i}$，不是 $A^{i}$）；忘记 $A^{m}\\eta=0$ 会推出所有更高次幂也为零。"
        ],
        "source": "课件 12，第 33-44 页"
      },
      {
        "id": "la-ex-cyclic-three",
        "type": "example",
        "label": "例 2.3.19",
        "title": "三向量循环替换的相关性",
        "statement": [
          "设 $\\beta_1=\\alpha_1+2\\alpha_2$，$\\beta_2=\\alpha_2+2\\alpha_3$，$\\beta_3=\\alpha_3+2\\alpha_1$，判断 $\\beta$ 组与 $\\alpha$ 组相关性是否一致。"
        ],
        "conditions": [
          "$\\alpha_1,\\alpha_2,\\alpha_3$ 同维，个数为 $3$。"
        ],
        "conclusion": [
          "$B=AC$，$C=\\begin{pmatrix}1&0&2\\\\2&1&0\\\\0&2&1\\end{pmatrix}$，$|C|=1+8=9\\ne 0$，故 $\\alpha$ 组无关 $\\iff \\beta$ 组无关。"
        ],
        "derivation": [
          "$|C|=1\\cdot(1\\cdot1-0\\cdot2)+2\\cdot(2\\cdot2-1\\cdot0)=1+8=9$。"
        ],
        "pitfalls": [
          "只看系数是否出现负号判断可逆性，忽略三角结构。"
        ],
        "source": "课件 12，第 9 页"
      },
      {
        "id": "la-ex-four-ring",
        "type": "example",
        "label": "例 2.3.20",
        "title": "四向量环必相关",
        "statement": [
          "设 $\\beta_1=\\alpha_1+\\alpha_2$，$\\beta_2=\\alpha_2+\\alpha_3$，$\\beta_3=\\alpha_3+\\alpha_4$，$\\beta_4=\\alpha_4+\\alpha_1$，证明无论 $\\alpha_1,\\dots,\\alpha_4$ 如何取，$\\beta$ 组都线性相关。"
        ],
        "conditions": [
          "$\\alpha_1,\\dots,\\alpha_4$ 为任意同维向量，不要求无关。"
        ],
        "conclusion": [
          "$C=\\begin{pmatrix}1&0&0&1\\\\1&1&0&0\\\\0&1&1&0\\\\0&0&1&1\\end{pmatrix}$，$|C|=0$，于是 $r(B)\\le r(C)<4$，必相关。"
        ],
        "derivation": [
          "把四行相加得 $(2,2,2,2)$，说明 $C$ 的行向量不独立；也可直接展开得 $|C|=0$。"
        ],
        "pitfalls": [
          "试图对 $\\alpha$ 分情况讨论，然而结论与 $\\alpha$ 的取值无关。"
        ],
        "source": "课件 12，第 54 页"
      },
      {
        "id": "la-ex-ring-parameter",
        "type": "example",
        "label": "例 2.3.21",
        "title": "环形含参组合的无关条件",
        "statement": [
          "设 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性无关，$\\beta_1=a\\alpha_1+b\\alpha_2$，$\\beta_2=a\\alpha_2+b\\alpha_3$，$\\beta_3=a\\alpha_3+b\\alpha_1$，求 $\\beta$ 组线性无关的条件。"
        ],
        "conditions": [
          "$\\alpha$ 组线性无关；$a,b$ 为实数。"
        ],
        "conclusion": [
          "$C=\\begin{pmatrix}a&0&b\\\\b&a&0\\\\0&b&a\\end{pmatrix}$，$|C|=a^3+b^3$，故 $\\beta$ 组线性无关 $\\iff a^3+b^3\\ne 0$，即 $a+b\\ne 0$。"
        ],
        "derivation": [
          "按第一行展开：$|C|=a\\cdot a^2+b\\cdot b^2=a^3+b^3$；又 $a^3+b^3=(a+b)(a^2-ab+b^2)$，二次因子恒正。",
          "当 $b=-a$、$a\\ne 0$ 时 $|C|=0$ 且 $r(C)=2$，从而 $r(B)=2$，相关。"
        ],
        "pitfalls": [
          "只算 $|C|$ 就结束，没有把它接回「$C$ 可逆 $\\iff$ 无关」这一步。"
        ],
        "source": "课件 12，第 55-57 页"
      },
      {
        "id": "la-ex-last-nonzero",
        "type": "example",
        "label": "例 2.3.22",
        "title": "取最后一个非零系数与表示唯一性",
        "statement": [
          "若向量组线性相关、$s>1$ 且 $\\alpha_1\\ne 0$，则存在 $j$（$2\\le j\\le s$）使 $\\alpha_j$ 可由 $\\alpha_1,\\dots,\\alpha_{j-1}$ 线性表示。",
          "另外，$\\eta$ 可由 $\\alpha_1,\\dots,\\alpha_s$ 线性表示时，表示唯一 $\\iff \\alpha_1,\\dots,\\alpha_s$ 线性无关。"
        ],
        "conditions": [
          "第一个结论要求 $\\alpha_1\\ne 0$，否则 $j=1$ 的情形无法排除。"
        ],
        "conclusion": [
          "结论1：相关组中必有一个向量能由它前面的向量线性表示。",
          "结论2：表示唯一 $\\iff$ 向量组线性无关。"
        ],
        "derivation": [
          "证明取零组合中最后一个非零系数 $k_j$，则 $\\alpha_j=-\\frac{1}{k_j}(k_1\\alpha_1+\\dots+k_{j-1}\\alpha_{j-1})$。",
          "唯一性：两组表示相减得零组合，由无关性系数全等；反之相关时零组合可叠加出第二组系数。"
        ],
        "pitfalls": [
          "取「第一个」非零系数，因为那样得到的 $\\alpha_j$ 需要用后面的向量表示，不符结论。"
        ],
        "source": "课件 12，第 59-61 页"
      },
      {
        "id": "la-ex-n-dim-span",
        "type": "example",
        "label": "例 2.3.23",
        "title": "$n$ 维无关组能表示一切",
        "statement": [
          "设 $\\alpha_1,\\dots,\\alpha_n$ 是 $n$ 维列向量，则「它们线性无关」$\\iff$「任意 $n$ 维列向量都能由它们线性表示」$\\iff$ $A$ 可逆。"
        ],
        "conditions": [
          "向量个数与维数相等，都是 $n$。"
        ],
        "conclusion": [
          "正向用推论 2.3.11（$n+1$ 个 $n$ 维向量必相关）与定理3；反向用 $r(II)\\le r(I)$。"
        ],
        "derivation": [
          "正向：$\\alpha_1,\\dots,\\alpha_n,\\eta$ 共 $n+1$ 个 $n$ 维向量，必相关，套定理3 即可表示。",
          "反向：$e_1,\\dots,e_n$ 都能由 $\\alpha$ 组表示，故 $n=r\\{e_1,\\dots,e_n\\}\\le r\\{\\alpha_1,\\dots,\\alpha_n\\}\\le n$，秩为 $n$，无关。"
        ],
        "pitfalls": [
          "只证一个方向就当作充要条件；反向证明漏掉「秩不超过 $n$」这一步。"
        ],
        "source": "课件 12，第 62 页"
      },
      {
        "id": "la-pitfall-some-vs-every",
        "type": "pitfall",
        "label": "易错点 2.3.24",
        "title": "「相关」是存在某个，而不是每个都能表示",
        "statement": [
          "向量组线性相关只保证存在某个 $\\alpha_i$ 可由其余向量线性表示，不能推出每一个向量都能由其余向量表示。"
        ],
        "conditions": [
          "任何 $s\\ge 3$ 的线性相关组都可能是反例，尤其是秩与向量个数相差较大的组。"
        ],
        "conclusion": [
          "反例：$\\alpha_1=(1,0,0)^T$，$\\alpha_2=(2,0,0)^T$，$\\alpha_3=(0,1,0)^T$，$\\alpha_4=(0,0,1)^T$。四个向量都是 3 维，必相关；$\\alpha_1=\\tfrac12\\alpha_2$ 可由其余表示，但 $\\alpha_3$ 不能由 $\\alpha_1,\\alpha_2,\\alpha_4$ 表示（后三者的第二分量恒为 $0$）。"
        ],
        "derivation": [
          "定理2 的证明只用到「某个 $k_i\\ne 0$」，因此天然只能保证存在性；要保证每个向量都能表示，需要更强的条件（例如组的秩不超过 $s-1$ 且去掉任一个向量秩都不降）。"
        ],
        "pitfalls": [
          "把定理2 的「存在某个」误读为「任取一个」。"
        ],
        "source": "课件 12，第 47 页"
      },
      {
        "id": "la-pitfall-rank-inequality",
        "type": "pitfall",
        "label": "易错点 2.3.25",
        "title": "$r(AC)\\le r(C)$ 只够一半，拼接方向不能反",
        "statement": [
          "判断 $B=AC$ 的相关性时，$r(AC)\\le r(C)$ 只能给出「$C$ 不可逆 $\\Rightarrow B$ 相关」；要得到「$C$ 可逆 $\\Rightarrow B$ 无关」必须额外使用 $A$ 列满秩，此时 $r(AC)=r(C)$。",
          "同理，拼接结论只能由长组的相关性推短组，不能由短组推长组。"
        ],
        "conditions": [
          "两个易错点都出在「方向」上：不等式与蕴含式都只有单向。"
        ],
        "conclusion": [
          "例：取 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$（非列满秩），$C=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$ 可逆，但 $AC=O$，$r(AC)=0\\ne r(C)$。"
        ],
        "derivation": [
          "结论：不等式的方向决定了只能推出什么；「$C$ 可逆 $\\Rightarrow$ 无关」依赖等式 $r(AC)=r(C)$ 及其前提。",
          "拼接结论同理：相关由长推短，无关由短推长。"
        ],
        "pitfalls": [
          "先看清是等式还是不等式，再决定能否用「可逆 $\\iff$ 无关」。"
        ],
        "source": "课件 12，第 19 页、第 58 页"
      }
    ]
  }
];
