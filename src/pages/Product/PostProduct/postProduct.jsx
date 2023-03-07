import React from "react";
import {
  //   useGetData,
  usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";

export default function PostProduct() {
  const post = usePostData("/products");
  const data = {
    type: "max",
    active: true,
    size: "13.3",
    gender: "BOTH",
    color: "gray",
    name_Ru: "мaк",
    name_Uz: "mac",
    name_En: "Mac",
    price: 1199.99,
    discount: 10,
    description_Uz: "makbook air",
    description_Ru: "макбук эйр",
    description_En: "MacBook air",
    categoryId: "016fc031-2174-4cac-a6fd-98a29d141745",
    photoId: "873647384732463976t4",
  };

  const postData = () => {
    post.mutate(data, {
      onSuccess: (post) => console.log(post, "data"),
      onError: (error) => console.log(error, "error"),
    });
  };

  //   if (isLoading) {
  //     return <p>isLoading</p>;
  //   }
  //   if (isError) {
  //     return <p>error check your internet</p>;
  //   }
  return (
    <div>
      <button onClick={() => postData()}>create post</button>
    </div>
  );
}
