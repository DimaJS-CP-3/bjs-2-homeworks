function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args));
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задача 2.

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = true;
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
