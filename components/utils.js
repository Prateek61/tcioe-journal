export const getArticles = async () => {
  try {
    const response = await fetch(
      "https://notices.tcioe.edu.np/api/journal/articles/"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
