## Knowledge  
* union类型的循环 [I in union]
* 获取元组类型中所有类型的联合类型
```
 type MyTuple = ['name', 1, {data: 'string'}]
 type Data = (typeof MyTuple)[number]
```