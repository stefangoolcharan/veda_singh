import '../app/css/quote.css';


const Quote = () => {
    return (
        <div className='bg-[#F2FCF8]'>

            <div className=' pt-24 pb-48 lg:flex justify-evenly flex-col md:flex-row items-center'>
                <div data-scroll data-scroll-speed="0.2" className='quote-bx max-w-50 px-10 lg:px-10'>
                    <h1 className='text-[#942121] font-semibold text-left text-5xl sm:text-5xl md:text-5xl lg:text-7xl pb-6 quote'>Meraki</h1>
                    <p className=' quote1 font-medium leding-[12vh] sm:leading-[10vh] md:leading-[11vh] lg:leading-[13vh] text-xl sm:text-2xl md:text-2xl lg:text-3xl '>{"["} may-raah-kee {"]"}</p>
                    <p className=' quote1 font-medium leading-[6vh] sm:leading-[5vh] lg:leading-[8vh] text-xl sm:text-2xl md:text-2xl lg:text-3xl '>{"("}n.{")"} to put something of your self into your work.</p>
                    <p className=' quote1 font-semibold pt-6 quote2 text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Soul. Creativity. Love</p>
                </div>
                <div>
                    <p className='text-black text-right quote2 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold '>• Greek</p>
                </div>
            </div>
        </div>
    )
}

export default Quote