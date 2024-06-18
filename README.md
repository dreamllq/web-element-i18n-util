# lc-element-i18n-util

## demo

```vue
<template>
  <div>
    <p>
      {{ t('a') }}
    </p>
    <p>
      {{ t('b.c') }}
    </p>
    <p>
      {{ t('d',{abc:'ccc1'}) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useProvideLocal, useLocale } from 'lc-element-i18n-util';
useProvideLocal({
  messages: {
    'zh-cn': {
      a: '111',
      b: { c: '222' }
    },
    'en': {
      a: 'e111',
      b: { c: 'e222' },
      d: 'kkk{abc}'
    }
  }
});

const { t } = useLocale();
</script>

<style scoped>

</style>
```

## 封装组件使用

```ts
import { useProvideLocal, useLocale } from 'lc-element-i18n-util';
import zhCn from './zh-cn';
import en from './en';
import ja from './ja';

const messages = {
  'zh-cn': zhCn,
  en,
  ja 
};

export const ct = (...args: [string, any?]) => {
  useProvideLocal({ messages });
  const { t } = useLocale();
  return t(...args);
};
```