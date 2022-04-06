# vue3-snippets

# DEV Notes
## watch 속성에서 arrow function 사용 시
computed, watch 속성에서 arrow function 사용 시 `this`는 `undefined`이다.
```js
export default {
  watch: {
    opt_count: (cur, prev) => {
      console.log(`Options API watch : ${prev} ==> ${cur}`);
      console.log(this);
    },
  }
}
```

arrow function을 사용하지 않으면 this가 정상적으로 출력된다.
```js
export default {
  watch: {
    opt_count(cur, prev) {
      console.log(`Options API watch : ${prev} ==> ${cur}`);
      console.log(this);
    }		
  },
}
```
이는 vue3에서도 동일한 결과이다.

> computed, watch 속성에서는 arrow function 사용을 가급적이면 피하자.

## ㅇㅇㅇ 