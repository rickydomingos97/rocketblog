import styled from "styled-components";
import { App } from '../../../../App';
import { InfoWithIcon } from '../../../../components/InfoWithIcon/index';
import { RegularText, TitleText } from '../typography';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 2rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding-top: 0;

  //width: 16rem;
  //height: 19rem;

  bottom: 2.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  };
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: .25rem .5rem;
    border-radius: 999px;
    font-weight: 700;

  }
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700",
})`
  margin-bottom: .5rem;
  text-align: center;
`

export const Description = styled(RegularText)