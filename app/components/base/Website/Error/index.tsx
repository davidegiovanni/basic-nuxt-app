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
      <A11ySetup {...A11Y_VARIABLES} />
      {title !== "" && <Title size="1" className="text-2xl font-bold">
        {title}
      </Title>}
      {description !== "" && <Description size="2" className="text-sm text-revas-neutral-500">
        {description}
      </Description>}
      {linkUrl !== "" && <WebsiteLink url={linkUrl} metadata={{}} className="underline text-base">
        {linkTitle}
      </WebsiteLink>}
    </div>
  )
}