import Box from "../Box/Box";

export default function Layout() {
  const content = [" ABOUT - ME ", " MY - PORTFOLIO ", " GET - INTOUCH "];
  return (
    <div className="px-8 h-screen">
      <div className=" grid lg:grid-cols-3  gap-8 h-full">
        <div className=" hidden lg:block">
          <img
            className="size-full"
            src="https://moscow-react.vercel.app/images/woman.jpg"
            alt=""
          />
        </div>
        <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center bg-mainColor">
            <div className="text-center text-colorText">
              <p className="text-Paragraf">Hi There ! I&rsquo;m </p>
              <p className="font-bold"> AHMED MOHAMED SHALABY</p>
              <span className="text-Paragraf text-colorWord lg:text-[20px] font-bold">
                FRONT END
              </span>
            </div>
          </div>
          {content.map((ele) => {
            return <Box content={ele} key={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}
