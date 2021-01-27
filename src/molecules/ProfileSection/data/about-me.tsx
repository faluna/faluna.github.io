import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { ProfileSectionProps } from '..';

const name = '熊澤 隼斗';

const introduction = `
高専時に複素関数を用いた２次元電流分布の解析，大学及び大学院ではエネルギーハーベスティング(RF-EH)を組み込んだ通信システムの数理解析の研究を行い，現在はメールシステムの運用・保守の業務に携わっています．
研究では数学を用いた理論的な解析を，業務ではハードウェアからソフトウェアまで幅広い範囲を経験しています．
個人活動としては，競技プログラミング，webアプリ制作(新潟のテイクアウト&デリバリー店舗検索アプリ: togoo!)があります．
`;

const Content: React.FC<TextProps> = () => {
  return (
    <Text whiteSpace={['pre-wrap']} p={['1rem']} overflowWrap={['break-word']} wordBreak={['break-word']}>
      {introduction}
    </Text>
  );
};

export const aboutMeData: ProfileSectionProps = {
  sectionHeader: name,
  sectionContent: <Content />,
};

export default aboutMeData;
