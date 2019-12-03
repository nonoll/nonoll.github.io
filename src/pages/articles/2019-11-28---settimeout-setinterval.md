---
title: "setTimeout, setInterval 파라미터 버그"
author: nonoll
date: "2019-11-28T03:16:27Z"
layout: post
draft: false
path: "/javascript/@nonoll/settimeout-setinterval"
category: "javascript"
tags:
  - "settimeout"
  - "setinerval"
  - "kr"
  - "ie9"
  - "busy"
description: "IE 9 이하로 setTimeout 선언시에 파라미터 값을 던지면 값이 undefined 로 넘어온다.  1. 버그 상황 setTimeout( fncName, duration, param1, param2 );  2. 대응 코드  아래와 같이 익명함수로 하나 감싸서 던지거나 새로운 함수를 지정하여 던져서 실행하면 문제가 없다.  setTimeout(funct..."
---
- IE 9 이하로 setTimeout 선언시에 파라미터 값을 던지면 값이 undefined 로 넘어온다.

### 1. 버그 상황 
```javascript
setTimeout( fncName, duration, param1, param2 );
```

#### 2. 대응 코드
- 아래와 같이 익명함수로 하나 감싸서 던지거나 새로운 함수를 지정하여 던져서 실행하면 문제가 없다.

```javascript
setTimeout(function() {
  fncName( param1, param2 );
}, duration);
```

#### 3. 참고
- [http://stackoverflow.com/questions/19244204/settimeout-with-parameters-in-ie8-not-working](http://stackoverflow.com/questions/19244204/settimeout-with-parameters-in-ie8-not-working)