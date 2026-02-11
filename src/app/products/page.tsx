// npm run dev para rodar
// essa pagina necessita colocar "/products" apos o localhost:300, pois e uma subpasta
// "p-5" e uma borda de 5, "rouded-x1" e um arredondamento na borda

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Products page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora ficar rico?" />
    </div>
  );
};

export default ProductPage;
