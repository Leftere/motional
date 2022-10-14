const useHideBlocks = () => {
  const hideBlocks = (hideHeader, hideFooter) => {
    const root = document.getElementById("root");
    const header = root.previousElementSibling;
    const footer = root.nextElementSibling;

    if (hideHeader && !header?.classList.contains("hidden")) {
      header?.classList.add("hidden");
    } else if (!hideHeader) {
      header?.classList.remove("hidden");
    }

    if (hideFooter && !footer?.classList.contains("hidden")) {
      footer?.classList.add("hidden");
    } else if (!hideFooter) {
      footer?.classList.remove("hidden");
    }
  };

  return { hideBlocks };
};

export default useHideBlocks;
