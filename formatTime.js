// Функция formatTime принимает на вход количество минут, а возвращает строку в формате чч:мм.

const formatTime = (initialMinutes) => {
  if (initialMinutes >= 60) {
    const hours = Math.floor(initialMinutes / 60);
    const minutes = initialMinutes - (hours * 60);

    if (hours > 9 && minutes > 9) {
      return `${hours}:${minutes}`;
    }
    if (hours > 9 && minutes < 10) {
      return `${hours}:0${minutes}`;
    }
    if (hours < 9 && minutes > 9) {
      return `0${hours}:${minutes}`;
    }
    return `0${hours}:0${minutes}`;
  }
  if (initialMinutes < 10) {
    return `00:0${initialMinutes}`;
  }
  return `00:${initialMinutes}`;
};


formatTime(175);
