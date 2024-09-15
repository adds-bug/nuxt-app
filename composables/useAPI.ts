import type { UseFetchOptions } from 'nuxt/app';

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as any, // TODO: replace any to proper type
  });
}
