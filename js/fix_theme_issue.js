/*   if (localStorage.getItem('darkmode') === 'active') {
    document.documentElement.classList.add('darkmode');
}

 */

  // IMPORTANT: Place this in <HEAD> at the top before any other tag.
  const setDarkMode = (mode) => {
    mode ??= localStorage.getItem("darkmode") || "null";
    if (mode === "active") {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.remove("darkmode");
    }
    localStorage.setItem("darkmode", mode);
  };
  setDarkMode();