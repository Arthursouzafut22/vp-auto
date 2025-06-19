import { useCallback, useEffect, useState } from "react";


const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState([]);

  const fetchCarros = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/api.json");
      if (!response.ok) throw new Error("Falha na resposta do servidor.");
      const json = await response.json();
      setDados(json)
    } catch (error) {
      console.error("Falha ao conectar ao servidor.", error);
      throw new Error("Falha ao buscar carros. Tente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCarros();
  }, [fetchCarros]);

  return {
    loading,
    dados,
  };
};

export { useFetch };