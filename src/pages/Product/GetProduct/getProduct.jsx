import React from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";

export default function GetProduct() {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(["products"], `/products`);
  console.log();

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      {products?.data?.category?.map((e) => {
        return (
          <div key={e.id}>
            <div>
              {console.log(e)}
              <h4>{e.id}</h4>
              <p>{e.gender}</p>
              <p>{e.name_Ru}</p>
              <p>{e.description_Ru}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
