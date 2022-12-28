import useForm from './useForm'

export default function FormDisplay() {
  const { data, setData, submit, error, processing, successMsg } = useForm(
    { fname: '', lname: '', email: '' },
    '/api/register'
  )

  const handleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  return (
    <form
      className='p-5 md:p-10 bg-[#7E121D] rounded-md shadow-sm sm:col-span-3 h-fit'
      onSubmit={submit}
    >
      <div className='flex flex-col md:flex-row md:gap-6'>
        {error && (
          <div className='flex gap-4 justify-center items-center'>
            <span className='text-base lg:text-lg xl:text-xl font-medium text-[#CEAC5C] block my-2'>
              {error}
            </span>
          </div>
        )}
        {successMsg && (
          <div className='flex gap-4 justify-center items-center'>
            <span className='text-base lg:text-lg xl:text-xl font-medium text-[#034F1B] block my-2'>
              {successMsg}
            </span>
          </div>
        )}
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
            value={data.fname}
            className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
            autoComplete='fname'
            onChange={handleChange}
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
            value={data.lname}
            className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
            autoComplete='lname'
            onChange={handleChange}
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
          value={data.email}
          className='p-1 lg:p-2 text-semibold text-base xl:text-lg text-gray-900 w-full rounded-md focus:outline-none'
          autoComplete='email'
          onChange={handleChange}
          required
        />
      </div>
      <div className='mt-4 flex justify-end'>
        <button
          type='submit'
          className='border-2 border-[#CEAC5C] text-[#CEAC5C] text-base xl:text-lg font-semibold leading-none py-1 xl:py-2 px-3 xl:px-6 shadow-sm rounded-md'
          disabled={processing}
        >
          ENLIST NOW
        </button>
      </div>
    </form>
  )
}
