import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

interface Props {
  onSave: (site: string, login: string, senha: string) => void;
}

export default function LoginForm({ onSave }: Props) {
  const [site, setSite] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit() {
    if (!site || !login || !senha) {
      alert("Preencha tudo");
      return;
    }
    
    onSave(site, login, senha);

    setSite("");
    setLogin("");
    setSenha("");
  }

  return (
    <div className="card p-3 mb-3">
      <input
        className="form-control mb-2"
        placeholder="Sistema"
        value={site}
        onChange={(e) => setSite(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <PasswordGenerator onGenerate={(senhaGerada) => setSenha(senhaGerada)} />
      <button className="btn btn-outline-primary mt-3" onClick={handleSubmit}>
        Salvar
      </button>
    </div>
  );
}