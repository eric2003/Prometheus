# MIL


## Install

- [使用国内镜像安装 Mathlib/Lean4](https://zhuanlan.zhihu.com/p/680690436).
- [Installing Lean 4 on Windows](https://leanprover-community.github.io/install/windows.html).


## download


```
PS C:\Users\eric> cd c:\Users\eric\Documents\Github\mathematics_in_lean\.lake\packages\
git clone git@github.com:leanprover-community/ProofWidgets4.git
```

```
lake clean
lake update
lake build
```

```
elan default leanprover/lean4:v4.21.0
```

elan show
```
PS C:\Users\eric> elan show
installed toolchains
--------------------

leanprover/lean4:v4.21.0
leanprover/lean4:v4.24.0 (default)

active toolchain
----------------

leanprover/lean4:v4.24.0 (default)
Lean (version 4.24.0, x86_64-w64-windows-gnu, commit 797c613eb9b6d4ec95db23e3e00af9ac6657f24b, Release)
```

```
lake exe cache get     # ① 拉取 mathlib 预编译缓存（省 90 % 时间）
lake build             # ② 把 MIL 自身章节全部编译完
```

git clone git@github.com:leanprover-community/mathematics_in_lean.git
```
PS C:\Users\eric> cd c:\Users\eric\Documents\Github\
PS C:\Users\eric\Documents\Github> git clone git@github.com:leanprover-community/mathematics_in_lean.git
Cloning into 'mathematics_in_lean'...
remote: Enumerating objects: 3014, done.
remote: Counting objects: 100% (1488/1488), done.
remote: Compressing objects: 100% (275/275), done.
remote: Total 3014 (delta 1348), reused 1213 (delta 1213), pack-reused 1526 (from 2)
Receiving objects: 100% (3014/3014), 54.31 MiB | 38.00 KiB/s, done.
Resolving deltas: 100% (2092/2092), done.
```

git clone --depth=1 https://github.com/leanprover-community/mathlib4.git .lake/packages/mathlib
```
PS C:\Users\eric\Documents\Github\mathematics_in_lean> git clone --depth=1 https://github.com/leanprover-community/mathlib4.git .lake/packages/mathlib
Cloning into '.lake/packages/mathlib'...
remote: Enumerating objects: 8648, done.
remote: Counting objects: 100% (8648/8648), done.
remote: Compressing objects: 100% (8397/8397), done.
remote: Total 8648 (delta 188), reused 1361 (delta 99), pack-reused 0 (from 0)
Receiving objects: 100% (8648/8648), 21.75 MiB | 53.00 KiB/s, done.
Resolving deltas: 100% (188/188), done.
Updating files: 100% (7576/7576), done.
PS C:\Users\eric\Documents\Github\mathematics_in_lean>
```


```
theorem neg_zero1 : (-0 : R) = 0 := by
  have h : (0 : R) + (-0 : R) = (0 : R) := by rw [add_neg_cancel (0 : R)]
  rw [zero_add (-0 : R)] at h  -- 或用 zero_add 的参数
  exact h
```

```
theorem mul_inv_cancel (a : G) : a * a⁻¹ = 1 := by
  have h : (a * a⁻¹)⁻¹ * a * a⁻¹ * a * a⁻¹ = a * a⁻¹ := by
    rw [mul_assoc (a * a⁻¹)⁻¹ a a⁻¹ ]
    rw [inv_mul_cancel (a * a⁻¹)]
    rw [one_mul]
  rw [mul_assoc ((a * a⁻¹)⁻¹ * a)  ] at h
  rw [inv_mul_cancel ] at h
  rw [mul_assoc ((a * a⁻¹)⁻¹ * a)  ] at h
  rw [one_mul ] at h
  rw [mul_assoc (a * a⁻¹)⁻¹  ] at h
  rw [inv_mul_cancel] at h
  symm at h
  exact h
```

```
theorem mul_one (a : G) : a * 1 = a := by
  have h : a  * a⁻¹ * a = a := by
    rw [mul_inv_cancel]
    rw [one_mul]
  rw [mul_assoc] at h
  rw [inv_mul_cancel] at h
  exact h
```

```
theorem mul_inv_rev (a b : G) : (a * b)⁻¹ = b⁻¹ * a⁻¹ := by
  have h1 : (a * b) * (b⁻¹ * a⁻¹) = 1 := by
    rw [mul_assoc]
    rw [← mul_assoc b ]
    rw [mul_inv_cancel]
    rw [one_mul]
    rw [mul_inv_cancel]
  have h2 : (a * b)⁻¹ * (a * b) * (b⁻¹ * a⁻¹) = (a * b)⁻¹ := by
    rw [mul_assoc]
    rw[h1]
    rw[mul_one]
  rw [inv_mul_cancel] at h2
  rw [one_mul] at h2
  exact h2.symm
```

```
theorem mul_inv_rev (a b : G) : (a * b)⁻¹ = b⁻¹ * a⁻¹ := by
  have h1 : (a * b) * (b⁻¹ * a⁻¹) = 1 := by
    rw [mul_assoc]
    rw [← mul_assoc b ]
    rw [mul_inv_cancel]
    rw [one_mul]
    rw [mul_inv_cancel]
  have h2 : (a * b)⁻¹ * (a * b) * (b⁻¹ * a⁻¹) = (a * b)⁻¹ := by
    rw [mul_assoc]
    rw[h1]
    rw[mul_one]
  rw [inv_mul_cancel] at h2
  rw [one_mul] at h2
  symm
  exact h2
```

```
theorem mul_inv_rev (a b : G) : (a * b)⁻¹ = b⁻¹ * a⁻¹ := by
  have h1 : (a * b) * (b⁻¹ * a⁻¹) = 1 := by
    rw [mul_assoc]
    rw [← mul_assoc b ]
    rw [mul_inv_cancel]
    rw [one_mul]
    rw [mul_inv_cancel]
  have h2 : (a * b)⁻¹ * (a * b) * (b⁻¹ * a⁻¹) = (a * b)⁻¹ := by
    rw [mul_assoc]
    rw[h1]
    rw[mul_one]
  rw [inv_mul_cancel] at h2
  rw [one_mul] at h2
  symm at h2
  exact h2
```

```
example (h₀ : a ≤ b) (h₁ : b < c) (h₂ : c ≤ d) (h₃ : d < e) : a < e := by
  have h4 : a < c := lt_of_le_of_lt h₀ h₁
  have h5 : a < d := lt_of_lt_of_le h4 h₂
  have h6 : a < e := lt_trans h5 h₃
  exact h6
```

```
example (h₀ : a ≤ b) (h₁ : b < c) (h₂ : c ≤ d) (h₃ : d < e) : a < e := by
  exact lt_trans (lt_of_le_of_lt h₀ h₁) (lt_of_le_of_lt h₂ h₃)
```

```
example (h₀ : a ≤ b) (h₁ : c < d) : a + exp c + e < b + exp d + e := by
  apply add_lt_add_of_lt_of_le
  · apply add_lt_add_of_le_of_lt h₀
    apply exp_lt_exp.mpr h₁
  apply le_refl
```

```
初始：⊢ a + exp c + e < b + exp d + e

后 apply add_lt_add_of_lt_of_le：
├── case a ⊢ a + exp c < b + exp d    ← 待解决
└── case b ⊢ e ≤ e                    ← 待解决

后 · apply add_lt_add_of_le_of_lt h₀（聚焦 case a）：
├── case a
│   └── 子目标 ⊢ exp c < exp d        ← 新生成，待解决
└── case b ⊢ e ≤ e                    ← 仍待解决

后 apply exp_lt_exp.mpr h₁（聚焦 case a 子目标）：
├── case a ✓                          ← 全关闭
└── case b ⊢ e ≤ e                    ← 仍待解决

后 apply le_refl（聚焦 case b）：
├── case a ✓
└── case b ✓                          ← 全关闭

最终：No goals
```

```
example (h₀ : d ≤ e) : c + exp (a + d) ≤ c + exp (a + e) := by
  apply add_le_add_left
  rw [exp_le_exp]
  apply add_le_add_left
  exact h₀
```

```
初始：⊢ 0 < 1 + exp a

后 apply add_pos：
├── 子目标 1 ⊢ 0 < 1                  ← 待解决（第一个前提：0 < x，其中 x = 1）
└── 子目标 2 ⊢ 0 < exp a              ← 待解决（第二个前提：0 < y，其中 y = exp a）

后 exact zero_lt_one（聚焦子目标 1）：
├── 子目标 1 ✓                        ← 全关闭（精确匹配常量事实 zero_lt_one）
└── 子目标 2 ⊢ 0 < exp a              ← 仍待解决

后 exact exp_pos a（聚焦子目标 2）：
├── 子目标 1 ✓
└── 子目标 2 ✓                        ← 全关闭（精确匹配 exp_pos a）

最终：No goals（have h₀ 建立：0 < 1 + exp a）
```


```
example : |a*b| ≤ (a^2 + b^2)/2 := by
  have h1 : a*b ≤ (a^2 + b^2)/2 := by
    have h : 0 ≤ a^2 - 2*a*b + b^2
    calc
      a^2 - 2*a*b + b^2 = (a - b)^2 := by ring
      _ ≥ 0 := by apply pow_two_nonneg
    linarith
  have h2 : - ((a^2 + b^2)/2) ≤ a*b := by
    have h : 0 ≤ a^2 + 2*a*b + b^2
    calc
      a^2 + 2*a*b + b^2 = (a + b)^2 := by ring
      _ ≥ 0 := by apply pow_two_nonneg
    linarith
  exact abs_le.mpr ⟨h2, h1⟩
```


```
example : max a b = max b a := by
  apply le_antisymm
  · show max a b ≤ max b a
    apply max_le
    · apply le_max_right
    apply le_max_left
  · show max b a ≤ max a b
    apply max_le
    · apply le_max_right
    apply le_max_left
```


```
初始：⊢ max a b = max b a

后 have h（子证明块）：
├── have 子目标：⊢ ∀ x y : ℝ, max x y ≤ max y x  ← 待解决（通用不等式）
│   后 intro x y：
│   └── Π目标：⊢ max x y ≤ max y x  ← 待解决（实例化通用到 x, y）
│       后 apply max_le：
│       ├── 子目标1 ⊢ x ≤ y          ← 待解决（max_le 的第一个条件）
│       └── 子目标2 ⊢ y ≤ x          ← 待解决（max_le 的第二个条件，注意：max_le 是 x ≤ y ∧ y ≤ x ? 错误！）
│       后 apply le_max_right（子目标1）：
│       │   ├── 子目标1 ✓             ← 关闭（le_max_right: y ≤ max x y, 但统一后匹配 x ≤ y? 等待解释）
│       后 apply le_max_left（子目标2）：
│       │   └── 子目标2 ✓             ← 关闭（le_max_left: x ≤ max x y, 统一后匹配 y ≤ x?）
│       └── Π目标 ✓                  ← 全关闭（h 建立）
└── 主目标仍 ⊢ max a b = max b a    ← 待解决 (h 可用)

后 apply le_antisymm：
├── case a ⊢ max a b ≤ max b a      ← 待解决（le_antisymm 的第一个前提）
└── case b ⊢ max b a ≤ max a b      ← 待解决（第二个前提）

后 · apply h（聚焦 case a）：
├── case a ✓                         ← 关闭（h a b 精确匹配 max a b ≤ max b a）
└── case b ⊢ max b a ≤ max a b       ← 仍待解决

后 · apply h（聚焦 case b）：
├── case a ✓
└── case b ✓                         ← 关闭（h b a 精确匹配 max b a ≤ max a b）

最终：No goals
```


```
example : min (min a b) c = min a (min b c) := by
  apply le_antisymm
  · apply le_min
    have h1 : min a b ≤ a := min_le_left a b
    have h2 : min (min a b) c ≤ min a b := min_le_left (min a b) c
    apply le_trans h2 h1
    have h3 : min a b ≤ b := min_le_right a b
    have h4 : min (min a b) c ≤ c := min_le_right (min a b) c
    have h5 : min (min a b) c ≤ min a b := min_le_left (min a b) c
    have h6 : min (min a b) c ≤ b := by
      apply le_trans h5 h3
    have h7 : min (min a b) c ≤ min b c := by
      apply le_min
      · apply h6
      · apply h4
    exact h7
  · apply le_min
    have h1 : min b c ≤ b := min_le_left b c
    have h2 : min a (min b c) ≤ min b c := min_le_right a (min b c)
    have h3 : min a (min b c) ≤ a := min_le_left a (min b c)
    have h4 : min a (min b c) ≤ b := by
      apply le_trans h2 h1
    have h5 : min a (min b c) ≤ min a b := by
      apply le_min
      · apply h3
      · apply h4
    exact h5
    have h1 : min a (min b c) ≤ min b c := min_le_right a (min b c)
    have h2 : min b c ≤ c := min_le_right b c
    have h3 : min a (min b c) ≤ c := by
      apply le_trans h1 h2
    exact h3
```

```
example (h : x ∣ w) : x ∣ y * (x * z) + x ^ 2 + w ^ 2 := by
  apply dvd_add
  · apply dvd_add
    · rw[← mul_assoc]
      apply dvd_mul_of_dvd_left
      apply dvd_mul_left
    · apply dvd_mul_left  -- 关闭 x ∣ x ^ 2 (x ^ 2 = x * x)
  · rw [pow_two]  -- w ^ 2 = w * w
    apply dvd_mul_of_dvd_left h
```