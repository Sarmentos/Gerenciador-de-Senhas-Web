import { useState } from "react";
import { Registro } from "./models/Registro";
import { criptografar } from "./services/crypto";
import LoginForm from "./components/LoginForm";
import LoginTable from "./components/LoginTable";

function App() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [chave, setChave] = useState("");

  function adicionarRegistro(site: string, login: string, senha: string) {
    if (chave) {
      alert("Digite uma chave criptográfica primeiro!");
      return;
    }
    const senhaCriptografada = criptografar(senha, chave);
    const novo = new Registro();
    novo.sistema = site;
    novo.login = login;
    novo.senha = senhaCriptografada;
    novo.indice = Date.now();

    setRegistros(prev => [...prev, novo]);
  }

  function deletarRegistro(indice: number) {
    setRegistros(prev => prev.filter(r => r.indice !== indice));
  }

  function copiarSenha(registro: Registro) {
    const senha = criptografar(registro.senha, chave);
    navigator.clipboard.writeText(senha);
    alert("Senha copiada!");
  }

  return (
    <div className="container p-4">
      <h1>Gerenciador de Senhas</h1>
      <input
        type="text"
        placeholder="Chave criptográfica"
        className={`form-control mb-3 ${!chave ? "is-invalid" : "is-valid"}`}
        onChange={(e) => setChave(e.target.value)}
      />
      {!chave && (
        <div className="invalid-feedback d-block mb-2">
          Digite uma chave antes de salvar senhas.
        </div>
      )}
      <LoginForm onSave={adicionarRegistro} />
      <LoginTable
        registros={registros}
        onDelete={deletarRegistro}
        onCopy={copiarSenha}
      />
    </div>
  );
}

export default App;