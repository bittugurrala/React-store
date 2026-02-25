export default function Card({ image, author, url }) {
  return (
    <div className="h-full w-full">
      <div>
        <a href = {url}><img className = "h-48 w-48 object-cover rounded-2xl" src= {image} alt="author"/></a>
      </div>
      <div>
        <h3 className="mt-2 text-2xl font-bold">{author}</h3>
      </div>
    </div>
  )
}