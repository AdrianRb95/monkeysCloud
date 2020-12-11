export const setItem = (value, name) => {
    localStorage.setItem(name, value);
  };
  
  export const getItem = name => localStorage.getItem(name);
  
  export const deleteItem = name => {
    localStorage.removeItem(name);
  };