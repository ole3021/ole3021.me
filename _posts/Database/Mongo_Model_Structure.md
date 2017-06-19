---

---

# MongoDB 数据结构设计原则

## 一对多 (1…n)

### 一对很少 (< 10)

#### 内嵌文档

One to Few, 使用`内嵌文档`很合适。

Pros:

* 不需要单独执行一条语句去获取内嵌内容。

Cons:

* 无法把内嵌文档当作单独实体去访问。

### 一对许多 (< 1000)

#### 数组引用

One to Many, 使用`数组引用`。

Pros:

* 每个关联文档都是单独的，可以独立搜索和更新。

Cons:

* 需要单独的查询去获取零件内容，需要一个应用层级别的`join`

  > 如果有少量的信息可以使用 `反模式`，冗余信息来减少join操作。
  >
  > Cons:
  >
  > * 更新频率越低越好，越高这种方式价值越少。
  > * 操作室非原子的

* 为了保证快速查找，需要创建索引。

#### 两端引用

相互引用，同时在“一”端和“多”端相互引用。

Pros:

* 在两端不需要做关联就可以快速查找。

Cons:

* 很难保证操作的原子性。

### 一对非常多 (> 1000)

#### “多”端引用

One to Squillions, 使用`"多"端引用`，在“多”端去引用“一”端。

Pros:

* 可以进行大量的引用而不会触发MongoDB的文档存储上限(16M)

Cons:

* “一”端关联数据获取需要进行大量过滤查询

## Loopback 关系体系

### Model关系

| 关系                  | 适用于           | key     |      |
| :------------------ | ------------- | ------- | ---- |
| BelongsTo           | 1…n To 1      | Left    |      |
| HasOne              | 1 To 1        | Right?  |      |
| HasMany             | 1 To N,1 To 1 | Right   |      |
| HasManyThrough      | N To N        | Through |      |
| HasAndBelongsToMany | N To N        | Auto    |      |



### 多态关系 Polymorphic



### 嵌套关系

| 关系                     | 适用于  | key  |
| ---------------------- | ---- | ---- |
| EmbedsOne              |      | left |
| EmbedsMany             |      | left |
| EmbedsMany + BelongsTo |      |      |
| References             |      | left |
