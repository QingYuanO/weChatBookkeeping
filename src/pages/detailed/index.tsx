import Count from '@/components/Count';
import TaroLogo from '@/components/TaroLogo';
import { Button, View } from '@tarojs/components';
import './index.sass';



const DetailedPage = () => {
  return (
    <View className='index flex flex-col items-center justify-center py-[50px]'>
      <TaroLogo />
      <Count />
      <Button
        type='primary'
        className='mt-[50px]'
        onClick={() => {
        }}
      >
        toContainerPage
      </Button>
    </View>
  );
};

export default DetailedPage;
