import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import GitHubIconButton from '../../molecules/GitHubIconButton';
import TwitterIconButton from '../../molecules/TwitterIconButton';
import BlogButton from '../../molecules/BlogButton';
import ProfileButton from '../../molecules/ProfileButton';

export type IIconGridListProps = {
  width: string;
  height: string;
  margin: string;
  className?: string;
};

const StyledGridContainer = styled(Grid)((props: IIconGridListProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  padding: 'auto',
}));

const StyledGridItem = styled(Grid)({
  padding: '0px',
  height: '100%',
});

type IIconList = typeof GitHubIconButton[];

const iconList: IIconList = [GitHubIconButton, ProfileButton, BlogButton, TwitterIconButton];

export const IconGridList: React.FC<IIconGridListProps> = (props) => {
  return (
    <StyledGridContainer container justify="center" spacing={1} {...props}>
      {iconList.map((Value, index) => (
        <StyledGridItem key={index} item xs={3}>
          <Value />
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

export default IconGridList;
