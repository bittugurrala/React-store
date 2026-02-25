import Card from "./Card"
export default function CardsContainer({items}){
    return(
        <>
            
            <div className="flex flex-wrap gap-6 max-w-7xl justify-center p-4">
                {items.map((item, idx) => (
                <div key = {idx}>
                    <Card image = {item.download_url} author = {item.author} url = {item.url}/>
                </div> 
                ))}
            </div>
        </>

    )
}