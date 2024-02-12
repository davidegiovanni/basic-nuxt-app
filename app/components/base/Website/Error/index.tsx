import Description from "~/components/core/Description";
import WebsiteLink from "~/components/core/Link";
import Title from "~/components/core/Title";
import A11ySetup from "~/services/template/a11y-setup";

export type ErrorProps = {
  title: string;
  description: string;
  linkTitle: string;
  linkUrl: string;
}

export default function Error({ title, description, linkTitle, linkUrl }: ErrorProps) {
  const A11Y_VARIABLES = {
    textBaseUnit: 0.155, 
    textLineBaseUnit: 0.155, 
    spacingBaseUnit: 0.155
  }

  return (
    <div className="w-full h-full p-4 aspect-video flex flex-col items-center justify-center gap-4 lg:gap-8">
      <A11ySetup {...A11Y_VARIABLES}>
        {title !== "" && <Title size="1" className="text-sm uppercase">
          {title}
        </Title>}
        {description !== "" && <Description size="2" className="text-sm uppercase">
          {description}
        </Description>}
        {linkUrl !== "" && <WebsiteLink url={linkUrl} metadata={{}} className="uppercase underline text-sm underline-offset-2 decoration-dotted">
          {linkTitle}
        </WebsiteLink>}
      </A11ySetup>
    </div>
  )
}