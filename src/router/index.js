import { useState, useEffect, createContext, useContext } from "react";

const RouterContext = createContext({ path: "/", navigate: () => {} });

export function Router({ children }) {
  const getPath = () => {
    // Support both hash routing and pathname routing
    const hash = window.location.hash.replace("#", "") || "/";
    return hash.startsWith("/") ? hash : "/" + hash;
  };

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHash = () => setPath(getPath());
    window.addEventListener("hashchange", onHash);
    // Also handle initial load
    if (!window.location.hash) {
      window.location.hash = "#/";
    }
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (to) => {
    window.location.hash = "#" + to;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Route({ path: routePath, children }) {
  const { path } = useContext(RouterContext);
  // Exact match for home, prefix match for dynamic routes
  if (routePath === "/" && path === "/") return children;
  if (routePath !== "/" && path.startsWith(routePath)) return children;
  return null;
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

export function useLocation() {
  return useContext(RouterContext).path;
}

// Link component — use this instead of <a href> for internal nav
export function Link({ to, children, className, style, onClick }) {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={"#" + to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}
