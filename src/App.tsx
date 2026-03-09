import useFetchData from "./hooks/useFetchData";
type User = {
  id: number;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users, loading, error } = useFetchData<User>(url);

  if (loading) {
    return <p>Cargando</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
