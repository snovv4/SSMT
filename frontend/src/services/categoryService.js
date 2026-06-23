const API_URL = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`);
  const data = await res.json();
  return data.categories;
};
