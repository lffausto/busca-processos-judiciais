const BuscaProcesso = require("busca-processos-judiciais");

async function buscarProcesso() {
  const busca = new BuscaProcesso(
    "TRF4",
    "APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==",
  );
  return busca.getCleanResult("50342112220234040000");
}

buscarProcesso()
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));
  
