---
title: Scope & Closure
meta: "Summary of JavaScript Scope and Closure knowledge based on \"You Don't Know JS\" series books."
category: JavaScript
tags: [Don't Know JS]
cover: /assets/images/post/scope_closure.png
color: '#606060'
created: 2016-03-13
---

# Scope
"Scope" has ability to store values and pull values out of variables is what gives a program state.
"Scope" as the set of rules tahta govern how the Engine can look up a variable by its identifier name and find it.
There are two predominant models for sope works

* Lexical Scope: Most common used by vast majority programming language(JS use Lexical Scope).
* Dynamic Scope: Some languages like (Bash, Perl, etc)

## Working Process

> Engine: start-to-finish compilation and execution.
> Compiler: Parsing and code-generation.
> Scoper: Collects and maintains a look-up list of all the declared identifiers(variables) and value definition(function).


Traditional compiled-languages compilation[^compile]

1. *Compiler* will perform lexing and break code into 'tokens', and then pust it in `AST` tree.
2. During "Code-Generation" & "Execution"

	1. Declareation: *Compiler* will check *Scope* first to see if variable is already exist.
		* If exist, ignores.
		* Ohterwise *Compiler* will ask *Scope* to declare a new variable for that scope colletion
		* *Compiler* produce code for *Engine* execute later with handle assignment

	2. Assignment: *Engine* will ask *Scope* if there have a variable accessible in cureent scoper colleciton.
		* If have, use the variable. After find the variable and *Engine* will assign the value to it.
		* *Engine* will lookup *elsewhere** (nested Scope)
		* If not find *Engine* will raise and yell an Error!

  > *Engine* Look-up of *Scope* have two types
  >
  > * LHS: left-hand side of an assignment  
  > 	 LHS look-up the target of the assignment (find the variable **container** that can asssignment).
  > * RHS: right-hand side of an assignemtn  
  >   RHS look-up the source of the assignment

> ```javascript
> function foo(a) {...}   
>
> // 方法可以通过Compiler进行声明和定义，在Engine执行的过程中不需要向赋值方式思考成先进行LHS，这里只有RHS
>
> ```

### Nest Scope
Like block or function is nested inside another block or function, scope are nested inside other scopes.

*Engine* starts at the currently executing Scope, looks the bariable if not fund keep going up one level, and so on.

### Errors
* `ReferenceError`: will throw when the RHS/LHS('Strict Mode') fails to find a variable, anywhere in nested Scopers(Scope resolution-failure related).

  > In non-`Strict Mode` the Scope will create on in the Global Scope, and hand it back to Engine.

* `Type Error`: If the value found with RHS, but try to do something with its value that  is impossible(Scoper resulution successfule, but illegal/impossible action attempted).

## Lexical Scope
Lexical Scoper is defined at `lexing`[^compile] time based on where variables and blocks of scoper are authored, and lexer processes the code.

> Modifying lexical scope after lexer has passed by is not frowned upon.

### Scope Bubbles
Scope bubbles are defined by where the blocks of scopes are written.
![Scope](/assets/images/post/scope.png)
There are three scopes inherent in the code above. It is helf to think about these scopes as bubbles inside each other.

Bubble1: Encompasses the global scope, and has just one identifier `foo`.
Bubble2: Encompasses the scope of `foo`, it have identifiers `a`, `b` and `bar`.
Bubbles: Encompasses the scope of `bar`, it has just one identifier `c`.

* Each function creates a new bubble of scope.
* Scope look-up stops once it find the first match.

> The same identifier name can be specified at multiple layers of nested scoper, which is called "shadowing"(the inner identifier "shadows" the outer identifier)

### Cheating Lexical
JavaScript have two mechanismsm could "modify" lexical scope at run-time. but both are bad practices to use(cheating lexical scope leads to poorer perfoemance).

#### eval
`eval(...)` takes a string as an argement and treates the contents of the string had been actually authored code at the point in the program.

> * `eval()` can modify the lexical scope environment during runtime.
> * in "strict mode" the `eval()` operates in its own lexical scope, have no effect on enclosing scope.
> * bestide `eval` there also have `setTimeout(''')`, `setInterval(...)` and `new Function(...)`, but dont consider to use them.

#### with
`with` is explained as a short-hand for making multiple property references aginst as object *without* repeating the object reference itsef each time.

`with` statement taks an object, one which has zero or more properties, and **treates that object as if it is a wholly spearate lexical scope**.

> this could some time(non-strict mode) cause leaked global issue(object have no property that `with` to assignment).

## Function vs. Block Scope

### Scope from Functions
The most common scope is function-based scope. Each function declared create a bubble for itself.
with the function scope there have the benefits like

* Hiding in plain scope
* Collision Avoidance

### Functions as Scopes
Use scopes from functions there are few problems.

* Have to declare a named-function, and that "poolutes" the enclosing scope
* Have to explicitly call the function by name to executes.

A ideal way to fix these functions

```javascript
var a = 2;
(function() {
	var a = 3;
	console.log( a ); //3
})();

console.log( a ); //2
```
Instead fo treating the function as a standard declaration , treated it as funciton-expression(the pari `()` wrap the function).

mostly seen in callbacks(function expressions), and the most difference to function declaration is no name bound as identifier.

#### Anonymous vs. Named

* Anonymous functions have tno useful name to display in stack traces, which can make debugging difficult.
* If the function needs to refer to itself then require the **deprecated** `arguments.callee`.
* A name is often helpful in providing more readable/understandable code.

> To avoid these draw-backs, **Allways name your function expression.**

### Blocks as Scopes

#### let
`let` alongside `var` as another way to declare variables, and attaches the variable declaration to the scope block(commonly a `{..}` pair) it's contained in.

`let` declarations will hot hoist to the entire scope(such as `var`), the declarations will only exist after the declaration statement.

#### Garbage Collection
Declaring explic blocks (`{}`) for variables to locally bind to is a powerful to do garbage colleciton.

## Hoisting

```javascript
a = 2;
var a;
console.log( a );  // 2

console.lgo( b );  // undefined;
var b = 3;

foo();  // TypeError;
var foo = function() {
	console.log(a);  
	var a = 4;
}
```
*Engine* will compile code before it interprets it. and the *Compiler*'s compilation phase was to find and associate all declarations with their appropriate scopes. And that results

> variables and function are processed first, before any part of code is executed.

Actually the before code is handled like the follow

```javascript
var a;
var b;
var foo;

a = 2;
console.log(a);  // 2

console.log(b);  // undefined;
b = 3;

foo();  // TypeError
foo = function() {
	var a;
	console.log(a);
	a = 4;
}
```

> * Only declarations(variables and functions) are hoisted, but function expression are not.
> * With duplicate declarations, Function are hoisted first and then variables(**Functions First**).
> * For the same type of duplicate declarations, subsequent declarations **do** voerride previous one.
> * Function Declarations that appear inside of normal blocks typically hoist to the enclosing scope.  
>   Avoid declaring functions in blocks for it is to change in future version of JavaScript

## Scope Closure
Closure is all around in JavaScript, it is a result of writing code that relies on lexical scope.

> **Closure** is when a function is able to remember and access its lexical scope even when that funciton is executing outside its lexical scope.
>
> When transport an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and when execute the function, the closure will be exercised.
>
> **Closure** 是在当方法的词法作用域在外部通过调用该方法获得的一个该函数与先定义的词法作用语的一个引用（技术上来说Closure可以发生在声明时期，但是并不能和词法作用域明显区分开）。

```javascript
function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar()
}

var baz = foo()
baz();

```
After `foo()` executed, normall we expect the entire of inner scope of `foo()` would go away for the Garbage Collection would free up memory when it's no longer in use.
But the closure won't let happen for `bar()` is still using it. **as this `bar()` still has a reference to that scope, and this reference is called closure.**

> * Function `bar()` close over the scope of `foo()`.
> * Function `bar()` has a *closure* over of `foo()`.
> * Closure let the function continue to access the lexical scope that defines in author-time.

### IIFE(Invoking Function Expressions Immediately)
IIFE is the most common tools used to create scope which can be closed over.  But some of it is not itself an example of closure(invoded right there in same scope, not the out side of the lexical scope.)

```javascript
var a = 2;

(function foo(){

    var a = 3;
    console.log( a ); // 3

})();

console.log( a ); // 2
```

### Loops + Closure Problem
```javascript
for (var i=1; i <=5; i++) {
	setTimeout(function timer(){
		console.log(i);
	}, i*1000);
}
```

Each of the loop are defined separately in each iteration, but all are closed over the same shared global scope. And they all share a reference to the same `i`.

For this problem to "fix" need more closure scope for each iteration.

#### with IIFE
As IIFE is a way to create scope by declaring a function and immediately executing it.

```javascript
for (var i=1; i <= 5; i++){
	(function(){  // function(j) 代替var j＝i；
		var j = i;  // 注意：IIFE的作用域为括号内，保存值的话要再IIFE内声明。
		setTimeout(function timer(){
			console.log(j);
		}, j*1000)
	})();
}
```
Use IIFE inside each iteration which created a new scope for each iteration, and give the callback function to close over a new scope for each iteration, one had variable saved right value.

#### with Block Scoping Revisited
Beside IIFE also could use `let` declaration, which **hijacks a block and turns a block into a scope that can close over**.

```javasript
'use strict'  // perhaps need strict mode.
for(var i=1; i <= 5; i++){  // 可以简写为 let i = 1; ...
	let j = i;
	setTimeout(function timer(){
		console.log(j);
	}, j*1000)
}
```

### Modules
**Beside the power of closure patterns which do not to be about callbacks**, is the module.

```javascript
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

The most common way of implementing  the module pattern is called "Revealing Module".

> 1. There must be an outer enclosing function, and it must be invoked at least onece(each time creates a new module instance),
> 2. The enclosing funciton must return back at least one inner funciton, so that this inner function has closure over the private scope, and can access and /or modify the private state.

### Singleton Module

1. Turned module function into an IIFE
2. Immediately invode it and assigned its return value directly to our single module instance identifier.

### Modern Modules
```javascript
var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();
```
invoke with modern modules

```javascript
MyModules.define( "bar", [], function(){
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
} );

MyModules.define( "foo", ["bar"], function(bar){
    var hungry = "hippo";

    function awesome() {
        console.log( bar.hello( hungry ).toUpperCase() );
    }

    return {
        awesome: awesome
    };
} );

var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
    bar.hello( "hippo" )
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO
```

### Future Modules

bar.js

```javascript
function hello(who) {
    return "Let me introduce: " + who;
}

export hello;
```

foo.js

```javascript
// import only `hello()` from the "bar" module
import hello from "bar";

var hungry = "hippo";

function awesome() {
    console.log(
        hello( hungry ).toUpperCase()
    );
}

export awesome;
```

invode with future modules

```javascript
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";

console.log(
    bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO
```

### "Dynamic Scope"
JavaScript **dose not, in fact, have dynamic scope**. It has lexical scope. but `this` mechanism is kind of dynamic scope.

>  Lexical scope is the set of rules about how the *Engine* can look-up variables and where to find them.
>  JavaScript concerned with hwo and where function and scopes are devlared, not **where they are called from**. Another words, the scope chain is based on the nesting of scopes in code.

```javascript
function foo() {
    console.log( a ); // 2
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();
```
Lexical scope is all about write-time, whereas dynamic scope(and `this`) are runtime.

### Polyfilling Block Scope

```javascript
// write in ES6
{
    let a = 2;
    console.log( a ); // 2
}

console.log( a ); // ReferenceError

// write in pre-ES6
try{throw 2}catch(a){
    console.log( a ); // 2
}

console.log( a ); // ReferenceError
```

---

[^compile]: Appendix
## Traditional compiled-languages compilation
### 1. Tokenizing/Lexing
Breaking up a string of characters into meaningful(to language) chunks(`tokens`).
### 2. Parsing
Taking a stream(array) of tokens and turning it into a tree of nested elements(`Abstract Syntax Tree`[AST]).
### 3. Code-Generation
Taking AST and turining it into executable code.
