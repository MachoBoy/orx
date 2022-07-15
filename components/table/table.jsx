const Table = ({ data, fetchTodoList }) => {
  const setAddress = (address) => {
    const { street, suite, city, zipcode } = address;
    return `${street} ${suite} ${city} ${zipcode}`;
  };

  return (
    <div>
      <table className='mt-16 w-full'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map(
                ({ id, name, email, address, phone, website }, index) => {
                  return (
                    <tr
                      key={index}
                      className='text-center cursor-pointer'
                      onClick={() => fetchTodoList(id)}
                    >
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{setAddress(address)}</td>
                      <td>{website}</td>
                    </tr>
                  );
                }
              )
            : null}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
