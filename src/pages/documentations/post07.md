---
layout: ../../layouts/MarkdownLayout.astro
title: 'Методы поиска элементов в DOM в JavaScript'

date: 2025-06-17
description: 'post07`'
---

# Методы поиска элементов в `DOM` при помощи `JavaScript`

## 1. Поиск по ID

`document.getElementById(id)`

- Возвращает один элемент с указанным `id`.
- Если элемента нет → возвращает `null`.
- Самый быстрый метод, так как `ID` уникален.

```js
const header = document.getElementById('header');
if (header) {
  header.style.color = 'red';
}
```

## 2. Поиск по классу

`document.getElementsByClassName(className)`

- Возвращает живую коллекцию (`HTMLCollection`) элементов с указанным классом.
- Если элементов нет → возвращает пустую коллекцию.
- Коллекция обновляется автоматически при изменении `DOM`.

```js
const buttons = document.getElementsByClassName('btn');
// Обращение к первому элементу
if (buttons.length > 0) {
  buttons[0].style.backgroundColor = 'blue';
}
```

`document.querySelector('.className')`

- Возвращает первый элемент, соответствующий `CSS`-селектору.
- Если элемента нет → `null`.

```js
const firstButton = document.querySelector('.btn');
if (firstButton) {
  firstButton.textContent = 'Нажми меня';
}
```

`document.querySelectorAll('.className')`

- Возвращает статическую коллекцию (`NodeList`) всех элементов по селектору.
- Можно перебирать через `forEach`.

```js
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach((btn) => {
  btn.addEventListener('click', () => console.log('Клик!'));
});
```

## 3. Поиск по тегу

`document.getElementsByTagName(tagName)`

- Возвращает живую коллекцию (`HTMLCollection`) элементов по имени тега (`div`, `p`, `a` и т. д.)

```js
const paragraphs = document.getElementsByTagName('p');
if (paragraphs.length > 0) {
  paragraphs[0].textContent = 'Первый параграф изменён!';
}
```

`document.querySelector('tag') / querySelectorAll('tag')`

- Аналогично поиску по классу, но с именем тега.

```js
const firstDiv = document.querySelector('div');
const allDivs = document.querySelectorAll('div');
```

## 4. Поиск по имени атрибута

`document.getElementsByName(name)`

- Возвращает коллекцию (`NodeList`) элементов с атрибутом name (часто используется для форм, радио-кнопок).

```js
const genders = document.getElementsByName('gender');
genders.forEach((radio) => {
  radio.addEventListener('change', () => console.log('Выбор изменён!'));
});
```

`document.querySelector('[attribute="value"]')`

- Поиск по любому атрибуту (`data-*`, `href`, `type` и т. д.).

```js
const submitBtn = document.querySelector('[type="submit"]');
const modal = document.querySelector('[data-modal="true"]');
```

## 5. Поиск внутри элемента

Методы работают не только для `document`, но и для любого `DOM`-элемента:

```js
const container = document.getElementById('container');
const innerDivs = container.querySelectorAll('.item'); // Ищет только внутри #container
```

## 6. Специальные методы

`document.forms / document.images / document.links`

- Готовые коллекции форм, изображений и ссылок.

```js
const firstForm = document.forms[0];
const allImages = document.images;
const externalLinks = document.links;
```

#### Итоговая таблица методов

| Метод                      | Возвращает       | Живая коллекция? | Поддержка forEach? |
| -------------------------- | ---------------- | ---------------- | ------------------ |
| `getElementById()`         | Один `Element`   | ❌ Нет           | ❌ Нет             |
| `getElementsByClassName()` | `HTMLCollection` | ✅ Да            | ❌ Нет             |
| `getElementsByTagName()`   | `HTMLCollection` | ✅ Да            | ❌ Нет             |
| `getElementsByName()`      | `NodeList`       | ❌ Нет           | ✅ Да              |
| `querySelector()`          | Первый `Element` | ❌ Нет           | ❌ Нет             |
| `querySelectorAll()`       | `NodeList`       | ❌ Нет           | ✅ Да              |

#### Какой метод выбрать?

- ✅ Нужен один элемент? → `getElementById()` (быстрее) или querySelector().
- ✅ Нужны все элементы? → `querySelectorAll()` (удобнее) или getElementsByClassName().
- ✅ Работа с формами? → `getElementsByName()` или document.forms.
- ✅ Нужна живая коллекция? → `getElementsByClassName/TagName`.
