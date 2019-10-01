# CSS相关

这里主要是对相关语法的描述。

## 可继承属性和不可继承属性

在CSS中，有些元素可继承，因此在没有自定义的时候，元素的一些属性可从父元素继承，然而有些属性不可继承

### 可继承属性

+ `font`系列——`font-family`、`font-size`...
+ 文本系列——`color`、`line-height`、`text-align`、`text-transform`...
+ `visibility`
+ `cursor`

### 不可继承属性

+ 盒子模型——`width`、`height`、`padding`、`margin`、`border`...
+ 定位——`position`、`top`、`bottom`...
+ background系列——`background-color`...

## CSS选择器

基本选择器：`id`选择器, `class`选择器, 标签选择器, `*`通用元素选择器
多元素组合选择器：`,`, ` `(空格——例如`div p`), `>`, `+`, `~`
属性选择器：`E[type="text"]`
伪类选择器：`:first-child`, `:hover`, `:enabled`, `:nth-child(n)`, `:not(p)`
伪元素：`:before`, `:after`, `:first-letter`, `:first-line`

## CSS样式种类

行内样式(内嵌样式)——`<div style="color: red;"></div>`
内部样式(内联样式)——`<style>...</style>`
外部样式(外联样式)——`<link rel="stylesheet" href="./index.css" />`