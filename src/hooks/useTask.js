import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCollection } from "../helpers";

export const useTask = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    price: "",
    task: "",
    delivery_at: "",
    url: "",
    tag: "",
    status: "Waiting Approval",
  });

  const handleChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const addTask = async (event) => {
    event.preventDefault();
    await createCollection("tasks", inputs);
    navigate("/");
  };

  return {
    inputs,
    handleChange,
    addTask,
  };
};
