import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

export const useGetData = (keys, url, options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};
export const useDeleteData = (url) => {
  return useMutation(() => instance.delete(url));
};
export const usePostData = (url, options) => {
  return useMutation((data) => instance.post(url, data), {
    ...options,
  });
};
export const useEditData = (url) => {
  return useMutation((data) => instance.patch(url, data));
};
