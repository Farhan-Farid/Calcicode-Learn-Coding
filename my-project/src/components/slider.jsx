import "../index.css";
import { useState } from "react";
function Slider() {
  const [slide, setSlide] = useState(1);

  return (
    <>
      <div className="slidercont w-full h-300 bg-gray-700  ">
        <div className="sliderwrapper flex max-w-full max-h-200 ">
          <button className="text-white absolute bottom-[200px] left-0 text-3xl">&lt;</button>
          <img
            style={{
              display:
                slide === 1
                  ? "Block"
                  : slide === 2
                  ? "None"
                  : slide === 3
                  ? "None"
                  : "Other",
            }}
            src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            alt=""
          />
          <img
            style={{
              display:
                slide === 2
                  ? "Block"
                  : slide === 1
                  ? "None"
                  : slide === 3
                  ? "None"
                  : "Other",
            }}
            className="hidden"
            src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
            alt=""
          />
          <img
            style={{
              display:
                slide === 3
                  ? "Block"
                  : slide === 1
                  ? "None"
                  : slide === 2
                  ? "None"
                  : "Other",
            }}
            className="hidden"
            src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt=""
          />
          <button
            onClick={() => setSlide((prev) => (prev === 3 ? 1 : prev + 1))}
            className="text-white absolute bottom-[200px] right-0 text-3xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
export default Slider;
