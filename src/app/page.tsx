import Image from "next/image"
import homeImg from "/public/home.jpg"

export default function Home() {
  return (
    <div className="absolute -z-10 inset-0">
      <div>
        Home Page
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}
