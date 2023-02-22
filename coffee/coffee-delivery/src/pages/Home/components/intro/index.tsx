import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";

import introImg from '../../../../assets/cafeImg.svg'
import { RegularText } from "../typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  //Hook
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Найдите идеальный кофе в любое время дня
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              С Доставка
              кофе вы получаете свой кофе, где бы вы ни находились, в любое время
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Простая и легкая покупка"
              size={48}
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="безопасная упаковка"
              size={48}
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="быстрая доставка"
              size={48}
            />
            <InfoWithIcon 
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill"/>}
              text="Кофе приходит к вам свежим"
              size={48}
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />

      </IntroContent>
    </IntroContainer>
  )
}