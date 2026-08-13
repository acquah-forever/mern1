export interface User {
  username: string;
  email: string;
}

export interface Thought {
  _id: string;
  thought: string;
}

interface ApiErrorBody {
  error?: string;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as ApiErrorBody;
    throw new Error(body.error ?? "Request failed");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export const api = {
  signUp: (data: { username: string; email: string; password: string }) =>
    request<User>("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  logIn: (data: { username: string; password: string }) =>
    request<User>("/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getThoughts: () => request<Thought[]>("/api/thoughts"),
  createThought: (thought: string) =>
    request<Thought>("/api/thoughts", {
      method: "POST",
      body: JSON.stringify({ thought }),
    }),
  updateThought: (id: string, thought: string) =>
    request<Thought>(`/api/thoughts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ thought }),
    }),
  deleteThought: (id: string) =>
    request<void>(`/api/thoughts/${id}`, { method: "DELETE" }),
};
