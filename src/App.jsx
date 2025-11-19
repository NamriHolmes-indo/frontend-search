import { useState } from "react";
import "./assets/App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState(false);

  const handleSearch = async () => {
    setError("");
    setEmpty(false);

    if (!query.trim()) {
      setError("Query cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (res.status === 400) {
        setError(data.error);
        setResults([]);
      } else if (data.results?.length === 0) {
        setEmpty(true);
        setResults([]);
      } else {
        setResults(data.results);
        setSummary(data.summary);
      }
    } catch (err) {
      setError("Failed to connect to server");
    }

    setLoading(false);
  };

  return (
    <div className="search-container">
      <h2>FAQ Search</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {empty && <p className="empty">No matches found.</p>}

      {summary && (
        <div className="summary">
          <h4>Summary</h4>
          <p>{summary}</p>
        </div>
      )}

      <div className="results">
        {results.map((item) => (
          <div className="item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body.slice(0, 120)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
