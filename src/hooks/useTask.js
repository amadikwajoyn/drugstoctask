import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCollection } from "../helpers";

export const useTask = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [inputs, setInputs] = useState({
    username: "",
    price: "",
    task: "",
    delivery_at: "",
    url: "",
    tag: "",
    status: "Waiting Approval",
  });

  useEffect(() => {
      if (id);
  }, [])

  const handleChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const addTask = async (event) => {
    event.preventDefault();
    const docRef = await createCollection("tasks", inputs);
    navigate("/");
  };

  return {
    inputs,
    handleChange,
    addTask,
  };
};
