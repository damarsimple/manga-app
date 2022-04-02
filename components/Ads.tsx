/* eslint-disable @next/next/no-img-element */

export const Ads = ({
  image,
  url,
  name,
}: {
  image?: string | null
  url?: string | null
  name?: string | null
}) => (
  <a target="_blank" href={url?? ""} rel="noreferrer">
    <img height="100%" width="100%" src={image??""} alt={name?? ""} title={name??""} />
  </a>
)
