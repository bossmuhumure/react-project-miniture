import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiStar, FiPackage, FiRefreshCw, FiAlertCircle } from "react-icons/fi";
import "../../styles/DashboardPages.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:3000/api/v1/product/products");
      if (!response.ok) {
        throw new Error(`Ikibazo: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      // API isubiza { data: [...] } cyangwa array neza
      const productsData = Array.isArray(result) ? result : result.data || [];
      setProducts(productsData);
    } catch (err) {
      setError(err.message || "Ntibyashobotse gufetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered = products.filter(p =>
    (p.productName || "").toLowerCase().includes(search.toLowerCase()) ||
    (p.productCategory || "").toLowerCase().includes(search.toLowerCase())
  );

  const getStatusClass = (stock) => {
    if (stock === 0) return "status-badge out";
    if (stock < 20) return "status-badge low";
    return "status-badge active";
  };

  const getStockLabel = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 20) return "Low Stock";
    return "In Stock";
  };

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Products</h1>
          <p className="dash-page-sub">Manage your product inventory</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={fetchProducts}
            title="Refresh"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "transparent", border: "1px solid #3C50E0",
              color: "#3C50E0", padding: "8px 16px", borderRadius: "8px",
              cursor: "pointer", fontWeight: 600, fontSize: "13px"
            }}
          >
            <FiRefreshCw size={14} /> Refresh
          </button>
          <button className="dash-btn-primary">
            <FiPlus /> Add Product
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="users-stats-row">
        <div className="users-stat-card">
          <span className="users-stat-num">{products.length}</span>
          <span className="users-stat-label">Total Products</span>
        </div>
        <div className="users-stat-card">
          <span className="users-stat-num">{products.filter(p => (p.productPrice || 0) > 0 && (p.productCategory || "") !== "").length}</span>
          <span className="users-stat-label">Active</span>
        </div>
        <div className="users-stat-card">
          <span className="users-stat-num">{[...new Set(products.map(p => p.productCategory))].filter(Boolean).length}</span>
          <span className="users-stat-label">Categories</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="dash-search-bar">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          padding: "60px", flexDirection: "column", gap: "16px"
        }}>
          <div className="api-spinner"></div>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>Gutegura products...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "#fef2f2", border: "1px solid #fecaca",
          borderRadius: "12px", padding: "16px 20px", color: "#dc2626",
          marginBottom: "20px"
        }}>
          <FiAlertCircle size={20} />
          <div>
            <p style={{ fontWeight: 600, margin: 0 }}>Habonetse ikibazo!</p>
            <p style={{ fontSize: "13px", margin: "4px 0 0 0", opacity: 0.8 }}>{error}</p>
          </div>
          <button
            onClick={fetchProducts}
            style={{
              marginLeft: "auto", background: "#dc2626", color: "white",
              border: "none", borderRadius: "8px", padding: "8px 16px",
              cursor: "pointer", fontSize: "13px", fontWeight: 600
            }}
          >
            Gerageza nanone
          </button>
        </div>
      )}

      {/* Products Table */}
      {!loading && !error && (
        <div className="dash-table-card">
          {filtered.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "60px", color: "#9ca3af"
            }}>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                {products.length === 0 ? "Nta products zibonetse muri database" : "Nta results ziboneye"}
              </p>
            </div>
          ) : (
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product, idx) => (
                  <tr key={product._id || idx}>
                    <td>
                      <div className="product-name-cell">
                        {product.productImage ? (
                          <img
                            src={product.productImage}
                            alt={product.productName}
                            style={{
                              width: "36px", height: "36px", borderRadius: "8px",
                              objectFit: "cover", border: "1px solid #e5e7eb"
                            }}
                            onError={e => { e.target.style.display = "none"; }}
                          />
                        ) : (
                          <div className="product-icon-wrap">
                            <FiPackage />
                          </div>
                        )}
                        {product.productName}
                      </div>
                    </td>
                    <td><span className="category-tag">{product.productCategory || "—"}</span></td>
                    <td className="price-cell">
                      {product.productPrice != null
                        ? `$${Number(product.productPrice).toFixed(2)}`
                        : "—"}
                    </td>
                    <td style={{ maxWidth: "200px" }}>
                      <span style={{
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                        fontSize: "12px", color: "#6b7280"
                      }}>
                        {product.productDescription || "—"}
                      </span>
                    </td>
                    <td>
                      <span className={getStatusClass(product.productStock)}>
                        {getStockLabel(product.productStock)}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button className="icon-btn edit"><FiEdit2 /></button>
                        <button className="icon-btn delete"><FiTrash2 /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
