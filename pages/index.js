import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsPinterest,
} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div className='fixed backdrop-blur-sm w-full'>
        <div className='p-5 top-0 flex justify-between items-center w-full'>
          <div>
            <span className='text-[#CAEC5C] text-lg font-bold'>DIGIMAS</span>
          </div>
          <div>
            <button className='bg-[#7E121D] text-white text-base xl:text-lg font-semibold leading-none py-2 px-4 xl:px-6 shadow-sm rounded-md'>
              ENLIST NOW
            </button>
          </div>
        </div>
      </div>
      <div className="h-[30rem] lg:h-[40rem] w-full bg-[url('/imgs/christmas-side-tree.jpg')] bg-no-repeat bg-cover bg-right-bottom">
        <div className='bg-[rgba(126,18,29,0.5)] h-full w-full'>
          <div className='h-full flex flex-col mx-auto w-[70%] bg-transparent justify-center items-center'>
            <span className='text-6xl lg:text-8xl font-bold text-[#CAEC5C] leading-tight text-center'>
              Experience Holidays Digitally
            </span>
            <span className='text-4xl lg:text-6xl font-extralight text-[#CAEC5C] leading-tight text-center'>
              with your loved ones
            </span>
          </div>
        </div>
      </div>
      <div className='bg-[#E6DCB1]'>
        <div className='flex flex-col gap-1 w-[85%] sm:w-[80%] mx-auto py-24'>
          <span className='w-fit mx-auto text-gray-500 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium sm:font-semibold'>
            Vivamus pharetra in leo et tempus
          </span>
          <span className='w-fit mx-auto text-gray-500 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium sm:font-semibold'>
            Duis in porttitor nisl. Proin eget quam ipsum.
          </span>
          <span className='w-fit mx-auto text-[#7E121D] text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-center'>
            Duis elit ex, pellentesque iaculis nulla in, sagittis
          </span>
          <span className='w-fit mx-auto text-gray-500 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium sm:font-semibold'>
            Phasellus mattis vulputate nisl sit amet rhoncus
          </span>
          <span className='w-fit mx-auto text-gray-500 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium sm:font-semibold'>
            Quisque non pretium mauris
          </span>
        </div>
      </div>
      <div className='bg-white'>
        <div className='w-[90%] sm:[80%] mx-auto'>
          <div className='flex flex-col justify-center items-center pt-20'>
            <span className='text-gray-500 text-center text-sm lg:text-xl font-normal sm:font-medium xl:text-2xl'>
              Duis in porttitor nisl. Proin eget quam ipsum. Pellentesque
              malesuada vel ipsum ac malesuada.
            </span>
            <span className='text-[#7E121D] text-center text-base sm:text-lg lg:text-2xl xl:text-3xl font-semibold sm:font-bold'>
              pellentesque iaculis nulla in, sagittis venenatis libero
            </span>
          </div>
          <div className='flex flex-col md:flex-row gap-20 justify-center items-center w-[85%] sm:w-[80%] max-w-[85rem] mx-auto pt-12 pb-20'>
            <div className='p-2'>
              <img src='/imgs/buy-gifts.jpg' alt='quality' />
              <div className='mt-4'>
                <span className='lg:text-xl xl:text-2xl font-bold text-[#7E121D] text-center block'>
                  Buy a gift
                </span>
                <span className='block lg:text-lg xl:text-xl text-gray-600 font-medium text-center'>
                  Vivamus pharetra in leo et tempus
                </span>
              </div>
            </div>
            <div className='p-2'>
              <img src='/imgs/send-gifts.jpg' alt='quality' />
              <div className='mt-4'>
                <span className='lg:text-xl xl:text-2xl font-bold text-[#7E121D] text-center block'>
                  Send a gift
                </span>
                <span className='block lg:text-lg xl:text-xl text-gray-600 font-medium text-center'>
                  Duis in porttitor nisl. Proin eget quam ipsum.
                </span>
              </div>
            </div>
            <div className='p-2'>
              <img src='/imgs/share-gifts.jpg' alt='quality' />
              <div className='mt-4'>
                <span className='lg:text-xl xl:text-2xl font-bold text-[#7E121D] text-center block'>
                  Share a gift
                </span>
                <span className='block lg:text-lg xl:text-xl text-gray-600 font-medium text-center'>
                  Duis elit ex, pellentesque iaculis nulla in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#E6DCB1] h-fit w-full'>
        <div className='w-[85%] sm:w-[80%] max-w-[85rem] mx-auto flex flex-col'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-9 bg-transparent'>
            <div className='lg:col-span-2'>
              <span className='text-gray-900 text-xl xl:text-3xl font-bold mt-6 xl:mt-9 mb-3 xl:mb-6 block'>
                Vivamus pharetra in leo et tempus. Duis in porttitor nisl. Proin
                eget quam ipsum. Pellentesque malesuada vel ipsum ac malesuada.
              </span>
              <span className='text-gray-600 text-base xl:text-lg font-medium block my-1 xl:my-3'>
                Proin ante ligula, ornare commodo enim at, laoreet consectetur
                nisl. Donec accumsan eros bibendum diam aliquam
              </span>
              <div className='mb-6 xl:mb-9'>
                <button className='bg-[#7E121D] text-white text-base xl:text-lg font-semibold leading-none py-1 xl:py-2 px-3 xl:px-6 shadow-sm rounded-md'>
                  ENLIST NOW
                </button>
              </div>
            </div>
            <img
              className='lg:col-span-3'
              src='/imgs/togetherness.jpg'
              alt='togetherness'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-9 bg-transparent'>
            <img
              className='lg:col-span-3'
              src='/imgs/group-peers.jpg'
              alt='group-peers'
            />
            <div className='lg:col-span-2'>
              <span className='text-gray-600 text-base xl:text-lg font-medium block mt-6 mb-1'>
                Vivamus pharetra in leo et tempus. Duis in porttitor nisl. Proin
                eget quam ipsum. Pellentesque malesuada vel ipsum
              </span>
              <span className='text-gray-600 text-base xl:text-lg font-medium block mt-1 mb-6'>
                Duis elit ex, pellentesque iaculis nulla in, sagittis venenatis
                libero
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit sm:h-[30rem] w-full bg-[url('/imgs/christmas-tree.jpg')] bg-no-repeat bg-cover bg-right-bottom">
        <div className='bg-[rgba(3,79,27,0.4)] h-full w-full'>
          <div className='w-[85%] sm:w-[80%] max-w-[85rem] h-full mx-auto py-10 grid grid-cols-dense sm:grid-cols-5 gap-5 sm:gap-10 md:place-items-center place-content-center'>
            <div className='sm:col-span-2 sm:flex sm:flex-col sm:justify-center sm:h-full sm:w-full flex-none lg:flex-none w-auto lg:w-auto '>
              <span className='block text-3xl lg:text-4xl xl:text-5xl font-bold text-[#CEAC5C] capitalize mt-2 mb-3'>
                consequat tellus sit amet tortor ullamcorper suscipit
              </span>
              <span className='block text-xl lg:text-2xl xl:text-3xl font-extralight text-[#E6DCB1] mb-2 mt-3'>
                ENLIST NOW!
              </span>
            </div>
            <form className='p-5 md:p-10 bg-[#7E121D] rounded-md shadow-sm sm:col-span-3 h-fit'>
              <div className='flex flex-col md:flex-row md:gap-6'>
                <div className='lg:my-2 xl:my-4 flex-grow'>
                  <label
                    htmlFor='fname'
                    className='text-base lg:text-lg xl:text-xl font-medium text-[#CEAC5C] block my-2'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='fname'
                    name='fname'
                    className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
                    autoComplete='fname'
                    required
                  />
                </div>
                <div className='lg:my-2 xl:my-4 flex-grow'>
                  <label
                    htmlFor='lname'
                    className='text-base lg:text-lg xl:text-xl font-medium text-[#CEAC5C] block my-2'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lname'
                    name='lname'
                    className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
                    autoComplete='lname'
                    required
                  />
                </div>
              </div>
              <div className='lg:my-2'>
                <label
                  htmlFor='email'
                  className='text-base lg:text-lg xl:text-xl font-medium text-[#CEAC5C] block my-2'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
                  autoComplete='email'
                  required
                />
              </div>
              <div className='mt-4 flex justify-end'>
                <button className='border-2 border-[#CEAC5C] text-[#CEAC5C] text-base xl:text-lg font-semibold leading-none py-1 xl:py-2 px-3 xl:px-6 shadow-sm rounded-md'>
                  ENLIST NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className='bg-[#034F1B]'>
        <div className='bg-[rgba(0,0,0,0.7)]'>
          <div className='w-[85%] sm:w-[80%] max-w-[85rem] mx-auto bg-transparent h-fit'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
              <div>
                <span className='block lg:text-xl xl:text-2xl text-[#7E121D] font-bold my-5'>
                  Nam venenatis augue sit amet ex interdum
                </span>
                <span className='block lg:text-base xl:text-lg font-medium text-gray-400 my-5'>
                  Curabitur vel neque purus. Phasellus mattis ipsum ut erat
                  malesuada, sed aliquet nisl fermentum. Vestibulum felis ante,
                  pellentesque quis leo quis, imperdiet accumsan ipsum
                </span>
                <span className='block lg:text-base xl:text-lg font-medium text-gray-700 my-5'>
                  Sed sed mi ac nunc porttitor maximus ut in felis
                </span>
              </div>
              <div className='flex gap-6 justify-between lg:justify-evenly'>
                <div className='mt-5'>
                  <span className='block lg:text-lg xl:text-xl text-[#7E121D] font-semibold mb-5'>
                    Nam maximus
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Duis elit ex
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Nam vehicula
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Vestibulum
                  </span>
                </div>
                <div className='mt-5'>
                  <span className='block lg:text-lg xl:text-xl text-[#7E121D] font-semibold mb-5'>
                    Nam augue
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Curabitur vel
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Sed sagittis
                  </span>
                </div>
                <div className='mt-5'>
                  <span className='block lg:text-lg xl:text-xl text-[#7E121D] font-semibold mb-5'>
                    Nam viverra
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Morbi ornare
                  </span>
                  <span className='block lg:text-base xl:text-lg font-medium text-gray-400'>
                    Sed placerat
                  </span>
                </div>
              </div>
              <div>
                <span className='block lg:text-lg xl:text-xl text-[#7E121D] font-semibold mt-5 mb-2'>
                  Sign up to our newsletter
                </span>
                <div className='flex'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    className='p-2 lg:p-1 font-semibold text-base sm:text-lg lg:text-base xl:text-lg text-gray-900 w-full rounded-l-md focus:outline-none flex-grow'
                    placeholder='Email'
                    autoComplete='email'
                    required
                  />
                  <button className='bg-[#7E121D] text-white text-base sm:text-lg lg:text-base xl:text-lg font-semibold leading-none py-1 text-center shadow-sm rounded-r-md w-[40%] uppercase'>
                    sign up
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className='border-t border-t-gray-400 px-10 py-5 w-fit mx-auto mt-10 flex gap-10 justify-center'>
                <BsFacebook className='text-gray-400 text-xl' />
                <BsInstagram className='text-gray-400 text-xl' />
                <BsWhatsapp className='text-gray-400 text-xl' />
                <BsPinterest className='text-gray-400 text-xl' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
