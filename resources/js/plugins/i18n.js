import { createI18n } from 'vue-i18n';
import Cookies from 'js-cookie';

const defaultLocale = 'en';
const i18n = new createI18n({
  locale: Cookies.get('locale') || defaultLocale,
  messages: {},
});

/**
 * @param {String} locale
 */

export async function loadMessages(locale) {
  const messages = await import(/* webpackChunkName: "lang-[request]" */ `~/lang/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages);
  i18n.global.locale = locale;
}

(async function () {
  await loadMessages(Cookies.get('locale') || defaultLocale);
})();

export default i18n;
