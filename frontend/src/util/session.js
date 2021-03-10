export const signup = (user) =>
  fetch("http://localhost:5000/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
export const login = (user) =>
  fetch("http://localhost:5000/api/session", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
export const checkLoggedIn = async (preloadedState) => {
  const response = await fetch("http://localhost:5000/api/session");
  const { user } = await response.json();
  // let preloadedState = {};
  if (user) {
    preloadedState = {
      session: user,
    };
  }
  return preloadedState;
};
export const logout = () => fetch("api/session", { method: "DELETE" });
