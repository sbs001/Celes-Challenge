export const sleep = (time: number, error = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) reject("error");
      else resolve("ok");
    }, time);
  });
};