"use client";
import React, { FC, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Tag } from "@prisma/client";
import { FormInputPost, FormPostProps } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPost: FC<FormPostProps> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });
  
  const [selectedTag, setSelectedTag] = useState<Tag | null>(
    initialValue?.tag || null
  );

  const { data: tags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data.tags;
    },
  });

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tagId = e.target.value;
    const selectedTag = tags?.find((tag) => tag.id === tagId);
    setSelectedTag(selectedTag || null);
  };

  const onSubmit = (formData: FormInputPost) => {
    const dataWithSelectedTag: FormInputPost = {
      ...formData,
      tag: selectedTag || initialValue?.tag,
    };
    submit(dataWithSelectedTag);
    toast.success(`Post ${isEditing ? "updated" : "created"} successfully !`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-5 mt-10"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Blog Post Title..."
        className="input w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        {...register("content", { required: true })}
        placeholder="Post content..."></textarea>
      {isLoadingTags ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <select
          className="select select-bordered w-full max-w-lg"
          {...register("tag.id", { required: true })}
          onChange={handleTagChange}
          defaultValue={initialValue?.tag?.id || ""}>
          <option value={initialValue?.tag?.id || ""}>
            {initialValue?.tag?.name || "Select Tag"}
          </option>
          {tags?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update Blog Post" : "Create Post"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default FormPost;
