import React from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';
import { ProfileSectionProps } from '..';

const contentHeader = '現在';
const living = '東京都在住';
const work = '現職の業務：メールシステムの運用・保守';
const programingLanguage = '使用言語：rust, typescript, react, python';
const others = 'その他：競技プログラミング特訓中(rust)';
const list: string[] = [living, work, programingLanguage, others];

const Content: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box px={['1rem']} pt={['2rem']} pb={['1rem']} overflowX="scroll" {...props}>
      {list.map((item) => (
        <Text key={item} sx={{ whiteSpace: 'nowrap', fontSize: '1rem' }}>
          {item}
        </Text>
      ))}
    </Box>
  );
};

export const currentData: ProfileSectionProps = {
  sectionHeader: contentHeader,
  sectionContent: <Content />,
};

export default currentData;
