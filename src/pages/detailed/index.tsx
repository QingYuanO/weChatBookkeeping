import Count from '@/components/Count';
import TaroLogo from '@/components/TaroLogo';
import { Button, View } from '@tarojs/components';
import './index.scss';



const DetailedPage = () => {
  return (
    <View className='index'>
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
