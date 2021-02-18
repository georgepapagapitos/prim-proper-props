function GuestList({ guestList, removeGuest }) {
  return (
    <>
      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <td>
                <button data-id={guest.id} onClick={removeGuest}>
                  Remove Guest
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GuestList;
