export default function Product({ id, name, unit, price, image }) {
  return (
    <div className="flex flex-col w-48 p-1 mb-5">
      <div className="relative rounded bg-gradient-to-b from-white to-gray-300">
        <img
          className="w-48 h-48 object-cover rounded"
          src={image.url}
          alt={id}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "https://usefulangle.com/img/thumb/ui-ux.png";
          }}
        />
        <div className="absolute right-3 bottom-2 font-medium text-white text-lg">
          ${price}
        </div>
      </div>
      <div className="text-sm font-semibold mt-4">
        <div className="text-gray-800 truncate">{name}</div>
        <div className="text-gray-500">{unit}</div>
      </div>
      <div className="bg-gray-300 text-gray-800 font-bold text-sm text-center p-2 rounded-md mt-4 cursor-pointer">
        Add to bag
      </div>
    </div>
  );
}
