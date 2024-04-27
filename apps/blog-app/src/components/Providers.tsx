"use client";
import { ChildProps } from "@/utils/type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

const queryClient = new QueryClient();

const Providers: FC<ChildProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
