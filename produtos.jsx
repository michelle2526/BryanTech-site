function Produtos() {
  const listaProdutos = [
    "Capinhas",
    "Películas",
    "Carregadores",
    "Celulares"
    
  ];

  return (
    <section id="produtos" className="produtos">
      <h2>Produtos</h2>

      <div className="cards">
        {listaProdutos.map((produto, index) => (
          <div className="card" key={index}>
            {produto}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Produtos;