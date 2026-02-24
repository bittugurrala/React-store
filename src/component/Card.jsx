export default function Card({ image, title }) {
  return (
    <div className=" w-72 h-[300px] p-4 flex flex-col gap-3 justify-center items-center bg-gray-400 rounded-2xl">
      
      {/* Image Container */}
      <div className="h-48 rounded-2xl w-full flex justify-center items-center bg-white">
        <img
          src={image}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl text-black font-bold text-center line-clamp-2">
        {title}
      </h3>

    </div>
  )
}