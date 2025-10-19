# Game

## Install

- [使用国内镜像安装 Mathlib/Lean4](https://zhuanlan.zhihu.com/p/680690436).
- [Installing Lean 4 on Windows](https://leanprover-community.github.io/install/windows.html).

## Tactics


```
rfl: reflection 反身性
rw: rewrite
```

## Natural Number Game

### Tutorial World

- [【Lean4】自然数游戏：教程关卡](https://zhuanlan.zhihu.com/p/707376015).

第1/8关：介绍了rfl策略的使用，rfl即等式的反身性
```
-- 目标： 37x + q = 37x + q
rfl -- 由等式的反身性，证明完毕！
```

第2/8关：介绍了rw策略的使用
```
-- 目标： 2y = 2(x+7)
rw [h] -- 按照前提h重写得： 2(x+7) = 2(x+7)
rfl -- 由等式的反身性，证明完毕！
```

第3/8关：证明2是0的后继的后继
```
-- 目标： 2 = S(S(0))
rw [two_eq_succ_one] -- 按照2的定义重写得： S(1) = S(S(0))
rw [one_eq_succ_zero] -- 按照1的定义重写得： S(S(0)) = S(S(0))
rfl -- 由等式的反身性，证明完毕！
```


第4/8关：再次证明2是0的后继的后继，介绍了rw的进阶用法
```
-- 目标： 2 = S(S(0))
rw [<- one_eq_succ_zero] -- 按照1的定义重写得： 2 = S(1)
rw [<- two_eq_succ_one] -- 按2的定义重写得： 2 = 2
rfl -- 由等式的反身性，证明完毕！
```

第5/8关：定义了自然数加法
```
-- 目标： a + (b + 0) + (c + 0) = a + b + c
rw [add_zero] -- 按照加法定义第一条重写得： a + b + (c + 0) = a + b + c
rw [add_zero] -- 按照加法定义第一条重写得： a + b + c = a + b + c
rfl -- 由等式的反身性，证明完毕！
```

第6/8关：介绍了rw的进阶用法
```
 -- 目标： a + (b + 0) + (c + 0) = a + b + c
rw [add_zero c] -- 按照加法定义第一条重写c+0=c得： a + (b + 0) + c = a + b + c
rw [add_zero] -- 按照加法定义第一条重写得： a + b + c = a + b + c
rfl -- 由等式的反身性，证明完毕！
```

第7/8关：证明n的后继等于n+1
```
-- 目标： S(n) = n + 1
rw [one_eq_succ_zero] -- 按照1的定义重写得： S(n) = n + S(0)
rw [add_succ] -- 按照加法定义第二条重写得： S(n) = S(n+0)
rw [add_zero] -- 按照加法定义第一条重写得： S(n) = S(n)
rfl -- 由等式的反身性，证明完毕！
```

第8/8关：证明2+2=4，介绍了rw的进阶用法
```
-- 目标： 2 + 2 = 4
nth_rewrite 2 [two_eq_succ_one] -- 按2的定义重写第二个2得： 2 + S(1) = 4
rw[add_succ] -- 按照加法定义第二条重写得： S(2 + 1) = 4
rw[one_eq_succ_zero] -- 按1的定义重写得： S(2 + S(0)) = 4
rw[add_succ] -- 按照加法定义第二条重写得： S(S(2+ 0)) = 4
rw[add_zero] -- 按照加法定义第一条重写得： S(S(2)) = 4
rw[four_eq_succ_three] -- 按照4的定义重写得： S(S(2)) = S(3)
rw[three_eq_succ_two] -- 按照3的定义重写得： S(S(2)) = S(S(2))
rfl -- 由等式的反身性，证明完毕！
```

### Addition World

- [【Lean4】自然数游戏：加法关卡](https://zhuanlan.zhihu.com/p/708598164).


数学归纳法
加法关卡主要是教你使用induction策略，也即数学归纳法。具体使用方法如下：
```
induction n with d hd -- 对n使用数学归纳法
-- n=0 的证明
......
-- 现在假设 n=d 时命题成立，结合归纳假设 hd 证明 n=d+1 时命题也成立
......
```


第1/5关 介绍了induction策略的使用，证明0+n=n
因此需要使用数学归纳法进行证明，最终代码如下：
```
-- 目标： 0+n=n
induction n with d hd -- 对n使用数学归纳法
-- 归纳奠基，证明： 0+0=0
rw [add_zero] -- 按加法定义第一条重写得： 0=0
rfl -- 由等式的反身性，证明完毕！
-- 归纳假设为 0+d=d，证明： 0+S(d)=S(d)
rw [add_succ] -- 按加法定义第二条重写得： S(0+d) = S(d)
rw [hd] -- 使用归纳假设得： S(d) = S(d)
rfl -- 由等式的反身性，证明完毕！
```


```
Oh no! On the way to add_comm, a wild succ_add appears. 
succ_add a b is the proof that (succ a) + b = succ (a + b) for a and b numbers. 
This result is what's standing in the way of x + y = y + x. 
Again we have the problem that we are adding b to things, 
so we need to use induction to split into the cases where b = 0 and b is a successor.
```

第2/5关 证明S(a)+b=S(a+b)
因此需要使用数学归纳法进行证明，最终代码如下：
```
-- 目标： S(a)+b=S(a+b)
induction b with d hd -- 对b使用数学归纳法
-- 归纳奠基，证明： S(a)+0=S(a+0)
rw [add_zero] -- 按加法定义第一条重写得： S(a)=S(a+0)
rw [add_zero] -- 同上，得： S(a) = S(a)
rfl -- 由等式得反身性，证明完毕！
-- 归纳假设为 S(a)+d=S(a+d)，证明： S(a)+S(d)=S(a+S(d))
rw [add_succ] -- 按加法定义第二条重写得： S(S(a)+d)=S(a+S(d))
rw [add_succ] -- 同上，得： S(S(a)+d)=S(S(a+d))
rw [hd] -- 使用归纳假设得： S(S(a+d))=S(S(a+d))
rfl -- 由等式的反身性，证明完毕！
```

第3/5关 证明加法交换律
终于可以证明加法交换律了，最终代码如下：
```
-- 目标： a+b=b+a
induction b with d hd -- 对b使用数学归纳法
-- 归纳奠基，证明： a+0=0+a
rw [add_zero] -- 按加法定义第一条重写得： a=0+a
rw [zero_add] -- 按第1关中证明的结论重写得： a=a
rfl -- 由等式的反身性，证明完毕！
-- 归纳假设为 a+d=d+a，证明： a+S(d)=S(d)+a
rw [add_succ] -- 按加法定义第二条重写得： S(a+d)=S(d)+a
rw [succ_add] -- 按第2关中证明的结论重写得： S(a+d)=S(d+a)
rw [hd] --使用归纳假设得： S(d+a)=S(d+a)
rfl -- 由等式的反身性，证明完毕！
```

### Algorithm World

You can make your own tactics in Lean. This code here
```
macro "simp_add" : tactic => `(tactic|(
  simp only [add_assoc, add_left_comm, add_comm]))
was used to create a new tactic simp_add, which runs simp only [add_assoc, add_left_comm, add_comm]. Try running simp_add to solve this level!
```


```
apply Subset.antisymm
intro x
intro h
rewrite[mem_compl_iff] at h
push_neg at h
```

```
apply Subset.antisymm
intro x
intro h
rewrite[mem_compl_iff] at h
by_contra h1
exact h h1
```

```
constructor
exact compl_subset_compl_of_subset
```


```
apply Iff.intro
intro h
apply compl_subset_compl_of_subset at h
exact h
```

```
intro x
intro h3
have h4 : x ∈ B := h1 h3
have h5 : x ∈ C := h2 h3
apply And.intro h4 h5
```


```
intro x
intro h
rewrite[mem_inter_iff] at h
exact And.intro h.right h.left
```


```
apply Iff.intro
intro h1
rewrite[mem_inter_iff] at h1
rewrite[mem_inter_iff] at h1
rewrite[mem_inter_iff]
```

```
Objects:
U: Type
x: U
AB: Set U
Assumptions:
h1: x ∈ A
h2: x ∈ B
Goal:
x ∈ A ∩ B
apply And.intro h1 h2
```


```
h: x ∈ A ∩ B ∧ x ∈ C
have h1 : x ∈ C := h
```

```
Objects:
U: Type
ABC: Set U
x: U
Assumptions:
h1: x ∈ C
h2: x ∈ A
h3: x ∈ B
Goal:
x ∈ A ∧ x ∈ B ∧ x ∈ C
```


```
ext x
apply Iff.intro
intro h
rewrite[mem_inter_iff] at h
have h1 : x ∈ C := h.right
rewrite[mem_inter_iff] at h
have h2 : x ∈ A := h.left.left
have h3 : x ∈ B := h.left.right
rewrite[mem_inter_iff]
rewrite[mem_inter_iff]
have hAB : x ∈ A ∧ x ∈ B := And.intro h2 h3
exact And.intro h2 (And.intro h3 h1)
```

```
ext x
apply Iff.intro
intro h
rewrite[mem_inter_iff] at h
rewrite[mem_inter_iff] at h
rewrite[mem_inter_iff]
rewrite[mem_inter_iff]
have h1 : x ∈ A := h.left.left
have h2 : x ∈ B := h.left.right
have h3 : x ∈ C := h.right
exact And.intro h1 (And.intro h2 h3)
```

```
intro h
rewrite[mem_inter_iff] at h
rewrite[mem_inter_iff] at h
rewrite[mem_inter_iff]
rewrite[mem_inter_iff]
have h1 : x ∈ A := h.left
have h2 : x ∈ B := h.right.left
have h3 : x ∈ C := h.right.right
exact And.intro (And.intro h1 h2) h3
```


```
Objects:
U: Type
AB: Set U
x: U
Assumptions:
h: x ∈ B
Goal:
x ∈ A ∨ x ∈ B
```

```
  ext x
  rewrite [mem_compl_iff, mem_union]
  rewrite [mem_inter_iff, mem_compl_iff, mem_compl_iff]
  apply Iff.intro
  intro h
  push_neg at h
  exact h
  intro h
  push_neg
  exact h
```

```
ext x
apply Iff.intro
intro h
rewrite[mem_compl_iff] at h
rewrite[mem_union] at h
rewrite[mem_inter_iff]
rewrite[mem_compl_iff]
rewrite[mem_compl_iff]
push_neg at h
exact h
intro h
rewrite[mem_inter_iff] at h
rewrite[mem_compl_iff] at h
rewrite[mem_compl_iff]
rewrite[mem_union]
push_neg
exact h
```

```
ext x
rewrite[mem_inter_iff]
rewrite[mem_union]
rewrite[mem_union]
rewrite[mem_inter_iff]
apply Iff.intro
intro h
```

```
  ext x
  apply Iff.intro
  intro h
  rewrite [mem_inter_iff] at h
  rewrite [mem_union]
  rewrite [mem_union] at hBC
  rcases hBC with hB | hC
  apply Or.inl
```

```
ext x
apply Iff.intro
intro h
rewrite [mem_inter_iff] at h
rewrite [mem_union]
have hBC : x ∈ B ∪ C := h.right
rewrite [mem_union] at hBC
rcases hBC with hB | hC
apply Or.inl
exact And.intro h.left hB
apply Or.inr
exact And.intro h.left hC
intro h
rewrite[mem_union] at h
rewrite[mem_inter_iff]
rcases h with hB | hC
rewrite[mem_inter_iff] at hB
apply And.intro
exact hB.left
rewrite[mem_union]
exact Or.inl hB.right
rewrite [mem_inter_iff] at hC
apply And.intro
exact hC.left
rewrite[mem_union]
exact Or.inr hC.right
```

```
rewrite [← compl_compl (A ∪ (B ∩ C))]
rewrite [compl_union]
rewrite [compl_inter B C]
rewrite [inter_distrib_left]
rewrite [compl_union]
rewrite [compl_inter]
rewrite [compl_inter]
rewrite [compl_compl]
rewrite [compl_compl]
rewrite [compl_compl]
rfl
```


```
intro x
intro h3
have h4 : x ∈ A ∪ C
rewrite[mem_union]
exact Or.inl h3
have h5 : x ∈ B ∪ C := h1 h4
rewrite [mem_union] at h5
rcases h5 with h5a | h5b
exact h5a
have h6 : x ∈ A ∩ C
rewrite [mem_inter_iff]
exact And.intro h3 h5b
have h7 : x ∈ B ∩ C := h2 h6
rewrite [mem_inter_iff] at h7
exact h7.left
```


```
intro x
rewrite[mem_sInter]
intro h2
exact h2 A h1
```

```
intro x
rewrite[mem_sInter]
rewrite[mem_sInter]
intro h2
intro t
intro h3
have h4 : t ∈ G := h1 h3
exact h2 t h4
```


```
ext x
rewrite [mem_inter_iff]
rewrite [mem_sInter]
apply Iff.intro
intro h
intro t
rewrite[mem_pair]
intro h1
rcases h1 with h1a | h1b
rewrite[h1a]
exact h.left
rewrite[h1b]
exact h.right

intro h
constructor
have h1 : A ∈ {A, B}
rewrite [mem_pair]
apply Or.inl
rfl

exact h A h1
have h1 : B ∈ {A, B}
rewrite [mem_pair]
apply Or.inr
rfl
exact h B h1
```

```
ext x
rewrite[mem_sInter]
rewrite[mem_inter_iff]
rewrite[mem_sInter]
rewrite[mem_sInter]
constructor
intro h
constructor
```


```
ext x
rewrite[mem_sInter]
rewrite[mem_inter_iff]
rewrite[mem_sInter]
rewrite[mem_sInter]
constructor
intro h
constructor
intro t
intro ht
have htf : t ∈ F ∪ G
apply Or.inl ht
exact h t htf
intro t
intro ht
have htf : t ∈ F ∪ G
apply Or.inr ht
exact h t htf
intro h
intro t
intro ht
rcases ht with ht1 | ht2
exact h.left t ht1
exact h.right t ht2
```

```
constructor
intro h
intro s
intro hs
intro x
intro hx
have x_in_sInter : x ∈ ⋂₀ F := h hx
rewrite[mem_sInter] at x_in_sInter
exact x_in_sInter s hs
intro h
intro x
intro hx
rewrite[mem_sInter]
intro t
intro ht
have ha : A ⊆ t := h t ht
exact ha hx
```

```
intro x
rewrite[mem_sInter]
intro h2
rewrite[mem_union]
by_cases hA : x ∈ A
exact Or.inl hA
right
rewrite[mem_sInter]
intro s
intro hs
have hAs : A ∪ s ∈ G := h1 s hs
have hx_As : x ∈ A ∪ s := h2 (A ∪ s) hAs
rewrite[mem_union] at hx_As
rcases hx_As with hx1 | hx2

by_contra h3
exact hA hx1
exact hx2
```


```
ext x
rewrite[mem_sUnion]
rewrite[mem_union]
rewrite[mem_sUnion]
rewrite[mem_sUnion]
constructor
intro h
obtain ⟨s, hs⟩ := h
obtain ⟨hsFG, hxs⟩ := hs
rcases hsFG with hF | hG
left
use s
right
use s

intro h
rcases h with hF | hG
obtain ⟨s, hs⟩ := hF
obtain ⟨hsF, hxs⟩ := hs
use s
rewrite[mem_union]
constructor
left
exact hsF
exact hxs
obtain ⟨s, hsG⟩ := hG
use s
constructor
rewrite[mem_union]
exact Or.inr hsG.left
exact hsG.right
```


```
ext x
constructor
intro h
obtain ⟨hxA, hxF⟩ := h
obtain ⟨s, hsF⟩ :=hxF
use A ∩ s
have h1 : ∃ u ∈ F, A ∩ s = A ∩ u
use s
constructor
```

```
ext x
apply Iff.intro
intro h1
rewrite [mem_sInter]
intro t
intro h2
rewrite [mem_setOf] at h2
rewrite [mem_compl_iff] at h1
rewrite [mem_sUnion] at h1
push_neg at h1
have h3 := h1 tᶜ h2
rewrite [mem_compl_iff] at h3
push_neg at h3
exact h3
rewrite [mem_sInter] at h1
rewrite [mem_compl_iff]
rewrite [mem_sUnion]
push_neg
intro t
intro h2
have h3 := h1 tᶜ
have h3a : tᶜ ∈ {A | Aᶜ ∈ F}
rewrite [mem_setOf]
rewrite [compl_compl]
exact h2
have h4 := h3 h3a
rewrite [mem_compl_iff] at h4
```

```
unfold Not at hnP
exact hnP hP
```

```
rw[not_and_or] at h1
```

```
Objects:
A B: Prop
Assumptions:
h: B ↔ A
Goal: A ↔ B
```

```
Objects:
A: Prop
Assumptions:
h4: A ↔ ¬A
Goal:False
```

```
Assumptions:
hAKn: A said A.isKnave
h: A.isKnight

cases isKnight_or_isKnave A
have hKnave : A.isKnave := knight_said hAKn h
exact not_isKnight_and_isKnave h hKnave

have hKnave : ¬A.isKnave := knave_said hAKn h

```

```
cases isKnight_or_isKnave A
have hKnave : A.isKnave := knight_said hAKn h
exact not_isKnight_and_isKnave h hKnave
have hKnave : ¬A.isKnave := knave_said hAKn h
exact hKnave h
```

```
have hA_said : A said A.isKnave := knight_said hB h1
have hA_said : ¬A.isKnave := dsl_iamknave(knight_said hB h1 )

have hKnave : A.isKnave := knight_said (knight_said hB h1) h2
have h3 : ¬A.isKnave := knave_said (knight_said hB h1) hA_said
```

```
have h1: B.isKnave
knave_to_knight
by_contra h1
have hA_said :A.isKnave
knave_to_knight
by_contra h2
have hKnave : A.isKnave := knight_said (knight_said hB h1) h2
exact not_isKnight_and_isKnave h2 hKnave
have h3 : ¬A.isKnave := knave_said (knight_said hB h1) hA_said
exact h3 hA_said
have h2: C.isKnight
by_contra h3
```

```
That's better, but you'd better send out those invites so you can get some responses!

have a := h1.left
have u := h2.right
exact and_intro a u
exact and_intro h1.left h2.right
exact and_intro (and_left h1) (and_right h2)
exact ⟨h1.left, h2.right⟩
```

```
have ha := h1.left
have hu := h2.right
have hau := and_intro ha hu
exact and_intro ha hu

have a := h1.left
have u := h2.right
exact and_intro a u
exact and_intro h1.left h2.right
exact and_intro (and_left h1) (and_right h2)
exact ⟨h1.left, h2.right⟩
```

```
exact λ r : R => ⟨λ s : S => r, λ ns : ¬S => r⟩
have so : S ∨ O := or_inl s
have h : (S ∨ O) := or_inl s
have h := or_inl s
have h := (or_inl p : P ∨ Q)
have h1 : C → O ∨ C
have h2 : O → O ∨ C
```

```
have h1 : C → O ∨ C := fun c : C => or_inr c
have h2 : O → O ∨ C := fun o : O => or_inl o
```

```
have h1 : C → O ∨ C := fun c : C => or_inr c
have h2 : O → O ∨ C := fun o : O => or_inl o
have oc : O ∨ C := or_elim h h1 h2
exact oc
```

```
exact or_elim h (fun g : G => or_inl g) (fun hu : H ∧ U => or_inr hu.left)
exact or_elim h.right (fun hh : H => or_inl ⟨h.left, hh⟩) (fun uu : U => or_inr ⟨h.left, uu⟩)  -- or_elim on h.right: 左分支 or_inl ⟨G, H⟩，右分支 or_inr ⟨G, U⟩
have g := h.left
exact or_elim h.right
  (and_intro g ≫ or_inl)
  (and_intro g ≫ or_inr)
exact or_comm K I  
```

```
have h1 : K ∨ I → I ∨ K := GameLogic.or_comm.mp
have h2 : I ∨ K → I ∨ P := fun hk => or_elim hk (fun hi => or_inl hi) (fun hj => or_inr (h hj))

have h1 : K ∨ I → I ∨ K := GameLogic.or_comm.mp
have h2 : I ∨ K → I ∨ P := fun hk => or_elim hk (fun hi => or_inl hi) (fun hj => or_inr (h hj))
exact imp_trans h1 h2
```

```
Thinking of h₂ as Q → False, you can actually use your imp_trans theorem here.

exact λp ↦ h₂ (h₁ p)
exact imp_trans h₁ h₂
For the math-inclined, because the expression for an implication is a function, you can also use function composition.

exact h₂ ∘ h₁
```

```
exact fun (f : P ) =>  fun (a:A) => h(and_intro f a)
exact fun (f : P) => fun (a : A) => h (And.intro f a)
exact fun (f : P) => fun (a : A) => h (and_intro f a)
exact fun (f : P) => fun (a : A) => h (and_intro f a)
exact fun (f : P) =>  fun (a:A) => h(and_intro f a)
exact fun (f:P) (a:A) => h (and_intro f a)
exact iff_intro hsj hjs
exact ⟨hsj, hjs⟩
rw [← h1] at h2
exact h₂
```

```
exact ⟨
  λh₃ ↦ have ⟨a,c,np⟩ := h₂.mp (
    λh₄ ↦ h₃ (λ⟨hl₅,hr₅⟩ l ↦ h₄ ⟨
      λa ↦ or_elim
        (hl₅ a)
        or_inl
        (imp_trans h₁.mpr ≫ or_inr)
    ,
      λ_ ↦ hr₅ (or_inl l)
    ⟩ (h₁.mp l))
  )
  ⟨a, c, h₁.mp ≫ np⟩
,
  λ⟨a,c,nl⟩ _ ↦ false_elim (
    h₂.mpr
      ⟨a, c, h₁.mpr ≫ nl⟩
      λ_ _ ↦ c
  )
⟩
```


```
cases h1
cases h2
constructor
intro h3
constructor
apply and_left
apply mp_1
intro x
apply h3
intro ⟨pqnr,rpnq⟩ r
apply x
constructor
intro p
cases pqnr p
left
assumption
right
intro s
apply h
apply mpr
assumption
intro
intro q
apply rpnq
left
repeat assumption
apply mp
assumption
constructor
apply and_left
apply and_right
apply mp_1
intro x
apply h3
intro ⟨pqnr,rpnq⟩ r
apply x
constructor
intro p
cases pqnr p
left
assumption
right
intro s
apply h
apply mpr
assumption
intro sp
apply rpnq
cases sp
left
apply mpr
assumption
right
assumption
apply mp
assumption
apply modus_tollens
assumption
apply and_right
apply and_right
apply mp_1
intro x
apply h3
intro ⟨pqnr, rpnq⟩ r
apply x
constructor
intro p
cases pqnr p
left
assumption
right
intro
apply h
assumption
intro
apply rpnq
left
assumption
apply mp
assumption
intro ⟨p, q, nr⟩
intro
apply mpr_1
constructor
assumption
constructor
assumption
apply modus_tollens
repeat assumption
intro
intro
assumption
```


```
Robo
```

Lean4+Robo+Piazza+Level 2 / 13简单测试
```
simp
decide
```

Lean4+Robo+Piazza+Level 2 / 13简单测试
```
simp
decide
```

Lean4+Robo+Piazza+Level 3 / 13简单测试
```
Set: 如果那太简单了——你们认识这个陈述吗？
Du: A B C : Set ℕ 这里到底是什么意思？
Robo: 这简单地说，就是 A、B 和 C 是 ℕ 的子集。
Du: Set 意思是“subset”？
Robo: 如果你这么想，是的。
Du: 那么我大概认识这个陈述了。但不知道怎么在这里证明它。
Ext: 我可以告诉你！那里有个魔咒，名字和我一样！！
Robo: 啊，对了——ext x 将集合等式 A = B 替换为 x ∈ A ↔ x ∈ B。
```

```
ext x
simp
tauto
```

Lean4+Robo+Piazza+Level 4 / 13简单测试
```
Sub: 我也学到了一些东西：
Du: univ 到底是什么？
Robo: univ 是最大子集：所有自然数。
Du: 所以就是简单的 ℕ？
Robo: 嗯，是又不是。univ : Set ℕ 是“整个 ℕ”，但被视为 ℕ 的子集。
Ext、Fin、Set、Sub 和 Mem 睁大眼睛看着你们。
Set: 这怎么可能混淆呢！这里是一个蓝莓，这个是装满所有蓝莓的篮子，这个浆果就在这个篮子里。
Mem: 同样，5 是一个自然数 (5 : ℕ)，univ : Set ℕ 是所有自然数的集合，5 在这个集合中 (5 ∈ univ)。这有什么令人困惑的？
Robo（对你）：别为此烦恼。我建议你从 rw [eq_univ_iff_forall] 开始，这样你就能清楚看到到底在问什么。
Robo: 现在用 simp。你甚至可以直接用 simp [eq_univ_iff_forall]。
```

```
generalize
使用 generalize，你可以泛化一个证明目标——希望更高的抽象度允许更简单的证明。更精确地说，generalize h : a = b 将证明目标中所有 a 的出现替换为 b（并添加假设 h : a = b）。
示例
一个形式的目标
Even x ∨ ¬Even x
可以使用
generalize h : (Even x) = A
转换为
A ∨ ¬A
（然后简单地用 tauto 证明）。
```

```
rw [eq_univ_iff_forall]
simp
intro
generalize h : (Even x) = A
tauto
```

Lean4+Robo+Piazza+Level 5 / 13简单测试

```
Mem: 你们也觉得这个陈述又很令人困惑吗？
Du: 不，∅ 我认识。
Robo: 为了确保你完全理解，你也可以从 rw [eq_empty_iff_forall_not_mem] 开始。
或者用 simp [eq_empty_iff_forall_not_mem]，如果你想快速完成的话。
```

```
rw [eq_empty_iff_forall_not_mem]
intro a
by_contra h
simp at h
```

or
```
ext
simp
```

or
```
rw [eq_empty_iff_forall_not_mem]
simp
```

Lean4+Robo+Piazza+Level 6 / 13简单测试

```
Ext: 我喜欢这个等式。
Robo: 当然现在又用 simp。
关卡完成！🎉
Du（对 Robo）：为什么 ext 其实叫 ext？
Robo: 我怎么知道这小子名字从哪儿来？？
Du: 不，我是说这里的这个 ext！
Robo: 哦，这样。逻辑学家把两个集合只有当它们拥有相同元素时才相等的原则称为 extensionality。
而形式哲学家们大概从那里缩写成 ext，因为否则太长了。
```

```
·\·

对于两个子集 (A B : Set T)，A\B 是 A 和 B 的差集，由 A 中不在 B 中的所有元素组成。
```

```
ext
simp
tauto
```

Lean4+Robo+Piazza+Level 7 / 13简单测试

```
Set: 我也喜欢这个等价。
Du: 是的，我觉得我曾经学过这样——两个集合相等，如果它们相互包含。
Robo: 我不确定，但我觉得从 constructor 开始。
Robo: 把 A 替换成 B 试试。
Robo: 从这里开始，应该又能套用之前的模式了。
```

```
⊆
对于 A B : Set T，A ⊆ B 意味着 A 包含在 B 中。
使用 rw [subset_iff]，你可以将 A ⊆ B 重写为 ∀ x, x ∈ A → x ∈ B。
如果 A ⊆ B 是证明目标，你也可以直接使用 intro a ha 来选择一个元素 a，带有 ha : a ∈ A（然后证明 a ∈ B）。
如果 h : A ⊆ B 是一个假设，并且给定了元素 a 带有 ha : a ∈ A，你可以使用 have hb := h ha 来获得 hb : a ∈ B。
你将 ⊆ 写作为 \subset。
```

```
constructor
intro h
rw[h]
tauto
intro h
ext
constructor
intro h1
obtain ⟨ha, hb⟩ := h
have h2 := ha h1
assumption
intro h1
obtain ⟨k1, k2⟩ := h
have h2 := k2 h1
assumption
```

Lean4+Robo+Piazza+Level 8 / 13简单测试
```
Sub: 你说得对。我们应该多问问访客关于包含的关系。
Robo: 这不就是定义吗！
Robo（对你）：试试 tauto。或者直接 rfl。。
```

```
rfl
```

Or
```
tauto
```

Lean4+Robo+Piazza+Level 9 / 13简单测试
```
Sub: 哦，哦。只是一个定义！如果你们现在要用这样的包含关系工作呢？
Du: 我在这里也能用 ext 来论证吗？
Robo: 不，简单多了。简单地用 intro a 给你一个来自 A 的任意元素，然后证明它在 C 中。
但是也许你先用 rw [subset_iff] at * 将所有包含关系展开，这样你就能看到会发生什么。
```

```
intro a
rw [subset_iff] at *
intro h
have hb:= h₁ h
have hc:= h₂ hb
assumption
```


Lean4+Robo+Piazza+Level 10 / 13简单测试
```
Mem: 让我也再问一个问题吧！
Robo: 我会再次从 intro 开始。
关卡完成！🎉
Mem: 是的，太棒了，你们学得真快！
```

```
intro
intro h
simp at h
obtain h | h := h
tauto
simp
right
rw[h]
rw[<-odd_iff_not_even]
decide
```

Or
```
intro
intro h
simp at h
obtain h | h := h
tauto
simp
right
rw[h]
decide
```

Lean4+Robo+Piazza+Level 11 / 13简单测试

```
Mem: 嘿，Fin，你在那儿干嘛呢？
Fin 是圈子里最小的，到目前为止还没说过话。而且现在他好像刚从旁边的摊位偷了一个开心果。
Fin: 这不过是个小练习而已。
Mem: 什么练习？
Fin 这样解释道。
Du: 这里 Finset 到底是什么意思？
Robo: 这意味着 A 属于 ℕ 的有限子集。但这对问题其实没什么区别。左边是没 a 的 A，右边也是没 a 的 A。
```

```
翻译（中文）：
erase
对于一个有限子集 A : Finset T 和一个元素 a : T，erase A a 是 A \ {a} 的另一种写法。
如果 a 根本不在 A 中，显然 erase A a = A。
```

```
ext x
simp
tauto
```

Lean4+Robo+Piazza+Level 12 / 13简单测试

```
Fin: 没错。现在我把我的开心果放回去了。
```

```
ext x
simp
tauto
```

Lean4+Robo+Piazza+Level 13 / 13简单测试

```
Fin: 那么，你们觉得呢——现在所有开心果都回家了吗？
Fin: 为什么不做个情况区分，看 x = a 还是不是。
Fin: 是的，这样可以处理。
```

```
翻译（中文）：
erase
对于一个有限子集 A : Finset T 和一个元素 a : T，erase A a 是 A \ {a} 的另一种写法。
如果 a 根本不在 A 中，显然 erase A a = A。
```

```
ext b
simp
constructor
intro k
obtain h1 | ⟨ h2, h3 ⟩ := k  (obtain h1 | < h2, h3 > := k)
rw[h1]
assumption
assumption
intro hb
by_cases heq: b = a
left
assumption
constructor
assumption
assumption
```

Lean4+Robo+Luna+Level 1 / 10简单测试

```
你感觉有点措手不及，但还是试图开始对话。
你：很好，我们努力不搞乱。这里保持秩序很难吗？
Lina：例如，必须知道 n ≤ n 是真的。
Robo：rfl？
```

```
tauto
```

or
```
rfl
```

Lean4+Robo+Luna+Level 2 / 10简单测试

```
你感觉有点措手不及，但还是试图开始对话。
你：很好，我们努力不搞乱。这里保持秩序很难吗？
Lina：例如，必须知道 n ≤ n 是真的。
Robo：rfl？
```


```
omega
omega 策略可以证明，在 ℕ 或 ℤ 中，一个线性方程或不等式可以从给定的方程或不等式中推出。
与 linarith 不同，它也能处理（不）等式的逻辑连接。
```

```
omega
```


Lean4+Robo+Luna+Level 3 / 10简单测试

```
Lina：来试试这个吧！
你：情况区分？？
Robo：是的，你可以试试。例如，先 by_cases h_leq : a ≤ b，然后 by_cases h_lt : a < b。
你：然后呢？？
Lina（胜利地）：linarith！
关卡完成！🎉
Lina：顺便说一句，你们其实也可以直接说 apply lt_trichotomy。
```

```
linarith
linarith 策略可以证明，一个线性方程或不等式可以从给定的方程或不等式中推出。
它非常灵活，在 ℕ 和 ℝ 中都同样有效。但是，（不）等式必须是单独给出的，不能逻辑连接。
例如，一个假设形式为
h : m ≤ x → n < x
必须先用
rw [imp_iff_or_not] at h
改写成
h : n < x ∨ ¬m ≤ x
这样 linarith 才能处理它。
```

```
intro a b
by_cases h_leq : a ≤ b
by_cases h_lt : a < b
left
assumption
right
left
linarith
right
right
linarith
```

Lean4+Robo+Luna+Level 4 / 10简单测试

```
Lina：这里我还有点东西。
Ritha 似乎用她的眼睛想给你们某种信号。
关卡完成！🎉
Lina：是的，好吧，我的错误。
```

```
omega
```

Lean4+Robo+Luna+Level 5 / 10简单测试

```
Lina：再来一次同样的题，但现在在 ℝ 上！
你（对 Robo）：这里我用 omega 也 omega 不了，用 linarith 也 linarith 不动。
Robo：我觉得你只需稍微帮 linarith 一把。最好先用 intro 经典地拆解两个蕴涵。
Robo：现在你让假设 hx 更易读一点。试试 push_neg at hx？
Robo：嗯…… hx : m ≤ x → n < x 看起来还是不太理想。
但我们知道 → 是什么意思——试试用 rw [imp_iff_or_not] 改写一下！
Robo：好了。那更好。现在你可以再用 obtain 将 hx 分解成两个组成部分。
关卡完成！🎉
```

```
intro hn hx
push_neg at hx
rw [imp_iff_or_not] at hx
obtain hx | hx := hx
linarith
linarith
```


Lean4+Robo+Luna+Level 6 / 10简单测试

```
丽莎（Ritha）：我也可以试试吗？这里。
你（Du）：那 Icc 是什么啊？
丽莎（Ritha）：就是那个左闭右闭的区间，也就是封闭的。
罗博（Robo）：你大概会把 Icc a b 写成 [a, b]，或者 {a, a+1, …, b}，
因为我们现在又回到了自然数中。要证明的是：
[a, b] ∪ {b+1} = [a, b+1]
罗博（Robo）：集合的相等性需要用外延法（extensional equality）来证明。
罗博（Robo）：顺便再加个简化（simp）步骤。
丽莎（Ritha） 又开始画一些奇怪的符号。
```

```
ext
simp
omega
```

Lean4+Robo+Luna+Level 7 / 10简单测试

```
丽娜（Lina）：够了，别再提 omega 了，现在轮到我了。
你（Du）：我得先把这个写下来。给定的是：Robo？？
丽娜（Lina） 咧嘴一笑。
```

```
linarith
```

Lean4+Robo+Luna+Level 8 / 10简单测试

```
丽莎（Ritha）：现在又轮到我了！
```

```
intro
simp at a
omega
```

Lean4+Robo+Luna+Level 9 / 10简单测试

```
丽娜（Lina）：现在又轮到我了。
你（Du）：嗯，已经很清楚这里可以用哪个 b 了。
罗博（Robo）：如果你觉得这么清楚，那就先从 use … 开始吧。
然后你就能好好用上 lt_trichotomy 了。比如这样：
obtain h | h | h := lt_trichotomy a c
关卡完成！🎉
丽娜（Lina）：你们做得很好！可惜你们得继续往前飞了。
但如果你们再多留一会儿，就会把我们的作息时间完全打乱。
```

```
use (a + c) / 2
obtain k | k | h := lt_trichotomy a c
left
constructor
linarith
linarith
contradiction
right
constructor
linarith
linarith
```

Lean4+Robo+Luna+Level 10 / 10简单测试

```
丽莎（Ritha，对丽娜）：拜托，让我也再问一个问题吧……
丽娜（Lina）：好吧，就一个……但别又是关于 omega 的！
丽莎（Ritha） 睁大眼睛，恳求地看着丽娜。
丽娜（Lina）：如果非要不可的话。但快点！我们现在真的没时间了！
罗博（Robo）：也许这里再用一次 subset_iff 会有帮助。如果什么都不行，就试试 simp。
罗博（Robo）：你肯定要某种方式利用假设 a。
你可以比如把 a 应用到不等式 a₁ ≤ b₁ 上，或者到 a₁ ≤ a₁ 上！
（你最好用 have 来表述不等式 a₁ ≤ a₁。）
```

```
∀（全称量词）
全称量词：如果 P : A → Prop 是一个谓词，
那么 ∀ a : A, P a 就是这样一个陈述：对于 A 中的所有 a（更精确地说，对于所有类型为 A 的 a），陈述 P a 都是真的。
∀ 作为证明目标
要证明一个形如 ∀ a : A, … 的陈述，你首先用 intro a 选择一个任意的元素 a。
∀ 作为假设
如果 h : ∀ a : A, P a 是一个假设，并且 a₀ : A 是一个具体的元素，
那么 h a₀ 就是 P a₀ 的记法。你也可以用 specialize h a₀ 将给定的假设（关于所有可能的 a）限制为一个关于这个具体 a₀ 的假设 h : P a₀。
```

```
rw[subset_iff]
simp
intro h
constructor
apply a at h
have : a₁ ≤ a₁ := by rfl
apply a at this
omega
omega
```

Lean4+Robo+Prado+Level 1 / 10简单测试
```
罗博（Robo）：是的，是的。我们知道。
他快速地将陈述表述成 Lean 语言，并递给你。
罗博（Robo，低声）：这很简单。因为 2 是一个具体的数字，
而且有一个算法来决定一个数字是否是素数，你可以简单地使用 decide！
关卡完成！🎉
你（Du）：的确。我们知道。还有什么其他展品吗？
圭诺（Guino） 有些尴尬。
圭诺（Guino）：嗯，正如我说的，我们才刚刚开门。而且我们决定首先只展出最美丽的素数：偶数的那些。
目前 2 是我们唯一的展品。但我们正在加紧努力，寻找更多偶数素数用于我们的常设展览。
```

```
Prime
对于 n : ℕ，Prime n 表示 n 是一个素数。要使用这个定义，通常有帮助的是用引理 prime_def 来改写它。
```

```
decide
```

Lean4+Robo+Prado+Level 2 / 10简单测试

```
你（Du，低声）：罗博，你觉得我们该告诉他吗？
罗博（Robo）：告诉他 2 是唯一的偶数素数？他不会相信的，除非我们给他呈现一个证明。
你（Du）：你不觉得我们可以证明这个吗？你不是很了解这种语言吗。让我们试试吧。比如，我怎么写“a 整除 b”？
罗博（Robo）：好吧。那么，“a 整除 b”你写成 a ∣ b，其中垂直线要用 | 或 \dvd 来写。试试这个任务吧。
罗博（Robo）：当然，a ∣ b 的定义是 ∃ k, b = a * k。最好从一开始就把这个显式写出来：
rw [dvd_iff_exists_eq_mul_left] at *
罗博（Robo）：现在你必须用 use _ 指定一个数字，使得 b + c = a * _ 成立。
罗博（Robo）：稍作改写后，肯定可以用 ring。
关卡完成！🎉
圭诺（Guino）：你们在那儿嘀咕什么呢？
你（Du）：哦，没什么。罗博只是提醒我什么是素数。
圭诺（Guino） 看了看你们的证明。
圭诺（Guino）：不错，不错。但我们还是往前走走吧。
博物馆虽然还空荡荡的，但已经建好了。而且真的很棒。看这边，走！。
```

```
a ∣ b 表示 ∃ k, b = a * k。
警告：符号 ∣（\dvd）和 |（ASCII 垂直线）是两个不同的字符！
第一个专用于“整除”，另一个例如出现在语法 obtain h₁ | h₂ := h 中。
```


```
rw [dvd_iff_exists_eq_mul_left] at *
choose c1 hc using h
choose c2 hc2 using g
use c1+c2
linarith
```

or
```
rw [dvd_iff_exists_eq_mul_left] at *
choose c1 hc using h
choose c2 hc2 using g
use c1+c2
ring
rw[hc,hc2]
```

Lean4+Robo+Prado+Level 3 / 10简单测试

```
在你们跟着圭诺穿过博物馆时，罗博给你更多任务。
罗博（Robo）：再从 rw [dvd_iff_exists_eq_mul_left] 开始吧！
关卡完成！🎉
```


```
rw [dvd_iff_exists_eq_mul_left]
unfold Even
intro h
choose r hr using h
use r
linarith
intro h
choose c hc using h
use c
linarith
```

or
```
unfold Even
constructor
· intro h
  obtain ⟨w, hw⟩ := h
  use w
  rw [hw]
  ring
· intro h
  obtain ⟨w, hw⟩ := h
  use w
  rw [hw]
  ring
```

or
```
rw [dvd_iff_exists_eq_mul_left]
unfold Even
ring
```

Lean4+Robo+Prado+Level 4 / 10简单测试

```
圭诺现在有点恼火，因为你们完全没有注意他那棒极了的博物馆。
他觉得自己被忽略了。为了吸引你们的注意力，他给你们布置了以下任务。
关卡完成！🎉
```


```
use 3
constructor
decide
decide
```

or
```
use 11
decide
```

Lean4+Robo+Prado+Level 5 / 10简单测试

```
你（Du，对罗博）：再给我点更有趣的吧！
罗博（Robo）：这个怎么样？
你（Du）：by_contra？
罗博（Robo）：这可能行得通。而且你很可能需要用引理 lt_of_mul_lt_mul_left。
对于 a b c : ℕ，它从假设 a * b < a * c 得出结论 b < c。
关卡完成！🎉
```


```
by_contra h
choose b hb using h
rw[hb] at h1 h2
apply lt_of_mul_lt_mul_left at h1
apply lt_of_mul_lt_mul_left at h2
omega
```


Lean4+Robo+Prado+Level 6 / 10简单测试

```
你（Du）：好吧。现在你能给我展示一下如何处理素数吗？
罗博（Robo）：让我看看，我有没有关于素数的任务……这个怎么样？
罗博（Robo）：这里 (hp : Prime p) 当然是假设 p 是一个素数。
为了使用这个假设，最好总是应用 rw [prime_def] at hp。
你（Du）：啊哈。那么一个素数就是一个大于等于 2 的自然数，只被 1 和它本身整除。这听起来很熟悉。
你（Du）：我现在肯定要将 hp 应用到 a 上，对吧？
罗博（Robo）：那就说 have hp' := hp a 吧。或者更优雅一点：specialize hp a。
```

```
specialize
specialize h a₁ a₂ 等价于 have h := h a₁ a₂：
这个策略将一个假设 h : ∀ m₁ m₂, P m₁ m₂ 替换为特殊情况 h : P a₁ a₂。
如果你想多次特化，应该使用 have 而不是 specialize，因为 specialize h … 会覆盖旧的假设 h。
例如，从上面的假设 h 中，你可以用
have ha := h a₁ a₂
have hb := h b₁ b₂
得到以下三个假设：
h : ∀ m₁ m₂, P m₁ m₂
ha : P a₁ a₂
hb : P b₁ b₂
```


```
rw [prime_def] at hp
obtain ⟨hp1, hp⟩ := hp
have hb : a ∣ p → a = 1 ∨ a = p
apply hp
specialize hp a
have hc : a = 1 ∨ a = p
apply hb
assumption
obtain h1 | h2 := hc
linarith
assumption
```

or
```
rw [prime_def] at hp
obtain ⟨hp1, hp⟩ := hp
have _hp := hp a ha
specialize hp a ha
obtain hp | hp := hp
linarith
assumption
```

Lean4+Robo+Prado+Level 7 / 10简单测试

```
罗博（Robo）：这里还有一个小素数任务。
引理 Prime.dvd_mul 说，一个素数整除一个乘积当且仅当它整除乘积的一个因子。
你只需在这里应用它。
```

```
constructor
rw[Prime.dvd_mul]
tauto
decide
intro h
obtain h1 | h2 := h
rw[dvd_iff_exists_eq_mul_left] at h1
choose c hc using h1
rw[dvd_iff_exists_eq_mul_left]
use c*b
rw[hc]
linarith
rw[dvd_iff_exists_eq_mul_left] at h2
choose c hc using h2
rw[dvd_iff_exists_eq_mul_left]
use a * c
rw[hc]
linarith
```

Or
```
rw [Prime.dvd_mul]
decide
```

Lean4+Robo+Prado+Level 8 / 10简单测试

```
为了让圭诺保持好心情，罗博小心地问他是否想给你们一个任务。他给你们他之前任务的以下变体。
你（Du，对罗博）：你有什么想法，这里一个素因子可能是啥？
罗博（Robo）：没有。
罗博（Robo） 思考。
罗博（Robo）：不过也没关系。他根本没问具体的因子，只问是否存在某个素因子。
但这很 trivial。让我想想……我觉得 exists_prime_and_dvd 就是你需要的陈述。
关卡完成！🎉
圭诺（Guino）：好吧，我们继续走吧。看，那不是一个美妙的楼梯吗？我们上去！
你（Du，对罗博）：我们现在试着表述一下我们要给圭诺展示的陈述吧。存在唯一一个偶数的……
罗博（Robo）：停！“唯一一个”我们还没证明呢。
```

```
apply exists_prime_and_dvd
decide
```

Or
```
apply exists_prime_and_dvd
simp
```

Lean4+Robo+Prado+Level 9 / 10简单测试

```
罗博（Robo）：不过这也没那么难。来，看看这个任务。
你（Du）：我看出来了 – ∃! m, P(m) 就是“存在唯一一个 m，使得 P(m) 成立”的记法。
罗博（Robo）：没错。而且它简单定义为“存在一个 m，使得 (1) P(m) 成立，并且 
(2) 任何其他满足 P(m') 成立的元素 m' 都等于 m”。
所以第一步是找到一个合适的 m，然后用 use _。
罗博（Robo）：实际上，对 ∃! 应用 use 总是会产生一点混乱。最好马上跟一个 simp，这样它就会变得可读了。
罗博（Robo）：现在如我所说，你有两个陈述要证明：(1) w 满足 a * w = b，(2) w 是唯一具有这个性质的元素。
罗博（Robo）：太好了。现在来证明唯一性。我觉得这里可以用引理 mul_eq_mul_left_iff 帮忙：
a * b = a * c ↔ b = c ∨ a = 0
```

```
obtain ⟨m, hm⟩ := h
use m
simp
constructor
symm
assumption
intro g
rw[hm]
rw[mul_eq_mul_left_iff]
intro h
obtain h | h := h
assumption
rw [h] at ha
contradiction
```

Or
```
obtain ⟨w, hw⟩ := h
use w
simp
constructor
rw [hw]
intro y hy
rw [hw] at hy
rw [mul_eq_mul_left_iff] at hy
obtain h | h := hy
assumption
linarith
```

Lean4+Robo+Prado+Level 10 / 10简单测试

```
与此同时，你们已经到达了屋顶露台。但是圭诺现在已经放弃解释所有的建筑细节了。景色不错。
罗博（Robo，对你）：我觉得我们准备好了。
罗博（Robo）：再仔细看一遍我们已经证明过的陈述。
```

```
use 2
  simp
  constructor
  · decide
  · intro p hp h
    rw [even_iff_two_dvd] at h
    rw [prime_def] at hp
    obtain ⟨h2, hprime ⟩ := hp
    apply (hprime 2) at h
    obtain h | h:= h
    · contradiction
    · symm
      assumption
```

Lean4+Robo+Babylon+Level 1 / 9简单测试

```
巴比伦人：每个塔都有一个铭文。那里你们可以再仔细读读，为什么它矗立着。比如这里。
你（Du）：哦，这可真是一堆新东西……让我看看……
这看起来像 (∑_{i∈I} 1) 等于……
罗博（Robo）：……I 中元素的个数，也就是 I 的基数。
巴比伦人：那么，你们能证明这个吗？
罗博（Robo，对你）：我会首先试试 simp。这真是一个强大的策略，能简化很多项。
关卡完成！🎉
巴比伦人：做得好，这很合适！
```

```
card
对于一个有限子集 A : Finset T，card A : ℕ 是 A 的基数，即 A 中元素的个数。
```

```
simp
```

Lean4+Robo+Babylon+Level 2 / 9简单测试

```
你们一起看向下一座塔。
你说：还是很简单？
关卡完成！🎉
```

```
simp
ring
```

Lean4+Robo+Babylon+Level 3 / 9简单测试

```
接着，你们来到一块空荡荡的建筑工地，这里似乎已经很久没有任何动静了。建筑牌上写着：
你说：这个假设看起来像是 I⊆{−1,0,1} 的一种拐弯抹角的版本。不管怎样，总和都不会太大。
机器人：是的。但我们似乎需要一个中间步骤，才能得到给定的结果。
我建议：trans ∑ i ∈ I, 0。你可以用 \sum 来表示求和符号。
```

```
trans ∑ i ∈ I, 0
apply sum_congr
rfl
assumption
simp
```

Lean4+Robo+Babylon+Level 4 / 9简单测试

```
你们继续从一个塔走向另一个塔。终于，你在一座塔前停了下来，它让你感觉有些古怪。绕着它走了一圈之后，你明白了原因：这座塔没有入口。好在你们找到一块地砖，上面刻着如下文字：
你说：慢着。要证明的是：
我猜，求和里的表达式在前三个 i 值上干脆就是 0……没错，正是这样。那我现在该怎么写？
机器人：你可以用 sum_subset：如果 I₁ ⊆ I₂，并且求和表达式在 I₂ 中但不在 I₁ 的那些元素上统统为 0，那么 I₁ 上的和就等于 I₂ 上的和。
你说：
“我敢打赌，求和式里的表达式在前三个 i 值上干脆就是 0……没错，正是这样。那我现在该怎么写？”
机器人：
“你可以用 sum_subset：只要 I₁ ⊆ I₂，并且求和式在 I₂ 比 I₁ 多出来的那些元素上统统为 0，那么 I₁ 上的和就等于 I₂ 上的和。”
机器人：
“好。现在就用 apply sum_subset。”
机器人：
“这里 Icc_subset_Icc_iff 肯定能派上用场。”
机器人：
“太棒了！现在你只需要证明你刚才说的：求和式里的表达式在前三个索引上等于 0。”
机器人：
“我建议你先一口气把所有前提都引进来，直到剩下的证明目标只剩
i ^ 3 - 3 * i ^ 2 + 2 * i = 0
为止。”
机器人：
“从这些假设里总得能推出 i = 0 或 i = 1 或 i = 2。你不妨先用 have 把这一点显式地写出来。”
```

```
symm
apply sum_subset
rw[Icc_subset_Icc_iff]
tauto
tauto
intro i h0 h3
have h : i = 0 ∨ i = 1 ∨ i = 2
simp at h0 h3
omega
obtain h | h | h := h
rw[h]
ring
rw[h]
ring
rw[h]
ring
```

Lean4+Robo+Babylon+Level 5 / 9简单测试

```
你：现在需要证明的是，
∑_{i∈I} ((-1)^{i+1})
与 I 中偶数个数的两倍是相同的。对吗？
Robo：对。
你：这是因为……求和中的表达式对于奇数 i 会消失，而对于偶数 i 等于 2。嗯……
Robo：为什么不用 trans 再做几个中间步骤呢。首先，你想将求和限制到偶数索引的集合上，即：
∑_{i ∈ {i ∈ I | i 为偶数}}, ((-1)^i + 1)
然后你大概想用
∑_{i ∈ {i ∈ I | i 为偶数}}, 2
作为中间步骤。
```

```
trans ∑ i ∈ { i ∈ I | Even i}, ((-1)^i + 1)
symm
rw [sum_subset]
simp
simp
intro i h hI
apply hI at h
rw [Odd.neg_pow]
ring
rw[<-odd_iff_not_even] at h
assumption
trans ∑ i ∈ { i ∈ I | Even i}, 2
have : ∀ i ∈ { i ∈ I | Even i}, (-1 : ℤ)^i + 1 = 2
intro i hi
simp at hi
obtain ⟨hI, heven⟩ := hi
rw [Even.neg_pow]
ring
assumption
apply sum_congr
simp
assumption
simp
ring
```


Lean4+Robo+Babylon+Level 6 / 9简单测试

```
巴比伦人：来吧，我给你们看看我们最漂亮的塔之一！
道路陡峭地向上延伸。山顶上等待着你们的这座塔确实非常宏伟。
Robo：这肯定是著名的巴比伦高斯塔！我以前读到过一些关于它的东西。
巴比伦人：没错。高斯是个巴比伦人！
你：这个求和我也见过。
∑_{i=0}^n i = 1/2 ⋅ n ⋅ (n+1)
不是有那个小高斯的故事吗，他有一个非常简单的论证？
Robo：我对历史不熟。我会简单地对 n 做归纳。那在 Lean 中就是：induction n with d hd！
你：为什么用 with …？
Robo：这个附加部分当然是可选的。你可以用它来指定归纳变量（d）和假设（hd）的名称。
你：首先是归纳基……
Robo：这个你可以用 simp 简化！
Robo：现在你想把求和区间 [0, d+1] 分解成 [0, d] 和 d+1。为此，你可以用我们之前见过的 Lemma insert_Icc_eq_Icc_add_one_right。
```

```
induction n with d hd
simp
rw [← insert_Icc_eq_Icc_add_one_right]
rw [sum_insert]
rw [hd]
simp
ring
simp
ring
linarith
```

Lean4+Robo+Babylon+Level 7 / 9简单测试

```
就在高斯塔旁边，又有一个空地。这次牌子上写着：
你：∑_{i=-n}^n i = 0 – 是的，这看起来是对的。
Robo：这也应该和刚才的高斯求和一样精确地证明……
除了你可能还需要 insert_Icc_eq_Icc_sub_one_left，
除了 insert_Icc_eq_Icc_add_one_right。
Robo：没错，现在又用 rw [sum_insert]。
Robo：我担心，接下来你需要把 -1 + -d 重写成 -d - 1。
也许最简单的方法是用 have 来展开这个等式。你只需要某种方式说明这是一个在 ℤ 中的等式，例如这样：
have : -1 + (-d : ℤ)  = -d - 1
```

```
induction n with d hd
tauto
simp
rw [← insert_Icc_eq_Icc_add_one_right]
rw [sum_insert]
have : -1 + (-d : ℤ) = -d - 1
ring
rw [this]
rw [← insert_Icc_eq_Icc_sub_one_left]
rw [sum_insert]
rw[hd]
ring
simp
linarith
simp
linarith
```

Lean4+Robo+Babylon+Level 8 / 9简单测试

```
纯粹出于好奇，你又仔细看了一个邻近的塔。
你：这里是一个只对奇数的求和。
∑_{i=0}^n (2i+1) = n²
Robo：这和之前完全一样。
关卡完成！🎉
巴比伦人：怎么样？你们喜欢这里吗？
Robo：是的，非常喜欢。你们在这里建造的一切真的令人印象深刻。但我们不想再耽误你们的时间了。
你：我也觉得，我们该慢慢出发回去了。
你们道别后，踏上返回飞船的路程。
```

```
induction n with d dh
tauto
rw [← insert_Icc_eq_Icc_add_one_right]
rw [sum_insert]
rw[dh]
ring
simp
simp
```

Lean4+Robo+Babylon+Level 9 / 9简单测试

```
你们还没走远，就突然有一个特别高大的巴比伦人从一个塔后面冒出来，
挡住你们的路，阴沉地看着你们，用低沉的声音要求证明下面的等式。
你：嗯。这应该能行……
```

```
induction m with d hd
simp
rw [← insert_Icc_eq_Icc_add_one_right]
rw [sum_insert]
simp
rw[hd]
rw [arithmetic_sum]
simp
ring
simp
linarith
```


Lean4+Robo+Euklid+Level 1 / 4简单测试

```
在标记的地方写着以下内容：
你：这行确实能读懂。∏_{a ∈ A} a 肯定是 Lean 中所有 A 中数字的乘积，对吧？
Robo：是的！下一行也很有道理：apply prod_pos。
Robo：但是之后的内容，又是完全的胡说八道。
不过这个陈述本身我觉得是对的。来吧，我们自己来证明。
```

```
apply prod_pos
intro a ha
specialize h a ha
rw [prime_def] at h
linarith
```

Lean4+Robo+Euklid+Level 2 / 4简单测试

```
沿着通道再走一小段，你们又看到一本打开的书躺在地上。
Robo：这行看起来也很合理：如果一个素因子整除一个乘积的因子 a，那么它肯定也整除整个乘积。
你：但是第一行“证明行”甚至连一点可读性都没有。
Robo：不，它不是。但我们再试试自己证明。当然，我们从 intro 开始。
Robo：现在我们把假设 h1 分解成它的三个组成部分。
你：大概现在我想把因子 a 从乘积中分离出来？
Robo：是的，那应该有帮助。我觉得你需要像 insert_erase 这样的东西。
Robo：试试 rw [← insert_erase h3]。
Robo：现在你用 prod_insert，然后真正把因子拉出来。
```

```
intro h1
choose a ha using h1
obtain ⟨h3, h4⟩ := ha
rw [← insert_erase h3]
rw[prod_insert]
rw[Prime.dvd_mul]
left
assumption
assumption
simp
```

Or
```
intro h
obtain ⟨a, ha, hpa⟩ := h
rw [← insert_erase ha]
rw [prod_insert]
obtain ⟨k, hk⟩ := hpa
use k * ∏ x ∈ erase A a, x
rw [hk]
ring
simp
```

Or
```
intro h
obtain ⟨a, ha, hpa⟩ := h
rw [← insert_erase ha]
rw [prod_insert]
rw[Prime.dvd_mul]
left
assumption
assumption
simp
```


Lean4+Robo+Euklid+Level 3 / 4简单测试

```
你们必须走很长一段路，才能找到下一本打开的书。Robo 开始展开一根红线，这样你们就能找到回来的路。
Robo：哦哦！这看起来很有趣：如果我们假设只有有限多个素数，那么也存在一个正自然数，被每个素数整除。
你：是的，听起来有点荒谬，但正确。而且证明呢？第一行写着 let all_primes := hf.toFinset。这有什么意义吗？
Robo：非常有意义！要证明这个陈述，肯定要考虑所有素数的乘积。
而且要让这在语法上可能，你必须把所有素数的集合视为 Finset。
第一行正好做了这个：它利用假设 hf，从 { p : ℕ | Prime p} : Set ℕ 做一个有限子集 { p : ℕ | Prime p} : Finset ℕ。
你：好的，我试试看。
你：下一行呢？
all_primes.bubblewrap = blister cong foo
这行也有意义吗？
Robo：不，这又是高度的胡说八道。如我所说，你现在肯定想用所有这些数的乘积。乘积符号你写成 \prod。
Robo：干得好。
你：我们刚才不是已经证明了一些东西，这些现在会相当有用吗。
Robo：哎呀。是的，我们证明了，但不幸的是我没有保存。你得再重建一次那些论证是怎么进行的。
Robo：这里 Finset.prod_pos 应该又能帮上忙。
Robo：如果 simp 这里不起作用，你也许需要把 all_primes 的定义也传给 simp。所以 simp [all_primes]。
关卡完成！🎉
你们拐进一条通道，那里立刻就有几本书躺在地上。但没有一本是打开的。在下一个十字路口，又有一条通道分支出去，那里也有几本书躺在地上。
你：这也许是个线索？
Robo：我们跟着它走！
```

```
对于一个子集 A : Set T，Set.Finite A 表示 A 只有有限多个元素。
如果给定假设 h : Set.Finite A，
那么 h.toFinset : Finset T 就是相同的子集 A，但现在明确地被视为有限子集。
```

```
let all_primes := hf.toFinset
use ∏ p ∈ all_primes, p
constructor
apply Finset.prod_pos
intro p
simp [all_primes]
intro h
rw [prime_def] at h
linarith
intro p hp
have hk : p ∈ all_primes
simp [all_primes]
assumption
rw [← insert_erase hk]
rw [prod_insert]
use ∏ x ∈ all_primes.erase p, x
simp
```

Lean4+Robo+Euklid+Level 4 / 4简单测试

```
过了一会儿，你们听到纸张的沙沙声。再拐三个弯，你们就来到了一间办公室。“欧几里德，图书馆主任”写在门上。
欧几里德：你好！很高兴终于有访客迷路到这里来了。如果我早知道这是什么样的图书馆，我绝不会接受主任的职位。
你：您希望这是什么样的图书馆呢？
欧几里德：他们向我保证，这里“其中包括”我那位著名祖先的 Lean 版本著作。
他其实也来自你们的宇宙。现在我已经找了好几年，在目录里、在书里，只找到一些零碎的小片段。
瞧，我现在自己开始试着表述他的一条结果。也许你们能帮帮我？
Robo：当然，我们来做。这是个典型的反证法：如果素数只有有限多个，
那么所有素数的乘积加一就无法被任何素数整除。另一方面，有 exists_prime_and_dvd。矛盾。
```

```
by_contra hf
let all_primes := hf.toFinset
let prod : ℕ := ∏ p ∈ all_primes, p
let new_prime : ℕ := prod + 1
have h_exists_prime_factor : ∃ p : ℕ, Prime p ∧ p ∣ new_prime
have : 1 < new_prime
have : 0 < prod
apply Finset.prod_pos
intro p
simp[all_primes]
intro h
rw [prime_def] at h
linarith
simp[new_prime]
assumption
apply exists_prime_and_dvd
linarith
have h_no_prime_divides : ∀ p : ℕ, Prime p → ¬ p ∣ new_prime
intro p hp
let q := ∏ p' ∈ (all_primes.erase p), (p' : ℕ)
have h : prod = p * q
simp[prod]
have : p ∈ all_primes
simp[all_primes]
assumption
rw[← Finset.insert_erase this]
apply Finset.prod_insert
simp
simp[new_prime]
rw [h]
apply not_dvd_of_between_consec_multiples (n := p) (k:=q) (m := p*q+1)
linarith
simp [prime_def] at hp
linarith
obtain ⟨p, hp, h_dvd⟩ := h_exists_prime_factor
specialize h_no_prime_divides p hp
contradiction
```

Lean4+Robo+Vieta+Level 1 / 10简单测试

```
维埃塔：来吧，我给你们看点东西……
他递给你一张纸。
你：看起来，f 是一个从 ℤ 到 ℕ 的映射。
Robo：是的，没错。而且 f n 就是 f(n) 的记号。
但在 Lean 中，通常省略括号。如果你想加括号，必须在括号周围加空格——这样：f (n)。
你：好的，我记住了。但既然这个映射这里只取 ℕ 中的值，其实没什么可证明的。
关卡完成！🎉
你：话说，→ 刚才不是还表示蕴涵吗？
Robo：是的，没错。他们在这里用同一个符号表示两者。
```

```
linarith
```

Lean4+Robo+Vieta+Level 2 / 10简单测试

```
又一支箭呼啸而过。但维埃塔却泰然自若地递给你们下一张纸。
Robo：啊哈，这更有趣了。这里 fun (x : ℤ) ↦ x ^ 2 是一个“匿名函数”，即映射 x ↦ x²。
你：它有什么匿名的地方？
Robo：嗯，就是它一开始没有名字。只有通过 f : ℤ → ℤ := … 才获得一个名字。
你：哦，这样啊。总的来说，我们有以下映射，对吧？
f: ℤ → ℤ ↦ x²
所以我需要证明 2² = 4？
Robo：是的。
你：那我怎么在这里证明呢？
Robo：Lean 能看透大多数映射定义，所以 rfl 应该就够了。或者你可以用 simp [f] 显式代入定义。
```

```
rfl
```

Lean4+Robo+Vieta+Level 3 / 10简单测试

```
又一支箭。还有一个任务。
Robo：像往常一样，你用 use … 来处理一个 ∃。
或者你先用 let f : ℤ → ℤ := fun … 定义一个你想用的映射，就像你刚才看到的。
顺便说一下，↦ 这个箭头你可以用 \maps 或 \mapsto 来写。但你也可以用 => 代替。
```

```
use fun x ↦ x - 1
intro x
linarith
```

or
```
let f : ℤ → ℤ := fun x ↦ x -1
use f
intro x
simp [f]
```

Lean4+Robo+Vieta+Level 4 / 10简单测试

```
维埃塔：现在我们得往这边走一小段。
他小心地把你们推了几米远。一会儿后，你们刚才站的地方射下了三支箭，钉在了地上。
维埃塔：别慌，我对这里很熟。瞧，我还有更多给你们。
你：g ∘ f 是函数复合吗？
Robo：没错！在 Lean 中用 \comp 来写。
你：那我在这里又可以用 let g : ℤ → ℤ := fun x ↦ _ 来定义吗？
Robo：是的，或者直接 use fun (x : ℤ) ↦ _？
Robo：现在你可以用 use g 来使用这个。
Robo：(g ∘ f) x 根据定义就是 g (f x)。simp 也会知道这个引理，但这里试试直接用 rw [comp_apply]。
Robo：ring 可以看透像 f 和 g 这样的局部定义，所以你可以直接使用它。
```

```
let g : ℤ → ℤ := fun x ↦ x-3
use g
rw [comp_apply]
ring
```

Lean4+Robo+Vieta+Level 5 / 10简单测试

```
维埃塔小心地环顾四周，但还是停了下来。他平静地递给你们下一张纸。
你：根据定义，两个映射相等，当它们应用于每个元素时给出相同的值……
Robo：对于这个原理，我有 funext 战术可以用。
用 funext x 你选择一个任意的 x，并将证明目标从 f = g 改为 f x = g x。
```

```
funext x
ring
```

Lean4+Robo+Vieta+Level 6 / 10简单测试

```
维埃塔：我们还是再跑一段。这里走！
他匆匆离去，你们尽力跟上。当你们到达他最终停下来的地方时，你已经气喘吁吁。维埃塔笑了。
维埃塔：纯粹是预防措施！我得照顾好我的访客。我可不常有访客！
他递给你们下一张纸。
Robo：现在我们有两个映射，其中一个是分段定义的。
你：所以，我需要证明它们是可交换的？
Robo：没错，最好用 funext x 选择一个任意元素，然后针对这个元素证明。
你：啊，现在我可以先把 (g ∘ f) x 重写成 g (f x)？
Robo：用 simp 就能行。
Robo：现在你可以做一个分支情况，by_cases h : 0 ≤ x。
你：这样我就能得到 0 ≤ x 和 0 > x 的情况？
Robo：没错！或者更精确地说，0 ≤ x 和 ¬(0 ≤ x)。
这不是完全一样的，你可以用引理 not_le 在 ¬(0 ≤ x) 和 0 > x 之间切换。
你：现在我大概还是得用用那些定义。
Robo：那就用 simp [f, g] 试试！
```

```
funext x
simp
by_cases h : 0 ≤ x
simp [f, g]
rw [if_pos h]
rw [if_pos h]
ring
simp [f, g]
rw [if_neg h]
rw [if_neg h]
```

Lean4+Robo+Vieta+Level 7 / 10简单测试

```
你们从远处听到战斗声。维埃塔似乎依然不担心。他又给你们一个任务。
Robo：这里你可能需要 toNat：如果 n : ℤ 是一个整数，那么 n.toNat : ℕ 就是同一个数，但被视为自然数。
你：怎么？比如 (-1).toNat 是什么？？
Robo：不知道。我的意思当然是：如果 n ≥ 0，那么 n.toNat 还是“同一个”数。
```

```
if
使用 if … then … else，你可以定义有两个定义分支的映射。
例如，fun x ↦ if 0 ≤ x then x else -x 定义了绝对值函数。
相关技巧
如果你有假设 h : A 可用，你可以用 rw [if_pos h] 将表达式 if A then B else C 简化为 B。
如果你有假设 h : ¬ A 可用，你可以类似地用 rw [if_neg h] 将表达式 if A then B else C 简化为 C。
```

```
let g : ℤ → A := fun n ↦ if (0 ≤ n) then f n.toNat else f 0
use g
intro n
simp [g]
```

Lean4+Robo+Vieta+Level 8 / 10简单测试

```
战斗声越来越近。维埃塔又给你们两张纸。
Robo：哦，这是个 congr_arg 的案例。
如果你已经知道 x = y，用 apply congr_arg 就能得到 f x = f y。
```

```
apply congr_arg
rfl
```

Lean4+Robo+Vieta+Level 9 / 10简单测试

```
Robo：这是 congr_fun 的一个案例。如果你有假设 h : f = g，
你可以用 apply congr_fun at h 将它改写成 h : ∀ x, f x = g x。
你：但是我不能在这里更简单地用 rw [h] 吗？
Robo：嗯，好吧，在这个简单例子中可以。但如果 f 是一个更复杂的表达式，
并且没有完全匹配证明目标中的形式，那就不能了。试试我刚才说的方法。
```

```
apply congr_fun at h
apply h
```

Lean4+Robo+Vieta+Level 10 / 10简单测试

```
战斗声现在听起来威胁地近了。你们清楚地听到大炮射击的声音。而且又一支箭呼啸着从你们身边掠过。
你：呃，我们是不是应该……
维埃塔：别担心，还有时间完成一个任务。
你：这里 succ 是什么？
Robo：succ : ℕ → ℕ 是将一个自然数映射到它的后继者（successor）的函数。换句话说：n ↦ n + 1。
你：哦，这样啊。从映射 f 来看，如果我没读错的话，我基本上需要证明它是满射的。
Robo：看起来是这样！
```

```
intro n
induction n with n hn
assumption
obtain ⟨b, hb⟩ := hn
use g b
apply congr_fun at hs
specialize hs b
simp at hs
rw [hs]
rw [hb]
```

Lean4+Robo+Robotswana+Level 1 / 11简单测试

```
在下面有一些随意的涂鸦，但明显以一条清晰的线开始：
你：不管是什么生物在这里留下痕迹——我看，它喜欢矩阵。反正 Mat[n,n] 看起来很像 (n×n)-矩阵。我只是不记得 Fin n 是什么了。
Robo：Fin n 是集合 {0,...,n−1}。所以这里的行和列索引从 0 开始，而不是从 1 开始。而且我碰巧知道 stdBasisMatrix i j a。那是位置 (i, j) 有条目 a，其余地方都是 0 的矩阵。
你：那些 E 只是 a = 1 的情况的缩写吗？
Robo：看起来是这样。而且 A i j 就是矩阵 A 在位置 (i, j) 的条目。
你：啊，明白了。所以这里不是矩阵乘积，而是纯标量乘法。类似于……
你在纸上涂鸦：
$ A_{i,j} \cdot \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & A_{i,j} & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} $
你：那这又一次……显而易见！？
Robo：是的。我觉得如果你从 unfold E 开始，剩下的就顺理成章了
关卡完成！🎉
你：我们现在用这个“认识”做什么？
Robo：不知道。我反正把它保存为 Matrix.smul_ebasis，以防我们还需要。
于是你们继续跟着线索走。
```

```
unfold E
simp
```

Lean4+Robo+Robotswana+Level 2 / 11简单测试

```
不久之后，你们找到两张非常相似的纸条，又是满是涂鸦，几乎一切都被划掉。但是每张的第一行还能勉强辨认出来。
你：这现在看起来像是矩阵乘法。应该也对吧。
Robo：但别忘了，simp 需要显式使用假设 h！
关卡完成！🎉
Robo：我把这个 E.mul_of_ne 也保存一下，谁知道呢。
你：现在我真的好奇，谁把这些纸条丢在这里或扔掉了。来吧，我们继续走。
```

```
unfold E
simp[h]
```


Lean4+Robo+Robotswana+Level 3 / 11简单测试

```
你：这也看起来正确。
关卡完成！🎉
你：现在我真的好奇，谁把这些纸条丢在这里或扔掉了。来吧，我们继续走。
```

```
unfold E
simp
```

Lean4+Robo+Robotswana+Level 4 / 11简单测试

```
你们来到一个地方，那里一大片方形的草地被踩平了。痕迹纵横交错，向各个方向延伸。
你们有点漫无目的地搜查这个地方，找到各种羊皮纸碎片。大多数是空的或看不懂的，但有一张你能辨认出来。
你：这似乎只是说，这些 E_{i j} 构成了矩阵空间的生成系。
Robo：那里你肯定能立即应用我们已经找到的结果！
Robo：先看看表达式 (A i j) • E i j。在求和下，需要用 simp_rw。
Robo：嗯，好吧，你也可以简单重复第一张羊皮纸的证明。来吧，熟能生巧。
你：好了，我可没有你那样的机械大脑。
Robo：啊，对了！就现在这样，我从我的库里认识这个陈述。这正好是 apply matrix_eq_sum_std_basis。
你：太棒了！那我们就不用在这里耽搁了。
关卡完成！🎉
你决定跟着一条特别明显的痕迹走。Robo 跟在你后面，走着走着还从地上捡起一张随意的羊皮纸碎片。
```

```
unfold E
simp
apply matrix_eq_sum_std_basis
```


Lean4+Robo+Robotswana+Level 5 / 11简单测试

```
你：给我看看，你捡到什么了？什么关于单位矩阵的？适合我们的收藏吗？
Robo：是的——最右边的 1 是单位矩阵。我觉得你可以直接从 matrix_eq_sum_ebasis 开始。
你：我在想，我们是不是在广场上留下了什么重要的东西？
Robo：没关系，现在我们已经走了一大段路了。现在试试这里！
你：我觉得这两个求和是相同的，因为每个求和项都是相同的。
你：现在呢？
Robo：用 funext r s 你可以专注于矩阵在位置 (r,s) 的条目。
你：1 这里是单位矩阵，对吧？
Robo：是的。
你：那么 1 i j 对于所有 j ≠ i 都是零。所以除了 j = i 的求和项，其他所有求和项都会消失。
Robo：是这样吗？那让我想想……你能先 have h : {i} ⊆ univ 证明一下吗？
你：谢谢，这有帮助！这个步骤应该很简单：一个单元素的求和，在这个元素上，1 i i 又是1，而且 1 • _ 也能简化！
```

```
rw [matrix_eq_sum_ebasis 1] 
apply sum_congr
rfl
intro i hi
funext r s
have h : {i} ⊆ univ
simp
rw [← sum_subset h]
simp
intro x h₁ h₂
have h₃ : i ≠ x
simp at h₂
symm
assumption
rw [Matrix.one_apply]
rw [if_neg h₃]
simp
```

Lean4+Robo+Robotswana+Level 6 / 11简单测试

```
沿着痕迹，你们来到一棵大树。在树荫下，你们发现一个一动不动的什么东西：
[A,B]=AB−BA
Robo：啊，对了，一个交换子！
你：但它看起来相当被消灭了。我觉得它渴死了。
Robo：看，这里树上还刻着什么。
你：换句话说：如果 f 消灭交换子，那么它在所有 E_{i i} 上的值都是一致的。这对吗？？
Robo：让我们来查查！
你：但是我该怎么用我们的假设 h₁呢！我甚至首先需要一个乘法。
Robo：你需要找到一个矩阵乘积 A * B，使得 f (E i i) = f (A * B) = f (E j j)。
然后你可以用 trans f (A * B) 来写，得到两个证明目标——f (E i i) = f (A * B) 和 f (A * B) = f (E j j)——在这些目标中 h₁ 也许适用。
Robo：我们不是在那些纸条上有一个 E i k = (E i j) * (E j k) 吗？
```

```
intro i j
specialize h₁ (E i j) (E j i)
simp [E.mul_same] at h₁
assumption
```

Lean4+Robo+Robotswana+Level 7 / 11简单测试

```
就在树旁边，你又找到一张笔记，上面大大的 E_{i j} 被划掉了。
你：大概意思是：i ≠ j 的 E_{i j} 我们不感兴趣。
```

```
intro i j hne
specialize h₁ (E i j) (E j j)
simp [E.mul_same] at h₁
simp [E.mul_of_ne _ _ hne.symm] at h₁
assumption
```

Lean4+Robo+Robotswana+Level 8 / 11简单测试

```
你们又找到一个线索，但匆忙中失去了踪迹。你现在非常口渴。在 Robo 搜查附近环境时，你疲惫地坐下，在温暖的阳光下有点迷糊地盯着羊皮纸碎片。
你：这现在到底是要干嘛……？
你随便涂鸦了一下。
$ f(A) = f\left( \sum_{i,j} A_{i,j} \cdot E_{i,j} \right) = \sum_{i,j} A_{i,j} \cdot f(E_{i,j}) = \sum_i A_{i,i} \cdot f(E_{i,i}) $
你：是的，这样可能行。我把 A 写成基矩阵的和，然后用线性，最后 f 在 i ≠ j 的 E_{i j} 上消失。
大概我应该首先把 f A 中的 A 写成基矩阵的和，而不是后面的那个 A。
Robo（从远处）：nth_rw 1 [ ... ]！就像 rw 一样。
你（大喊）：你这是什么意思？
Robo（也大喊）：嗯，你肯定想应用 matrix_eq_sum_ebasis A，但用 nth_rw 1 而不是 rw。rw [matrix_eq_sum_ebasis A] 会替换两个 A。
```

```
nth_rw 1 [matrix_eq_sum_ebasis A]
rw [map_sum]
simp
trans ∑ i, ∑ j, if i = j then (A i j) * f (E i j) else 0
apply congr_arg
ext i
apply congr_arg
ext j
by_cases h₂ : i = j
rw [if_pos h₂]
rw [if_neg h₂]
rw [zero_on_offDiag_ebasis]
simp
assumption
assumption
simp
```

Lean4+Robo+Robotswana+Level 9 / 11简单测试

```
不到五十米远，你们来到一个小山坡。Robo 指着远处的某一点。
Robo：看，那里躺着它！
你：那是什么？？？
Robo：不知道。但我的感觉告诉我，这些纸条是一种通缉令。看，这里还有一张。我觉得它说它有多大。
```

```
intro i
suffices h : n * f (E i i) = n * 1
rw [mul_eq_mul_left_iff] at h
obtain h | h := h
assumption
simp at h
```


```
元编程可以在做的事
从Lean中提取信息
文件梗概
依赖关系
tactic执行前后的proof state
https://github.com/frenzymath/jixia
```

