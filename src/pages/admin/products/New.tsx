import ProductForm from "../../../components/ProductForm";

export default function New(){

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-2xl font-bold">
          Novo Produto
        </h1>

        <p className="text-sm text-gray-500">
          Cadastre um novo jogo no catálogo
        </p>
      </div>


      <ProductForm mode="new"/>

    </div>
  );
}