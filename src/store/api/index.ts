const baseURL = process.env.API_URL;

export const fetchUsers = () => fetch(`${baseURL}/users`, { method: "GET" });
