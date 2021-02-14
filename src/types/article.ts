// Define a type for a news article so we are
// sure we always store the article correctly
type Article = {
  id: string;
  title: string;
  subtitle?: string; // This field is optional
  shortContent?: string; // This field is optional
  content: string;
  originalUrl: string;
};

export default Article;
