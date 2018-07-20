// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
}: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleStop}>
            <Button>{currentStep.language === 'zh'? '跳过' : 'Skip'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev}>
            <Button>{currentStep.language === 'zh'? '上一步' : 'Previous'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext}>
            <Button>{currentStep.language === 'zh'? '下一步' : 'Next'}</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button>{currentStep.language === 'zh'? '完成' : 'Finish'}</Button>
          </TouchableOpacity>
      }
    </View>
  </View>
);

export default Tooltip;
