import { Text, View } from '@tarojs/components';
import { useReachBottom } from '@tarojs/taro';

import './index.scss';

export default function SetupPage() {
  useReachBottom(() => {
    console.log('bottom');
  });
  return (
    <View>
      <Text>SetupPage</Text>
    </View>
  );
}
