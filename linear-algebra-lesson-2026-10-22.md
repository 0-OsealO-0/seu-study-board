# 线性代数课堂记录：2026-10-22

## 课程信息

- 教材范围：第一章《矩阵》，矩阵的秩后续内容。
- 课件：`课件9（10月22日）.pdf`，10 页。
- 主题：矩阵秩的不等式。
- 课前基础：课件 8 的秩定义、初等变换保秩与等价标准形。

## 本课主线

1. 由分块矩阵 `(A,B)` 的子式和行阶梯形得到
   `max{r(A),r(B)}≤r(A,B)≤r(A)+r(B)`。
2. 通过列变换 `(A+B,B)→(A,B)` 得到
   `r(A+B)≤r(A)+r(B)`。
3. 用等价标准形证明乘积的秩上界
   `r(AB)≤min{r(A),r(B)}`。
4. 证明秩 1 矩阵的充要条件：
   `r(A)=1 ⇔ A=ξη`，其中两个向量均非零。
5. 用可逆分块变换证明 Sylvester 秩不等式
   `r(AB)≥r(A)+r(B)-n`。
6. 由 Sylvester 不等式推出零积结论
   `AB=O ⇒ r(A)+r(B)≤n`。
7. 用上下界夹逼证明幂等矩阵满足
   `A²=A ⇒ r(A)+r(E-A)=n`。

## 已生成学习材料

- 课堂笔记：`course-loop/2026-10-22-linear-algebra-rank-inequalities/notes.md`
- 12 题复习页：`course-loop/2026-10-22-linear-algebra-rank-inequalities/review-questions.html`
- 14 张 Anki 卡：`course-loop/2026-10-22-linear-algebra-rank-inequalities/linear-algebra-2026-10-22.apkg`
- 结构化资料：`linear-algebra-knowledge-review/index.html`
- 手机离线版：`linear-algebra-knowledge-review-single.html`

## 复习安排

- T+1：2026-10-23，闭卷回忆四条核心秩不等式。
- T+3：2026-10-25，重做秩 1 矩阵与零积判断题。
- T+7：2026-10-29，独立重建 Sylvester 不等式与幂等矩阵证明。
