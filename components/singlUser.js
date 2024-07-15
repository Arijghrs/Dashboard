const SinglUser = () => {
  return (
    <tr className="grid grid-cols-12 gap-4 justify-items-start  border-t-2 h-12 py-2 bg-neutral-50 text-gray-600">
      <td className="col-span-1">
        <input className="ml-4 " type="checkbox" />
      </td>
      <td className="col-span-3">Habib</td>
      <td className="col-span-3">habib@gmail.com</td>
      <td className="col-span-2">+216 55 555 555</td>
      <td className="col-span-2">01/08/2000</td>
      <td className="col-span-1"><button><img className="w-4 h-4 mt-2" src="./assets/chevron-bas.png"/></button></td>
    </tr>
  );
};
export default SinglUser;
