"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";

const AxeInitializer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      axe(React, ReactDOM, 1000);
    }
  }, []);

  return null;
};

export default AxeInitializer;
