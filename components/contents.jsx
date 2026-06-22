

function Contents() {
  return (
      <div className="flex flex-col gap-[80px] py-[60px]">
       
        <div className="flex flex-col items-center">
            <div className="w-[709px] h-[176px] flex items-center justify-center">
  <h1 className=" text-[70px] leading-[88px] tracking-[0.2px] text-white text-center">
   Contents
  </h1>
</div>
            <div className="w-[582px] h-[60px] flex items-center justify-center">
  <p className=" font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white text-center">
   We focus on ergonomics and meeting you where you work. It's only a keystroke away.
  </p>
</div>
        </div>
       <div className="flex max-w-[985px] container mx-auto gap-[33px]">
        <div class="mx-auto max-w-xl rounded-xl border border-blue-500 bg-white p-8 shadow-sm md:p-12">
  <div class="text-center">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Work
    </h2>
    <p class="mx-auto mt-4 max-w-sm text-base text-gray-500 sm:text-lg">
      Ever wondered if you're too reliant on a client for work? Slate helps you identify.
    </p>
  </div>

  <div class="mt-8 text-center">
    <button class="inline-block rounded bg-indigo-600 px-10 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors">
      Sign Up
    </button>
  </div>

  <div class="mx-auto mt-12 max-w-md">
    <img 
      src="/Macbook Pro.png" 
      alt="Slate dashboard showing transactions mockup" 
      class="h-auto w-full max-h-80 object-contain"
    />
  </div>
</div>
<div class="mx-auto max-w-xl rounded-xl border border-blue-500 bg-white p-8 shadow-sm md:p-12">
  <div class="text-center">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Design with real data
    </h2>
    <p class="mx-auto mt-4 max-w-sm text-base text-gray-500 sm:text-lg">
      Ever wondered if you're too reliant 
on a client for work? Slate helps 
you identify .
    </p>
  </div>

  <div class="mt-8 text-center">
    <button class="inline-block rounded bg-indigo-600 px-10 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors">
      Try For Free
    </button>
  </div>

  <div class="mx-auto mt-12 max-w-md">
    <img 
      src="/Boards Notifications.png" 
      class="h-auto w-full max-h-80 "
    />
  </div>
</div>
       </div>
    </div>
  )
}

export default Contents