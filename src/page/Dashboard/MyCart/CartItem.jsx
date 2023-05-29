const CartItem = ({ cart }) => {
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={cart?.image} alt={cart?.name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{cart?.name}</div>
        </div>
      </td>
      <td>{cart?.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default CartItem;
