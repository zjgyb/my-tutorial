## 增删改查

### 增
```sql
insert into users (username, `password`, realname) values ('tony', '123', 'tony');
```

### 查
```sql
select id, username from users;
select * from users where username='tony'; -- 查询
select * from users where username='tony' and `password`='123'; -- 并且
select * from users where username='tony' or `password`='123'; -- 或者
select * from users where username like '%ton%'; -- 模糊查询
select * from users where username like '%ton%' order by id desc; -- 查询结构按id倒叙
select * from users where state<>'0'; -- 不等于<>
```

### 更新
```sql
update users set realname='zhangsan' where username='lisi';
update users set state='0' where username='tony'; -- 软删除
```

### 删除
```sql
delete from users where username='tony';
```