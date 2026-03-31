import { useState } from "react";

interface Props {
  onGenerate: (password: string) => void;
}

export default function PasswordGenerator({ onGenerate }: Props) {
  const [size, setSize] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);

  function getCharTypes(): string[] {
    const types: string[] = [];

    if (uppercase) types.push("ABCDEFGHIJKLMNOPQRSTUVWXYZÇ");
    if (lowercase) types.push("abcdefghijklmnopqrstuvwxyzç");
    if (numbers) types.push("0123456789");
    if (special) types.push("!@#$%&*()_-+=<>?/");

    return types;
  }

  function generatePassword() {
    if (size < 4 || size > 128) {
      alert("Tamanho deve ser entre 4 e 128");
      return;
    }

    const charTypes = getCharTypes();

    if (charTypes.length === 0) {
      alert("Selecione ao menos um tipo de caractere");
      return;
    }

    let password = "";

    for (let i = 0; i < size; i++) {
      const type = charTypes[Math.floor(Math.random() * charTypes.length)];
      password += type[Math.floor(Math.random() * type.length)];
    }

    onGenerate(password);
  }

  return (
    <div className="card p-3 mt-3">
      <h5>Gerador de Senha</h5>

      <input
        type="number"
        className="form-control mb-2"
        min={4}
        max={128}
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />

      <div className="form-check">
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        <label className="ms-2">Maiúsculas</label>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
        <label className="ms-2">Minúsculas</label>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        <label className="ms-2">Números</label>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          checked={special}
          onChange={() => setSpecial(!special)}
        />
        <label className="ms-2">Especiais</label>
      </div>

      <button
        className="btn btn-outline-primary mt-3"
        onClick={generatePassword}
      >
        Gerar Senha
      </button>
    </div>
  );
}