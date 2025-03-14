import { FormEvent, useState } from 'react';
import './Home.css';

import foto from '../assets/balloon-heart.svg'

interface PropsIdade {
  nome: string;
  idade: number;
}

const Home = () => {
  const [input, setInput] = useState<string>(''); // Nome
  const [number, setNumber] = useState<string>(''); // Ano de nascimento como string
  const [resultado, setResultado] = useState<PropsIdade | undefined>(undefined);
  const [mensagem, setMensagem] = useState<string>('');

  // Função de envio
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  // Função para descobrir a idade
  function descobrirIdade() {
    const currentYear = new Date().getUTCFullYear();
    const yearOfBirth = Number(number); // Converte o valor para número

    setResultado({
      nome: input,
      idade: currentYear - yearOfBirth,
    });

    // Verificando se o nome é "anna" (ou "Anna" em qualquer capitalização)
    if (input.toLowerCase() === 'anna') {
      setMensagem('Você é linda Anna :), te amo');
     
    } else {
      setMensagem(''); // Limpa a mensagem se o nome não for "anna"
    }
    

    // Resetando os campos
    setInput('');
    setNumber(''); // Agora o campo será redefinido para vazio
  }

  return (
    <div className='div'>
      <header>
        <h1 className='title'> <img src={foto} alt="Coração em formato de balão" className="image" />Descubra sua idade  <img src={foto} alt="Coração em formato de balão" className="image" /></h1>
       
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
            <p>Ano de Nascimento </p>
            <input
              className="input"
              type="number"
              placeholder="Digite seu ano de nascimento"
              id="anoNascimento"
              name="anoNascimento"
              value={number}
              onChange={(e) => setNumber(e.target.value)} // Agora aceita strings
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
          <h1>Querido(a) {resultado?.nome}, você nasceu em {resultado.idade}.</h1>
        
        
          
          {mensagem && (
            <section className="mensagem">
              <h1>{mensagem}</h1>
              <a  className="link" href="https://youtu.be/cl0ZQ3Nu6G0?si=dZBGpLrTUuyrJB7I">Para você</a>
            </section>
          )}
        </section>
      )}
    </div >
  );
};

export default Home;
