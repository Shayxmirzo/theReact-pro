

function Header() {
  return (
    <div className="flex flex-col gap-[120px]">
    <div className="container mx-auto flex justify-center">
        <div className="p-3 max-w-[1097px] w-full max-h-[119px] flex justify-between items-center">
            <div className="max-w-[206px] max-h-[78px]"><img className="w-full h-full" src="/public/Rectangle 4.png" alt="" /></div>
            <div className="max-w-[393px] max-h-[44px] ">
                <ul className="hidden sm:flex gap-8 text-white">
                <li className="font-['Graphik'] font-medium text-[16px] leading-[24px] tracking-[0.2px] text-center"><a href="#">Home</a> </li>
                <li className="font-['Graphik'] font-medium text-[16px] leading-[24px] tracking-[0.2px] text-center"><a href="#">Product</a></li>
                <li className="font-['Graphik'] font-medium text-[16px] leading-[24px] tracking-[0.2px] text-center"><a href="#">About</a></li>
                <li className="font-['Graphik'] font-medium text-[16px] leading-[24px] tracking-[0.2px] text-center"><a href="#">Contact</a></li>
                </ul>
                <img className="max-w-[44px] max-h-[44px]" src="/public/PngItem_6342297.png" alt="" />
                </div>
            <div className="max-w-[139px] max-h-[52px]"><button className="border border-[white] py-2 px-6 text-[white]">Login</button></div>  
        </div>

    </div>
    <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
            <div className="w-[709px] h-[176px] flex items-center justify-center">
  <h1 className="font-medium text-[70px] leading-[88px] tracking-[0.2px] text-white text-center">
   Work at the speed of thought
  </h1>
</div>
            <div className="w-[582px] h-[60px] flex items-center justify-center">
  <p className=" font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white text-center">
   Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
  </p>
</div>
        </div>
    </div>
    <div className="flex items-center justify-center gap-[35px]">
        <button className="py-4 px-6 bg-[#4452FE] text-white">Try For Free</button>
        <button className="py-4 px-6 border border-[white] text-white">Learn More</button>
    </div>
    </div>
   
  )
}

export default Header