export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: '',
    headers: {},
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
