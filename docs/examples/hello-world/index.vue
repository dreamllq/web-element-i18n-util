<template>
  <div>
    <p>
      {{ t('a') }}
    </p>
    <p>
      {{ t('b.c') }}
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
      b: { c: 'e222' }
    }
  }
});

const { t } = useLocale();
</script>

<style scoped>

</style>