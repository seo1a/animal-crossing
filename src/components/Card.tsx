import type { villager } from "../types/villager";

// villager 타입에 onClick도 함께 받도록 확장
type CardProps = Pick<villager, 'name' | 'id' | 'image_url'> & {
    onClick: () => void;
}

export default function Card({ 
    name,
    id,
    image_url,
    onClick
}: CardProps) {
    return(
         <div 
            className="villager-card w-[140px] h-[240px] 
            md:w-[240px] md:h-[420px] 
            lg:w-[300px] lg:h-[520px]
            bg-cream rounded-3xl
            mx-2 sm:mx-5 my-8 relative group 
            border-8 border-borderColor cursor-pointer" 
            id={id}
            onClick={onClick}
        >
            <div className="relative w-full h-0 pb-[150%]">
                <img 
                    className="absolute inset-0 m-auto object-contain
                    w-[80%] h-[80%] transition-transform duration-300 
                    group-hover:scale-105" 
                    src={image_url} 
                    alt={`${name} 카드`} 
                />
            </div>
            <p className="font-sdnrBold text-fontColor text-3xl flex justify-center mt-1 mb-5">{name}</p>
        </div>
    )
}