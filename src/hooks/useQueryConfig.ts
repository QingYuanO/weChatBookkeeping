import { onlineManager, focusManager } from '@tanstack/react-query';
import Taro, { useDidShow, useDidHide } from '@tarojs/taro';
import { useEffect } from 'react';

export default function useQueryConfig() {
  useEffect(() => {
    //从无网络状态变为有网络时react-query自动重新发起请求
    function onlineChange(res) {
      if (onlineManager.isOnline() === res.isConnected) return;
      onlineManager.setOnline(res.isConnected);
    }
    Taro.onNetworkStatusChange(onlineChange);
    return () => {
      Taro.offNetworkStatusChange(onlineChange);
    };
  }, []);

  useDidShow(() => {
    focusManager.setFocused(true);
  });
  useDidHide(() => {
    focusManager.setFocused(false);
  });
}
