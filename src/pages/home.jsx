import Navbar from '../components/navbar'
import Body from '../components/body'
import Footer from '../components/footer'


const Home = () => {
    return (
        <>
        <div className='flex flex-col w-full h-auto'>
            <Navbar/>
            <Body/>
            <Footer/>

        </div>

        </>
    )
}

    export default Home