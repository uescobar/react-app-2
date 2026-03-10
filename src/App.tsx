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
    addData: addUser,
  } = useHttpData<User>(url);

  if (loading) {
    return <p>Cargando</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  return (
    <ul>
      <button onClick={() => addUser({ name: "Chanchito feliz" })}>
        Enviar
      </button>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
