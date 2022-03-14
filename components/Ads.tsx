export const Ads = ({
  image,
  url,
  name,
}: {
  image?: string;
  url: string;
  name: string;
}) => (
  <a target="_blank" href={url} rel="noreferrer">
    <img height="100%" width="100%" src={image} alt={name} title={name} />
  </a>
);
