function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome: e.target.nome.value,
      tipo: e.target.tipo.value,
    };

    console.log("Enviando projeto:", data);
    alert("Projeto enviado!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <label>Nome do Projeto</label><br />
      <input name="nome" required /><br /><br />
      <label>Tipo</label><br />
      <select name="tipo">
        <option value="cascata">Cascata</option>
        <option value="agil">Ágil</option>
      </select><br /><br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
