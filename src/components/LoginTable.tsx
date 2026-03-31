import { Registro } from "../models/Registro";

interface Props {
  registros: Registro[];
  onDelete: (id: number) => void;
  onCopy: (registro: Registro) => void;
}

export default function LoginTable({ registros, onDelete, onCopy }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sistema</th>
          <th>Login</th>
          <th>Senha</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {registros.map((r) => (
          <tr key={r.indice}>
            <td>{r.sistema}</td>
            <td>{r.login}</td>
            <td>••••••</td>
            <td>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => onCopy(r)}
              >
                Copiar
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(r.indice)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}