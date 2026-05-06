import React, { useContext, useState } from "react";
import { contextAPI } from "./ContextComponent";

const CRUDSection = ({ title, items, fields, onAdd, onUpdate, onDelete }) => {
  const [form, setForm] = useState(
    fields.reduce((acc, f) => ({ ...acc, [f]: "" }), {}),
  );
  const [editId, setEditId] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form[fields[0]].trim()) return alert(`${fields[0]} is required`);
    if (editId) {
      await onUpdate(editId, form);
      setEditId(null);
    } else {
      await onAdd(form);
    }
    setForm(fields.reduce((acc, f) => ({ ...acc, [f]: "" }), {}));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm(fields.reduce((acc, f) => ({ ...acc, [f]: item[f] || "" }), {}));
  };

  const handleCancel = () => {
    setEditId(null);
    setForm(fields.reduce((acc, f) => ({ ...acc, [f]: "" }), {}));
  };

  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, color: "#888" }}>
        {title}
      </h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {fields.map((f) => (
          <input
            key={f}
            name={f}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            value={form[f]}
            onChange={handleChange}
            style={{
              flex: 1,
              minWidth: 100,
              padding: "6px 10px",
              border: "1px solid #e0e0e0",
              borderRadius: 4,
              fontSize: 13,
              outline: "none",
            }}
          />
        ))}
        <button
          onClick={handleSubmit}
          style={{
            padding: "6px 14px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button
            onClick={handleCancel}
            style={{
              padding: "6px 14px",
              background: "none",
              border: "1px solid #e0e0e0",
              borderRadius: 4,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {items.length === 0 && (
        <p style={{ fontSize: 13, color: "#bbb", margin: 0 }}>No items yet.</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <span style={{ fontSize: 13 }}>
            {fields.map((f) => item[f]).filter(Boolean).join(" · ")}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => handleEdit(item)}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                border: "1px solid #e0e0e0",
                borderRadius: 4,
                background: "none",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                border: "none",
                borderRadius: 4,
                background: "none",
                color: "#e00",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContextChild = () => {
  const {
    products, addProduct, updateProduct, removeProduct,
    users, addUser, updateUser, removeUser,
    loading, count, setCount,
  } = useContext(contextAPI);

  if (loading)
    return <p style={{ textAlign: "center", padding: 40, color: "#999" }}>Loading…</p>;

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 16px" }}>
      {/* Counter */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>Counter</p>
        <h1 style={{ fontSize: 48, fontWeight: 300, margin: "0 0 12px" }}>{count}</h1>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{
              padding: "6px 16px",
              border: "1px solid #e0e0e0",
              borderRadius: 4,
              background: "none",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            +
          </button>
          <button
            onClick={() => setCount((c) => c - 1)}
            style={{
              padding: "6px 16px",
              border: "1px solid #e0e0e0",
              borderRadius: 4,
              background: "none",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            −
          </button>
        </div>
      </div>

      <CRUDSection
        title="Products"
        items={products}
        fields={["name", "price", "category"]}
        onAdd={addProduct}
        onUpdate={updateProduct}
        onDelete={removeProduct}
      />

      <CRUDSection
        title="Users"
        items={users}
        fields={["name", "email", "phone"]}
        onAdd={addUser}
        onUpdate={updateUser}
        onDelete={removeUser}
      />
    </div>
  );
};

export default ContextChild;