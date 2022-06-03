## extends的用法

* 接口继承
  接口继承是最常见的继承方式，这里不再过多描述

* 条件判断

   * 普通用法
   ```js
        // 示例1
        interface Animal {
            eat(): void
        }
        
        interface Dog extends Animal {
            bite(): void
        }
        
        // A的类型为string
        type A = Dog extends Animal ? string : number
        
        const a: A = 'this is string'
   ```
   * 泛型用法
   When conditional types act on a generic type, they become distributive when given a union type
   翻译：
   对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。

   ``` typescript
      type P<T> = T extends 'x' ? string : number;
      type A3 = P<'x' | 'y'>  // A3的类型是 string | number
      等价于
      x' extends 'x' ? string : number => string
      x' extends 'x' ? string : number => string
   ```
