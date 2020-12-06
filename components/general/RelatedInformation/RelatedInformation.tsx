import styles from "./RelatedInformation.module.css";
import { ColorTheme, RelatedCard } from "../RelatedCard/RelatedCard";

export enum RelatedCardType {
  LAW,
  USER,
  ROLE,
  TOOLS,
  CHECKLIST,
}

interface Props {
  relatedCardTypes: Array<RelatedCardType>;
}

const getRelatedCard = (relatedCardType: RelatedCardType) => {
  switch (relatedCardType) {
    case RelatedCardType.LAW:
      return (
        <RelatedCard icon="🖋" linkText="About the law" url="/about-the-law" colorTheme={ColorTheme.COLOR1} />
      );
    case RelatedCardType.USER:
      return (
        <RelatedCard
          icon="👩‍🦼"
          linkText="Understanding the user"
          url="/understanding-the-user"
          colorTheme={ColorTheme.COLOR2}
        />
      );
    case RelatedCardType.ROLE:
      return (
        <RelatedCard
          icon="🎖"
          linkText="Your role and responsibility"
          url="/roles-and-responsibility"
          colorTheme={ColorTheme.COLOR3}
        />
      );
    case RelatedCardType.TOOLS:
      return (
        <RelatedCard icon="📐" linkText="Helpful tools" url="/helpful-tools" colorTheme={ColorTheme.COLOR4} />
      );
    case RelatedCardType.CHECKLIST:
      return (
        <RelatedCard
          icon="✔"
          linkText="Accessibility checklist"
          url="/checklist"
          colorTheme={ColorTheme.COLOR5}
        />
      );
    default:
      return null;
  }
};

export const RelatedInformation = (props: Props) => {
  const { relatedCardTypes } = props;

  return (
    <>
      <div className={styles.relatedinfo}>
        <h2>Related information</h2>
        <div className={styles.container}>
          {relatedCardTypes.map((relatedCard: RelatedCardType) => {
            return getRelatedCard(relatedCard);
          })}
        </div>
      </div>

      {/* <div className={"wrapper related-info"}>
        <h2>Related information</h2>
        <div className={"flex-row margin-bottom-3x"}>
          <RelatedCard
            icon="🖋"
            linkText="About the law"
            url="/about-the-law"
            colorTheme={ColorTheme.COLOR1}
          />
          <RelatedCard
            icon="👩‍🦼"
            linkText="Understanding the user"
            url="/understanding-the-user"
            colorTheme={ColorTheme.COLOR2}
          />
        </div>
        <div className={"flex-row"}>
          <RelatedCard
            icon="🎖"
            linkText="Your role and responsibility"
            url="/roles-and-responsibility"
            colorTheme={ColorTheme.COLOR3}
          />
          <RelatedCard
            icon="📐"
            linkText="Helpful tools"
            url="/helpful-tools"
            colorTheme={ColorTheme.COLOR4}
          />
        </div>
      </div> */}
    </>
  );
};
