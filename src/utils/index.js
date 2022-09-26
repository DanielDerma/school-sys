export const Capitalize = (s) => {
  if (typeof s !== "string") return "";
  if (s === "siimain") return "SIIMain";
  if (s === "siiview") return "SIIView";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const SelectPage = (s) => {
  if (typeof s !== "string" || s === "") return "";
  if (s === "director") return "Dashboard";
  if (s === "instructor") return "SIIMain";
  if (s === "student") return "SIIView";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const SelectSubject = (s) => {
  if (typeof s !== "string" || s === "") return "";
  if (s === "director") return "Dashboard";
  if (s === "instructor") return "SIIMain";
  if (s === "student") return "SIIView";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const dataFormatted = (date) =>
  date.toDate().toLocaleDateString("es-ES");
