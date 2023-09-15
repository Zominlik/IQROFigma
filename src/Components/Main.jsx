import HeroSection from './HeroSection'
import Services from './Services'
import Button from './Button'
import Titles from './Titles'
import Benefits from './Benefits'
import About from './About'
import Testimonial from './Testimonial'
import IQROLogo from './IQROLogo'


const Main = () => {
    return (
        <main className='flex flex-col justify-center items-center xs:px-[4.875rem] xl:px-[5rem] xxl:px-[7rem]'>
            <HeroSection />
            <div id='services' className="mainServicesWrapper flex flex-col items-center">
                <Titles heading='Услуги' />
                <div className="cardWrapper        xs:flex xs:flex-col xs:px-[2rem] xs:gap-[2rem]         sm:flex sm:flex-col sm:px-[2rem] sm:gap-[2rem]            md:flex md:px-[2rem] md:gap-[2rem]            lg:grid lg:grid-cols-3  lg:gap-[2rem]             xl:grid xl:grid-cols-3  xl:gap-[3rem]   xxl:grid xxl:grid-cols-3  xxl:gap-[4rem]">
                    <div className='xs:flex xs:flex-col xs:gap-[2rem] sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[3rem]'>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[1.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl            md:max-w-[14.8309rem] md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='Разработка сайтов' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[1.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl             md:max-w-[14.8309rem] md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='Мобильные приложения' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                    </div>
                    <div className='xs:flex xs:flex-col xs:gap-[2rem] sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[3rem]'>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl            md:max-w-[14.8309rem] md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='Маркетинг продвижение' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl             md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='SMM-продвижение' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                    </div>
                    <div className='xs:flex xs:flex-col xs:gap-[2rem] sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[3rem]'>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl             md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='SEO - оптимизация' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                        <div className="servicesBo min-h-[11.5rem] flex flex-col justify-between p-[1.5rem] items-start           xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:border sm:border-green-400 sm:min-w-[18.5rem] sm:p-[3.8125rem] rounded-3xl            md:max-w-[14.8309rem] md:flex md:border rounded-3xl md:border-green-400           lg:max-w-[16.8309rem] lg:min-h-[14.167rem] lg:p-[3rem] lg:border rounded-3xl lg:border-green-400              xl:min-w-[18.8309rem] xl:min-h-[14.167rem] xl:p-[3rem] xl:border rounded-3xl xl:border-green-400            xxl:min-w-[20.8309rem] xxl:min-h-[16.167rem] xxl:p-[3rem] xxl:md:flex xxl:border rounded-3xl xxl:border-green-400">
                            <Services titleText='Брендинг и айдентика' />
                            <Button btnType='submit' className='py-[1.25rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000] bg-[#fff] max-w-[13.125rem]'>
                                подробнее
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Benefits />
            <About />
            <Testimonial />
        </main>
    )
}

export default Main