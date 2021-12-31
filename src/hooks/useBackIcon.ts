import { useNavigation } from '@react-navigation/native';
import { IconTypes } from 'src/components/common/Icon';
import { IONICONS } from 'src/constants';

export default function useBackIcon() {
  const { goBack } = useNavigation();

  const backIcon = {
    type: IONICONS as IconTypes,
    name: 'ios-arrow-back',
    onPressFunction: goBack,
  };
  return backIcon;
}
