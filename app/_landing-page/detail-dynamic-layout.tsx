import Card from "./card";

export default function DetailDynamicLayout(){
    
    const data = [
        {title: "Card 1"},
        {title: "Card 2"},
        {title: "Card 3"},
        // {title: "Card 4"},
        // {title: "Card 4"},
        // {title: "Card 4"},
        // {title: "Card 4"},
        // {title: "Card 4"},
    ];

    if(data.length === 1){
        return (
            <div className="w-full h-full grid grid-cols-1 grid-rows-1">
                <Card type="detail" title={data[0].title} />
            </div>
        )   
    }else if(data.length === 2){
        return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-1 gap-6">
                {data.map((item, index) => (
                    <Card key={index} type="detail" title={item.title} />
                ))}
            </div>
        )   
    }else if(data.length === 3){
        return (
            <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-6">
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[0].title} />
                    <Card type="detail" title={data[1].title} />
                </div>
                <div className="grid grid-cols-1 grid-rows-1">
                    <Card type="detail" title={data[2].title} />
                </div>
            </div>
        )   
    }else if (data.length === 4){
        return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
                {data.map((item, index) => (
                    <Card key={index} type="detail" title={item.title} />
                ))}
            </div>
        )   
    }else if (data.length == 5){
        return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
                <Card type="detail" title={data[0].title} />
                <Card type="detail" title={data[1].title} />
                <Card type="detail" title={data[2].title} />
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[3].title} />
                    <Card type="detail" title={data[4].title} />
                </div>  
            </div>
        )
    }else if(data.length === 6){
        return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
                <Card type="detail" title={data[0].title} />
                <Card type="detail" title={data[1].title} />
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[2].title} />
                    <Card type="detail" title={data[3].title} />
                 </div>
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[4].title} />
                    <Card type="detail" title={data[5].title} />
                 </div>
            </div>
        )
    }else if (data.length === 7){
       return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
                <Card type="detail" title={data[0].title} />
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[1].title} />
                    <Card type="detail" title={data[2].title} />
                 </div>
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[3].title} />
                    <Card type="detail" title={data[4].title} />
                 </div>
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[5].title} />
                    <Card type="detail" title={data[6].title} />
                 </div>
            </div>
        )
    }else if(data.length === 8)  {
         return (
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[0].title} />
                    <Card type="detail" title={data[1].title} />
                 </div>
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[2].title} />
                    <Card type="detail" title={data[3].title} />    
                 </div>
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[4].title} />
                    <Card type="detail" title={data[5].title} />
                 </div>
                 <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <Card type="detail" title={data[6].title} />
                    <Card type="detail" title={data[7].title} />
                 </div>
            </div>
        )
    } 
}
