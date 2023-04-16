import Image from "next/image";
import { useState } from "react";

export default function RaceCar() {
  const [score, setScore] = useState(0)
  
  return(
    <Image
      src="/car_topview.svg"
      alt="car image"
      width={30}
      height={100}
    />
  )
}
