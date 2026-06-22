

function Partners() {
  return (
   <div className="flex flex-col gap-[80px] py-[60px]">
       
        <div className="flex flex-col items-center">
            <div className="w-[709px] h-[176px] flex items-center justify-center">
  <h1 className=" text-[70px] leading-[88px] tracking-[0.2px] text-white text-center">
   Partners
  </h1>
</div>
            <div className="w-[582px] h-[60px] flex items-center justify-center">
  <p className=" font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white text-center">
   We focus on ergonomics and meeting you where you work. 
It's only a keystroke away.
  </p>
</div>
        </div>
        <div className="container mx-auto max-w-[832px] flex items-center justify-center gap-[75px]">
            <img src="/logos_apple-app-store.png" alt="" />
            <img src="/logos_apiary.png" alt="" />
            <img src="/logos_android-icon.png" alt="" />
            <img src="/logos_basecamp.png" alt="" />
            <img src="/logos_airbnb.png" alt="" />
            <img src="/logos_ibm.png" alt="" />
        </div>
        <div className="flex items-center justify-center"><button className="border border-[white] py-3 px-7 text-white font-bold">All Partners</button></div>
        
    </div>
  )
}

export default Partners