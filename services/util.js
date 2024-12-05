import Cookies from "js-cookie";
import { setRemainder } from ".";

export const validateEmail = (email) => {
  const regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  return email.match(regexp);
};
export const handleRemaindMe = async (loginDialogboxDispatch, type, id) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    loginDialogboxDispatch({ type: "SHOW" });
    return;
  }
  const res = await setRemainder(type, id, token);

  return res.data.message;
};
export function shuffle(array) {
  if (!array) return;
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export const downloadImage = (urlArr) => {
  urlArr.forEach((url) => {
    const link = document.createElement("a");
    link.href = url?.url || url;
    link.setAttribute("download", "broucher.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  });
};
export const getCorrectType = (str) => {
  switch (str) {
    case "event":
      return "events";
    case "property":
      return "properties";
    case "offer":
      return "offers";
    default:
      return str;
  }
};
export function ordinal(n) {
  var s = ["th", "st", "nd", "rd"];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
export const filterOldPosts = (list) => {
  const cd = new Date().getTime();
  return list.filter((item) => {
    if (!item.to) return true;
    return new Date(item.to).getTime() >= cd;
  });
};

// export const getPrice = (price) => {
//   if (!price) return " - ";
//   price = parseInt(price);
//   if (price >= 10000000) {
//     return `${(price / 10000000).toFixed(1)} Cr `;
//   }
//   if (price >= 100000) {
//     return `${(price / 100000).toFixed()} lakhs `;
//   }
//   return price;
// };
export const getPrice = (price) => {
  if (!price) return " - ";
  price = parseInt(price);
  if (price >= 10000000) {
    const cr = Math.floor(price / 10000000);
    const remainder = price % 10000000;
    const lakhs = (remainder / 100000).toFixed(2).replace(".00", "");
    const thousands = Math.floor((remainder % 100000) / 1000);
    return `${cr}.${lakhs} Cr`;
  }
  if (price >= 100000) {
    const lakhs = (price / 100000).toFixed(2).replace(".00", "");
    const thousands = Math.floor((price % 100000) / 1000);
    return `${lakhs} Lakhs`;
  }
  return price;
};
export const calculateTimeRemaining = (date) => {
  const timeInMs = new Date(date).getTime();
  const now = new Date().getTime();
  const timeRemaining = timeInMs - now;
  const timeRemainingInHrs = timeRemaining / 3600000;
  const timeremaingInMinute = Math.round((timeInMs - now) / 60000);
  const timeRemainingInDays = Math.round(timeRemainingInHrs / 24);

  if (timeRemainingInHrs >= 1 && timeRemainingInHrs < 24) {
    return `${Math.round(timeRemainingInHrs)} hrs to go`;
  } else if (timeRemainingInDays >= 1) {
    return `${timeRemainingInDays} ${
      timeRemainingInDays > 1 ? "days" : "day"
    } to go`;
  } else if (timeRemainingInHrs < 1 && timeRemainingInHrs > 0) {
    return `${timeremaingInMinute} mins to go`;
  } else if (timeRemaining < 0) {
    return;
  } else {
    return `${timeRemainingInHrs} hrs`;
  }
};
export const getTODate = (toDate) => {
  return new Date(new Date(toDate).setHours(23, 59, 0, 0));
};
export const getFromDate = (fromDate) => {
  return new Date(new Date(fromDate).setHours(0, 0, 0, 0));
};
export function getOperatingSystem(window) {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "Windows OS";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "MacOS";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "UNIX OS";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "Linux OS";
  }

  return operatingSystem;
}

export const getProperPosterObject = (poster) => {
  if (!poster || poster.length < 1) return [];
  const obj = poster.map((i) => ({ ...i.files, delId: i.id }));

  return [obj[0]];
};

export const getProperBanners = (arr) => {
  if (!arr || arr.length < 1) return [];
  return arr.map((i) => ({ ...i.files, delId: i.id }));
};

export const getProperName = (str) => {
  return str?.replace(/[^A-Z0-9\s]/gi, "").replace(/\s/g, "_");
};

export function timeConvert(n, selectedTime) {
  let num = n;
  if (n == "00:00") {
    return selectedTime.slice(0, -3);
  }
  if (selectedTime) {
    let selT = selectedTime?.split(":");
    num = num + parseInt(selT[0]) * 60 + parseInt(selT[1]);
  }
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  let hour = rhours.toString();
  hour = hour.padStart(2, "0");

  if (selectedTime === "vu") {
    let selTime = selectedTime?.split(":");

    let time = new Date().setHours(selTime[0] + rhours, selTime[1] + rminutes);

    return new Date(time).getHours() + " : " + new Date(time).getMinutes();
  } else {
    let minutes = rminutes.toString();
    return hour + " : " + minutes.padStart(2, "0");
  }
}

export const getDate = (date) => {
  if (!date) return `-`;
  date = new Date(date);
  return (
    `${date?.getDate()}`?.padStart(2, "0") +
    "-" +
    `${date?.getMonth() + 1}`?.padStart(2, "0") +
    "-" +
    date?.getFullYear()
  );
};

export const getTime = (date) => {
  if (!date) return `-`;

  date = new Date(date);
  return (
    `${date.getHours()}`.padStart(2, 0) +
    " : " +
    `${date.getMinutes()}`.padStart(2, 0)
  );
};
