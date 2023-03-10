import React, { useEffect } from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  useDeleteData,
} from "../../../axios/hooks";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { instance } from "../../../axios/axios";

export default function DeleProduct(props) {
  const [m, setM] = useState([]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const get = instance.get(`products/${props.id}`).then((res) => {
      setM(res?.data);
    });
  }, [props.id]);
  //   console.log(m);

  const onSubmit = (data) =>
    deleteData({
      ...data,
      price: Number(data.price),
      discount: Number(data.discount),
    });

  const post = useDeleteData(`/products/${props.id}`);

  const deleteData = (data) => {
    post.mutate(data, {
      onSuccess: (post) => alert("deleted"),
      onError: (error) => alert("error"),
    });
  };

  const [open, setOpen] = useState(false);
  return (
    <div id="form">
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Modal
          className="modal"
          title="Delete post"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="submit" />
            </form>
          </>
        </Modal>
      </>
    </div>
  );
}
