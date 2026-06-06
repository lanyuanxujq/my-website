import { User } from 'lucide-react';

interface AuthorPhotoProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AuthorPhoto({ src, alt, size = 'lg' }: AuthorPhotoProps) {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-56 h-56',
    lg: 'w-72 h-72 md:w-80 md:h-80',
  };

  const containerSizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-56 h-56',
    lg: 'w-72 h-72 md:w-80 md:h-80',
  };

  return (
    <div className={`${containerSizeClasses[size]} relative`}>
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-pulse opacity-75"></div>

      {/* Photo container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '';
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}

        {/* Placeholder */}
        {!src && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <User className="w-1/2 h-1/2 text-white/60" strokeWidth={1.5} />
          </div>
        )}
      </div>
    </div>
  );
}
