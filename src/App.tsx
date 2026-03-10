import { id } from "zod/locales";
import useHttpData from "./hooks/useHttpData";

type User = {
  id?: number;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const {
    data: users,
    loading,
    error,
    updateData: updateUser,
  } = useHttpData<User>(url);

  if (loading) {
    return <p>Cargando</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  return (
    <ul>
      <button onClick={() => updateUser({ id: 1, name: "Chanchito feliz" })}>
        Enviar
      </button>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
