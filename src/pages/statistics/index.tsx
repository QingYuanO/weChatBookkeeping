import { Text, View } from '@tarojs/components';
import { useReachBottom } from '@tarojs/taro';

import './index.sass';

export default function StatisticsPage() {
  useReachBottom(() => {
    console.log('bottom');
  });
  return (
    <View>
      <Text>StatisticsPage</Text>
    </View>
  );
}
