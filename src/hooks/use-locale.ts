import { useLocale as useElementPlusLocal } from 'element-plus';
import { get } from 'lodash';

const defaultLocal = 'zh-cn';

let messages: {[index: string]: {string:string}};
let fallbackLocale: string;
let locale: string;

export const useProvideLocal = (options: {
    messages: {[index: string]: any},
    fallbackLocale?: string,
    locale?: string
  }) => {
  messages = options.messages;
  fallbackLocale = options.fallbackLocale || defaultLocal;
  const elementPlusLocal = useElementPlusLocal();
  locale = options.locale || elementPlusLocal.lang.value || defaultLocal;
};

export const useLocale = () => {
  const t = (path:string, option?:Record<string, string | number>) => {
    const message = messages[locale] || messages[fallbackLocale];
    const str = get(message, path, undefined) || get(messages[fallbackLocale], path, undefined) || path;
    return str.replace(/\{(\w+)\}/g, (_, key) => {
      let _a: any;
      return `${(_a = option === null ? void 0 : option?.[key]) !== null ? _a : `{${key}}`}`;
    });
  };

  return {
    t,
    locale,
    messages,
    fallbackLocale 
  };
};