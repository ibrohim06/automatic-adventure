import React from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";

export default function GetProductByCateg() {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(
    ["products"],
    "/products/category/016fc031-2174-4cac-a6fd-98a29d141745"
  );
  console.log();
  products?.data?.map((e) => {
    console.log(e.Category.id);
  });

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      {/* {products?.data?.category?.map((e) => {
        return (
          <div key={e.id}>
            <div>
              {console.log(e)}
              <h4>{e.id}</h4>
              <p>{e.gender}</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
