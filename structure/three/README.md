# 链表

链表是线性表的一种存储形式

- 值域(数据域)：存储表元素值
- 链域(指针域)：存储后继结点的存储地址

- 首指针(表头指针)
- 表尾结点：链域值为 NULL

```C
typeof struct linkednode{  // 结点类型
  int data;                // 值域
  struct linkednode *next; // 链域
} snode, *ptr;             // 结点类型名snode和指针类型名ptr
```

## 插入

```c
p->next = head;
head=p;
```

## 删除

```c
q=head;
head=head.next;
free(q);
```

## 特点

- 结点地址不连续
- 插入/删除不移动结点
- 用于动态管理

## 创建

向前插入

```c
ptr createlinked_A() {
  head = NULL;
  scanf("%d", &x);
  while(x != 0) {
    p = (ptr)malloc(sizeof(snode));
    p->data = x;
    p->next = head;
    head = p;
    scanf("%d", &x);
  }
  return(head);
}
```

向后插入

```c
ptr createlinked_B() {
  ptr head, last, p;
  int x;
  head = NULL;
  scanf("%d", &x);
  while(x != 0) {
    p = (ptr)malloc(sizeof(snode));
    p->data = x;
    if (head == NULL) {
      p->next = head;
      head = p;
      last = p;
    } else {
      last->next = p;
      p->next=NULL;
      last=p;
    }
    scanf("%d", &x);
  }
  return(head);
}
```
