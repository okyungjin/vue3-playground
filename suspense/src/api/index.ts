export const fetchSth = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve('This is Suspense'), 2000));
}

