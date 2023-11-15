const calculatePostTime = (postTimeMs, nowTimeMs) => {
  const postDate = new Date(postTimeMs);
  const nowTimeDate = new Date(nowTimeMs);
  if (nowTimeDate.getFullYear() !== postDate.getFullYear()) {
    const difference = nowTimeDate.getFullYear() - postDate.getFullYear();
    return difference + "a fa";
  } else if (nowTimeDate.getMonth() !== postDate.getMonth()) {
    const difference = nowTimeDate.getMonth() - postDate.getMonth();
    return difference + "m fa";
  } else if (nowTimeDate.getDay() !== postDate.getDay()) {
    const difference = nowTimeDate.getDay() - postDate.getDay();
    return difference + "g fa";
  } else if (nowTimeDate.getHours() !== postDate.getHours()) {
    const difference = nowTimeDate.getHours() - postDate.getHours();
    return difference + "o fa";
  } else if (nowTimeDate.getMinutes() !== postDate.getMinutes()) {
    const difference = nowTimeDate.getMinutes() - postDate.getMinutes();
    return difference + "min fa";
  } else if (nowTimeDate.getSeconds() !== postDate.getSeconds()) {
    const difference = nowTimeDate.getSeconds() - postDate.getSeconds();
    return difference + "s fa";
  } else {
    return "pochi secondi fa";
  }
};

export default calculatePostTime;
