
type IconProps = { className?: string };

export function BookIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 41 46" fill="none" aria-hidden="true">
      <path
        d="M40.5 32.3438V2.15625C40.5 0.961328 39.5446 0 38.3571 0H9.07143C4.33929 0 0.5 3.86328 0.5 8.625V37.375C0.5 42.1367 4.33929 46 9.07143 46H38.3571C39.5446 46 40.5 45.0387 40.5 43.8438V42.4062C40.5 41.7324 40.1875 41.1215 39.7054 40.7262C39.3304 39.3426 39.3304 35.3984 39.7054 34.0148C40.1875 33.6285 40.5 33.0176 40.5 32.3438ZM11.9286 12.0391C11.9286 11.7426 12.1696 11.5 12.4643 11.5H31.3929C31.6875 11.5 31.9286 11.7426 31.9286 12.0391V13.8359C31.9286 14.1324 31.6875 14.375 31.3929 14.375H12.4643C12.1696 14.375 11.9286 14.1324 11.9286 13.8359V12.0391ZM11.9286 17.7891C11.9286 17.4926 12.1696 17.25 12.4643 17.25H31.3929C31.6875 17.25 31.9286 17.4926 31.9286 17.7891V19.5859C31.9286 19.8824 31.6875 20.125 31.3929 20.125H12.4643C12.1696 20.125 11.9286 19.8824 11.9286 19.5859V17.7891ZM34.5536 40.25H9.07143C7.49107 40.25 6.21429 38.9652 6.21429 37.375C6.21429 35.7938 7.5 34.5 9.07143 34.5H34.5536C34.3839 36.0363 34.3839 38.7137 34.5536 40.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GraduationIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 36" fill="none" aria-hidden="true">
      <path
        d="M24 0L0 12L24 24L48 12L24 0ZM4.8 16.8V24.6C4.8 28.92 13.68 32.4 24 32.4C34.32 32.4 43.2 28.92 43.2 24.6V16.8L24 27.6L4.8 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BuildingIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M5 38V14L20 6L35 14V38H25V24H15V38H5ZM9 34H11V20H29V34H31V16L20 10L9 16V34Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CommunityIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <path
        d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16ZM32 16C35.3137 16 38 13.3137 38 10C38 6.68629 35.3137 4 32 4C28.6863 4 26 6.68629 26 10C26 13.3137 28.6863 16 32 16ZM0 28V26C0 21.5817 8.95431 18 16 18C23.0457 18 32 21.5817 32 26V28H0ZM32 26.2C32 22.12 38.56 20 42 20C45.44 20 48 21.08 48 22.4V28H32V26.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function LocationIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

const FEATURE_ICON_MAP = {
  book: BookIcon,
  graduation: GraduationIcon,
  building: BuildingIcon,
  community: CommunityIcon,
} as const;

export function FeatureIcon({
  name,
  className,
}: {
  name: keyof typeof FEATURE_ICON_MAP;
  className?: string;
}) {
  const Icon = FEATURE_ICON_MAP[name];
  return <Icon className={className ?? "h-10 w-10 text-bits-green"} />;
}
