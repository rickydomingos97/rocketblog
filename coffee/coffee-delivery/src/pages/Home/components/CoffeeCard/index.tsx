import { CoffeeCardContainer, Name, Tags } from "./styles";


export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1678060800&Signature=BIDj08EoJk7Nmsl2fhP~-nRhX-geLc6Eg5PVfd7hjYgicNyH6QspHsYokfDGgsuWcVjL2QARmLIdlJmI8cTcazmfSCRtiBFJuV9v9cUy3do6YT22~lfOIT7San0hLS2ssdeBXKw9pNrm7cqviunRirI-brbsCAdjQwQ3Ng3AFXL1Qi9KoasxpLWUmuTL5en18dI70AtGxlf5Xm3UEFJN2W1lcXpMPA37D4mX4BYt7PRpo0YrpeDv0QMFtdHB5UWuVNwDGoRYEVnpAhOHjUTpyz1ahlJPoaDSF0-jGxORPm9Dq7LjrCjkH5GAwNKTDA~5sCbblDtxNqfdbSrehdSjJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

      <Tags>
        <span>Традиционный</span>
        <span>молочный</span>
      </Tags>
      <Name>
      Традиционный экспресс
      </Name>
    </CoffeeCardContainer>
  )
}