interface TikTokIconProps {
  className?: string;
}

const TikTokIcon = ({ className }: TikTokIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75v-3.5a6.33 6.33 0 1 0 5.45 6.25V8.73a8.2 8.2 0 0 0 4.77 1.52V6.82c-.34 0-.67-.04-1-.13Z" />
  </svg>
);

export default TikTokIcon;
