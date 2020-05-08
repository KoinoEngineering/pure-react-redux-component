export const API_BASE = process.env.REACT_APP_API_URL + "api/v1/";
enum API_ROUTES {
    ARTICLES = "articles",
    ARTICLE = "articles/:id"
}
export default API_ROUTES;