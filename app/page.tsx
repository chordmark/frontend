import Features from '@/components/Features';
import Suggest from '@/components/Suggest';

export default function App() {
  return (
    <>
      <div className='my-[60px]'>
        <Suggest />
      </div>
      <div className='my-[60px]'>
        <Features />
      </div>
    </>
  );
}
