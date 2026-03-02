import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: User[] = await response.json();
        setUsers(data);
        setError(undefined);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    hook();
    return () => controller.abort();
  }, []);

  return { users, loading, error };
}
