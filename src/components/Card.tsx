import { useState, useRef } from "react";
import type { villager } from "../types/villager";
import { monthMap, personalityMap, speciesMap, genderMap } from "../utils/villagerMappings";
import gsap from "gsap";

type CardProps = {
    villager: villager
}

export default function Card({ villager }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setFlipped(!flipped);

        if(cardRef.current) {
            gsap.to(cardRef.current, {
                rotateY: flipped ? 0 : 180,
                duration: 0.6,
                ease: "power2.inOut",
            })
        }
    }

    const month = monthMap[villager.birthday_month] ?? "??";
    const personality_kr = personalityMap[villager.personality] ?? "알 수 없음";
    const species_kr = speciesMap[villager.species] ?? "알 수 없음";
    const gender_kr = genderMap[villager.gender] ?? "알 수 없음";

    console.log(villager.name);
    return(
        <div onClick={handleClick}>
            <div 
                className="villager-card w-[140px] h-[240px] 
                md:w-[240px] md:h-[420px] 
                lg:w-[280px] lg:h-[420px]
                bg-cream rounded-3xl
                mx-2 my-8 relative group 
                border-[13px] border-borderColor cursor-pointer" 
                ref={cardRef}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* 앞면 (backface-hidden: 카드 회전 시 뒷면이 앞에 비쳐 보이는 것 방지) */}
                <div className="absolute w-full h-full backface-hidden bg-cream rounded-3xl flex flex-col items-center justify-center">
                    <img 
                        className="object-contain w-[65%] h-[65%]"
                        src={villager.image_url} 
                        alt={`${villager.name} 카드`} 
                    />
                    <h2 
                        className="font-sdnrBold text-fontColor text-2xl text-center mt-9 px-6 py-3 rounded-3xl inline-block"
                        style={{ backgroundColor: `#${villager.title_color}`, color: `#${villager.text_color}` }}
                    >
                        {villager.name}
                    </h2>
                </div>
                
                {/* 뒷면 */}
                <div className="absolute w-full h-full backface-hidden 
                bg-cream rounded-3xl 
                px-4 py-6 text-fontColor transform rotateY-180 
                flex flex-col justify-center">
                    <img
                        className="mx-auto object-contain w-[25%] h-[25%]"
                        src={villager.image_url} 
                        alt={`${villager.name} 카드`} 
                    />
                    <h2 className="text-center mt-6 mb-2 text-2xl font-sdnrBold">{villager.name}</h2>
                    <div className="text-lg font-mapleBold mx-4 self-start">
                        <p className="mb-1">종: {species_kr}</p>
                        <p className="mb-1">성격: {personality_kr}</p>
                        <p className="mb-1">성별: {gender_kr}</p>
                        <p className="mb-1">생일: {month}월 {villager.birthday_day}일</p>
                        <p className="mb-1">대사: {villager.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}