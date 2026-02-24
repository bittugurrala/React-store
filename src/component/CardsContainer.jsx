import Card from "./Card"
export default function CardsContainer({getData,items}){
    return(
        <>
            <button onClick = {getData} className="bg-green-400 text-2xl px-4 py-2 ">Get Data</button>

            <div className="flex flex-wrap gap-4">
                {items.map((item, idx) => (
                <div key = {idx}>
                    <Card image = {item.image} para = {item.description} title = {item.title}/>
                </div> 
                ))}
            </div>
        </>

    )
}