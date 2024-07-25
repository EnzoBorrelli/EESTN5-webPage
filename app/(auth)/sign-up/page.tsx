import SignUpForm from '@/components/form/SignUpForm';

const page = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center px-10 md:px-20 py-10'>
      <SignUpForm />
    </div>
  );
};

export default page;