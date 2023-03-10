import { Route, Routes } from "react-router-dom";
import Allusers from "../../pages/AllUsers";
import DeleProduct from "../../pages/Product/deleteProduct/deleteProduct";
import EditProduct from "../../pages/Product/EditProduct/editProduct";
import GetProduct from "../../pages/Product/GetProduct/getProduct";
import GetProductByCateg from "../../pages/Product/GetProductByCateg/getProductByCateg";
import PostProduct from "../../pages/Product/PostProduct/postProduct";

export default function Routs() {
  return (
    <div>
      <Routes>
        <Route path="/allusers" element={<Allusers />} />
        <Route path="/allproduct" element={<GetProduct />} />
        <Route path="/postproduct" element={<PostProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/deleteproduct" element={<DeleProduct />} />
        <Route path="/productcateg" element={<GetProductByCateg />} />
      </Routes>
    </div>
  );
}
