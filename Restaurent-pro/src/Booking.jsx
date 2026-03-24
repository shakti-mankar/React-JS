import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    guests: "",
    table: "", 
    dishes: [],
  });




  const [bookings, setBookings] = useState([]);



  const [editId, setEditId] = useState(null);

  const dishOptions = ["Pizza", "Burger", "Pasta", "Biryani", "Paneer"];



  const tableOptions = ["Table 1", "Table 2", "Table 3", "VIP Table"]; 



  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleDishChange = (dish) =>
    setForm({
      ...form,
      dishes: form.dishes.includes(dish)
        ? form.dishes.filter((d) => d !== dish)
        : [...form.dishes, dish],
    });

  //  submit
  const handleSubmit = (e) => {
    e.preventDefault();

    return !form.name ||
      !form.mobile ||
      !form.date ||
      !form.time ||
      !form.guests ||
      !form.table || 
      form.dishes.length === 0
      ? alert("Fill all fields")
      : setBookings((prev) =>
          editId
            ? prev.map((b) =>
                b.id === editId ? { ...form, id: editId } : b
              )
            : [...prev, { id: Date.now(), ...form }]
        ) ||
        setEditId(null) ||
        setForm({
          name: "",
          mobile: "",
          date: "",
          time: "",
          guests: "",
          table: "",
          dishes: [],
        });
  };

  // delete
  const handleDelete = (id) =>
    setBookings((prev) => prev.filter((b) => b.id !== id));

  // edit
  const handleEdit = (booking) =>
    setForm(booking) || setEditId(booking.id);

  return (

    <>
    <div style={{ padding: "30px" }}>
      <h1>Restaurant Table Booking</h1>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={form.guests}
          onChange={handleChange}
        />
        <br /><br />

        {/* table seletc */}
        <select name="table" value={form.table} onChange={handleChange}>
          <option value="">Select Table</option>
          {tableOptions.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>

        <br /><br />

        {/* dishes */}
        {dishOptions.map((dish, i) => (
          <label key={i} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={form.dishes.includes(dish)}
              onChange={() => handleDishChange(dish)}
            />
            {dish}
          </label>
        ))}

        <br /><br />

        <button type="submit">
          {editId ? "Update Booking" : "Book Table"}
        </button>
      </form>



      {/* list */}
      <h2>Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            style={{
              border: "1px solid",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>{b.name} | {b.mobile}</p>
            <p>{b.date} | {b.time}</p>
            <p>Guests: {b.guests}</p>
            <p>Table: {b.table}</p> 
            <p>Dishes: {b.dishes.join(", ")}</p>

            <button onClick={() => handleEdit(b)}>Edit</button>
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </div>
        ))
      )}
    </div>

    </>
  )
}

export default Booking;