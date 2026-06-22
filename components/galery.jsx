

function Galery() {
  return (
     <div className="flex flex-col gap-[80px] py-[60px]">
       
        <div className="flex flex-col items-center">
            <div className="w-[709px] h-[176px] flex items-center justify-center">
  <h1 className=" text-[70px] leading-[88px] tracking-[0.2px] text-white text-center">
   Gallery
  </h1>
</div>
            <div className="w-[582px] h-[60px] flex items-center justify-center">
  <p className=" font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white text-center">
   We focus on ergonomics and meeting you where you work. 
It's only a keystroke away.
  </p>
</div>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center">
            <div className="max-w-[999px] max-h-[285px] flex gap-[30px]">
                <img className="h-full rounded-[10px]" src="/Rectangle 1.png" alt="" />
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (1).png" alt="" />
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (2).png" alt="" />
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (3).png" alt="" />
            </div>
            <div className=" flex gap-[30px] max-w-[1087px] max-h-[285px]">
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (6).png" alt="" />
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (4).png" alt="" />
                <img className="h-full rounded-[10px]" src="/Rectangle 1 (5).png" alt="" />
            </div>
        </div>
        <div className="flex items-center justify-center"><button className="border border-[white] py-3 px-7 text-white font-bold">See more</button></div>
        
    </div>
  )
}

export default Galery