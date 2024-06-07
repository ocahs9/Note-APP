//flex와 관련된 css 묶음 정의
import { css } from "styled-components";

//이렇게 한번에 css묶음을 정의해두어서, 편하게 사용할 수 있구나!
const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexColcCenterStart = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

//그리고 이렇게, 한번에 내보낼 수 있다! (꼭 export를 매번 안써주고도)
export { flexCenter, flexCenterBetween, flexColcCenterStart };
