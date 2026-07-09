import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import ProductForm from "../../../components/ProductForm";


export default function Edit(){

  const { slug } = useParams();

  const [product,setProduct] = useState(null);


  useEffect(()=>{

    api.get(`admin/produtos/${slug}`)
      .then(response=>{
        setProduct(response.data);
      });

  },[slug]);


  if(!product){
    return <p>Carregando...</p>
  }


  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Editar Produto
      </h1>


      <ProductForm
        mode="edit"
        initialProduct={product}
      />
    </div>

  );

}