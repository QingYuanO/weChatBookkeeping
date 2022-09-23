import { View } from '@tarojs/components';
import './index.less';
import { getNavBarHeight } from './helper';
import { Footer, Navbar } from './components';
import { ContainerProps } from './types';

function Container(props: ContainerProps) {
  const {
    children,
    hasNavBarTop = true,
    hasFooterBottom = true,
    ...otherViewProps
  } = props;

  const navBarHeight = getNavBarHeight();


  return (
    <View {...otherViewProps}>
     
    </View>
  );
}


export default Container ;

export { Navbar, Footer };
