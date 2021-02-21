import React, { useEffect, useState } from "react";
import api from "../../../services/api";

export default function useBooks() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    setLoading(true);

    api
      .get("books")
      .then((books) => setBooks(books.data))
      .catch((error) => setError(error));
  }, []);
  return { books, loading, error };
}
