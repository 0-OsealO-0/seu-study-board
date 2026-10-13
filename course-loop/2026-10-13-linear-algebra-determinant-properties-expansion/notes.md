# 线性代数 2026-10-13 课堂笔记

## 资料来源

- `课件5（10月08日）.pdf` 第 1-49 页：初等变换求逆、矩阵方程、行列式定义（衔接回顾）。
- `课件6（10月13日）.pdf` 第 1-51 页：行列式性质、按行（列）展开、行列式计算。

> 课件 5 已在 `course-loop/2026-10-08-linear-algebra-inverse-equations-determinants/` 单独归档。本页只做衔接回顾，新的结构化知识点来自课件 6。

## 一、行列式的基本性质

### 1. 转置不变

对方阵 `A`，

\[
|A^T|=|A|.
\]

因此关于“行”成立的性质，可以按同样方式转到“列”。

### 2. 换行或换列变号

互换行列式中的两行，行列式变号；互换两列也变号。

\[
\begin{vmatrix}
a&b\\
c&d
\end{vmatrix}
=ad-bc,
\qquad
\begin{vmatrix}
c&d\\
a&b
\end{vmatrix}
=cb-da=-(ad-bc).
\]

推论：若两行或两列完全相同，则行列式为 `0`。

### 3. 单行或单列公因子可提出

只有一行或一列同时含有公因子 `k` 时：

\[
\begin{vmatrix}
\cdots&\cdots&\cdots\\
ka_{i1}&ka_{i2}&\cdots&ka_{in}\\
\cdots&\cdots&\cdots
\end{vmatrix}
=
k
\begin{vmatrix}
\cdots&\cdots&\cdots\\
a_{i1}&a_{i2}&\cdots&a_{in}\\
\cdots&\cdots&\cdots
\end{vmatrix}.
\]

对 `n` 阶方阵整体数乘时：

\[
|kA|=k^n|A|.
\]

易错：`|kA|` 不是 `k|A|`。

### 4. 单行或单列的加性

如果某一行（列）的元素分别是两项之和，而其他行（列）保持不变，则行列式可以拆分：

\[
\begin{vmatrix}
a_{11}+b_{11}&a_{12}+b_{12}\\
a_{21}&a_{22}
\end{vmatrix}
=
\begin{vmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{vmatrix}
+
\begin{vmatrix}
b_{11}&b_{12}\\
a_{21}&a_{22}
\end{vmatrix}.
\]

行列式对单行或单列具有线性性，但一般没有

\[
|A+B|=|A|+|B|.
\]

### 5. 倍加变换不改变行列式

把某一行加上另一行的 `k` 倍，或把某一列加上另一列的 `k` 倍，行列式不变：

\[
r_i\leftarrow r_i+kr_j,
\qquad
D\text{ 不变}.
\]

这类操作是化上三角行列式的主力。

### 6. 两行或两列成比例时行列式为零

若两行或两列成比例，则 `D=0`。

## 二、分块三角行列式

若 `A,B` 为方阵，则：

\[
\begin{vmatrix}
A&C\\
O&B
\end{vmatrix}
=|A||B|,
\qquad
\begin{vmatrix}
A&O\\
C&B
\end{vmatrix}
=|A||B|.
\]

分块对角矩阵：

\[
\begin{vmatrix}
A_1&0&\cdots&0\\
0&A_2&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&A_s
\end{vmatrix}
=|A_1||A_2|\cdots|A_s|.
\]

适用要求：对角位置和被拆成的行列式都必须是方阵。

## 三、行列式的乘法性质

对同阶方阵 `A,B`：

\[
|AB|=|A||B|.
\]

推广到多个同阶方阵：

\[
|A_1A_2\cdots A_s|=|A_1||A_2|\cdots|A_s|.
\]

注意：常规形式要求同阶方阵。若两个矩阵不同型，不能直接把 `|AB|=|A||B|` 当公式使用；必要时先补零块化为同阶方阵。

## 四、初等矩阵的行列式

三类初等矩阵对应三种行列式变换：

\[
|E(i,j)|=-1,
\qquad
|E(i(k))|=k,
\qquad
|E(i,j(k))|=1.
\]

因此：

\[
|E(i,j)A|=-|A|,
\qquad
|E(i(k))A|=k|A|,
\qquad
|E(i,j(k))A|=|A|.
\]

## 五、行列式按任意行或列展开

设 `A=(a_{ij})_{n\times n}`，`n\ge2`，则：

\[
|A|=\sum_{j=1}^{n}a_{ij}A_{ij}
\]

是按第 `i` 行展开；

\[
|A|=\sum_{i=1}^{n}a_{ij}A_{ij}
\]

是按第 `j` 列展开。

这里 `A_{ij}` 是元素 `a_{ij}` 的代数余子式：

\[
M_{ij}\text{ 为余子式},\qquad
A_{ij}=(-1)^{i+j}M_{ij}.
\]

计算策略：优先选含 `0` 最多的一行或一列展开。

## 六、异行或异列展开

当 `i\ne j` 时：

\[
\sum_{k=1}^{n}a_{ik}A_{jk}=0,
\qquad
\sum_{k=1}^{n}a_{ki}A_{kj}=0.
\]

可以统一写成：

\[
\sum_{k=1}^{n}a_{ik}A_{jk}=\delta_{ij}|A|,
\qquad
\sum_{k=1}^{n}a_{ki}A_{kj}=\delta_{ij}|A|,
\]

其中克罗内克符号：

\[
\delta_{ij}=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
\]

记忆：同行或同列代数余子式展开得到 `|A|`，异行或异列得到 `0`。

## 七、代数余子式矩阵与行列式单位化

记 `C=(A_{ij})` 为代数余子式矩阵，则：

\[
AC^T=C^TA=|A|E.
\]

这个式子把行列式、代数余子式与矩阵乘法连接起来，是后续伴随矩阵公式的来源。

## 八、高阶行列式的常用计算方法

### 1. 化三角形

用倍加变换制造零，把行列式化为上（下）三角形式：

\[
D=a_{11}a_{22}\cdots a_{nn}.
\]

操作时分别跟踪：

1. 换行：产生负号。
2. 某一行乘 `k`：产生因子 `k`。
3. 倍加 `r_i+kr_j`：行列式不变。

### 2. 四阶例题

课件例：

\[
D=
\begin{vmatrix}
-1&2&0&6\\
2&-5&1&2\\
1&1&0&3\\
4&-6&1&2
\end{vmatrix}=9.
\]

把第一行分别消去其他行的对应元素后得到上三角行列式，最后计算主对角线乘积。

### 3. 对角为 x、其余为 a 的 n 阶行列式

\[
D_n=
\begin{vmatrix}
x&a&\cdots&a\\
a&x&\cdots&a\\
\vdots&\vdots&\ddots&\vdots\\
a&a&\cdots&x
\end{vmatrix}
=[x+(n-1)a](x-a)^{n-1}.
\]

方法：先把所有行加到第一行，提出 $x+(n-1)a$，再用倍加变换把第一列以外元素消去。

## 九、范德蒙行列式

\[
D_n=
\begin{vmatrix}
1&1&\cdots&1\\
a_1&a_2&\cdots&a_n\\
a_1^2&a_2^2&\cdots&a_n^2\\
\vdots&\vdots&\ddots&\vdots\\
a_1^{n-1}&a_2^{n-1}&\cdots&a_n^{n-1}
\end{vmatrix}
=
\prod_{1\le i<j\le n}(a_j-a_i).
\]

例如：

\[
D_2=a_2-a_1,
\]

\[
D_3=(a_2-a_1)(a_3-a_1)(a_3-a_2),
\]

\[
D_4=(a_2-a_1)(a_3-a_1)(a_4-a_1)(a_3-a_2)(a_4-a_2)(a_4-a_3).
\]

证明思路：验证 `n=2` 后，逐列消元提出差因子，剩余部分化为 `n-1` 阶范德蒙行列式，再使用归纳假设。

## 十、课堂易错点

1. 换行或换列后忘记负号。
2. 把单行公因子与整体数乘混为一谈，误写 `|kA|=k|A|`。
3. 把 `|A+B|` 误拆成 `|A|+|B|`。
4. 对非同阶方阵的乘积直接使用 `|AB|=|A||B|`。
5. 按某行展开时配错代数余子式，或把异行展开误算为 `|A|`。
6. 忘记代数余子式矩阵公式中的转置。
7. 范德蒙行列式的差因子顺序写反。
8. 计算高阶行列式时中途丢掉换行符号或倍乘因子。

## 十一、今日复习动作

1. 完成 `review-questions.html` 中的 15 题，先不查答案。
2. 导入今日 Anki 卡包，重点刷“行列式性质”和“按行/列展开”。
3. 打开 `linear-algebra-knowledge-review-single.html`，搜索 `行列式`、`范德蒙`、`代数余子式`，核对 1.6 新增条目。
4. 完成课堂纸笔练习：用初等变换计算一个四阶行列式，并写出每一步的符号和倍率变化。
