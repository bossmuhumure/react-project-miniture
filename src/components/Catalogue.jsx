import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import react41 from "../../src/assets/react41.webp";
import useProducts from "../hooks/useProducts";
import "../styles/catalogue.css";

function Catalogue() {
  const { products, loading, error, refetch } = useProducts();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("az");

  const catalogue = [{ id: 1, image: react41 }];

  // Filter no gutondeka
  const filtered = products
    .filter((p) =>
      (p.productName || "").toLowerCase().includes(search.toLowerCase()) ||
      (p.productCategory || "").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "az") return (a.productName || "").localeCompare(b.productName || "");
      if (sortBy === "za") return (b.productName || "").localeCompare(a.productName || "");
      if (sortBy === "price-asc") return (a.productPrice || 0) - (b.productPrice || 0);
      if (sortBy === "price-desc") return (b.productPrice || 0) - (a.productPrice || 0);
      return 0;
    });

  return (
    <div>
      {/* Hero Banner */}
      <div className="catalogue">
        {catalogue.map((item) => (
          <div key={item.id} className="catalogue-1">
            <img src={item.image} alt="furniture" />
          </div>
        ))}
      </div>

      {/* Filter + Sort Bar */}
      <div className="catalogue-2">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button className="catalogue-3">Filters</button>
          <span style={{ color: "#888", fontSize: "14px" }}>
            {loading ? "..." : `${filtered.length} products`}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Search */}
          <input
            type="text"
            placeholder="Shakisha product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid #e0e0e0",
              fontSize: "13px",
              outline: "none",
              width: "200px",
            }}
          />
          {/* Sort */}
          <div className="catalogue-4">
            sort by:&nbsp;&nbsp;
            <select
              className="catalogue-5"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ cursor: "pointer" }}
            >
              <option value="az">Alphabetically, A–Z</option>
              <option value="za">Alphabetically, Z–A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <RiArrowDropDownLine className="catalogue-6" />
          </div>
        </div>
      </div>

      {/* ===== LOADING STATE ===== */}
      {loading && (
        <div className="catalogue-loading">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="catalogue-skeleton">
              <div className="skeleton-img" />
              <div className="skeleton-text" />
              <div className="skeleton-price" />
            </div>
          ))}
        </div>
      )}

      {/* ===== ERROR STATE ===== */}
      {error && !loading && (
        <div className="catalogue-error">
          <span className="catalogue-error-icon">⚠️</span>
          <div>
            <p style={{ fontWeight: 700, margin: 0 }}>Habonetse ikibazo!</p>
            <p style={{ margin: "4px 0 0", fontSize: "13px", opacity: 0.85 }}>{error}</p>
          </div>
          <button className="catalogue-retry" onClick={refetch}>
            🔄 Gerageza nanone
          </button>
        </div>
      )}

      {/* ===== EMPTY STATE ===== */}
      {!loading && !error && filtered.length === 0 && (
        <div className="catalogue-empty">
          <span style={{ fontSize: "48px" }}>📦</span>
          <p style={{ fontWeight: 600, fontSize: "16px", marginTop: "12px" }}>
            {products.length === 0
              ? "Nta products zibonetse muri database"
              : "Nta results ziboneye ishakiro ryawe"}
          </p>
          {products.length === 0 && (
            <button className="catalogue-3" onClick={refetch} style={{ marginTop: "12px" }}>
              Refresh
            </button>
          )}
        </div>
      )}

      {/* ===== PRODUCTS GRID ===== */}
      {!loading && !error && filtered.length > 0 && (
        <section className="rayon-0">
          <div className="rayon-rayon">
            {filtered.map((item) => (
              <div key={item._id} className="rayon-1">
                {item.productImage ? (
                  <img
                    src={item.productImage}
                    className="furniture"
                    alt={item.productName}
                    onError={(e) => {
                      e.target.src = react41; // fallback image
                    }}
                  />
                ) : (
                  <div className="furniture-placeholder">
                    <span>📦</span>
                  </div>
                )}
                <h2>{item.productName}</h2>
                <h3>
                  {item.productPrice != null
                    ? `$${Number(item.productPrice).toFixed(2)}`
                    : "—"}
                </h3>
                {item.productCategory && (
                  <span className="catalogue-category-tag">{item.productCategory}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Catalogue;