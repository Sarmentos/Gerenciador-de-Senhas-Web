export function criptografar(valor: string, chave: string): string {
  if (!chave) return valor; // ← se não tem chave, retorna sem criptografar

  let resultado = "";

  for (let i = 0; i < valor.length; i++) {
    const keyChar = chave[i % chave.length];
    resultado += String.fromCharCode(
      valor.charCodeAt(i) ^ keyChar.charCodeAt(0)
    );
  }

  return resultado;
}