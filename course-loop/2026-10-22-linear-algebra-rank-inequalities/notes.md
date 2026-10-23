# 线性代数 2026-10-22 课堂笔记

## 资料来源

- `课件9（10月22日）.pdf`，10 页。
- 主题：矩阵秩的不等式。
- 前半部分承接课件 8 的矩阵秩定义、初等变换保秩和等价标准形。
- 本次不包含新的考试时间或成绩比例信息。

## 一、分块矩阵 (A,B) 的秩

设 `A` 为 `s×m` 矩阵，`B` 为 `s×n` 矩阵，则

\[
\max\{r(A),r(B)\}\le r(A,B)\le r(A)+r(B).
\]

### 1. 下界

`A` 与 `B` 的任意子式，也是分块矩阵 `(A,B)` 的子式，因此

\[
r(A)\le r(A,B),\qquad r(B)\le r(A,B).
\]

于是

\[
\max\{r(A),r(B)\}\le r(A,B).
\]

### 2. 上界

利用转置和行阶梯形：

1. 分别用可逆矩阵把 `A^T`、`B^T` 化为行阶梯形。
2. 分块对角矩阵 `diag(P,Q)` 可逆，乘在 `[[A^T],[B^T]]` 左侧不改变秩。
3. 化得的纵向拼接阶梯形，其非零行数不超过 `r(A^T)+r(B^T)`。
4. 因为 `r(A^T)=r(A)`、`r(B^T)=r(B)`，得到上界。

这是秩的估计式，通常不是等式。

## 二、矩阵和的秩上界

设 `A,B` 均为 `m×n` 矩阵，则

\[
r(A+B)\le r(A)+r(B).
\]

证明入口是把 `(A+B,B)` 化为 `(A,B)`：

\[
(A+B,B)
\xrightarrow{c_j\leftarrow c_j-c_{n+j}}
(A,B).
\]

列倍加不改变秩，所以

\[
r(A+B)\le r(A+B,B)=r(A,B)\le r(A)+r(B).
\]

注意：`A` 与 `B` 的列空间可能相互抵消，因此一般不能写成等号。

## 三、矩阵乘积的秩上界

设 `A` 为 `s×n` 矩阵，`B` 为 `n×t` 矩阵，则

\[
r(AB)\le \min\{r(A),r(B)\}.
\]

### 证明思路

设 `r(A)=r`，利用等价标准形

\[
A=P\begin{pmatrix}E_r&O\\O&O\end{pmatrix}Q,
\]

其中 `P,Q` 可逆。设 `QB` 按上下分块为 `[[Q_1],[Q_2]]`，其中 `Q_1` 为 `r×t` 矩阵，则

\[
r(AB)
=r\left(
\begin{pmatrix}E_r&O\\O&O\end{pmatrix}QB
\right)
=r(Q_1)\le r=r(A).
\]

再对 `(AB)^T=B^T A^T` 使用同一上界：

\[
r(AB)=r(B^T A^T)\le r(B^T)=r(B).
\]

因此 `r(AB)≤min{r(A),r(B)}`。

## 四、秩 1 矩阵的充要条件

设 `A` 为 `s×n` 矩阵，则

\[
r(A)=1
\iff
A=\xi\eta,
\]

其中 `ξ` 为非零 `s` 维列向量，`η` 为非零 `n` 维行向量。

### 1. 必要性

若 `r(A)=1`，存在可逆矩阵 `P,Q` 使

\[
A=P\begin{pmatrix}
1&0&\cdots&0\\
0&0&\cdots&0\\
\vdots&\vdots&&\vdots\\
0&0&\cdots&0
\end{pmatrix}Q.
\]

令 `ξ` 为 `P` 的第一列，`η` 为 `Q` 的第一行，则 `A=ξη`，且两者均非零。

### 2. 充分性

若 `A=ξη`，由乘积秩上界

\[
r(A)=r(\xi\eta)\le r(\xi)=1.
\]

又因 `ξ` 与 `η` 均非零，存在某对 `i,j` 使 `a_i≠0,b_j≠0`，从而 `a_i b_j` 是 `A` 的非零元素，所以 `r(A)≥1`。于是 `r(A)=1`。

## 五、Sylvester 秩不等式

设 `A` 为 `s×n` 矩阵，`B` 为 `n×t` 矩阵，则

\[
r(AB)\ge r(A)+r(B)-n.
\]

等价写法：

\[
r(A)+r(B)\le r(AB)+n.
\]

### 分块证明

有恒等式

\[
\begin{pmatrix}
E_s&-A\\
O&E_n
\end{pmatrix}
\begin{pmatrix}
A&O\\
E_n&B
\end{pmatrix}
\begin{pmatrix}
E_n&B\\
O&-E_t
\end{pmatrix}
=
\begin{pmatrix}
O&AB\\
E_n&O
\end{pmatrix}.
\]

左右两个分块因子均可逆，因此不改变中间矩阵的秩。

中间矩阵是分块三角矩阵：

\[
r\begin{pmatrix}
A&O\\
E_n&B
\end{pmatrix}
=r(A)+r(B).
\]

右端是含单位块的反对角矩阵：

\[
r\begin{pmatrix}
O&AB\\
E_n&O
\end{pmatrix}
=r(AB)+n.
\]

所以

\[
r(A)+r(B)=r(AB)+n,
\]

移项即得 Sylvester 秩不等式。课堂上的这一串操作实质是构造可逆分块变换。

## 六、零积推论

在 Sylvester 秩不等式的维数条件下，若

\[
AB=O,
\]

则 `r(AB)=0`，于是

\[
r(A)+r(B)\le n.
\]

反向命题不成立：`r(A)+r(B)≤n` 不能保证 `AB=O`。

## 七、幂等矩阵的秩分解

设 `A` 为 `n` 阶方阵，且

\[
A^2=A.
\]

证明：

\[
r(A)+r(E-A)=n.
\]

### 1. 先证下界

因为

\[
A+(E-A)=E,
\]

使用矩阵和的秩上界：

\[
n=r(E)=r(A+E-A)\le r(A)+r(E-A).
\]

### 2. 再证上界

因为

\[
A^2=A
\iff
A(E-A)=O,
\]

使用零积推论：

\[
r(A)+r(E-A)\le n.
\]

两个方向夹逼，得到

\[
r(A)+r(E-A)=n.
\]

## 八、方法总结

1. 拼接矩阵：先判断下界 `max{r(A),r(B)}`，再用中间维数或阶梯形估计上界。
2. 矩阵和：通过列变换将 `(A+B,B)` 化为 `(A,B)`。
3. 矩阵乘积：先用等价标准形证明单侧上界，再对转置得到另一侧。
4. 低秩结构：秩 1 矩阵写成非零列向量与非零行向量的外积。
5. 乘积下界：Sylvester 不等式给出 `r(A)+r(B)-n`。
6. 零积：优先考虑 `r(AB)=0` 和 Sylvester 推论。
7. 幂等矩阵：下界用 `A+(E-A)=E`，上界用 `A(E-A)=O`。

## 九、易错点

1. 把 `r(A+B)≤r(A)+r(B)` 误写成等号。
2. 把 `r(AB)≤min{r(A),r(B)}` 当作完整刻画，漏掉 Sylvester 下界。
3. 记错 Sylvester 中的 `n`：它是内部维数，不是 `A` 或 `B` 的任意秩。
4. 由 `r(A)+r(B)≤n` 反推 `AB=O`，这是错误逆命题。
5. 秩 1 判据中只写 `A=ξη`，漏掉 `ξ,η` 均非零。
6. 用分块矩阵证明时，没有说明左右因子为何可逆。
7. 幂等矩阵只证出一个方向，没有同时使用和的上界与零积的上界。

## 十、课后动作

1. 完成 `review-questions.html` 中的 12 题，先不查答案。
2. 导入 `linear-algebra-2026-10-22.apkg`，重点刷 Sylvester 公式和零积推论。
3. 在纸笔上重建 `r(A+B)≤r(A)+r(B)` 与 Sylvester 不等式的证明。
4. 打开 `linear-algebra-knowledge-review-single.html`，搜索“Sylvester”“零积”“幂等”，核对新增条目。
