import en from './en.json';
import ru from './ru.json';

const dicts = { en, ru } as const;
export type Lang = keyof typeof dicts;
export const LOCALES: readonly Lang[] = ['en', 'ru'];

function lookup(dict: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>(
    (o, k) => (o && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined),
    dict,
  );
}

export function useTranslations(lang: Lang) {
  return <T = string>(key: string): T => {
    const v = lookup(dicts[lang], key);
    if (v !== undefined) return v as T;
    const fallback = lookup(dicts.en, key);
    return (fallback !== undefined ? fallback : key) as T;
  };
}
