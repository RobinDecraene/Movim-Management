const ROUTES = {
  home: "/",
  aboutme: "/over-mij",
  cases: "/cases",
  blogs: "/blogs",
  blog: {path: "/blogs/:id", to: "/blogs/"},
  contact: "/contact",
  
  notFound: "*"
}

export default ROUTES;