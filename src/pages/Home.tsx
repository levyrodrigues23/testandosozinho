import { FormEvent, useState } from 'react';
import './Home.css';

interface PropsIdade {
  nome: string;
  idade: number;
}

const Home = () => {
  const [input, setInput] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  const [resultado, setResultado] = useState<PropsIdade | undefined>(undefined);
  const [mensagem, setMensagem] = useState<string>('');

  // Função de envio
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  // Função para descobrir a idade
  function descobrirIdade() {
    const currentYear = new Date().getUTCFullYear();
    setResultado({
      nome: input,
      idade: currentYear - Number(number),
    });

    // Verificando se o nome é "anna" (ou "Anna" em qualquer capitalização)
    if (input.toLowerCase() === 'anna') {
      setMensagem('Você é linda Anna :), te amo');
    } else {
      setMensagem(''); // Limpa a mensagem se o nome não for "anna"
    }

    // Resetando os campos
    setInput('');
    setNumber(0);
  }

  return (
    <div>
      <header>
        <h1 className='title'>Descubra sua idade</h1>
      </header>
      <main>
        <div className='container'>
          <p>Qual o seu nome?</p>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <p>Qual ano você nasceu?</p>
            <input
              className="input"
              type="number"
              placeholder="Digite seu ano de nascimento"
              id="anoNascimento"
              name="anoNascimento"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
            <br />
            <button onClick={descobrirIdade} type="submit" className="btn">
              Descubra sua idade
            </button>
          </form>
        </div>
      </main>

      {resultado && resultado.nome !== '' && (
        <section className="resultado">
          <h1>Querido {resultado?.nome}, você nasceu em {resultado.idade}.</h1>
          
          {mensagem && (
            <section className="mensagem">
              <h1>{mensagem}</h1>
            </section>
          )}
        </section>
      )}
    </div>
  );
};

export default Home;
