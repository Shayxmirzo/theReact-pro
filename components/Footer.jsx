

function Footer() {
  return (
    <div className="container mx-auto flex items-center justify-between max-w-[1031px] gap-[80px] py-[60px]">
      <div className="text-white flex gap-[70px]">
        <div className="flex flex-col gap-[30px]">
            <h1 className="text-[20px]">Fingertipe</h1>
            <ul className="flex flex-col gap-[20px]">
                <li>Home</li>
                <li>Examples</li>
                <li>Pricing</li>
                <li>Updates</li>
            </ul>
        </div>
        <div className="flex flex-col gap-[30px]">
            <h1 className="text-[20px]">Resources</h1>
            <ul className="flex flex-col gap-[20px]">
                <li>Home</li>
                <li>Examples</li>
                <li>Pricing</li>
                <li>Updates</li>
            </ul>
        </div>
        <div className="flex flex-col gap-[30px]">
            <h1 className="text-[20px]">About</h1>
            <ul className="flex flex-col gap-[20px]">
                <li>Home</li>
                <li>Examples</li>
                <li>Pricing</li>
                <li>Updates</li>
            </ul>
        </div>
      </div>
      <div class=" p-6 text-white max-w-sm">
 
  <div class="flex flex-col gap-6">
    
  
    <div class="flex items-center gap-4">
      
      <img 
        src="/public/bx_bx-map.png" 
        alt="" 
        class=""
      />
      <span class="text-sm tracking-wide font-normal">
        7480 Mockingbird Hill undefined
      </span>
    </div>

  
    <div class="flex items-center gap-4">
    
      <img 
        src="/public/ic_baseline-phone-android.png" 
        alt="" 
        class=""
      />
      <span class="text-sm tracking-wide font-normal">
        (239) 555-0108
      </span>
    </div>

  </div>


  <div class="flex items-center gap-6 mt-8">
 
    <a href="#" class="inline-block transition-opacity hover:opacity-80">
      <img 
        src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" 
        alt="" 
        class=""
      />
    </a>
    
    
    <a href="#" class="inline-block transition-opacity hover:opacity-80">
      <img 
        src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" 
        alt="" 
        class=""
      />
    </a>

  
    <a href="#" class="inline-block transition-opacity hover:opacity-80">
      <img 
        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
        alt="" 
        class=""
      />
    </a>
  </div>
</div>
    </div>
  )
}

export default Footer