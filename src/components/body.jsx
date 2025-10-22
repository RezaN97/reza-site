import ssApp1 from '../img/ss-app1.png'
import ssApp2 from '../img/ss-app2.png'
const Body = () => {
    return (
        <>
        <div className="bg-gray-700 w-full h-auto relative font-sans flex flex-col text-white">
           <div className="">
            
             <HeaderText/>
            
            </div>
            <div className=" mt-50 border-t-2 borderbt-white">
            <Portofolio/>
            </div>
        </div>
        </>
    )
}

    export default Body


export const HeaderText = () => {
    return (
        <>
        {/* mobile */}
            <div className="sm:hidden w-110 mt-10 h-60 font-medium text-10 ">
                <h1 className="text-3xl text-left ml-3">Hi, I'am Reza</h1>
                <p className="ml-1 w-68 text-[18px] font-light text-justify">I'm fullstack developer who builds web
                     applications from user interface design to backend logic.
                      with experience in Express.js, MySQL, and React,
                     I focus on creating scalable and secure solutions.</p>
            
            {/* icon  */}
            <div className='flex gap-5 mx-4'>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    Javascript
                </div>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    React 
                </div>
            </div>
            <div className='flex gap-5 mx-4'>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    Git
                </div>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    Tailwindcss 
                </div>
            </div>
            <div className='flex gap-5 mx-4'>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    Express js
                </div>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    Next js 
                </div>
            </div>
            <div className='flex gap-5 mx-4'>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    REST API
                </div>
                <div className='mt-2 border-2 w-30 h-10 rounded flex justify-center items-center hover:bg-amber-300'>
                    JWT 
                </div>
            </div>
         
         
            </div>
        {/* desktop */}
            <div  className="max-sm:hidden flex flex-col w-full h-80 mt-20 font-medium text-10 ">
                <h1 className='text-6xl flex mx-4'>Hi, I'am Reza</h1>
                <p className="w-[80vw] ml-4 mt-10 text-2xl font-light mb-5 text-left">I'm fullstack developer who builds web
                     applications from user interface design to backend logic.
                      With experience in Express.js, MySQL, and React,
                     I focus on creating scalable and secure solutions.</p>
              {/* icon skill */}
                <div className="flex gap-5 mx-3 font-mono">
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>Javascript</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>Tailwind</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>React</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>Express</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>Next Js</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>MySQL</h1>
                    </div>
                    <div className="w-25 h-10  bg-black rounded-xl p-2">
                        <h1>Rest API</h1>
                    </div>
                </div>
            </div>

        </>
    )
}


export const Portofolio = () => {
    return (
        <>
        {/* mobile device */}

         <div className="sm:hidden mt-10 w-full">
            <h1 className="text-4xl font-semibold">Portofolio</h1>
                {/* CONTENT */}
                <div className="w-full h-auto ">
                    {/* content 1 */}
                    <div className="flex justify-center mt-2 mb-15 w-full">
                        {/* picture */}
                        <div className="bg-orange-500 w-100 h-auto flex justify-center items-center">
                            <img className='w-100 h-50' src={ssApp1} alt="App TodoList" />
                        
                        </div>
                        {/* text and logo */}
                        <div className="bg-orange-400 text-left w-[80vw] h-[40vh]">
                                <p className='pt-2 pl-5 font-semibold'>This apps todo list with feature: <br />
                                </p>
                                <p className=' pl-5 mb-2 text-[10px] '>
                                    1.Display your personal information like username and jabatan/ jobdesk <br />
                                    2. Display realtime timezone at right side <br />
                                    3. Set your task inside it, and you can set that priority of your task off course

                                </p>
                        {/* button */}
                        <button className='ml-20 bg-orange-600 w-20 h-10 rounded'><a className='text-white' href="https://github.com/RezaN97/Simple-TodoListAPP">Github</a></button>
                        </div>
                    </div>
                    {/* content 2 */}
                        <div className=" flex justify-center mt-4 w-full h-auto">
                            {/* picture */}
                            <div className="bg-gray-900 p-1 w-[42vw] h-[58vh] flex justify-center items-center">
                                <img className='w-auto h-60  ' src={ssApp2} alt="App TodoList" />
                            
                            </div>
                            {/* text and logo */}
                            <div className=" bg-gray-800 text-left w-[80vw] h-[58vh]">
                                    
                                    <p className='pl-5 pt-1 font-semibold'>
                                    Welcome to Chill Movie
                                    Your personal gateway to the world of entertainment—where movies meet simplicity and control.
                                    </p>
                                    <p className='ml-8 text-[14px]'>
                                    
                                    1 Login System
                                    Secure access with personalized login. Whether you're a casual viewer or an admin, your experience starts with a smooth sign-in.
                                    <br />
                                    2. Daftar Film
                                    Explore a curated list of films from all genres. From timeless classics to trending blockbusters—everything is just a click away.

                                    <br />
                                    3. Series Film
                                    Binge-worthy series at your fingertips. Track episodes, discover new shows, and never miss a cliffhanger again.

                                    <br />
                                    4. Film Saya
                                    Your personal watchlist. Save favorites, track what you've watched, and build your own movie universe.

                                    <br />
                                    5. Admin Panel
                                    Manage content, users, and updates with ease. The admin dashboard gives full control over the platform’s backend—perfect for scaling and customization.


                                    </p>
                            {/* button */}
                            <div className="flex mt-3">
                                <button className='ml-10 bg-red-600 w-20 h-10 rounded'><a className='font-bold' href="https://github.com/RezaN97/Chill-Movie/tree/study">Github</a></button>
                                <button className='ml-10 bg-red-600 w-20 h-10 rounded'><a className='font-bold' href="https://chill-movie-six.vercel.app/">Visit</a></button>

                            </div>
                        </div>
                    </div>
              </div>


        </div>






{/* dekst device */}
        
        <div className="max-sm:hidden right-10 mt-10">
            <h1 className="text-5xl text-center font-semibold">Portofolio</h1>
                {/* CONTENT */}
                <div className="w-full h-auto ">
                    {/* content 1 */}
                    <div className="flex justify-center mt-10 mb-15 w-full">
                        {/* picture */}
                        <div className="bg-orange-500  p-10 w-[40vw] h-[40vh] flex justify-center items-center">
                            <img className='w-60 pb-9 rounded-t-lg' src={ssApp1} alt="App TodoList" />
                        
                        </div>
                        {/* text and logo */}
                        <div className="bg-orange-400 text-left w-[80vw] h-[40vh]">
                                <h2 className='text-2xl font-bold ml-8 underline'>Todo List Apps</h2>
                                <p className='pt-2 pl-5 font-semibold'>This app have some feature: <br />
                                </p>
                                <p className='pt-2 pl-5 mb-3 text-[14px]'>
                                    1.Display your personal information like username and job position/ jobdesk <br />
                                    2. Display realtime timezone at right side <br />
                                    3. Set your task inside it, and you can set that priority of your task off course

                                </p>
                        {/* button */}
                        <button className='ml-20 bg-orange-600 w-20 h-10 hover:bg-orange-800 rounded font-semibold'><a className='text-white' href="https://github.com/RezaN97/Simple-TodoListAPP">Github</a></button>
                        </div>
                    </div>
                    {/* content 2 */}
                        <div className=" flex justify-center mt-4 w-full h-auto">
                            {/* picture */}
                            <div className="bg-gray-900 p-1 w-[42vw] h-[58vh] flex justify-center items-center">
                                <img className='w-auto h-full py-5  ' src={ssApp2} alt="App TodoList" />
                            
                            </div>
                            {/* text and logo */}
                            <div className=" bg-gray-800 text-left w-[80vw] h-[58vh]">
                                    
                                    <p className='pl-5 pt-1 text-2xl font-bold underline'> Chill Movies - Streaming Movie</p>
                                    <p className='ml-8 text-[14px] w-180'>
                                  <strong> Feature:</strong>   <br />
                                    1 Login System
                                    Secure access with personalized login. Whether you're a casual viewer or an admin, your experience starts with a smooth sign-in.
                                    <br />
                                    2. Daftar Film
                                    Explore a curated list of films from all genres. From timeless classics to trending blockbusters—everything is just a click away.

                                    <br />
                                    3. Series Film
                                    Binge-worthy series at your fingertips. Track episodes, discover new shows, and never miss a cliffhanger again.

                                    <br />
                                    4. Film Saya
                                    Your personal watchlist. Save favorites, track what you've watched, and build your own movie universe.

                                    <br />
                                    5. Admin Panel
                                    Manage content, users, and updates with ease. The admin dashboard gives full control over the platform’s backend—perfect for scaling and customization.


                                    </p>
                            {/* button */}
                            <div className="flex mt-3">
                                <button className='ml-10 bg-red-600 hover:bg-red-800 w-20 h-10 rounded'><a className='font-bold' href="https://github.com/RezaN97/Chill-Movie/tree/study">Github</a></button>
                                <button className='ml-10 bg-red-600 hover:bg-red-800 w-20 h-10 rounded'><a className='font-bold' href="https://chill-movie-six.vercel.app/">Visit</a></button>

                            </div>
                        </div>
                    </div>
              </div>


        </div>
        


        
        </>
    )
}