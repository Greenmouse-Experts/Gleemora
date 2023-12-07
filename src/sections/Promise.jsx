import React from "react";

const PromiseSection = () => {
  return (
    <>
      <div className="bg-[#FFF8F9]">
        <div className="boxing">
          <div className="flex justify-between items-center py-12">
            <div className="lg:w-4/12">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701951271/Gleemora/Pinky_promise-bro_1_struur.png"
                alt="reading"
                className="w-full lg:w-11/12"
              />
            </div>
            <div className="lg:w-7/12 flex justify-end">
              <div>
                <p className="mulish lg:text-3xl lg:text-end font-semibold">
                  Our Promise
                </p>
                <div className="mt-10">
                  <p className="sora leading-loose text-end">
                    From that first unsettling symptom, through the anxious
                    moments awaiting a diagnosis, the weight of the weeks
                    leading up to surgery, and the tender days of recovery —
                    Gleemora will be there with you, every heartbeat, every
                    tear, every step of the way. You should never walk this
                    journey alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromiseSection;
