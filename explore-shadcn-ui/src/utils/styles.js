export const getThemeStyles = (theme) => {
    const baseStyles = {
      card: "w-full max-w-md mx-auto transition-all duration-300",
      input: "transition-all duration-300",
      button: "w-full transition-all duration-300",
      label: "cursor-pointer"
    };
  
    const themeStyles = {
      default: {
        card: "",
        input: "",
        button: "",
        label: "text-gray-700"
      },
      dark: {
        card: "bg-slate-900 text-white border-0",
        input: "bg-slate-800 border-slate-700 text-white",
        button: "bg-white text-slate-900 hover:bg-gray-200",
        label: "text-gray-200"
      },
      gradient: {
        card: "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0",
        input: "bg-white/10 border-white/20 text-white placeholder:text-white/70",
        button: "bg-white/20 hover:bg-white/30 text-white border-white/20",
        label: "text-gray-200"
      },
      minimal: {
        card: "bg-gray-50 shadow-sm border-gray-100 border",
        input: "border-gray-200",
        button: "bg-gray-900 text-white hover:bg-gray-800",
        label: "text-gray-700"
      }
    };
  
    return {
      card: `${baseStyles.card} ${themeStyles[theme]?.card || ''}`,
      input: `${baseStyles.input} ${themeStyles[theme]?.input || ''}`,
      button: `${baseStyles.button} ${themeStyles[theme]?.button || ''}`,
      label: `${baseStyles.label} ${themeStyles[theme]?.label || ''}`
    };
  };