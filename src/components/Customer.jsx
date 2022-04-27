import { getCustomers } from "../services/fakeCustomerService";
import { useState } from "react";
import { Link } from "react-router-dom";
function Customer() {
  const [Customer, setCustomer] = useState(getCustomers());
  const deleteCustomer = (id) => {
    let customer = getCustomers.filter((c) => {
      return c._id !== id;
    });
    setCustomer(customer);
  };
  return (
    <div className="container flex flex-col  justify-center genre-container mt-10 bg-slate-50 p-10 shadow-2xl">
      <table>
        <tbody>
          <tr data-aos="zoom-in-left">
            <th className="header-font">Name</th>
            <th className="header-font">Phone</th>
            <th className="header-font">isGold</th>
          </tr>
          {Customer.map((c) => (
            <tr
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="table-row shadow-md rounded-lg mt-6"
              key={c._id}
            >
              <td className="font-bold">{c.name}</td>
              <td className="font-bold">{c.phone}</td>
              <td className="font-bold">{c.isGold.toString()}</td>
              {console.log(Customer)}
              <button
                className="inline-block px-6 py-2.5 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500  bg-red-600
               text-white  rounded-full "
                onClick={() => {
                  deleteCustomer(c._id);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
          <button>
            <Link to="/app/customer/new">
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </Link>
          </button>
        </tbody>
      </table>
    </div>
  );
}
export default Customer;
