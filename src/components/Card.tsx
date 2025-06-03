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
                duration: 0.3,
                ease: "power2.inOut",
            })
        }
    }

    const handleMouseEnter = () => {
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                scale: 1.05,
                y: -10,
                boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                scale: 1,
                y: 0,
                boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const month = monthMap[villager.birthday_month] ?? "??";
    const personality_kr = personalityMap[villager.personality] ?? "알 수 없음";
    const species_kr = speciesMap[villager.species] ?? "알 수 없음";
    const gender_kr = genderMap[villager.gender] ?? "알 수 없음";

    return(
        <div onClick={handleClick}>
            <div 
                className="villager-card 
                 w-[30vw] max-w-[280px] min-w-[120px] 
                aspect-[2/3]
                rounded-3xl
                sm:mx-2 my-4 sm:my-8 relative group 
                cursor-pointer" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
                style={{ 
                    transformStyle: "preserve-3d", 
                    backgroundColor: `#${villager.title_color}` 
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full 
                bg-white opacity-60 z-0 
                border-[8px] sm:border-[13px] border-borderColor rounded-3xl" />
                
                {/* 앞면 (backface-hidden: 카드 회전 시 뒷면이 앞에 비쳐 보이는 것 방지) */}
                <div className="absolute w-full h-full backface-hidden rounded-3xl flex flex-col items-center justify-center z-10">                   
                    <img 
                        className="object-contain w-[50%] sm:w-[60%] h-[50%] sm:h-[60%] relative z-10"
                        src={villager.image_url} 
                        alt={`${villager.name} 카드`} 
                    />
                    <h2 
                        className="font-sdnrBold text-fontColor text-lg sm:text-2xl text-center 
                        mt-4 sm:mt-9 px-2 sm:px-6 sm:py-3 
                        rounded-3xl inline-block relative z-10"
                        style={{ backgroundColor: `#${villager.title_color}`, color: `#${villager.text_color}` }}
                    >
                        {villager.name}
                    </h2>
                </div>
                
                {/* 뒷면 */}
                <div className="absolute w-full h-full backface-hidden 
                    bg-cream rounded-3xl 
                    px-2 sm:px-4 py-2 sm:py-6 text-fontColor transform rotateY-180 
                    border-[8px] sm:border-[13px] border-borderColor
                    flex flex-col justify-center"
                >
                    <img
                        className="mx-auto object-contain w-[25%] h-[25%]"
                        src={villager.image_url} 
                        alt={`${villager.name} 카드`} 
                    />
                    <h2 className="text-center mt-2 sm:mt-6 mb-1 sm:mb-4 text-sm sm:text-2xl font-sdnrBold">{villager.name}</h2>
                    <div className="text-[10px] sm:text-lg font-mapleBold mx-1 sm:mx-4 
                        self-start overflow-y-auto md:pr-1">
                        <p className="md:mb-1">종: {species_kr}</p>
                        <p className="md:mb-1">성격: {personality_kr}</p>
                        <p className="md:mb-1">성별: {gender_kr}</p>
                        <p className="md:mb-1">생일: {month}월 {villager.birthday_day}일</p>
                        <p className="md:mb-1 break-words whitespace-pre-wrap">대사: {villager.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}