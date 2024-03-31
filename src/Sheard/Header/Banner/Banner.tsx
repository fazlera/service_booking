// import * as React from "react"
// import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import banner1 from "../../../assets/banner/banner1.png"

export default function Banner() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide number-slide1">
            
                <div className=" bg-gradient-to-l from-cyan-600 ">
                    <div className="w-10/12 mx-auto min-h-svh flex justify-between items-center flex-col-reverse md:flex-row">
                    <div className="font-googleFont space-y-5 md:space-y-10">

                    <p className="text-xl md:text-2xl font-semibold text-green-600 hover:scale-[1.1] duration-500">Empowering Communities for a Cleaner Planet</p>
                    <h1 className="text-2xl md:text-7xl font-extrabold hover:scale-[1.1] duration-500">Smart waste pickup <br /> solutaions</h1>
                    <p className="text-xl font-bold hover:scale-[1.1] duration-500">We have already made huge strides in our sustainability journey by investing in plastic recycling and energy <br /> from waste infrastructure and low carbon collections.</p>

                    <button className="px-10 md:px-12 py-1 md:py-4 border-2 border-gray-900 bg-green-600 text-2xl font-extrabold text-black rounded-xl hover:bg-black hover:text-white hover:scale-[1.1] duration-500">pickup Request</button>
                    </div>
                    <img className="hover:scale-[1.2]  duration-500" src={banner1} alt="" />
                    </div>
                </div>
       
        </div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </>
  )
}
